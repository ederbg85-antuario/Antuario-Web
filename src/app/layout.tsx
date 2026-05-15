import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'
import { generatePageMetadata } from '@/config/metadata'
import { siteConfig } from '@/config/site'
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp'
import './globals.css'

export const metadata: Metadata = generatePageMetadata({
  title: 'Agencia de Marketing Digital en México',
  description:
    'Antuario es una agencia de marketing digital en CDMX. Diseñamos soluciones a la medida para medianas y grandes empresas — con accountability, datos y estrategia bajo una sola dirección.',
})

export const viewport: Viewport = {
  themeColor: '#FAFAFA',
  width: 'device-width',
  initialScale: 1,
}

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteConfig.url}/#agencia`,
  name: 'Antuario',
  alternateName: 'Antuario Marketing Digital',
  description:
    'Agencia de marketing digital en CDMX. Soluciones a la medida para medianas y grandes empresas.',
  url: siteConfig.url,
  logo: `${siteConfig.url}/logos/logotype.svg`,
  image: `${siteConfig.url}/og-image.png`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ciudad de México',
    addressRegion: 'CDMX',
    addressCountry: 'MX',
  },
  areaServed: ['MX', 'Latinoamérica'],
  sameAs: [siteConfig.social.linkedin, siteConfig.social.instagram],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de marketing digital',
    itemListElement: [
      { '@type': 'Service', name: 'SEO' },
      { '@type': 'Service', name: 'Performance Ads' },
      { '@type': 'Service', name: 'Desarrollo Web' },
      { '@type': 'Service', name: 'Redes Sociales' },
      { '@type': 'Service', name: 'Diseño Creativo' },
      { '@type': 'Service', name: 'Software a la medida' },
      { '@type': 'Service', name: 'Inteligencia Artificial' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <html lang="es-MX">
      <body className="bg-papel font-sans text-onyx antialiased">
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        <Script
          id="schema-professional-service"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
