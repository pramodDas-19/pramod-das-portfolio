"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Code2,
  ExternalLink,
  Globe,
  Layers,
  Mail,
  MessageCircle,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { type CaseStudy, projectKindMeta } from "@/config/case-studies";
import { cn } from "@/lib/utils";
import { WhatsAppInquiryModal } from "@/components/common/whatsapp-inquiry-modal";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.59 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.59 17.52 2 12 2Z" />
    </svg>
  );
}

interface ProjectCaseStudyViewProps {
  project: CaseStudy;
  otherProjects: CaseStudy[];
}

export function ProjectCaseStudyView({
  project,
  otherProjects,
}: ProjectCaseStudyViewProps) {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const kindMeta = projectKindMeta[project.kind];
  const KindIcon = kindMeta.icon;

  return (
    <article className="relative bg-linear-to-b from-white via-blue-50/30 to-white pt-24 pb-24 sm:pt-28 sm:pb-32">
      {/* WhatsApp Inquiry Modal */}
      <WhatsAppInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        contextTitle={`Case Study: ${project.title}`}
        defaultService={
          project.category.includes("Platform")
            ? "Full-Stack Web App"
            : project.category.includes("Hospitality")
            ? "Business Website"
            : "Business Website"
        }
      />

      {/* Background Visual Enhancements */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/80 to-transparent" />
      <div className="bg-dot-pattern absolute inset-0 opacity-35 pointer-events-none" aria-hidden="true" />
      
      {/* Ambient Gradient Glows */}
      <div
        className="absolute -top-32 left-1/2 h-112.5 w-187.5 -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-300/20 via-indigo-300/15 to-sky-300/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumbs & Back Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-slate-500">
            <Link href="/" className="transition-colors hover:text-blue-600">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <Link href="/#projects" className="transition-colors hover:text-blue-600">
              Projects
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="truncate text-slate-900 font-black max-w-50 sm:max-w-xs md:max-w-md">
              {project.title}
            </span>
          </nav>

          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-700 hover:shadow-md active:scale-95"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Row: Project Header & Media Preview */}
        <header className="mt-8 rounded-3xl sm:rounded-4xl border border-slate-300 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_15px_45px_rgba(15,23,42,0.12),0_2px_8px_rgba(15,23,42,0.06)]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              {/* Meta Pills */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <div
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-black uppercase tracking-wider shadow-2xs",
                    kindMeta.className
                  )}
                >
                  <KindIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{project.kindLabel}</span>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                  <Layers className="h-3 w-3 text-slate-500" />
                  <span>{project.category}</span>
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl leading-[1.15]">
                {project.title}
              </h1>

              {/* Subtitle / Role Tag */}
              <div className="mt-5 rounded-2xl border border-blue-200 bg-linear-to-r from-blue-50 via-indigo-50/60 to-white p-4 shadow-2xs">
                <span className="block font-black text-blue-800 uppercase tracking-wider text-[10px] mb-0.5">
                  My Role &amp; Contribution
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  {project.role}
                </p>
              </div>

              {/* Overview Text Excerpt */}
              <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-slate-600 font-semibold line-clamp-4">
                {project.description}
              </p>

              {/* Action Links */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-xs font-black text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 active:scale-95"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Visit Live Website</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-800 shadow-xs transition-all hover:bg-slate-50 hover:border-slate-400 active:scale-95"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    <span>Source Code</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-xs font-black text-white shadow-md shadow-emerald-600/25 transition-all hover:bg-emerald-700 active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Discuss Similar Project</span>
                </button>
              </div>
            </div>

            {/* Media Preview Box */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-slate-300 bg-slate-950 shadow-[0_16px_50px_rgba(15,23,42,0.14)]">
              <div className="relative aspect-video bg-slate-900">
                {project.video ? (
                  <video
                    className="h-full w-full object-cover"
                    src={project.video}
                    muted
                    loop
                    autoPlay
                    playsInline
                    controls
                    preload="metadata"
                    aria-label={`${project.title} project preview`}
                  />
                ) : (
                  <Image
                    src={project.image ?? "/p1.webp"}
                    alt={`${project.title} project preview`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 580px"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Details Row: Tech Stack, Key Features, Development & Outcome */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          {/* Main Left Column */}
          <main className="space-y-10 min-w-0">
            {/* 1. Project Overview */}
            <section className="rounded-3xl border border-slate-300 bg-white p-6 sm:p-9 shadow-[0_10px_35px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.05)]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-blue-600">
                    Context &amp; Background
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950">
                    Project Overview
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base sm:text-[16.5px] leading-relaxed text-slate-800 font-normal">
                {project.overview.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </section>

            {/* 2. Key Responsibilities & Role Contribution */}
            <section className="rounded-3xl border border-slate-300 bg-white p-6 sm:p-9 shadow-[0_10px_35px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.05)]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-blue-600">
                    Engineering Scope
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950">
                    My Role &amp; Contribution
                  </h2>
                </div>
              </div>

              <p className="text-base sm:text-[16.5px] leading-relaxed text-slate-800 font-normal">
                {project.contribution}
              </p>
            </section>

            {/* 3. Key Features */}
            <section className="rounded-3xl border border-slate-300 bg-white p-6 sm:p-9 shadow-[0_10px_35px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.05)]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-blue-600">
                    Deliverables
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950">
                    Key Features &amp; Modules
                  </h2>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {project.details.map((detail, dIdx) => (
                  <div
                    key={dIdx}
                    className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs hover:border-blue-300 hover:bg-white hover:shadow-xs transition-all"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700 mt-0.5 border border-blue-200">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="text-xs sm:text-sm font-bold leading-relaxed text-slate-800">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Technical Development */}
            <section className="rounded-3xl border border-slate-300 bg-white p-6 sm:p-9 shadow-[0_10px_35px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.05)]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-blue-600">
                    Implementation
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950">
                    Technical Architecture &amp; Development
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base sm:text-[16.5px] leading-relaxed text-slate-800 font-normal">
                {project.development.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </section>

            {/* High-Converting CTA Banner Card */}
            <section className="relative overflow-hidden rounded-3xl sm:rounded-4xl border-2 border-blue-400/50 bg-linear-to-br from-blue-600 via-indigo-700 to-slate-950 p-8 sm:p-12 text-white shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
              <div className="relative max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md border border-white/30 shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-blue-200" />
                  Available for New Projects
                </span>
                <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Have a similar project in mind?
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-blue-100 font-medium">
                  Whether you need a full-stack SaaS platform, high-converting hospitality website, or custom web app, let&apos;s talk through your requirements.
                </p>
                
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <button
                    type="button"
                    onClick={() => setIsInquiryModalOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs sm:text-sm font-black text-blue-700 shadow-xl transition-all hover:bg-blue-50 active:scale-95 cursor-pointer"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Discuss Your Project with Pramod</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <a
                    href="https://wa.me/918767049312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-5 py-3.5 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/25 active:scale-95 shadow-sm"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-400" />
                    <span>WhatsApp Direct</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                  </a>
                </div>
              </div>
            </section>
          </main>

          {/* Right Sticky Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start lg:h-fit">
            {/* Tech Stack Card */}
            <div className="rounded-3xl border border-slate-300 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.1),0_2px_6px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                <Code2 className="h-4 w-4 text-blue-600" />
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Technologies Used
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Outcome Card */}
            <div className="rounded-3xl border border-slate-300 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.1),0_2px_6px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-200">
                <Trophy className="h-4 w-4 text-emerald-600" />
                <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                  Project Outcome
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] font-semibold text-slate-700 leading-relaxed">
                {project.outcome}
              </p>
            </div>

            {/* Developer Profile Card */}
            <div className="rounded-3xl border border-slate-300 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.1),0_2px_6px_rgba(15,23,42,0.04)]">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                  Built By
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open to Work
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-2xl ring-2 ring-blue-300 shadow-xs bg-slate-100 shrink-0">
                  <Image
                    src="/avatar.png"
                    alt="Pramod Das"
                    width={44}
                    height={44}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-950">Pramod Das</h4>
                  <p className="text-[11px] font-bold text-blue-700">
                    Full Stack Web Developer
                  </p>
                </div>
              </div>

              <p className="mt-3.5 text-xs leading-relaxed text-slate-600 font-semibold">
                Delivering performant web applications, Next.js systems, and custom client sites across Goa and beyond.
              </p>

              <div className="mt-5 space-y-2 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsInquiryModalOpen(true)}
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-blue-600 py-2.5 text-xs font-extrabold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors active:scale-98 cursor-pointer"
                >
                  <span>Hire for Your Project</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href="https://wa.me/918767049312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-slate-50 py-2.5 text-xs font-bold text-slate-800 hover:bg-white hover:border-slate-400 transition-colors shadow-2xs"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom Related Case Studies Section */}
        <section className="mt-20 pt-16 border-t border-slate-300">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                Explore Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 mt-1">
                More Featured Case Studies
              </h2>
            </div>
            <Link
              href="/#projects"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
            >
              <span>View All Projects</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((other) => (
              <Link
                key={other.slug}
                href={`/projects/${other.slug}`}
                className="group rounded-3xl border border-slate-300 bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_16px_45px_rgba(37,99,235,0.14)] flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 mb-4">
                    <Image
                      src={other.image ?? "/p1.webp"}
                      alt={`${other.title} preview`}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[10px] font-black text-blue-700">
                      {other.category}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-slate-950 group-hover:text-blue-600 transition-colors line-clamp-1 leading-snug">
                    {other.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2 font-semibold">
                    {other.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-extrabold text-blue-600">
                  <span>Read Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
