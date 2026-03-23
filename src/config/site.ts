export const siteConfig = {
  name: 'Antuario',
  tagline: 'Plataforma de Inteligencia Comercial',
  description:
    'Plataforma de Inteligencia Comercial para empresas de servicios B2B en México. Dashboard propio, Agentes de IA y Agencia Digital integrados en un solo ecosistema.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://antuario.mx',
  email: 'hola@antuario.mx',
  phone: '',
  whatsapp: 'https://wa.me/5215512345678?text=Hola%2C%20me%20interesa%20un%20diagn%C3%B3stico%20gratuito',
  address: 'México',
  social: {
    linkedin: 'https://linkedin.com/company/antuario',
    instagram: 'https://instagram.com/antuario.mx',
  },
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Agente CIA', href: '/agente-cia' },
    { label: 'Agencia', href: '/agencia' },
  ],
} as const
