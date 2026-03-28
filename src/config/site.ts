export const siteConfig = {
  name: 'Antuario',
  tagline: 'Plataforma de Inteligencia Comercial',
  description:
    'Plataforma de Inteligencia Comercial para empresas de servicios B2B en México. Dashboard propio, Agentes de IA y Agencia Digital integrados en un solo ecosistema.',
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
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Agente IA', href: '/agente-ia' },
    { label: 'Agencia', href: '/agencia' },
  ],
} as const
