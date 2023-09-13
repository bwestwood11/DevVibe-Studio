import { getPostsMeta, getPostByName } from "@/lib/posts";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";

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
    <main className="px-6 max-w-6xl prose prose-xl prose-slate dark:prose-invert pt-24 mx-auto">
      <h1 className="text-3xl text-center font-bold mt-4 mb-0">{meta.title}</h1>
      <p className="mt-2 text-center">{pubDate}</p>
      <article className="mt-4 text-center">{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      <p>
        <Link href="/blog">Back to blog</Link>
      </p>
    </main>
  );
}
