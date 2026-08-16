"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/config/projects";
import { cn } from "@/lib/utils";

interface LaptopSliderShowcaseProps {
  projects: Project[];
}

export function LaptopSliderShowcase({ projects }: LaptopSliderShowcaseProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  // Auto-rotate every 3.5 seconds
  React.useEffect(() => {
    if (isPaused || projects.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  const activeProject = projects[activeIndex] || projects[0];

  return (
    <div
      className="flex flex-col items-center justify-center select-none w-full max-w-[90%] mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Laptop Mockup Image Frame /public/laptop.png */}
      <div className="relative w-full aspect-16/10 flex items-center justify-center">
        {/* Base Laptop Mockup Frame (z-0) */}
        <Image
          src="/laptop.png"
          alt="Laptop Mockup"
          fill
          className="pointer-events-none object-contain z-0"
          priority
        />

        {/* Screenshot Image rendered ON TOP of Laptop Display Screen (z-20) */}
        <div className="absolute top-[8%] left-[10%] w-[80%] h-[70%] overflow-hidden rounded-t-xs bg-slate-950 z-20 shadow-xs">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image
                src={activeProject.desktopImage}
                alt={`${activeProject.title} Desktop View`}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Project Title, Category, and Pagination Dots Below Laptop */}
      <div className="mt-4 flex flex-col items-center text-center space-y-2">
        <div className="flex flex-col items-center space-y-0.5">
          <motion.h3
            key={activeProject.title}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-lg font-bold text-slate-900 tracking-tight sm:text-xl"
          >
            {activeProject.title}
          </motion.h3>
          <motion.p
            key={activeProject.category}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xs font-semibold text-blue-600 tracking-wide uppercase"
          >
            {activeProject.category}
          </motion.p>
        </div>

        {/* Pagination Dots (● ○ ○ ○ ○ ○ ○) */}
        <div className="flex items-center justify-center gap-2 pt-1" aria-label="Project selection pagination">
          {projects.map((project, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Jump to ${project.title}`}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",
                  isActive
                    ? "w-2.5 bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                )}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
