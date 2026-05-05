'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Bot, MessageSquare, Search, UserCheck, FileText, Zap, Shield, Clock } from 'lucide-react'
import { siteConfig } from '@/config/site'
import MeshGradientBg from '@/components/common/MeshGradientBg'
import DifferentiatorBanner from '@/components/sections/DifferentiatorBanner'

// ─── Data ───────────────────────────────────────────────────────────────────

const agentProcessSteps = [
  {
    number: 1,
    icon: MessageSquare,
    color: 'emerald',
    title: 'Recibe y responde automáticamente',
    description: 'Responde a prospectos al instante por WhatsApp y correo, de forma profesional.',
  },
  {
    number: 2,
    icon: UserCheck,
    color: 'cyan',
    title: 'Identifica si el lead es relevante',
    description: 'Evalúa basado en tus criterios de cliente ideal: industria, tamaño, proyecto.',
  },
  {
    number: 3,
    icon: Search,
    color: 'violet',
    title: 'Investiga al prospecto',
    description: 'Busca información online sobre su empresa y construye un perfil completo.',
  },
  {
    number: 4,
    icon: Zap,
    color: 'amber',
    title: 'Califica y documenta',
    description: 'Registra automáticamente todo en tu CRM: perfil, datos, oportunidad, relevancia.',
  },
  {
    number: 5,
    icon: FileText,
    color: 'violet',
    title: 'Entrega oportunidades listas a tu equipo',
    description: 'Solo los leads filtrados, investigados y preparados llegan a tus vendedores.',
  },
]

const configWorkItems = [
  {
    icon: UserCheck,
    title: 'Entendemos tu negocio',
    description:
      'Documentamos qué ofreces, tu proceso de calificación y tus criterios de cliente ideal.',
  },
  {
    icon: Bot,
    title: 'Entrenamos el agente',
    description:
      'Con base en tu proceso, configuramos el IA para responder, investigar y calificar como tu equipo.',
  },
  {
    icon: Shield,
    title: 'Conectamos tus canales',
    description:
      'Integramos WhatsApp, email y todos tus canales directamente al Antuario Dashboard.',
  },
  {
    icon: Clock,
    title: 'Optimizamos continuamente',
    description:
      'Cada mes ajustamos el agente basado en KPIs reales y feedback de tu equipo de ventas.',
  },
]

// ─── Hero Section ────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <MeshGradientBg variant="default" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-heading text-[28px] sm:text-[36px] font-extrabold tracking-tight text-white mb-6">
            Un copiloto de inteligencia artificial para tu equipo de ventas
          </h1>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-slate-400 mb-8">
            Responde prospectos al instante, investiga sus empresas, los califica y entrega a tu equipo solo las oportunidades reales. Todo de forma automática, dentro de tu Antuario Dashboard.
          </p>
        </motion.div>
      </div>

      {/* Rounded divider */}
      <div className="relative z-10 -mb-1 mt-16">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60V24C0 10.7452 10.7452 0 24 0H1416C1429.25 0 1440 10.7452 1440 24V60H0Z" fill="#f1f5f9" />
        </svg>
      </div>
    </section>
  )
}

// ─── The Problem Section ──────────────────────────────────────────────────────

