import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from '@/components/work.module.css'
import Link from "next/link";
import { AiFillCaretRight } from "react-icons/ai";

const HowItWorksPage = () => {
  return (
    <div className="bg-gray-50">     
        <div className="relative bg-cover w-full bg-center h-[40vh] flex flex-col justify-center ">
          <div className="absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-t from-black to-transparent z-10" />
          <Image
            src='/bghow.png'
            layout="fill"
            alt="website development image"
            objectFit="cover"
            objectPosition="center"
            className="absolute z-1"
            priority
          />
          <div className="text-left z-10 md:px-96 px-8">
               <h1 className={cn(styles.textshadow, "text-white tracking-wide z-[20] font-extrabold text-4xl lg:text-6xl")}>
            Here's How We Work
          </h1>
          <p className={cn(styles.textshadow2, "z-[20] font-semibold pt-4 text-xl text-white")}>
            Finding the right solution for your business
          </p>
          </div>
        </div>
        <div className="max-w-6xl hidden sm:flex sm:flex-row flex-col sm:gap-10 gap-6 items-center justify-center mx-auto pt-8">
            <Link href='#step-1'>
          <button className="rounded-full border-2 px-4 py-3 text-sm bg-gray-100  text-gray-600 hover:bg-gradient-to-l hover:from-orange-600 hover:via-orange-500 hover:to-orange-400 transition-all duration-300 ease-in-out hover:text-white">
             1. Free Consultation
          </button>
          </Link>
          <button className="rounded-full border-2 px-4 py-3 text-sm bg-gray-100  text-gray-600 hover:bg-gradient-to-l hover:from-orange-600 hover:via-orange-500 hover:to-orange-400 transition-all duration-300 ease-in-out hover:text-white">
             2. Discovery Call
          </button>
          <button className="rounded-full border-2 px-4 py-3 text-sm bg-gray-100  text-gray-600 hover:bg-gradient-to-l hover:from-orange-600 hover:via-orange-500 hover:to-orange-400 transition-all duration-300 ease-in-out hover:text-white">
             3. UI/UX Design Approval
          </button>
          <button className="rounded-full border-2 px-4 py-3 text-sm bg-gray-100  text-gray-600 hover:bg-gradient-to-l hover:from-orange-600 hover:via-orange-500 hover:to-orange-400 transition-all duration-300 ease-in-out hover:text-white">
             4. Code Your Website
          </button>
          </div>
          <div className="flex flex-row max-w-6xl tracking-widest mx-auto pt-20">
            <div className="basis-1/2 flex flex-col px-8 sm:px-4">
              <div id="step-1">
                   <p className="text-[#e86a1e] font-normal">
              STEP 1
            </p>
            <h3 className="text-gray-900 text-3xl font-extrabold pt-2">
              Free Consultation
            </h3>
            <p className="text-gray-900 pt-3">
              We will discuss your business and your goals. We will give you recommendations based on our experience and expertise.
            </p> 
            <p className="text-gray-900 pt-3">
             Our free consultation is at no cost, no obligation to you. We will give you a quote based on your needs. There is no pressure from us to buy anything. We are here to help you. If everything seems like a good fit to you then we'll move on to a discovery call.
            </p> 
              </div>
        
            </div>
            <div className="basis-1/2 text-center flex flex-col items-center align-middle">
                 <h3 className="font-bold pb-6">Here's how our free consultation works:</h3>
               <ul className="flex flex-col gap-4">
                   <li className="flex items-center gap-2">
                    <AiFillCaretRight className='text-[#e86a1e]' />
                    <p>15 Minute Meeting via Zoom or Google Meets</p>
                   </li>
                   <li className="flex items-center gap-2">
                    <AiFillCaretRight className='text-[#e86a1e]' />
                    <p>15 Minute Meeting via Zoom or Google Meets</p>
                   </li>
                   <li className="flex items-center gap-2">
                    <AiFillCaretRight className='text-[#e86a1e]' />
                    <p>15 Minute Meeting via Zoom or Google Meets</p>
                   </li>
                   <li className="flex items-center gap-2">
                    <AiFillCaretRight className='text-[#e86a1e]' />
                    <p>15 Minute Meeting via Zoom or Google Meets</p>
                   </li>
                </ul>
            </div>
          </div>
    </div>
  )
}

export default HowItWorksPage;