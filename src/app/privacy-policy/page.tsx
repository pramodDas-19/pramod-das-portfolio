import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ChevronRight, ShieldCheck, Mail, Lock, Eye, FileText } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Pramod Das",
  description:
    "Privacy Policy for Pramod Das Web Development services. Learn how your data and inquiries are handled responsibly and securely.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
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
              <span className="text-slate-900 font-black">Privacy Policy</span>
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
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Data Protection &amp; Transparency</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
              Privacy Policy
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
                <Eye className="h-5 w-5 shrink-0" />
                <h2 className="text-xl font-black text-slate-950 tracking-tight">
                  1. Information We Collect
                </h2>
              </div>
              <p className="text-slate-600 font-medium">
                When you visit this website or reach out regarding a project, we may collect the information you voluntarily provide:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700 font-medium">
                <li><strong>Contact Inquiries:</strong> Your name, email address, phone/WhatsApp number, and project details submitted through our contact forms or direct WhatsApp links.</li>
                <li><strong>Usage Data:</strong> Standard anonymous website performance data (such as page views and browser types) used to ensure fast load times and optimal mobile viewing.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2.5 text-blue-600">
                <Lock className="h-5 w-5 shrink-0" />
                <h2 className="text-xl font-black text-slate-950 tracking-tight">
                  2. How We Use Your Information
                </h2>
              </div>
              <p className="text-slate-600 font-medium">
                Any information you share is used strictly for professional communication regarding freelance web development, consulting, or software engineering inquiries:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700 font-medium">
                <li>To discuss your project requirements, scope, timelines, and quotations.</li>
                <li>To coordinate project deliverables and client communication.</li>
                <li><strong>No Spam &amp; No Selling:</strong> We never sell, rent, trade, or share your contact details with third-party marketers or advertisers.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2.5 text-blue-600">
                <FileText className="h-5 w-5 shrink-0" />
                <h2 className="text-xl font-black text-slate-950 tracking-tight">
                  3. External Links &amp; Third-Party Services
                </h2>
              </div>
              <p className="text-slate-600 font-medium">
                This website includes links to third-party platforms such as GitHub, LinkedIn, and WhatsApp. When you click these links, their respective privacy policies apply. We encourage you to review their terms.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2.5 text-blue-600">
                <Mail className="h-5 w-5 shrink-0" />
                <h2 className="text-xl font-black text-slate-950 tracking-tight">
                  4. Contact &amp; Questions
                </h2>
              </div>
              <p className="text-slate-600 font-medium">
                If you have any questions about this Privacy Policy or wish to have your contact details updated or deleted, feel free to reach out directly:
              </p>
              <div className="mt-3 p-4 rounded-2xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-800 space-y-1">
                <p><strong>Developer:</strong> Pramod Das</p>
                <p><strong>Email:</strong> <a href="mailto:daspramod479@gmail.com" className="text-blue-600 hover:underline">daspramod479@gmail.com</a></p>
                <p><strong>Phone / WhatsApp:</strong> +91 8767049312</p>
                <p><strong>Location:</strong> Goa, India</p>
              </div>
            </section>

          </div>
        </div>
      </article>
    </PageShell>
  );
}
