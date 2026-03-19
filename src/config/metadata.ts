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
  image = '/og-image.png',
}: GenerateMetadataOptions = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — Sistema Comercial Integral B2B`
  const fullDescription = description ?? siteConfig.description
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
