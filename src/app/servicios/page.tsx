import type { Metadata } from 'next'
import Script from 'next/script'
import { generatePageMetadata } from '@/config/metadata'
import { siteConfig } from '@/config/site'
import { ServiciosContent } from './ServiciosContent'
import { SERVICIOS_FAQS } from './faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'Servicios de Marketing Digital — bajo una sola dirección',
  description:
    'Servicios de marketing digital integrados: SEO, Google Ads, desarrollo web, redes sociales, diseño, software a la medida e inteligencia artificial. Bajo una sola dirección estratégica desde CDMX para toda la República Mexicana.',
  path: '/servicios',
})

const offerCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Servicios de marketing digital — Antuario',
  url: `${siteConfig.url}/servicios`,
  provider: { '@id': `${siteConfig.url}/#agencia` },
  itemListElement: [
    { '@type': 'Service', name: 'SEO', url: `${siteConfig.url}/servicios/seo` },
    { '@type': 'Service', name: 'Performance Ads', url: `${siteConfig.url}/servicios/performance-ads` },
    { '@type': 'Service', name: 'Desarrollo Web', url: `${siteConfig.url}/servicios/desarrollo-web` },
    { '@type': 'Service', name: 'Redes Sociales', url: `${siteConfig.url}/servicios/redes-sociales` },
    { '@type': 'Service', name: 'Diseño Creativo', url: `${siteConfig.url}/servicios/diseno-creativo` },
    { '@type': 'Service', name: 'Software a la medida', url: `${siteConfig.url}/servicios/software` },
    { '@type': 'Service', name: 'Inteligencia Artificial', url: `${siteConfig.url}/servicios/inteligencia-artificial` },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
    { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${siteConfig.url}/servicios` },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SERVICIOS_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function ServiciosPage() {
  return (
    <>
      <Script
        id="schema-services-catalog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      <Script
        id="schema-services-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-services-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiciosContent />
    </>
  )
}
