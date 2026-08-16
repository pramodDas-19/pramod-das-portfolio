export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
  badge?: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  headline: string;
  description: string;
  url: string;
  ogImage: string;
  author: {
    name: string;
    email: string;
    phone?: string;
    whatsapp?: string;
    github: string;
    twitter: string;
    linkedin: string;
  };
  navItems: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "Pramod Das",
  role: "Full Stack Web Developer",
  headline: "I build modern web experiences that solve real business problems.",
  description:
    "Full Stack Web Developer based in Goa, India. I build modern, scalable web applications and high-quality websites for businesses. Available for freelance projects and full-time opportunities.",
  url: "https://pramoddas.dev",
  ogImage: "https://pramoddas.dev/og.png",
  author: {
    name: "Pramod Das",
    email: "daspramod479@gmail.com",
    phone: "+91 8767049312",
    whatsapp: "https://wa.me/918767049312",
    github: "https://github.com/pramodDas-19",
    twitter: "https://twitter.com",
    linkedin: "https://www.linkedin.com/in/pramoddas19/",
  },
  navItems: [
    { title: "About", href: "/#about" },
    { title: "Projects", href: "/#projects" },
    { title: "Skills", href: "/#skills" },
    { title: "Experience", href: "/#experience" },
    { title: "Blog", href: "/#blog" },
    { title: "Contact", href: "/#contact" },
  ],
};

