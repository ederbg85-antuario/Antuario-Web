import { siteConfig } from '@/config/site'
import type { ServiceData } from './services-data'

export function buildServiceSchemas(
  data: Pick<ServiceData, 'metaTitle' | 'metaDescription' | 'href' | 'keyword' | 'faqs'>
) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.metaTitle,
    description: data.metaDescription,
    url: `${siteConfig.url}${data.href}`,
    serviceType: data.keyword,
    provider: { '@id': `${siteConfig.url}/#agencia` },
    areaServed: ['MX', 'Latinoamérica'],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${siteConfig.url}/servicios` },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.metaTitle.split(' — ')[0],
        item: `${siteConfig.url}${data.href}`,
      },
    ],
  }

  return { serviceSchema, faqSchema, breadcrumbSchema }
}
