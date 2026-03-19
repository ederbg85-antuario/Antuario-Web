export const siteConfig = {
  name: 'Antuario',
  tagline: 'Agencia de Crecimiento Comercial',
  description:
    'Combinamos IA, marketing, estrategia de ventas y nuestra propia plataforma para que tu área comercial funcione con números claros, resultados reales y total transparencia.',
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
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Activos', href: '#activos' },
    { label: 'IA', href: '#ia' },
    { label: 'Plataforma', href: '#plataforma' },
    { label: 'Contacto', href: '#contacto' },
  ],
} as const
