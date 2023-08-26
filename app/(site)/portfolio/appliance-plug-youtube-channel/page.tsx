import Image from "next/image";
import YouTubeBanner from "@/public/youtubebanner.png";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import YouTubeScreenshot from "@/public/youtubescreenshot.png";

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
          {/* <Image
          src={blob1}
          alt="blob"
          width={300}
          height={300}
       
          className="absolute sm:right-[-70px] sm:top-0 top-[760px] right-[-140px] z-0"
          /> */}
          <div className="max-w-7xl mx-auto flex sm:flex-row flex-col mt-20">
            <div className="basis-1/2">
              <h2
                className={cn(
                  montserrat.className,
                  "font-bold text-xl text-center pb-4"
                )}
              >
                The Appliance Plug YouTube Channel
              </h2>
              <div className="h-1/2 shadow-2xl shadow-gray-500 rounded-lg border border-gray-300">
                <Image
                  src={YouTubeBanner}
                  alt="analytics"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className="basis-1/2 text-left sm:px-16 z-10">
              <h2 className="font-bold text-2xl pt-6 sm:pt-0 mb-2">
                Who They Are?
              </h2>
              <p className="text-gray-900 leading-7">
                The Appliance Plug is a local appliance retailer that sells
                appliances to commercial and residential clients.
              </p>
              <h2 className="font-bold text-2xl mb-2 mt-16">
                What They Needed?
              </h2>
              <p className="text-gray-900 leading-7 mb-2">
                Their online presence was minimal and they did have a great
                website already in motion.{" "}
              </p>
              <p className="text-gray-900 leading-7 mb-2">
                Giving people valuable information when it comes to the
                appliance industry is key since most people need guidance when
                it comes to the whole process of this industry.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliancePlugPage;
