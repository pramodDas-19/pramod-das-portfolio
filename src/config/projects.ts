export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  badge?: string;
  tags: string[];
  type: "professional" | "freelance";
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "jackson-decorators",
    title: "Jackson Decorators",
    category: "Luxury Event & Decor Website",
    description: "Event design, decoration, and celebration planning website with luxury gallery showcases and direct inquiry flow.",
    desktopImage: "/freelance projects/freelance.png",
    mobileImage: "/freelance projects/freelance.png",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    type: "freelance",
  },
  {
    id: "lumiere-co",
    title: "Lumière & Co.",
    category: "Luxury Resort & Sanctuary",
    description: "Exclusive hospitality web platform featuring private villa sanctuaries, luxury room tours, and instant WhatsApp booking.",
    desktopImage: "/freelance projects/freelance 2.png",
    mobileImage: "/freelance projects/freelance 2.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    type: "freelance",
  },
  {
    id: "aurum-jewelry",
    title: "Aurum Fine Jewelry",
    category: "Heirloom E-Commerce Storefront",
    description: "Luxury gold & gemstone jewelry brand web platform showcasing new artisan collections and custom orders.",
    desktopImage: "/freelance projects/freelance 3.png",
    mobileImage: "/freelance projects/freelance 3.png",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Node.js"],
    type: "freelance",
  },
  {
    id: "unseen-grind-fitness",
    title: "Unseen Grind Fitness",
    category: "Fitness & Personal Training",
    description: "High-impact fitness coaching and gym platform featuring custom workout programs and member registration.",
    desktopImage: "/freelance projects/freelance 4.png",
    mobileImage: "/freelance projects/freelance 4.png",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"],
    type: "freelance",
  },
  {
    id: "chicken-platform",
    title: "Chicken Platform",
    category: "Poultry E-Commerce Platform",
    description: "Real-time poultry distribution analytics, inventory tracking, and automated supply management.",
    desktopImage: "/p1.webp",
    mobileImage: "/m1.webp",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    type: "professional",
  },
  {
    id: "luxury-liquor-store",
    title: "Luxury Liquor Store",
    category: "Premium Beverage E-Commerce",
    description: "High-conversion luxury bottle shop storefront with interactive product browsing and direct order pathways.",
    desktopImage: "/p2.webp",
    mobileImage: "/m2.webp",
    tags: ["React.js", "Framer Motion", "Tailwind CSS", "Node.js"],
    type: "professional",
  },
  {
    id: "resort-website",
    title: "Resort Website",
    category: "Luxury Hospitality Platform",
    description: "Luxury hotel reservation engine with interactive villa tours and instant booking.",
    desktopImage: "/p3.webp",
    mobileImage: "/m3.webp",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind"],
    type: "professional",
  },
  {
    id: "electrical-industries",
    title: "Electrical Industries",
    category: "Industrial Business Website",
    description: "Enterprise industrial solutions platform showcasing electrical engineering products and B2B catalogs.",
    desktopImage: "/p4.webp",
    mobileImage: "/m4.webp",
    tags: ["React 19", "Next.js", "Tailwind CSS", "Framer Motion"],
    type: "professional",
  },
  {
    id: "luxury-villa",
    title: "Luxury Villa",
    category: "Real Estate Showcase Platform",
    description: "Architectural real estate platform showcasing high-end villas, floor plans, and direct property inquiry flows.",
    desktopImage: "/p5.webp",
    mobileImage: "/m5.webp",
    tags: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript"],
    type: "professional",
  },
  {
    id: "hydrate-better",
    title: "Hydrate Better",
    category: "D2C Product Landing Page",
    description: "Sleek direct-to-consumer product experience with interactive calculators and subscription conversion flows.",
    desktopImage: "/p6.webp",
    mobileImage: "/m6.webp",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    type: "professional",
  },
  {
    id: "cosmic-fsm",
    title: "Cosmic FSM",
    category: "Field Service Management Platform",
    description: "Enterprise SaaS platform for scheduling, field technician dispatching, automated reports and real-time telemetry.",
    desktopImage: "/p7.webp",
    mobileImage: "/m6.webp",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    type: "professional",
  },
];


