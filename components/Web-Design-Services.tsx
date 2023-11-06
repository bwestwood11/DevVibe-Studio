"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { SiAdobeindesign } from "react-icons/si";
import { AiOutlineBlock } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const programs = [
  {
    name: "Visual Design",
    icon: FaEye,
    description:
      "This includes the overall aesthetics of the website, such as color schemes, typography, layout, and graphics. Visual design is essential for creating a visually pleasing and engaging user experience.",
  },
  {
    name: "Layout Design",
    icon: SiAdobeindesign,
    description:
      "Layout design involves organizing the content on web pages in a structured and user-friendly manner. It includes the placement of text, images, navigation menus, and other elements to ensure easy navigation and readability.",
  },
  {
    name: "Navigation",
    icon: AiOutlineBlock,
    description:
      "Navigation design focuses on creating a clear and intuitive menu structure that helps users easily find their way around the website. This includes main navigation menus, submenus, and breadcrumbs.",
  },
  {
    name: "Responsive Design",
    icon: AiOutlineFileDone,
    description:
      "With the prevalence of various screen sizes and devices, responsive design ensures that websites adapt and display properly on different platforms, such as desktops, tablets, and mobile devices.",
  },
  {
    name: "User Experience",
    icon: AiOutlineGlobal,
    description:
      "UX design aims to enhance the overall experience of users by optimizing the website's usability, accessibility, and interactivity. It involves user research, wire framing, and prototyping",
  },
  {
    name: "Branding & Identity",
    icon: AiOutlineFundProjectionScreen,
    description:
      "Incorporating the brand's identity, including logos, colors, and visual elements, is essential to maintain a consistent brand image across the website.",
  },
];

interface Program {
  name: string;
  icon: React.ComponentType<any>;
  description: string;
}

const WebDesignServices = () => {
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

  const handleProgramClick = (program: Program) => {
    console.log(program.name);
    setSelectedProgram(program);
  };

  const programContent = selectedProgram
    ? programs.find((program) => program.name === selectedProgram.name)
    : null;

  const formattedProgramName = programContent
    ? programContent.name.toLowerCase().replace(/ /g, "-")
    : "";

  const imageName = `${formattedProgramName}.png`;

  return (
    <div className="w-full bg-white h-full flex pt-32 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex max-w-md mb-4 mx-auto text-center justify-center gap-3 items-center">
          <p className=" font-bold uppercase text-[#f1592a]">
            Our Core Services
          </p>
          <div className="border-b lg:h-1/4 h-full border-2 border-[#f1592a] w-1/6" />
        </div>
        <h2 className="font-extrabold text-center text-4xl">
          Web Design Services
        </h2>
        <p className="text-center leading-8 text-gray-600 mt-5 max-w-lg mx-auto">
          Listed below are the services we offer when it comes to web design.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-6xl mx-auto mt-8">
          {programs.map((program, index) => (
            <div
              key={program.name}
              className={`flex flex-col cursor-pointer items-center justify-center bg-gray-100 lg:p-4 xl:p-5 p-3 rounded-lg ${
                selectedProgram === program
                  ? "bg-gradient-to-br from-[#f1592a] via-[#ff933a] to-[#e7b586] text-white"
                  : ""
              }`}
              onClick={() => handleProgramClick(program)}
            >
              <program.icon
                className={`h-12 w-12 text-black ${
                  selectedProgram === program ? "text-white" : "text-black"
                }`}
              />
              <p
                className={`text-center mt-3 font-bold ${
                  selectedProgram === program ? "text-white" : "text-black"
                }`}
              >
                {program.name}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white shadow-xl max-w-6xl gap-5 mx-auto flex flex-col sm:flex-row mt-6 p-4 sm:p-6">
          <div className="basis-1/2 w-full">
            {programContent && (
              <Image
                src={`/${imageName}`}
                alt={programContent.name}
                width={800}
                height={800}
                priority
                className="rounded-lg"
              />
            )}
          </div>
          <div className="basis-1/2">
            {programContent && (
              <h2 className="font-extrabold text-xl">{programContent.name}</h2>
            )}
            {programContent && (
              <p className="text-gray-600 mt-3 leading-6">
                {programContent.description}
              </p>
            )}
            <Link href="/contact">
              <div className="flex gap-2 items-center mt-8 text-green-500 font-bold">
                <span>
                  <BiRightArrowAlt size="25" />
                </span>
                Learn More
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignServices;
