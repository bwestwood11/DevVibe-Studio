"use client";

import Image from "next/image";
import { Source_Sans_3 } from "next/font/google";
import { ShimmerCard } from "../magicui/animated-shiny-text";
import Link from "next/link";
import { montserrat } from "@/app/fonts";
import { motion } from "framer-motion";
import GradualSpacing from "../magicui/gradual-spacing";

const sans = Source_Sans_3({ subsets: ["latin"] });

const RecentWork = () => {
  return (
    <div id="recent-work"
      className={`w-full bg-[#F3F4F6] pt-20 pb-40 sm:pb-20  ${sans.className}`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-0">
        <div className="text-center mb-16">
          <h2 className={`font-extrabold text-4xl ${montserrat.className}`}>
            Recent Work
          </h2>
          <p className="max-w-md mx-auto pt-2">
            Check out some of our recent projects and see how we can help you
            with your next project.
          </p>
        </div>

        <div className="w-full mx-auto flex max-md:gap-4 flex-col lg:flex-row md:px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex basis-1/2 justify-center w-full h-full"
          >
            <Image
              src="/chatbuild-device-mockup-img.png"
              alt="Chatbuild.io Mockup Designs Image"
              width={400}
              height={300}
              priority
              className="w-full h-full self-end max-w-[400px]"
            />
          </motion.div>
          <div className="basis-1/2 flex flex-col leading-7 md:md:px-10">
            <ShimmerCard
              text="AI Saas Company"
              wrapperClassName="w-fit mb-2"
              shinyClassName="text-xs"
            />
            <GradualSpacing
              className="font-bold text-3xl text-primary text-left "
              text="Chatbuild.io"
            />
            <p className="mt-2 text-sm text-foreground/60">
              Integration of Chatbots made easy
            </p>
            <ul className="mt-2 text-foreground/80">
              <li className="list-disc list-inside">
                <span className="font-bold">
                  Seamless Website Integration:{" "}
                </span>
                Easily integrate chatbots into your website for enhanced user
                interaction and streamlined customer support.
              </li>
              <li className="list-disc list-inside">
                <span className="font-bold">Real-Time Live Chat Feature: </span>
                Engage with visitors instantly through a robust live chat
                function, improving customer service and response times.
              </li>
              <li className="list-disc list-inside">
                <span className="font-bold">User-Friendly Dashboard: </span>
                Manage and monitor chatbot performance and live chat
                interactions from an intuitive, user-friendly interface.
              </li>
            </ul>

            <Link
              href="https://www.chatbuild.io"
              className="bg-gradient-to-r text-center from-orange-300 via-orange-400 to-orange-600 text-white w-full sm:w-1/2 md:w-1/3 px-6 py-3 mt-8 rounded-lg font-bold tracking-widest text-xs sm:text-sm group hover:from-orange-600 hover:via-orange-400 hover:to-orange-300 transition-all"
            >
              View Website
            </Link>
          </div>
        </div>
        <div className="w-full mx-auto flex max-md:gap-4 flex-col-reverse lg:flex-row px-6 pb-28">
          <div className="basis-1/2  flex flex-col leading-7 md:px-10">
            <ShimmerCard
              text="Learning Platform"
              wrapperClassName="w-fit sm:mb-2 my-4"
              shinyClassName="text-xs"
            />
            <GradualSpacing
              className="font-bold text-3xl text-primary text-left "
              text="StudyGen AI"
            />
            <p className="mt-2 text-sm text-foreground/60">
              Improve your learning experience with AI
            </p>
            <ul className="mt-2 text-foreground/80">
              <li className="list-disc list-inside">
                <span className="font-bold">Quiz Generator: </span>
                Easily integrate chatbots into your website for enhanced user
                interaction and streamlined customer support.
              </li>
              <li className="list-disc list-inside">
                <span className="font-bold">File Summarizer: </span>
                Engage with visitors instantly through a robust live chat
                function, improving customer service and response times.
              </li>
              <li className="list-disc list-inside">
                <span className="font-bold">Chat with Your File: </span>
                Manage and monitor chatbot performance and live chat
                interactions from an intuitive, user-friendly interface.
              </li>
            </ul>

            <Link
              href="https://studygen-ai.vercel.app"
              className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-white text-center w-full sm:w-1/2 md:w-1/3 px-6 py-3 mt-8 rounded-lg font-bold tracking-widest text-xs sm:text-sm group hover:from-orange-600 hover:via-orange-400 hover:to-orange-300 transition-all"
            >
              View Website
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex basis-1/2  justify-center w-full h-full"
          >
            {" "}
            <Image
              src="/studygen-mockup-img.png"
              alt="StudyGen AI Mockup Designs Image"
              width={400}
              height={300}
              priority
              className="w-full h-full self-end max-w-[400px]"
            />
          </motion.div>
        </div>
        <div className="w-full mx-auto flex max-md:gap-4 flex-col lg:flex-row px-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex basis-1/2 justify-center w-full h-full"
          >
            <Image
              src="/junk-removal-mockup-img.png"
              alt="Junk removal case study image"
              width={900}
              height={900}
              priority
              className="w-full h-full self-end max-w-[400px]"
            />
          </motion.div>
          <div className="basis-1/2 flex flex-col leading-7 md:px-10">
            <ShimmerCard
              text="Local Small Business"
              wrapperClassName="w-fit mb-2"
              shinyClassName="text-xs"
            />
            <GradualSpacing
              className="font-bold md:text-3xl text-2xl text-primary text-left"
              text="Competitive Edge Junk Removal"
            />
            <p className="mt-2 text-sm text-foreground/60">
              Service based business located in Tampa, FL.
            </p>
            <ul className="mt-2 text-foreground/80">
              <li className="list-disc list-inside">
                <span className="font-bold">Quiz Generator: </span>
                Easily integrate chatbots into your website for enhanced user
                interaction and streamlined customer support.
              </li>
              <li className="list-disc list-inside">
                <span className="font-bold">File Summarizer: </span>
                Engage with visitors instantly through a robust live chat
                function, improving customer service and response times.
              </li>
              <li className="list-disc list-inside">
                <span className="font-bold">Chat with Your File: </span>
                Manage and monitor chatbot performance and live chat
                interactions from an intuitive, user-friendly interface.
              </li>
            </ul>

            <Link
              href="https://www.competitiveedgedumpsters.com"
              className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-white text-center w-full sm:w-1/2 md:w-1/3 px-6 py-3 mt-8 rounded-lg font-bold tracking-widest text-xs sm:text-sm group hover:from-orange-600 hover:via-orange-400 hover:to-orange-300 transition-all"
            >
              View Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
