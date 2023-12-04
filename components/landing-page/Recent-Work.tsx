import Image from "next/image";
import { Source_Sans_3 } from "next/font/google";

const sans = Source_Sans_3({ subsets: ["latin"] });


const RecentWork = () => {
  return (
    <div className={`w-full bg-[#F3F4F6] py-20 ${sans.className}`}>
      <div className="max-w-7xl mx-auto px-8 sm:px-0">
         <div className="w-full sm:w-4/5 mx-auto flex flex-col sm:flex-row px-6 mb-20">
        <div className="flex basis-1/2 w-full h-full">
          <Image
            src="/voiceFusion.png"
            alt="Voice Fusion Mockup Designs"
            width={900}
            height={900}
            priority
            className="w-full h-full"
          />
        </div>
        <div className="basis-1/2 flex flex-col leading-7">
          <h2 className='font-bold text-xl'>
            Voice Fusion
          </h2>
          <p className="mt-2">
            A SaaS company that uses AI voices to allow companies and
            entrepreneurs create content efficiently while still maintaining
            quality.
          </p>
          <p className="mt-2">
            We designed and developed their website to be responsive on all
            devices while building out API calls for their natural sounding AI
            voices.
          </p>
          <p className="mt-2">
            Setting up a database where they can view all the users as well as a
            payment system that seamlessly accepts monthly recurring payments.
          </p>
          <button className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-white w-full sm:w-1/2 md:w-1/3 px-6 py-3 mt-8 rounded-lg font-bold tracking-widest text-xs sm:text-sm group hover:from-orange-600 hover:via-orange-400 hover:to-orange-300 transition-all">
            View Website
          </button>
        </div>
      </div>
      <div className="w-full sm:w-4/5 mx-auto flex flex-col-reverse sm:flex-row px-6 mb-20">
        <div className="basis-1/2 flex flex-col leading-7">
          <h2 className={`font-bold text-xl ${sans.className}`}>
            Competitive Edge Junk Removal & Hauling
          </h2>
          <p className="mt-2">
            A SaaS company that uses AI voices to allow companies and
            entrepreneurs create content efficiently while still maintaining
            quality.
          </p>
          <p className="mt-2">
            We designed and developed their website to be responsive on all
            devices while building out API calls for their natural sounding AI
            voices.
          </p>
          <p className="mt-2">
            Setting up a database where they can view all the users as well as a
            payment system that seamlessly accepts monthly recurring payments.
          </p>
          <button className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-white w-full sm:w-1/2 md:w-1/3 px-6 py-3 mt-8 rounded-lg font-bold tracking-widest text-sm group hover:from-orange-600 hover:via-orange-400 hover:to-orange-300 transition-all">
            View Website
          </button>
        </div>
        <div className="flex basis-1/2 w-full h-full">
          {" "}
          <Image
            src="/multi-device-junk-removal.png"
            alt="Voice Fusion Mockup Designs"
            width={900}
            height={900}
            priority
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-full sm:w-4/5 mx-auto flex flex-col sm:flex-row px-6">
        <div className="flex basis-1/2 w-full h-full">
          <Image
            src="/multi-device-waterstreet.png"
            alt="Voice Fusion Mockup Designs"
            width={900}
            height={900}
            priority
            className="w-full h-full"
          />
        </div>
        <div className="basis-1/2 flex flex-col leading-7">
          <h2 className={`font-bold text-xl ${sans.className}`}>
            WaterStreet Mortgage
          </h2>
          <p className="mt-2">
            A SaaS company that uses AI voices to allow companies and
            entrepreneurs create content efficiently while still maintaining
            quality.
          </p>
          <p className="mt-2">
            We designed and developed their website to be responsive on all
            devices while building out API calls for their natural sounding AI
            voices.
          </p>
          <p className="mt-2">
            Setting up a database where they can view all the users as well as a
            payment system that seamlessly accepts monthly recurring payments.
          </p>
          <button className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-white w-full sm:w-1/2 md:w-1/3 px-6 py-3 mt-8 rounded-lg font-bold tracking-widest text-sm group hover:from-orange-600 hover:via-orange-400 hover:to-orange-300 transition-all">
            View Website
          </button>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default RecentWork;
