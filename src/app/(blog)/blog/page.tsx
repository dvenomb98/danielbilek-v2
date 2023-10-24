import React from "react";
import { NextPage } from "next";
import { generateTagStructure, getAllVisiblePosts } from "@/lib/server-utils";
import BlogLayout from "@/components/blog/BlogLayout";

const BlogPage: NextPage = async () => {
	const posts = await getAllVisiblePosts();
	const tags = posts.flatMap((post) => post.tags) as string[];
	const uniqueTags = generateTagStructure(tags);

	return <BlogLayout uniqueTags={uniqueTags} posts={posts} />;
};

export default BlogPage;
