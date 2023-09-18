import { getPostsMeta } from "@/lib/posts";
import ListItem from "@/components/ListItem";

export const revalidate = 10;

const Posts = async () => {
    const posts = await getPostsMeta();

    if(!posts) {
        return <p>Sorry, no posts are available.</p>
    }
  return (
    <section className="w-full bg-[#F3F4F6]">
        <div className="pt-24 mx-auto max-w-[1280px]">
    <h2 className="text-4xl font-bold text-center pb-12">Our Blog</h2>
    <ul className="w-full grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
    {posts.map(post => (
      <ListItem key={post.id} post={post} />
    ))} 
    </ul>
</div>
    </section>
  
  )
}

export default Posts;