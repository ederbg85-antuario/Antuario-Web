/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      // Consolidación del caso Acriland — preserva enlaces antiguos (301)
      { source: '/casos/acriland', destination: '/casos/acriland-desarrollo-web-seo', permanent: true },
      { source: '/casos/acriland-web', destination: '/casos/acriland-desarrollo-web-seo', permanent: true },
      // Consolidación del caso Métrica BTL — slug con keyword (301)
      { source: '/casos/metrica-btl', destination: '/casos/metrica-btl-desarrollo-web-seo', permanent: true },
      // Consolidación del caso Reserva 27 — slug con keyword (301)
      { source: '/casos/reserva-27', destination: '/casos/reserva-27-desarrollo-web-agente-ia', permanent: true },
      // Consolidación del caso Somos Unno — slug con keyword (301)
      { source: '/casos/somos-unno', destination: '/casos/somos-unno-redes-sociales-meta-ads', permanent: true },
    ]
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
}

export default nextConfig
