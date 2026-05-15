import type { Metadata } from 'next'
import Script from 'next/script'
import { generatePageMetadata } from '@/config/metadata'
import { siteConfig } from '@/config/site'
import { ContactoContent } from './ContactoContent'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contacto — agencia de marketing digital en CDMX',
  description:
    'Contacta a Antuario, agencia de marketing digital en CDMX. WhatsApp directo con un estratega, formulario para propuestas y horarios de atención de lunes a viernes.',
  path: '/contacto',
})

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: `${siteConfig.url}/contacto`,
  name: 'Contacto Antuario',
  about: { '@id': `${siteConfig.url}/#agencia` },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: 'customer service',
      areaServed: 'MX',
      availableLanguage: ['es-MX'],
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: siteConfig.url },
    { '@type': 'ListItem', position: 2, name: 'Contacto', item: `${siteConfig.url}/contacto` },
  ],
}

export default function Page() {
  return (
    <>
      <Script id="schema-contact-page" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Script id="schema-contact-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactoContent />
    </>
  )
}
