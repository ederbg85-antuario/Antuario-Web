'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Eye,
  BarChart3,
  Users,
  Target,
  MessageSquare,
  TrendingUp,
  FileText,
  Layers,
} from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import MeshGradientBg from '@/components/common/MeshGradientBg'

// ─── Data ───────────────────────────────────────────────────────────────────

const modules = [
  {
    number: '01',
    icon: Eye,
    iconColor: 'text-antuario-cyan',
    iconBg: 'bg-antuario-cyan/10',
    borderColor: 'border-antuario-cyan/15',
    title: 'Visión Maestra',
    subtitle: 'Panel Principal',
    description:
      'La vista general del embudo comercial completo en tiempo real. Diseñada para que el dueño entienda en 30 segundos si su negocio va bien o mal, y exactamente por qué.',
    features: [
      'Métricas de marketing y ventas en un solo lugar',
      'Indicadores estratégicos directamente ligados a objetivos',
      'Sin métricas de vanidad — solo lo que importa',
      'Señales claras de qué va bien y qué necesita atención',
    ],
  },
  {
    number: '02',
    icon: BarChart3,
    iconColor: 'text-antuario-green',
    iconBg: 'bg-antuario-green/10',
    borderColor: 'border-antuario-green/15',
    title: 'Marketing',
    subtitle: 'Visibilidad y Medición',
    description:
      'Integra Google Analytics 4, Google Search Console, Google Ads y Google My Business en un solo panel. Todo consolidado, todo medido correctamente.',
    features: [
      'Google Analytics 4 + Search Console + Ads integrados',
      'Medición correcta de conversiones desde el origen',
      'Sin atribución incorrecta ni eventos duplicados',
      'Un panel, no cuatro plataformas distintas',
    ],
  },
  {
    number: '03',
    icon: Users,
    iconColor: 'text-antuario-purple',
    iconBg: 'bg-antuario-purple/10',
    borderColor: 'border-antuario-purple/15',
    title: 'CRM',
    subtitle: 'Módulo Operativo',
    description:
      'La herramienta donde trabaja tu equipo de ventas todos los días. Contactos, bandeja de entrada unificada, propuestas y seguimiento post-venta, todo en un solo lugar.',
    features: [
      'Base de datos centralizada con historial y etiquetas',
      'WhatsApp + correo en una bandeja de entrada unificada',
      'Agentes IA integrados directamente en la bandeja',
      'Propuestas, cotizaciones, pedidos y cobranza',
    ],
  },
  {
    number: '04',
    icon: Target,
    iconColor: 'text-antuario-orange',
    iconBg: 'bg-antuario-orange/10',
    borderColor: 'border-antuario-orange/15',
    title: 'Objetivos y Proyectos',
    subtitle: 'Planificación y seguimiento',
    description:
      'Define objetivos comerciales por periodo ligados a los indicadores del Dashboard. Sistema de gestión de proyectos estilo Kanban integrado a todo el ecosistema.',
    features: [
      'Objetivos mensuales, trimestrales y anuales con KPIs',
      'Progreso en tiempo real hacia cada objetivo',
      'Gestión de proyectos Kanban integrada',
      'Asignación de tareas con responsables y fechas',
    ],
  },
]

const screenshots = [
  { src: '/screenshot-crm.png', label: 'CRM — Bandeja de Entrada', url: 'app.antuario.mx/bandeja-entrada' },
  { src: '/screenshot-embudo.png', label: 'Visión Maestra — Embudo Comercial', url: 'app.antuario.mx/vision-maestra' },
  { src: '/screenshot-metricas.png', label: 'Marketing — Métricas en Tiempo Real', url: 'app.antuario.mx/marketing' },
]

const metrics = [
  { icon: TrendingUp, color: 'text-antuario-green', value: 'Tiempo real', label: 'Datos siempre actualizados' },
  { icon: MessageSquare, color: 'text-antuario-cyan', value: '24/7', label: 'Visibilidad total' },
  { icon: FileText, color: 'text-antuario-purple', value: '4', label: 'Módulos integrados' },
  { icon: Layers, color: 'text-antuario-orange', value: '1', label: 'Solo plataforma' },
]

// ─── Sections ────────────────────────────────────────────────────────────────

