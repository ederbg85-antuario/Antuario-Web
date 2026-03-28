import type { Metadata, Viewport } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { generatePageMetadata } from '@/config/metadata'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CursorEffect from '@/components/common/CursorEffect'
import './globals.css'

export const metadata: Metadata = generatePageMetadata()

export const viewport: Viewport = {
  themeColor: '#f1f5f9',
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
      <body className="min-h-screen bg-background font-sans text-slate-900 antialiased">
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        <CursorEffect />
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
