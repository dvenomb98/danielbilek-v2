import moment from "moment"




// export const getAllVisiblePosts = async () => {
// 	const files = fs.readdirSync("src/data/posts");
// 	const posts = files.map((fileName) => {
// 		const slug = fileName.replace(".md", "");
// 		const readFile = fs.readFileSync(`src/data/posts/${fileName}`, "utf-8");
// 		const { data: frontmatter } = matter(readFile);

// 		return {
// 			slug: `/blog/${slug}`,
// 			frontmatter,
// 		};
// 	});
// 	// sort posts by date in descending order (newest first)
// 	// filter posts that are in draft
// 	const sortedPosts = posts
// 		.sort((a, b) => moment(b.frontmatter.date).valueOf() - moment(a.frontmatter.date).valueOf())
// 		.filter((post) => !post.frontmatter.draft);

// 	return sortedPosts;
// }
