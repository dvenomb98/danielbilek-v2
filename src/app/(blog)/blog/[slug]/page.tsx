import { getAllVisiblePosts, getPrevNextPosts } from "@/lib/services/contentlayer/utils";
import {  NextPage } from "next";
import { notFound } from "next/navigation";
import React from "react";
import PostLayout from "@/components/blog/PostLayout";
import moment from "moment";
import PostSidebar from "@/components/blog/PostSidebar";

export async function generateStaticParams() {
	const posts = await getAllVisiblePosts();

	return posts.map((post) => ({
		slug: post.url,
	}));
}


const BlogPost: NextPage<{ params: { slug: string } }> = async ({ params }) => {
	const posts = await getAllVisiblePosts();
	const postBySlug = posts.find(({ url }) => url.split("/")[1] === params.slug);
	if (!postBySlug) notFound();
	const prevNext = getPrevNextPosts(posts, params.slug);

	return (
		<section className="flex flex-col gap-5">
			{/* HEADER */}
			<p className="text-muted-foreground">{moment(postBySlug.date).format("dddd, MMMM D, YYYY")}</p>
			<div className="flex flex-col gap-5">
				<h1 className="h2">{postBySlug.title}</h1>
				<h3 className="h4 text-muted-foreground">{postBySlug.summary}</h3>
			</div>
			<hr className="border-divider" />

			{/* CONTENT */}
			<div className="grid grid-cols-3 sm:grid-cols-1 gap-10">
				<PostSidebar post={postBySlug} prevNext={prevNext} />
				<PostLayout post={postBySlug} />
			</div>
		</section>
	);
};

export default BlogPost;
