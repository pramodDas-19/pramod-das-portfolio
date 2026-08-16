"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileText,
  Sparkles,
} from "lucide-react";
import { BLOG_POSTS } from "@/config/blog-posts";
import { fadeIn, staggerContainer } from "@/lib/animations";

export function BlogSection() {
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
      id="blog"
      aria-labelledby="blog-heading"
      className="relative overflow-hidden bg-linear-to-b from-indigo-50/50 via-blue-50/70 to-white py-14 sm:py-16 select-none"
    >
      <div className="section-divider-blue absolute inset-x-0 top-0" />
      <div className="bg-dot-pattern absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-10 h-72 w-2xl -translate-x-1/2 rounded-full bg-blue-300/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Header Row: Title, Subtitle, CTA & Left/Right Navigation Controls */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-blue-700 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
              WRITING &amp; ARTICLES
            </div>
            <h2
              id="blog-heading"
              className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl leading-tight"
            >
              Latest Articles &amp; Insights.
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
              Thoughts, tutorials, and practical implementation notes from my full-stack web development journey.
            </p>
          </div>

          {/* Carousel Left/Right Navigation Controls */}
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

        {/* Blog Cards Horizontal Carousel Track */}
        <motion.div variants={fadeIn} className="relative mt-10">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 px-1 no-scrollbar scroll-smooth"
          >
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group w-[320px] sm:w-90 md:w-95 shrink-0 snap-start rounded-3xl border border-slate-300 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.08),0_2px_6px_rgba(15,23,42,0.03)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] flex flex-col justify-between"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col h-full"
                >
                  {/* Top Icon & Status Row */}
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-200 transition-colors group-hover:bg-blue-600 group-hover:text-white shadow-2xs">
                      <FileText className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-blue-300 bg-blue-50 px-3 py-1 text-[11px] font-extrabold text-blue-700 shadow-2xs">
                      <Sparkles className="h-3 w-3 text-blue-600" />
                      <span>{post.topics[0] || "Article"}</span>
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-950 tracking-tight line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 font-semibold line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Topic Badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-slate-300 bg-slate-50 px-2.5 py-0.5 text-[11px] font-bold text-slate-700"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Meta & Read Action */}
                  <div className="mt-auto pt-5 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-slate-600">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5 text-blue-600" />
                        <span>{post.dateLabel}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock3 className="h-3.5 w-3.5 text-blue-600" />
                        <span>{post.readingTime}</span>
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-black text-blue-600 group-hover:translate-x-1 transition-transform">
                      <span>Read</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
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

