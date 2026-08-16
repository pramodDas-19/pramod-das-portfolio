"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { BrowserShowcase } from "./browser-showcase";
import { HeroSocialRow } from "./hero-social-row";
import { fadeIn, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white select-none pt-24 pb-12 sm:pt-28 lg:pt-32 lg:pb-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: "url('/hero bg.png')" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12"
        >
          {/* Left Column - Controlled Headline, Value Prop & Actions */}
          <div className="flex flex-col items-start lg:col-span-6 xl:col-span-5 space-y-6">
            {/* Availability / Role Pill */}
            <motion.div variants={fadeIn}>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-600">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
                <span>{siteConfig.role}</span>
              </div>
            </motion.div>

            {/* Controlled Headline & Value Prop */}
            <motion.div variants={fadeIn} className="space-y-3">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.12]">
                {siteConfig.headline}
              </h1>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal max-w-xl">
                {siteConfig.description}
              </p>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <Link
                href="#projects"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-blue-600 px-7 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(37,99,235,0.28)] transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_16px_36px_rgba(37,99,235,0.36)] active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#contact"
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-7 text-sm font-semibold text-slate-900 shadow-2xs transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 active:scale-95"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={fadeIn} className="pt-2">
              <HeroSocialRow />
            </motion.div>
          </div>

          {/* Right Column - Jackson Decorators Video Showcase */}
          <motion.div
            variants={fadeIn}
            className="flex justify-center items-center lg:col-span-6 xl:col-span-7"
          >
            <BrowserShowcase videoSrc="/video/1.mp4" title="Jackson Decorators" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
