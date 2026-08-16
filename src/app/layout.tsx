import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Full Stack Web Developer in Goa | Business Websites & Web Apps`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Pramod Das is a Full Stack Web Developer based in Goa, India specializing in custom Next.js web applications, high-converting business websites, and WordPress to modern React builds. Available for freelance & contract work.",
  keywords: [
    "Freelance Web Developer in Goa",
    "Web Developer in Goa",
    "Full Stack Web Developer Goa",
    "Website Development in Goa",
    "Next.js Developer India",
    "React Developer Goa",
    "Business Website Developer Goa",
    "Hotel and Villa Website Developer Goa",
    "WordPress Developer Goa",
    "Custom Web Applications",
    "SEO Web Development Goa",
    "Website Development Goa",
  ],
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — Full Stack Web Developer in Goa`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Full Stack Web Developer in Goa`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Full Stack Web Developer in Goa`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL(siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
