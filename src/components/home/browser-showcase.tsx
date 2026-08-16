"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface BrowserShowcaseProps {
  videoSrc: string;
  title?: string;
  url?: string;
}

export function BrowserShowcase({
  videoSrc,
  title = "Jackson Decorators",
}: BrowserShowcaseProps) {
  return (
    <motion.div
      variants={fadeIn}
      className="relative w-full max-w-3xl mx-auto select-none"
      role="img"
      aria-label={`Website preview: ${title}`}
    >
      {/* Laptop Frame Container using morckup.png */}
      <div className="relative w-full aspect-[16/9.2] flex items-center justify-center">
        {/* Base Laptop Mockup Image (z-20 so bezels & camera notch overlay naturally) */}
        <Image
          src="/morckup.png"
          alt={`${title} Laptop Mockup`}
          fill
          className="pointer-events-none object-contain z-20"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Video stream rendered inside Laptop Screen Cutout (z-10) */}
        <div className="absolute top-[3.8%] left-[11.8%] w-[76.4%] h-[86.5%] overflow-hidden rounded-t-md sm:rounded-t-[10px] bg-slate-950 z-10 shadow-inner">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-top"
            poster="/jackson-poster.webp"
            aria-label={`${title} website preview video`}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Dynamic Ambient Glow below Laptop Stand */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-blue-500/20 blur-3xl rounded-full pointer-events-none z-0"
        aria-hidden="true"
      />
    </motion.div>
  );
}

