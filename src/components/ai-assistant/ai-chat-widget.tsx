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
              className="group cursor-pointer flex items-center gap-2 sm:gap-2.5 pl-2 sm:pl-2.5 pr-2 py-1.5 sm:py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-blue-200/80 text-slate-800 shadow-xl hover:shadow-2xl hover:border-blue-400 transition-all duration-200 select-none max-w-52.5 xs:max-w-65 sm:max-w-xs"
            >
              <div className="relative flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden shrink-0 ring-2 ring-blue-500/50 shadow-2xs">
                <Image
                  src="/me.jpeg"
                  alt="Pramod Das"
                  width={28}
                  height={28}
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

        {/* Premium Floating Action Avatar Orb Button */}
        <motion.button
          type="button"
          onClick={handleToggle}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label={isOpen ? "Close AI Assistant" : "Open Pramod's AI Assistant"}
          className={`relative group flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 cursor-pointer overflow-visible ${
            isOpen
              ? "w-13 h-13 sm:w-14 sm:h-14 bg-slate-950 text-white border-2 border-slate-700 shadow-slate-900/40 rotate-90"
              : "w-14 h-14 sm:w-15.5 sm:h-15.5 p-0.5 bg-linear-to-tr from-blue-600 via-indigo-500 to-cyan-400 border-2 border-white shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-500/50"
          }`}
        >
          {/* Ambient Glow Aura (when closed) */}
          {!isOpen && (
            <span className="absolute -inset-2 rounded-full bg-blue-500/30 blur-lg animate-pulse -z-10 group-hover:bg-blue-400/50" />
          )}

          {isOpen ? (
            <X className="w-6 h-6 text-slate-200 transition-transform" />
          ) : (
            <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-slate-900">
              <Image
                src="/me.jpeg"
                alt="Pramod's AI Twin"
                width={62}
                height={62}
                priority
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          )}

          {/* Online Emerald Beacon */}
          {!isOpen && (
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 border-2 border-white shadow-xs" />
            </span>
          )}

          {/* Mini AI Sparkle Tag on bottom */}
          {!isOpen && (
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded-full bg-slate-950 border border-blue-400/50 text-[9px] font-black uppercase tracking-wider text-blue-300 shadow-xs scale-90 sm:scale-100 flex items-center gap-0.5">
              <Sparkles className="w-2.5 h-2.5 text-amber-300" />
              AI
            </span>
          )}
        </motion.button>
      </div>
    </div>
  );
}
