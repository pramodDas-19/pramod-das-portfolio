import { PageShell } from "@/components/layout/page-shell";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { SkillsSection } from "@/components/home/skills-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { BlogSection } from "@/components/home/blog-section";
import { ContactSection } from "@/components/home/contact-section";
import { siteConfig } from "@/config/site";

export default function Home() {
  const siteUrl = siteConfig.url || "https://pramoddas.dev";

  // Homepage Structured Data Schema (Person, WebSite & ProfessionalService)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Pramod Das",
        jobTitle: "Full Stack Web Developer",
        url: siteUrl,
        image: `${siteUrl}/avatar.png`,
        email: "daspramod479@gmail.com",
        telephone: "+918767049312",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Goa",
          addressCountry: "IN",
        },
        sameAs: [
          "https://github.com/pramodDas-19",
          "https://www.linkedin.com/in/pramoddas19/",
        ],
        knowsAbout: [
          "React.js",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Tailwind CSS",
          "PostgreSQL",
          "Full Stack Web Development",
          "WordPress to Next.js Migration",
          "Web Performance Optimization",
          "SEO Web Design",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Pramod Das — Full Stack Web Developer in Goa",
        description: siteConfig.description,
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Pramod Das Web Development",
        url: siteUrl,
        image: `${siteUrl}/avatar.png`,
        priceRange: "₹₹",
        telephone: "+918767049312",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Goa",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "15.2993",
          longitude: "74.1240",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "30",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  };

  return (
    <PageShell>
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <BlogSection />
      <ContactSection />
    </PageShell>
  );
}
