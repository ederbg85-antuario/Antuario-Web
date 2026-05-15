import type { Metadata } from 'next'
import Script from 'next/script'
import { generatePageMetadata } from '@/config/metadata'
import { siteConfig } from '@/config/site'
import { CasosContent } from './CasosContent'
import { CASE_LIST } from '@/lib/cases-data'

export const metadata: Metadata = generatePageMetadata({
  title: 'Casos de éxito — marcas que confían en Antuario',
  description:
    'Casos de éxito de marketing digital, desarrollo web y posicionamiento orgánico de empresas mexicanas que trabajan con Antuario desde su sede en CDMX.',
  path: '/casos',
})

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
    { '@type': 'ListItem', position: 2, name: 'Casos', item: `${siteConfig.url}/casos` },
  ],
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Casos de éxito Antuario',
  url: `${siteConfig.url}/casos`,
  hasPart: CASE_LIST.map((c) => ({
    '@type': 'CreativeWork',
    name: c.name,
    url: c.detail ? `${siteConfig.url}/casos/${c.slug}` : undefined,
    about: c.industry,
  })),
}

export default function Page() {
  return (
    <>
      <Script id="schema-casos-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="schema-casos-collection" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <CasosContent />
    </>
  )
}
