"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { WhatsAppInquiryModal } from "@/components/common/whatsapp-inquiry-modal";

const skillHighlights = [
  "Clean Code",
  "Performance Focused",
  "Problem Solver",
  "Business Focused",
];

const quickSpecs = [
  {
    label: "Based in",
    value: "Goa, India",
    icon: MapPin,
  },
  {
    label: "Role",
    value: "Full Stack Developer",
    icon: Code2,
  },
  {
    label: "Experience",
    value: "2+ Years (30+ Sites)",
    icon: BriefcaseBusiness,
  },
  {
    label: "Availability",
    value: "Open for Freelance and Full-time Work",
    icon: Handshake,
  },
];

export function AboutSection() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 select-none"
    >
      {/* WhatsApp Inquiry Modal */}
      <WhatsAppInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        contextTitle="Homepage About Section"
        defaultService="Business Website"
      />
      {/* Background Graphic Asset: public/about.png */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 pointer-events-none z-0"
        style={{ backgroundImage: "url('/about.png')" }}
        aria-hidden="true"
      />
      <div className="section-divider-blue absolute inset-x-0 top-0 z-10" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Top Floating Badge on Left */}
        <div className="absolute left-4 top-0 hidden sm:block">

        </div>

        {/* Center Header: Badge, Title & Subtitle */}
        <motion.div variants={fadeIn} className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-blue-700 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            ABOUT ME
          </div>
          <h2
            id="about-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl leading-tight"
          >
            Full Stack Web Developer in Goa, building practical web products.
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
            A developer focused on building useful, scalable, and well-crafted digital experiences.
          </p>
        </motion.div>

        {/* Main 3-Column Layout */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr_300px] xl:grid-cols-[320px_1fr_320px] items-stretch">
          {/* Column 1: Developer Profile Card */}
          <motion.article
            variants={fadeIn}
            className="rounded-3xl border border-slate-300 bg-white p-6 shadow-[0_14px_42px_rgba(15,23,42,0.09),0_2px_6px_rgba(15,23,42,0.04)] flex flex-col items-center text-center relative overflow-hidden"
          >
            {/* Avatar Profile Photo */}
            <div className="relative h-28 w-28 rounded-full overflow-hidden border-2 border-white shadow-md bg-slate-100 mb-4 ring-4 ring-blue-100">
              <Image
                src="/avatar.png"
                alt="Pramod Das"
                fill
                className="object-cover"
                priority
                sizes="112px"
              />
            </div>

            {/* Name & Title */}
            <h3 className="text-xl font-black text-slate-950 tracking-tight">
              Pramod Das
            </h3>
            <p className="text-xs font-bold text-slate-500 mt-0.5">
              Full Stack Developer
            </p>

            {/* Contact Details List */}
            <div className="w-full mt-6 space-y-3 pt-5 border-t border-slate-200 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-3 justify-start px-3 py-2 rounded-xl border border-slate-200 bg-slate-50/70">
                <MapPin className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Goa, India</span>
              </div>
              <div className="flex items-center gap-3 justify-start px-3 py-2 rounded-xl border border-slate-200 bg-slate-50/70">
                <Mail className="h-4 w-4 text-blue-600 shrink-0" />
                <span className="truncate">daspramod479@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 justify-start px-3 py-2 rounded-xl border border-slate-200 bg-slate-50/70">
                <Phone className="h-4 w-4 text-blue-600 shrink-0" />
                <span>+91 8767049312</span>
              </div>
            </div>

            {/* Bottom Availability Button */}
            <div className="mt-auto pt-6 w-full">
              <button
                type="button"
                onClick={() => setIsInquiryModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-xs font-black text-white shadow-[0_8px_20px_rgba(37,99,235,0.28)] transition-all hover:bg-blue-700 active:scale-95 cursor-pointer"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for Freelance Work</span>
              </button>
            </div>
          </motion.article>

          {/* Column 2: Bio Paragraphs & Skill Highlight Badges */}
          <motion.article
            variants={fadeIn}
            className="flex flex-col justify-between p-2 lg:p-4 space-y-6"
          >
            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-slate-700 font-semibold">
              <p>
                I&apos;m Pramod Das, a Full-Stack Software Engineer at Cosmic Solutions, where I build and ship production web and mobile applications end-to-end — from database architecture to deployed user interfaces.
              </p>
              <p>
                Over the past 2+ years, I&apos;ve delivered 30+ business websites and full-stack applications using React.js, Next.js, Node.js, and Express, backed by PostgreSQL, MongoDB, and MySQL. I specialize in custom React/Node product builds as well as tailored WordPress client sites.
              </p>
            </div>

            {/* Skill Highlight Pills (Row at Bottom of Bio) */}
            <div className="pt-4 flex flex-wrap gap-2 sm:gap-2.5">
              {skillHighlights.map((skill) => (
                <div
                  key={skill}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-2xs transition-all hover:border-blue-400 hover:text-blue-700 hover:shadow-xs"
                >
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.article>

          {/* Column 3: Quick Specs Card */}
          <motion.article
            variants={fadeIn}
            className="rounded-3xl border border-slate-300 bg-white p-6 shadow-[0_14px_42px_rgba(15,23,42,0.09),0_2px_6px_rgba(15,23,42,0.04)] flex flex-col justify-around space-y-5"
          >
            {quickSpecs.map((spec) => {
              const Icon = spec.icon;

              return (
                <div key={spec.label} className="flex items-center gap-4 p-2.5 rounded-2xl border border-slate-200 bg-slate-50/70 shadow-2xs">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-200 border border-blue-100">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                      {spec.label}
                    </p>
                    <p className="text-xs sm:text-sm font-black text-slate-950 mt-0.5 leading-snug">
                      {spec.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}

