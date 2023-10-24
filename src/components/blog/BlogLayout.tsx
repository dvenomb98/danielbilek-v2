import { TagStructure } from '@/lib/types/general'
import { Post } from 'contentlayer/generated'
import React, { FC, Suspense } from 'react'
import TagsBar from './TagsBar'
import { Skeleton } from '../ui/Skeleton'
import PostCard from './PostCard'

interface BlogLayoutProps {
    uniqueTags: TagStructure[]
    posts: Post[]
	activeTag?: string
}

const BlogLayout: FC<BlogLayoutProps> = async ({uniqueTags, posts, activeTag}) => {

  return (
    <div className="flex gap-10 items-start">
			<TagsBar tags={uniqueTags} activeTag={activeTag} />
			<div className="flex flex-col gap-10">
				{posts.map((post) => (
					<Suspense fallback={<Skeleton className="h-40 w-[678.2px] sm:w-full" />}>
						<PostCard key={post._id} post={post} />
					</Suspense>
				))}
			</div>
		</div>
  )
}

export default BlogLayout