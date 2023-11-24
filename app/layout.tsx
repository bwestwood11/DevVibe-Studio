import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/Footer";
import { CrispProvider } from "@/components/crisp-provider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ToastProvider from "@/components/ToastProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Competitive Edge Marketing | Web Design | Web Development",
  description:
    "Marketing Agency specializing in Web Design, Web Development and Content Creation",
  alternates: {
    canonical: "https://www.competitiveedgedigital.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <CrispProvider /> */}
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
      <body className={inter.className}>
      <Script
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
      ></Script>
        <ToastProvider />
        {/* <Header /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
