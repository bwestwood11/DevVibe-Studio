'use client'

import { montserrat, sourceSans3 } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Typed from "react-typed";
import { Badge } from "../ui/badge";


const HeroSection = () => {

  return (
    <div className="w-full h-full bg-[#F3F4F6] pb-0 sm:pb-0 relative z-10">  
     <Image 
      src='/background-wave.png'
      alt="background wave image"
      width={1920}
      height={1080}
      priority
      className="absolute top-0 left-0 opacity-25 h-full w-screen"
      />
      <div className="max-w-7xl relative mx-auto h-full sm:flex lg:flex-row flex-col md:pt-[88px] pt-[60px] px-5" style={{pointerEvents: 'all'}}>
        {/* Blur Effect in background on mobile devices only */}
        <div
          className="absolute block sm:hidden inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffa256] to-[#e08700] opacity-30 sm:left-[calc(90%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
     
        {/* left side section of Hero Section */}
        <div
          className= "basis-1/2 flex flex-col gap-8 z-10"
        >
          <div className="flex flex-col">
            <Badge className="w-fit whitespace-nowrap bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300 mb-2">
              {" "}
              Premium Services
            </Badge>
            <h1 className={montserrat.className}>
              An Agency That Specializes
              <br />
              <Typed
                strings={[
                  "in Web Development",
                  "in Web Design",
                  "in Google SEO",
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </h1>
          </div>
          <p className={cn(sourceSans3.className, "text-xl")}>
            Enhance your business with a website that is designed to convert. We
            build websites that are fast, secure, and easy to manage. We also
            offer SEO services to help you rank higher on Google.
          </p>
          <div className="flex items-center gap-8 md:pb-6 pb-0 lg:pb-0">
            <a href="https://calendly.com/competitive_edge_digital/free-consultation">
              <button className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-white px-6 py-3 rounded-lg uppercase font-bold tracking-widest text-sm group hover:from-orange-600 hover:via-orange-400 hover:to-orange-300 transition-all">
                Book a Call
              </button>
            </a>
          </div>
        </div>
        {/* Right Side of Hero Section */}
        <div
        className="basis-1/2 min-h-full sm:px-10 lg:px-6 flex pt-10 sm:pt-0">
          <Image
            src="/Brett-Hero-Image.png"
            alt="Hero Image"
            width={1920}
            height={1080}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
