"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  X,
  RotateCcw,
} from "lucide-react";
import { AIChatMessage, MessageItem } from "./ai-chat-message";
import { AIChatPrompts } from "./ai-chat-prompts";
import { AIChatInput } from "./ai-chat-input";

interface AIChatWindowProps {
  onClose: () => void;
}

const INITIAL_MESSAGE: MessageItem = {
  id: "welcome",
  role: "assistant",
  content: `### 👋 Hey there! I'm Pramod's AI Twin

I'm an interactive digital assistant grounded in Pramod Das's skills, projects, and work experience. 

Feel free to ask me anything about:
- 🚀 **Projects:** 30+ production websites, SaaS apps & freelance builds
- 🛠️ **Tech Stack:** Next.js, React 19, TypeScript, Node.js, PostgreSQL
- 💼 **Experience:** Role at Cosmic Solutions & capabilities
- 📩 **Hire / Contact:** Direct WhatsApp & Email details

*Pick a question below or type your own!*`,
};

export function AIChatWindow({ onClose }: AIChatWindowProps) {
  const [messages, setMessages] = useState<MessageItem[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPrompts, setShowPrompts] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    scrollToBottom("smooth");
  }, [messages, isLoading]);

  const handleSendMessage = async (userText: string) => {
    if (!userText.trim() || isLoading) return;

    const userMessage: MessageItem = {
      id: Date.now().toString(),
      role: "user",
      content: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);
    setShowPrompts(false); // Hide prompts after first interaction

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const assistantMessage: MessageItem = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.content || "I'm having a little trouble right now, but feel free to message Pramod directly on WhatsApp!",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      const errorMessage: MessageItem = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `I ran into an issue connecting to the server. Connect with Pramod directly via [WhatsApp](https://wa.me/918767049312) or [Email](mailto:daspramod479@gmail.com)!`,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
    setShowPrompts(true);
  };

  return (
    <div className="flex flex-col h-140 max-h-[85vh] w-95 sm:w-105 max-w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
      {/* Header */}
      <div className="relative px-4 py-3.5 bg-linear-to-r from-slate-900 via-slate-800 to-blue-950 text-white flex items-center justify-between border-b border-slate-700/60 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-md shrink-0">
            <Image
              src="/ai-bot-avatar.png"
              alt="Pramod's AI Twin"
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-black text-sm text-white tracking-tight leading-none">
                Pramod&apos;s AI Twin
              </h3>
              <span className="px-1.5 py-0.5 rounded-md bg-blue-500/30 border border-blue-400/30 text-[9px] font-bold text-blue-300 uppercase tracking-wider">
                AI
              </span>
            </div>
            <p className="text-[11px] font-medium text-emerald-300 flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Online & Ready to Help
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleReset}
            title="Reset conversation"
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/60 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            title="Close chat"
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/60 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-3.5 overflow-y-auto space-y-2 text-xs sm:text-sm scroll-smooth">
        {messages.map((msg) => (
          <AIChatMessage key={msg.id} message={msg} />
        ))}

        {/* Suggested Starter Chips */}
        {showPrompts && (
          <div className="mt-2">
            <AIChatPrompts
              onSelectPrompt={handleSendMessage}
              disabled={isLoading}
            />
          </div>
        )}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start gap-2.5 my-2">
            <div className="w-7 h-7 rounded-xl overflow-hidden border border-blue-400/40 shrink-0 shadow-2xs">
              <Image
                src="/ai-bot-avatar.png"
                alt="AI Thinking"
                width={28}
                height={28}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white border border-slate-200/90 rounded-2xl rounded-tl-xs px-3.5 py-3 shadow-2xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-bounce" />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Footer Area */}
      <div className="p-3 bg-slate-50/90 border-t border-slate-100 shrink-0">
        {!showPrompts && (
          <div className="mb-2 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setShowPrompts(true)}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              Suggested Questions
            </button>
            <span className="text-[10px] text-slate-400 font-medium">
              Grounded Portfolio AI
            </span>
          </div>
        )}

        <AIChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />

        <div className="mt-2 text-center">
          <p className="text-[10px] font-medium text-slate-400">
            Powered by Google Gemini & Pramod&apos;s Portfolio Knowledge
          </p>
        </div>
      </div>
    </div>
  );
}
