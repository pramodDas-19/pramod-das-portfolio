"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { PROJECTS, type Project } from "@/config/projects";
import { fadeIn, staggerContainer } from "@/lib/animations";

function ProjectMedia({ project }: { project: Project }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-950">
      <Image
        src={project.desktopImage}
        alt={`${project.title} project preview`}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 320px, 380px"
      />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent opacity-60 pointer-events-none" />
      {project.type && (
        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white shadow-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="capitalize">{project.type}</span>
        </div>
      )}
    </div>
  );
}

export function ProjectsSection() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -390 : 390;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 select-none"
    >
      {/* Background Graphic Asset: public/project section.png */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 pointer-events-none z-0"
        style={{ backgroundImage: "url('/project%20section.png')" }}
        aria-hidden="true"
      />
      <div className="section-divider-blue absolute inset-x-0 top-0 z-10" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Header Row: Title & Action Controls */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-blue-700 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
              FEATURED WORK
            </div>
            <h2
              id="projects-heading"
              className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl leading-tight"
            >
              Projects That Deliver Real Results.
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
              A selection of recent projects that highlight my approach to building clean, scalable, and impactful digital solutions.
            </p>
          </div>

          {/* Carousel Left/Right Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-2xs transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-2xs transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* Medium-Sized Cards Horizontal Carousel Track */}
        <motion.div variants={fadeIn} className="relative mt-10">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-1 no-scrollbar scroll-smooth"
          >
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="group w-[320px] sm:w-90 md:w-95 shrink-0 snap-start rounded-3xl border border-slate-300 bg-white p-5 sm:p-6 shadow-[0_10px_35px_rgba(15,23,42,0.08),0_2px_6px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] flex flex-col justify-between"
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="flex flex-col h-full"
                >
                  {/* Card Image Preview */}
                  <ProjectMedia project={project} />

                  {/* Title Row & External Link Icon */}
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-wider text-blue-600">
                        {project.category}
                      </p>
                      <h3 className="text-lg font-black text-slate-950 tracking-tight mt-1 line-clamp-1">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white border border-blue-200 shadow-2xs">
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 font-semibold line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-auto pt-4 flex flex-wrap gap-1.5 border-t border-slate-200">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-700 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