function DashboardHero() {
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
              className="mb-6 flex items-center gap-2 text-[12px] text-text-muted"
            >
              <Link href="/" className="hover:text-text-secondary transition-colors">Antuario</Link>
              <span>/</span>
              <span className="font-semibold text-text-secondary">Dashboard</span>
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
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-antuario-cyan opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-antuario-cyan" />
                </span>
                <span className="text-[13px] font-semibold tracking-wide text-text-primary">
                  Plataforma propietaria
                </span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5 font-heading text-[28px] font-extrabold leading-[1.14] tracking-tight text-text-primary sm:text-[36px] lg:text-[44px]"
            >
              Todo tu negocio en{' '}
              <span className="gradient-text-multicolor">una sola pantalla</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-8 max-w-lg text-[15px] leading-relaxed text-text-secondary"
            >
              Antuario Dashboard centraliza toda la operación comercial de tu empresa en una visión
              estratégica simple. No es un CRM genérico — es una herramienta diseñada para que el
              dueño de una empresa B2B entienda su negocio con claridad y actúe con certeza.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine group inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#1A1D2B] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:py-3 sm:text-[13px]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Solicitar demo en vivo
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/agente-cia"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-black/[0.08] bg-white/60 px-5 py-3.5 text-[14px] font-semibold text-text-primary shadow-soft backdrop-blur-md transition-all duration-300 hover:border-black/12 hover:bg-white/80 sm:py-3 sm:text-[13px]"
              >
                Ver también: Agente CIA
                <ArrowRight className="h-3.5 w-3.5 opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full"
            style={{ perspective: '1200px' }}
          >
            <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-gradient-to-br from-antuario-cyan/20 via-antuario-green/10 to-antuario-purple/15 blur-3xl" style={{ zIndex: -1 }} />

            <motion.div
              style={{ rotateY: -4, rotateX: 3 }}
              className="relative rounded-[28px] border border-black/[0.08] bg-gradient-to-b from-white/80 to-white/50 p-[3px] shadow-[0_20px_80px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] backdrop-blur-sm"
            >
              <div className="overflow-hidden rounded-[26px] bg-[#10131F]">
                <div className="flex items-center gap-2 border-b border-white/[0.05] bg-[#0C0F1A] px-4 py-2.5">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="ml-3 flex flex-1 items-center gap-1.5 rounded-lg bg-white/[0.05] px-3 py-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-antuario-cyan/60" />
                    <span className="text-[10px] text-white/25">app.antuario.mx/vision-maestra</span>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshot-crm.png"
                  alt="Antuario Dashboard — Visión Maestra"
                  className="block w-full"
                  style={{ maxHeight: 'clamp(240px, 44vw, 500px)', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 hidden items-center gap-2 rounded-xl border border-black/[0.06] bg-white/90 px-3.5 py-2 shadow-elevated backdrop-blur-md sm:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-antuario-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-antuario-cyan" />
              </span>
              <span className="text-[11px] font-semibold text-text-primary">Datos en tiempo real</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Rounded divider */}
      <div className="relative z-10 -mb-1 mt-14">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60V24C0 10.7452 10.7452 0 24 0H1416C1429.25 0 1440 10.7452 1440 24V60H0Z" fill="#FAFAFA" />
        </svg>
      </div>
    </section>
  )
}

function MetricsBar() {
  return (
    <section className="bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-2 rounded-[20px] border border-border bg-white/70 p-5 text-center shadow-soft backdrop-blur-sm"
            >
              <m.icon className={`h-5 w-5 ${m.color}`} />
              <p className={`text-[20px] font-extrabold ${m.color}`}>{m.value}</p>
              <p className="text-[11px] text-text-muted">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ModulesSection() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-widest text-text-muted">
            Cuatro módulos, un ecosistema
          </p>
          <h2 className="font-heading text-[28px] font-extrabold tracking-tight text-text-primary sm:text-[36px]">
            Cada parte de tu área comercial,{' '}
            <span className="gradient-text-multicolor">cubierta</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-text-secondary">
            No necesitas cinco herramientas distintas. Antuario Dashboard tiene todo lo que
            necesitas para operar tu área comercial en un solo lugar.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`group rounded-[28px] border ${mod.borderColor} bg-white/70 p-8 shadow-card backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:shadow-card-hover`}
            >
              <div className="mb-6 flex items-start justify-between">
                <div className={`inline-flex rounded-2xl ${mod.iconBg} p-3.5 transition-transform duration-300 group-hover:scale-110`}>
                  <mod.icon className={`h-6 w-6 ${mod.iconColor}`} />
                </div>
                <span className="text-[40px] font-extrabold leading-none text-black/[0.04]">
                  {mod.number}
                </span>
              </div>

              <p className={`mb-1 text-[11px] font-bold uppercase tracking-widest ${mod.iconColor}`}>
                {mod.subtitle}
              </p>
              <h3 className="mb-3 font-heading text-[20px] font-extrabold tracking-tight text-text-primary">
                {mod.title}
              </h3>
              <p className="mb-5 text-[14px] leading-relaxed text-text-secondary">
                {mod.description}
              </p>

              <ul className="space-y-2">
                {mod.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[13px] text-text-secondary">
                    <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${mod.iconColor.replace('text-', 'bg-')}`} />
                    {f}
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

function ScreenshotsSection() {
  return (
    <section className="relative overflow-hidden bg-[#08091A] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <MeshGradientBg variant="cool" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-[12px] font-bold uppercase tracking-widest text-antuario-cyan">
            Antuario Dashboard
          </p>
          <h2 className="font-heading text-[28px] font-extrabold tracking-tight text-white sm:text-[36px]">
            Así se ve por dentro
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/50">
            Diseño limpio, información clara. Sin complejidad innecesaria. Construido para que
            el dueño de negocio entienda todo de un vistazo.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {screenshots.map((shot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0C0F1A] shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-all duration-400 hover:-translate-y-1.5"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-white/[0.05] bg-[#09091A] px-4 py-2.5">
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                  <div className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
                  <div className="h-2 w-2 rounded-full bg-[#28C840]" />
                </div>
                <span className="ml-2 text-[9px] text-white/20">{shot.url}</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={shot.src}
                alt={shot.label}
                className="block w-full transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ maxHeight: '220px', objectFit: 'cover', objectPosition: 'top' }}
              />
              <div className="px-4 py-3">
                <p className="text-[11px] font-medium text-white/35">{shot.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DashboardCTA() {
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
            ¿Listo para ver Antuario Dashboard en acción?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-[15px] leading-relaxed text-white/50">
            Agenda un diagnóstico gratuito. Incluye una demo en vivo del Dashboard para que veas
            exactamente cómo funciona todo antes de tomar cualquier decisión.
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
              Solicita una demo en vivo
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/agente-cia"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] px-6 py-3 text-[13px] font-semibold text-white/80 backdrop-blur-md transition-all duration-300 hover:border-white/12 hover:bg-white/[0.06]"
            >
              Conocer el Agente CIA
              <ArrowRight className="h-3.5 w-3.5 opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
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

export default function DashboardPage() {
  return (
    <>
      <DashboardHero />
      <MetricsBar />
      <ModulesSection />
      <ScreenshotsSection />
      <DashboardCTA />
    </>
  )
}
