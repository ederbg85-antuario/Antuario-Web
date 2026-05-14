import type { Metadata, Viewport } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { generatePageMetadata } from '@/config/metadata'
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp'
import './globals.css'

export const metadata: Metadata = generatePageMetadata({
  title: 'Antuario — Agencia de Marketing Digital con Accountability Real',
  description:
    'Soluciones de marketing digital a la medida, con impacto real y medible. Marketing, sistemas e inteligencia artificial bajo una sola dirección estratégica.',
})

export const viewport: Viewport = {
  themeColor: '#FAFAFA',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  return (
    <html lang="es-MX">
      <body className="bg-nieve font-sans text-onyx antialiased">
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
