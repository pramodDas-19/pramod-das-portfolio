"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { fadeIn, staggerContainer } from "@/lib/animations";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.59 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.59 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 17.5v-7.44H5.87v7.44h2.47Zm-1.23-8.46c.86 0 1.4-.57 1.4-1.29-.02-.73-.54-1.28-1.38-1.28s-1.39.55-1.39 1.28c0 .72.53 1.29 1.36 1.29h.01Zm11.02 8.46v-4.27c0-2.29-1.22-3.35-2.86-3.35-1.32 0-1.91.73-2.24 1.24v-1.06h-2.47c.03.7 0 7.44 0 7.44h2.47v-4.16c0-.22.02-.44.08-.6.18-.44.58-.9 1.25-.9.88 0 1.24.68 1.24 1.67v3.99h2.53Z" />
    </svg>
  );
}

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    let text = `👋 *Hi Pramod! New Contact Inquiry from your Portfolio Website.*\n\n`;
    text += `👤 *Name:* ${formData.name.trim()}\n`;
    if (formData.email.trim()) {
      text += `✉️ *Email:* ${formData.email.trim()}\n`;
    }
    if (formData.subject.trim()) {
      text += `📌 *Subject:* ${formData.subject.trim()}\n`;
    }
    if (formData.message.trim()) {
      text += `📝 *Message:*\n${formData.message.trim()}\n`;
    }

    const whatsappUrl = `https://wa.me/918767049312?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-white py-14 sm:py-16 select-none"
    >
      {/* Background Graphic Asset: public/contact.png */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 pointer-events-none z-0"
        style={{ backgroundImage: "url('/contact.png')" }}
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
        {/* Section Header */}
        <motion.div variants={fadeIn} className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-blue-700 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            GET IN TOUCH
          </div>
          <h2
            id="contact-heading"
            className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl leading-tight"
          >
            Let&apos;s Build Something Together.
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
            Have a freelance project, website idea, or professional opportunity? Send me a message below.
          </p>
        </motion.div>

        {/* Compact 2-Column Split Cards Grid */}
        <motion.div variants={fadeIn} className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] xl:grid-cols-[380px_1fr] gap-6 items-stretch">
            
            {/* Left Card: Direct Contact & Quick Social Links */}
            <article className="rounded-3xl border border-slate-300 bg-white p-6 sm:p-7 shadow-[0_12px_36px_rgba(15,23,42,0.09),0_2px_6px_rgba(15,23,42,0.04)] flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-black text-blue-700 shadow-2xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Open for Freelance &amp; Full-time Work
                </div>

                <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950">
                  Direct Contact
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 font-semibold">
                  Feel free to email me directly or reach out via WhatsApp, LinkedIn, and GitHub. I respond within 24 hours.
                </p>

                {/* Direct Specs */}
                <div className="mt-6 space-y-3 pt-5 border-t border-slate-200 text-xs font-semibold text-slate-700">
                  <a
                    href={`mailto:${siteConfig.author.email}`}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5 transition-all hover:bg-blue-50/80 hover:border-blue-300 hover:text-blue-700 group shadow-2xs"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-blue-100">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Email</p>
                      <p className="font-bold text-slate-900 truncate">{siteConfig.author.email}</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/918767049312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5 transition-all hover:bg-emerald-50/80 hover:border-emerald-300 hover:text-emerald-700 group shadow-2xs"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200 group-hover:bg-emerald-600 group-hover:text-white transition-colors border border-emerald-100">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Phone / WhatsApp</p>
                      <p className="font-bold text-slate-900 truncate">+91 8767049312</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5 shadow-2xs">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-200 border border-blue-100">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Location</p>
                      <p className="font-bold text-slate-900">Goa, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Connect Buttons */}
              <div className="pt-5 border-t border-slate-200">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                  <span>Connect Online</span>
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  <Link
                    href={siteConfig.author.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white p-3 text-xs font-bold text-slate-800 shadow-2xs transition-all hover:bg-slate-50 hover:border-slate-400 hover:shadow-xs"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3 w-3 text-slate-400" />
                  </Link>

                  <Link
                    href={siteConfig.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white p-3 text-xs font-bold text-slate-800 shadow-2xs transition-all hover:bg-slate-50 hover:border-slate-400 hover:shadow-xs"
                  >
                    <LinkedInIcon className="h-4 w-4 text-blue-600" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3 w-3 text-slate-400" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Right Card: Compact Interactive WhatsApp Form */}
            <article className="rounded-3xl border border-slate-300 bg-white p-6 sm:p-7 shadow-[0_12px_36px_rgba(15,23,42,0.09),0_2px_6px_rgba(15,23,42,0.04)] flex flex-col justify-between">
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
                      Send a Message
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Submits to WhatsApp
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-bold text-slate-800"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1.5 h-11 w-full rounded-2xl border border-slate-300 bg-slate-50/80 px-3.5 text-xs font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-2xs"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-bold text-slate-800"
                    >
                      Your Email / Phone <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="text"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1.5 h-11 w-full rounded-2xl border border-slate-300 bg-slate-50/80 px-3.5 text-xs font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-2xs"
                      placeholder="you@example.com or +91..."
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="text-xs font-bold text-slate-800"
                  >
                    Subject / Project Type
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="mt-1.5 h-11 w-full rounded-2xl border border-slate-300 bg-slate-50/80 px-3.5 text-xs font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-2xs"
                    placeholder="e.g. New Business Website / SaaS Development"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-bold text-slate-800"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1.5 w-full resize-none rounded-2xl border border-slate-300 bg-slate-50/80 px-3.5 py-2.5 text-xs font-semibold leading-relaxed text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100 shadow-2xs"
                    placeholder="Tell me about your project, goals, or timeline..."
                  />
                </div>

                <div className="pt-6 sm:pt-7">
                  <button
                    type="submit"
                    className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-emerald-600 px-6 text-sm font-black text-white shadow-[0_8px_20px_rgba(5,150,105,0.28)] transition-all hover:bg-emerald-700 hover:shadow-[0_12px_28px_rgba(5,150,105,0.36)] active:scale-95 cursor-pointer"
                  >
                    <span>Send via WhatsApp</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <p className="mt-2.5 text-center text-[11px] font-semibold text-slate-500">
                    ⚡ Form will instantly open WhatsApp with your message pre-filled to Pramod.
                  </p>
                </div>
              </form>
            </article>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

