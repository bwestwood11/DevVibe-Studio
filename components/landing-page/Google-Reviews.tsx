import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { montserrat } from "@/app/fonts";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const reviews = [
  {
    name: "Brian",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/dylan.png",
  },
  {
    name: "Mike",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Rob",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeReviews() {
  return (
    <div className="relative bg-[#F3F4F6] flex pt-10 pb-20 w-full flex-col items-center justify-center ">
      <div className="max-w-6xl mx-auto w-full ">
      <div className="text-center mb-16">
          <h2 className={`font-extrabold text-4xl ${montserrat.className}`}>
            What People Think Of Us
          </h2>
          <p className="max-w-md mx-auto pt-2">
            Check Out Some Of Our Reviews 
          </p>
          <Link href='https://g.page/r/CREqdrCjy_j2EAI/review' className="border px-5 w-fit items-center flex mx-auto rounded-md bg-white leading-1 hover:bg-white/50 text-sm mt-3 py-2">
            Leave us a review
           <FcGoogle className="inline-block ml-2" />
            </Link>
        </div>
        <div className="overflow-hidden w-full relative">
               <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#F3F4F2] dark:from-[#F3F4F6]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#F3F4F2] dark:from-[#F3F4F6]"></div>
      </div>    
        </div>

     
    </div>
  );
}
