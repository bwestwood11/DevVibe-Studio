
import AboutUsSection1 from "@/components/About-Us-Section";
import WhoWeAre from "@/components/landing-page/Who-We-Are";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Competitive Edge Digital Agency",
  description:
    "We are a marketing agency that specializes in web design, web development and Google SEO.",
  alternates: {
    canonical: "https://www.competitiveedgedigital.com/about",
  },
};

export default function AboutPage() {

  return (
    <div className="w-full bg-[#F3F4F6] relative pt-16 flex flex-col">
      <div className="flex flex-col max-w-7xl mx-auto h-full pb-20">
      <div className="flex flex-row max-w-7xl mx-auto gap-5 items-center">
        <div className="w-8 h-2 flex items-center justify-center">
      <div className="h-full w-12 bg-orange-500" />
    </div>
    <h2 className="text-slate-700 text-5xl font-extrabold text-center tracking-wide">
      About Us
    </h2>
      </div>
      <p className="max-w-7xl mx-auto text-center text-xl tracking-wide leading-7 text-gray-700 mt-5">Providing brilliant ideas for your business.</p>
      </div>
     
      <WhoWeAre />
         <AboutUsSection1 />
  </div>
  )

}

