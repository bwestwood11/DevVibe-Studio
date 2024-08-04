"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,

}: GradualSpacingProps) {
  return (
    <>
    <h3 className={cn("md:hidden", className,)}>{text}</h3>
    <div className=" hidden sm:flex">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h3
            key={i}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            variants={framerProps}
            viewport={{ once: true }}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("drop-shadow-sm ", className)}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h3>
        ))}
      </AnimatePresence>
    </div>
    </>
  );
}
