import Image from 'next/image'
import coding2 from '@/public/coding2.jpg'

const WebsiteDevelopment = () => {
  return (
    <div className="w-full">
    <div className="bg-gray-50">
      <div className="relative bg-cover bg-center w-screen h-[50vh] flex flex-col justify-center items-center">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-t from-black to-transparent z-10" />
        <Image
          src={coding2}
          layout="fill"
          alt="website development image"
          objectFit="cover"
          objectPosition="center"
          className="absolute inset-0 z-1"
          priority
        />
        <h1 className="text-center text-white tracking-wide z-[20] font-extrabold text-4xl lg:text-5xl px-5">
          Website Development
        </h1>
        <p className="z-[20] font-semibold pt-4 text-xl text-orange-500">
          Creating websites that convert
        </p>
      </div>
      </div>
        <div className="px-8 relative z-10">
            <div className="max-w-7xl mx-auto flex sm:flex-row flex-col mt-20">
                <div className="basis-1/2">
                    <div className="h-1/2">
                        <Image
                        src={coding2}
                        alt="analytics"
                        width={1000}
                        height={1000}
                        className="sm:mt-6 shadow-2xl shadow-gray-500 rounded-lg border border-gray-300"
                        />
                       </div>
                       </div>
                          <div className="basis-1/2 text-left sm:px-16 z-10">
                            <h1 className="text-4xl font-bold text-gray-800">
                                Building Websites
                            </h1>
                            <p className="text-lg text-gray-600 mt-4">
                                We build websites that convert. We use the latest technology to build websites that are fast, secure, and easy to use. We build websites that are optimized for search engines and are mobile friendly.
                            </p>
                            <p className="text-lg text-gray-600 mt-4">
                                Most agencies and people use plug-in builders like Wix, SquareSpace & Wordpress to build websites. These builders are great for beginners but they are not optimized for search engines and are not mobile friendly most of the time. We build websites from scratch using HTML, CSS, JavaScript, and React. This allows us to build websites that are fast, secure, and easy to use.
                            </p>
                            <div className="mt-8">
                                <button className="font-semibold text-white bg-[#F68800] hover:bg-[#F68800]/60 p-2 rounded-md">
                                    Contact Us
                                </button>
                                </div>
                                </div>
                       </div>
        </div>
        </div>
  )
}

export default WebsiteDevelopment;