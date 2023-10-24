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
		<div className="sm:hidden w-[600px] flex flex-col gap-5">
			<Link href={URLS.BLOG}>
				<h4 className={cn("h4")}>All posts</h4>
			</Link>
			<ul className="flex flex-col gap-1">
				{tags.map((tag) => (
					<Tag key={tag.name} activeTag={activeTag} {...tag} />
				))}
			</ul>
		</div>
	);
};

export default TagsBar;
