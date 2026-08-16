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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-zinc-900/20 backdrop-blur-sm"
            />

            {/* Menu Dropdown */}
            <motion.div
              variants={navMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-x-4 top-20 z-40 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/95 p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex flex-col space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Navigation
                </div>
                <nav className="flex flex-col space-y-1">
                  {siteConfig.navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </nav>

                <div className="pt-4 border-t border-zinc-100 flex flex-col space-y-3">
                  <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-zinc-900 px-4 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-[0.98]"
                  >
                    <span>Get in Touch</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <div className="flex items-center justify-between px-1 text-xs text-zinc-500">
                    <span>Status</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-medium">
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
