import Image from "next/image";
import { BsQuote } from "react-icons/bs";
import { PiSealCheckFill } from "react-icons/pi";


const reviews = [
  {
    id: 1,
    name: "Mike Samhoury",
    text: "I am absolutely blown away by the user-friendly interface and seamless experience of this product. Highly recommend!",
    company: "The Appliance Plug",
  },
  {
    id: 2,
    name: "Brian Westwood",
    text: "I had a fantastic experience working with this web development and design team. They were responsive, knowledgeable, and produced a beautiful website for my business. I highly recommend their services!",
    company: "Junk Removal Company",
  },
  {
    id: 3,
    name: "Katie",
    text: "This local Google SEO service was incredibly effective in increasing my online presence and driving traffic to my website.",
    company: "Designer",
  },
];

const ClientReviews = () => {
  return (
    <div className="w-full sm:h-[600px] h-[1300px] bg-[#F3F4F6] pt-12 sm:pt-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col text-center">
          <h3 className="text-[#1F2937]">Testimonials</h3>
          <h2 className="font-extrabold text-[#1F2937] text-3xl mt-4">
            What our client says
          </h2>
        </div>
        {/* Review Cards */}
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 mt-8 px-10">
          {reviews.map((review, index) => (
            <div key={review.id}>
              <div
                className={`${
                  index === 1
                    ? "bg-[#F68800] flex flex-col rounded-lg text-white items-center w-full border-gray-50 border-2 py-4 px-8"
                    : "flex flex-col items-center w-full rounded-lg border-gray-50 border-2 bg-white py-4 px-8"
                }`}
              >
                <BsQuote className="text-[#4B5563] text-4xl" />
                <p>{review.text}</p>
              </div>
              <Image
                src="/google-icon-review.png"
                alt="user1"
                width={40}
                height={40}
                className="mx-auto mt-4"
              />
              <h4 className="text-center font-bold">{review.name}</h4>
              <p className="text-center text-xs text-gray-900 leading-7">
                {review.company}
              </p>
              <div className="flex flex-row gap-1 mb-4 items-center text-center justify-center">
                <PiSealCheckFill className="text-green-500 text-xl" />
                <p className="text-green-500">Verified</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
