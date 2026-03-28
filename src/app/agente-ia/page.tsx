'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  MessageSquare,
  Search,
  UserCheck,
  FileCheck,
  Zap,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import MeshGradientBg from '@/components/common/MeshGradientBg'

// ─── Data ───────────────────────────────────────────────────────────────────

const agentSteps = [
  {
    number: '01',
    icon: MessageSquare,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200/60',
    title: 'Recibe y responde automáticamente',
    description:
      'El agente atiende cada mensaje entrante por WhatsApp y correo electrónico de forma inmediata, profesional y en el nombre de tu empresa.',
  },
  {
    number: '02',
    icon: UserCheck,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200/60',
    title: 'Califica si el lead es relevante',
    description:
      'Identifica si el contacto tiene potencial real para tu negocio con base en criterios que defines tú: industria, tamaño de empresa, tipo de proyecto.',
  },
  {
    number: '03',
    icon: Search,
    color: 'text-violet-500',
    bg: 'bg-violet-50',
    border: 'border-violet-200/60',
    title: 'Investiga la empresa del prospecto',
    description:
      'Si el lead es relevante, el agente busca información en internet sobre su empresa, sitio web, sector e industria para construir un perfil completo.',
  },
  {
    number: '04',
    icon: Zap,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200/60',
    title: 'Identifica la oportunidad',
    description:
      'Analiza qué tipo de oportunidad representa ese lead para tu negocio y cuál es su nivel de relevancia e interés.',
  },
  {
    number: '05',
    icon: FileCheck,
    color: 'text-amber-400',
    bg: 'bg-amber-50',
    border: 'border-amber-200/60',
    title: 'Documenta todo en el CRM',
    description:
      'Registra automáticamente el perfil del lead, información de su empresa, tipo de oportunidad y nivel de relevancia directo en tu CRM.',
  },
  {
    number: '06',
    icon: ArrowRight,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200/60',
    title: 'Entrega leads listos a ventas',
    description:
      'Tu equipo solo recibe leads que ya fueron filtrados, investigados y preparados. Cero trabajo operativo de primera línea. Solo cierre.',
  },
]

const antuarioWork = [
  {
    icon: FileCheck,
    color: 'text-cyan-500',
    title: 'Levantamiento de proceso comercial',
    description:
      'Documentamos a fondo qué ofreces, qué NO ofreces, cómo defines un lead relevante y cuál es tu proceso de calificación. Esta es la parte más crítica.',
  },
  {
    icon: Bot,
    color: 'text-violet-500',
    title: 'Entrenamiento personalizado',
    description:
      'Con base en tu proceso comercial, entrenamos al agente para que responda, califique e investigue exactamente como lo haría alguien de tu equipo.',
  },
  {
    icon: Zap,
    color: 'text-emerald-500',
    title: 'Configuración técnica completa',
    description:
      'Conectamos todos tus canales (WhatsApp, correo), configuramos la infraestructura y lo integramos a tu bandeja de entrada del Dashboard.',
  },
  {
    icon: CheckCircle2,
    color: 'text-amber-500',
    title: 'Optimización mensual continua',
    description:
      'Con base en los KPIs reales y retroalimentación de tu equipo de ventas, ajustamos y mejoramos el agente mes con mes.',
  },
]

// ─── Sections ────────────────────────────────────────────────────────────────

