"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Star, Sparkles } from "lucide-react";

export function ClientTrustGrid() {
  return (
    <div className="flex flex-col space-y-2.5">
      {/* Header Label */}
      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
        TRUSTED BY CLIENTS & PARTNERS
      </div>

      {/* Grid of Logos & Rating Card */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-5 items-stretch">
        {/* Cosmic Solutions Card */}
        <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-slate-200/80 bg-white/90 p-2.5 shadow-2xs transition-all hover:border-blue-200 hover:shadow-xs">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <span className="text-[10px] font-extrabold tracking-tight text-slate-900 uppercase">
            COSMIC
          </span>
          <span className="text-[8px] font-semibold text-slate-500 uppercase tracking-widest">
            SOLUTIONS
          </span>
        </div>

        {/* GitHub Card */}
        <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-slate-200/80 bg-white/90 p-2.5 shadow-2xs transition-all hover:border-blue-200 hover:shadow-xs">
          <svg className="h-5 w-5 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span className="text-[11px] font-bold text-slate-900">GitHub</span>
        </div>

        {/* Google Card */}
        <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-slate-200/80 bg-white/90 p-2.5 shadow-2xs transition-all hover:border-blue-200 hover:shadow-xs">
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
          <span className="text-[11px] font-bold text-slate-900">Google</span>
        </div>

        {/* LinkedIn Card */}
        <div className="flex flex-col items-center justify-center gap-1 rounded-xl border border-slate-200/80 bg-white/90 p-2.5 shadow-2xs transition-all hover:border-blue-200 hover:shadow-xs">
          <svg className="h-5 w-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
          <span className="text-[11px] font-bold text-[#0A66C2]">LinkedIn</span>
        </div>

        {/* 5.0 Rating Card */}
        <div className="col-span-2 sm:col-span-1 flex flex-col items-center justify-center gap-0.5 rounded-xl border border-amber-200/60 bg-amber-50/40 p-2.5 shadow-2xs">
          <div className="flex items-center gap-0.5 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs font-extrabold text-slate-900">5.0</span>
          <span className="text-[9px] font-semibold text-slate-500">Client Rating</span>
        </div>
      </div>

      {/* Link at bottom */}
      <Link
        href="#experience"
        className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 transition-colors hover:text-blue-700 pt-0.5"
      >
        <span>View all clients</span>
        <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  );
}
