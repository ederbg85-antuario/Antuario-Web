import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { generatePageMetadata } from '@/config/metadata'
import { siteConfig } from '@/config/site'
import { CASES, DETAILED_CASES } from '@/lib/cases-data'
import { CaseDetailContent } from './CaseDetailContent'

export function generateStaticParams() {
  return DETAILED_CASES.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = CASES[params.slug]
  if (!c || !c.detail) return generatePageMetadata({ title: 'Caso no encontrado' })
  return generatePageMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/casos/${c.slug}`,
    image: c.imageSrc,
  })
}

export default function Page({ params }: { params: { slug: string } }) {
  const c = CASES[params.slug]
  if (!c || !c.detail) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.metaTitle,
    description: c.metaDescription,
    url: `${siteConfig.url}/casos/${c.slug}`,
    image: `${siteConfig.url}${c.imageSrc}`,
    datePublished: '2026-01-15',
    author: { '@id': `${siteConfig.url}/#agencia` },
    publisher: { '@id': `${siteConfig.url}/#agencia` },
    about: c.industry,
    keywords: [
      'caso de éxito marketing digital',
      ...c.services.map((s) => s.toLowerCase()),
      c.industry,
      'agencia de marketing digital',
      'CDMX',
      'México',
    ].join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Casos', item: `${siteConfig.url}/casos` },
      { '@type': 'ListItem', position: 3, name: c.name, item: `${siteConfig.url}/casos/${c.slug}` },
    ],
  }

  return (
    <>
      <Script id={`schema-case-article-${c.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id={`schema-case-breadcrumb-${c.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CaseDetailContent slug={c.slug} />
    </>
  )
}
