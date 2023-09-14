import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
    {
      name: "Web Design",
      description:
        "Implement professional designs that are sure to impress your customers and prospects.",
    },
    {
      name: "Responsive Design",
      description:
        "Designs that are responsive and look good on all devices. This includes desktops, laptops, tablets, and mobile devices.",
    },
    {
      name: "Optimization",
      description:
        "We will optimize your website for conversions. So, adding the right call to actions, buttons, and other elements to your website.",
    },
    {
      name: "Color Schemes",
      description:
        "Implementing the right brand message with the correct color scheme is important. We will make sure your website has the right color scheme.",
    },
  ];

const WebsiteDesignPage = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="bg-gray-50">
        <div className="relative bg-cover w-full bg-center h-[50vh] flex flex-col justify-center items-center">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-t from-black to-transparent z-10" />
          <Image
            src='/webdesign3.jpg'
            layout="fill"
            alt="website development image"
            objectFit="cover"
            objectPosition="center"
            className="absolute inset-0 z-1"
            priority
          />
          <h1 className="text-center text-white tracking-wide z-[20] font-extrabold text-4xl lg:text-5xl px-5">
            Website Design
          </h1>
          <p className="z-[20] font-semibold pt-4 text-xl text-[#e86a1e]">
            UX/UI Designs that convert
          </p>
        </div>
      </div>
      <div className="px-8 relative z-10">
        <div className="max-w-7xl mx-auto bg-gray-50 flex sm:flex-row flex-col mt-20">
          <div className="basis-1/2">
            <div className="h-1/2">
              <Image
                src="/webdesign1.jpg"
                alt="analytics"
                width={1000}
                height={1000}
                className="sm:mt-6 shadow-2xl shadow-gray-500 rounded-lg border border-gray-300"
              />
            </div>
          </div>
          <div className="basis-1/2 mt-10 sm:mt-0 text-left sm:px-16 z-10">
            <h1 className="text-4xl font-bold text-gray-800">
              Designing Websites
            </h1>
            <p className="text-base leading-7 text-gray-600 mt-4">
              Designing a professional, converting website is a lot more than
                just making it look good. We design websites that are optimized
                for search engines and are mobile friendly. We design websites
                that are fast, secure, and easy to use.
            </p>
            <p className="text-base leading-7 text-gray-600 mt-4">
              Before we start actually coding your website, we will create a mockup of your website. This will allow you to see what your website will look like before we start coding it. This will also allow you to make any changes to the design before we start coding it. We will give your recommendations based on our experience and expertise.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <button className="font-semibold text-white bg-[#e86a1e] hover:bg-[#e86a1e]/60 p-2 rounded-md">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h2 className="text-base font-semibold leading-7 text-[#e86a1e]">
                Everything you need
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Services
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Check out the services related to website design that we
                offer.
              </p>
            </div>
            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold text-gray-900">
                    <CheckIcon
                      className="absolute left-0 top-1 h-5 w-5 text-[#e86a1e]"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-2">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      </div>
  )
}

export default WebsiteDesignPage;