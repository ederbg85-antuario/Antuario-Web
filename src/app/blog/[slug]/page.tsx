import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { generatePageMetadata } from '@/config/metadata'
import { siteConfig } from '@/config/site'
import { BLOG_POST_MAP, BLOG_POSTS } from '@/lib/blog-data'
import { BlogPostContent } from './BlogPostContent'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = BLOG_POST_MAP[params.slug]
  if (!post) return generatePageMetadata({ title: 'Artículo no encontrado' })

  return generatePageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  })
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = BLOG_POST_MAP[params.slug]
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.metaTitle,
    description: post.metaDescription,
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@id': `${siteConfig.url}/#agencia` },
    publisher: { '@id': `${siteConfig.url}/#agencia` },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    keywords: [
      post.keyword,
      'accountability marketing',
      'KPIs de marketing digital',
      'agencia de marketing digital',
      'datos de marketing',
      'CDMX',
      'México',
    ].join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteConfig.url}/blog` },
      { '@type': 'ListItem', position: 3, name: post.metaTitle, item: `${siteConfig.url}/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <Script id={`schema-blog-article-${post.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id={`schema-blog-breadcrumb-${post.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogPostContent post={post} />
    </>
  )
}
