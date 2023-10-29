import { getAllVisiblePosts } from "@/lib/server-utils";
import { Metadata } from "next";
import React, { FC, PropsWithChildren } from "react";

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> => {
	const posts = await getAllVisiblePosts();
	const post = posts.find(({ url }) => url.split("/")[1] === params.slug);

	return {
		title: post?.title,
		description: post?.summary,
		keywords: post?.tags,
		authors: [{ name: "Daniel Bílek", url: "https://danielbilek.com" }],
		publisher: post?.author,
		openGraph: {
			title: post?.title,
			description: post?.summary,
			locale: "en",
			type: "article",
			publishedTime: post?.date,
			modifiedTime: new Date().toISOString(),
			authors: post?.author,
		},
		twitter: {
			title: post?.title,
			description: post?.summary,
		},
	};
};

const Layout: FC<PropsWithChildren> = async ({ children }) => {
	return <>{children}</>;
};

export default Layout;
