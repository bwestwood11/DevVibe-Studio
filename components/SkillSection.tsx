import Image from "next/image";
import styles from "./skills.module.css";
import { cn } from "@/lib/utils";

const SkillSection = () => {
  return (
    <div className="mx-auto bg-black w-full sm:h-20 h-40 items-center">
      <div
        className={cn(
          styles["animate-marquee"],
          "sm:grid sm:grid-cols-5 flex space-x-4 max-w-6xl mx-auto h-full items-center"
        )}
      >
        <div className="bg-white sm:w-3/4 w-1/2 sm:h-2/3 flex-none sm:flex justify-center items-center rounded-md">
          <div className="p-3">
            <Image
              src="/Group.png"
              alt="group"
              width={150}
              height={100}
              className="mx-auto items-center"
            />
          </div>
        </div>
        <div className="bg-white sm:w-3/4 w-1/2 sm:h-2/3 flex-none sm:flex justify-center items-center rounded-md">
          <div className="p-3">
            <Image
              src="/wordpress.png"
              alt="group"
              width={150}
              height={100}
              className="mx-auto"
            />
          </div>
        </div>
        <div className="bg-white sm:w-3/4 w-1/2 sm:h-2/3 flex-none sm:flex justify-center items-center rounded-md">
          <div className="p-3">
            <Image
              src="/react.png"
              alt="group"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
        </div>
        <div className="bg-white sm:w-3/4 w-1/2 sm:h-2/3 flex-none sm:flex justify-center items-center rounded-md">
          <div className="p-3">
            <Image
              src="/figma.png"
              alt="group"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
        </div>
        <div className="bg-white sm:w-3/4 w-1/2 sm:h-2/3 flex-none sm:flex justify-center items-center rounded-md">
          <div className="p-3">
            <Image
              src="/webflow.png"
              alt="group"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
