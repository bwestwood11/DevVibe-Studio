import { Metadata } from "next";

export const metadata = {
    title: "Contact Us | Competitive Edge Digital",
    description: "Contact Us Section for Website Design, Development, and SEO Services",
    alternates: {
        canonical: "https://www.competitiveedgedigital.com/contact"
    }
  };
  
  export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  }
  