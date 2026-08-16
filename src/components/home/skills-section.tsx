"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

interface TechItem {
  name: string;
  bgLight: string;
  icon: React.ReactNode;
}

const TECH_SKILLS: TechItem[] = [
  // Row 1
  {
    name: "HTML",
    bgLight: "bg-orange-50 text-orange-600 border-orange-100",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625h10.383l.232-2.625H5.408l.696 7.875h8.391l-.348 3.885-3.18.858-3.18-.858-.203-2.28h-2.61l.377 4.253L11.97 20.3l5.88-1.583.783-8.967H8.531z" />
      </svg>
    ),
  },
  {
    name: "CSS",
    bgLight: "bg-blue-50 text-blue-600 border-blue-100",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625h10.383l.232-2.625H5.408l.696 7.875h8.391l-.348 3.885-3.18.858-3.18-.858-.203-2.28h-2.61l.377 4.253L11.97 20.3l5.88-1.583.783-8.967H8.531z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    bgLight: "bg-amber-50 text-amber-600 border-amber-100",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.465.735-.63 1.29-.45.3.09.705.375.99.795.736-.555 1.155-.84 1.77-1.29-.39-.585-.69-.945-1.065-1.23-1.02-.795-2.505-.96-3.81-.435-1.47.6-2.25 1.83-2.01 3.495.225 1.485 1.35 2.34 2.895 2.97 1.035.435 1.545.75 1.695 1.245.195.63-.12 1.14-1.02 1.23-.75.075-1.545-.255-2.055-.885-.69.57-1.14.945-1.845 1.5.855 1.095 2.16 1.635 3.93 1.53 1.935-.105 3.39-1.23 3.315-3.285zm-7.665.345c0-1.83-.93-2.73-2.58-3.33-.615-.225-1.05-.375-1.245-.63-.165-.24-.135-.495.045-.705.285-.315.825-.39 1.47-.195.345.105.735.42 1.02.855.675-.54 1.125-.855 1.74-1.32-.42-.585-.75-.945-1.125-1.2-1.05-.72-2.52-.825-3.795-.315-1.365.555-2.055 1.725-1.86 3.255.195 1.41 1.2 2.19 2.655 2.76.99.39 1.455.705 1.59 1.155.165.555-.135 1.035-1.005 1.125-.795.075-1.635-.255-2.145-.915-.69.555-1.14.915-1.83 1.47.885 1.125 2.25 1.68 4.095 1.53 2.01-.15 3.37-1.295 3.315-3.48z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    bgLight: "bg-sky-50 text-sky-600 border-sky-100",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21A1.5 1.5 0 0124 1.5v21a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 22.5v-21A1.5 1.5 0 011.5 0zM12.9 14.6h-2.1v6.2H8.3v-6.2H6.2v-2.1h6.7v2.1zm8.3-2.1h-2.4v1.8c.4.1.8.3 1.1.5.3.3.4.6.4 1 0 .5-.2.9-.6 1.2-.4.3-1 .4-1.7.4-.5 0-1-.1-1.4-.3-.4-.2-.8-.5-1.1-.9l1.4-1.4c.3.3.5.5.8.6.2.1.5.2.8.2.3 0 .5-.1.7-.2.2-.1.2-.3.2-.4 0-.2-.1-.3-.3-.4-.2-.1-.5-.2-1-.4-.6-.2-1.1-.5-1.5-.8-.4-.4-.6-.8-.6-1.4 0-.6.2-1.1.7-1.5.5-.4 1.2-.6 2.1-.6.6 0 1.2.1 1.7.3.5.2.9.5 1.2.9l-1.5 1.4c-.2-.2-.4-.4-.7-.5-.2-.1-.5-.2-.8-.2-.3 0-.5.1-.6.2-.1.1-.2.2-.2.4 0 .2.1.3.3.4.2.1.5.2 1 .3.7.2 1.2.5 1.6.8.3.4.5.9.5 1.5z" />
      </svg>
    ),
  },
  {
    name: "React",
    bgLight: "bg-cyan-50 text-cyan-500 border-cyan-100",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  // Row 2
  {
    name: "Next.js",
    bgLight: "bg-slate-100 text-slate-900 border-slate-200",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.4 17.7l-6.1-8.2V17h-2.1V7.1h2.1l6.1 8.2V7.1h2.1v10.6h-2.1z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    bgLight: "bg-emerald-50 text-emerald-600 border-emerald-100",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5L1.5 7.5v9L12 22.5l10.5-6v-9L12 1.5zm-1.5 15.75v-4.5L6 10.5v-3l4.5 2.25V5.25L15 7.5v9l-4.5 2.25z" />
      </svg>
    ),
  },
  {
    name: "Express.js",
    bgLight: "bg-slate-100 text-slate-900 border-slate-200",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-14.8-1.5h-2.8v1.5h2.8v-1.5zm0 3h-2.8v1.5h2.8v-1.5zm4.8-3h-2.8v4.5h2.8v-4.5z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    bgLight: "bg-green-50 text-green-600 border-green-100",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0s-5.7 6.9-5.7 13.5C6.3 18 8.8 22 12 24c3.2-2 5.7-6 5.7-10.5C17.7 6.9 12 0 12 0zm0 21.5c-2.3-1.6-4.1-4.9-4.1-8 0-4.6 3.3-9.5 4.1-10.8.8 1.3 4.1 6.2 4.1 10.8 0 3.1-1.8 6.4-4.1 8z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    bgLight: "bg-indigo-50 text-indigo-600 border-indigo-100",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 12.42 12 13 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z" />
      </svg>
    ),
  },
  // Row 3
  {
    name: "Tailwind CSS",
    bgLight: "bg-sky-50 text-sky-500 border-sky-100",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-3.3 0-5.5 1.6-6.6 4.9 1.1-1.6 2.5-2.2 4.1-1.6 1 .3 1.7 1 2.5 1.8 1.3 1.3 2.7 2.9 6.6 2.9 3.3 0 5.5-1.6 6.6-4.9-1.1 1.6-2.5 2.2-4.1 1.6-1-.3-1.7-1-2.5-1.8-1.3-1.3-2.7-2.9-6.6-2.9zM5.4 12c-3.3 0-5.5 1.6-6.6 4.9 1.1-1.6 2.5-2.2 4.1-1.6 1 .3 1.7 1 2.5 1.8 1.3 1.3 2.7 2.9 6.6 2.9 3.3 0 5.5-1.6 6.6-4.9-1.1 1.6-2.5 2.2-4.1 1.6-1-.3-1.7-1-2.5-1.8-1.3-1.3-2.7-2.9-6.6-2.9z" />
      </svg>
    ),
  },
  {
    name: "Git",
    bgLight: "bg-rose-50 text-rose-600 border-rose-100",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.44.516.515.655 1.258.428 1.9l2.67 2.67c.643-.227 1.385-.088 1.9.428.724.724.724 1.9 0 2.624-.724.723-1.9.723-2.624 0-.538-.537-.67-1.312-.397-1.972l-2.496-2.496V15.7c.17.09.33.21.46.34.724.724.724 1.9 0 2.624-.725.724-1.9.724-2.625 0-.724-.724-.724-1.9 0-2.625.26-.26.58-.42.92-.5V9.45c-.34-.08-.66-.24-.92-.5-.54-.54-.67-1.33-.38-2.01L7.54 4.25.454 11.34c-.604.604-.604 1.582 0 2.187l10.48 10.48c.604.604 1.582.604 2.186 0l10.426-10.427c.604-.604.604-1.582 0-2.187z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    bgLight: "bg-slate-100 text-slate-900 border-slate-200",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.59 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.59 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    bgLight: "bg-sky-50 text-sky-600 border-sky-100",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm0 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185zm-2.954 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.075a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.714h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H8.075a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.955 2.714h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.166a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.714h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H2.166a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zM.074 12.012c0 1.942.502 3.655 1.506 5.14.733 1.083 1.706 1.986 2.919 2.709 1.488.887 3.204 1.332 5.148 1.332 3.321 0 6.084-1.285 8.289-3.855.992-1.156 1.637-2.484 1.936-3.984.343-1.722.091-3.23-.755-4.526l-.285-.436-.48.188c-.689.27-1.428.406-2.217.406-1.579 0-2.973-.541-4.182-1.624L11.4 6.883l-.53.488c-.89.818-1.916 1.227-3.078 1.227-1.393 0-2.616-.541-3.668-1.623L3.6 6.471l-.54.496C1.942 8.012.986 9.77.074 12.012z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    bgLight: "bg-purple-50 text-purple-600 border-purple-100",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4zm0-24C5.8 0 4 1.8 4 4s1.8 4 4 4h4V4c0-2.2-1.8-4-4-4zm0 8c-2.2 0-4 1.8-4 4s1.8 4 4 4h4v-8H8zm8-8c-2.2 0-4 1.8-4 4v4h4c2.2 0 4-1.8 4-4s-1.8-4-4-4zm0 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
      </svg>
    ),
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden bg-linear-to-b from-blue-50/80 via-indigo-50/40 to-white py-14 sm:py-16 select-none"
    >
      <div className="section-divider-blue absolute inset-x-0 top-0" />
      <div className="bg-dot-pattern absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
      
      {/* Background Orbs */}
      <div
        className="absolute left-0 top-10 h-72 w-72 -translate-x-1/3 rounded-full bg-blue-300/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 bottom-10 h-72 w-72 translate-x-1/3 rounded-full bg-indigo-300/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Split 2-Column Side-by-Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr] gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Subtitle */}
          <motion.div variants={fadeIn} className="space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-blue-700 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
              MY SKILLS
            </div>
            <h2
              id="skills-heading"
              className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl leading-tight"
            >
              Technologies I Work With.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 font-medium">
              The tools and technologies I use to build modern, scalable, and maintainable solutions.
            </p>
          </motion.div>

          {/* Right Column: 15 Tech Cards Grid (5 columns per row on XL) */}
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3"
          >
            {TECH_SKILLS.map((tech) => (
              <div
                key={tech.name}
                className="group flex items-center gap-3 rounded-2xl border border-slate-300 bg-white p-3 shadow-[0_4px_16px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.03)] backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_12px_28px_rgba(37,99,235,0.14)]"
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${tech.bgLight} transition-transform group-hover:scale-110 shadow-2xs`}
                >
                  {tech.icon}
                </div>
                <span className="text-xs sm:text-sm font-black text-slate-950 truncate">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

