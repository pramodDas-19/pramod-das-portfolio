import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import {
  FEATURED_CASE_STUDIES,
  getCaseStudy,
} from "@/config/case-studies";
import { siteConfig } from "@/config/site";
import { ProjectCaseStudyView } from "@/components/project/project-case-study-view";

export function generateStaticParams() {
  return FEATURED_CASE_STUDIES.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url || "https://pramoddas.dev";
  const canonicalUrl = `${siteUrl}/projects/${project.slug}`;

  return {
    title: `${project.metaTitle} | Pramod Das`,
    description: project.metaDescription,
    keywords: project.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: project.image || "/p1.webp",
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.metaTitle,
      description: project.metaDescription,
      images: [project.image || "/p1.webp"],
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) {
    notFound();
  }

  const otherProjects = FEATURED_CASE_STUDIES.filter((p) => p.slug !== project.slug).slice(0, 3);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url || "https://pramoddas.dev";

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        genre: project.category,
        author: {
          "@type": "Person",
          name: "Pramod Das",
          jobTitle: "Full Stack Web Developer",
          url: siteUrl,
        },
        image: project.image ? `${siteUrl}${project.image}` : `${siteUrl}/p1.webp`,
        url: `${siteUrl}/projects/${project.slug}`,
        keywords: project.keywords?.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${siteUrl}/#projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `${siteUrl}/projects/${project.slug}`,
          },
        ],
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

      <ProjectCaseStudyView project={project} otherProjects={otherProjects} />
    </PageShell>
  );
}
