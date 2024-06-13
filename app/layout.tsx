import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ToastProvider from "@/components/ToastProvider";
import Script from "next/script";
import dynamic from 'next/dynamic'
import { SeoMetadata } from "@/constants/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...SeoMetadata,
  title: {
    template: '%s | DevVibe Studio',
    default: 'DevVibe Studio',
  },
  metadataBase: new URL(process.env.SITE_URL!),
  description: 'Creative agency specializing in Web Design, Web Development and Content Creation'
};

const ChatbotComponent = dynamic(() => import('@/components/chatbot'), { ssr: false })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      <body className={inter.className}>
        {/* Script Tag that allows for the AI voice chat bot from VoiceFlow */}
        {/* <Script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(d, t) {
            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
            v.onload = function() {
              window.voiceflow.chat.load({
                verify: { projectID: '655e9a9073f76b00076ed256' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production'
              });
            }
            v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
        })(document, 'script')`,
          }}
        ></Script>  */}
        <ChatbotComponent />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