function AgenteIAHero() {
  return (
    <section className="relative overflow-hidden bg-background px-4 pb-0 pt-24 sm:px-6 sm:pt-28 lg:px-8">
      <MeshGradientBg variant="lsd" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div className="pb-6 lg:pb-14">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 flex items-center gap-2 text-[12px] text-slate-400"
            >
              <Link href="/" className="hover:text-slate-500 transition-colors">Antuario</Link>
              <span>/</span>
              <span className="font-semibold text-slate-500">Agente IA</span>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2.5 rounded-full border border-black/[0.10] bg-white px-4 py-2 shadow-elevated backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-500" />
                </span>
                <span className="text-[13px] font-semibold tracking-wide text-slate-900">
                  Inteligencia Artificial
                </span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5 font-heading text-[28px] font-extrabold leading-[1.14] tracking-tight text-slate-900 sm:text-[36px] lg:text-[44px]"
            >
              El agente que trabaja por ti,{' '}
              <span className="gradient-text-multicolor">sin descanso</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-8 max-w-lg text-[15px] leading-relaxed text-slate-500"
            >
              El Agente IA no es un chatbot genérico. Es un asistente inteligente integrado
              directamente en tu CRM que atiende, califica e investiga cada lead entrante para que
              tu equipo de ventas solo se enfoque en cerrar.
            </motion.p>

            {/* Key benefit */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-8 rounded-2xl border border-violet-200/60 bg-violet-50/80 p-4"
            >
              <p className="text-[14px] font-semibold text-slate-900">
                Tu equipo de ventas se concentra exclusivamente en cerrar tratos, libre del trabajo
                operativo de primera línea y de los leads irrelevantes.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine group inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#0f172a] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:py-3 sm:text-[13px]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Contactar ventas
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/dashboard"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-black/[0.08] bg-white/80 px-5 py-3.5 text-[14px] font-semibold text-slate-900 shadow-soft backdrop-blur-md transition-all duration-300 hover:border-black/12 hover:bg-white/80 sm:py-3 sm:text-[13px]"
              >
                Ver el Dashboard
                <ArrowRight className="h-3.5 w-3.5 opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Chat mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
          >
            <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-gradient-to-br from-violet-500/15 via-cyan-500/10 to-emerald-500/10 blur-3xl" style={{ zIndex: -1 }} />

            <div className="relative rounded-3xl border border-black/[0.06] bg-white/80 p-5 shadow-card backdrop-blur-md">
              {/* Header */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100">
                  <Bot className="h-5 w-5 text-violet-500" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Agente IA · Antuario</p>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    <span className="text-[11px] text-emerald-500">Activo · WhatsApp + Email</span>
                  </div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-2.5">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="max-w-[80%] rounded-2xl rounded-tl-md bg-slate-50 px-3.5 py-2.5"
                >
                  <p className="text-[13px] text-slate-500">Hola, me interesa contratar capacitación corporativa para mi equipo de 50 personas.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.4 }}
                  className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-emerald-50 px-3.5 py-2.5"
                >
                  <p className="text-[13px] text-slate-900">¡Con gusto! ¿Me compartes el nombre de tu empresa y el área en que trabajan?</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.4 }}
                  className="max-w-[80%] rounded-2xl rounded-tl-md bg-slate-50 px-3.5 py-2.5"
                >
                  <p className="text-[13px] text-slate-500">Somos CEMEX, área de liderazgo y desarrollo organizacional.</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.4 }}
                  className="flex items-center gap-2 rounded-2xl bg-violet-50 px-3.5 py-2"
                >
                  <Search className="h-3.5 w-3.5 text-violet-500" />
                  <p className="text-[11px] font-medium text-violet-500">Investigando: CEMEX · Generando perfil completo...</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.0, duration: 0.4 }}
                  className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-3.5 py-2"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <p className="text-[11px] font-medium text-emerald-500">Lead calificado y enviado a ventas ✓</p>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="mt-4 flex gap-3 rounded-xl bg-slate-50/80 p-3">
                {[
                  { label: 'Leads hoy', value: '9', color: 'text-emerald-500' },
                  { label: 'Calificados', value: '3', color: 'text-violet-500' },
                  { label: 'Respuesta', value: '< 30s', color: 'text-cyan-500' },
                ].map((stat) => (
                  <div key={stat.label} className="flex-1 text-center">
                    <p className={`text-base font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-[9px] text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating note */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 hidden items-center gap-2 rounded-xl border border-black/[0.06] bg-white/90 px-3.5 py-2 shadow-elevated backdrop-blur-md sm:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
              </span>
              <span className="text-[11px] font-semibold text-slate-900">Agente IA activo</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Rounded divider */}
      <div className="relative z-10 -mb-1 mt-14">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60V24C0 10.7452 10.7452 0 24 0H1416C1429.25 0 1440 10.7452 1440 24V60H0Z" fill="#f1f5f9" />
        </svg>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-widest text-slate-400">
            El proceso completo
          </p>
          <h2 className="font-heading text-[28px] font-extrabold tracking-tight text-slate-900 sm:text-[36px]">
            Cómo trabaja el{' '}
            <span className="gradient-text-multicolor">Agente IA</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-500">
            Desde que un contacto llega hasta que el lead está listo para tu equipo, el agente
            trabaja de forma completamente autónoma.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-[27px] top-8 hidden h-[calc(100%-60px)] w-[2px] bg-gradient-to-b from-emerald-500 via-violet-500 to-emerald-500/20 sm:block" style={{ zIndex: 0 }} />

          <div className="space-y-5">
            {agentSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex gap-5 rounded-3xl border ${step.border} bg-white/80 p-5 shadow-soft backdrop-blur-sm transition-all duration-300 hover:shadow-card`}
                style={{ zIndex: 1 }}
              >
                {/* Step icon */}
                <div className={`flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-2xl ${step.bg} border ${step.border}`}>
                  <step.icon className={`h-5 w-5 ${step.color}`} />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${step.color}`}>
                      Paso {step.number}
                    </span>
                  </div>
                  <h3 className="mb-1 text-[15px] font-bold text-slate-900">{step.title}</h3>
                  <p className="text-[13px] leading-relaxed text-slate-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatWeDoSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <MeshGradientBg variant="default" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-widest text-violet-500">
            Nuestro trabajo
          </p>
          <h2 className="font-heading text-[28px] font-extrabold tracking-tight text-white sm:text-[36px]">
            Lo que hace Antuario para activar tu agente
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-400">
            No tienes que hacer nada técnico. Antuario se encarga de todo lo que se necesita
            para que tu agente funcione correctamente desde el día uno.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {antuarioWork.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card-dark rounded-3xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-white/[0.06] p-2.5">
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <h3 className="text-[15px] font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-[13px] leading-relaxed text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 rounded-2xl border border-violet-200/60 bg-violet-500/[0.06] p-5 text-center"
        >
          <p className="text-[14px] leading-relaxed text-slate-400">
            <span className="font-semibold text-white">La parte más compleja no es la técnica.</span>{' '}
            Es el levantamiento de procesos: entender a fondo tu negocio para entrenar bien al agente.
            Eso es trabajo estratégico de Antuario.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function IntegrationNote() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-8 rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-card backdrop-blur-sm sm:flex-row sm:gap-10"
        >
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-violet-50">
            <Bot className="h-8 w-8 text-violet-500" />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="mb-2 font-heading text-[18px] font-extrabold text-slate-900">
              El Agente IA vive dentro del Dashboard
            </h3>
            <p className="text-[14px] leading-relaxed text-slate-500">
              No es un producto separado. El agente está integrado directamente en la bandeja
              de entrada unificada del CRM. Tu equipo puede tomar el control manual en cualquier
              momento con un botón, y devolvérselo cuando quiera.
            </p>
            <Link
              href="/dashboard"
              className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-violet-500 transition-all duration-300 hover:gap-2"
            >
              Conocer el Dashboard
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AgenteIACTA() {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <MeshGradientBg variant="default" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-5 font-heading text-[28px] font-extrabold tracking-tight text-white sm:text-[36px]">
            ¿Quieres ver al Agente IA en acción?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-[15px] leading-relaxed text-slate-400">
            Contáctanos para conocer cómo el Agente IA puede transformar tu proceso de ventas.
            Te mostraremos una demo en vivo y responderemos todas tus preguntas.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine group inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-6 py-3 text-[13px] font-semibold text-[#0f172a] shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Contactar ventas
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/agencia"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-6 py-3 text-[13px] font-semibold text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/12 hover:bg-white/[0.06]"
            >
              Ver la Agencia Digital
              <ArrowRight className="h-3.5 w-3.5 opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
          </div>

          <p className="mt-6 text-[12px] text-slate-600">
            Te respondemos por WhatsApp en menos de 24 horas
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
      <AgenteIAHero />
      <HowItWorksSection />
      <WhatWeDoSection />
      <IntegrationNote />
      <AgenteIACTA />
    </>
  )
}
