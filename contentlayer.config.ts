import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		date: { type: "date", required: true },
		author: { type: "string", required: true },
		summary: { type: "string", required: true },
		draft: { type: "boolean", required: true },
		tags: { type: "list", of: { type: "string" } },
	},
	computedFields: {
		url: { type: "string", resolve: (post) => `/${post._raw.flattenedPath}` }
	},
}));

export default makeSource({
	contentDirPath: "src/data/posts",
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypePrism],
	},
});
