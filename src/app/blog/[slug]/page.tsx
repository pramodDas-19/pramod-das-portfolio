import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { BLOG_POSTS, getBlogPost } from "@/config/blog-posts";
import { siteConfig } from "@/config/site";
import { BlogPostContent } from "@/components/blog/blog-post-content";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url || "https://pramoddas.dev";
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: `${post.seoTitle} | Pramod Das`,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords, ...post.topics],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.ogTitle,
      description: post.ogDescription,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.publishedDate,
      authors: ["Pramod Das"],
      images: [
        {
          url: post.coverImage || "/freelance.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.ogTitle,
      description: post.ogDescription,
      images: [post.coverImage || "/freelance.png"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Get other posts for related reading
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.publishedDate,
        dateModified: post.publishedDate,
        author: {
          "@type": "Person",
          name: "Pramod Das",
          jobTitle: "Full Stack Web Developer in Goa",
          url: siteConfig.url || "https://pramoddas.dev",
        },
        publisher: {
          "@type": "Person",
          name: "Pramod Das",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteConfig.url || "https://pramoddas.dev"}/blog/${post.slug}`,
        },
        keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
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

      <BlogPostContent post={post} otherPosts={otherPosts} />
    </PageShell>
  );
}
