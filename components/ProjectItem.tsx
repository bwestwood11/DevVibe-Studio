import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

interface Props {
    title: string;
    backgroundImg: string;
    projectUrl: string;
    number: string;
    technology: string;
}

const ProjectItem = ({title, backgroundImg, projectUrl, number, technology}: Props) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#f1592a] to-[#f19173]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} width={900} height={900} alt='/' />
    
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h2 className='text-white font-bold text-4xl sm:text-6xl absolute top-[0x] sm:top-[-80px] left-[-60px]'>{number}</h2>
      <h3 className='text-2xl text-white font-bold tracking-wider text-center mt-2 sm:mt-0'>{title}</h3>
       <p className='pb-4 pt-2 text-white text-center'>{technology}</p>
       <Link href={projectUrl}>
       <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold mb-2 text-lg cursor-pointer'>More Info</p> 
       </Link>
    </div>
  </div>
  )
}

export default ProjectItem;