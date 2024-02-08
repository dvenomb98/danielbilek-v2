import { Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import React, { FC } from "react";
import { mdxComponents } from "./MDXComponents";
import "@/app/styles/prism.css";

interface PostLayoutProps {
	post: Post;
}

const PostLayout: FC<PostLayoutProps> = ({ post }) => {
	const MDXContent = getMDXComponent(post.body.code);

	return (
		<div className="flex flex-col gap-5 w-full lg:col-span-2">
			<MDXContent components={mdxComponents} />
		</div>
	);
};

export default PostLayout;
