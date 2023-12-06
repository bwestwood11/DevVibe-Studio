import Image from "next/image";
import React from "react";

const VideoTestimonial = () => {
  return (
    <div className="bg-[#F3F4F6] w-full h-[400px]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row h-full 2xl:ml-[450px] xl:ml-[270px] lg:ml-[80px] px-10 lg:px-0 justify-center">
        <div className=" flex flex-col bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 rounded-lg text-left p-8 shadow-lg">
          <div className="max-w-md pr-8">
            <div className="flex flex-row items-center">
              <div className="w-1 h-14 bg-orange-500 mr-3"></div>
              <h3 className="text-2xl text-white font-extrabold">
                Brian's <br /> Success Story
              </h3>
            </div>

            <p className="text-white mt-5">
              How a local junk removal company was able to create a professional
              appearance online while being able to book appointments online in
              a seamless way.
            </p>
            <a href="https://calendly.com/competitive_edge_digital">
              <button className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-white px-6 py-3 rounded-lg mt-5 font-bold tracking-widest z-10 text-sm group hover:from-orange-600 hover:via-orange-400 hover:to-orange-300 transition-all">
                Book A Call
              </button>
            </a>
            <Image
              src="/arrow.png"
              alt="arrow"
              width={120}
              height={120}
              className="sm:inline-block hidden ml-20"
            />
          </div>
          <iframe
          className="justify-center block sm:hidden w-full 2xl:ml-[-390px] xl:ml-[-300px] lg:ml-[-100px] md:ml-[-50px] mt-[50px] h-3/4"
          title="vimeo-player"
          src="https://player.vimeo.com/video/891291185"
          width="640"
          height="360"
        ></iframe>
        </div>
        <iframe
          className="justify-center hidden sm:block w-full 2xl:ml-[-390px] xl:ml-[-300px] lg:ml-[-100px] md:ml-[-50px] mt-[50px] h-3/4"
          title="vimeo-player"
          src="https://player.vimeo.com/video/891291185"
          width="640"
          height="360"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoTestimonial;
