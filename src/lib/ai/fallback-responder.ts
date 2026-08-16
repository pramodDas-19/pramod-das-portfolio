import { aiKnowledge } from "./knowledge";

export function generateFallbackResponse(userMessage: string): string {
  const raw = userMessage.toLowerCase().trim();
  // Normalize punctuation and extra whitespace
  const clean = raw.replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  const tokens = clean.split(" ");
  const text = ` ${clean} `;

  // Helper matching functions
  const hasWord = (...words: string[]) => words.some((w) => tokens.includes(w.toLowerCase()));
  const hasPhrase = (...phrases: string[]) =>
    phrases.some((p) => text.includes(` ${p.toLowerCase()} `) || clean.includes(p.toLowerCase()));

  // =========================================================================
  // INTENT SCORING ENGINE
  // =========================================================================
  const scores: Record<string, number> = {
    experience: 0,
    projects: 0,
    techStack: 0,
    pricing: 0,
    contactHire: 0,
    timeline: 0,
    services: 0,
    aboutBio: 0,
    weather: 0,
    jokes: 0,
    food: 0,
    travelGoa: 0,
    wordpress: 0,
    seo: 0,
    resume: 0,
    location: 0,
    greetings: 0,
    thanks: 0,
    offtopic: 0,
  };

  // 1. Experience & Role at Cosmic Solutions
  if (hasPhrase("cosmic solutions", "current role", "work experience", "working experience", "tell me about pramod s experience", "pramods experience", "pramod experience", "his experience", "years of experience", "where does pramod work", "where do you work", "career background")) {
    scores.experience += 15;
  }
  if (hasWord("experience", "role", "career", "background", "history") && !hasWord("user", "ux")) {
    scores.experience += 5;
  }
  if (hasWord("cosmic") && !hasWord("fsm")) {
    scores.experience += 8;
  }

  // 2. Projects & Portfolio
  if (hasPhrase("featured projects", "top projects", "top featured projects", "show me projects", "what projects", "show projects", "what have you built", "your portfolio", "portfolio projects", "built recently", "case studies", "previous work", "show work", "showcase work")) {
    scores.projects += 15;
  }
  if (hasWord("project", "projects", "portfolio", "built", "showcase", "demos")) {
    scores.projects += 6;
  }
  if (hasPhrase("case study", "case studies", "client work", "live demo", "sample work")) {
    scores.projects += 8;
  }

  // 3. Tech Stack & Skills
  if (hasPhrase("tech stack", "what stack", "core stack", "technologies used", "technical skills", "what technologies do you use", "what languages", "what framework", "frontend or backend", "full stack", "fullstack")) {
    scores.techStack += 12;
  }
  if (hasWord("stack", "technologies", "skills", "skill", "framework", "frameworks", "languages") && scores.projects === 0) {
    scores.techStack += 5;
  }
  if (hasWord("react", "nextjs", "next", "node", "nodejs", "typescript", "javascript", "tailwind", "postgres", "postgresql", "mongodb", "prisma", "docker", "supabase", "express")) {
    scores.techStack += 4;
  }

  // 4. Pricing & Cost
  if (hasPhrase("how much", "what is the price", "what do you charge", "what are your rates", "cost of a website", "website cost", "price for a website", "how much for", "hourly rate", "monthly rate", "costing")) {
    scores.pricing += 15;
  }
  if (hasWord("price", "prices", "pricing", "cost", "costs", "quote", "quotation", "rate", "rates", "budget", "fees", "fee", "charge", "charges", "estimate", "expensive", "affordable", "cheap")) {
    scores.pricing += 8;
  }

  // 5. Contact & Hire & Availability
  if (hasPhrase("how to hire", "how to contact", "how can i hire", "how can i contact", "hire pramod", "contact pramod", "phone number", "whatsapp number", "email address", "get in touch", "book a call", "schedule a call", "are you available", "are you free", "open for work", "looking for a job", "freelance work")) {
    scores.contactHire += 15;
  }
  if (hasWord("hire", "hiring", "contact", "whatsapp", "email", "phone", "freelance", "available", "availability", "reach")) {
    scores.contactHire += 6;
  }

  // 6. Timelines & Turnaround
  if (hasPhrase("how long", "how fast", "turnaround", "delivery time", "how many days", "how many weeks", "when can you start", "when can you deliver", "lead time")) {
    scores.timeline += 15;
  }
  if (hasWord("timeline", "duration", "deadline", "turnaround")) {
    scores.timeline += 8;
  }

  // 7. Services & Offerings
  if (hasPhrase("what services", "what do you offer", "what can you do", "can you build a website for me", "build my website", "create a website for my business", "need a website", "want a website")) {
    scores.services += 15;
  }
  if (hasWord("services", "service", "offer", "offers", "capabilities", "solutions") && scores.projects === 0 && scores.techStack === 0) {
    scores.services += 6;
  }

  // 8. Identity & About Pramod
  if (hasPhrase("who is pramod", "who are you", "tell me about yourself", "tell me about pramod", "about pramod", "introduce yourself", "what is your name")) {
    scores.aboutBio += 15;
  }
  if (hasWord("bio", "intro", "about") && scores.experience === 0 && scores.projects === 0) {
    scores.aboutBio += 5;
  }

  // 9. WordPress Migration
  if (hasWord("wordpress", "migrate", "migration", "cms", "shopify", "wix", "squarespace")) {
    scores.wordpress += 12;
  }

  // 10. SEO & Speed
  if (hasWord("seo", "speed", "performance", "lighthouse", "ranking", "google", "optimization", "optimize")) {
    scores.seo += 10;
  }

  // 11. Resume / CV
  if (hasWord("resume", "cv", "qualification", "qualifications", "education", "degree", "college", "university", "certificate", "certificates")) {
    scores.resume += 12;
  }

  // 12. Location
  if (hasPhrase("where are you", "where do you live", "where are you based", "where is pramod", "which city", "in goa", "from goa") || hasWord("location", "located", "goa", "india")) {
    scores.location += 10;
  }

  // 13. Weather (Out-of-box)
  if (hasWord("weather", "temperature", "rain", "raining", "forecast", "climate", "sunny", "cloudy", "hot", "cold")) {
    scores.weather += 20;
  }

  // 14. Food / Dining (Out-of-box)
  if (hasWord("recipe", "cook", "cooking", "food", "lunch", "dinner", "breakfast", "pizza", "burger", "coffee", "restaurant", "eat")) {
    scores.food += 20;
  }

  // 15. Travel / Goa (Out-of-box)
  if (hasWord("beach", "beaches", "travel", "tourism", "vacation", "trip", "hotel", "resort", "nightlife", "visit", "scooter", "flight") && !hasWord("projects", "website")) {
    scores.travelGoa += 15;
  }

  // 16. Jokes / Humor (Out-of-box)
  if (hasWord("joke", "jokes", "funny", "riddle", "poem", "sing", "song", "meme", "laugh")) {
    scores.jokes += 20;
  }

  // 17. General Greetings
  if (hasWord("hi", "hello", "hey", "sup", "yo", "greetings") || hasPhrase("good morning", "good afternoon", "good evening", "how are you")) {
    scores.greetings += 10;
  }

  // 18. Thanks / Appreciation
  if (hasWord("thanks", "thank", "thx", "awesome", "great", "cool", "helpful", "good", "perfect")) {
    scores.thanks += 10;
  }

  // 19. Other Off-topic
  if (hasWord("politics", "president", "minister", "election", "war", "crypto", "bitcoin", "stocks", "homework", "math", "equation", "essay", "translate")) {
    scores.offtopic += 20;
  }

  // Find the intent with the highest score
  let maxScore = 0;
  let bestIntent = "fallback";
  for (const [intent, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      bestIntent = intent;
    }
  }

  // If score is too low or zero, fallback to smart default
  if (maxScore < 3) {
    bestIntent = "fallback";
  }

  // =========================================================================
  // RESPONSE GENERATOR BASED ON BEST INTENT
  // =========================================================================

  switch (bestIntent) {
    // -----------------------------------------------------------------------
    // EXPERIENCE & ROLE AT COSMIC SOLUTIONS
    // -----------------------------------------------------------------------
    case "experience": {
      return `### 💼 Pramod's Experience & Current Role

- **Current Position:** **${aiKnowledge.currentRole.title}** at **${aiKnowledge.currentRole.company}** (${aiKnowledge.currentRole.period}) in Goa, India.
- **Track Record:** **2+ Years** of professional hands-on development experience building and deploying **30+ production websites** and web platforms.

**Key Responsibilities at Cosmic Solutions:**
- ⚡ Architecting production-facing web applications using **Next.js, React 19, and TypeScript**.
- ⚙️ Developing scalable backend REST APIs, database schemas (PostgreSQL/MongoDB), and auth flows.
- 🚀 Optimizing applications for **90+ Lighthouse performance scores**, Core Web Vitals, and technical SEO.
- 🎨 Creating responsive, high-converting interfaces with modern UI/UX principles.

Would you like to see the **[Featured Projects](#projects)** he has built, or discuss a project?`;
    }

    // -----------------------------------------------------------------------
    // FEATURED PROJECTS & PORTFOLIO
    // -----------------------------------------------------------------------
    case "projects": {
      const topProjects = aiKnowledge.featuredProjects.slice(0, 5);
      const projectList = topProjects
        .map(
          (p) =>
            `* **${p.title}** (${p.category} • *${p.type.toUpperCase()}*)\n  ${p.description}\n  **Tech Stack:** \`${p.tags.join("`, `")}\``
        )
        .join("\n\n");

      return `### 🚀 Pramod's Featured Projects & Tech Stacks

Here are some of Pramod's standout production and freelance builds:

${projectList}

*(Pramod has contributed to **30+ websites and web applications** across e-commerce, luxury hospitality, enterprise SaaS, and B2B industrial platforms!)*

Want to see code or discuss building a custom project? [Message on WhatsApp](${aiKnowledge.contact.whatsapp})!`;
    }

    // -----------------------------------------------------------------------
    // TECH STACK & SKILLS
    // -----------------------------------------------------------------------
    case "techStack": {
      return `### 🛠️ Pramod's Core Full-Stack Tech Stack

Pramod specializes in modern, production-grade web technologies:

- ⚡ **Frontend:** Next.js (App Router, Server Components), React 19, TypeScript, JavaScript (ES6+), Tailwind CSS v4, Framer Motion
- ⚙️ **Backend & APIs:** Node.js, Express.js, Next.js Server Actions & Route Handlers, RESTful APIs, JWT & OAuth Authentication
- 🗄️ **Databases & ORMs:** PostgreSQL, MongoDB, Prisma ORM, Mongoose, Supabase
- 🚀 **DevOps & Tooling:** Git, GitHub, Vercel Deployments, Docker, Postman, npm/pnpm
- 📈 **Performance & SEO:** 90+ Lighthouse speed scores, Core Web Vitals, On-Page Technical SEO

Every project is built with clean architecture and maintainable code.`;
    }

    // -----------------------------------------------------------------------
    // PRICING & ESTIMATES
    // -----------------------------------------------------------------------
    case "pricing": {
      return `### 💰 Website Pricing & Project Estimates

Pramod provides transparent, competitive pricing tailored to project scope:

- 🌐 **Modern Business & Portfolio Websites:**  
  Clean mobile-first design, 90+ Lighthouse speed score, inquiry/WhatsApp integration, and technical SEO. *(Delivered in ~1 to 2 weeks)*

- 📱 **Custom Web Applications & SaaS MVPs:**  
  Full-stack Next.js systems with database schemas (PostgreSQL/MongoDB), authentication, dashboards, and APIs. *(Delivered in ~3 to 6 weeks)*

- 🛍️ **E-Commerce Storefronts:**  
  Product catalogs, category filters, cart systems, and direct WhatsApp / online checkout.

- ⚡ **WordPress to Next.js Migration & Speed Fixes:**  
  Converting slow, bloated sites into blazing-fast modern web applications.

**Ready to discuss your project or get a customized quote?**  
[WhatsApp](${aiKnowledge.contact.whatsapp}) [Email](${aiKnowledge.contact.email})`;
    }

    // -----------------------------------------------------------------------
    // CONTACT & HIRE
    // -----------------------------------------------------------------------
    case "contactHire": {
      return `### 📩 How to Reach & Hire Pramod

Pramod is actively available for **freelance projects**, **custom business websites**, and **full-time developer roles**!

Connect directly:  
[WhatsApp](${aiKnowledge.contact.whatsapp}) [Email](${aiKnowledge.contact.email}) [LinkedIn](${aiKnowledge.contact.linkedin}) [GitHub](${aiKnowledge.contact.github})

Feel free to send a direct message on WhatsApp with your project requirements!`;
    }

    // -----------------------------------------------------------------------
    // TIMELINE & TURNAROUND
    // -----------------------------------------------------------------------
    case "timeline": {
      return `### ⏱️ Typical Project Delivery Timelines

- **Standard Business Websites:** **1 to 2 Weeks** (Design, responsive build, SEO setup, and testing).
- **Custom Web Applications & SaaS MVPs:** **3 to 6 Weeks** (Architecture, backend APIs, database, and auth).
- **Speed Optimization & Fixes:** **2 to 4 Days**.

Pramod values clear communication and hits deadlines reliably without sacrificing code quality. 

Have an urgent timeline? [Chat on WhatsApp](${aiKnowledge.contact.whatsapp}) to check current availability!`;
    }

    // -----------------------------------------------------------------------
    // SERVICES & OFFERINGS
    // -----------------------------------------------------------------------
    case "services": {
      const servicesList = aiKnowledge.services
        .map((s) => `* **${s.name}:** ${s.description}`)
        .join("\n");

      return `### 🤝 Services Pramod Offers

${servicesList}

Have a project idea in mind? [Message on WhatsApp](${aiKnowledge.contact.whatsapp}) to discuss your requirements!`;
    }

    // -----------------------------------------------------------------------
    // ABOUT & BIO
    // -----------------------------------------------------------------------
    case "aboutBio": {
      return `### 👋 Meet Pramod Das

**Pramod Das** is a Full Stack Web Developer based in Goa, India, currently working at **Cosmic Solutions**.

With over **2 years of hands-on production experience** and **30+ websites delivered**, Pramod specializes in:
- 🚀 Modern web applications with **Next.js & React 19**
- ⚙️ Scalable backend systems with **Node.js & PostgreSQL**
- 🎨 Responsive UI design with **Tailwind CSS v4 & Framer Motion**
- 📈 High-converting business websites with **90+ Lighthouse speed scores**

What would you like to explore about his work?`;
    }

    // -----------------------------------------------------------------------
    // WORDPRESS MIGRATIONS
    // -----------------------------------------------------------------------
    case "wordpress": {
      return `### ⚡ WordPress to Next.js Modernization

Tired of slow WordPress sites, plugin conflicts, and security vulnerabilities?

Pramod specializes in **upgrading WordPress websites to modern Next.js + React builds**:
- 🚀 **Instant Load Speeds:** Sub-second page transitions and 90+ Lighthouse scores.
- 🔒 **Ironclad Security:** Serverless architecture eliminating WordPress database hacking risks.
- 📱 **Mobile Optimization:** Flawless responsive layout and better Google search rankings.

Want to modernize your site? [Message on WhatsApp](${aiKnowledge.contact.whatsapp})!`;
    }

    // -----------------------------------------------------------------------
    // SEO & PERFORMANCE
    // -----------------------------------------------------------------------
    case "seo": {
      return `### 🚀 Performance & Technical SEO Expertise

A slow website loses customers and ranks poorly on Google. Pramod builds every website with:

- 📊 **90+ Lighthouse Scores:** Fast initial load, optimized image pipelines, and minimal bundle sizes.
- 🔍 **Technical SEO:** Proper semantic HTML, OpenGraph tags, JSON-LD schema, dynamic sitemaps, and robots.txt.
- 📱 **Core Web Vitals:** Near-zero Cumulative Layout Shift (CLS) and fast Largest Contentful Paint (LCP).

Need your website audited or sped up? [Contact Pramod on WhatsApp](${aiKnowledge.contact.whatsapp})!`;
    }

    // -----------------------------------------------------------------------
    // RESUME & QUALIFICATIONS
    // -----------------------------------------------------------------------
    case "resume": {
      return `### 📄 Pramod's Profile & Resume Highlights

- **Role:** Full Stack Web Developer
- **Experience:** 2+ Years | 30+ Delivered Projects
- **Company:** Cosmic Solutions (Goa, India)
- **Primary Stack:** Next.js, React 19, TypeScript, Node.js, PostgreSQL, Tailwind CSS v4
- **Education:** Computer Science & Web Development Background

Want a full copy of Pramod's resume or portfolio PDF? [Message on WhatsApp](${aiKnowledge.contact.whatsapp}) or email [${aiKnowledge.contact.email}](mailto:${aiKnowledge.contact.email})!`;
    }

    // -----------------------------------------------------------------------
    // LOCATION & REACH
    // -----------------------------------------------------------------------
    case "location": {
      return `### 📍 Location & Working Reach

- **Base:** **Goa, India** (UTC+5:30).
- **Working Reach:** Works seamlessly with clients and engineering teams worldwide across multiple timezones.
- **Local Coverage:** Builds custom websites for businesses across North Goa, South Goa, Panaji, Candolim, Calangute, Margao, and beyond.

Planning a project? [Message on WhatsApp](${aiKnowledge.contact.whatsapp})!`;
    }

    // -----------------------------------------------------------------------
    // WEATHER (OUT-OF-BOX PIVOT)
    // -----------------------------------------------------------------------
    case "weather": {
      return `### ☀️ Forecast: 100% High-Performance Web Development!

I don't have real-time meteorological sensors, but the forecast for Pramod's web development is always bright! 

Pramod is based in beautiful **Goa, India**, building ultra-fast web applications with Next.js, React 19, and TypeScript.

What would you like to explore?
- 🚀 **Projects:** Learn about his 30+ production web apps & client builds
- 🛠️ **Tech Stack:** Details on Next.js, React, Node.js, and PostgreSQL
- 📩 **Contact:** Instant WhatsApp & Email options`;
    }

    // -----------------------------------------------------------------------
    // FOOD & DINING (OUT-OF-BOX PIVOT)
    // -----------------------------------------------------------------------
    case "food": {
      return `### ☕ Fuel for Coding Clean Web Apps!

While Pramod loves a good Goan fish curry or a fresh cup of coffee to power his coding sessions, I specialize in his **full-stack web development services**!

Need a high-converting website for a restaurant, cafe, or business with interactive menus and direct WhatsApp ordering?

Would you like to see his **[Featured Projects](#projects)** or **[Services](#services)**?`;
    }

    // -----------------------------------------------------------------------
    // TRAVEL & GOA (OUT-OF-BOX PIVOT)
    // -----------------------------------------------------------------------
    case "travelGoa": {
      return `### 🌴 Powered from Sunny Goa, India!

Goa is known for its beautiful beaches and vibrant hospitality, and Pramod builds **luxury hospitality & villa booking websites** that capture that exact charm!

He built platforms like **Lumière & Co.** (luxury villa sanctuaries) and **Resort Website** with direct WhatsApp booking engines.

Want to build a modern website for your resort, villa, or business? [Chat on WhatsApp](${aiKnowledge.contact.whatsapp})!`;
    }

    // -----------------------------------------------------------------------
    // JOKES (OUT-OF-BOX PIVOT)
    // -----------------------------------------------------------------------
    case "jokes": {
      return `### 😄 Here's a Developer Classic for You:

*Why do programmers prefer dark mode?*  
**Because light attracts bugs! 🐛**

Speaking of clean, bug-free code, Pramod writes modern TypeScript and React with 90+ Lighthouse speed scores. 

How can Pramod help you with your next web build?`;
    }

    // -----------------------------------------------------------------------
    // GREETINGS
    // -----------------------------------------------------------------------
    case "greetings": {
      return `### 👋 Hello! I'm Pramod's AI Twin

I'm an interactive assistant grounded in Pramod Das's portfolio. How can I help you today?

- 🚀 **Projects:** 30+ production websites & web apps
- 🛠️ **Tech Stack:** Next.js, React 19, TypeScript, Node.js, PostgreSQL
- 💰 **Pricing & Estimates:** Transparent project timelines & rates
- 📩 **Hire / Contact:** Direct WhatsApp & Email details

Feel free to pick a topic or ask me anything!`;
    }

    // -----------------------------------------------------------------------
    // THANKS
    // -----------------------------------------------------------------------
    case "thanks": {
      return `### You're very welcome! 🙌

I'm glad I could help. If you'd like to work with Pramod or discuss a project, connect directly:  
[WhatsApp](${aiKnowledge.contact.whatsapp}) [Email](${aiKnowledge.contact.email})

Have any other questions about his skills or projects?`;
    }

    // -----------------------------------------------------------------------
    // OFF-TOPIC GENERAL
    // -----------------------------------------------------------------------
    case "offtopic": {
      return `### 🤖 I'm Pramod's Dedicated Portfolio AI!

While I'd love to chat about everything under the sun, my primary mission is to help you learn about **Pramod Das** and his web development work.

Here is what I can help you with:
- 🚀 **Projects & Case Studies** (30+ websites built)
- 🛠️ **Tech Stack & Skills** (Next.js, React, Node.js, PostgreSQL)
- 💼 **Experience & Role at Cosmic Solutions**
- 📩 **Contact & Hiring Details**

How can Pramod assist with your web project?`;
    }

    // -----------------------------------------------------------------------
    // DEFAULT SMART FALLBACK
    // -----------------------------------------------------------------------
    default: {
      return `### 👋 Hey there! I'm Pramod's AI Twin

I'm dedicated to answering any questions about **Pramod Das** and his web development work:

- 🚀 **Projects:** Explore his 30+ production websites, SaaS platforms & client builds.
- 🛠️ **Tech Stack:** Next.js, React 19, TypeScript, Node.js, PostgreSQL, Tailwind CSS.
- 💰 **Pricing & Timeline:** Project quotes, scopes, and turnaround times.
- 💼 **Experience:** His role at Cosmic Solutions and track record.
- 📩 **Hire / Contact:** Direct WhatsApp, Email, LinkedIn, and GitHub links.

What would you like to know?`;
    }
  }
}
