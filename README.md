# Pramod Das — Full Stack Web Developer Portfolio & Showcase

A modern, high-performance developer portfolio, interactive AI assistant, and freelance service platform built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Google Gemini AI**.

Designed and engineered for lightning-fast load times, local Goa SEO dominance, high-conversion client pipelines, and dynamic case study presentations.

---

## 🌟 Key Features

- **🤖 Interactive AI Assistant ("Pramod's AI Twin")**:
  - **Hybrid Dual-Engine Architecture**: Powered by Google's **Gemini AI** for dynamic conversational responses with an automatic **Offline Grounded Semantic Classifier** fallback.
  - **Rich Markdown & Smart Action Badges**: Dynamically transforms contact links into interactive action badges (one-tap WhatsApp chat, direct email, GitHub, LinkedIn).
  - **Floating Avatar Launcher**: Features rotating teaser pills, ambient glow effects, live status indicator, and Framer Motion spring physics.
  - **Enterprise Guardrails**: Hardened against prompt injection, hallucinations, and out-of-scope topics with graceful web-development pivots.
- **⚡ Blazing-Fast Performance**: Built on Next.js Server Components and optimized assets for 90+ Lighthouse scores and instant page transitions.
- **💼 11 In-Depth Project Case Studies**: Editorial case study breakdowns with video/media showcase frames, tech stack badges, key features checklists, technical development details, and related projects.
- **📝 6 SEO-Optimized Blog Articles**: In-depth guides targeting high-intent web development queries in Goa with sticky Table of Contents, Author sidebars, and Google FAQ schema.
- **💬 Direct WhatsApp Inquiry Integration**:
  - Interactive popup modal with service chips, budget selector, and custom message builder.
  - Homepage contact form that instantly formats and opens pre-filled chats with Pramod (`+91 8767049312`).
- **🔍 Advanced SEO & Structured Data**:
  - Full **JSON-LD Schemas**: `Person`, `ProfessionalService`, `WebSite`, `BlogPosting`, `FAQPage`, `CreativeWork`, and `BreadcrumbList`.
  - Dynamic `sitemap.xml` with priority weighting and crawler-friendly `robots.txt`.
- **🎨 Modern Design System**:
  - Precision dark borders and multi-layered deep shadows for distinct card separation.
  - Micro-interactions and smooth page transitions powered by Framer Motion.
  - Fully responsive across desktop, tablet, and mobile devices.
- **📄 Legal & Trust Pages**: Dedicated [Privacy Policy](/privacy-policy) and [Terms & Conditions](/terms-and-conditions) pages.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **AI & LLM**: [Google Gemini AI](https://ai.google.dev/) (`gemini-flash-latest` via Google Generative Language REST API)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Geist Sans & Geist Mono via `next/font`

---

## 📁 Project Structure

```text
developer-portfolio/
├── public/                         # Static assets (images, logos, resume.pdf, video previews)
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── api/
│   │   │   └── chat/               # Dynamic AI Chat API route handler (Gemini + Fallback)
│   │   ├── blog/
│   │   │   └── [slug]/             # Dynamic blog article pages with FAQ schema
│   │   ├── projects/
│   │   │   └── [slug]/             # Dynamic project case study pages
│   │   ├── privacy-policy/         # Privacy Policy legal page
│   │   ├── terms-and-conditions/   # Terms & Conditions legal page
│   │   ├── layout.tsx              # Root layout & global SEO metadata
│   │   ├── page.tsx                # Homepage with Schema.org JSON-LD
│   │   ├── robots.ts               # Dynamic robots.txt
│   │   └── sitemap.ts              # Dynamic sitemap.xml
│   ├── components/
│   │   ├── ai-assistant/           # Pramod's AI Twin Widget, Window, Messages & Input
│   │   ├── blog/                   # Blog view, sticky TOC, author card & CTA banner
│   │   ├── common/                 # WhatsApp inquiry modal & shared UI components
│   │   ├── home/                   # Hero, About, Projects, Skills, Experience, Blog, Contact
│   │   ├── layout/                 # Header, Navbar, Footer, PageShell
│   │   ├── navigation/             # Desktop & Mobile drawer navigation
│   │   └── project/                # Project case study layout & detail views
│   ├── config/
│   │   ├── blog-posts.ts           # Content & SEO schema for all 6 articles
│   │   ├── case-studies.ts         # Detailed case study content for 11 projects
│   │   ├── projects.ts             # Homepage featured work carousel data
│   │   └── site.ts                 # Site metadata, contact info, and navigation items
│   └── lib/
│       ├── ai/                     # AI Knowledge Base, System Prompts & Fallback Classifier
│       ├── animations.ts           # Framer motion animation variants
│       └── utils.ts                # Class merging utility (clsx / tailwind-merge)
├── .env.example                    # Environment variables template
├── next.config.ts                  # Next.js configuration
├── postcss.config.mjs              # PostCSS configuration
└── tsconfig.json                   # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or higher
- npm / yarn / pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pramodDas-19/developer-portfolio.git
   cd developer-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   # Optional: Google Gemini API Key for dynamic LLM generation
   # If omitted, the chatbot runs in 100% offline grounded knowledge mode
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**:
   ```bash
   npm run build
   ```

6. **Start production server**:
   ```bash
   npm run start
   ```

---

## 🤖 AI Chatbot Configuration

The AI Assistant (**Pramod's AI Twin**) works in two modes:

| Mode | Trigger Condition | Features |
| :--- | :--- | :--- |
| **Dynamic Gemini Mode** | `GEMINI_API_KEY` set in `.env.local` | Powered by `gemini-flash-latest`, streams human-like custom answers grounded in Pramod's background with safety guardrails. |
| **Local Grounded Mode** | No API Key / Network Error / Rate Limit | 100% zero-config offline rule-based semantic classifier matching 19+ intent categories with instant response times. |

---

## 📞 Contact & Social Profiles

- **Developer**: Pramod Das
- **Email**: [daspramod479@gmail.com](mailto:daspramod479@gmail.com)
- **Phone / WhatsApp**: [+91 8767049312](https://wa.me/918767049312)
- **GitHub**: [pramodDas-19](https://github.com/pramodDas-19)
- **LinkedIn**: [pramoddas19](https://www.linkedin.com/in/pramoddas19/)
- **Location**: Goa, India

---

## 📜 License

© 2026 Pramod Das. All rights reserved.
