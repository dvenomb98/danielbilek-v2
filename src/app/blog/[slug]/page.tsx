import React from "react";

// export async function generateStaticParams() {
// 	const posts = await getAllVisiblePosts();

// 	return posts.map((post) => ({
// 		slug: post.slug,
// 	}));
// }

const BlogPost = ({ params }: { params: { slug: string } }) => {
	return <div>BlogPost: {params.slug}</div>;
};

export default BlogPost;
