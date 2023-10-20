
import Link from "next/link";
import React, { Suspense } from "react";



const BlogPage = async () => {
	// const posts = await getAllVisiblePosts();

	return (
		<div className="flex flex-col gap-2">
			{/* {posts.map((post) => (
                <Suspense fallback={<p>Loading...</p>} key={post.slug}>
				<Link   href={post.slug}>
					{post.slug}
				</Link>
                </Suspense>
			))} */}
		</div>
	);
};

export default BlogPage;
