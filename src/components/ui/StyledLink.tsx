import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

interface StyledLinkProps {
	href: string;
	label: string;
	className?: string
}

const StyledLink: FC<StyledLinkProps> = ({ href, label, className }) => {
	return <Link href={href} className={cn("text-muted-foreground hover:text-primary transition-colors ease-in-out rounded-md", className )}>{label}</Link>;
};

export default StyledLink;
