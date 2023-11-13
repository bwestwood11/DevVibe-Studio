import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { CrispProvider } from "@/components/crisp-provider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import ToastProvider from "@/components/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Competitive Edge Marketing | Web Design | Web Development",
  description:
    "Marketing Agency specializing in Web Design, Web Development and Content Creation",
    alternates: {
      canonical: 'https://www.competitiveedgedigital.com',
    }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CrispProvider />
      
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      <body className={inter.className}>
        <ToastProvider />
        {/* <Header /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
