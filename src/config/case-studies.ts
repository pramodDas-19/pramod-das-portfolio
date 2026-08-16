import { type LucideIcon, BriefcaseBusiness, Handshake } from "lucide-react";

export type ProjectKind = "professional" | "independent";

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  kind: ProjectKind;
  kindLabel: string;
  role: string;
  description: string;
  image?: string;
  video?: string;
  tags: string[];
  contribution: string;
  details: string[];
  overview: string;
  development: string;
  outcome: string;
  liveUrl?: string;
  githubUrl?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const projectKindMeta: Record<
  ProjectKind,
  { label: string; icon: LucideIcon; className: string }
> = {
  professional: {
    label: "Professional Projects",
    icon: BriefcaseBusiness,
    className: "border-blue-200 bg-blue-50 text-blue-700",
  },
  independent: {
    label: "Independent/Freelance Projects",
    icon: Handshake,
    className: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
};

export const FEATURED_CASE_STUDIES: CaseStudy[] = [
  // ─── PROFESSIONAL PROJECTS ────────────────────────────────────────────────
  {
    slug: "cosmic-fsm",
    title: "Cosmic FSM",
    category: "Field Service Management Platform",
    kind: "professional",
    kindLabel: "Professional Project",
    role: "Front-End Developer at Cosmic Solutions",
    description:
      "An enterprise field service management SaaS platform built for scheduling, technician dispatching, automated reporting, and real-time operational visibility.",
    overview:
      "Cosmic FSM is an enterprise field service management SaaS platform built at Cosmic Solutions. It is designed for businesses that operate with field technicians — companies in HVAC, electrical, plumbing, maintenance, and similar trades where jobs are dispatched to workers in the field and tracked to completion.\n\nThe platform centralises scheduling, dispatching, job tracking, reporting, and operational telemetry in one interface. The goal is to give operations managers real-time visibility into what their field teams are doing and reduce the manual overhead of coordinating jobs through phone calls or spreadsheets.\n\nThis is a professional project completed as part of my full-stack development work at Cosmic Solutions, where I contributed to the front-end implementation of the platform's dashboard interfaces and operational workflows.",
    image: "/p7.webp",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    contribution:
      "This is a professional project completed at Cosmic Solutions. I contributed as a front-end developer working on dashboard UI implementation, responsive component architecture, and operational workflow screens. I worked within a development team, building and refining the interface components that operators and managers use daily.",
    development:
      "The front end is built with Next.js and React.js using TypeScript throughout. Dashboard screens are composed of reusable components — job cards, status badges, data tables, and telemetry panels. Tailwind CSS handles the visual system. Data is pulled from a Node.js backend using REST API calls, with PostgreSQL as the primary data store. Role-based rendering is handled at the component level based on authenticated user roles. The application is built for desktop-first use with responsive fallbacks.",
    details: [
      "Real-time technician scheduling and dispatch board.",
      "Job tracking with status progression: assigned, in progress, completed.",
      "Operational telemetry dashboard for field activity visibility.",
      "Automated field activity logs and report generation.",
      "Role-based access control covering manager, technician, and admin views.",
      "Reusable React component architecture for consistent UI across modules.",
      "Clean data layout for job and technician operational metrics.",
      "Responsive layout for desktop operations screens.",
    ],
    outcome:
      "Cosmic FSM is a production-deployed platform at Cosmic Solutions. It is used by field service businesses to manage their operational workflows. My contribution was to the front-end interface layer — the screens that dispatchers, managers, and technicians interact with daily.",
    metaTitle: "Cosmic FSM — Enterprise SaaS Platform | Full Stack Developer at Cosmic Solutions",
    metaDescription:
      "Case study for Cosmic FSM, a field service management SaaS platform built at Cosmic Solutions using Next.js, React.js, TypeScript, and PostgreSQL.",
    keywords: [
      "Full Stack Developer",
      "Full Stack Web Developer",
      "Next.js Developer",
      "React.js Developer",
      "Web Developer India",
      "Enterprise Web Application Development",
    ],
  },
  {
    slug: "chicken-platform",
    title: "Chicken Platform",
    category: "Poultry E-Commerce & Supply Chain",
    kind: "professional",
    kindLabel: "Professional Project",
    role: "Front-End Developer at Cosmic Solutions",
    description:
      "A B2B and B2C poultry distribution platform for real-time inventory visibility, order placement, and supply chain logistics management.",
    overview:
      "Chicken Platform is a B2B and B2C poultry distribution web application built at Cosmic Solutions. It serves the operational needs of a poultry supply chain business — enabling inventory visibility, order placement, and supply chain logistics management across multiple customer tiers.\n\nThe platform handles both business buyers (distributors, restaurants, retailers) and direct consumers, with different interfaces and access levels for each. Real-time inventory data ensures that orders placed through the system reflect actual stock availability.\n\nThis is a professional project completed as part of my full-stack development work at Cosmic Solutions, where I contributed to the front-end application screens and business workflow interfaces.",
    image: "/p1.webp",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    contribution:
      "This is a professional project completed at Cosmic Solutions. I worked as a front-end developer contributing to the application screens, product catalogue interfaces, and responsive layout implementation. I worked within a development team on a production codebase.",
    development:
      "The front end is built with Next.js and React.js. Product catalogue data is fetched from a backend API and rendered through structured product card components. Order placement uses form submission with backend validation. Customer account history is presented in a paginated table view. The application is responsive — the layout adapts between desktop (where business buyers often manage accounts) and mobile (where field buyers check stock and place quick orders).",
    details: [
      "Real-time inventory display with stock availability indicators.",
      "Product catalogue with category browsing and filtering.",
      "Order placement workflow for B2B and B2C customers.",
      "Order history and status tracking per account.",
      "Customer account portal with individual order records.",
      "Supply chain status updates and delivery management.",
      "Mobile-responsive design for field and desktop users.",
      "Structured content layout for product specification display.",
    ],
    outcome:
      "Chicken Platform is a production application used by a poultry distribution business to manage their supply chain and customer ordering operations. My contribution was to the front-end interface screens that buyers and operations staff interact with.",
    metaTitle: "Chicken Platform — B2B Poultry Distribution Web App | Full Stack Developer",
    metaDescription:
      "Case study for Chicken Platform, a B2B and B2C poultry e-commerce and supply chain web application built at Cosmic Solutions using Next.js, React.js, and PostgreSQL.",
    keywords: [
      "Full Stack Web Developer",
      "Next.js Developer",
      "React.js Developer",
      "Web Development India",
      "E-Commerce Web Development",
      "Website Development India",
    ],
  },
  {
    slug: "resort-website",
    title: "Resort Website",
    category: "Luxury Hospitality Platform",
    kind: "professional",
    kindLabel: "Professional Project",
    role: "Front-End Developer at Cosmic Solutions",
    description:
      "A luxury hospitality web platform for showcasing villa stays, resort amenities, and driving direct booking inquiries.",
    overview:
      "Resort Website is a luxury hospitality web platform built at Cosmic Solutions for a high-end resort property. The site is designed to present villa accommodation, resort amenities, and the surrounding experience in a way that motivates visitors to inquire about booking.\n\nThe hospitality sector demands websites that convert on emotional impact — guests make decisions based on how a place makes them feel before they even arrive. The site addresses this through quality photography presentation, clear feature communication, and an obvious path to reservation inquiry.\n\nThis is a professional project delivered as part of my development work at Cosmic Solutions.",
    image: "/p3.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    contribution:
      "This is a professional project completed at Cosmic Solutions. I contributed to the front-end implementation — page layout structure, responsive component development, visual hierarchy, and image presentation. I worked within the team's established codebase and delivery process.",
    development:
      "Built with Next.js using static generation for fast initial load times. Sections are implemented as discrete React components with responsive Tailwind layouts. Images are handled through Next.js Image for automatic size optimisation and lazy loading. All content is structured with semantic HTML for SEO performance in hospitality search categories.",
    details: [
      "Full-screen hero with villa photography and primary headline.",
      "Rooms section with individual property showcases.",
      "Amenities overview covering facilities available at the resort.",
      "Interactive reservation inquiry form and CTA paths.",
      "Gallery section for property and landscape photography.",
      "About section for resort story and positioning.",
      "Mobile-first responsive layout designed for travellers using phones.",
      "SEO-structured semantic content for hospitality search terms.",
    ],
    outcome:
      "The resort website provides the client with a professional hospitality presence that showcases the property effectively and routes interested visitors toward reservation inquiry.",
    metaTitle: "Resort Website — Luxury Hospitality Web Platform | Cosmic Solutions",
    metaDescription:
      "Case study for a luxury resort hospitality website built at Cosmic Solutions. Responsive villa showcase and booking inquiry platform developed with Next.js and Tailwind CSS.",
    keywords: [
      "Responsive Website Development",
      "Custom Website Development",
      "Next.js Developer",
      "Full Stack Developer",
      "Web Development in Goa",
      "Website Development India",
    ],
  },
  {
    slug: "electrical-industries",
    title: "Electrical Industries",
    category: "B2B Industrial Corporate Website",
    kind: "professional",
    kindLabel: "Professional Project",
    role: "Front-End Developer at Cosmic Solutions",
    description:
      "A B2B corporate website presenting engineering services, technical product catalogues, and commercial inquiry routing for an industrial electrical business.",
    overview:
      "Electrical Industries is a B2B corporate website built at Cosmic Solutions for an industrial electrical engineering business. It presents the company's engineering services, technical product lines, and project credentials to potential business clients — contractors, developers, procurement teams, and enterprise buyers.\n\nThe site functions as a digital capability statement: it communicates what the company does, what products and services are available, and how to get in contact for commercial inquiries.\n\nThis is a professional project delivered as part of my development work at Cosmic Solutions.",
    image: "/p4.webp",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
    contribution:
      "This is a professional project completed at Cosmic Solutions. I contributed to the front-end implementation — building structured business content sections, product catalogue components, and technical information layouts. I worked within a team on a production delivery.",
    development:
      "Built with React.js and Next.js. Product cards are structured components that present technical specification data in a scannable format. Framer Motion is used for section scroll animations — subtle enough not to distract in a corporate context. All content uses semantic HTML with descriptive headings for B2B SEO targeting. The Tailwind layout uses a contained max-width grid appropriate for engineering desktop environments.",
    details: [
      "Corporate capability overview and engineering services presentation.",
      "Technical product catalogue with category and specification display.",
      "Structured product cards designed for B2B specification review.",
      "Inquiry form routing for commercial business leads.",
      "Fast-loading design with clean visual hierarchy.",
      "Responsive layout for desktop and mobile business users.",
      "Framer Motion entrance animations for professional presentation.",
      "Semantic content structure for B2B search visibility.",
    ],
    outcome:
      "Electrical Industries has a professional corporate web presence that communicates the company's capabilities to business buyers and routes commercial inquiry directly to the sales or operations team.",
    metaTitle: "Electrical Industries — B2B Corporate Website | React.js Developer at Cosmic Solutions",
    metaDescription:
      "Case study for Electrical Industries, a B2B industrial engineering website built at Cosmic Solutions with React.js, Next.js, and Tailwind CSS.",
    keywords: [
      "Business Website Development",
      "Custom Website Development",
      "React.js Developer",
      "Next.js Developer",
      "Web Developer India",
      "Website Development India",
    ],
  },
  {
    slug: "luxury-liquor-store",
    title: "Luxury Liquor Store",
    category: "Premium Beverage E-Commerce",
    kind: "professional",
    kindLabel: "Professional Project",
    role: "Front-End Developer at Cosmic Solutions",
    description:
      "A high-conversion luxury bottle shop storefront with animated product showcases, category browsing, and direct order inquiry pathways.",
    overview:
      "Luxury Liquor Store is a premium beverage e-commerce storefront built at Cosmic Solutions. The platform is designed for a high-end bottle shop and spirits retailer, presenting curated alcohol products — whiskies, wines, champagnes, and spirits — with an experience that matches the quality tier of what is being sold.\n\nThis is not a standard grocery-style shop. The browsing experience is designed for someone who has a brand in mind or wants to discover something specific, not just add the cheapest option to a cart.\n\nThis is a professional project delivered as part of my development work at Cosmic Solutions.",
    image: "/p2.webp",
    tags: ["React.js", "Framer Motion", "Tailwind CSS", "Node.js"],
    contribution:
      "This is a professional project completed at Cosmic Solutions. I worked on the front-end e-commerce interface — product showcase layouts, animation implementation using Framer Motion, responsive component design, and order inquiry routing.",
    development:
      "Built with React.js and Tailwind CSS. Framer Motion is used for product card entrance animations and hover interactions — when a user hovers a product card, it lifts slightly and surfaces additional information. This is a common pattern in premium e-commerce that adds perceived quality to the browsing experience. Category filtering is handled client-side with React state. The mobile layout switches from a multi-column grid to a single-column scroll.",
    details: [
      "High-resolution product catalogue with category organisation.",
      "Framer Motion product card hover and showcase animations.",
      "Direct order inquiry paths for purchase or enquiry.",
      "Mobile-optimised browsing experience.",
      "Category and filter navigation for spirit type and brand.",
      "Premium visual design aligned with the product tier.",
      "Fast responsive performance for mobile shoppers.",
      "Clean product detail layout with key product information.",
    ],
    outcome:
      "The Luxury Liquor Store provides the client with a premium digital storefront that presents their product range at an appropriate quality level and gives buyers a direct path to order.",
    metaTitle: "Luxury Liquor Store — Premium E-Commerce Storefront | React.js Developer",
    metaDescription:
      "Case study for Luxury Liquor Store, a premium beverage e-commerce storefront built at Cosmic Solutions using React.js, Framer Motion, and Tailwind CSS.",
    keywords: [
      "React.js Developer",
      "Full Stack Developer",
      "E-Commerce Web Development",
      "Custom Website Development",
      "Website Development India",
      "Full Stack Web Developer",
    ],
  },
  {
    slug: "luxury-villa",
    title: "Luxury Villa",
    category: "Real Estate Showcase Platform",
    kind: "professional",
    kindLabel: "Professional Project",
    role: "Front-End Developer at Cosmic Solutions",
    description:
      "An architectural real estate showcase platform with Zustand-powered gallery navigation, floor plan displays, and direct buyer inquiry routing.",
    overview:
      "Luxury Villa is an architectural real estate showcase platform built at Cosmic Solutions. The site presents high-end villa properties to potential buyers or renters, with a focus on property photography, floor plan details, and direct buyer inquiry routing.\n\nReal estate at the luxury tier requires a web presence that presents properties with the same care a physical brochure or showroom would — high resolution, generous space, authoritative typography, and a clear path for serious inquiries.\n\nThis is a professional project delivered as part of my development work at Cosmic Solutions.",
    image: "/p5.webp",
    tags: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript"],
    contribution:
      "This is a professional project completed at Cosmic Solutions. I contributed to the property showcase components, gallery navigation implementation, lead inquiry forms, and responsive mobile layout. I worked within the team's codebase and delivery process.",
    development:
      "Built with Next.js using Zustand for managing interactive UI state — specifically the gallery selection state and the active property view. This avoids full page reloads when a user switches between properties or navigates gallery images, keeping the browsing experience smooth. Images are loaded through Next.js Image with fill and sizes attributes for responsive delivery. The inquiry form collects buyer details and property interest, routing submissions to the sales team. TypeScript is used throughout for clean component interfaces.",
    details: [
      "Multi-property showcase with individual property detail views.",
      "High-resolution photography gallery per property.",
      "Floor plan display and property specification layout.",
      "Zustand state management for smooth gallery and property navigation.",
      "Direct buyer lead inquiry form and consultation request routing.",
      "Mobile-first responsive design for high-resolution property viewing.",
      "SEO-structured property content for real estate search visibility.",
      "Clean typographic hierarchy for property specification reading.",
    ],
    outcome:
      "Luxury Villa gives the client a property showcase platform that presents their portfolio at an appropriate quality level and routes qualified buyer inquiries efficiently.",
    metaTitle: "Luxury Villa — Real Estate Showcase Platform | Next.js Developer at Cosmic Solutions",
    metaDescription:
      "Case study for Luxury Villa, an architectural real estate platform built at Cosmic Solutions using Next.js, Zustand, TypeScript, and Tailwind CSS.",
    keywords: [
      "Next.js Developer",
      "Full Stack Developer",
      "Custom Website Development",
      "Responsive Website Development",
      "Website Development India",
      "Full Stack Web Developer",
    ],
  },
  {
    slug: "hydrate-better",
    title: "Hydrate Better",
    category: "D2C Product Marketing Site",
    kind: "professional",
    kindLabel: "Professional Project",
    role: "Front-End Developer at Cosmic Solutions",
    description:
      "A D2C wellness product web application with an interactive hydration calculator, micro-animations, and subscription conversion flows.",
    overview:
      "Hydrate Better is a direct-to-consumer product web application built at Cosmic Solutions for a wellness beverage brand. The platform is a marketing and conversion site — it presents the product, communicates its benefits, gives visitors tools to explore personalised recommendations, and routes them toward purchase.\n\nD2C product sites operate differently from standard e-commerce. There is usually one hero product. The site's job is to communicate that product's value clearly, build confidence in the brand, and remove reasons not to buy.\n\nThis is a professional project delivered as part of my development work at Cosmic Solutions.",
    image: "/p6.webp",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    contribution:
      "This is a professional project completed at Cosmic Solutions. I contributed to the front-end implementation — building the interactive calculator component, implementing Framer Motion animations, developing responsive page sections, and integrating the subscription conversion flow.",
    development:
      "Built with Next.js and TypeScript. The hydration calculator is a client component that takes user inputs such as weight and activity level and outputs a personalised daily hydration recommendation — creating a direct connection between the visitor's own numbers and the product being sold. Framer Motion is used for scroll-triggered section reveals and subtle element animations that keep the page feeling polished without slowing it down. All sections are performance-optimised for marketing campaign landing traffic where load speed directly affects conversion.",
    details: [
      "Interactive hydration calculator with personalised output based on user inputs.",
      "Product feature and benefit breakdown sections.",
      "D2C subscription offer and conversion flow.",
      "Micro-animated UI components using Framer Motion.",
      "Mobile-first responsive layout optimised for direct traffic.",
      "Clean product photography presentation.",
      "Benefit-led content structure designed for conversion.",
      "Fast page performance for marketing campaign landing traffic.",
    ],
    outcome:
      "Hydrate Better is a production marketing site at Cosmic Solutions. It demonstrates the application of interactive UI components and animation in a conversion-focused D2C context.",
    metaTitle: "Hydrate Better — D2C Product Web Application | Full Stack Developer at Cosmic Solutions",
    metaDescription:
      "Case study for Hydrate Better, a D2C wellness product web application built at Cosmic Solutions using Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    keywords: [
      "Full Stack Web Developer",
      "Next.js Developer",
      "React.js Developer",
      "Responsive Website Development",
      "Custom Website Development",
      "Website Development India",
    ],
  },

  // ─── INDEPENDENT / FREELANCE PROJECTS ────────────────────────────────────
  {
    slug: "jackson-decorators",
    title: "Jackson Decorators",
    category: "Luxury Event & Decor Website",
    kind: "independent",
    kindLabel: "Independent/Freelance Project",
    role: "Independent Freelance Web Developer in Goa",
    description:
      "A custom luxury event and decoration business website built independently in Goa, featuring service showcases, a work gallery, and direct WhatsApp inquiry paths.",
    overview:
      "Jackson Decorators is a custom business website built independently for a luxury event design and decoration company. The site serves as the brand's primary online presence — a place for prospective clients to explore services, browse the work gallery, and make direct contact to begin planning an event.\n\nThe business specialises in high-end celebrations: weddings, receptions, corporate events, and themed parties. The site needed to reflect that premium positioning in every design decision — from typography to imagery to the way contact information is surfaced.\n\nI built this as a freelance project in Goa, handling every part of the engagement from initial layout design through to deployment.",
    video: "/video/1.mp4",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    contribution:
      "I built this project independently as a freelance web developer in Goa. I handled everything: scoping the project, designing the layout in code, building all components, optimising images for performance, and deploying the final site. There was no team. This is a direct freelance client engagement.",
    development:
      "Built using Next.js with a static-export approach suited to a content-focused business site. No backend or database is involved — the site is purely presentational. Components are written in TypeScript with clean prop interfaces. Tailwind handles all responsive breakpoints. Images are served through Next.js Image with lazy loading. The WhatsApp CTA uses a direct wa.me link. The live site is hosted at jacksondecorators.com.",
    details: [
      "Full-screen hero with brand identity (logo, tagline, floral photography).",
      "Services section covering event types and decoration categories.",
      "Photo gallery showcasing completed event work.",
      "Direct WhatsApp CTA and phone number contact paths.",
      "Scroll-based navigation with smooth section transitions.",
      "Mobile-optimised layout suitable for social media traffic.",
      "Clean semantic HTML structure for local search visibility.",
      "Live site deployed and linked from all project cards.",
    ],
    outcome:
      "The site gives the business a professional online presence where potential clients can find services, view gallery work, and contact the team directly through WhatsApp — the primary communication channel used by the client's audience.",
    metaTitle: "Jackson Decorators — Freelance Web Developer in Goa | Case Study",
    metaDescription:
      "Case study for Jackson Decorators, a luxury event and decoration website built by Pramod Das — a freelance web developer in Goa. Built with Next.js and Tailwind CSS.",
    keywords: [
      "Freelance Web Developer in Goa",
      "Web Developer in Goa",
      "Website Developer in Goa",
      "Business Website Development",
      "Custom Website Development",
      "Website Designer in Goa",
    ],
  },
  {
    slug: "lumiere-co",
    title: "Lumière & Co.",
    category: "Luxury Resort & Sanctuary Website",
    kind: "independent",
    kindLabel: "Independent/Freelance Project",
    role: "Independent Freelance Web Developer in Goa",
    description:
      "A luxury resort and private sanctuary website built independently, featuring villa showcases, property amenities, and a persistent WhatsApp booking button.",
    overview:
      "Lumière & Co. is a luxury resort and private sanctuary website built independently as a freelance project. The platform presents villa rooms, property amenities, and immersive photography to prospective guests seeking a high-end accommodation experience.\n\nThe site functions as the hospitality brand's primary digital storefront. Visitors can explore room options, browse property photography, review available amenities, and connect directly with the resort team to make a reservation.\n\nThe project required a design and development approach that matched the calibre of the property being presented — refined, fast, and visually confident.",
    image: "/freelance projects/freelance 2.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    contribution:
      "I designed and built this website independently as a freelance project. I handled layout design, component development, image handling, Framer Motion animation integration, and WhatsApp CTA setup. The client supplied photography; I built everything else.",
    development:
      "Built using Next.js with static generation for fast load times. Framer Motion is used for scroll-triggered section entrance animations that give the site a polished, high-end feel without interfering with performance. Images are optimised through Next.js Image. The WhatsApp integration is a simple wa.me deep link, which is the standard reservation tool for this type of hospitality business. All sections use semantic HTML for SEO structure.",
    details: [
      "Full-screen hero with property photography and headline typography.",
      "Room showcase section with imagery and key amenity highlights.",
      "Amenities overview covering facilities available at the property.",
      "Persistent WhatsApp booking button for direct reservation inquiry.",
      "Gallery section for property photography.",
      "About section presenting the brand story and positioning.",
      "Mobile-first responsive layout optimised for traveller search traffic.",
      "SEO-structured content for hospitality-related search terms.",
    ],
    outcome:
      "The website provides Lumière & Co. with a professional hospitality presence that communicates their positioning and gives guests a direct path to inquiry.",
    metaTitle: "Lumière & Co. — Luxury Resort Website | Freelance Web Developer in Goa",
    metaDescription:
      "Case study for Lumière & Co., a luxury hospitality website built by Pramod Das — a freelance web developer in Goa specialising in custom business website development.",
    keywords: [
      "Web Developer in Goa",
      "Website Developer in Goa",
      "Freelance Web Developer in Goa",
      "Custom Website Development",
      "Responsive Website Development",
      "Hospitality Website Development",
    ],
  },
  {
    slug: "aurum-jewelry",
    title: "Aurum Fine Jewelry",
    category: "Heirloom E-Commerce Storefront",
    kind: "independent",
    kindLabel: "Independent/Freelance Project",
    role: "Independent Freelance Web Developer in Goa",
    description:
      "A luxury jewelry brand website with a dark glassmorphism aesthetic, showcasing handcrafted collections and custom design consultation pathways.",
    overview:
      "Aurum Fine Jewelry is a luxury jewelry brand website built independently as a freelance project. The platform presents the brand's handcrafted gold and gemstone collections with a focus on visual quality and brand positioning.\n\nThe site serves prospective buyers who are researching or ready to make contact about a purchase. It presents the collection through high-resolution imagery and gives visitors direct access to the team for custom orders and consultations.\n\nThe Aurum name (Latin for gold) and the black-and-gold aesthetic throughout the site communicate the brand's positioning clearly: premium, artisan, heirloom-quality jewelry.",
    image: "/freelance projects/freelance 3.png",
    tags: ["React.js", "Next.js", "Tailwind CSS", "Node.js"],
    contribution:
      "I built this project independently as a freelance web developer. I handled the full design and development process — from the dark colour palette and typography system through to component implementation, image optimisation, and layout structure. The client provided the product photography and brand name; I translated their positioning into a working website.",
    development:
      "Built with React.js and Next.js. The dark luxury aesthetic is achieved through Tailwind CSS with a custom colour palette: deep black backgrounds with gold and amber accent text. Product images are rendered at high resolution with Next.js Image for optimised delivery. The navigation includes a cart icon, suggesting either a planned e-commerce feature or a Shopify integration. Contact and custom order sections route to inquiry forms.",
    details: [
      "Full-viewport dark hero with brand headline and collection CTA.",
      "Collections browsing section with product imagery.",
      "High-resolution product viewer layout.",
      "Custom order and design consultation inquiry paths.",
      "FAQ section for buyer questions.",
      "About section presenting the brand's artisan background.",
      "Dark glassmorphism aesthetic with gold accent typography.",
      "Mobile-optimised responsive design with fast image delivery.",
    ],
    outcome:
      "The Aurum Fine Jewelry website gives the brand a professional digital storefront that matches the quality of the products being sold.",
    metaTitle: "Aurum Fine Jewelry — Luxury Brand Website | Website Developer in Goa",
    metaDescription:
      "Case study for Aurum Fine Jewelry, a luxury jewelry brand website built by Pramod Das — a website developer specialising in custom e-commerce and brand web development.",
    keywords: [
      "Website Developer in Goa",
      "Web Developer in Goa",
      "Freelance Web Developer in Goa",
      "E-Commerce Website Development",
      "React.js Developer",
      "Custom Website Development",
    ],
  },
  {
    slug: "unseen-grind-fitness",
    title: "Unseen Grind Fitness",
    category: "Fitness & Personal Training Platform",
    kind: "independent",
    kindLabel: "Independent/Freelance Project",
    role: "Independent Freelance Web Developer in Goa",
    description:
      "A high-impact gym and personal training website built independently, with bold typography, high-contrast design, and conversion-focused CTAs.",
    overview:
      "Unseen Grind Fitness is a gym and personal training website built independently as a freelance project. It represents a fitness brand built on discipline and consistency — the tagline \"Built in Silence. Proven in Results.\" sets the tone immediately.\n\nThe site is designed for people actively searching for a gym or personal trainer: they land on the page, understand the offer quickly, and have an obvious path to get started. It is not a passive brochure — it is structured to convert interest into action.\n\nThe visual direction is deliberately bold: heavy typography, high-contrast imagery, and gold accent on black. It is designed to reflect the intensity of the fitness brand rather than the softer aesthetic of a wellness or yoga studio.",
    image: "/freelance projects/freelance 4.png",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"],
    contribution:
      "I built this website independently as a freelance web developer. I was responsible for the full site: layout design, typography system, component development, responsive implementation, and all CTA structure. The client provided the brand direction and photography; I built the website.",
    development:
      "Built with React.js and Next.js using a dark-first Tailwind CSS setup. The high-contrast yellow-on-black colour system is applied consistently across CTAs, section headers, and divider accents. All sections are implemented as individual React components. The mobile experience is a priority given the audience — the site layout shifts to full-width stacking at small viewports with large, tap-friendly buttons.",
    details: [
      "Full-viewport hero with gym photography, headline, and sub-headline.",
      "Training services section with program breakdowns.",
      "Why Us section for competitive positioning.",
      "Client testimonials section.",
      "Get Started CTA button with high-contrast styling.",
      "About section covering the gym's philosophy and team.",
      "Mobile-first responsive layout.",
      "Section-by-section scroll navigation.",
    ],
    outcome:
      "The Unseen Grind Fitness site gives the brand a strong online presence that matches the identity they are building. It communicates clearly, pushes visitors toward action, and works across devices.",
    metaTitle: "Unseen Grind Fitness — Gym Website | Freelance Web Developer",
    metaDescription:
      "Case study for Unseen Grind Fitness, a high-impact gym and personal training website built by Pramod Das — a freelance web developer specialising in custom business website development.",
    keywords: [
      "Business Website Development",
      "Web Developer in Goa",
      "Freelance Web Developer in Goa",
      "Website Developer in Goa",
      "Custom Website Development",
      "Full Stack Developer",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return FEATURED_CASE_STUDIES.find((project) => project.slug === slug);
}
