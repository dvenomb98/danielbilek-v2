import { Post } from "contentlayer/generated";
import React, { FC } from "react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { URLS } from "@/lib/consts/urls";
import { ChevronLeft } from "lucide-react";
import { PrevNextPost } from "@/lib/types/general";
import TextLink from "../ui/TextLink";
import Tag from "./Tag";

interface PostSideBarProps {
	post: Post;
	prevNext: PrevNextPost;
}

const PostSidebar: FC<PostSideBarProps> = ({ post, prevNext }) => {
	return (
		<aside className="flex flex-col gap-10 lg:col-span-1 sm:order-2 border p-5 h-fit rounded-md">
			<div>
				<p className="text-muted-foreground">Posted by:</p>
				<p>{post.author}</p>
			</div>

			<div className="flex flex-col gap-2">
				<p className="text-muted-foreground">Tags:</p>
				<ul className="flex gap-2 flex-wrap">
					{post.tags?.map((tag) => (
						<Tag name={tag} key={tag} />
					))}
				</ul>
			</div>
			{!!prevNext.prev && (
				<div>
					<p className="text-muted-foreground">Previous post:</p>
					<TextLink href={`${URLS.BLOG}${prevNext.prev.url}`}>{prevNext.prev.title}</TextLink>
				</div>
			)}
			{!!prevNext.next && (
				<div>
					<p className="text-muted-foreground">Next post:</p>
					<TextLink href={`${URLS.BLOG}${prevNext.next.url}`}>{prevNext.next.title}</TextLink>
				</div>
			)}
			<Button variant="outline" asChild>
				<Link href={URLS.BLOG}>
					<ChevronLeft className="w-4 h-4 mr-2" />
					Back to blog
				</Link>
			</Button>
		</aside>
	);
};

export default PostSidebar;
