"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { AIChatWindow } from "./ai-chat-window";

const TEASER_MESSAGES = [
  { text: "👋 Hi! I'm Pramod's AI Twin — ask me anything!", tag: "AI Twin" },
  { text: "🚀 Curious about his 30+ featured web projects?", tag: "Projects" },
  { text: "💰 Need a fast quote or timeline for a website?", tag: "Estimates" },
  { text: "🛠️ Ask about his Next.js & React 19 tech stack!", tag: "Tech Stack" },
  { text: "💼 Want to know about his role at Cosmic Solutions?", tag: "Experience" },
];

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showTeaser, setShowTeaser] = useState(true);

  // Rotate teaser message every 4.5 seconds
  useEffect(() => {
    if (isOpen || !showTeaser) return;

    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % TEASER_MESSAGES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isOpen, showTeaser]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      setShowTeaser(false);
    }
  };

  const currentTeaser = TEASER_MESSAGES[currentMessageIndex];

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="mb-3.5 pointer-events-auto origin-bottom-right"
          >
            <AIChatWindow onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Section */}
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* Animated Rotating Teaser Message Pill */}
        <AnimatePresence mode="wait">
          {!isOpen && showTeaser && (
            <motion.div
              key={currentMessageIndex}
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -15, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={handleToggle}
              className="group cursor-pointer flex items-center gap-2 sm:gap-2.5 pl-2.5 sm:pl-3 pr-2 py-1.5 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-blue-200/80 text-slate-800 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-200 select-none max-w-52.5 xs:max-w-65 sm:max-w-xs"
            >
              <div className="relative flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-lg overflow-hidden shrink-0 shadow-2xs">
                <Image
                  src="/ai-bot-avatar.png"
                  alt="AI Avatar"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col text-left pr-0.5 sm:pr-1 min-w-0">
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-blue-600 leading-none mb-0.5">
                  {currentTeaser.tag}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                  {currentTeaser.text}
                </span>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTeaser(false);
                }}
                className="text-slate-400 hover:text-slate-700 p-0.5 sm:p-1 rounded-lg hover:bg-slate-100 transition-colors shrink-0"
                title="Dismiss hint"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Premium Floating Action Orb Button */}
        <motion.button
          type="button"
          onClick={handleToggle}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label={isOpen ? "Close AI Assistant" : "Open Pramod's AI Assistant"}
          className={`relative group flex items-center justify-center rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-300 cursor-pointer overflow-visible ${
            isOpen
              ? "w-13 h-13 sm:w-14 sm:h-14 bg-slate-950 text-white border border-slate-700 shadow-slate-900/40 rotate-90"
              : "w-14 h-14 sm:w-16 sm:h-16 p-0 bg-transparent border-0"
          }`}
        >
          {/* Ambient Glow Aura (when closed) */}
          {!isOpen && (
            <span className="absolute -inset-2 rounded-3xl bg-blue-500/30 blur-lg animate-pulse -z-10 group-hover:bg-blue-400/40" />
          )}

          {isOpen ? (
            <X className="w-6 h-6 text-slate-200 transition-transform" />
          ) : (
            <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center drop-shadow-[0_8px_20px_rgba(37,99,235,0.45)]">
              <Image
                src="/ai-bot-avatar.png"
                alt="Pramod's AI Assistant"
                width={64}
                height={64}
                priority
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
        </motion.button>
      </div>
    </div>
  );
}
