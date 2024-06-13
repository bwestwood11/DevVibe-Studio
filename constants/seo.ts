import { Metadata } from "next";

export const SeoMetadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevVibe Studio | Web Design | Web Development",
    description:
      "Creative agency specializing in Web Design, Web Development and Content Creation",
    url: "https://www.devvibestudio.com",
    siteName: "DevVibe Studio",
    images: [
        {
            url: '/hero-section-screenshot.png',
            width: 800,
            height: 600,
        }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevVibe Studio | Web Design | Web Development",
    description: "Creative agency specializing in Web Design, Web Development and Content Creation",
    images: [
        {
            url: 'https://www.devvibestudio.com/hero-section-screenshot.png',
            width: 800,
            height: 600,
        }
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true
  }
} satisfies Metadata
