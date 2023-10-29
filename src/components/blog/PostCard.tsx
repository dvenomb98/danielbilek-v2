import { URLS } from "@/lib/consts/urls";
import { Post } from "contentlayer/generated";
import moment from "moment";
import Link from "next/link";
import React, { FC } from "react";

interface PostCardProps {
	post: Post;
}

const PostCard: FC<PostCardProps> = async ({ post }) => {
	if (!post) return null;

	const { date, title, tags, summary, url } = post;
	const postUrl = `${URLS.BLOG}${url}`;

	return (
		<div className="flex flex-col w-full">
			<p className="text-gray">{moment(date).format("DD MMMM YYYY")}</p>
			<Link href={postUrl}>
				<h3 className="h3 font-bold">{title}</h3>
			</Link>
			<ul className="flex gap-2">
				{tags?.map((tag) => <li className="uppercase text-primary small">{tag}</li>)}
			</ul>
			<p className="text-gray py-2">{summary}</p>
		</div>
	);
};

export default PostCard;
