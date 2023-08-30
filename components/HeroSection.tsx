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
import Video from "./Video";

const sans = Source_Sans_3({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const HeroSection = () => {
  return (
    <div className="max-w-6xl bg-[##F3F4F6] relative mx-auto h-screen sm:h-[660px] sm:flex sm:flex-row flex-col sm:pt-[88px] pt-[60px] px-5">
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
        className={cn(montserrat.className, "basis-1/2 flex flex-col gap-8")}
      >
        <div className="flex">
          <h1 className="font-extrabold leading-tight text-5xl tracking-wide text-[#F68800]">
            An Agency That Specializes in Web Development
          </h1>
        </div>
        <p className={cn(sans.className, "text-[#041620] text-xl")}>
          Boost your online presence with our expert web development agency. We
          specialize in creating stunning websites that drive traffic and
          increase conversions.
        </p>

        {/* Button only appears on mobile version */}
        <button className="flex items-center gap-2 sm:hidden bg-black  text-white text-lg uppercase font-bold p-3 w-1/2 rounded-lg">
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
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="orange" className="w-1/3">
                <MdOutlineSlowMotionVideo size="20" className="mr-2" /> Watch
                Video
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center font-bold">
                  Who We Are
                </DialogTitle>
                <DialogDescription className="text-center">
                  We are a team of web developers and designers that specialize
                  in creating stunning websites that drive traffic and increase
                  conversions.
                </DialogDescription>
              </DialogHeader>
              <div className="mx-auto justify-center">
                <iframe
                  src="https://player.vimeo.com/video/859534213?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  width="600"
                  height="400"
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="LaborDaySale Video"
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>

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
          layout="responsive"
          objectFit="contain"
          className="absolute bottom-0 left-0 z-[10]"
        />
        {/* Backdrop Blur on Desktop Version Only */}
        <div className="bg-black/60 backdrop-blur w-3/4 h-1/3 mx-auto p-6 rounded-lg grid grid-cols-2 gap-5">
          <div
            className={cn(sans.className, "text-white items-center flex gap-3")}
          >
            <h4 className="text-5xl font-bold">50+ </h4>
            <p className="text-md">
              Projects <br /> Done
            </p>
          </div>
          <div
            className={cn(sans.className, "text-white items-center flex gap-3")}
          >
            <h4 className="text-5xl font-bold">40+ </h4>
            <p className="text-md">
              Happy <br /> Clients
            </p>
          </div>
          <div
            className={cn(sans.className, "text-white items-center flex gap-3")}
          >
            <h4 className="text-5xl font-bold">10+ </h4>
            <p className="text-md">
              Creative <br /> Peoples
            </p>
          </div>
          <div
            className={cn(sans.className, "text-white items-center flex gap-3")}
          >
            <h4 className="text-5xl font-bold">10+ </h4>
            <p className="text-md">
              Years <br /> Experience
            </p>
          </div>
        </div>
        <button className="bg-black hover:bg-black/60 z-[100] cursor-pointer mt-16 mx-16 text-white text-2xl uppercase font-bold p-3 w-1/2 rounded-lg">
          Explore More
          <BsArrowDownRight className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
