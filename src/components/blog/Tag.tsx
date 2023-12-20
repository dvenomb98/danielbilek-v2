import { URLS } from "@/lib/consts/urls";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

interface TagProps {
	name: string;
	count?: number;
	activeTag?: string;
}

const Tag: FC<TagProps> = ({ name, count, activeTag }) => {
	return (
		<li
			className={cn(
				"first-letter:uppercase hover:text-foreground transition-colors ease-in-out text-sm underline",
				activeTag === name ? "text-foreground" : "text-muted-foreground"
			)}
		>
			<Link href={`${URLS.TAGS}/${name}`} className="w-full">
				{name} {!!count && <span>({count})</span>}
			</Link>
		</li>
	);
};

export default Tag;
