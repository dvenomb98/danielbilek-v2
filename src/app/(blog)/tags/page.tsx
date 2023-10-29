import React from "react";
import { NextPage } from "next";
import { generateTagStructure, getAllVisiblePosts } from "@/lib/server-utils";
import Link from "next/link";
import { URLS } from "@/lib/consts/urls";

const BlogPage: NextPage = async () => {
	const posts = await getAllVisiblePosts();
	const tags = posts.flatMap((post) => post.tags) as string[];
	const uniqueTags = generateTagStructure(tags);

	return (
		<div className="flex items-center sm:flex-col justify-center sm:justify-start sm:items-start lg:min-h-[400px] gap-10 lg:divide-x">
			<h1 className="h1 sm:border-b sm:w-full sm:pb-5 sm:border-divider">Tags</h1>
			<ul className="grid grid-cols-3 sm:grid-cols-2 grid-rows-auto lg:pl-10 lg:w-1/2 sm:w-full">
				{uniqueTags.map((tag) => (
					<Link href={`${URLS.TAGS}/${tag.name}`} key={tag.name} className="group">
						<li className="inline-flex gap-1 p-5 sm:p-2 w-full text-gray group-hover:text-default-color ease-in-out transition-colors">
							{tag.name}
							<span>({tag.count})</span>
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default BlogPage;
