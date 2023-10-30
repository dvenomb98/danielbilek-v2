import BlogLayout from "@/components/blog/BlogLayout";
import SectionHeader from "@/components/shared/SectionHeader";
import { generateTagStructure, getAllVisiblePosts } from "@/lib/server-utils";
import { capitalizeFirstLetter } from "@/lib/utils";
import { NextPage } from "next";

export async function generateStaticParams() {
	const posts = await getAllVisiblePosts();
	const tags = posts.flatMap((post) => post.tags);
	const uniqueTags = [...new Set(tags)]
	return uniqueTags
}

const BlogPost: NextPage<{ params: { tag: string } }> = async ({ params }) => {
	const posts = await getAllVisiblePosts();
	const postsByTag = posts.filter(({ tags }) => tags?.includes(params.tag));
	const tags = posts.flatMap((post) => post.tags) as string[];
	const uniqueTags = generateTagStructure(tags);

	return (
		 <>
			<SectionHeader title={capitalizeFirstLetter(params.tag)} />
			<BlogLayout uniqueTags={uniqueTags} posts={postsByTag} activeTag={params.tag}  />
		</>
	)
}

export default BlogPost;
