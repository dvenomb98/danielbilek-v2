import SectionHeader from "@/components/shared/SectionHeader";
import React, { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = async ({children}) => {
	return (
		<section className="page-container">
          <SectionHeader title="Blog" description=""/>
          {children}
		</section>
	);
};

export default Layout;
