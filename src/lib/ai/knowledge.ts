import { siteConfig } from "@/config/site";
import { PROJECTS } from "@/config/projects";

export interface AIKnowledgeBase {
  name: string;
  role: string;
  location: string;
  headline: string;
  bio: string;
  experienceSummary: string;
  currentRole: {
    title: string;
    company: string;
    period: string;
    location: string;
    responsibilities: string[];
  };
  skills: {
    frontend: string[];
    backend: string[];
    databases: string[];
    stylingAndUi: string[];
    toolsAndDevOps: string[];
    architectureAndCore: string[];
  };
  services: {
    name: string;
    description: string;
  }[];
  featuredProjects: {
    title: string;
    category: string;
    description: string;
    tags: string[];
    type: string;
    liveUrl?: string;
    githubUrl?: string;
  }[];
  blogArticles: {
    title: string;
    slug: string;
    topic: string;
    summary: string;
  }[];
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    github: string;
    linkedin: string;
    portfolioUrl: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const aiKnowledge: AIKnowledgeBase = {
  name: siteConfig.name,
  role: siteConfig.role,
  location: "Goa, India",
  headline: siteConfig.headline,
  bio: "Pramod Das is a Full Stack Web Developer based in Goa, India. With 2+ years of production experience and having contributed to 30+ production websites and web applications, he specializes in building modern, performant, and scalable web solutions using Next.js, React, TypeScript, Node.js, and Tailwind CSS. He is passionate about crafting intuitive user interfaces, high-converting business sites, and robust full-stack systems.",
  experienceSummary: "2+ years of hands-on experience building 30+ client and enterprise websites & applications. Currently working as a Full Stack Web Developer at Cosmic Solutions in Goa.",
  currentRole: {
    title: "Full Stack Web Developer",
    company: "Cosmic Solutions",
    period: "2025 — Present",
    location: "Goa, India",
    responsibilities: [
      "Building high-performance, production-facing web applications with Next.js and TypeScript.",
      "Developing scalable backend APIs, database schemas, and cloud integrations.",
      "Optimizing web applications for top-tier Lighthouse scores (90+), Core Web Vitals, and SEO.",
      "Translating complex business logic into clean, user-friendly, responsive interfaces.",
    ],
  },
  skills: {
    frontend: [
      "Next.js 15/16 (App Router & Server Components)",
      "React 19 / React.js",
      "TypeScript & JavaScript (ES6+)",
      "HTML5 & Semantic Markup",
      "State Management (Zustand, React Context)",
    ],
    backend: [
      "Node.js & Express.js",
      "Next.js Route Handlers & Server Actions",
      "RESTful APIs & GraphQL",
      "Authentication (JWT, OAuth, NextAuth)",
    ],
    databases: [
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM & Mongoose",
      "Supabase",
      "Redis",
    ],
    stylingAndUi: [
      "Tailwind CSS v4",
      "Framer Motion (Micro-animations)",
      "Shadcn UI",
      "Lucide Icons",
      "Responsive & Mobile-First Design",
      "Dark Mode & Theming",
    ],
    toolsAndDevOps: [
      "Git & GitHub",
      "Vercel Deployment",
      "Docker",
      "Postman",
      "npm / pnpm / yarn",
      "VS Code",
    ],
    architectureAndCore: [
      "Server-Side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "Incremental Static Regeneration (ISR)",
      "Performance Optimization & Core Web Vitals",
      "Technical On-Page SEO",
      "Clean Architecture & Modular Code",
    ],
  },
  services: [
    {
      name: "Custom Full-Stack Web Applications",
      description: "End-to-end SaaS products, internal dashboards, portals, and field service platforms built with Next.js, TypeScript, and modern databases.",
    },
    {
      name: "High-Converting Business Websites",
      description: "Ultra-fast, responsive websites for agencies, resorts, private villas, clinics, restaurants, and B2B companies designed to turn visitors into leads.",
    },
    {
      name: "E-Commerce & Storefronts",
      description: "Modern e-commerce stores with product catalogs, shopping carts, payment gateways, and WhatsApp quick-order pathways.",
    },
    {
      name: "Performance & SEO Overhauls",
      description: "Boosting website speed to 90+ Lighthouse scores, resolving Core Web Vitals issues, and optimizing technical SEO for Google rankings.",
    },
    {
      name: "WordPress to Next.js Migration",
      description: "Upgrading slow, bloated WordPress websites to blazing-fast, secure, and modern React / Next.js web applications.",
    },
  ],
  featuredProjects: PROJECTS.map((p) => ({
    title: p.title,
    category: p.category,
    description: p.description,
    tags: p.tags,
    type: p.type,
    liveUrl: p.liveUrl,
    githubUrl: p.githubUrl,
  })),
  // FIXED: now lists all 6 published blog articles (was only 3)
  blogArticles: [
    {
      title: "How to Choose the Right Web Developer in Goa for Your Business",
      slug: "how-to-choose-web-developer-in-goa",
      topic: "Hiring Guide & Trade-offs",
      summary: "A practical guide for business owners on evaluating portfolios, freelancer vs agency trade-offs, and critical questions to ask.",
    },
    {
      title: "How Much Does a Business Website Cost in Goa? (Realistic Breakdown)",
      slug: "website-development-cost-in-goa",
      topic: "Pricing & ROI",
      summary: "A clear, honest breakdown of what affects business website pricing in Goa — from simple sites to e-commerce.",
    },
    {
      title: "Why Every Business in Goa Needs a Professional Website in 2026",
      slug: "why-every-business-in-goa-needs-a-website-2026",
      topic: "Local Business Growth",
      summary: "Why hotels, villas, restaurants, and local businesses in Goa still need a proper website even with an active Instagram presence.",
    },
    {
      title: "Freelance Web Developer in Goa vs Web Development Agency: Which Is Better?",
      slug: "freelance-web-developer-vs-agency-goa",
      topic: "Freelancer vs Agency",
      summary: "An honest, side-by-side comparison of freelancers, small agencies, and large agencies for business website projects.",
    },
    {
      title: "What Makes a Good Business Website? 10 Things Every Business Owner Should Check",
      slug: "what-makes-a-good-business-website",
      topic: "UX & Design Checklist",
      summary: "A practical, non-technical checklist covering design, speed, SEO, trust signals, and more.",
    },
    {
      title: "Website vs Instagram: Why Goa Businesses Should Use Both",
      slug: "website-vs-instagram-goa-businesses",
      topic: "Social Media vs Website",
      summary: "Why Instagram and a website serve different purposes, and how Goa businesses can use both together effectively.",
    },
  ],
  contact: {
    // FIXED: was missing "mailto:" prefix, which caused broken links
    // (previously resolved to http://localhost:3000/<email>)
    email: `mailto:${siteConfig.author.email}`,
    phone: siteConfig.author.phone || "+91 8767049312",
    whatsapp: siteConfig.author.whatsapp || "https://wa.me/918767049312",
    github: siteConfig.author.github,
    linkedin: siteConfig.author.linkedin,
    portfolioUrl: siteConfig.url,
  },
  faqs: [
    {
      question: "Is Pramod available for freelance projects?",
      answer: "Yes! Pramod is actively taking on freelance projects, custom business website builds, contract roles, and technical consulting.",
    },
    {
      question: "Is Pramod looking for full-time opportunities?",
      answer: "Yes, Pramod is open to exciting full-time remote or on-site opportunities as a Full Stack Web Developer or Frontend Engineer.",
    },
    {
      question: "Where is Pramod based?",
      answer: "Pramod is based in Goa, India (UTC+5:30), and works seamlessly with clients and engineering teams across the globe.",
    },
    {
      question: "What is Pramod's typical project timeline?",
      answer: "Standard business websites take around 1 to 2 weeks, while custom full-stack web applications and SaaS platforms typically take 3 to 6 weeks depending on the feature scope.",
    },
    {
      // ADDED: pricing wasn't covered as its own FAQ entry before,
      // even though it's a very common question the bot needs to handle consistently.
      question: "How much does a website cost?",
      answer: "Pricing depends on scope — a standard business website, a custom full-stack application, and an e-commerce store all have very different requirements. Message Pramod on WhatsApp or Email with your project details for a tailored quote.",
    },
    {
      question: "How can I contact Pramod?",
      answer: `You can reach out directly via WhatsApp at [${siteConfig.author.phone}](https://wa.me/918767049312) or Email at [${siteConfig.author.email}](mailto:${siteConfig.author.email}). You can also connect on [LinkedIn](${siteConfig.author.linkedin}) or check out code on [GitHub](${siteConfig.author.github}).`,
    },
  ],
};