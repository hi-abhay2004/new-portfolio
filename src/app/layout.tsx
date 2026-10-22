import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role} | PostgreSQL, Backend & AI Automation`,
    template: `%s | ${profile.name}`,
  },
  description: profile.metaDescription,
  keywords: [
    "Abhay J Sharma",
    "freelance software engineer India",
    "PostgreSQL developer",
    "Next.js developer for hire",
    "NestJS backend developer",
    "freelance full stack developer",
    "LLM RAG developer",
    "Shopify migration developer",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — ${profile.role}`,
    description: profile.metaDescription,
    siteName: profile.name,
    images: [{ url: "/og-image.png", width: 1254, height: 1254, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.metaDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      jobTitle: profile.role,
      url: siteUrl,
      email: `mailto:${profile.email}`,
      telephone: profile.phone,
      address: { "@type": "PostalAddress", addressCountry: "IN" },
      sameAs: [profile.linkedin, profile.github],
      knowsAbout: [
        "PostgreSQL",
        "Python",
        "Next.js",
        "NestJS",
        "Backend Development",
        "Data Migration",
        "LLM Applications",
        "Retrieval-Augmented Generation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: profile.name,
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: `${profile.name} — Freelance Software Engineering`,
      url: siteUrl,
      provider: { "@id": `${siteUrl}/#person` },
      areaServed: "Worldwide",
      availableChannel: { "@type": "ServiceChannel", serviceUrl: `${siteUrl}/#contact` },
      serviceType: [
        "Backend & Database Architecture",
        "Full-Stack Web Application Development",
        "AI & Automation (LLM/RAG, n8n)",
        "Technical SEO",
      ],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <div className="noise" aria-hidden="true" />
        <ScrollProgress />
        <CursorGlow />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
