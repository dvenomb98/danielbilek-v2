import { TagStructure } from "@/lib/types/general";
import { Post } from "contentlayer/generated";
import React, { FC, Suspense } from "react";
import TagsBar from "./TagsBar";
import { Skeleton } from "../ui/Skeleton";
import PostCard from "./PostCard";

interface BlogLayoutProps {
	uniqueTags: TagStructure[];
	posts: Post[];
	activeTag?: string;
}

const BlogLayout: FC<BlogLayoutProps> = async ({ uniqueTags, posts, activeTag }) => {
	return (
		<div className="flex gap-5 items-start">
			<TagsBar tags={uniqueTags} activeTag={activeTag} />
			<div className="flex flex-col gap-10">
				{posts.map((post) => (
					<Suspense key={post._id} fallback={<Skeleton className="h-40 w-full" />}>
						<PostCard key={post._id} post={post} />
					</Suspense>
				))}
			</div>
		</div>
	);
};

export default BlogLayout;
