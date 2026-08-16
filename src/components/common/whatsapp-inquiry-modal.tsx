"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MessageSquare,
  Sparkles,
  Send,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

interface WhatsAppInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  contextTitle?: string;
  defaultService?: string;
}

const SERVICE_OPTIONS = [
  "Business Website",
  "Full-Stack Web App",
  "WordPress to Next.js",
  "E-Commerce / Store",
  "Website Redesign & SEO",
  "Freelance Consultation",
];

const BUDGET_OPTIONS = [
  "₹15,000 – ₹30,000",
  "₹30,000 – ₹60,000",
  "₹60,000 – ₹1,20,000",
  "₹1,20,000+",
  "Discuss with Pramod",
];

export function WhatsAppInquiryModal({
  isOpen,
  onClose,
  contextTitle,
  defaultService,
}: WhatsAppInquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState(
    defaultService || SERVICE_OPTIONS[0]
  );
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_OPTIONS[0]);
  const [message, setMessage] = useState("");

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    let text = `👋 *Hi Pramod! I would like to discuss a project with you.*\n\n`;
    text += `👤 *Name:* ${name.trim()}\n`;
    if (phone.trim()) {
      text += `📞 *Phone:* ${phone.trim()}\n`;
    }
    text += `🎯 *Service Required:* ${selectedService}\n`;
    text += `💰 *Budget Range:* ${selectedBudget}\n`;

    if (contextTitle) {
      text += `📍 *Referenced From:* ${contextTitle}\n`;
    }

    if (message.trim()) {
      text += `📝 *Project Details:*\n${message.trim()}\n`;
    } else {
      text += `📝 *Project Details:* Looking forward to discussing scope, timeline, and deliverables on WhatsApp!\n`;
    }

    const whatsappUrl = `https://wa.me/918767049312?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
            className="relative w-full max-w-lg rounded-3xl border-2 border-slate-300 bg-white p-6 sm:p-8 shadow-[0_25px_70px_rgba(15,23,42,0.25)] z-10 my-auto"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-slate-50 text-slate-500 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-all shadow-xs cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="pr-8">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-emerald-700 shadow-2xs mb-2.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Instant WhatsApp Inquiry</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Let&apos;s Discuss Your Project
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                Fill in a few quick details and click submit to chat directly with Pramod on WhatsApp.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Name & Phone Row */}
              <div className="grid gap-3.5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="popup-name"
                    className="block text-xs font-bold text-slate-800 mb-1"
                  >
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="popup-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="h-10 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-xs font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-3 focus:ring-blue-100 shadow-2xs"
                  />
                </div>

                <div>
                  <label
                    htmlFor="popup-phone"
                    className="block text-xs font-bold text-slate-800 mb-1"
                  >
                    Phone / WhatsApp <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="popup-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 9876543210"
                    className="h-10 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-xs font-semibold text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-3 focus:ring-blue-100 shadow-2xs"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Service / Project Type
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {SERVICE_OPTIONS.map((srv) => {
                    const isSelected = selectedService === srv;
                    return (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setSelectedService(srv)}
                        className={`px-2.5 py-2 text-[11px] font-bold rounded-xl border text-center transition-all cursor-pointer truncate ${
                          isSelected
                            ? "border-blue-500 bg-blue-50 text-blue-700 shadow-xs ring-1 ring-blue-400"
                            : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Estimated Budget Range
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {BUDGET_OPTIONS.map((bgt) => {
                    const isSelected = selectedBudget === bgt;
                    return (
                      <button
                        key={bgt}
                        type="button"
                        onClick={() => setSelectedBudget(bgt)}
                        className={`px-2.5 py-1.5 text-[11px] font-bold rounded-full border transition-all cursor-pointer ${
                          isSelected
                            ? "border-emerald-500 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-400 shadow-2xs"
                            : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50"
                        }`}
                      >
                        {bgt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Details Message */}
              <div>
                <label
                  htmlFor="popup-message"
                  className="block text-xs font-bold text-slate-800 mb-1"
                >
                  Project Details / Requirements <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="popup-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell Pramod about your business, website goals, or timeline..."
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-xs font-semibold leading-relaxed text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-3 focus:ring-blue-100 shadow-2xs resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 px-6 py-3.5 text-xs sm:text-sm font-black text-white shadow-[0_10px_25px_rgba(5,150,105,0.3)] transition-all hover:bg-emerald-700 hover:shadow-[0_15px_30px_rgba(5,150,105,0.4)] active:scale-95 cursor-pointer"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  <span>Send &amp; Chat on WhatsApp</span>
                </button>
                <p className="mt-2 text-center text-[11px] font-semibold text-slate-500">
                  ⚡ Opens WhatsApp with pre-filled message. No spam guaranteed.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
