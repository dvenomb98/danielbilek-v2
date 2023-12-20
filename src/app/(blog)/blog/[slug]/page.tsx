import { getAllVisiblePosts, getPrevNextPosts } from "@/lib/server-utils";
import { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";
import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
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
		<div className="flex flex-col gap-5">
			{/* HEADER */}
			<p className="text-muted-foreground">{moment(postBySlug.date).format("dddd, MMMM D, YYYY")}</p>
			<SectionHeader title={postBySlug.title} description={postBySlug.summary} />
			<hr className="border-divider" />

			{/* CONTENT */}
			<div className="flex sm:flex-col-reverse items-start gap-10">
				<PostSidebar post={postBySlug} prevNext={prevNext} />
				<PostLayout post={postBySlug} />
			</div>
		</div>
	);
};

export default BlogPost;
