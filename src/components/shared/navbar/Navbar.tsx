import React, { FC } from "react";
import Logo from "../../ui/Logo";
import DesktopNav from "./DesktopNav";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import MobileNav from "./MobileNav";
import SearchInput from "./SearchInput";
import { getAllVisiblePosts } from "@/lib/server-utils";

const Navbar: FC = async () => {

	const posts =await  getAllVisiblePosts()
	return (
		<div className="border-b border-divider">
			<nav className="layout-container p-4 flex items-center justify-between">
				<div className="flex items-center gap-10">
					<Logo />
					<DesktopNav />
				</div>
				<div className="flex items-center gap-1">
				<SearchInput posts={posts} />
				<ThemeSwitcher />
				<MobileNav />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
