import type { Metadata } from 'next'
import Script from 'next/script'
import { generatePageMetadata } from '@/config/metadata'
import { siteConfig } from '@/config/site'
import { BlogContent } from './BlogContent'

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog — análisis y estrategia de marketing digital',
  description:
    'Análisis, estrategia y aprendizajes operativos del equipo de Antuario. Marketing digital B2B, performance, SEO, IA aplicada y más — próximamente.',
  path: '/blog',
})

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteConfig.url}/blog` },
  ],
}

export default function Page() {
  return (
    <>
      <Script id="schema-blog-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogContent />
    </>
  )
}
