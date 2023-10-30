import { MetadataRoute } from 'next'
import { allPosts } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { navigationLinks } from '@/lib/consts/urls'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl
  const blogRoutes = allPosts.map((post) => ({
    url: `${siteUrl}${post.url}`,
    lastModified: post.date,
  }))

  const routes = navigationLinks.map((route) => ({
    url: `${siteUrl}${route.href}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes]
}