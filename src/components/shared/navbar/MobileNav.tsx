"use client";
import { Button } from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/Sheet";
import { navigationLinks } from "@/lib/consts/urls";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

const MobileNav: FC = () => {
	const pathname = usePathname();

	return (
		<Sheet>
			<SheetTrigger asChild className="lg:hidden">
				<Button variant="ghost" size="sm">
					<MenuIcon className="w-4 h-4" />
				</Button>
			</SheetTrigger>
			<SheetContent side="top" className="flex flex-col gap-10">
				<SheetHeader>
					<Logo />
				</SheetHeader>
				<ul className="flex flex-col gap-5">
					{navigationLinks.map((props) => (
						<SheetClose asChild key={props.href}>
							<Link
								href={props.href}
								className={cn(
									"text-gray hover:text-default-color transition-colors ease-in-out component-focus rounded-md",
									pathname === props.href && "text-default-color"
								)}
							>
								{props.label}{" "}
							</Link>
						</SheetClose>
					))}
				</ul>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
