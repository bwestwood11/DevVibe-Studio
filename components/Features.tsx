"use client";

import { FaHandHoldingHeart } from "react-icons/fa";
import { BsGiftFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { RiVipCrownFill, RiTrophyFill, RiWaterFlashFill } from "react-icons/ri";
import { motion } from "framer-motion";

const features = [
  {
    name: "Web Design & Development",
    description:
      "From responsive design to e-commerce development, we offer comprehensive web design and development services tailored to your specific business needs.",
    icon: FaHandHoldingHeart,
  },
  {
    name: "Content Creation",
    description:
      "Enhance your brands identity and make a lasting impression on your audience with our top-notch content creation team. We do offer ongoing video and photo editing services as well.",
    icon: BsGiftFill,
  },
  {
    name: "Website Management",
    description:
      "Always have your website up-to-date with the latest information and content with our website management services.",
    icon: MdMarkEmailRead,
  },
  {
    name: "Google SEO",
    description:
      "Watch your brand soar to new heights with our proven SEO strategies so your clients can actually find you.",
    icon: RiVipCrownFill,
  },
  {
    name: "UI/UX",
    description:
      "Play a vital role in creating a successful digital product. we can help you bring your vision to life with thoughtful and intuitive design.",
    icon: RiTrophyFill,
  },
  {
    name: "Consultation",
    description:
      "As a consultant for agency services, I help businesses navigate the complexities of the digital world.",
    icon: RiWaterFlashFill,
  },
];

export default function Features() {
  return (
    <div className="bg-[#F3F4F6] py-16">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-semibold text-orange-500">Top Services</h2>
        <p className="sm:mt-5 mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Our Special <span className="text-orange-500">Features</span>
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                initial={{ opacity: 0, translateX: -50, translateY: -50 }}
                whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                viewport={{once: true}}
                transition={{ duration: 0.3, delay: i * 0.2 }}
                key={feature.name}
                className="pt-6"
              >
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-xl bg-orange-500 p-3 shadow-lg">
                        <feature.icon
                          className="h-8 w-8 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
