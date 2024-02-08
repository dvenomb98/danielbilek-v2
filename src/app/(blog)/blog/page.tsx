import React from "react";
import { NextPage } from "next";
import { getAllVisiblePosts, getAllUniqueTags } from "@/lib/services/contentlayer/utils";
import BlogLayout from "@/components/blog/BlogLayout";


const BlogPage: NextPage = async () => {
	const posts = await getAllVisiblePosts();
	const tags = await getAllUniqueTags(posts)

	return <BlogLayout uniqueTags={tags} posts={posts} header="All posts" />
		
};

export default BlogPage;
