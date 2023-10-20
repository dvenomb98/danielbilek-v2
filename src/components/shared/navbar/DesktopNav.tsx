"use client";
import StyledLink from "@/components/ui/StyledLink";
import { navigationLinks } from "@/lib/consts/urls";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

const DesktopNav: FC = () => {
	const pathname = usePathname();
	return (
		<ul className="flex gap-5 sm:hidden">
			{navigationLinks.map((props) => (
				<li key={props.href}>
					<StyledLink
						{...props}
						className={pathname === props.href ? "text-default-color small" : "small"}
					/>
				</li>
			))}
		</ul>
	);
};

export default DesktopNav;
