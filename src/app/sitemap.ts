import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { SERVICE_LIST } from '@/lib/services-data'
import { DETAILED_CASES } from '@/lib/cases-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    // Tier 0 — Home
    { url: siteConfig.url, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // Tier 1 — Pilares
    { url: `${siteConfig.url}/servicios`,  lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${siteConfig.url}/casos`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.90 },
    { url: `${siteConfig.url}/nosotros`,   lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteConfig.url}/contacto`,   lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${siteConfig.url}/blog`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.60 },

    // Tier 2 — Subpáginas de servicio
    ...SERVICE_LIST.map((s) => ({
      url: `${siteConfig.url}${s.href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.80,
    })),

    // Tier 2 — Casos detallados
    ...DETAILED_CASES.map((c) => ({
      url: `${siteConfig.url}/casos/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

    // Soporte / legacy
    { url: `${siteConfig.url}/diagnostico`, lastModified: now, changeFrequency: 'monthly', priority: 0.70 },
    { url: `${siteConfig.url}/como-trabajamos`, lastModified: now, changeFrequency: 'monthly', priority: 0.50 },
    { url: `${siteConfig.url}/dashboard`,   lastModified: now, changeFrequency: 'monthly', priority: 0.50 },
    { url: `${siteConfig.url}/agente-ia`,   lastModified: now, changeFrequency: 'monthly', priority: 0.50 },
    { url: `${siteConfig.url}/resultados`,  lastModified: now, changeFrequency: 'monthly', priority: 0.50 },
  ]
}
