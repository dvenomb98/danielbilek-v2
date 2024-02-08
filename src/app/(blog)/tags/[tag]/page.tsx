import BlogLayout from "@/components/blog/BlogLayout";
import { getAllUniqueTags, getAllVisiblePosts } from "@/lib/services/contentlayer/utils";
import { capitalizeFirstLetter } from "@/lib/utils";
import { NextPage } from "next";

export async function generateStaticParams() {
  const posts = await getAllVisiblePosts();
  const tags = posts.flatMap((post) => post.tags);
  const uniqueTags = [...new Set(tags)];
  return uniqueTags;
}

const BlogPost: NextPage<{ params: { tag: string } }> = async ({ params }) => {
  const posts = await getAllVisiblePosts();
  const postsByTag = posts.filter(({ tags }) => tags?.includes(params.tag));
  const tags = await getAllUniqueTags(posts);

  return (
    <BlogLayout
      uniqueTags={tags}
      posts={postsByTag}
      activeTag={params.tag}
      header={capitalizeFirstLetter(params.tag)}
    />
  );
};

export default BlogPost;
