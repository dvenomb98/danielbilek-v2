import { getAllVisiblePosts } from "@/lib/server-utils";
import React, { FC } from "react";
import PostCard from "./blog/PostCard";

const LastPost: FC = async () => {
	const posts = await getAllVisiblePosts();
	const lastPost = posts[0];

	return (
		<div className="flex flex-col gap-10 border rounded-md p-10 bg-card">
			<h2 className="h2 font-bold">Latest article</h2>
			<PostCard post={lastPost} />
		</div>
	);
};

export default LastPost;
