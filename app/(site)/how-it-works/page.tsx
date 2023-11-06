import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from "@/components/work.module.css";
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Competitive Edge Digital",
  description:
    "Here's how we work. We will discuss your business and your goals. We will give you recommendations based on our experience and expertise.",
  alternates: {
    canonical: "https://www.competitiveedgedigital.com/how-it-works",
  },
};

const HowItWorksPage = () => {
  return (
    <div className="bg-[#F3F4F6] pb-10">
      <div className="relative bg-cover w-full bg-center h-[40vh] flex flex-col justify-center ">
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-t from-black to-transparent z-10" />
        <Image
          src="/bghow.png"
          layout="fill"
          alt="website development image"
          objectFit="cover"
          objectPosition="center"
          className="absolute z-1"
          priority
        />
        <div className="text-left z-10 md:px-96 px-8">
          <h1
            className={cn(
              styles.textshadow,
              "text-white tracking-wide z-[20] font-extrabold text-4xl lg:text-6xl"
            )}
          >
            Here's How We Work
          </h1>
          <p
            className={cn(
              styles.textshadow2,
              "z-[20] font-semibold pt-4 text-xl text-white"
            )}
          >
            Finding the right solution for your business
          </p>
        </div>
      </div>
      <div className="max-w-6xl hidden sm:flex sm:flex-row flex-col sm:gap-10 gap-6 items-center justify-center mx-auto pt-8">
        <Link href="#step-1">
          <button className={cn(styles.button, "rounded-full border-2 px-4 py-3 text-sm bg-gray-100  text-gray-600 hover:bg-gradient-to-l hover:from-orange-600 hover:via-orange-500 hover:to-orange-400 transition-all duration-300 ease-in-out hover:text-white")}>
            1. Free Consultation
          </button>
        </Link>
        <Link href='#step-2'>
        <button className={cn(styles.button, "rounded-full border-2 px-4 py-3 text-sm bg-gray-100  text-gray-600 hover:bg-gradient-to-l hover:from-orange-600 hover:via-orange-500 hover:to-orange-400 transition-all duration-300 ease-in-out hover:text-white")}>
            2. Discovery Call
          </button>
        </Link>
        <Link href='#step-3'> 
        <button className={cn(styles.button, "rounded-full border-2 px-4 py-3 text-sm bg-gray-100  text-gray-600 hover:bg-gradient-to-l hover:from-orange-600 hover:via-orange-500 hover:to-orange-400 transition-all duration-300 ease-in-out hover:text-white")}>
          3. Custom Plan
        </button>
        </Link>
      <Link href='#step-4'>
      <button className={cn(styles.button, "rounded-full border-2 px-4 py-3 text-sm bg-gray-100  text-gray-600 hover:bg-gradient-to-l hover:from-orange-600 hover:via-orange-500 hover:to-orange-400 transition-all duration-300 ease-in-out hover:text-white")}>
          4. Code Your Website
        </button>
      </Link>
       
      </div>
      <div className="flex sm:flex-row flex-col max-w-6xl tracking-widest mx-auto pt-20">
        <div className="basis-1/2 flex flex-col px-8 sm:px-4">
          <div id="step-1">
            <p className="text-[#e86a1e] font-normal">STEP 1</p>
            <h3 className="text-gray-900 text-3xl font-extrabold pt-2">
              Free Consultation
            </h3>
            <p className="text-gray-900 pt-3">
              We will discuss your business and your goals. We will give you
              recommendations based on our experience and expertise.
            </p>
            <p className="text-gray-900 pt-3">
              Our free consultation is at no cost, no obligation to you. We will
              give you a quote based on your needs. There is no pressure from us
              to buy anything. We are here to help you. If everything seems like
              a good fit to you then we'll move on to a discovery call.
            </p>
          </div>
        </div>
        <div className="basis-1/2 sm:text-center text-left px-8 sm:px-0 pt-10 flex flex-col items-center align-middle">
          <h3 className="font-bold pb-6">
            Here's how our free consultation works:
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <AiFillCaretRight className="text-[#e86a1e]" />
              <p>15 Minute Meeting via Zoom or Google Meets</p>
            </li>
            <li className="flex items-center gap-2">
              <AiFillCaretRight className="text-[#e86a1e]" />
              <p>Discuss your goals, budget, timeline & expectations.</p>
            </li>
            <li className="flex items-center gap-2">
              <AiFillCaretRight className="text-[#e86a1e]" />
              <p>Create an initial plan based on talking points.</p>
            </li>
            <li className="flex items-center gap-2">
              <AiFillCaretRight className="text-[#e86a1e]" />
              <p>Set-up a Discovery call if necessary.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col-reverse max-w-6xl items-center tracking-widest mx-auto pt-20">
        <div className="basis-1/2 flex flex-col px-8 sm:px-4 pt-10 sm:pt-0">
        <Image 
            src="/meeting.gif"
            width={500}
            height={500}
            alt="takeoff image"
            />
        </div>
        <div className="basis-1/2 text-left px-8 flex flex-col items-center align-middle">
          <div id="step-2">
            <p className="text-[#e86a1e] font-normal">STEP 2</p>
            <h3 className="text-gray-900 text-3xl font-extrabold pt-2">
              Discovery Call (Optional)
            </h3>
            <p className="text-gray-900 pt-3">
              If the the free consultation doesn't answer all of your questions
              or we don't have enough information to give you a quote, we will
              schedule a discovery call.
            </p>
            <p className="text-gray-900 pt-3">
              The discovery call is a 30-minute meeting where we will go more
              in-depth about the details of your website.
            </p>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col max-w-6xl tracking-widest mx-auto items-center align-middle">
        <div className="basis-1/2 flex flex-col px-8 sm:px-4">
          <div id="step-3">
            <p className="text-[#e86a1e] font-normal">STEP 3</p>
            <h3 className="text-gray-900 text-3xl font-extrabold pt-2">
              Customized Plan
            </h3>
            <p className="text-gray-900 pt-3">
              The Competitive Edge Digital team will meet and discuss your
              project. We will create a customized plan with a timeline and a quote.
            </p>
            <p className="text-gray-900 pt-3">
              We will send you the plan and quote for your approval. Once you
              approve the plan and quote, we will move on to the next step.
            </p>
          </div>
        </div>
        <div className="basis-1/2 text-left px-8 pt-10 flex flex-col items-center align-middle">
        <Image 
            src="/planning.gif"
            width={400}
            height={500}
            alt="plan image"
            />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col-reverse max-w-6xl tracking-widest mx-auto pt-20">
        <div className="basis-1/2 flex flex-col px-8 sm:px-4 pt-10 sm:pt-0">
        <Image 
            src="/takeoff.gif"
            width={400}
            height={500}
            alt="takeoff image"
            />
        </div>
        <div className="basis-1/2 text-left px-8 pt-10 flex flex-col items-center align-middle">
        <div id="step-4">
            <p className="text-[#e86a1e] font-normal">STEP 4</p>
            <h3 className="text-gray-900 text-3xl font-extrabold pt-2">
              Take Off & Launch
            </h3>
            <p className="text-gray-900 pt-3">
              We will start designing and developing your website. We will
              provide you with updates throughout the process.
            </p>
            <p className="text-gray-900 pt-3">
              Once we are done with your website, we will send you a link to
              review it. If you are happy with the website, we will launch it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
