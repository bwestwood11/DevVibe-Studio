"use client";
import ShareModal from "@/components/blog/share-modal";
import { ModeToggle } from "@/components/blog/toggle-button";
import { Button, buttonVariants } from "@/components/ui/button";
import { AbsoluteUrl } from "@/lib/utils";
import {
  animate,
  inView,
  useAnimate,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Bot } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { FaYoutube } from "react-icons/fa";

type Props = {
  absoluteShareLink: string;
  title: string;
  youtubeLink: string | undefined;
};

const Toolbar = ({ absoluteShareLink, title, youtubeLink }: Props) => {
  const { scrollY } = useScroll();
  const [scope, animate] = useAnimate();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (scrollY.get() >= 300) {
      animate(scope.current, { bottom: 20 });
    } else {
      animate(scope.current, { bottom: -50 });
    }
  });

  return (
    <div
      ref={scope}
      id="toolbar"
      className="sticky  -bottom-10 flex justify-center items-center "
    >
      <div className="bg-white shadow-xl px-4 py-1 rounded-full flex gap-2 ">
        <ShareModal absoluteLink={absoluteShareLink} title={title} />
        <div
          data-orientation="vertical"
          aria-orientation="vertical"
          role="separator"
          className="my-auto w-px bg-slate-200 dark:bg-slate-700 mx-2 h-5"
        ></div>
        <Link
          href={"https://www.chatbuild.io/demo"}
          aria-label="Visit ChatBuild"
          target="_blank"
          className={buttonVariants({
            variant: "link",
            className: "rounded-full",
          })}
        >
          <Bot className="text-foreground/50 hover:text-foreground"/>
        </Link>

        {youtubeLink && (
          <>
            <div
              data-orientation="vertical"
              aria-orientation="vertical"
              role="separator"
              className="my-auto w-px bg-slate-200 dark:bg-slate-700 mx-2 h-5"
            ></div>
            <Link
              href={youtubeLink}
              target="_blank"
              aria-label="Watch on YouTube"
              className={buttonVariants({
                variant: "link",
                className: "rounded-full",
              })}
            >
                <FaYoutube className="text-foreground/50 hover:text-foreground" size={19}/>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
