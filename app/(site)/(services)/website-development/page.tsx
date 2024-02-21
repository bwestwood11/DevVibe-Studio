import Image from "next/image";
import coding2 from "@/public/coding2.jpg";
import { CheckIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development | DevVibe Studio",
  description: 'Creating the best websites that are optimized for search engines and are mobile friendly.',
  alternates: {
    canonical: 'https://www.devvibestudio.com/website-development',
  }
}

const features = [
  {
    name: "Web Development",
    description:
      "Have the experts create a Google SEO friendly website for your business that is sure to impress.",
  },
  {
    name: "Database Setup",
    description:
      "Be able to track prospects, customers and other information inside of a SQL or no SQL database.",
  },
  {
    name: "Coding",
    description:
      "We are not just a marketing agency. Coding is our passion and just like you see in the movies that show complex code, that is what we do.",
  },
  {
    name: "Payment Integration",
    description:
      "We can integrate payment systems into your website so you can accept payments online. This will be through Stripe which is the most secure payment system online.",
  },
  {
    name: "User Sign-up Applications",
    description:
      "If your website requires users to create an account. We can create a user sign-up application that will allow users to create an account and login to your website.",
  },
  {
    name: "Website Maintenance",
    description:
      "Maintaining a website can be a hassle. We can maintain your website for you so you can focus on your business.",
  },
];

const icons = [
  {
    name: "React",
    src: "/react.png",
  },
  {
    name: "Wordpress",
    src: "/wordpress.png",
  },
  {
    name: "Next.js",
    src: "/nextjs.png",
  },
  {
    name: "Shopify",
    src: "/shopify.png",
  },
  {
    name: "Mongo",
    src: "/mongo.png",
  },
]

const WebsiteDevelopment = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="bg-gray-50">
        <div className="relative bg-cover bg-center w-full h-[50vh] flex flex-col justify-center items-center">
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
          <p className="z-[20] font-semibold pt-4 text-xl text-[#e86a1e]">
            Creating websites that convert
          </p>
        </div>
      </div>
      <div className="px-8 relative z-10">
        <div className="max-w-7xl mx-auto bg-gray-50 flex sm:flex-row flex-col mt-20">
          <div className="basis-1/2">
            <div className="h-1/2 justify-center">
              <Image
                src="/webdevelopment2.jpg"
                alt="analytics"
                width={1000}
                height={1000}
                className="sm:mt-6 shadow-2xl shadow-gray-500 rounded-lg border border-gray-300"
              />
            </div>
          </div>
          <div className="basis-1/2 mt-10 sm:mt-0 text-left sm:px-16 z-10">
            <h1 className="text-4xl font-bold text-gray-800">
              Building Websites
            </h1>
            <p className="text-base leading-7 text-gray-600 mt-4">
              We build websites that convert. We use the latest technology to
              build websites that are fast, secure, and easy to use. We build
              websites that are optimized for search engines and are mobile
              friendly.
            </p>
            <p className="text-base leading-7 text-gray-600 mt-4">
              Most agencies and people use plug-in builders like Wix,
              SquareSpace & Wordpress to build websites. These builders are
              great for beginners but they are not optimized for search engines
              and are not mobile friendly most of the time. We build websites
              from scratch using HTML, CSS, JavaScript, React & Next.js. This
              allows us to build websites that are fast, secure, and easy to
              use.
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
                Check out the services related to website development that we
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
      <div>
        <h3 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">Our Development Tools</h3> <div className="grid grid-cols-1 gap-10 sm:gap-3 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto items-center mt-16">
        {icons.map((icon) => (
           <div>
              <Image src={icon.src} alt={icon.name} width='200' height='200' className="mx-auto" />
              </div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;
