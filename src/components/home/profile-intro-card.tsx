"use client";

import * as React from "react";
import { siteConfig } from "@/config/site";
import { Globe, Smartphone, Sparkles, Cloud, User } from "lucide-react";

export function ProfileIntroCard() {
  return (
    <div className="relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-sm backdrop-blur-xl sm:p-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 items-center">
        {/* Left Bio Details */}
        <div className="flex flex-col space-y-2 sm:col-span-8">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600">
            HELLO, I&apos;M PRAMOD
          </div>

          <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 leading-snug">
            Building digital products{" "}
            <span className="text-blue-600">from idea to impact.</span>
          </h3>

          <p className="text-[11px] sm:text-xs leading-relaxed font-normal text-slate-600">
            I help startups and businesses build scalable, user-friendly solutions with clean code, modern tech and a product mindset.
          </p>

          {/* Skill / Capability Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700">
              <Globe className="h-3 w-3 text-blue-600" />
              <span>Web</span>
            </span>

            <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700">
              <Smartphone className="h-3 w-3 text-blue-600" />
              <span>Mobile</span>
            </span>

            <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700">
              <Sparkles className="h-3 w-3 text-blue-600" />
              <span>AI</span>
            </span>

            <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700">
              <Cloud className="h-3 w-3 text-blue-600" />
              <span>Cloud</span>
            </span>
          </div>
        </div>

        {/* Right Avatar Profile Photo & Signature */}
        <div className="flex flex-col items-center justify-center sm:col-span-4">
          <div className="relative group">
            {/* Glowing Blue Outer Ring */}
            <div className="absolute -inset-1 rounded-full bg-linear-to-r from-blue-600 to-indigo-500 opacity-80 blur-xs transition duration-300 group-hover:opacity-100" />

            <div className="relative flex h-20 w-20 sm:h-22 sm:w-22 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-slate-900 shadow-lg">
              {/* Profile Avatar Image / Graphic */}
              <div className="relative h-full w-full bg-linear-to-tr from-slate-900 via-blue-950 to-slate-800 flex items-center justify-center">
                <User className="h-10 w-10 text-blue-400" />
              </div>
            </div>
          </div>

          {/* Signature Script */}
          <div className="mt-2 font-signature text-xl font-bold tracking-wide text-blue-700 select-none">
            {siteConfig.name}
          </div>
        </div>
      </div>
    </div>
  );
}
