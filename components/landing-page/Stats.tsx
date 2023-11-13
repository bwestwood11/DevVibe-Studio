"use client";

import { motion } from "framer-motion";

const stats = [
  { id: 1, name: "Combined years of experience", value: "15+" },
  { id: 2, name: "Satisfaction", value: "100%" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
  { id: 4, name: "Potential sales from websites we created", value: "$20M" },
];

export default function Stats() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
          aria-hidden="true"
        >
          <div
            className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 className="text-base font-semibold leading-8 text-indigo-400">
            Our track record
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by hundreds&nbsp;worldwide
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Creating websites that are mobile responsive, fast, and optimized
            for search engines is our specialty. We've helped hundreds of
            businesses and creators build their online presence and grow their
            audience.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
            
            
             
              key={stat.id}
              className="flex flex-col gap-y-3 border-l border-white/10 pl-6"
            >
              <motion.dt
               initial={{ opacity: 0, translateX: 150, translateY: -50 }}
               whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
               viewport={{once: true}}
               transition={{ duration: 0.3, delay: i * 0.2 }}
              className="text-sm leading-6">{stat.name}</motion.dt>
              <motion.dd
             initial={{ opacity: 0, translateX: 150, translateY: -50 }}
             whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
             viewport={{once: true}}
             transition={{ duration: 0.3, delay: i * 0.2 }}
              className="order-first text-3xl font-semibold tracking-tight">
                {stat.value}
              </motion.dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
