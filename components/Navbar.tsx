"use client";

import Image from "next/image";
import Link from "next/link";
import { Source_Sans_3 } from "next/font/google";
import { cn } from "@/lib/utils";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState, useEffect } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { RiFacebookBoxFill } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"

const sans = Source_Sans_3({ subsets: ["latin"] });

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className= {shadow ? "w-full font-bold h-[90px] shadow-xl items-center z-[100] fixed top-0 bg-white": "w-full font-bold h-[90px] items-center"}
    >
      <nav className={cn(sans.className, "sm:flex hidden max-w-6xl justify-between h-full items-center mx-auto px-5")}>
        <Link href="/">
          <Image src="/marketinglogo.png" alt="logo" width={180} height={160} />
        </Link>
        <div>
          <ul className="flex flex-row gap-10 cursor-pointer">
            <Link href="/">
              <li className="hover:text-black/60">Home</li>
            </Link>
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
              <li className="hover:text-black/60">Services</li>
            </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-6 z-[100]">
        <DropdownMenuLabel>Services</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/website-development">
        <DropdownMenuItem
        >
          Website Development
        </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
        
        >
          Website Design
        </DropdownMenuItem>
        <DropdownMenuItem
        >
          Google SEO
        </DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>
            <Link href="/portfolio">
              <li className="hover:text-black/60">Portfolio</li>
            </Link>
            <Link href="/about">
              <li className="hover:text-black/60">About Us</li>
            </Link>
            <Link href="/how-it-works">
              <li className="hover:text-black/60">How It Works</li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-black/60">Contact Us</li>
            </Link>
            <Link href="/blog">
              <li className="hover:text-black/60">Blog</li>
            </Link>
          </ul>
        </div>
        <div>
          <Link href="/contact">
          <button className="font-semibold text-white bg-[#F68800] hover:bg-[#F68800]/60 p-2 rounded-md">
            Contact Us
          </button>
          </Link>
        </div>
      </nav>
      {/* Mobile Menu */}
      <nav className="w-full h-[90px] flex items-center sm:hidden justify-between px-5">
        <Link href="/">
        <Image src="/marketinglogo.png" alt="logo" width={160} height={160} />
        </Link>
        <GiHamburgerMenu
          onClick={() => setShowMenu(true)}
          className="text-3xl ml-auto z-10"
        />
        {showMenu && (
          <div className="absolute top-0 left-0 w-full h-screen z-20 bg-white backdrop-blur flex flex-col items-center justify-center">
            <GrClose
              onClick={() => setShowMenu(false)}
              className="absolute top-10 right-10 text-3xl text-black ml-auto transition-shadow"
            />
            <ul className="flex flex-col text-black text-center font-semibold gap-6 cursor-pointer">
              <Link href="/">
                <li onClick={() => setShowMenu(false)}>Home</li>
              </Link>
        
              <Link href="/services">
                <li onClick={() => setShowMenu(false)}>Services</li>
                </Link>    
              <Link href="/portfolio">
                <li onClick={() => setShowMenu(false)}>Portfolio</li>
              </Link>
              <Link href="/about">
                <li onClick={() => setShowMenu(false)}>About Us</li>
              </Link>
              <Link href="/contact">
                <li onClick={() => setShowMenu(false)}>Contact Us</li>
              </Link>
              <Link href="/blog">
                <li onClick={() => setShowMenu(false)}>Blog</li>
              </Link>
            </ul>
            <Link href="/contact">
              <button
                onClick={() => setShowMenu(false)}
                className="font-semibold text-white bg-[#F68800] p-2 mt-8 rounded-md"
              >
                Contact Us
              </button>
            </Link>
            <div className="flex flex-row gap-4 mt-8">
            <AiFillInstagram className="text-3xl mt-8 hover:text-black/70" />
            <RiFacebookBoxFill className="text-3xl mt-8 hover:text-black/70" />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
