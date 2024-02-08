import { TagStructure } from "@/lib/types/general";
import { Post } from "contentlayer/generated";
import React, { FC, Suspense } from "react";
import TagsBar from "./TagsBar";
import { Skeleton } from "../ui/Skeleton";
import PostCard from "./PostCard";

interface BlogLayoutProps {
  uniqueTags: TagStructure[];
  posts: Post[];
  activeTag?: string;
  header: string;
}

const BlogLayout: FC<BlogLayoutProps> = async ({ uniqueTags, posts, activeTag, header }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 grid-rows-auto gap-10">
      <div className="flex flex-col gap-10 col-span-2">
        <h3 className="h3">{header}</h3>
        <div className="flex flex-col gap-5">
          {posts.map((post) => (
            <Suspense key={post._id} fallback={<Skeleton className="h-40 w-full" />}>
              <PostCard key={post._id} post={post} />
            </Suspense>
          ))}
        </div>
      </div>
      <TagsBar tags={uniqueTags} activeTag={activeTag} />
    </div>
  );
};

export default BlogLayout;
