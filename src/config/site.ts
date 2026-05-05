export const siteConfig = {
  name: 'Antuario',
  tagline: 'Agencia de Generación de Demanda Digital',
  description:
    'Construimos y operamos tu sistema completo de captación digital: web, SEO, Google Ads, Dashboard y optimización continua. Para empresas de servicios B2B en México.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://antuario.mx',
  email: 'hola@antuario.mx',
  phone: '',
  whatsapp: 'https://wa.me/5215512345678?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Antuario',
  dashboardUrl: 'https://dashboard.antuario.mx',
  address: 'México',
  social: {
    linkedin: 'https://linkedin.com/company/antuario',
    instagram: 'https://instagram.com/antuario.mx',
  },
  // Main navigation (header)
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Cómo Trabajamos', href: '/como-trabajamos' },
    { label: 'Resultados', href: '/resultados' },
    { label: 'Diagnóstico Gratuito', href: '/diagnostico' },
  ],
  // Footer navigation (all pages)
  footerNav: [
    { label: 'Inicio', href: '/' },
    { label: 'Cómo Trabajamos', href: '/como-trabajamos' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Agente IA', href: '/agente-ia' },
    { label: 'Resultados', href: '/resultados' },
    { label: 'Diagnóstico Gratuito', href: '/diagnostico' },
  ],
} as const
