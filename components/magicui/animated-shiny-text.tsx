import { CSSProperties, FC, ReactNode } from "react";

import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <p
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",

        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shimmer gradient
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",

        className,
      )}
    >
      {children}
    </p>
  );
};

export default AnimatedShinyText;


export const ShimmerCard = ({text,shinyClassName,wrapperClassName}:{text:string, wrapperClassName?:string, shinyClassName?:string}) => {
  return (
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          wrapperClassName
        )}
      >
        <AnimatedShinyText className={cn("inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400",shinyClassName )}>
          <span>✨ {text}</span>
        </AnimatedShinyText>
      </div>
  );
}
