import { URLS } from "@/lib/consts/urls";
import { Post } from "contentlayer/generated";
import { ArrowRight } from "lucide-react";
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
		<div className="flex flex-col w-full gap-2 border p-5 rounded-md bg-card">
			<p className="text-muted-foreground text-sm">{moment(date).format("DD MMMM YYYY")}</p>
			<Link href={postUrl}>
				<h3 className="h3">{title}</h3>
			</Link>
			<ul className="flex gap-2">
				{tags?.map((tag) => <li key={tag} className="uppercase text-primary p-1 rounded-md bg-secondary text-xs">{tag}</li>)}
			</ul>
			<p className="text-muted-foreground py-2">{summary}</p>
			<Link href={postUrl} className="font-bold hover:underline inline-flex items-center gap-2 group w-fit">
				Read more
				<ArrowRight className="w-5 h-5 hidden group-hover:block" />
			</Link>
		</div>
	);
};

export default PostCard;
