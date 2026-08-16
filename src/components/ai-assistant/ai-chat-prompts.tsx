"use client";

import React from "react";
import { Sparkles, Code2, Briefcase, Mail, Layers } from "lucide-react";

interface AIChatPromptsProps {
  onSelectPrompt: (prompt: string) => void;
  disabled?: boolean;
}

const STARTER_PROMPTS = [
  {
    icon: Sparkles,
    label: "Show top projects",
    prompt: "Can you show me Pramod's top featured projects and what tech stack he used?",
  },
  {
    icon: Code2,
    label: "Tech Stack & Skills",
    prompt: "What is Pramod's core tech stack and backend/frontend capabilities?",
  },
  {
    icon: Briefcase,
    label: "Experience & Role",
    prompt: "Tell me about Pramod's experience and his current role at Cosmic Solutions.",
  },
  {
    icon: Layers,
    label: "Services Offered",
    prompt: "What services does Pramod offer for clients and businesses?",
  },
  {
    icon: Mail,
    label: "How to hire / contact",
    prompt: "How can I contact Pramod or hire him for a project?",
  },
];

export function AIChatPrompts({ onSelectPrompt, disabled }: AIChatPromptsProps) {
  return (
    <div className="flex flex-col gap-2 p-3 bg-slate-50/80 rounded-2xl border border-slate-100 mb-3">
      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 px-1">
        <Sparkles className="w-3 h-3 text-blue-600" />
        Suggested Questions
      </p>
      <div className="flex flex-wrap gap-1.5">
        {STARTER_PROMPTS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              type="button"
              disabled={disabled}
              onClick={() => onSelectPrompt(item.prompt)}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-150 shadow-2xs text-left active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            >
              <Icon className="w-3 h-3 text-blue-500 shrink-0" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
