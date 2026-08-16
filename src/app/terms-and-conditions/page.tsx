import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ChevronRight, FileCheck, Shield, HelpCircle, Code, Handshake } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms and Conditions | Pramod Das",
  description:
    "Terms and Conditions for Pramod Das Web Development services, client engagements, and website usage.",
  alternates: {
    canonical: `${siteConfig.url}/terms-and-conditions`,
  },
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "August 2026";

  return (
    <PageShell>
      <article className="relative w-full min-w-0 overflow-x-clip bg-linear-to-b from-white via-blue-50/30 to-white pt-24 pb-24 sm:pt-28 sm:pb-32">
        {/* Ambient Visuals */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-400/80 to-transparent" />
        <div className="bg-dot-pattern absolute inset-0 opacity-35 pointer-events-none" aria-hidden="true" />
        
        <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <Link href="/" className="transition-colors hover:text-blue-600">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-slate-900 font-black">Terms &amp; Conditions</span>
            </nav>

            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-700 active:scale-95"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Header Card */}
          <header className="mt-8 rounded-3xl sm:rounded-4xl border border-slate-300 bg-white p-6 sm:p-10 shadow-[0_15px_45px_rgba(15,23,42,0.1),0_2px_8px_rgba(15,23,42,0.04)]">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-blue-700 mb-4 shadow-2xs">
              <FileCheck className="h-3.5 w-3.5" />
              <span>Service Terms &amp; Guidelines</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-xs sm:text-sm font-semibold text-slate-500">
              Last Updated: {lastUpdated} • Goa, India
            </p>
          </header>

          {/* Content Card */}
          <div className="mt-8 rounded-3xl sm:rounded-4xl border border-slate-300 bg-white p-6 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgba(15,23,42,0.08)] space-y-10 text-slate-800 text-sm sm:text-base leading-relaxed">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2.5 text-blue-600">
                <Handshake className="h-5 w-5 shrink-0" />
                <h2 className="text-xl font-black text-slate-950 tracking-tight">
                  1. Overview &amp; Engagement Scope
                </h2>
              </div>
              <p className="text-slate-600 font-medium">
                Welcome to the portfolio of Pramod Das, Full Stack Web Developer based in Goa, India. By accessing this website or engaging services, you agree to these terms.
              </p>
              <p className="text-slate-600 font-medium">
                All client projects (including custom Next.js builds, WordPress migrations, business websites, and freelance software development) are executed based on agreed-upon scopes of work, milestones, and mutually approved timelines.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2.5 text-blue-600">
                <Code className="h-5 w-5 shrink-0" />
                <h2 className="text-xl font-black text-slate-950 tracking-tight">
                  2. Intellectual Property &amp; Deliverables
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700 font-medium">
                <li><strong>Client Ownership:</strong> Upon full milestone completion and final payment, complete ownership of the custom code, design assets, and website files created for the client is transferred to the client.</li>
                <li><strong>Portfolio Showcase:</strong> Unless governed by a specific non-disclosure agreement (NDA), we reserve the right to display completed project screenshots, links, and case study summaries in this developer portfolio.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2.5 text-blue-600">
                <Shield className="h-5 w-5 shrink-0" />
                <h2 className="text-xl font-black text-slate-950 tracking-tight">
                  3. Warranties &amp; Code Quality
                </h2>
              </div>
              <p className="text-slate-600 font-medium">
                All websites and applications are built adhering to modern web standards, security practices, responsive design principles, and SEO optimization. Standard post-launch support and bug fixes are provided for an agreed timeframe after project delivery.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2.5 text-blue-600">
                <HelpCircle className="h-5 w-5 shrink-0" />
                <h2 className="text-xl font-black text-slate-950 tracking-tight">
                  4. Inquiries &amp; Legal Jurisdiction
                </h2>
              </div>
              <p className="text-slate-600 font-medium">
                These terms are governed in accordance with the laws of Goa, India. For any questions or project agreements, please contact:
              </p>
              <div className="mt-3 p-4 rounded-2xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 space-y-1">
                <p><strong>Developer:</strong> Pramod Das</p>
                <p><strong>Email:</strong> <a href="mailto:daspramod479@gmail.com" className="text-blue-600 hover:underline">daspramod479@gmail.com</a></p>
                <p><strong>WhatsApp:</strong> +91 8767049312</p>
                <p><strong>Location:</strong> Goa, India</p>
              </div>
            </section>

          </div>
        </div>
      </article>
    </PageShell>
  );
}
