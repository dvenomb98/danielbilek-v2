import { Post, allPosts } from "contentlayer/generated";
import moment from "moment";
import { PrevNextPost, TagStructure } from "./types/general";

export const getAllVisiblePosts = async () => {
	// sort posts by date in descending order (newest first)
	// filter posts that are in draft
	const filteredPosts = allPosts
		.sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf())
		.filter((post) => !post.draft);

	// everytag to lowercase for better matching [tag]
	const postsWithLoweredTags = filteredPosts.map((post) => ({
		...post,
		tags: post.tags?.map((tag) => tag.toLowerCase()),
	}));

	return postsWithLoweredTags;
};

export const generateTagStructure = (tags: string[]): TagStructure[] => {
	return tags.reduce<TagStructure[]>((acc, tag) => {
		const found = acc.find((t) => t.name === tag);
		if (found) {
			found.count++;
		} else {
			acc.push({ name: tag, count: 1 });
		}
		return acc;
	}, []);
};

export const getPrevNextPosts = (posts: Post[], slug: string): PrevNextPost => {
	const postIndex = posts.findIndex((post) => post.url.split("/")[1] === slug);

	const prev = posts[postIndex + 1] || null;
	const next = posts[postIndex - 1] || null;

	return {
		prev: prev ? { title: prev.title, url: prev.url } : null,
		next: next ? { title: next.title, url: next.url } : null,
	};
};
