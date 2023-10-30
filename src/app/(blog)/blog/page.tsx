import React from "react";
import { NextPage } from "next";
import { generateTagStructure, getAllVisiblePosts } from "@/lib/server-utils";
import BlogLayout from "@/components/blog/BlogLayout";
import SectionHeader from "@/components/shared/SectionHeader";
import { capitalizeFirstLetter } from "@/lib/utils";

const BlogPage: NextPage = async () => {
	const posts = await getAllVisiblePosts();
	const tags = posts.flatMap((post) => post.tags) as string[];
	const uniqueTags = generateTagStructure(tags);

	return <>
		<SectionHeader title="All posts" />
		<BlogLayout uniqueTags={uniqueTags} posts={posts} />
		</>
};

export default BlogPage;
