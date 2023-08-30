import Image from "next/image";
import analytics from "@/public/analytics.jpg";
import homepagejunkremoval from "@/public/homepagejunkremoval.png";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import blob1 from "@/public/blob1.png";
import { Badge } from "@/components/ui/badge";
import PricingPage from "@/public/PricingPageImg.png";

const montserrat = Montserrat({ subsets: ["latin"] });

const CompetitiveEdgeJunkRemoval = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-50">
        <div className="relative bg-cover bg-center w-screen h-[50vh] flex flex-col justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-t from-black to-transparent z-10" />
          <Image
            src={analytics}
            layout="fill"
            alt="website development image"
            objectFit="cover"
            objectPosition="center"
            className="absolute inset-0 z-1"
            priority
          />
          <h1 className="text-center text-white tracking-wide z-[20] font-bold text-4xl px-5">
            Competitive Edge Junk Removal Case Study
          </h1>
          <p className="z-[20] font-semibold pt-4 text-xl text-orange-500">
            Website Design & Development
          </p>
        </div>

        <div className="px-8 relative z-10">
          <Image
          src={blob1}
          alt="blob"
          width={300}
          height={300}
       
          className="absolute sm:right-[-70px] sm:top-0 top-[760px] right-[-140px] z-0"
          />
          <div
            className="max-w-7xl mx-auto flex sm:flex-row flex-col mt-20"
            
          >
            <div className="basis-1/2 overflow-auto">
              <h2 className={cn(montserrat.className, "font-bold text-xl text-center pb-4")}>Competitive Edge Dumpsters Home Page</h2>
            <div className="h-[590px] overflow-y-scroll shadow-2xl shadow-gray-500 rounded-lg border border-gray-300">
              <Image
                src={homepagejunkremoval}
                alt="analytics"
                width={1000}
                height={1000}
                className="transition duration-500 ease-in-out transform hover:scale-110"
              />
              </div>
            </div>
            <div className="basis-1/2 text-left sm:px-16 z-10">
              <h2 className="font-bold text-2xl pt-6 sm:pt-0 mb-2">Who They Are?</h2>
              <p className="text-gray-900 leading-7">Competitive Edge Dumpsters is a small local business that fuels its operation on word of mouth and quality service. They had somewhat of an online presence, but nowhere near where they wanted it to be.</p>
              <h2 className="font-bold text-2xl mb-2 mt-16">What They Needed?</h2>
              <div className="flex flex-row gap-3">
                <Badge className="mb-2 bg-orange-600">Web Design</Badge>
              <Badge className="mb-2">Web Development</Badge>
              <Badge className="mb-2">Local SEO</Badge>
              </div>
              
              <p className="text-gray-900 leading-7 mb-2">Competitive Edge Dumpsters needed a website that would help them stand out from their competition. They wanted a website that would help them generate more leads and help generate brand awareness.</p>
              <p className="text-gray-900 leading-7 mb-2">Every local business also needs strong Local Google SEO strategies. So, designing, developing and maintaining their website was on the table.</p>
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto flex sm:flex-row flex-col-reverse">
            <div className="max-w-2xl mx-auto basis-1/2">
              <h2 className="font-bold text-2xl mb-2 mt-16 text-center">
                The Results
              </h2>
              <p className="text-gray-900 leading-7 mb-4">
                Competitive Edge Dumpsters now has a website that is able to
                generate leads for them on a daily basis. They are able to
                accept payments directly on their website and get notified as soon as a new lead comes in.
              </p>
              <p className="text-gray-700 leading-7 ">
                Local Google SEO is an ongoing process, but we have been able to
                get them to the first page of Google for their main keywords.
                Writing blog posts and creating content for their website has
                helped them rank higher on Google and is part of the maintenance plan we have with them.
              </p>
            </div>
            <div className="basis-1/2">
              <Image
                src={PricingPage}
                alt="analytics"
                width={1000}
                height={1000}
                className="mt-16 shadow-2xl shadow-gray-500 rounded-lg border border-gray-300 sm:mx-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveEdgeJunkRemoval;
