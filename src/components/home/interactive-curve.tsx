"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { MousePointer } from "lucide-react";

export function InteractiveCurve() {
  const progress = useMotionValue(0.5); // 0 to 1 along curve

  React.useEffect(() => {
    // Gentle floating back and forth oscillation for the curve node
    const controls = animate(progress, [0.38, 0.62, 0.38], {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [progress]);

  // Calculate coordinates along bezier curve for path
  const cx = useTransform(progress, [0, 1], [100, 1100]);
  const cy = useTransform(progress, (v) => {
    const t = Math.max(0, Math.min(1, v));
    return 12 + Math.sin(t * Math.PI) * 44;
  });

  return (
    <div className="relative my-2 sm:my-3 w-full select-none overflow-hidden py-1">
      <div className="relative mx-auto max-w-7xl px-4">
        {/* SVG Bezier Curve */}
        <svg
          className="w-full h-14 sm:h-16 overflow-visible"
          viewBox="0 0 1200 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.4" />
              <stop offset="35%" stopColor="#3B82F6" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#2563EB" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.4" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Ambient Glow Line */}
          <path
            d="M 0 12 C 350 12, 450 56, 600 56 C 750 56, 850 12, 1200 12"
            stroke="#93C5FD"
            strokeWidth="6"
            strokeOpacity="0.3"
            fill="none"
            filter="url(#glow)"
          />

          {/* Main Crisp Gradient Path */}
          <path
            d="M 0 12 C 350 12, 450 56, 600 56 C 750 56, 850 12, 1200 12"
            stroke="url(#curveGradient)"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Small Decorative Anchor Dots on Curve */}
          <circle cx="60" cy="12" r="3" fill="#3B82F6" />
          <circle cx="1140" cy="12" r="3" fill="#3B82F6" />
          <circle cx="360" cy="28" r="2.5" fill="#60A5FA" />
          <circle cx="840" cy="28" r="2.5" fill="#60A5FA" />
        </svg>

        {/* Dynamic Animated Node + Cursor Hint */}
        <motion.div
          style={{ x: cx, y: cy }}
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none"
        >
          {/* Animated Pulsing Ring */}
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-7 w-7 animate-ping rounded-full bg-blue-400 opacity-40" />
            <span className="relative flex h-5.5 w-5.5 items-center justify-center rounded-full border-2 border-white bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
          </div>

          {/* Pointer Tooltip Label */}
          <motion.div
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 flex flex-col items-center gap-0.5"
          >
            <span className="text-[10px] font-semibold tracking-wide text-blue-600">
              Move along the curve
            </span>
            <MousePointer className="h-3 w-3 text-blue-600 rotate-[-20deg]" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
