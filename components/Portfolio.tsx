import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import styles from "./portfolio.module.css";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

const Portfolio = () => {
  return (
    <div className="w-full bg-[#F3F4F6]">
         <div className="h-[600px] max-w-6xl mx-auto relative w-full flex justify-center items-center align-middle">
      <h1
        className={cn(
          styles.text,
          "drop-shadow-2xl z-10 text-center text-white text-6xl sm:text-[90px] font-extrabold"
        )}
      >
        Our <span className="text-[#e86a1e]">Portfolio </span>
      </h1>
      <Image
        src="/promo.png"
        alt="dumpsters"
        width={2000}
        height={2000}
        className=" absolute top-0 left-0 w-full h-full object-cover z-0 hover:scale-105 ease-in-out transition-all duration-500"
      />
    </div>
    </div>
 
  );
};

export default Portfolio;
