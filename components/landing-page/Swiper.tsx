"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { BiSolidCube } from 'react-icons/bi';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Carousel() {
  return (
    <div className='w-full bg-[#F3F4F6] sm:py-20 py-10 px-4 sm:px-0'>
        <div className='flex text-center items-center justify-center sm:mb-5'>
        <p className='text-center text-sm sm:text-2xl text-gray-900 leading-7 mr-2'>Spin the</p> <BiSolidCube className='inline-block text-xl sm:text-4xl text-center text-[#e86a1e]' /> <p className='text-center text-sm sm:text-2xl text-gray-900 leading-7 ml-2'>to see some our work</p>
        </div>
     
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="max-w-2xl mx-auto w-3/4"
      >
        <SwiperSlide>
          <Image src='/junkremovalmockup.png' alt='website development' priority width={2000} height={4000} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src='/constructionmockup.png' alt='website development' priority width={2000} height={4000} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src='/roofingmockup.png' alt='img' priority width={2000} height={4000} />
        </SwiperSlide>
        <SwiperSlide>
        <Image src='/cleanermockup.png' alt='img' priority width={2000} height={4000} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

