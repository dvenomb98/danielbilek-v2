import React, { FC, PropsWithChildren } from "react";
import { genPageMetadata } from "@/lib/seo";


export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

const Layout: FC<PropsWithChildren> = async ({children}) => {
	return (
		<section className="page-container">
          {children}
		</section>
	);
};

export default Layout;