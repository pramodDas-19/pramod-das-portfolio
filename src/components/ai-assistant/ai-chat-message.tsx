"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Check, Copy } from "lucide-react";

export interface MessageItem {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
}

interface AIChatMessageProps {
  message: MessageItem;
}

export function AIChatMessage({ message }: AIChatMessageProps) {
  const isUser = message.role === "user";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  // Basic markdown parser for bold, italic, inline code, links, and bullet points
  const renderFormattedContent = (content: string) => {
    const lines = content.split("\n");

    return lines.map((line, lineIdx) => {
      // Check for headings (###)
      if (line.startsWith("### ")) {
        return (
          <h4 key={lineIdx} className="font-bold text-slate-900 text-sm mt-2 mb-1.5 first:mt-0">
            {parseInline(line.replace("### ", ""))}
          </h4>
        );
      }

      // Check for bullet lists (* or -)
      if (line.trim().startsWith("* ") || line.trim().startsWith("- ")) {
        const itemText = line.trim().replace(/^[\*\-]\s+/, "");
        return (
          <li key={lineIdx} className="ml-4 list-disc text-xs sm:text-[13px] leading-relaxed text-slate-700 my-0.5">
            {parseInline(itemText)}
          </li>
        );
      }

      // Empty line -> spacing
      if (!line.trim()) {
        return <div key={lineIdx} className="h-1.5" />;
      }

      // Normal paragraph
      return (
        <p key={lineIdx} className="text-xs sm:text-[13px] leading-relaxed text-slate-700 my-0.5">
          {parseInline(line)}
        </p>
      );
    });
  };

  // Helper to parse markdown links [text](url), bold **text**, and inline code `code`
  const parseInline = (text: string): React.ReactNode => {
    // Regex matches [text](url), **text**, *text*, `code`
    const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
    const parts = text.split(tokenRegex);

    return parts.map((part, index) => {
      if (!part) return null;

      // Link [text](url)
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const [, linkText, linkUrl] = linkMatch;
        const isWhatsApp = linkUrl.startsWith("https://wa.me");
        const isEmail = linkUrl.startsWith("mailto:");
        const isGitHub = linkUrl.includes("github.com");
        const isLinkedIn = linkUrl.includes("linkedin.com");
        const isExternal =
          linkUrl.startsWith("http") ||
          linkUrl.startsWith("mailto:") ||
          linkUrl.startsWith("https://wa.me");

        if (isWhatsApp) {
          return (
            <a
              key={index}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mx-1 px-2.5 py-1 rounded-xl bg-emerald-50 border border-emerald-300/80 text-emerald-800 hover:bg-emerald-100 font-bold text-xs transition-all shadow-2xs no-underline hover:scale-105 active:scale-95"
            >
              <span>💬</span>
              <span>{linkText.replace(/^Chat on\s+/i, "")}</span>
            </a>
          );
        }

        if (isEmail) {
          return (
            <a
              key={index}
              href={linkUrl}
              className="inline-flex items-center gap-1 mx-1 px-2.5 py-1 rounded-xl bg-blue-50 border border-blue-300/80 text-blue-800 hover:bg-blue-100 font-bold text-xs transition-all shadow-2xs no-underline hover:scale-105 active:scale-95"
            >
              <span>✉️</span>
              <span>{linkText.replace(/^Email at\s+/i, "")}</span>
            </a>
          );
        }

        if (isGitHub || isLinkedIn) {
          return (
            <a
              key={index}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mx-1 px-2.5 py-1 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 hover:bg-slate-200 font-bold text-xs transition-all shadow-2xs no-underline hover:scale-105 active:scale-95"
            >
              <span>{isGitHub ? "🐙" : "💼"}</span>
              <span>{linkText}</span>
            </a>
          );
        }

        return (
          <a
            key={index}
            href={linkUrl}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2 hover:opacity-80 transition-colors"
          >
            {linkText}
          </a>
        );
      }

      // Bold **text** (handles cases where text inside bold may contain formatting)
      if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
        const innerText = part.slice(2, -2);
        return (
          <strong key={index} className="font-bold text-slate-900">
            {innerText}
          </strong>
        );
      }

      // Italic *text*
      if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
        return (
          <em key={index} className="italic text-slate-800">
            {part.slice(1, -1)}
          </em>
        );
      }

      // Inline code `code`
      if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
        return (
          <code
            key={index}
            className="px-1.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 font-mono text-[11px] text-blue-700 font-semibold"
          >
            {part.slice(1, -1)}
          </code>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div
      className={`flex items-start gap-2.5 my-2.5 ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Avatar */}
      <div
        className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 shadow-2xs overflow-hidden ${
          isUser
            ? "bg-blue-600 text-white"
            : "border border-blue-400/40 bg-slate-900"
        }`}
      >
        {isUser ? (
          <User className="w-3.5 h-3.5" />
        ) : (
          <Image
            src="/ai-bot-avatar.png"
            alt="AI Avatar"
            width={28}
            height={28}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Message Bubble */}
      <div className={`relative max-w-[85%] group ${isUser ? "items-end" : "items-start"}`}>
        <div
          className={`rounded-2xl px-3.5 py-2.5 shadow-2xs text-left ${
            isUser
              ? "bg-blue-600 text-white font-medium text-xs sm:text-[13px] rounded-tr-xs"
              : "bg-white border border-slate-200/90 text-slate-800 rounded-tl-xs"
          }`}
        >
          {isUser ? (
            <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
          ) : (
            <div className="space-y-1">{renderFormattedContent(message.content)}</div>
          )}
        </div>

        {/* Copy button on AI responses */}
        {!isUser && (
          <div className="flex items-center gap-2 mt-1 px-1">
            <span className="text-[10px] text-slate-400 font-medium">Pramod&apos;s AI Twin</span>
            <button
              type="button"
              onClick={handleCopy}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 inline-flex items-center gap-1 text-[10px] font-semibold text-slate-400 hover:text-slate-700 cursor-pointer"
              title="Copy message"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-500" />
                  <span className="text-emerald-500">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
