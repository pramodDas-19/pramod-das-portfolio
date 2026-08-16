"use client";

import * as React from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-3 sm:pt-4 pointer-events-none transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "pointer-events-auto flex h-14 sm:h-16 items-center justify-between rounded-full px-4 sm:px-6 transition-all duration-300",
            "bg-white border border-slate-300 shadow-[0_12px_40px_rgba(15,23,42,0.12),0_2px_6px_rgba(15,23,42,0.04)]",
            scrolled && "shadow-[0_16px_45px_rgba(15,23,42,0.16),0_4px_10px_rgba(15,23,42,0.06)]"
          )}
        >
          {/* Logo Mark: PRAMOD DAS • */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-slate-900 transition-opacity hover:opacity-90"
          >
            <span className="tracking-wider uppercase font-black text-slate-950">
              {siteConfig.name}
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1.5 rounded-full bg-slate-100/90 p-1 border border-slate-200/90 backdrop-blur-sm shadow-2xs">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-full px-4 py-1.5 text-xs font-bold text-slate-700 transition-all hover:text-blue-700 hover:bg-white hover:shadow-2xs"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Actions: Blue Resume Pill CTA & Mobile Nav */}
          <div className="flex items-center gap-3">
            {/* Resume Download CTA Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden sm:inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-5 py-2 text-xs font-bold text-white shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] transition-all hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.45)] active:scale-95"
            >
              <span>Resume</span>
              <Download className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>

            {/* Mobile Nav Drawer Button */}
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}

