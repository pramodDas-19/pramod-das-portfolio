import { NextRequest, NextResponse } from "next/server";
import { getSystemPrompt } from "@/lib/ai/system-prompt";
import { generateFallbackResponse } from "@/lib/ai/fallback-responder";

export const dynamic = "force-dynamic";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: Message[] = body.messages || [];

    if (!messages.length) {
      return NextResponse.json(
        { error: "No messages provided." },
        { status: 400 }
      );
    }

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || !lastMessage.content || typeof lastMessage.content !== "string") {
      return NextResponse.json(
        { error: "Invalid message format." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // If no API Key is configured yet, use the high-quality local knowledge responder
    if (!apiKey) {
      const responseText = generateFallbackResponse(lastMessage.content);
      return NextResponse.json({
        role: "assistant",
        content: responseText,
        source: "local-grounded",
      });
    }

    // Call Google Gemini API
    try {
      const systemInstruction = getSystemPrompt();

      // Format conversation history for Gemini API
      const contents = messages.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      // Direct Gemini REST call for maximum edge compatibility & streaming support
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;

      const res = await fetch(geminiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemInstruction }],
          },
          contents: contents,
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2500,
          },
        }),
      });

      if (!res.ok) {
        console.warn("Gemini API error, falling back to local responder:", res.status, res.statusText);
        const fallbackText = generateFallbackResponse(lastMessage.content);
        return NextResponse.json({
          role: "assistant",
          content: fallbackText,
          source: "fallback",
        });
      }

      const data = await res.json();
      const generatedText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        generateFallbackResponse(lastMessage.content);

      return NextResponse.json({
        role: "assistant",
        content: generatedText,
        source: "gemini-api",
      });
    } catch (apiError) {
      console.error("Gemini invocation error:", apiError);
      const fallbackText = generateFallbackResponse(lastMessage.content);
      return NextResponse.json({
        role: "assistant",
        content: fallbackText,
        source: "fallback-error",
      });
    }
  } catch (error) {
    console.error("Chat API route error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
