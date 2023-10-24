import { Post } from "contentlayer/generated";
import React, { FC } from "react";
import Tag from "./Tag";
import { Button } from "../ui/Button";
import Link from "next/link";
import { URLS } from "@/lib/consts/urls";
import { ChevronLeft } from "lucide-react";
import { PrevNextPost } from "@/lib/types/general";
import TextLink from "../ui/TextLink";

interface PostSideBarProps {
	post: Post;
	prevNext: PrevNextPost;
}

const PostSidebar: FC<PostSideBarProps> = ({ post, prevNext }) => {
	return (
		<aside className="flex flex-col gap-5 sm:w-full sm:border-t sm:pt-5 lg:border-r border-divider lg:w-[300px] lg:pr-5 ">
			<div>
				<p className="text-gray small">Posted by:</p>
				<p>{post.author}</p>
			</div>

			<div>
				<p className="text-gray small">Tags:</p>
				<ul className="flex gap-2 flex-wrap">
					{post.tags?.map((tag) => (
						<TextLink key={tag} href={URLS.TAGS + `/${tag}`}>
							{tag}
						</TextLink>
					))}
				</ul>
			</div>
			{!!prevNext.prev && (
				<div>
					<p className="text-gray small">Previous post:</p>
					<TextLink href={`${URLS.BLOG}${prevNext.prev.url}`}>{prevNext.prev.title}</TextLink>
				</div>
			)}
			{!!prevNext.next && (
				<div>
					<p className="text-gray small">Next post:</p>
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
