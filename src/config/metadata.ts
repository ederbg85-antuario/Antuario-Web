import type { Metadata } from 'next'
import { siteConfig } from './site'

interface GenerateMetadataOptions {
  title?: string
  description?: string
  path?: string
  image?: string
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  image = '/opengraph-image',
}: GenerateMetadataOptions = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `Agencia de Marketing Digital en CDMX | ${siteConfig.name}`
  const fullDescription =
    description ??
    'Antuario es una agencia de marketing digital en CDMX. Diseñamos soluciones de marketing digital a la medida — con accountability, datos y estrategia bajo una sola dirección.'
  const url = `${siteConfig.url}${path}`

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: siteConfig.name,
      locale: 'es_MX',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
