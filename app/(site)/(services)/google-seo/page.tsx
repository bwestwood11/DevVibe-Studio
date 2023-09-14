import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "On Page SEO",
    description:
      "We will create the right keywords and content for your website so you can rank on Google.",
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

const GoogleSEO = () => {
  return (
    <div className='w-full'>
    <div className="px-8 relative z-10">
    <div className="max-w-7xl mx-auto bg-gray-50 flex sm:flex-row flex-col mt-20">
      <div className="basis-1/2">
        <div className="h-1/2">
          <Image
            src="/googleseo.jpg"
            alt="analytics"
            width={1000}
            height={1000}
            className="sm:mt-6 shadow-2xl shadow-gray-500 rounded-lg border border-gray-300"
          />
        </div>
      </div>
      <div className="basis-1/2 mt-10 sm:mt-0 text-left sm:px-16 z-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Local Google SEO
        </h1>
        <p className="text-base leading-7 text-gray-600 mt-4">
          Being seen on Google is important. We will make sure your website is optimized for Google. We will make sure your website is optimized for local searches. We will make sure your website is optimized for the keywords that your customers are searching for. We will make sure your website is optimized for conversions.
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
            Check out the services related to Google SEO that we offer.
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

export default GoogleSEO;