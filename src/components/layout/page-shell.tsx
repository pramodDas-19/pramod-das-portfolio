"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/layout/footer";
import { fadeInSimple } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <div className="relative flex min-h-screen w-full min-w-0 flex-col bg-white selection:bg-zinc-900 selection:text-white overflow-x-clip">
      {/* Dynamic Background Pattern */}
      <div 
        className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-60" 
        aria-hidden="true" 
      />

      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <motion.main
        variants={fadeInSimple}
        initial="hidden"
        animate="visible"
        className={cn("relative flex-1", className)}
      >
        {children}
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
