import { siteConfig } from '@/config/site'

export default function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    areaServed: {
      '@type': 'Country',
      name: 'MX',
    },
    serviceType: 'Marketing B2B',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MX',
    },
    sameAs: [siteConfig.social.linkedin, siteConfig.social.instagram],
  }

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Sistema Comercial Integral B2B',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'MX',
    },
    description:
      'Sistema comercial integral que genera clientes para negocios B2B de servicios high-ticket. Incluye generación de demanda, plataforma de control y automatización con IA.',
    serviceType: [
      'Generación de Leads B2B',
      'Plataforma de Control Comercial',
      'Automatización con Inteligencia Artificial',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
    </>
  )
}
