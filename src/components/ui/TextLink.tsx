import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface TextLinkProps {
	href: string;
	children: ReactNode;
}

const TextLink: FC<TextLinkProps> = ({ href, children }) => {
	return (
		<Link href={href} className="underline hover:text-primary ease-in-out transition-colors">
			{children}
		</Link>
	);
};

export default TextLink;
