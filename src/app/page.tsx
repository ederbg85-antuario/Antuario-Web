'use client'

import { motion } from 'framer-motion'
import { ArrowRight, LayoutDashboard, Bot, Globe, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import MeshGradientBg from '@/components/common/MeshGradientBg'
import Logo from '@/components/common/Logo'

// ─── Data ───────────────────────────────────────────────────────────────────

const products = [
  {
    href: '/dashboard',
    badge: 'Plataforma propia',
    badgeColor: 'bg-antuario-cyan-soft text-antuario-cyan',
    icon: LayoutDashboard,
    iconColor: 'text-antuario-cyan',
    iconBg: 'bg-antuario-cyan-soft',
    accentColor: 'from-antuario-cyan/20 to-transparent',
    borderHover: 'hover:border-antuario-cyan/25',
    title: 'Antuario Dashboard',
    subtitle: 'La visión completa de tu área comercial',
    description:
      'Una plataforma web propia que centraliza toda tu operación comercial en una sola pantalla: CRM, métricas de marketing, ventas, objetivos y más. Sin complejidad, sin herramientas sueltas.',
    features: [
      'Visión Maestra del embudo en tiempo real',
      'CRM con bandeja de entrada unificada',
      'Integración con Google Analytics, Ads y Search Console',
      'Objetivos, proyectos y KPIs en un solo lugar',
    ],
    cta: 'Explorar Dashboard',
  },
  {
    href: '/agente-cia',
    badge: 'Inteligencia Artificial',
    badgeColor: 'bg-antuario-purple-soft text-antuario-purple',
    icon: Bot,
    iconColor: 'text-antuario-purple',
    iconBg: 'bg-antuario-purple-soft',
    accentColor: 'from-antuario-purple/20 to-transparent',
    borderHover: 'hover:border-antuario-purple/25',
    title: 'Agente CIA',
    subtitle: 'Calificación e investigación de leads automatizada',
    description:
      'Un agente de IA integrado directamente en tu bandeja de entrada que atiende, califica e investiga cada lead antes de pasarlo a tu equipo de ventas. Sin trabajo operativo, sin leads basura.',
    features: [
      'Atiende WhatsApp y correo automáticamente',
      'Identifica si el lead es relevante para tu negocio',
      'Investiga la empresa del prospecto en internet',
      'Entrega a ventas solo leads calificados y preparados',
    ],
    cta: 'Explorar Agente CIA',
  },
  {
    href: '/agencia',
    badge: 'Servicio completo',
    badgeColor: 'bg-antuario-green-soft text-antuario-green-dark',
    icon: Globe,
    iconColor: 'text-antuario-green',
    iconBg: 'bg-antuario-green-soft',
    accentColor: 'from-antuario-green/20 to-transparent',
    borderHover: 'hover:border-antuario-green/25',
    title: 'Agencia Digital',
    subtitle: 'Construcción y gestión de activos digitales',
    description:
      'Construimos y gestionamos tu página web, SEO y Google Ads con medición perfecta desde el día uno. Todo integrado al Dashboard para que cada peso invertido sea visible y accionable.',
    features: [
      'Sitio web profesional optimizado para conversión y SEO',
      'Posicionamiento orgánico en Google',
      'Campañas de Google Ads con medición correcta',
      'Accountability real sobre KPIs, no solo tareas',
    ],
    cta: 'Explorar Agencia',
  },
]

const differentiators = [
  { text: 'Plataforma propia con IA integrada', color: 'bg-antuario-green' },
  { text: 'Accountability real sobre resultados', color: 'bg-antuario-purple' },
  { text: 'Visibilidad en tiempo real 24/7', color: 'bg-antuario-cyan' },
  { text: 'Para dueños, no para analistas', color: 'bg-antuario-orange' },
]

// ─── Sections ────────────────────────────────────────────────────────────────

function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#08091A] px-4 pb-0 pt-24 sm:px-6 sm:pt-32 lg:px-8">
      <MeshGradientBg variant="default" />

      <div className="relative mx-auto max-w-5xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-7 flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.05] px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-antuario-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-antuario-green" />
            </span>
            <span className="text-[13px] font-semibold tracking-wide text-white/70">
              Plataforma de Inteligencia Comercial
            </span>
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 font-heading text-[32px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[44px] lg:text-[56px]"
        >
          Tu área comercial, con{' '}
          <span className="gradient-text-multicolor">claridad y resultados reales</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mx-auto mb-8 max-w-2xl text-[15px] leading-relaxed text-white/50 sm:text-[17px]"
        >
          Antuario combina una plataforma propia, agentes de IA y servicios de agencia digital para que
          pequeñas y medianas empresas B2B en México gestionen su área comercial de forma consciente,
          estratégica y medible.
        </motion.p>

        {/* Differentiator pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {differentiators.map((d, i) => (
            <span
              key={i}
              className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.04] px-3.5 py-1.5 text-[12px] font-medium text-white/60"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${d.color}`} />
              {d.text}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine group inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-6 py-3 text-[14px] font-semibold text-[#1A1D2B] shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Diagnóstico gratuito
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <Link
            href="/dashboard"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-6 py-3 text-[14px] font-semibold text-white/70 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.07] hover:text-white"
          >
            Ver la plataforma
            <ArrowRight className="h-3.5 w-3.5 opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
          </Link>
        </motion.div>
      </div>

      {/* Rounded divider bottom */}
      <div className="relative z-10 -mb-1 mt-20">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60V24C0 10.7452 10.7452 0 24 0H1416C1429.25 0 1440 10.7452 1440 24V60H0Z" fill="#FAFAFA" />
        </svg>
      </div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <MeshGradientBg variant="lsd" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-widest text-text-muted">
            Tres componentes, un ecosistema
          </p>
          <h2 className="font-heading text-[28px] font-extrabold tracking-tight text-text-primary sm:text-[36px]">
            Todo lo que necesita tu área comercial,{' '}
            <span className="gradient-text-multicolor">integrado</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-text-secondary">
            El Dashboard es el núcleo. Los Agentes IA y la Agencia son capas de valor adicionales
            que se construyen sobre él. Cada uno funciona solo; juntos son imbatibles.
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <Link
                href={product.href}
                className={`group flex h-full flex-col rounded-[28px] border border-border bg-white/70 p-7 shadow-card backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:shadow-card-hover ${product.borderHover}`}
              >
                {/* Top accent gradient */}
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-32 rounded-t-[28px] bg-gradient-to-b ${product.accentColor} opacity-0 transition-opacity duration-400 group-hover:opacity-100`} />

                {/* Badge */}
                <span className={`mb-5 inline-flex self-start rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${product.badgeColor}`}>
                  {product.badge}
                </span>

                {/* Icon */}
                <div className={`mb-4 inline-flex w-fit rounded-2xl ${product.iconBg} p-3.5 transition-transform duration-300 group-hover:scale-110`}>
                  <product.icon className={`h-6 w-6 ${product.iconColor}`} />
                </div>

                {/* Title & subtitle */}
                <h3 className="mb-1.5 font-heading text-[20px] font-extrabold tracking-tight text-text-primary">
                  {product.title}
                </h3>
                <p className="mb-3 text-[13px] font-semibold text-text-secondary">
                  {product.subtitle}
                </p>

                {/* Description */}
                <p className="mb-5 flex-1 text-[14px] leading-relaxed text-text-secondary">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {product.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[13px] text-text-secondary">
                      <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 ${product.iconColor}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className={`flex items-center gap-1.5 text-[13px] font-semibold ${product.iconColor} transition-gap duration-300`}>
                  {product.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ForWhoHomeSection() {
  const profiles = [
    { emoji: '⚖️', label: 'Despachos de abogados' },
    { emoji: '📊', label: 'Consultoras' },
    { emoji: '🎯', label: 'Agencias BTL' },
    { emoji: '🏗️', label: 'Firmas de arquitectura' },
    { emoji: '💻', label: 'Empresas de TI' },
    { emoji: '🎓', label: 'Empresas de capacitación' },
    { emoji: '🏛️', label: 'Despachos contables' },
    { emoji: '🔒', label: 'Empresas de seguridad' },
  ]

  return (
    <section className="relative overflow-hidden bg-surface-alt px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-widest text-text-muted">
            Perfil del cliente ideal
          </p>
          <h2 className="font-heading text-[28px] font-extrabold tracking-tight text-text-primary sm:text-[34px]">
            Diseñado para empresas de servicios{' '}
            <span className="gradient-text-multicolor">B2B en México</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-text-secondary">
            Empresas consolidadas con equipo comercial activo, ciclos de venta con seguimiento y
            visión de largo plazo. Si buscas resultados extraordinarios, estamos hechos para ti.
          </p>
        </motion.div>

        {/* Profile pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {profiles.map((p, i) => (
            <span
              key={i}
              className="flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2 text-[13px] font-medium text-text-secondary shadow-soft backdrop-blur-sm"
            >
              <span>{p.emoji}</span>
              {p.label}
            </span>
          ))}
        </motion.div>

        {/* Commitment note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-2xl rounded-[24px] border border-border bg-white/60 p-6 text-center shadow-soft backdrop-blur-sm"
        >
          <p className="text-[14px] leading-relaxed text-text-secondary">
            <span className="font-bold text-text-primary">Compromiso mínimo de 12 meses.</span>{' '}
            Los resultados extraordinarios requieren tiempo, constancia y optimización continua.
            En los primeros 3–4 meses ya ves resultados reales.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function HomePositioning() {
  const items = [
    {
      label: 'No somos una agencia tradicional',
      text: 'No entregamos tareas y ya. Nos comprometemos a mejorar indicadores específicos y medibles.',
      color: 'border-l-antuario-green',
    },
    {
      label: 'No somos un CRM genérico',
      text: 'Antuario traduce toda tu área comercial a una visión simple y accionable para quien toma decisiones: tú.',
      color: 'border-l-antuario-purple',
    },
    {
      label: 'Trabajamos por resultados, no por tareas',
      text: 'El KPI principal es el CPLR (Costo por Lead Relevante). Eso, por sí solo, hace toda la diferencia.',
      color: 'border-l-antuario-cyan',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#08091A] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <MeshGradientBg variant="cool" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-widest text-antuario-green">
            Nuestra promesa diferencial
          </p>
          <h2 className="font-heading text-[28px] font-extrabold tracking-tight text-white sm:text-[36px]">
            Claridad, no complejidad
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/50">
            El valor de Antuario no es la tecnología. Es la claridad estratégica que le da al dueño
            de negocio para tomar mejores decisiones.
          </p>
        </motion.div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`rounded-[20px] border border-white/[0.06] bg-white/[0.03] p-6 pl-7 backdrop-blur-sm border-l-4 ${item.color}`}
            >
              <h3 className="mb-1.5 text-[15px] font-bold text-white">{item.label}</h3>
              <p className="text-[14px] leading-relaxed text-white/50">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-[#08091A] px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <MeshGradientBg variant="default" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-5 font-heading text-[28px] font-extrabold tracking-tight text-white sm:text-[36px]">
            ¿Quieres saber si Antuario es para tu empresa?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-[15px] leading-relaxed text-white/50">
            Hacemos un diagnóstico gratuito: analizamos tu situación actual, identificamos tus áreas
            de mejora y te mostramos el sistema en vivo. Sin compromiso.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-6 py-3 text-[13px] font-semibold text-[#1A1D2B] shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Solicita tu diagnóstico gratis
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-6 py-3 text-[13px] font-semibold text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/12 hover:bg-white/[0.06]"
            >
              <LayoutDashboard className="h-3.5 w-3.5 text-antuario-cyan" />
              Ver la plataforma
            </Link>
          </div>

          <p className="mt-6 text-[12px] text-white/25">
            Te respondemos por WhatsApp en menos de 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProductsSection />
      <ForWhoHomeSection />
      <HomePositioning />
      <HomeCTA />
    </>
  )
}
