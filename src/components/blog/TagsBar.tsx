import { URLS } from "@/lib/consts/urls";
import { TagStructure } from "@/lib/types/general";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";
import Tag from "./Tag";

interface TagsBarProps {
	tags: TagStructure[];
	activeTag?: string;
}

const TagsBar: FC<TagsBarProps> = ({ tags, activeTag }) => {
	if (!tags.length) return null;

	return (
		<div className="sm:hidden w-[200px] min-w-[200px] flex flex-col gap-5 border-r border-divider">
			<Link href={URLS.BLOG}>
				<p className={cn("text-small underline")}>All posts</p>
			</Link>
			<ul className="flex flex-col gap-2">
			<p className="text-gray small">Tags:</p>
				{tags.map((tag) => (
					<Tag key={tag.name} activeTag={activeTag} {...tag} />
				))}
			</ul>
		</div>
	);
};

export default TagsBar;
