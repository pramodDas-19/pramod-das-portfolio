"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Copy,
  ExternalLink,
  FileText,
  HelpCircle,
  Link2,
  Mail,
  MessageCircle,
  MessageSquareQuote,
  Share2,
  Sparkles,
  Tag,
  Zap,
} from "lucide-react";
import type { BlogPost } from "@/config/blog-posts";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { WhatsAppInquiryModal } from "@/components/common/whatsapp-inquiry-modal";

interface BlogPostContentProps {
  post: BlogPost;
  otherPosts: BlogPost[];
}

export function BlogPostContent({ post, otherPosts }: BlogPostContentProps) {
  const [activeSection, setActiveSection] = React.useState<string>("");
  const [copied, setCopied] = React.useState(false);
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = React.useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scrollspy for Table of Contents
  React.useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        "introduction",
        ...post.sections.map((s) => s.id),
        "faqs",
        "resources",
      ];

      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id);
          return;
        }
      }

      if (sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareOnTwitter = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Check out "${post.title}" by @pramoddas`);
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank");
    }
  };

  const shareOnWhatsApp = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Read this article: ${post.title} - ${url}`);
      window.open(`https://wa.me/?text=${text}`, "_blank");
    }
  };

  return (
    <div className="relative">
      {/* WhatsApp Inquiry Modal */}
      <WhatsAppInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        contextTitle={`Blog: ${post.title}`}
        defaultService="Business Website"
      />

      {/* Top Fixed Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-linear-to-r from-blue-600 via-indigo-600 to-sky-400 origin-left z-50 shadow-sm"
        style={{ scaleX }}
      />

      <article className="relative w-full min-w-0 overflow-x-clip bg-linear-to-b from-white via-blue-50/30 to-white pt-24 pb-24 sm:pt-28 sm:pb-32">
        {/* Background Visual Enhancements */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/80 to-transparent" />
        <div className="bg-dot-pattern absolute inset-0 opacity-35 pointer-events-none" aria-hidden="true" />
        
        {/* Ambient Gradient Glows (contained) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute -top-32 left-1/2 h-112.5 w-187.5 max-w-full -translate-x-1/2 rounded-full bg-linear-to-tr from-blue-300/20 via-indigo-300/15 to-sky-300/20 blur-3xl"
          />
          <div
            className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-indigo-200/15 blur-3xl"
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 min-w-0">
          {/* Top Navigation & Breadcrumbs Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-xs font-bold text-slate-500">
              <Link href="/" className="transition-colors hover:text-blue-600">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              <Link href="/#blog" className="transition-colors hover:text-blue-600">
                Blog
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              <span className="truncate text-slate-900 font-extrabold max-w-30 sm:max-w-xs md:max-w-md">
                {post.title}
              </span>
            </nav>

            <Link
              href="/#blog"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-700 hover:shadow-md active:scale-95"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to All Articles</span>
            </Link>
          </div>

          {/* Hero Header Section */}
          <header className="mt-8 relative overflow-hidden rounded-3xl sm:rounded-4xl border border-slate-300 bg-white p-5 sm:p-10 lg:p-12 shadow-[0_15px_45px_rgba(15,23,42,0.12),0_2px_8px_rgba(15,23,42,0.06)] min-w-0">
            {/* Top Badge & Read Info Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-300 bg-blue-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-blue-700 shadow-2xs">
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                  {post.status}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-slate-100/80 px-3 py-1 text-xs font-bold text-slate-700">
                  <Tag className="h-3 w-3 text-slate-500" />
                  {post.primaryKeyword}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
                  {post.dateLabel}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
                  {post.readingTime}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-700 font-extrabold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-300 shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Verified Guide
                </span>
              </div>
            </div>

            {/* Article Title */}
            <h1 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl leading-[1.18]">
              {post.title}
            </h1>

            {/* Author Profile Row */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3.5">
                <div className="relative">
                  <div className="relative h-12 w-12 overflow-hidden rounded-2xl ring-2 ring-blue-300 shadow-sm bg-slate-100">
                    <Image
                      src="/me.jpeg"
                      alt="Pramod Das"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <span
                    className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 ring-1 ring-emerald-300"
                    title="Available for projects in Goa"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-black text-slate-900">Pramod Das</p>
                    <span className="rounded-full bg-blue-100 border border-blue-200 px-2 py-0.5 text-[10px] font-extrabold text-blue-800">
                      Author
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-600">
                    Freelance Full Stack Web Developer &amp; Consultant in Goa
                  </p>
                </div>
              </div>

              {/* Social / Copy Link Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  aria-label="Copy article link"
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-xs",
                    copied
                      ? "border-emerald-400 bg-emerald-50 text-emerald-700 shadow-emerald-100"
                      : "border-slate-300 bg-white text-slate-700 hover:border-blue-400 hover:bg-blue-50/60 hover:text-blue-700 hover:shadow-sm"
                  )}
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-slate-500" />
                      <span>Share</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={shareOnWhatsApp}
                  aria-label="Share on WhatsApp"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700 transition-all shadow-xs hover:shadow-sm cursor-pointer"
                  title="Share via WhatsApp"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={shareOnTwitter}
                  aria-label="Share on Twitter / X"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 transition-all shadow-xs hover:shadow-sm cursor-pointer"
                  title="Share on X (Twitter)"
                >
                  <Share2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Executive Summary / Key Takeaways Box */}
            <div className="mt-8 relative overflow-hidden rounded-2xl border-2 border-blue-200 bg-linear-to-br from-blue-50/95 via-indigo-50/70 to-white p-6 sm:p-7 shadow-[0_8px_25px_rgba(37,99,235,0.08)]">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 opacity-10">
                <MessageSquareQuote className="h-32 w-32 text-blue-900" />
              </div>
              <div className="relative flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                  <MessageSquareQuote className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-black uppercase tracking-wider text-blue-800 mb-1">
                    Article Summary &amp; Core Takeaway
                  </span>
                  <p className="text-sm sm:text-base font-bold leading-relaxed text-slate-800">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </div>

            {/* Topic Badges Row */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-500 mr-1">Topics:</span>
              {post.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700 shadow-2xs transition-colors hover:border-blue-400 hover:bg-blue-50 hover:text-blue-800"
                >
                  #{topic}
                </span>
              ))}
            </div>
          </header>

          {/* Main 2-Column Grid: Sticky Sidebar + Main Content */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
            {/* LEFT MAIN ARTICLE CONTENT */}
            <main className="space-y-10 min-w-0">
              {/* Introduction Section */}
              <section
                id="introduction"
                className="scroll-mt-24 rounded-3xl border border-slate-300 bg-white p-6 sm:p-9 shadow-[0_10px_35px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.05)]"
              >
                <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-xs font-black text-blue-700 border border-blue-200">
                      00
                    </span>
                    <h2 className="text-xl font-black tracking-tight text-slate-950">
                      Introduction &amp; Context
                    </h2>
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                    Overview
                  </span>
                </div>

                <div className="space-y-4 text-base sm:text-[17px] leading-relaxed text-slate-800 font-normal">
                  {post.intro.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className={cn(
                        pIdx === 0 &&
                          "text-lg sm:text-xl font-semibold leading-relaxed text-slate-900"
                      )}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Dynamic Numbered Sections */}
              {post.sections.map((section, idx) => {
                const sectionNumber = String(idx + 1).padStart(2, "0");
                const isWarningSection =
                  section.id.includes("red-flags") ||
                  section.heading.toLowerCase().includes("red flags") ||
                  section.heading.toLowerCase().includes("trap");
                const isQuestionSection =
                  section.id.includes("questions") ||
                  section.heading.toLowerCase().includes("questions worth asking") ||
                  section.heading.toLowerCase().includes("what to ask");

                return (
                  <section
                    key={section.id}
                    id={section.id}
                    className={cn(
                      "scroll-mt-24 rounded-3xl border p-6 sm:p-9 shadow-[0_10px_35px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.05)] transition-all",
                      isWarningSection
                        ? "border-2 border-rose-300 bg-rose-50/30 shadow-[0_10px_35px_rgba(225,29,72,0.08)]"
                        : "border border-slate-300 bg-white"
                    )}
                  >
                    {/* Section Header */}
                    <div className="flex items-start gap-4 mb-6 pb-4 border-b border-slate-200">
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black shadow-sm",
                          isWarningSection
                            ? "bg-rose-100 text-rose-700 ring-2 ring-rose-300"
                            : "bg-blue-600 text-white shadow-blue-500/25"
                        )}
                      >
                        {sectionNumber}
                      </span>
                      <div>
                        <span
                          className={cn(
                            "text-[11px] font-black uppercase tracking-wider",
                            isWarningSection ? "text-rose-700" : "text-blue-700"
                          )}
                        >
                          Section {sectionNumber}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 mt-0.5">
                          {section.heading}
                        </h2>
                      </div>
                    </div>

                    {/* Section Paragraphs */}
                    {section.paragraphs && (
                      <div className="space-y-4 text-base sm:text-[16.5px] leading-relaxed text-slate-800 font-normal">
                        {section.paragraphs.map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                      </div>
                    )}

                    {/* Bullet Points / Checklist / Warnings List */}
                    {section.bullets && (
                      <div className="mt-7 space-y-3.5">
                        {section.bullets.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className={cn(
                              "rounded-2xl border p-4 sm:p-5 flex items-start gap-4 transition-all duration-200 hover:-translate-y-0.5 shadow-2xs hover:shadow-md",
                              isWarningSection
                                ? "border-rose-300 bg-white hover:border-rose-400"
                                : isQuestionSection
                                ? "border-indigo-200 bg-indigo-50/40 hover:border-indigo-300 hover:bg-white"
                                : "border-slate-200 bg-slate-50/70 hover:border-blue-300 hover:bg-white"
                            )}
                          >
                            {isWarningSection ? (
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-700 mt-0.5 border border-rose-200">
                                <AlertTriangle className="h-4 w-4" />
                              </div>
                            ) : isQuestionSection ? (
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 mt-0.5 font-black text-xs border border-indigo-200">
                                ?
                              </div>
                            ) : (
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700 mt-0.5 border border-blue-200">
                                <CheckCircle2 className="h-4 w-4" />
                              </div>
                            )}

                            <div className="text-sm sm:text-[15px] leading-relaxed text-slate-800">
                              {bullet.title && (
                                <strong className="block text-slate-950 font-bold text-sm sm:text-base mb-1">
                                  {bullet.title}
                                </strong>
                              )}
                              <span>{bullet.text}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Subsections Callout Boxes */}
                    {section.subsections && (
                      <div className="mt-7 space-y-4">
                        {section.subsections.map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            className="rounded-2xl border border-blue-200 bg-linear-to-r from-blue-50/80 via-indigo-50/50 to-white p-5 sm:p-6 shadow-xs"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <Zap className="h-4 w-4 text-blue-600" />
                              <h3 className="text-sm font-black uppercase tracking-wide text-blue-900">
                                {sub.title}
                              </h3>
                            </div>
                            {sub.paragraphs && (
                              <div className="space-y-2 text-sm sm:text-[15px] leading-relaxed text-slate-800">
                                {sub.paragraphs.map((subP, subPIdx) => (
                                  <p key={subPIdx}>{subP}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                );
              })}

              {/* Interactive FAQ Section */}
              {post.faqs && post.faqs.length > 0 && (
                <section
                  id="faqs"
                  className="scroll-mt-24 rounded-3xl border border-slate-300 bg-white p-6 sm:p-9 shadow-[0_10px_35px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.05)]"
                >
                  <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                        <HelpCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-blue-600">
                          Got Questions?
                        </span>
                        <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950">
                          Frequently Asked Questions
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3.5">
                    {post.faqs.map((faq, fIdx) => {
                      const isOpen = openFaqIndex === fIdx;
                      return (
                        <div
                          key={fIdx}
                          className={cn(
                            "rounded-2xl border transition-all duration-200 overflow-hidden shadow-2xs",
                            isOpen
                              ? "border-2 border-blue-400 bg-blue-50/40 shadow-md shadow-blue-500/5"
                              : "border-slate-300 bg-white hover:border-slate-400 hover:shadow-sm"
                          )}
                        >
                          <button
                            type="button"
                            onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                            className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer"
                          >
                            <span className="text-sm sm:text-base font-extrabold text-slate-900 flex items-start gap-2.5">
                              <span className="text-blue-600 font-black">Q{fIdx + 1}:</span>
                              <span>{faq.question.replace(/^Q:\s*/, "")}</span>
                            </span>
                            <span
                              className={cn(
                                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-transform duration-200",
                                isOpen
                                  ? "rotate-180 border-blue-400 bg-blue-100 text-blue-700"
                                  : "border-slate-300 bg-slate-50 text-slate-500"
                              )}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </span>
                          </button>

                          {isOpen && (
                            <div className="px-5 pb-5 pt-1 text-sm sm:text-[15px] leading-relaxed text-slate-700 border-t border-blue-100">
                              <p className="font-semibold">{faq.answer.replace(/^A:\s*/, "")}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* Internal Related Resources & Projects */}
              {post.internalLinks && post.internalLinks.length > 0 && (
                <section
                  id="resources"
                  className="scroll-mt-24 rounded-3xl border border-slate-300 bg-white p-6 sm:p-9 shadow-[0_10px_35px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.05)]"
                >
                  <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                        <Link2 className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-blue-600">
                          Recommended
                        </span>
                        <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950">
                          Related Resources &amp; Guides
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {post.internalLinks.map((link, lIdx) => (
                      <Link
                        key={lIdx}
                        href={link.url}
                        className="group flex items-center justify-between rounded-2xl border border-slate-300 bg-white p-4 sm:p-4.5 shadow-2xs transition-all hover:border-blue-400 hover:bg-blue-50/40 hover:shadow-md"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 border border-slate-300 text-blue-600 group-hover:border-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <FileText className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                            {link.text}
                          </span>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* High-Converting CTA Banner Card */}
              <section className="relative overflow-hidden rounded-3xl sm:rounded-4xl border-2 border-blue-400/50 bg-linear-to-br from-blue-600 via-indigo-700 to-slate-950 p-8 sm:p-12 text-white shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />
                <div className="relative max-w-2xl">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md border border-white/30 shadow-sm">
                    <Sparkles className="h-3.5 w-3.5 text-blue-200" />
                    Web Development &amp; Consulting in Goa
                  </span>
                  <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                    Ready to build or upgrade your business website?
                  </h2>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-blue-100 font-medium">
                    {post.ctaText}
                  </p>
                  
                  <div className="mt-8 flex flex-wrap items-center gap-3.5">
                    <button
                      type="button"
                      onClick={() => setIsInquiryModalOpen(true)}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs sm:text-sm font-black text-blue-700 shadow-xl transition-all hover:bg-blue-50 active:scale-95 cursor-pointer"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Start a Project with Pramod</span>
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

            {/* RIGHT COLUMN: STICKY TOC & STICKY AUTHOR CARDS */}
            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start lg:h-fit">
              {/* Sticky Table of Contents Card */}
              <div className="rounded-3xl border border-slate-300 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.1),0_2px_6px_rgba(15,23,42,0.04)]">
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4 text-blue-600" />
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-800">
                      Table of Contents
                    </h3>
                  </div>
                  <span className="text-[10px] font-extrabold text-slate-400 uppercase">
                    {post.sections.length + 2} Sections
                  </span>
                </div>

                <nav className="space-y-1 max-h-[28vh] overflow-y-auto pr-1 text-xs">
                  {/* Intro Item */}
                  <a
                    href="#introduction"
                    className={cn(
                      "group flex items-center justify-between rounded-xl px-3 py-1.5 font-bold transition-all",
                      activeSection === "introduction"
                        ? "bg-blue-50 text-blue-700 border border-blue-200 shadow-xs font-extrabold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <span className="line-clamp-1">00. Introduction</span>
                    {activeSection === "introduction" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    )}
                  </a>

                  {/* Dynamic Sections */}
                  {post.sections.map((sec, sIdx) => {
                    const secNum = String(sIdx + 1).padStart(2, "0");
                    const isActive = activeSection === sec.id;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className={cn(
                          "group flex items-center justify-between rounded-xl px-3 py-1.5 font-bold transition-all",
                          isActive
                            ? "bg-blue-50 text-blue-700 border border-blue-200 shadow-xs font-extrabold"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        )}
                      >
                        <span className="line-clamp-1">
                          {secNum}. {sec.heading}
                        </span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                        )}
                      </a>
                    );
                  })}

                  {/* FAQ Item */}
                  {post.faqs && post.faqs.length > 0 && (
                    <a
                      href="#faqs"
                      className={cn(
                        "group flex items-center justify-between rounded-xl px-3 py-1.5 font-bold transition-all",
                        activeSection === "faqs"
                          ? "bg-blue-50 text-blue-700 border border-blue-200 shadow-xs font-extrabold"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      <span className="line-clamp-1">FAQs</span>
                      {activeSection === "faqs" && (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      )}
                    </a>
                  )}

                  {/* Resources Item */}
                  {post.internalLinks && post.internalLinks.length > 0 && (
                    <a
                      href="#resources"
                      className={cn(
                        "group flex items-center justify-between rounded-xl px-3 py-1.5 font-bold transition-all",
                        activeSection === "resources"
                          ? "bg-blue-50 text-blue-700 border border-blue-200 shadow-xs font-extrabold"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      <span className="line-clamp-1">Related Resources</span>
                      {activeSection === "resources" && (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      )}
                    </a>
                  )}
                </nav>
              </div>

              {/* Sticky "Written By" Author Card */}
              <div className="rounded-3xl border border-slate-300 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.1),0_2px_6px_rgba(15,23,42,0.04)]">
                <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-200">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                    Written By
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open to Work
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-2xl ring-2 ring-blue-300 shadow-xs bg-slate-100 shrink-0">
                    <Image
                      src="/me.jpeg"
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

                <p className="mt-3 text-xs leading-relaxed text-slate-600 font-semibold">
                  Helping hotels, villas, restaurants, and businesses across Goa build fast, modern, and SEO-optimized web applications.
                </p>

                <div className="mt-4 space-y-2 pt-3 border-t border-slate-200">
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
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Quick Share Widget */}
              <div className="rounded-3xl border border-slate-300 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)] text-center">
                <span className="text-[11px] font-bold text-slate-500 block mb-2">
                  Found this article helpful?
                </span>
                <div className="flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={shareOnWhatsApp}
                    className="flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-colors shadow-2xs cursor-pointer"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={shareOnTwitter}
                    className="flex items-center gap-1.5 rounded-full border border-blue-300 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800 hover:bg-blue-100 transition-colors shadow-2xs cursor-pointer"
                  >
                    <Share2 className="h-3.5 w-3.5 text-blue-600" />
                    <span>Tweet</span>
                  </button>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom Related Articles Section */}
          <section className="mt-20 pt-16 border-t border-slate-300">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600">
                  Continue Reading
                </span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 mt-1">
                  More Articles &amp; Insights
                </h2>
              </div>
              <Link
                href="/#blog"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
              >
                <span>View All 6 Articles</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="group rounded-3xl border border-slate-300 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_16px_45px_rgba(37,99,235,0.14)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <span className="rounded-full border border-blue-300 bg-blue-50 px-3 py-0.5 text-[11px] font-black text-blue-700">
                        {other.topics[0] || "Article"}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500">
                        {other.readingTime}
                      </span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-950 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {other.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-600 line-clamp-3 font-semibold">
                      {other.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-extrabold text-blue-600">
                    <span>Read Full Guide</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
