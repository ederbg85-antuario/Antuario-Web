export type BlogSource = {
  label: string
  href: string
}

export type BlogPost = {
  slug: string
  title: string
  highlight: string
  excerpt: string
  category: string
  date: string
  readingTime: string
  keyword: string
  metaTitle: string
  metaDescription: string
  sources: BlogSource[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'datos-sistemas-accountability-agencia-marketing-digital-cdmx',
    title: 'Datos, sistemas y accountability:',
    highlight: 'cómo distinguir una agencia seria de una que solo maquila contenido.',
    excerpt:
      'En un mercado saturado de agencias de marketing digital, la diferencia no está en publicar más: está en estrategia, sistemas, datos y responsabilidad real sobre indicadores de negocio.',
    category: 'Estrategia + Medición',
    date: '2026-06-11',
    readingTime: '14 min',
    keyword: 'agencia de marketing digital en CDMX',
    metaTitle: 'Datos y accountability: cómo elegir agencia de marketing digital en CDMX',
    metaDescription:
      'Cómo distinguir una agencia de marketing digital seria: estrategia, sistemas, KPIs, datos, accountability y señales para evitar agencias que solo maquilan contenido.',
    sources: [
      { label: 'DataReportal · Digital 2026: Mexico', href: 'https://datareportal.com/reports/digital-2026-mexico' },
      { label: 'Gartner · 2025 CMO Spend Survey', href: 'https://www.gartner.com/en/newsroom/press-releases/2025-05-12-gartner-2025-cmo-spend-survey-reveals-marketing-budgets-have-flatlined-at-seven-percent-of-overall-company-revenue' },
      { label: 'The CMO Survey · Marketing contracts under pressure', href: 'https://cmosurvey.org/marketing-contracts-under-economic-pressure-despite-growing-value-and-ai-gains/' },
      { label: 'Think with Google · Media effectiveness guide', href: 'https://www.thinkwithgoogle.com/_qs/documents/18494/UPDATED_TwG_CMO_CFO_Media_Effectiveness_Guide.pdf' },
      { label: 'Deloitte Digital · 2025 marketing investment trends', href: 'https://www.deloittedigital.com/us/en/insights/research/2025-marketing-investment-trends.html' },
      { label: 'AMVO · Estudio de Venta Online 2026', href: 'https://amvo.org.mx/descarga-evo-2026' },
      { label: 'IAB México · Marketing Strategy & Media Investment 2024-2025', href: 'https://www.iabmexico.com/estudios/marketing-strategy-media-investment-2024-2025/' },
      { label: 'NetSuite · Customer Acquisition Cost', href: 'https://www.netsuite.com/portal/resource/articles/erp/customer-acqusition-cost.shtml' },
    ],
  },
]

export const BLOG_POST_MAP = BLOG_POSTS.reduce<Record<string, BlogPost>>((acc, post) => {
  acc[post.slug] = post
  return acc
}, {})
