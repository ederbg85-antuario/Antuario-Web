export type ServiceIconKey =
  | 'search'
  | 'target'
  | 'code'
  | 'social'
  | 'palette'
  | 'cpu'
  | 'ai'

export type ServiceData = {
  slug: string
  href: string
  iconKey: ServiceIconKey
  accent: string
  eyebrow: string
  title: string
  highlight: string
  metaTitle: string
  metaDescription: string
  keyword: string
  tagline: string
  description: string
  problem: {
    headline: string
    sub: string
    points: { t: string; d: string }[]
  }
  process: {
    headline: string
    steps: { n: string; t: string; d: string }[]
  }
  deliverables: {
    headline: string
    items: string[]
  }
  cases: { name: string; slug: string }[]
  faqs: { q: string; a: string }[]
  ctaTitle: string
  ctaHighlight: string
  ctaDescription: string
}

export const SERVICES: Record<string, ServiceData> = {
  seo: {
    slug: 'seo',
    href: '/servicios/seo',
    iconKey: 'search',
    accent: 'var(--salvia-b)',
    eyebrow: 'SEO · CDMX · México',
    title: 'Agencia SEO en México —',
    highlight: 'posicionamiento orgánico medible.',
    metaTitle: 'Agencia SEO en México — posicionamiento orgánico medible',
    metaDescription:
      'Agencia SEO en CDMX para empresas medianas y grandes. Auditoría técnica, estrategia de contenidos, autoridad de dominio y reportes mensuales con métricas reales.',
    keyword: 'agencia SEO en México',
    tagline: 'Crecer en búsquedas, sin pagar por cada click.',
    description:
      'Diseñamos estrategias SEO para empresas que necesitan crecimiento orgánico sostenido en México. Auditoría técnica, contenido estratégico, link building y reportes de posiciones, tráfico cualificado y conversiones.',
    problem: {
      headline: 'Por qué el SEO suele fallar en empresas medianas y grandes.',
      sub: 'No es por falta de presupuesto — es por falta de método.',
      points: [
        {
          t: 'Trafico que no convierte',
          d: 'Rankear por términos genéricos atrae visitas que nunca compran. Sin estrategia de keywords con intención comercial, el tráfico es solo un número.',
        },
        {
          t: 'Decisiones sin medición',
          d: 'Reportes mensuales con likes y posiciones de keywords vanidosas. Lo importante — leads, ventas, MQLs — queda fuera del informe.',
        },
        {
          t: 'Técnica abandonada',
          d: 'Core Web Vitals rotos, datos estructurados ausentes, canónicas mal configuradas. Google penaliza lo que tu agencia no auditó.',
        },
      ],
    },
    process: {
      headline: 'Cómo trabajamos SEO en Antuario.',
      steps: [
        { n: '01', t: 'Auditoría técnica + competencia', d: 'Crawl completo, Core Web Vitals, schema, canonicals, indexación. Mapeo de competidores y oportunidad por keyword.' },
        { n: '02', t: 'Estrategia de keywords', d: 'Mapa de keywords con intención comercial e informacional. Prioridad por volumen × dificultad × valor de negocio.' },
        { n: '03', t: 'Contenido y autoridad', d: 'Pilares y clusters editoriales, optimización on-page, link building con relaciones reales — no granjas.' },
        { n: '04', t: 'Medición y ajuste', d: 'Reportes mensuales con posiciones, tráfico cualificado, leads generados y backlog de optimización siguiente.' },
      ],
    },
    deliverables: {
      headline: 'Qué incluye nuestro servicio de SEO.',
      items: [
        'Auditoría técnica completa con plan de remediación',
        'Investigación y mapeo de keywords (≥150 términos)',
        'Optimización on-page de páginas críticas',
        'Estrategia editorial mensual y producción de contenido',
        'Link building con relaciones editoriales reales',
        'Implementación de schema y datos estructurados',
        'Dashboard de posiciones, tráfico y conversiones',
        'Reuniones mensuales de revisión y ajuste',
      ],
    },
    cases: [
      { name: 'Acriland', slug: 'acriland' },
      { name: 'Aracnene', slug: 'aracnene' },
      { name: 'Métrica BTL', slug: 'metrica-btl' },
    ],
    faqs: [
      { q: '¿En cuánto tiempo veré resultados de SEO?', a: 'Los primeros movimientos en posiciones se ven entre 8 y 12 semanas. El tráfico cualificado y los leads orgánicos sostenidos llegan típicamente entre el mes 4 y el mes 6, y siguen creciendo a partir de ahí.' },
      { q: '¿Hacen SEO local para empresas en CDMX?', a: 'Sí. Optimizamos Google Business Profile, citas locales, schema LocalBusiness y contenido geo-segmentado para CDMX y otras plazas mexicanas.' },
      { q: '¿Qué tipo de empresas trabajan mejor con su servicio SEO?', a: 'Medianas y grandes empresas con un sitio web ya productivo y un equipo interno de marketing. Especialmente B2B de servicios profesionales, industria y SaaS.' },
      { q: '¿El SEO requiere un mínimo de meses?', a: 'Recomendamos ciclos de 6 meses como mínimo porque los movimientos significativos toman tiempo. Renovamos por trimestre con métricas de continuidad.' },
      { q: '¿Cómo miden el éxito del SEO?', a: 'Posiciones por cluster, tráfico orgánico cualificado, leads/MQLs orgánicos, conversiones asistidas por canal orgánico y autoridad de dominio.' },
    ],
    ctaTitle: '¿Buscas una agencia SEO',
    ctaHighlight: 'en CDMX o México?',
    ctaDescription:
      'Hagamos un diagnóstico SEO inicial sin costo. Te entregamos un mapa claro de oportunidades concretas para los próximos 90 días.',
  },

  'performance-ads': {
    slug: 'performance-ads',
    href: '/servicios/performance-ads',
    iconKey: 'target',
    accent: 'var(--cobalto-b)',
    eyebrow: 'Performance Ads · CDMX · México',
    title: 'Agencia de Google Ads y Performance Marketing',
    highlight: 'en CDMX.',
    metaTitle: 'Agencia de Google Ads y Performance Marketing en CDMX',
    metaDescription:
      'Agencia de Performance Ads en México. Google Ads, Meta y TikTok Ads optimizados para ROAS, CPA y CPL reales. Estrategia, creatividad y gestión continua.',
    keyword: 'agencia de Google Ads',
    tagline: 'Cada peso invertido tiene que regresar más caro.',
    description:
      'Operamos campañas de performance en Google Ads, Meta y TikTok para medianas y grandes empresas mexicanas. Cada euro invertido se mide contra ROAS, CPA y CPL — sin medias tintas, sin métricas de vanidad.',
    problem: {
      headline: 'Por qué la mayoría de las cuentas de Ads no rinde.',
      sub: 'Tres errores que vemos una y otra vez en auditorías.',
      points: [
        {
          t: 'Creatividad estática',
          d: 'La misma pieza durante meses — el algoritmo se cansa, el público se cansa, el CPA sube. Sin testing continuo, las campañas envejecen rápido.',
        },
        {
          t: 'Atribución equivocada',
          d: 'Atribución last-click oculta cuál canal aporta de verdad. Cuando todo se atribuye a Brand search, la inversión en prospecting se ve mal y se corta.',
        },
        {
          t: 'Optimización solo dentro de la plataforma',
          d: 'Pujar por CPC más bajo no resuelve nada si el funnel después convierte mal. Hay que mirar de la creatividad al cierre, no solo el click.',
        },
      ],
    },
    process: {
      headline: 'Cómo trabajamos Performance en Antuario.',
      steps: [
        { n: '01', t: 'Auditoría y estrategia', d: 'Auditoría de cuenta + competencia + benchmark. Definimos KPIs reales (ROAS, CAC, payback) y arquitectura de campañas.' },
        { n: '02', t: 'Setup técnico', d: 'GA4, GTM, conversiones API, audiencias, tracking server-side. Datos limpios antes de gastar el primer peso.' },
        { n: '03', t: 'Creatividad + lanzamiento', d: 'Producción de assets multivariante, copy estructurado por funnel, lanzamiento con test framework definido.' },
        { n: '04', t: 'Optimización continua', d: 'Análisis semanal, rotación creativa, ajustes de puja, escalamiento de winners y matanza disciplinada de losers.' },
      ],
    },
    deliverables: {
      headline: 'Qué incluye nuestro servicio de Performance Ads.',
      items: [
        'Auditoría técnica + estrategia de cuenta',
        'Setup completo de GA4, GTM y conversiones API',
        'Producción mensual de creatividades (estática + video)',
        'Gestión activa en Google Ads, Meta y TikTok',
        'Reportes semanales con métricas de negocio reales',
        'Dashboard live de ROAS, CPA, CPL y embudo',
        'Reunión semanal de optimización con tu equipo',
        'Audit creativo trimestral y refresh de estrategia',
      ],
    },
    cases: [
      { name: 'Maggadan', slug: 'maggadan' },
      { name: 'Reserva 27', slug: 'reserva-27' },
      { name: 'Somos Unno', slug: 'somos-unno' },
    ],
    faqs: [
      { q: '¿Cuál es el presupuesto mínimo recomendado?', a: 'Para que la operación tenga sentido y los datos sean estadísticamente accionables, recomendamos a partir de $80,000 MXN/mes en media inversion. Por debajo, la dispersión de datos limita la optimización.' },
      { q: '¿Trabajan con todos los canales o sólo Google?', a: 'Operamos Google Ads (Search, PMax, Display, YouTube), Meta (Facebook + Instagram) y TikTok Ads. Recomendamos el mix según donde esté tu cliente real, no donde sea más fácil.' },
      { q: '¿Cómo cobran? ¿Comisión sobre inversión o fee fijo?', a: 'Trabajamos con fee fijo mensual de gestión. La comisión sobre inversión genera incentivos perversos — preferimos que cobren más cuando haces escalar tu negocio, no cuando inflas el spend.' },
      { q: '¿Pueden trabajar con nuestro equipo creativo interno?', a: 'Sí. Si ya tienes equipo creativo, los integramos al briefing y feedback. Si no, producimos las piezas internamente con nuestro equipo de diseño y video.' },
      { q: '¿Cuánto tarda en estabilizarse una campaña nueva?', a: 'La fase de aprendizaje del algoritmo dura entre 2 y 4 semanas. Optimizaciones significativas empiezan a tener efecto a partir del mes 2.' },
    ],
    ctaTitle: '¿Buscas una agencia de Google Ads',
    ctaHighlight: 'en CDMX?',
    ctaDescription:
      'Te ofrecemos una auditoría inicial sin costo de tu cuenta de Ads. Detectamos en concreto qué está sangrando presupuesto y qué se puede optimizar en los primeros 30 días.',
  },

  'desarrollo-web': {
    slug: 'desarrollo-web',
    href: '/servicios/desarrollo-web',
    iconKey: 'code',
    accent: 'var(--glicina-b)',
    eyebrow: 'Desarrollo Web · CDMX · México',
    title: 'Agencia de desarrollo web profesional —',
    highlight: 'sitios que venden.',
    metaTitle: 'Agencia de desarrollo web profesional — sitios que venden',
    metaDescription:
      'Agencia de desarrollo web en CDMX. Sitios corporativos, landings y ecommerce optimizados para conversión, SEO técnico y performance — Next.js, React y arquitectura moderna.',
    keyword: 'agencia de desarrollo web',
    tagline: 'Webs rápidas, optimizadas y diseñadas para conversión.',
    description:
      'Construimos sitios corporativos, landings y plataformas ecommerce en stacks modernos (Next.js, React) optimizados para Core Web Vitals, SEO técnico y conversión real. Cada decisión técnica responde a un objetivo de negocio.',
    problem: {
      headline: 'Por qué la mayoría de los sitios web no vende.',
      sub: 'Tres patologías recurrentes en sitios corporativos.',
      points: [
        {
          t: 'Lentos en mobile',
          d: 'LCP de 5+ segundos, CLS visible, JS pesado sin code-splitting. Google penaliza, los usuarios se van antes de ver el primer CTA.',
        },
        {
          t: 'Optimización post-launch',
          d: 'Se diseñan para verse bonitos en Figma, no para convertir. Sin AB testing, sin seguimiento de embudo, sin iteración después del lanzamiento.',
        },
        {
          t: 'Imposibles de actualizar',
          d: 'Estructura rígida, CMS mal pensado, dependencias obsoletas. Cualquier cambio se vuelve un proyecto y la web envejece sin tocarla.',
        },
      ],
    },
    process: {
      headline: 'Cómo trabajamos Desarrollo Web en Antuario.',
      steps: [
        { n: '01', t: 'Discovery + arquitectura', d: 'Mapeo de objetivos de negocio, definición de embudo, arquitectura de información, sitemap SEO-first y prototipo Figma.' },
        { n: '02', t: 'Diseño UI + UX', d: 'Sistema de diseño escalable, prototipo navegable, validación con stakeholders y handoff técnico.' },
        { n: '03', t: 'Desarrollo + QA', d: 'Build en Next.js/React, optimización de Core Web Vitals, schema markup, tracking GA4/GTM y QA en mobile/desktop.' },
        { n: '04', t: 'Lanzamiento + iteración', d: 'Migración planificada, monitoreo post-launch y ciclo continuo de optimización con datos reales.' },
      ],
    },
    deliverables: {
      headline: 'Qué incluye nuestro servicio de Desarrollo Web.',
      items: [
        'Discovery y arquitectura de información SEO-first',
        'Sistema de diseño UI/UX en Figma',
        'Desarrollo en Next.js/React con TypeScript',
        'CMS headless o estructura editable',
        'Optimización Core Web Vitals (LCP, CLS, INP)',
        'Schema markup completo y SEO técnico on-page',
        'Setup de GA4, GTM y eventos de conversión',
        'Hosting, dominios, CDN y mantenimiento opcional',
      ],
    },
    cases: [
      { name: 'Acriland', slug: 'acriland-web' },
      { name: 'Aracnene', slug: 'aracnene' },
      { name: 'Magia Travel', slug: 'magia-travel' },
    ],
    faqs: [
      { q: '¿Cuánto cuesta un sitio web profesional?', a: 'Depende del alcance. Una landing optimizada arranca en $45,000 MXN; un sitio corporativo medio en $120,000-$280,000 MXN; un ecommerce con catálogo y pasarela en $250,000+ MXN. Cotizamos a la medida con scope acotado.' },
      { q: '¿Trabajan con WordPress o solo con Next.js?', a: 'Recomendamos Next.js + headless CMS para sitios corporativos por performance, SEO y mantenibilidad. Si tu equipo necesita seguir en WordPress, también lo construimos profesionalmente.' },
      { q: '¿Cuánto tarda un proyecto típico?', a: 'Una landing: 3-5 semanas. Un sitio corporativo: 8-12 semanas. Un ecommerce: 12-18 semanas. Los tiempos asumen disponibilidad razonable de tu equipo para feedback.' },
      { q: '¿El sitio queda en mis manos al final?', a: 'Siempre. El código es tuyo, el dominio es tuyo, los accesos son tuyos. No usamos amarres técnicos para retenerte como cliente.' },
      { q: '¿Pueden migrar mi sitio actual a uno nuevo?', a: 'Sí. Hacemos migraciones controladas con redirecciones 301 cuidadas, preservando SEO y posiciones existentes.' },
    ],
    ctaTitle: '¿Buscas una agencia de desarrollo web',
    ctaHighlight: 'profesional en CDMX?',
    ctaDescription:
      'Cuéntanos tu proyecto. Te entregamos una propuesta técnica con stack, scope y timeline en menos de una semana.',
  },

  'redes-sociales': {
    slug: 'redes-sociales',
    href: '/servicios/redes-sociales',
    iconKey: 'social',
    accent: 'var(--nectar-b)',
    eyebrow: 'Redes Sociales · CDMX · México',
    title: 'Agencia de redes sociales para empresas —',
    highlight: 'estrategia y producción.',
    metaTitle: 'Agencia de redes sociales para empresas — estrategia y producción',
    metaDescription:
      'Agencia de redes sociales en CDMX. Estrategia de contenidos, producción audiovisual, community management y reportes de performance bajo el mismo equipo.',
    keyword: 'agencia de redes sociales',
    tagline: 'Estrategia, contenido y producción bajo el mismo techo.',
    description:
      'Operamos redes sociales para empresas que necesitan presencia consistente y resultados medibles. Estrategia editorial, producción audiovisual profesional, community management y reportes que conectan engagement con negocio.',
    problem: {
      headline: 'Por qué las redes corporativas no funcionan.',
      sub: 'Tres síntomas que diagnosticamos cada semana.',
      points: [
        {
          t: 'Sin estrategia editorial',
          d: 'Publicaciones reactivas, sin pillar de contenido. Cada post compite consigo mismo y la marca pierde memorabilidad.',
        },
        {
          t: 'Producción de bajo costo',
          d: 'Stock fotos, plantillas Canva, edición rápida. La marca se ve igual a las 50 cuentas siguientes y no genera reconocimiento.',
        },
        {
          t: 'Métricas de vanidad',
          d: 'Reach, likes y followers como KPIs principales. Lo que importa — leads, ventas, recordación — no se mide ni se reporta.',
        },
      ],
    },
    process: {
      headline: 'Cómo trabajamos Redes Sociales en Antuario.',
      steps: [
        { n: '01', t: 'Estrategia + clusters', d: 'Investigación de audiencia, benchmark, definición de pillars editoriales y cadencia de publicación por canal.' },
        { n: '02', t: 'Producción audiovisual', d: 'Sesiones mensuales de foto y video con dirección de arte. Producción interna — sin stock, sin plantillas.' },
        { n: '03', t: 'Edición + publicación', d: 'Edición profesional, copy estratégico, programación, hashtags geo-relevantes y community management activo.' },
        { n: '04', t: 'Análisis + iteración', d: 'Reportes mensuales con métricas de negocio (no solo engagement), prueba de formatos, ajuste de pillars.' },
      ],
    },
    deliverables: {
      headline: 'Qué incluye nuestro servicio de Redes Sociales.',
      items: [
        'Estrategia editorial trimestral con pillars',
        'Sesión mensual de producción foto/video',
        'Edición profesional (Premiere, After Effects)',
        'Calendario de publicación con copy estratégico',
        'Community management hasta 24h respuesta',
        'Hashtags y SEO social geo-relevante',
        'Reportes mensuales con métricas de negocio',
        'Coordinación con campañas de Performance Ads',
      ],
    },
    cases: [
      { name: 'Maggadan', slug: 'maggadan' },
      { name: 'Reserva 27', slug: 'reserva-27' },
      { name: 'Somos Unno', slug: 'somos-unno' },
    ],
    faqs: [
      { q: '¿En qué redes sociales operan?', a: 'Instagram, TikTok, LinkedIn, Facebook y YouTube principalmente. La selección depende de dónde está tu audiencia real, no de moda.' },
      { q: '¿La producción es interna o subcontratada?', a: 'Producción audiovisual interna con nuestro equipo de fotógrafos y editores. Sin productoras externas, sin sorpresas en costos ni en tiempos.' },
      { q: '¿Cuántas publicaciones al mes incluye?', a: 'Depende del plan. Típicamente entre 12 y 30 piezas mensuales distribuidas entre canales, mezclando feed, reels, stories y carruseles.' },
      { q: '¿Hacen publicidad pagada también?', a: 'Sí, integrado con nuestro servicio de Performance Ads. La ventaja: el contenido orgánico y pagado salen del mismo equipo, con coherencia total.' },
      { q: '¿Pueden trabajar marcas en industrias regulables (salud, fintech)?', a: 'Sí. Tenemos experiencia en categorías sensibles y conocemos las restricciones de cada plataforma.' },
    ],
    ctaTitle: '¿Buscas una agencia de redes sociales',
    ctaHighlight: 'para tu empresa?',
    ctaDescription:
      'Cuéntanos qué objetivo persigues. Te diseñamos una propuesta editorial y de producción a la medida en menos de una semana.',
  },

  'diseno-creativo': {
    slug: 'diseno-creativo',
    href: '/servicios/diseno-creativo',
    iconKey: 'palette',
    accent: 'var(--rubor-b)',
    eyebrow: 'Diseño Creativo · CDMX · México',
    title: 'Agencia de branding y diseño creativo',
    highlight: 'en México.',
    metaTitle: 'Agencia de branding y diseño creativo en México',
    metaDescription:
      'Agencia de branding y diseño creativo en CDMX. Identidad visual, dirección de arte, sistemas de diseño y piezas para campaña — el lenguaje gráfico que sostiene tu marca.',
    keyword: 'agencia de branding y diseño',
    tagline: 'Identidad visual que diferencia a tu marca.',
    description:
      'Construimos identidades visuales y sistemas de diseño escalables para empresas que necesitan diferenciarse en mercados saturados. Branding, dirección de arte, packaging y piezas para campaña con coherencia editorial.',
    problem: {
      headline: 'Por qué el branding falla en empresas medianas.',
      sub: 'Tres síntomas que vemos cuando una marca pierde su lenguaje.',
      points: [
        {
          t: 'Identidad sin sistema',
          d: 'Un logo, dos colores, sin reglas. Cada pieza la diseña una persona distinta y la marca termina hablando en cinco voces.',
        },
        {
          t: 'Tendencia sobre estrategia',
          d: 'Rebranding cada 18 meses persiguiendo modas. Sin claim de identidad, la marca pierde memoria y memorabilidad.',
        },
        {
          t: 'Diseño desconectado del producto',
          d: 'El branding bonito en deck, mediocre en la web, pobre en empaque. El sistema no se ejecuta donde el cliente lo ve.',
        },
      ],
    },
    process: {
      headline: 'Cómo trabajamos Diseño Creativo en Antuario.',
      steps: [
        { n: '01', t: 'Estrategia de marca', d: 'Investigación de mercado, análisis competitivo, definición de territorio creativo y propuesta de personalidad visual.' },
        { n: '02', t: 'Sistema de identidad', d: 'Logo, paleta, tipografía, iconografía, ilustración, fotografía y reglas de aplicación. Brandbook completo.' },
        { n: '03', t: 'Aplicaciones críticas', d: 'Diseño de piezas estratégicas: web, presentaciones, papelería, social media templates, packaging.' },
        { n: '04', t: 'Activación + handoff', d: 'Capacitación a tu equipo interno, librería de assets en Figma o Adobe, soporte continuo opcional.' },
      ],
    },
    deliverables: {
      headline: 'Qué incluye nuestro servicio de Diseño Creativo.',
      items: [
        'Estrategia de marca y territorio creativo',
        'Identidad visual completa (logo + sistema)',
        'Brandbook editable en Figma',
        'Sistema de diseño escalable',
        'Plantillas para social, presentaciones y email',
        'Dirección de arte para campañas',
        'Diseño de packaging (si aplica)',
        'Capacitación al equipo interno',
      ],
    },
    cases: [
      { name: 'Reserva 27', slug: 'reserva-27' },
      { name: 'Somos Unno', slug: 'somos-unno' },
      { name: 'Maggadan', slug: 'maggadan' },
    ],
    faqs: [
      { q: '¿Solo hacen logos o sistemas completos?', a: 'Solo trabajamos sistemas de identidad completos. Un logo aislado no resuelve nada — la marca se construye con un sistema aplicado consistentemente en todos los puntos de contacto.' },
      { q: '¿Cuánto tarda un proyecto de branding?', a: 'Identidad completa: 8-14 semanas. Rebranding parcial: 4-8 semanas. Los tiempos incluyen rounds de feedback y validación con stakeholders.' },
      { q: '¿Pueden hacer rebranding sin perder reconocimiento?', a: 'Sí. Diseñamos transiciones graduales que conservan equity de marca mientras renuevan el sistema visual. La continuidad es parte del briefing.' },
      { q: '¿Trabajan packaging físico también?', a: 'Sí, especialmente para categorías como gourmet, retail y fashion. Coordinamos también con imprentas y proveedores si lo necesitas.' },
      { q: '¿Cómo cobran un proyecto de identidad?', a: 'Fee fijo por proyecto con scope acotado y entregables definidos. Sin sorpresas, sin "rounds extras" facturados después.' },
    ],
    ctaTitle: '¿Buscas una agencia de branding y diseño',
    ctaHighlight: 'en México?',
    ctaDescription:
      'Cuéntanos en qué momento está tu marca. Te entregamos una propuesta con territorio creativo y plan de trabajo en menos de dos semanas.',
  },

  software: {
    slug: 'software',
    href: '/servicios/software',
    iconKey: 'cpu',
    accent: 'var(--laguna-b)',
    eyebrow: 'Software · CDMX · México',
    title: 'Software a la medida —',
    highlight: 'CRM, integraciones y automatización.',
    metaTitle: 'Software a la medida — CRM, integraciones y automatización',
    metaDescription:
      'Software a la medida para empresas mexicanas. CRM, integraciones API, automatización de procesos y dashboards de BI bajo arquitectura moderna y mantenible.',
    keyword: 'software a la medida para empresas',
    tagline: 'Sistemas que aceleran tu operación.',
    description:
      'Construimos software interno para empresas que ya no caben en hojas de cálculo o herramientas genéricas. CRMs ad hoc, integraciones entre sistemas, automatizaciones de procesos y dashboards de BI con arquitectura mantenible.',
    problem: {
      headline: 'Por qué los SaaS genéricos terminan estorbando.',
      sub: 'Tres síntomas claros de que tu operación necesita software propio.',
      points: [
        {
          t: 'Procesos forzados al SaaS',
          d: 'Tu equipo pasa más tiempo adaptando el flujo al CRM que trabajando con él. Los flujos importantes terminan en spreadsheets paralelos.',
        },
        {
          t: 'Datos desconectados',
          d: 'Cada herramienta vive en su silo: CRM en uno, marketing en otro, finanzas en otro. Reportes consolidados toman días y siguen siendo aproximados.',
        },
        {
          t: 'Costos que escalan mal',
          d: 'Licencias por usuario que crecen con el equipo, addons que se vuelven indispensables, vendor lock-in que encarece todo.',
        },
      ],
    },
    process: {
      headline: 'Cómo trabajamos Software a la medida en Antuario.',
      steps: [
        { n: '01', t: 'Discovery operativo', d: 'Mapeo de procesos actuales, fricciones y métricas. Identificamos qué construir interno y qué dejar en SaaS.' },
        { n: '02', t: 'Arquitectura + prototipo', d: 'Stack técnico, modelo de datos, integraciones, prototipo navegable y validación con usuarios clave.' },
        { n: '03', t: 'Desarrollo iterativo', d: 'Sprints quincenales, releases tempranos, feedback continuo con tu equipo operativo.' },
        { n: '04', t: 'Despliegue + mantenimiento', d: 'Migración de datos, capacitación, monitoreo y mantenimiento mensual con SLA acordado.' },
      ],
    },
    deliverables: {
      headline: 'Qué incluye nuestro servicio de Software.',
      items: [
        'Discovery operativo y arquitectura técnica',
        'Stack moderno (TypeScript, Next.js, PostgreSQL)',
        'Integraciones API con tus sistemas actuales',
        'Sistema de roles y permisos',
        'Dashboards y reportes a la medida',
        'Despliegue en cloud (Vercel, AWS, GCP)',
        'Documentación técnica y manual de usuario',
        'Mantenimiento y SLA mensual',
      ],
    },
    cases: [
      { name: 'Acriland', slug: 'acriland-web' },
      { name: 'Métrica BTL', slug: 'metrica-btl' },
      { name: 'Aracnene', slug: 'aracnene' },
    ],
    faqs: [
      { q: '¿Cuándo conviene software a la medida sobre un SaaS?', a: 'Cuando tu proceso es lo suficientemente único como para que ningún SaaS lo cubra bien, cuando el costo acumulado de licencias supera el desarrollo, o cuando los datos integrados son ventaja competitiva.' },
      { q: '¿Qué stack técnico usan?', a: 'Stack moderno y mantenible: TypeScript + Next.js para frontend, Node.js o Python para backend, PostgreSQL/Supabase para datos. Cloud en Vercel, AWS o GCP según el caso.' },
      { q: '¿El código queda en mis manos?', a: 'Siempre. El repo, los servidores y los datos son tuyos. Documentamos para que cualquier desarrollador pueda continuarlo.' },
      { q: '¿Cuánto tarda un proyecto?', a: 'Un MVP funcional típicamente 8-16 semanas. Sistemas más completos 4-8 meses. Trabajamos en sprints quincenales con releases tempranos.' },
      { q: '¿Pueden integrar el software con mi CRM o ERP actual?', a: 'Sí. Hacemos integraciones API con HubSpot, Salesforce, Microsoft Dynamics, SAP, Odoo y otros. Si la API no existe, construimos la capa de integración.' },
    ],
    ctaTitle: '¿Necesitas software a la medida',
    ctaHighlight: 'para tu empresa?',
    ctaDescription:
      'Cuéntanos qué proceso te está estorbando. Te entregamos un diagnóstico técnico y propuesta de arquitectura sin costo.',
  },

  'inteligencia-artificial': {
    slug: 'inteligencia-artificial',
    href: '/servicios/inteligencia-artificial',
    iconKey: 'ai',
    accent: 'var(--cobalto-b)',
    eyebrow: 'Inteligencia Artificial · CDMX · México',
    title: 'Agencia de Inteligencia Artificial —',
    highlight: 'agentes, LLMs, automatización.',
    metaTitle: 'Agencia de Inteligencia Artificial — agentes, LLMs, automatización',
    metaDescription:
      'Agencia de inteligencia artificial en CDMX. Implementamos agentes de WhatsApp y voz, LLMs a la medida, automatizaciones inteligentes e IA generativa para empresas mexicanas.',
    keyword: 'agencia de inteligencia artificial',
    tagline: 'IA aplicada — operación, marketing y producto.',
    description:
      'No hablamos de IA, la implementamos. Construimos agentes conversacionales, LLMs ajustados a tu negocio, automatizaciones inteligentes y pipelines de IA generativa que escalan tu operación sin escalar costos.',
    problem: {
      headline: 'Por qué la IA en empresas suele quedarse en POC.',
      sub: 'Tres errores comunes que separan los proyectos de IA reales del PowerPoint.',
      points: [
        {
          t: 'Demos sin caso de negocio',
          d: 'Se construyen prototipos vistosos sin entender qué problema resuelven ni cuánto valen. Quedan bonitos en demos y nunca en producción.',
        },
        {
          t: 'Modelos sin contexto',
          d: 'Implementaciones de ChatGPT genérico sin RAG, sin knowledge base interna, sin guardrails. Resultados genéricos que no aprovechan datos propios.',
        },
        {
          t: 'Sin métricas, sin gobierno',
          d: 'Sin medición de costos por interacción, sin monitoreo de drift, sin estrategia de evals. La IA crece descontrolada en costo y baja en calidad.',
        },
      ],
    },
    process: {
      headline: 'Cómo trabajamos Inteligencia Artificial en Antuario.',
      steps: [
        { n: '01', t: 'Caso de uso + ROI', d: 'Identificamos procesos donde la IA aporta valor medible. Definimos métricas, costos esperados y umbral de retorno.' },
        { n: '02', t: 'Arquitectura técnica', d: 'Selección de modelos (Claude, GPT, modelos open source), RAG, vector DB, guardrails y arquitectura de evals.' },
        { n: '03', t: 'Implementación + integración', d: 'Build del agente o sistema, integración con WhatsApp, CRM, ERP o tus canales propios.' },
        { n: '04', t: 'Operación + optimización', d: 'Monitoreo de costos, evals continuos, ajustes de prompt, fine-tuning si aplica.' },
      ],
    },
    deliverables: {
      headline: 'Qué incluye nuestro servicio de IA.',
      items: [
        'Discovery + caso de uso con ROI cuantificado',
        'Agentes conversacionales en WhatsApp y voz',
        'Implementación RAG con tu base de conocimiento',
        'LLMs ajustados (prompt engineering + fine-tuning)',
        'Automatizaciones inteligentes con n8n / Zapier / código',
        'Pipelines de IA generativa (texto, imagen, video)',
        'Monitoreo de costos y evals continuos',
        'Gobierno de datos y guardrails de seguridad',
      ],
    },
    cases: [
      { name: 'Acriland', slug: 'acriland-web' },
      { name: 'Métrica BTL', slug: 'metrica-btl' },
      { name: 'Reserva 27', slug: 'reserva-27' },
    ],
    faqs: [
      { q: '¿Qué modelos de IA usan?', a: 'Trabajamos con Claude (Anthropic), GPT (OpenAI), Gemini (Google) y modelos open source (Llama, Mistral, Qwen) según el caso. La selección depende de calidad, costo y latencia.' },
      { q: '¿Cuánto cuesta un agente de WhatsApp con IA?', a: 'Setup arranca en $80,000 MXN según complejidad. Operación mensual depende del volumen — típicamente entre $0.10 y $1.20 por conversación atendida, mucho menor que el costo humano equivalente.' },
      { q: '¿Mis datos son seguros con LLMs?', a: 'Trabajamos con APIs enterprise (Anthropic, OpenAI, Azure OpenAI) que garantizan no usar tus datos para entrenar modelos. Para datos sensibles podemos desplegar modelos open source en tu infraestructura.' },
      { q: '¿Cuánto tarda un proyecto de IA en producción?', a: 'Un agente WhatsApp con RAG: 4-8 semanas. Una automatización inteligente: 2-6 semanas. Sistemas más complejos con fine-tuning: 8-16 semanas.' },
      { q: '¿Pueden integrar IA con mi CRM existente?', a: 'Sí. Integramos con HubSpot, Salesforce, Pipedrive y CRMs propietarios vía API. La IA actúa sobre tu base de datos sin reemplazarla.' },
    ],
    ctaTitle: '¿Quieres aplicar IA',
    ctaHighlight: 'en tu negocio?',
    ctaDescription:
      'Cuéntanos qué proceso quieres acelerar. Diseñamos un piloto con caso de uso claro y ROI estimado en menos de dos semanas.',
  },
}

export const SERVICE_LIST = Object.values(SERVICES)
