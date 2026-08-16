"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  CheckCircle2,
  Code2,
  MapPin,
  Sparkles,
} from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

const responsibilities = [
  "Contribute to production web applications and business websites for real-world use.",
  "Build responsive interface screens with reusable React and Next.js components.",
  "Work on dashboards, operational workflows, and polished content layouts.",
  "Translate project requirements into clean, maintainable front-end implementation.",
];

const keyContributions = [
  "Field service dashboard & workflow interfaces",
  "Business platform screens for operational visibility",
  "Hospitality & industrial website experiences",
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Framer Motion",
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative overflow-hidden bg-white py-14 sm:py-16 select-none"
    >
      {/* Background Image: public/experience.png */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 pointer-events-none z-0"
        style={{ backgroundImage: "url('/experience.png')" }}
        aria-hidden="true"
      />
      <div className="section-divider-blue absolute inset-x-0 top-0 z-10" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-20"
      >
        {/* Section Header */}
        <motion.div variants={fadeIn} className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-blue-700 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            PROFESSIONAL WORK
          </div>
          <h2
            id="experience-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl leading-tight"
          >
            Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
            My professional journey and the real-world production projects I&apos;ve contributed to.
          </p>
        </motion.div>

        {/* Creative Compact 2-Column Split Card Layout */}
        <motion.div variants={fadeIn} className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[380px_1fr] gap-6 items-stretch">
            
            {/* Left Card: Role & Company Spec Card */}
            <article className="rounded-3xl border border-slate-300 bg-white p-6 sm:p-7 shadow-[0_12px_36px_rgba(15,23,42,0.09),0_2px_6px_rgba(15,23,42,0.04)] flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-black text-blue-700 shadow-2xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Current Role
                </div>

                <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-950">
                  Full Stack Web Developer
                </h3>
                <p className="mt-1 text-base font-bold text-blue-600 flex items-center gap-1.5">
                  <Building2 className="h-4 w-4 shrink-0" />
                  <span>Cosmic Solutions</span>
                </p>

                <div className="mt-5 space-y-2.5 text-xs font-semibold text-slate-700 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 p-2 rounded-xl border border-slate-200 bg-slate-50/70">
                    <CalendarDays className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>2023 — Present</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl border border-slate-200 bg-slate-50/70">
                    <MapPin className="h-4 w-4 text-blue-600 shrink-0" />
                    <span>Goa, India</span>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-slate-600 font-semibold">
                  Working on production-facing web projects with a focus on clean code, responsive UI, and high-performance product experiences.
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="pt-6 border-t border-slate-200 mt-6">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                  <Code2 className="h-3.5 w-3.5 text-blue-600" />
                  <span>Tech Stack</span>
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-bold text-blue-700 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Right Card: Responsibilities & Key Contributions */}
            <article className="rounded-3xl border border-slate-300 bg-white p-6 sm:p-7 shadow-[0_12px_36px_rgba(15,23,42,0.09),0_2px_6px_rgba(15,23,42,0.04)] flex flex-col justify-between space-y-6">
              
              {/* Responsibilities */}
              <div>
                <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Key Responsibilities
                </h4>
                <div className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
                  {responsibilities.map((item) => (
                    <div
                      key={item}
                      className="flex gap-2.5 rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5 text-xs font-semibold text-slate-800 leading-relaxed shadow-2xs hover:border-blue-300 hover:bg-white transition-all"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Contributions */}
              <div className="pt-4 border-t border-slate-200">
                <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  Major Project Contributions
                </h4>
                <div className="grid gap-2.5 sm:grid-cols-3">
                  {keyContributions.map((contrib) => (
                    <div
                      key={contrib}
                      className="rounded-2xl border border-blue-200 bg-blue-50/80 p-3.5 text-xs font-bold text-slate-900 flex items-center gap-2 shadow-2xs hover:border-blue-400 hover:bg-white transition-all"
                    >
                      <div className="h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                      <span>{contrib}</span>
                    </div>
                  ))}
                </div>
              </div>

            </article>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

