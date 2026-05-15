import type { Metadata } from 'next'
import Script from 'next/script'
import { generatePageMetadata } from '@/config/metadata'
import { siteConfig } from '@/config/site'
import { NosotrosContent } from './NosotrosContent'

export const metadata: Metadata = generatePageMetadata({
  title: 'Somos Antuario — agencia de marketing digital con visión estratégica',
  description:
    'Antuario es una agencia de marketing digital con sede en CDMX. Conoce al equipo, la metodología y la filosofía detrás de cada proyecto que operamos para empresas medianas y grandes en México.',
  path: '/nosotros',
})

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#agencia`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logos/logotype.svg`,
  description:
    'Agencia de marketing digital en CDMX. Soluciones a la medida para medianas y grandes empresas — con accountability, datos y estrategia bajo una sola dirección.',
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ciudad de México',
    addressRegion: 'CDMX',
    addressCountry: 'MX',
  },
  sameAs: [siteConfig.social.linkedin, siteConfig.social.instagram],
  foundingLocation: {
    '@type': 'Place',
    name: 'Ciudad de México, México',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
    { '@type': 'ListItem', position: 2, name: 'Nosotros', item: `${siteConfig.url}/nosotros` },
  ],
}

export default function Page() {
  return (
    <>
      <Script id="schema-nosotros-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="schema-nosotros-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <NosotrosContent />
    </>
  )
}
