'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import MeshGradientBg from '@/components/common/MeshGradientBg'
import DifferentiatorBanner from '@/components/sections/DifferentiatorBanner'
import SectionDivider from '@/components/common/SectionDivider'

// ─── Data ───────────────────────────────────────────────────────────────────

const phases = [
  {
    number: '01',
    title: 'Construcción',
    subtitle: 'Mes 1-2',
    heading: 'Construimos toda tu infraestructura digital',
    items: [
      'Sitio web profesional optimizado para conversión y SEO',
      'Auditoría y estrategia SEO completa',
      'Configuración de Google Ads con medición correcta',
      'Dashboard Antuario personalizado para tu negocio',
      'Entendimiento profundo de tus procesos y objetivos',
      'Agentes IA configurados (opcional)',
    ],
    borderColor: 'border-l-4 border-l-emerald-500',
  },
  {
    number: '02',
    title: 'Primeros Resultados',
    subtitle: 'Mes 3-4',
    heading: 'Los primeros prospectos y datos reales',
    items: [
      'Primeros leads calificados llegando a tu equipo',
      'Visibilidad total en el Dashboard en tiempo real',
      'Primeras mejoras implementadas basadas en datos',
      'SEO ganando posiciones en Google',
      'Métricas reales que puedes entender y actuar',
    ],
    borderColor: 'border-l-4 border-l-violet-500',
  },
  {
    number: '03',
    title: 'Optimización Continua',
    subtitle: 'Mes 5-12',
    heading: 'Optimización estratégica para maximizar resultados',
    items: [
      'Análisis profundo de métricas cada mes',
      'Identificación y eliminación de cuellos de botella',
      'Ajustes estratégicos en campañas y landing pages',
      'SEO continuando su crecimiento exponencial',
      'Reuniones mensuales de revisión y alineación',
      'Escalamiento de lo que funciona',
    ],
    borderColor: 'border-l-4 border-l-cyan-500',
  },
]

const includes = [
  'Página web profesional optimizada para conversión y SEO',
  'Estrategia SEO y posicionamiento orgánico en Google',
  'Campañas de Google Ads con medición correcta',
  'Antuario Dashboard con visibilidad total en tiempo real',
  'CRM completo: contactos, empresas, propuestas, cotizaciones, pedidos',
  'Bandeja de entrada unificada (WhatsApp, correo, redes)',
  'Herramientas de marketing integradas (Analytics, Search Console, Ads, Meta, GMB)',
  'Métricas reales en tiempo real — no métricas de vanidad',
  'Optimización continua mes con mes',
  'Reunión mensual de revisión y alineación',
  'Responsabilidad directa sobre resultados',
  'Agentes IA (opcional)',
]

const motionVariant = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <MeshGradientBg variant="default" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-[28px] font-extrabold tracking-tight text-white sm:text-[36px] lg:text-[42px]"
        >
          No vendemos proyectos sueltos. Construimos un sistema completo y lo operamos contigo mes a mes.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-[15px] leading-relaxed text-slate-400 sm:text-[16px] lg:mx-auto lg:max-w-3xl"
        >
          Así es como convertimos la presencia digital de tu empresa en un motor real de generación de prospectos.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3 font-semibold text-white transition-all hover:bg-emerald-600 active:scale-95"
          >
            Cuéntame tu situación
            <MessageCircle className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* SVG Divider */}
      <svg
        viewBox="0 0 1440 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative mt-20 h-14 w-full"
        preserveAspectRatio="none"
      >
        <rect width="1440" height="56" fill="#f1f5f9" />
        <path
          d="M0 0H1440V28C1440 43.464 1426.57 56 1410 56H30C13.4315 56 0 43.464 0 28V0Z"
          fill="#0f0f0f"
        />
      </svg>
    </section>
  )
}

// ─── Three Phases Section ────────────────────────────────────────────────────

function PhasesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <motion.div {...motionVariant} className="mb-16 text-center">
          <h2 className="font-heading text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">
            Tu primer año con Antuario
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-500 sm:text-[16px]">
            Un viaje estratégico de 12 meses: construcción, primeros resultados, y optimización continua.
          </p>
        </motion.div>

        {/* Phases Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group rounded-3xl border border-slate-200/60 bg-white/80 p-7 shadow-card backdrop-blur-sm ${phase.borderColor}`}
            >
              {/* Phase Number */}
              <div className="mb-4 flex items-baseline gap-2">
                <span className="font-heading text-4xl font-extrabold text-slate-300">{phase.number}</span>
                <div className="flex flex-col">
                  <h3 className="font-heading font-semibold text-slate-900">{phase.title}</h3>
                  <p className="text-xs font-medium text-slate-400">{phase.subtitle}</p>
                </div>
              </div>

              {/* Phase Heading */}
              <h4 className="mb-4 font-heading text-lg font-bold text-slate-900">{phase.heading}</h4>

              {/* Phase Items */}
              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Everything Included Section ─────────────────────────────────────────────

function IncludedSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <MeshGradientBg variant="lsd" />

      <div className="relative mx-auto max-w-5xl">
        {/* Title */}
        <motion.div {...motionVariant} className="mb-16 text-center">
          <h2 className="font-heading text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">
            Todo esto está incluido en tu iguala mensual
          </h2>
        </motion.div>

        {/* Grid of Includes */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {includes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: (index % 6) * 0.05 }}
              className="flex gap-3 rounded-xl border border-slate-200/40 bg-white/50 p-4 backdrop-blur-sm"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
              <span className="text-sm text-slate-700">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center text-sm font-medium text-slate-600"
        >
          Sin costos extras. Sin sorpresas. Un solo pago mensual que incluye todo.
        </motion.p>
      </div>
    </section>
  )
}

// ─── Asset Ownership Section ─────────────────────────────────────────────────

function OwnershipSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">
            Todo lo que construimos es tuyo
          </h2>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/60 bg-white p-7">
              <h3 className="mb-4 font-heading font-bold text-slate-900">Propiedad Total</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Tu dominio, hosting, sitio web, contenido, estrategia SEO y cuentas de Google Ads son completamente tuyos. Puedes portarlos cuando quieras sin restricciones.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/60 bg-white p-7">
              <h3 className="mb-4 font-heading font-bold text-slate-900">Lo Que Rentas</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                El Dashboard Antuario y los Agentes IA son propiedad de Antuario, pero puedes rentarlos por separado si terminas nuestro servicio. No quedarás sin herramientas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Investment Model Section ────────────────────────────────────────────────

function InvestmentSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">
            ¿Cómo funciona la inversión?
          </h2>

          <div className="mt-8 space-y-6">
            <div className="rounded-3xl border border-slate-200/60 bg-white p-7">
              <h3 className="mb-2 font-heading font-semibold text-slate-900">Iguala Mensual</h3>
              <p className="text-sm text-slate-600">
                Un único pago mensual que incluye todo: web, SEO, Google Ads, Dashboard, CRM, optimización y reuniones mensuales.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/60 bg-white p-7">
              <h3 className="mb-2 font-heading font-semibold text-slate-900">Compromiso de 12 Meses</h3>
              <p className="text-sm text-slate-600">
                Necesitamos 12 meses para construir correctamente tu sistema, posicionar tu SEO y ver resultados exponenciales. Es el tiempo mínimo para generar valor real.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/60 bg-white p-7">
              <h3 className="mb-2 font-heading font-semibold text-slate-900">Google Ads: Presupuesto Separado</h3>
              <p className="text-sm text-slate-600">
                Tu presupuesto publicitario en Google Ads es separado de la iguala mensual. Nosotros lo ejecutamos y optimizamos, pero el dinero del anuncio es tuyo.
              </p>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 text-center"
          >
            <p className="mb-6 text-sm font-medium text-slate-600">¿Quieres una propuesta para tu empresa?</p>
            <Link
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3 font-semibold text-white transition-all hover:bg-emerald-600 active:scale-95"
            >
              Solicitar Propuesta
              <MessageCircle className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Final CTA Section ───────────────────────────────────────────────────────

function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <MeshGradientBg variant="default" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-heading text-[28px] font-extrabold tracking-tight text-white sm:text-[36px]"
        >
          ¿Listo para dejar de adivinar y empezar a medir?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <Link
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3 font-semibold text-white transition-all hover:bg-emerald-600 active:scale-95"
          >
            Cuéntanos tu proyecto →
          </Link>
          <p className="text-sm font-medium text-slate-400">Te respondemos en menos de 24 h.</p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Main Page ──────────────────────────────────────────────────────────────

export default function ComoTrabajamosPage() {
  return (
    <>
      <HeroSection />
      <PhasesSection />
      <SectionDivider variant="light-to-alt" />
      <IncludedSection />
      <SectionDivider variant="alt-to-light" />
      <OwnershipSection />
      <SectionDivider variant="light-to-light" />
      <InvestmentSection />
      <SectionDivider variant="light-to-dark" />
      <DifferentiatorBanner />
      <SectionDivider variant="dark-to-light" />
      <FinalCTASection />
    </>
  )
}