function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[#f1f5f9] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-[28px] sm:text-[36px] font-extrabold tracking-tight text-slate-900 mb-6">
            Tu equipo de ventas no debería gastar horas atendiendo prospectos que nunca van a comprar
          </h2>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-slate-500">
            El proceso manual es agotador: evaluar cada mensaje, determinar si es relevante, investigar al prospecto, documentar datos, filtrar spam. La mayoría son irrelevantes. Mientras tu equipo pierde horas en triaje, los leads reales se enfrían. Es el trabajo operativo que no debería existir.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── What The Agent Does Section ──────────────────────────────────────────────

function AgentProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-heading text-[28px] sm:text-[36px] font-extrabold tracking-tight text-slate-900 mb-4">
            Esto es lo que hace el Agente IA por ti
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[35px] top-0 hidden h-full w-[2px] bg-gradient-to-b from-slate-200 via-slate-200 to-slate-100 sm:block" style={{ zIndex: 0 }} />

          <div className="space-y-6">
            {agentProcessSteps.map((step, i) => {
              const colorClasses = {
                emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200/60', text: 'text-emerald-600' },
                cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200/60', text: 'text-cyan-600' },
                violet: { bg: 'bg-violet-50', border: 'border-violet-200/60', text: 'text-violet-600' },
                amber: { bg: 'bg-amber-50', border: 'border-amber-200/60', text: 'text-amber-600' },
              }
              const colors = colorClasses[step.color as keyof typeof colorClasses]

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative flex gap-6 sm:gap-8"
                >
                  {/* Circle number */}
                  <div className="relative flex flex-shrink-0">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full ${colors.bg} border ${colors.border} font-heading font-extrabold text-lg ${colors.text}`}>
                      {step.number}
                    </div>
                    {/* Dot connector to line */}
                    <div className="absolute left-[60px] top-8 hidden h-[2px] w-6 bg-slate-200 sm:block" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="font-heading text-[16px] font-extrabold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── What It Doesn't Do Section ────────────────────────────────────────────────

function WhatItDoesNotSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-heading text-[28px] sm:text-[36px] font-extrabold tracking-tight text-slate-900 mb-6">
            El Agente IA no reemplaza a tu equipo de ventas
          </h2>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-slate-500">
            El agente filtra, investiga y califica. Tu equipo cierra. El Agente IA es el asistente de ventas más inteligente posible, pero no toma decisiones finales ni cierra tratos. Es una extensión de tu equipo que le quita el trabajo operativo y le deja concentrarse 100% en relacionamiento y cierre.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── How We Configure It Section ──────────────────────────────────────────────

function HowWeConfigureSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-heading text-[28px] sm:text-[36px] font-extrabold tracking-tight text-slate-900 mb-4">
            Nosotros hacemos todo el trabajo técnico. Tú solo nos cuentas cómo funciona tu negocio.
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {configWorkItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl border border-slate-200/60 bg-white/80 p-7 shadow-soft backdrop-blur-sm hover:shadow-card transition-all duration-300"
            >
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                  <item.icon className="h-6 w-6 text-slate-600" />
                </div>
              </div>
              <h3 className="font-heading text-[16px] font-extrabold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Infrastructure Ready Section ──────────────────────────────────────────────

function InfrastructureReadySection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-slate-200/60 bg-white/80 p-10 shadow-card backdrop-blur-sm text-center"
        >
          <h2 className="font-heading text-[28px] sm:text-[36px] font-extrabold tracking-tight text-slate-900 mb-4">
            No tienes que decidir hoy. Pero cuando quieras, ya estarás listo.
          </h2>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-slate-500">
            Los Agentes IA son opcionales pero poderosos. El servicio base de Antuario funciona excelente sin ellos. Pero toda la infraestructura ya está lista en el Dashboard para cuando quieras activarlos. Cero migración, cero sorpresas. Completamente integrado desde el día uno.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <MeshGradientBg variant="default" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-[28px] sm:text-[36px] font-extrabold tracking-tight text-white mb-6">
            ¿Quieres ver cómo funciona un Agente IA con un negocio como el tuyo?
          </h2>
          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-slate-400 mb-8">
            En tu diagnóstico gratuito te mostramos una demo en vivo de los Agentes IA para que veas exactamente cómo operan.
          </p>

          <motion.a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-[15px] font-semibold text-[#0f0f0f] shadow-[0_8px_32px_rgba(255,255,255,0.2)] transition-all duration-300 hover:shadow-[0_12px_48px_rgba(255,255,255,0.3)]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Agendar mi diagnóstico gratuito
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          <p className="mt-6 text-[13px] text-slate-400">
            Sin costo. Sin compromiso.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AgenteIAPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <AgentProcessSection />
      <WhatItDoesNotSection />
      <HowWeConfigureSection />
      <InfrastructureReadySection />
      <DifferentiatorBanner />
      <CTASection />
    </>
  )
}
