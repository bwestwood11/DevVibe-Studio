import Image from "next/image";
import YouTubeBanner from "@/public/youtubebanner.png";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import YouTubeScreenshot from "@/public/youtubescreenshot.png";
import AppliancePlugStats from "@/public/applianceplugstats.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import blob1 from "@/public/blob1.png";

const montserrat = Montserrat({ subsets: ["latin"] });

const AppliancePlugPage = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-50">
        <div className="relative bg-cover bg-center w-screen h-[50vh] flex flex-col justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-t from-black to-transparent z-10" />
          <Image
            src={YouTubeScreenshot}
            layout="fill"
            alt="website development image"
            objectFit="cover"
            objectPosition="center"
            className="absolute inset-0 z-1"
            priority
          />
          <h1 className="text-center text-white tracking-wide z-[20] font-bold text-4xl lg:text-5xl px-5">
            Appliance Plug YouTube Channel Case Study
          </h1>
          <p className="z-[20] font-semibold pt-4 text-xl text-orange-500">
            Content Creation & Video Editing
          </p>
        </div>
        <div className="px-8 relative z-10">
          <Image
          src={blob1}
          alt="blob"
          width={300}
          height={300}
       
          className="absolute sm:right-[-70px] sm:top-0 top-[760px] right-[-140px] z-[-10]"
          />
          <div className="max-w-7xl mx-auto flex sm:flex-row flex-col mt-20">
            <div className="basis-1/2">
              <div className="h-1/2">
                <Image
                  src={YouTubeBanner}
                  alt="analytics"
                  width={1000}
                  height={1000}
                  className="sm:mt-24 shadow-2xl shadow-gray-500 rounded-lg border border-gray-300"
                />
              </div>
            </div>
            <div className="basis-1/2 text-left sm:px-16 z-10">
              <h2 className="font-bold text-2xl pt-6 sm:pt-0 mb-2">
                Who They Are?
              </h2>
              <p className="text-gray-900 leading-7">
                The Appliance Plug is a local appliance retailer that sells
                appliances to commercial and residential clients in Tampa, FL.
              </p>
              <h2 className="font-bold text-2xl mb-2 mt-16">
                What They Needed?
              </h2>
              <div className="flex flex-row gap-3">
                <Badge className="mt-2 bg-red-600">YouTube</Badge>
                <Badge className="mt-2">Content Creation</Badge>
              </div>
              <p className="text-gray-900 leading-7 my-2">
                Their online presence was minimal and they did have a great
                website already in motion.{" "}
              </p>
              <p className="text-gray-900 leading-7 mb-4">
                Giving people valuable information when it comes to the
                appliance industry is key since most people need guidance when
                it comes to the whole process of installing or properly using
                appliances.{" "}
              </p>
              <p className="text-gray-900 leading-7">
                We decided to create a{" "}
                <a href="https://www.youtube.com/channel/UCXRaNufTL_ez75DOzHtMMXQ">
                  <span className="font-bold underline">YouTube channel</span>
                </a>{" "}
                for them to help them gain more exposure and to help them build
                a community around their brand. Doing this, we were able to help
                them gain a dedicated subscriber base and get their channel
                monetized in less than 6 months.
              </p>
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto flex sm:flex-row flex-col-reverse">
            <div className="max-w-2xl mx-auto basis-1/2">
              <h2 className="font-bold text-2xl tracking-tight text-gray-900 mb-2 mt-16 text-center">
                The Results
              </h2>
              <p className="text-gray-900 leading-7 mb-4">
                The Appliance Plug's YouTube channel has over 8,000 subscribers
                and 3 million + channel views. We were able to get them
                monetized with the YouTube Partner Program in less than 6
                months. Which in turn means, they are making money every single
                month passively from their YouTube channel.
              </p>
              <p className="text-gray-700 leading-7 ">
                However, one of the best things about their YouTube channel is
                that they are able to build a community around their brand. They
                are able to interact with their potential customers on a daily
                basis. This helps them build trust and rapport with their
                potential customers.
              </p>
            </div>
            <div className="basis-1/2">
              <Image
                src={AppliancePlugStats}
                alt="analytics"
                width={1000}
                height={1000}
                className="mt-16 shadow-2xl shadow-gray-500 rounded-lg border border-gray-300 sm:mx-6"
              />
            </div>
   
          </div>
      
        </div>
      </div>
      <div className="bg-gray-50 w-full">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Want Results Like This?
          <br />
          Contact us today!
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <Button>
            Get Started
          </Button>
          <Button variant='outline'>
            Learn More
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AppliancePlugPage;
