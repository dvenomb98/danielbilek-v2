import { getAllVisiblePosts } from "@/lib/server-utils";
import { allPosts } from "contentlayer/generated";
import React, { FC } from "react";
import PostCard from "./blog/PostCard";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/Card";

const LastPost: FC = async () => {
	const posts = await getAllVisiblePosts();
	const lastPost = posts[0];



	return <div className="flex flex-col gap-10">
			<h2 className="h2 font-bold">Check out the last article</h2>
			<Card>
				<CardHeader>
					<CardTitle>{lastPost.title}</CardTitle>
					<CardDescription>{lastPost.summary}</CardDescription>
				</CardHeader>
			</Card>
		</div>
};

export default LastPost;
