"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import { Project } from "@/config/projects";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  projects: Project[];
  activeProject: Project;
  onSelectProject: (project: Project) => void;
}

export function ProjectCarousel({
  projects,
  activeProject,
  onSelectProject,
}: ProjectCarouselProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleNext = () => {
    const currentIndex = projects.findIndex((p) => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    onSelectProject(projects[nextIndex]);

    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 160, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl px-2">
      <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 p-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl sm:p-2.5">
        <div
          ref={containerRef}
          className="no-scrollbar flex flex-1 items-center gap-2 overflow-x-auto scroll-smooth py-0.5 px-1"
        >
          {projects.map((project) => {
            const isActive = project.id === activeProject.id;
            return (
              <button
                key={project.id}
                onClick={() => onSelectProject(project)}
                type="button"
                className={cn(
                  "group relative flex shrink-0 items-center gap-2.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 cursor-pointer select-none",
                  isActive
                    ? "bg-white text-slate-900 shadow-[0_4px_14px_rgba(0,0,0,0.08)] border border-slate-200/90 ring-1 ring-blue-500/20"
                    : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/70"
                )}
              >
                {/* Thumbnail Icon */}
                <div className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200/70 bg-slate-100">
                  {project.id === "cosmic-fsm" ? (
                    <div className="flex h-full w-full items-center justify-center bg-blue-50 font-bold text-blue-600 text-[10px]">
                      <Sparkles className="h-3 w-3 text-blue-600" />
                    </div>
                  ) : (
                    <Image
                      src={project.desktopImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="24px"
                    />
                  )}
                </div>

                {/* Project Title */}
                <span className="whitespace-nowrap">{project.title}</span>

                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.span
                    layoutId="activePillDot"
                    className="h-1.5 w-1.5 rounded-full bg-blue-600"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Scroll Next Arrow Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next project"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-700 shadow-xs transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
