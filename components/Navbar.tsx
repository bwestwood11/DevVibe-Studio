"use client";

import Image from "next/image";
import Link from "next/link";
import { Source_Sans_3 } from "next/font/google";
import { cn } from "@/lib/utils";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState, useEffect } from "react";

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
            <Link href="/services">
              <li className="hover:text-black/60">Our Services</li>
            </Link>
            <Link href="/portfolio">
              <li className="hover:text-black/60">Portfolio</li>
            </Link>
            <Link href="/about">
              <li className="hover:text-black/60">About Us</li>
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
          <button className="font-semibold text-white bg-[#F68800] hover:bg-[#F68800]/60 p-2 rounded-md">
            Contact Us
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <nav className="w-full h-[90px] flex items-center sm:hidden justify-between px-5">
        <Image src="/marketinglogo.png" alt="logo" width={160} height={160} />
        <GiHamburgerMenu
          onClick={() => setShowMenu(true)}
          className="text-3xl ml-auto"
        />
        {showMenu && (
          <div className="absolute z-10 top-0 left-0 w-full h-screen bg-black/60 backdrop-blur flex flex-col items-center justify-center">
            <GrClose
              onClick={() => setShowMenu(false)}
              className="absolute top-10 right-10 text-3xl ml-auto transition-shadow"
            />
            <ul className="flex flex-col text-white font-semibold gap-6 cursor-pointer">
              <Link href="/">
                <li onClick={() => setShowMenu(false)}>Home</li>
              </Link>
              <Link href="/services">
                <li onClick={() => setShowMenu(false)}>Our Services</li>
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
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
