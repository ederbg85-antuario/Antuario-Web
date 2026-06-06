export const siteConfig = {
  name: 'Antuario',
  tagline: 'Agencia de Marketing Digital en CDMX y México',
  description:
    'Antuario es una agencia de marketing digital en CDMX. Diseñamos soluciones de marketing digital a la medida — con accountability, datos y estrategia bajo una sola dirección.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://antuario.mx',
  email: 'hola@antuario.mx',
  phone: '+52 55 1192 7007',
  whatsapp:
    'https://wa.me/5215511927007?text=Hola%2C%20tengo%20un%20proyecto%20y%20me%20gustar%C3%ADa%20una%20propuesta%20de%20Antuario.',
  dashboardUrl: 'https://dashboard.antuario.mx',
  address: 'México',
  social: {
    linkedin: 'https://linkedin.com/company/antuario',
    instagram: 'https://instagram.com/antuario.mx',
  },

  // Servicios — usados también para el menú desplegable
  services: [
    { label: 'Performance Ads', href: '/servicios/performance-ads', short: 'Google · Meta · TikTok' },
    { label: 'SEO', href: '/servicios/seo', short: 'Posicionamiento orgánico' },
    { label: 'Redes Sociales', href: '/servicios/redes-sociales', short: 'Estrategia y producción' },
    { label: 'Diseño Creativo', href: '/servicios/diseno-creativo', short: 'Branding y dirección de arte' },
    { label: 'Desarrollo Web', href: '/servicios/desarrollo-web', short: 'Sitios, landings, ecommerce' },
    { label: 'Software a la medida', href: '/servicios/software', short: 'CRM, integraciones, automatización' },
    { label: 'Inteligencia Artificial', href: '/servicios/inteligencia-artificial', short: 'Agentes, LLMs, IA generativa' },
    { label: 'Consultoría', href: '/servicios/consultoria', short: 'Estrategia y desarrollo de proyecto' },
  ],

  // Main navigation (header)
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Casos', href: '/casos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
  ],

  // Footer navigation (all pages)
  footerNav: [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Casos', href: '/casos' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Cuéntanos tu proyecto', href: '/contacto' },
  ],
} as const
