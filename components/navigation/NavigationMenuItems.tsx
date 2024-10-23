"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AiFillFileText, AiFillYoutube, AiOutlineDiff } from "react-icons/ai";
import { IconType } from "react-icons/lib";
import { MdKeyboardVoice } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { RiRobotFill } from "react-icons/ri";

const caseStudies: {
  title: string;
  href: string;
  icon: IconType;
  description: string;
}[] = [
  {
    title: "ChatBuild.io",
    href: "/portfolio/appliance-plug-youtube-channel",
    icon: AiFillYoutube,
    description:
      "Appliance retailer that used our help to utilize YouTube to be seen by millions of people organically.",
  },
  {
    title: "Competitive Edge Junk Removal & Hauling",
    href: "/portfolio/competitive-edge-junk-removal",
    icon: AiOutlineDiff,
    description:
      "Junk removal company that used our help to rank on Google and get a website that converts.",
  },
  {
    title: "Waterstreet Mortgage",
    href: "/portfolio/waterstreet-mortgage",
    icon: AiOutlineDiff,
    description:
      "A mortgage broker that needed a website that converts and ranks on Google.",
  },
];

export function NavigationMenuItems() {
  return (
    <NavigationMenu className="z-[100]">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>{" "}
        <NavigationMenuItem className="hidden lg:block">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Content Creation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Work</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/90 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      DevVibe Studio
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed websites that convert and rank on
                      Google.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <ListItem href="/#recent-work">
                  <div className="flex space-x-2 items-center mb-2">
                    <RiRobotFill className="w-6 h-6 text-white bg-green-500 p-1 rounded-lg" />
                    <h3 className="font-semibold text-foreground">
                      ChatBuild.io
                    </h3>
                  </div>
                  <p className="text-foreground/70 text-xs">
                    An AI SaaS Company that used our help to build out it's
                    software functionality and design.
                  </p>
                </ListItem>
              </li>

              <li>
                <ListItem href="/#recent-work">
                  <div className="flex space-x-2 items-center mb-2">
                    <MdKeyboardVoice className="w-6 h-6 text-white bg-blue-500 p-1 rounded-lg" />
                    <h3 className="font-semibold text-black">StudyGen AI</h3>
                  </div>
                  <p className="text-foreground/70 text-xs">
                    An AI Learning Platform that used our help to build out it's
                    software functionality and design.
                  </p>
                </ListItem>
              </li>
              <li>
                <ListItem href="/#recent-work">
                  <div className="flex space-x-2 items-center mb-2">
                    <FaVideo className="w-6 h-6 text-white bg-orange-500 p-1 rounded-lg" />
                    <h3 className="font-semibold text-black">
                      Competitive Edge Junk Removal
                    </h3>
                  </div>
                  <p className="text-foreground/70 text-xs">
                    Local small business that used our help to create a high
                    converting website.
                  </p>
                </ListItem>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
