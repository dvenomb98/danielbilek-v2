import { getAllVisiblePosts } from "@/lib/services/contentlayer/utils";
import React, { FC } from "react";
import PostCard from "./blog/PostCard";

const LastPost: FC = async () => {
	const posts = await getAllVisiblePosts();
	const lastPost = posts[0];

	return (
		<div className="flex flex-col gap-10">
			<h2 className="h2 font-bold">Latest article</h2>
			<PostCard post={lastPost} />
		</div>
	);
};

export default LastPost;
