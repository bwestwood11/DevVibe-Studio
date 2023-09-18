import { getPostsMeta, getPostByName } from "@/lib/posts";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";
import { cn } from "@/lib/utils";
import { Crimson_Pro } from "next/font/google";
import Image from "next/image";
import { Source_Sans_3 } from "next/font/google";

const crimson = Crimson_Pro({
  weight: "500",
  subsets: ["latin"],
});

const sans = Source_Sans_3({ subsets: ["latin"] });

export const revalidate = 10;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta();

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    return <p>Sorry, no posts are available.</p>;
  }

  const { meta, content } = post;
  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <main className="w-full bg-[#F3F4F6]">
          <div
      className={cn(
        sans.className,
        "px-6 max-w-3xl mx-auto prose prose-lg prose-slate dark:prose-invert py-16"
      )}
    >
      <h1 className="text-3xl font-bold mt-4 mb-0">{meta.title}</h1>
      <div className="flex flex-col mt-1">
          <p className="font-bold my-1">{pubDate}</p>
          <div className="flex flex-row items-center gap-3">
            <Image src='/brett.png' width={40} height={30} alt='author' className="rounded-full my-1" />
            <p className="font-bold">Brett Westwood</p>
          </div>
      
      </div>
    
      <article className="mt-4 text-gray-600 leading-7 tracking-wide">
        {content}
      </article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      <p>
        <Link href="/blog">Back to blog</Link>
      </p>
    </div>
    </main>

  );
}
