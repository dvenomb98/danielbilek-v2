import { Button } from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import StyledLink from "@/components/ui/StyledLink";
import { MEDIA_URLS, navigationLinks } from "@/lib/consts/urls";
import { GithubIcon } from "lucide-react";
import React, { FC } from "react";

const Footer: FC = () => {
	return (
		<footer className="border-t border-divider px-5 py-10  bg-secondary-extralight dark:bg-secondary-extradark">
			<div className="layout-container flex sm:flex-col sm:items-start items-center gap-10">
				<Logo />
				<ul className="flex gap-5 sm:gap-2 sm:flex-col w-full">
					{navigationLinks.map((li) => (
						<StyledLink className="small sm:py-2" key={li.href} {...li} />
					))}
				</ul>
				<div className="flex">
					{MEDIA_URLS.map((media) => {
						const Icon = media.icon;
						return (
							<Button variant="ghost" key={media.href} asChild>
								<a href={media.href}>
									<Icon className="w-5 h-5 fill-current" />
								</a>
							</Button>
						);
					})}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
