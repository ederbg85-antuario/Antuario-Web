export type CaseData = {
  slug: string
  name: string
  imageSrc: string
  imageAlt: string
  industry: string
  tagline: string
  services: string[]
  servicesSlug: string[]
  year: string
  metaTitle: string
  metaDescription: string
  hero: { eyebrow: string; title: string; highlight: string; description: string }
  challenge: { headline: string; body: string }
  strategy: { headline: string; pillars: { t: string; d: string }[] }
  metrics: { label: string; value: string; delta: string }[]
  results: { headline: string; body: string }
  detail?: boolean
}

export const CASES: Record<string, CaseData> = {
  'acriland-desarrollo-web-seo': {
    slug: 'acriland-desarrollo-web-seo',
    name: 'Acriland',
    imageSrc: '/portfolio/acriland-desarrollo-web-seo.jpg',
    imageAlt: 'Acriland — caso de éxito de desarrollo web y posicionamiento SEO industrial con Antuario, agencia de marketing digital en CDMX.',
    industry: 'Industria · Fabricación de acrílico',
    tagline: 'Cómo un fabricante de acrílico convirtió el 100% de su demanda en orgánica.',
    services: ['Desarrollo Web', 'SEO', 'Software a la medida'],
    servicesSlug: ['desarrollo-web', 'seo', 'software'],
    year: '2022—2026',
    metaTitle: 'Caso Acriland — desarrollo web y SEO industrial | Antuario',
    metaDescription:
      'Caso de éxito Acriland: cómo Antuario llevó a un fabricante mexicano de acrílico a una demanda 100% orgánica con desarrollo web, posicionamiento SEO y software a la medida. Más de 33,000 sesiones, 1.25M de impresiones y presencia en Google, ChatGPT y redes — medible y transparente.',
    hero: {
      eyebrow: 'Caso de éxito · Acriland · Industria del acrílico',
      title: 'Caso Acriland —',
      highlight: 'cómo el desarrollo web y el SEO volvieron su demanda 100% orgánica.',
      description:
        'Desde 2022, Antuario rediseñó la marca, el sitio y el sistema comercial de Acriland, un fabricante mexicano de acrílico. Construimos posicionamiento orgánico, ecommerce, software a la medida y contenido de marca — hasta que la demanda dejó de depender de la pauta y pasó a ser 100% orgánica, medible y trazable.',
    },
    challenge: {
      headline: 'El reto: una empresa capaz que nadie encontraba en Google.',
      body: 'Antes de Antuario, Acriland operaba con métodos anticuados y poco eficientes: una web heredada, dependencia de publicidad pagada y unas redes sociales que no transmitían la capacidad real de la empresa. Tenían equipo, maquinaria e instalaciones para fabricar prácticamente cualquier proyecto en acrílico — pero no lo comunicaban. En una categoría técnica como la fabricación de acrílico, los compradores B2B investigan antes de contactar: comparan proveedores, revisan la web y validan en redes sociales. Acriland no aparecía en esa búsqueda, y quienes los encontraban dudaban de si eran una empresa seria. El reto era doble: construir presencia orgánica medible en Google y, al mismo tiempo, transmitir el profesionalismo que ya existía puertas adentro.',
    },
    strategy: {
      headline: 'La estrategia: marca, web, SEO, software y contenido — bajo una sola dirección.',
      pillars: [
        { t: 'Marca y desarrollo web', d: 'Desarrollamos su identidad y un sitio en arquitectura optimizada para CTR, con ecommerce, fichas de producto y schema markup que transmiten profesionalismo y convierten.' },
        { t: 'Posicionamiento SEO orgánico', d: 'Construimos el SEO técnico y de contenido que posicionó a Acriland en Google hasta superar por completo a la demanda pagada.' },
        { t: 'Software a la medida (CRM)', d: 'Implementamos un sistema fullstack con CRM, bandeja unificada de canales, pipelines, informes e indicadores de todo el embudo comercial.' },
        { t: 'Contenido y presencia en IA', d: 'Producción de contenido orgánico para redes y posicionamiento de marca que hoy aparece también en buscadores de IA como ChatGPT y Gemini.' },
      ],
    },
    metrics: [
      { label: 'Demanda orgánica', value: '100%', delta: 'sin pauta' },
      { label: 'Sesiones del sitio', value: '+8,787%', delta: 'vs. baseline' },
      { label: 'Clics desde Google', value: '16.8 mil', delta: 'Search Console' },
      { label: 'Impresiones en búsqueda', value: '1.25 M', delta: 'posición media 7.4' },
    ],
    results: {
      headline: 'Resultado: una demanda que nunca duerme y es 100% orgánica.',
      body: 'Hoy el 100% de la demanda de Acriland es orgánica — principalmente por posicionamiento SEO en Google — y nunca duerme. La demanda orgánica superó por completo a la que antes recibían por campañas pagadas, al punto de que tuvieron que crecer su equipo comercial interno y operativo para poder abastecerla. Ya no dependen de pauta ni invierten en publicidad: aparecen en Google, en redes sociales y cada vez más en buscadores de inteligencia artificial como ChatGPT y Gemini. Y las ventas siguen creciendo año con año. Todo se mide y todo se mejora — porque cada líder del proyecto es responsable de un número concreto y opera con un sistema 100% transparente.',
    },
    detail: true,
  },

  maggadan: {
    slug: 'maggadan',
    name: 'Maggadan',
    imageSrc: '/portfolio/maggadan-marketing-digital.jpg',
    imageAlt: 'Maggadan — caso de éxito de marketing digital y performance ads con Antuario.',
    industry: 'Retail · Fashion masculino',
    tagline: 'Cómo una marca de boxers escaló de regional a nacional en 9 meses.',
    services: ['Performance Ads', 'Redes Sociales', 'Diseño Creativo'],
    servicesSlug: ['performance-ads', 'redes-sociales', 'diseno-creativo'],
    year: '2026',
    metaTitle: 'Caso Maggadan — cómo performance ads escalaron una marca de retail',
    metaDescription:
      'Caso de éxito Maggadan: una marca mexicana de ropa interior masculina escaló de regional a nacional con un sistema integrado de performance ads, redes sociales y producción creativa.',
    hero: {
      eyebrow: 'Caso · Maggadan · Retail',
      title: 'Maggadan —',
      highlight: 'de regional a nacional en nueve meses.',
      description:
        'Cómo Antuario operó performance ads, producción creativa y redes sociales para que una marca de fashion masculino mexicana escalara su presencia y sus ventas de manera medible.',
    },
    challenge: {
      headline: 'El reto: escalar sin perder margen.',
      body: 'Maggadan tenía un producto fuerte y reconocimiento local, pero su canal digital no estaba escalando. Las campañas anteriores generaban ventas pero el CPA subía con cada incremento de presupuesto, comiéndose el margen. La marca necesitaba un sistema que escalara con disciplina y mantuviera la rentabilidad por unidad.',
    },
    strategy: {
      headline: 'La estrategia: creatividad sistemática + atribución limpia.',
      pillars: [
        { t: 'Setup técnico riguroso', d: 'Implementamos conversiones API server-side, GA4 con embudo completo y dashboards conectados al sistema de tienda online.' },
        { t: 'Producción creativa mensual', d: 'Sesiones mensuales de foto y video con dirección de arte. Stock de 40+ assets por trimestre para rotar continuamente.' },
        { t: 'Performance en 3 plataformas', d: 'Mix de Meta, Google Ads y TikTok con audiencias diferenciadas. Testing creativo semanal con framework AB.' },
        { t: 'Redes sociales orgánicas', d: 'Calendario coordinado con campañas pagadas para amplificar lo que ya funciona y reducir creative fatigue.' },
      ],
    },
    metrics: [
      { label: 'Inversión anual', value: '+340%', delta: 'YoY' },
      { label: 'Ventas atribuidas', value: '+412%', delta: 'YoY' },
      { label: 'ROAS promedio', value: '4.8×', delta: 'estable' },
      { label: 'CPA blendeado', value: '-22%', delta: 'vs. año anterior' },
    ],
    results: {
      headline: 'Resultado: escala con disciplina, no con desespero.',
      body: 'Maggadan creció 4× su inversión publicitaria y casi 5× sus ventas mientras bajó el CPA blendeado. La marca pasó de operar en 4 estados a tener presencia digital activa en toda la República, con un sistema creativo sostenible y un equipo interno que entiende cada métrica del dashboard.',
    },
    detail: true,
  },

  'reserva-27': {
    slug: 'reserva-27',
    name: 'Reserva 27',
    imageSrc: '/portfolio/reserva-27-marketing-digital.jpg',
    imageAlt: 'Reserva 27 — caso de éxito de marketing digital en hospitality con Antuario.',
    industry: 'Hospitality · Hotelería boutique',
    tagline: 'Cómo un hotel boutique llenó temporada baja con marketing directo.',
    services: ['Performance Ads', 'Redes Sociales', 'Desarrollo Web'],
    servicesSlug: ['performance-ads', 'redes-sociales', 'desarrollo-web'],
    year: '2026',
    metaTitle: 'Caso Reserva 27 — cómo marketing digital llenó temporada baja',
    metaDescription:
      'Caso de éxito Reserva 27: un hotel boutique mexicano subió 38 puntos su ocupación en temporada baja con un sistema integrado de Performance Ads, redes sociales y website renovado.',
    hero: {
      eyebrow: 'Caso · Reserva 27 · Hospitality',
      title: 'Reserva 27 —',
      highlight: 'llenar la temporada baja.',
      description:
        'Cómo Antuario diseñó la estrategia digital de un hotel boutique mexicano para incrementar reservas directas en temporada baja sin sacrificar tarifa promedio.',
    },
    challenge: {
      headline: 'El reto: depender menos de OTAs.',
      body: 'Reserva 27 generaba el 78% de sus reservas a través de OTAs (Booking, Expedia, Airbnb), pagando comisiones del 15-22% en cada noche. En temporada baja, la dependencia se sentía aún más en margen. Necesitábamos un canal directo eficiente que llenara baja temporada sin canibalizar tarifa.',
    },
    strategy: {
      headline: 'La estrategia: canal directo + storytelling visual.',
      pillars: [
        { t: 'Nuevo sitio con reservas directas', d: 'Sitio rediseñado con motor de reservas optimizado, schema Hotel, fotografía profesional y disparadores de conversión claros.' },
        { t: 'Performance ads por temporada', d: 'Campañas estacionales en Google Ads y Meta segmentadas por mercado emisor (CDMX, Monterrey, Guadalajara, US/Texas).' },
        { t: 'Producción audiovisual', d: 'Sesiones de fotografía y video mensuales con narrativa de marca. Reels y stories estratégicas para Instagram + TikTok.' },
        { t: 'Email + retargeting', d: 'Pipeline de retargeting para huéspedes pasados con ofertas de baja temporada y email marketing automatizado.' },
      ],
    },
    metrics: [
      { label: 'Ocupación temp. baja', value: '+38pts', delta: 'YoY' },
      { label: 'Reservas directas', value: '54%', delta: '+32pts vs. baseline' },
      { label: 'ADR (tarifa promedio)', value: '+12%', delta: 'sostenida' },
      { label: 'Comisión OTA / noche', value: '-38%', delta: 'ahorrada' },
    ],
    results: {
      headline: 'Resultado: independencia del canal indirecto.',
      body: 'Reserva 27 cambió su dependencia: ahora más de la mitad de las reservas entran directo por su web, con tarifa promedio más alta y sin comisión OTA. La temporada baja se llenó sin descuentar fuerte, y el equipo del hotel tiene visibilidad mensual sobre rendimiento, mix de canales y proyección.',
    },
    detail: true,
  },

  aracnene: {
    slug: 'aracnene',
    name: 'Aracnene',
    imageSrc: '/portfolio/aracnene-desarrollo-web-seo.jpg',
    imageAlt: 'Aracnene — caso de éxito de desarrollo web y posicionamiento SEO con Antuario.',
    industry: 'Industria · Equipamiento técnico',
    tagline: 'Renovación de plataforma + SEO técnico para B2B industrial.',
    services: ['Desarrollo Web', 'SEO'],
    servicesSlug: ['desarrollo-web', 'seo'],
    year: '2026',
    metaTitle: 'Caso Aracnene — renovación web y SEO B2B industrial',
    metaDescription: 'Caso Aracnene: rediseño web + SEO técnico para una empresa B2B industrial mexicana.',
    hero: { eyebrow: '', title: '', highlight: '', description: '' },
    challenge: { headline: '', body: '' },
    strategy: { headline: '', pillars: [] },
    metrics: [],
    results: { headline: '', body: '' },
  },
  'magia-travel': {
    slug: 'magia-travel',
    name: 'Magia Travel',
    imageSrc: '/portfolio/magia-travel-desarrollo-web.jpg',
    imageAlt: 'Magia Travel — caso de éxito de desarrollo web turístico con Antuario.',
    industry: 'Turismo · Travel agency',
    tagline: 'Plataforma de reservas a la medida para tours mexicanos.',
    services: ['Desarrollo Web'],
    servicesSlug: ['desarrollo-web'],
    year: '2026',
    metaTitle: 'Caso Magia Travel — plataforma de reservas turísticas',
    metaDescription: 'Caso Magia Travel: desarrollo web turístico a la medida.',
    hero: { eyebrow: '', title: '', highlight: '', description: '' },
    challenge: { headline: '', body: '' },
    strategy: { headline: '', pillars: [] },
    metrics: [],
    results: { headline: '', body: '' },
  },
  'metrica-btl': {
    slug: 'metrica-btl',
    name: 'Métrica BTL',
    imageSrc: '/portfolio/metrica-btl-desarrollo-web-seo.jpg',
    imageAlt: 'Métrica BTL — caso de éxito de desarrollo web y SEO B2B con Antuario.',
    industry: 'Agencia BTL · Activaciones',
    tagline: 'Sitio corporativo + SEO B2B para agencia de activaciones.',
    services: ['Desarrollo Web', 'SEO'],
    servicesSlug: ['desarrollo-web', 'seo'],
    year: '2026',
    metaTitle: 'Caso Métrica BTL — sitio corporativo y SEO B2B',
    metaDescription: 'Caso Métrica BTL: rediseño web + SEO para agencia BTL.',
    hero: { eyebrow: '', title: '', highlight: '', description: '' },
    challenge: { headline: '', body: '' },
    strategy: { headline: '', pillars: [] },
    metrics: [],
    results: { headline: '', body: '' },
  },
  'somos-unno': {
    slug: 'somos-unno',
    name: 'Somos Unno',
    imageSrc: '/portfolio/somos-unno-marketing-digital.jpg',
    imageAlt: 'Somos Unno — caso de éxito de marketing digital en alimentos gourmet con Antuario.',
    industry: 'Food · Gourmet',
    tagline: 'Marketing digital para marca gourmet emergente.',
    services: ['Marketing Digital', 'Redes Sociales'],
    servicesSlug: ['performance-ads', 'redes-sociales'],
    year: '2026',
    metaTitle: 'Caso Somos Unno — marketing digital para alimentos gourmet',
    metaDescription: 'Caso Somos Unno: marketing digital para marca de alimentos gourmet.',
    hero: { eyebrow: '', title: '', highlight: '', description: '' },
    challenge: { headline: '', body: '' },
    strategy: { headline: '', pillars: [] },
    metrics: [],
    results: { headline: '', body: '' },
  },
}

export const CASE_LIST = Object.values(CASES)
export const DETAILED_CASES = CASE_LIST.filter((c) => c.detail)
