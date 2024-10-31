import "./globals.css";
import type { Metadata } from "next";
import { Inter,  } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ToastProvider from "@/components/ToastProvider";
import dynamic from 'next/dynamic'
import { SeoMetadata } from "@/constants/seo";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...SeoMetadata,
  title: {
    template: '%s | DevVibe Studio',
    default: 'DevVibe Studio | Web Design | Web Development',
  },
  metadataBase: new URL(process.env.SITE_URL!),
  description: 'Professional website design and development agency specializing in modern, user-focused web design, custom development, and local SEO strategies to help businesses grow online.'
};

const ChatbotComponent = dynamic(() => import('@/components/chatbot'), { ssr: false })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="max-w-[100vw] overflow-x-hidden">
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      <body className={inter.className}>
        <ChatbotComponent />
        <ToastProvider />
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
