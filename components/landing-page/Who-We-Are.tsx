'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Montserrat } from 'next/font/google'
import { motion } from 'framer-motion'

const montserrat = Montserrat({ subsets: ["latin"] });

const WhoWeAre = () => {
  return (
    <div className='w-full bg-[#F3F4F6] lg:py-28 py-20'>
        <div className='max-w-7xl mx-auto flex flex-col px-4 sm:px-0 gap-6 sm:gap-0 md:flex-row'>
                  <motion.div
                  initial={{opacity: 0, x: -100}}
                  transition={{duration: 1}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true}}
                  className='basis-1/2 px-2'>
                     <Image
                     src='/Hero-Image-2.png'
                        alt='Hero Image'
                        width={600}
                        height={600}
                        />
                  </motion.div>
                  <motion.div
                    initial={{opacity: 0, x: 200}}
                    transition={{duration: 1}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                   className='basis-1/2 px-6'>
                      <p className='uppercase font-bold text-orange-500'>Who We Are</p>
                      <h2 className={cn(montserrat.className, 'font-extrabold text-3xl')}>Delivering Real Results for Real People.</h2>
                      <p className='mt-4 text-gray-600 tracking-wide leading-7'>
                        We are a team of passionate software engineers, designers, and product managers who work together to make the web a better place. We take pride in building meaningful products and services that create value for people and businesses alike.
                      </p>
                      <div className='flex flex-col gap-8 mt-6'>
                            <div className='flex flex-row gap-5 items-center'>
                               <Image 
                               src='/web-design.gif' 
                                alt='Website Design Animation'
                                width={150}
                                height={150}
                                />
                                <div>
                                  <h3 className='text-xl font-bold'>Website Design</h3>
                                  <p className='text-gray-600 tracking-wide leading-7'>Designing an optimized converting website is our bread and butter.</p>
                                </div>
                            </div>
                            <div className='flex flex-row gap-5 items-center'>
                            <Image 
                               src='/web-development.gif' 
                                alt='Website Design Animation'
                                width={150}
                                height={150}
                                />
                                 <div>
                                  <h3 className='text-xl font-bold'>Website Development</h3>
                                  <p className='text-gray-600 tracking-wide leading-7'>Developing websites with actual code. Not your drag n drop website builders like Wix or SquareSpace.</p>
                                </div>
                            </div>
                        </div>
                  </motion.div>
        </div>
    </div>
  )
}

export default WhoWeAre