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
				"first-letter:uppercase hover:text-default-color transition-colors ease-in-out small underline",
				activeTag === name ? "text-default-color" : "text-gray"
			)}
		>
			<Link href={`${URLS.TAGS}/${name}`} className="w-full">
				{name} {!!count && <span>({count})</span>}
			</Link>
		</li>
	);
};

export default Tag;
