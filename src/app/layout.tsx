import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'
import { generatePageMetadata } from '@/config/metadata'
import { siteConfig } from '@/config/site'
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp'
import IndependenceDayBanner from '@/components/common/IndependenceDayBanner'
import './globals.css'

export const metadata: Metadata = generatePageMetadata({ title: 'Agencia de Marketing Digital en CDMX', description: 'Agencia de marketing digital en CDMX. Soluciones de marketing digital a la medida para empresas en México.' })
export const viewport: Viewport = { themeColor: '#FAFAFA', width: 'device-width', initialScale: 1 }
const professionalServiceSchema = { '@context': 'https://schema.org', '@type': 'ProfessionalService', '@id': `${siteConfig.url}/#agencia`, name: 'Antuario', description: 'Agencia de marketing digital en CDMX.', url: siteConfig.url, logo: `${siteConfig.url}/logos/logotype.svg`, telephone: siteConfig.phone, email: siteConfig.email, address: { '@type': 'PostalAddress', addressLocality: 'Ciudad de México', addressRegion: 'CDMX', addressCountry: 'MX' }, sameAs: [siteConfig.social.linkedin, siteConfig.social.instagram] }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID
  return <html lang="es-MX"><body className="bg-papel font-sans text-onyx antialiased">{gtmId && <GoogleTagManager gtmId={gtmId} />}<Script id="schema-professional-service" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} /><IndependenceDayBanner />{children}<FloatingWhatsApp /></body></html>
}
