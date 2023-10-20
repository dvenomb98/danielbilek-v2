import React, { FC } from "react";
import Logo from "../../ui/Logo";
import DesktopNav from "./DesktopNav";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import MobileNav from "./MobileNav";

const Navbar: FC = () => {
	return (
		<div className="border-b border-divider">
			<nav className="layout-container p-4 flex items-center justify-between">
				<div className="flex items-center gap-10">
					<Logo />
					<DesktopNav />
				</div>
				<div className="flex items-center">
				<ThemeSwitcher />
				<MobileNav />
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
