"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { navMenuVariants } from "@/lib/animations";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Close mobile nav on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile nav is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 inline-flex items-center justify-center rounded-full p-2 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 transition-colors"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop (Normal Clean Overlay, No Blur) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-slate-950/40"
            />

            {/* Menu Dropdown Card (Solid White, No Text Bleed) */}
            <motion.div
              variants={navMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-x-4 top-20 z-50 overflow-hidden rounded-3xl border-2 border-slate-300 bg-white p-6 shadow-[0_25px_60px_rgba(15,23,42,0.25)]"
            >
              <div className="flex flex-col space-y-4">
                <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-100">
                  Navigation Menu
                </div>
                <nav className="flex flex-col space-y-1">
                  {siteConfig.navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3.5 py-3 text-base font-bold text-slate-900 transition-colors hover:bg-slate-50 active:bg-blue-50 active:text-blue-700"
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="rounded-full bg-blue-100 border border-blue-200 px-2 py-0.5 text-xs font-extrabold text-blue-700">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </nav>

                <div className="pt-4 border-t border-slate-200 flex flex-col space-y-3">
                  <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-slate-950 px-4 py-3.5 text-sm font-black text-white shadow-md transition-all hover:bg-blue-600 active:scale-[0.98]"
                  >
                    <span>Get in Touch</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <div className="flex items-center justify-between px-1 text-xs text-slate-500 font-semibold">
                    <span>Status</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-extrabold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Available for projects
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
