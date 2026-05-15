import type { Metadata } from 'next'
import Script from 'next/script'
import { generatePageMetadata } from '@/config/metadata'
import { SERVICES } from '@/lib/services-data'
import { ServicePageTemplate } from '@/components/common/ServicePageTemplate'
import { buildServiceSchemas } from '@/lib/service-schemas'

const data = SERVICES['inteligencia-artificial']

export const metadata: Metadata = generatePageMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: data.href,
})

export default function Page() {
  const { serviceSchema, faqSchema, breadcrumbSchema } = buildServiceSchemas(data)
  return (
    <>
      <Script id="schema-ai-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="schema-ai-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-ai-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageTemplate slug={data.slug} />
    </>
  )
}
