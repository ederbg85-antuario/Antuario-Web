import type { Metadata } from 'next'
import Script from 'next/script'
import { generatePageMetadata } from '@/config/metadata'
import { siteConfig } from '@/config/site'
import { PlanContent } from './PlanContent'

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: 'Plan de Crecimiento — sin costo',
    description:
      'Estudiamos tu negocio, tu demanda en Google, tu web y tus canales, y te diseñamos una solución concreta para crecer — con números. Sin costo y sin compromiso.',
    path: '/plan-de-crecimiento',
  }),
  // Página de campaña (venta en frío): fuera del índice orgánico.
  robots: { index: false, follow: true },
}

const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Plan de Crecimiento',
  serviceType: 'Estrategia de marketing digital',
  provider: { '@type': 'Organization', name: 'Antuario', url: siteConfig.url },
  areaServed: 'MX',
  description:
    'Estudio de demanda, revisión de sitio y canales, y diseño de una solución de crecimiento con números. Sin costo y sin compromiso.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'MXN' },
}

export default function Page() {
  return (
    <>
      <Script id="schema-plan-crecimiento" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      <PlanContent />
    </>
  )
}
