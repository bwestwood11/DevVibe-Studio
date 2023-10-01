"use client";

import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Source_Sans_3 } from "next/font/google";
import Image from "next/image";
import { BsArrowDownRight } from "react-icons/bs";
import { Button } from "./ui/button";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Typed from "react-typed";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";

const sans = Source_Sans_3({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["800", "400"] });

const HeroSection = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full bg-[#F3F4F6] pb-20 sm:pb-0">
      <div className="max-w-6xl relative mx-auto sm:h-[660px] sm:flex sm:flex-row flex-col sm:pt-[88px] pt-[60px] px-5">
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
        <div className={cn(poppins.className, "basis-1/2 flex flex-col gap-8")}>
          <div className="flex">
            <h1 className="font-extrabold leading-tight text-5xl tracking-wide bg-gradient-to-r from-orange-400 to-[#e86a1e] bg-clip-text text-transparent">
              An Agency That Specializes
              <br />
              <Typed
                strings={[
                  "in Web Development",
                  "in Web Design",
                  "in Local SEO",
                ]}
                typeSpeed={150}
                backSpeed={100}
                loop
                className="text-[#041620] text-5xl font-extrabold leading-tight tracking-wide"
              />
            </h1>
          </div>
          <h2 className={cn(sans.className, "text-[#041620] text-xl")}>
            Boost your online presence with our expert web development & design agency.
            
          </h2>

          {/* Button only appears on mobile version */}
          <button
            onClick={() => router.push("/contact")}
            className="flex items-center gap-1 sm:hidden bg-black text-white text-sm uppercase whitespace-nowrap font-bold p-3 w-2/5 rounded-lg"
          >
            Contact Us
            <BsArrowDownRight className="inline-block" />
          </button>

          <Image
            className="mt-5"
            src="/Review.png"
            alt="review"
            width={300}
            height={300}
          />
          <div className="sm:flex hidden items-center gap-8">
            <Button size="lg">Book A Call</Button>
          </div>
        </div>
        {/* Right Side of Hero Section */}
        <div className="basis-1/2 relative h-full sm:block hidden">
          <Image
            src="/circle.png"
            alt="circle"
            width={500}
            height={500}
            layout="responsive"
            objectFit="contain"
            className="absolute top-0 right-0"
          />
          <Image
            src="/graphart.png"
            alt="graphart"
            width={500}
            height={500}
            priority
            layout="responsive"
            objectFit="contain"
            className="absolute bottom-0 left-0 z-[10]"
          />
          {/* Backdrop Blur on Desktop Version Only */}
          <div className="bg-black/60 backdrop-blur w-3/4 h-1/3 mx-auto p-6 rounded-lg grid grid-cols-2 gap-5">
            <div
              className={cn(
                sans.className,
                "text-white items-center flex gap-3"
              )}
            >
              <h4 className="lg:text-5xl text-2xl font-bold">50+ </h4>
              <p className="lg:text-md text-sm">
                Projects <br /> Done
              </p>
            </div>
            <div
              className={cn(
                sans.className,
                "text-white items-center flex gap-3"
              )}
            >
              <h4 className="lg:text-5xl text-2xl font-bold">40+ </h4>
              <p className="lg:text-md text-sm">
                Happy <br /> Clients
              </p>
            </div>
            <div
              className={cn(
                sans.className,
                "text-white items-center flex gap-3"
              )}
            >
              <h4 className="lg:text-5xl text-2xl font-bold">10+ </h4>
              <p className="lg:text-md text-sm">
                Creative <br /> Peoples
              </p>
            </div>
            <div
              className={cn(
                sans.className,
                "text-white items-center flex gap-3"
              )}
            >
              <h4 className="lg:text-5xl text-2xl font-bold">10+ </h4>
              <p className="lg:text-md text-sm">
                Years <br /> Experience
              </p>
            </div>
          </div>
          <button className="bg-black z-[100] mt-16 mx-16 text-white text-2xl uppercase font-bold p-3 w-1/2 rounded-lg">
            Explore More
            <BsArrowDownRight className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
