"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { siteConfig } from "@/config/site";

interface BrandIconProps {
  className?: string;
}

function GitHubIcon({ className }: BrandIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#181717" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.59 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.59 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: BrandIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 17.5v-7.44H5.87v7.44h2.47Zm-1.23-8.46c.86 0 1.4-.57 1.4-1.29-.02-.73-.54-1.28-1.38-1.28s-1.39.55-1.39 1.28c0 .72.53 1.29 1.36 1.29h.01Zm11.02 8.46v-4.27c0-2.29-1.22-3.35-2.86-3.35-1.32 0-1.91.73-2.24 1.24v-1.06h-2.47c.03.7 0 7.44 0 7.44h2.47v-4.16c0-.22.02-.44.08-.6.18-.44.58-.9 1.25-.9.88 0 1.24.68 1.24 1.67v3.99h2.53Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.author.github,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: siteConfig.author.linkedin,
    icon: LinkedInIcon,
  },
];

export function HeroSocialRow() {
  return (
    <div className="flex flex-wrap items-center gap-4 pt-3 sm:gap-5">
      {/* Social Brand Icon Buttons */}
      <div className="flex items-center gap-3 sm:gap-4">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="group flex h-13 w-13 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-[0_8px_20px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_14px_30px_rgba(37,99,235,0.12)]"
          >
            <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          </Link>
        ))}
      </div>

      {/* Subtle Vertical Divider */}
      <div className="hidden sm:block h-8 w-px bg-slate-200" aria-hidden="true" />

      {/* 4.9/5 Rating Badge Card */}
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-2.5 shadow-[0_8px_20px_rgba(15,23,42,0.06)] backdrop-blur-xs transition-all hover:border-amber-300 hover:shadow-[0_12px_28px_rgba(245,158,11,0.12)]">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            {/* Stars */}
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-xs font-black text-slate-950 ml-0.5">
              4.9/5
            </span>
          </div>
          <span className="text-[10px] font-bold text-slate-500 mt-0.5">
            Client Rating • 30+ Delivered
          </span>
        </div>
      </div>
    </div>
  );
}
