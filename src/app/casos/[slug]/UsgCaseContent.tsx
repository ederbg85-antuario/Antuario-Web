'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cpu,
  Database,
  FileText,
  ScanLine,
  Trophy,
  Sparkles,
  Zap,
  Inbox,
} from 'lucide-react'
import { siteConfig } from '@/config/site'
import { SiteFrame, WhatsAppIcon } from '@/components/layout/SiteFrame'
import {
  ShellWrap,
  ChapterTag,
  CTASection,
  Breadcrumbs,
  rise,
} from '@/components/common/PageBuildingBlocks'
import { CASES, DETAILED_CASES } from '@/lib/cases-data'
import { SERVICES } from '@/lib/services-data'
import AnimatedCounter from '@/components/common/AnimatedCounter'

const SLUG = 'usg-agente-ia-software-a-la-medida'

const HERO_STATS = [
  { v: '90%', l: 'de la dinámica automatizada' },
  { v: '15 días', l: 'de desarrollo end-to-end' },
  { v: '24/7', l: 'atención del agente IA' },
  { v: 'En vivo', l: 'ranking en tiempo real' },
]

const PILLARS = [
  {
    n: '01',
    icon: ScanLine,
    t: 'Landing con ranking en vivo',
    d: 'Diseñamos y desarrollamos la landing de la “Liga USG de Campeones” —diseño, copy y estructura completos— con un ranking público que se conecta en tiempo real a la base de datos. Cada participante consulta su lugar al instante, sin recargar.',
    accent: '#6EE7B7',
    href: '/servicios/desarrollo-web',
    anchor: 'desarrollo web profesional',
  },
  {
    n: '02',
    icon: Cpu,
    t: 'Agente de IA en WhatsApp',
    d: 'Construimos un agente de inteligencia artificial que contesta el WhatsApp de la promoción: registra a los participantes, analiza sus tickets, remisiones y facturas en imagen o PDF, detecta los productos USG y suma los puntos solo.',
    accent: '#34D399',
    href: '/servicios/inteligencia-artificial',
    anchor: 'agencia de inteligencia artificial',
  },
  {
    n: '03',
    icon: Database,
    t: 'Base de datos en tiempo real',
    d: 'Desarrollamos la base de datos que lleva todo el registro de la dinámica y alimenta tanto el ranking público como el panel del cliente — actualizada al segundo por el propio agente, sin captura manual.',
    accent: '#67E8F9',
    href: '/servicios/software',
    anchor: 'software a la medida para empresas',
  },
  {
    n: '04',
    icon: Inbox,
    t: 'Panel de control a la medida',
    d: 'Entregamos a USG un panel con bandeja de entrada de WhatsApp en vivo, opción de intervenir manualmente y acceso total a la base de datos, tickets y documentos — eliminando la fricción de tener que pedirnos información.',
    accent: '#22D3EE',
    href: '/servicios/software',
    anchor: 'panel de control a la medida',
  },
]

// Resultados — capacidades del sistema (datos demostrativos del proyecto USG).
type Metric = { target: number; sep: boolean; suffix: string; label: string; delta: string; prefix?: string; literal?: string }
const METRICS: Metric[] = [
  { target: 90, sep: false, suffix: '%', label: 'Automatización de la dinámica', delta: 'antes 100% manual' },
  { target: 15, sep: false, suffix: ' días', label: 'Tiempo de desarrollo', delta: 'IA + software + web' },
  { target: 100, sep: false, prefix: '+', suffix: '', label: 'Premios en juego', delta: 'motos, TVs y efectivo' },
  { target: 0, sep: false, suffix: '', label: 'Capturistas necesarios', delta: 'el agente lo hace solo', literal: 'Cero' },
]

// Productos detectados por el agente (ejemplo real de la conversación).
const DETECTED = [
  { name: 'USG Tablaroca® Ultralight', qty: '4×', pts: 400 },
  { name: 'USG Redimix®', qty: '1×', pts: 500 },
]

// Mini-ranking en vivo (datos demostrativos del ranking público).
const RANKING = [
  { pos: 1, name: 'Eric A.', city: 'Nayarit', pts: 44800, accent: '#FCD34D' },
  { pos: 2, name: 'Jesús V.', city: 'Chihuahua', pts: 10800, accent: '#CBD5E1' },
  { pos: 3, name: 'Juan M. González', city: 'CDMX', pts: 9400, accent: '#FDBA74' },
]
const RANK_MAX = Math.max(...RANKING.map((r) => r.pts))

export function UsgCaseContent() {
  const c = CASES[SLUG]
  const relatedCases = DETAILED_CASES.filter((x) => x.slug !== SLUG)

  return (
    <SiteFrame>
      {/* ═══════════ HERO ═══════════ */}
      <section
        data-theme="dark"
        className="pt-[80px] sm:pt-[92px] lg:pt-[100px]"
        style={{ paddingBottom: 'clamp(20px, 2.4vh, 36px)' }}
      >
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(10px,2.4vw,28px)]">
          <div className="section-shell shell-dark pt-[44px] sm:pt-[52px] lg:pt-[60px]">
            <div className="usg-aurora pointer-events-none absolute inset-0 opacity-70" aria-hidden />
            <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <motion.span initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} className="eyebrow-light inline-flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70" style={{ background: '#34D399' }} />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: '#34D399' }} />
                  </span>
                  {c.hero.eyebrow}
                </motion.span>
                <motion.h1
                  custom={1}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={rise}
                  className="display mt-5 max-w-[20ch] text-balance text-[30px] leading-[1.05] text-papel sm:text-[42px] lg:text-[48px]"
                >
                  {c.hero.title} <span className="usg-grad">{c.hero.highlight}</span>
                </motion.h1>
                <motion.p
                  custom={2}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={rise}
                  className="mt-6 max-w-[54ch] text-[15px] leading-[1.55] text-papel/70 sm:text-[16.5px]"
                >
                  {c.hero.description}
                </motion.p>
                <motion.div
                  custom={3}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={rise}
                  className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                  <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary-inv">
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    Quiero un agente así
                    <ArrowRight className="h-3 w-3" />
                  </a>
                  <Link href="/casos" className="btn-ghost-dark">
                    Ver todos los casos
                  </Link>
                </motion.div>
              </div>

              {/* Imagen principal — portada del caso */}
              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-6"
              >
                <div
                  className="overflow-hidden rounded-[24px] sm:rounded-[28px]"
                  style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.3), 0 30px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(52,211,153,0.15)' }}
                >
                  <Image
                    src={c.imageSrc}
                    alt={c.imageAlt}
                    width={1200}
                    height={1500}
                    priority
                    draggable={false}
                    className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>

            {/* Stat chips */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="relative z-10 mt-10 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4"
            >
              {HERO_STATS.map((s) => (
                <div key={s.l} className="rounded-[16px] bg-white/[0.04] p-4" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}>
                  <p className="text-[22px] font-light tracking-tight text-papel sm:text-[26px]" style={{ letterSpacing: '-0.03em' }}>
                    {s.v}
                  </p>
                  <span className="mt-0.5 block font-mono text-[9.5px] uppercase tracking-[0.14em] text-papel/45">{s.l}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ LA LANDING EN VIVO ═══════════ */}
      <ShellWrap data="light" variant="marfil">
        <div className="mx-auto max-w-[940px] text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
            Desarrollo web · Landing de campaña
          </span>
          <h2 className="hero-type mx-auto mt-4 max-w-[24ch] text-[26px] text-onyx sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
            La “Liga USG de Campeones”, con <span className="usg-grad-dark">ranking en vivo.</span>
          </h2>
          <p className="lead-type mx-auto mt-4 max-w-[62ch] text-[14px] sm:text-[15px]">
            Desarrollamos la landing completa de la promoción: diseño, copy y estructura. Los participantes acumulaban
            puntos por cada compra de productos USG y subían en un ranking público que se actualiza en tiempo real —
            conectado directo a la base de datos que gestiona el agente de IA.
          </p>
        </div>

        {/* Mockup landing */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-10 max-w-[1040px]"
        >
          <div
            className="overflow-hidden rounded-[20px] bg-onyx sm:rounded-[26px]"
            style={{ boxShadow: '0 4px 12px rgba(15,15,30,0.10), 0 30px 64px rgba(15,15,30,0.18)' }}
          >
            {/* Chrome navegador */}
            <div className="flex items-center gap-3 border-b border-white/8 px-3 py-3 sm:px-4">
              <span className="hidden gap-1.5 sm:flex">
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
              </span>
              <div className="flex flex-1 items-center gap-2.5 rounded-full bg-white/6 px-4 py-2 sm:py-2.5">
                <span className="h-3 w-3 flex-shrink-0 rounded-full" style={{ background: 'linear-gradient(135deg,#34D399,#22D3EE)' }} />
                <span className="flex-1 truncate font-mono text-[12px] text-papel/70 sm:text-[13px]">usg-landing.vercel.app</span>
              </div>
              <span className="hidden items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] sm:inline-flex" style={{ background: 'rgba(52,211,153,0.16)', color: '#6EE7B7' }}>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70" style={{ background: '#34D399' }} />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: '#34D399' }} />
                </span>
                En vivo
              </span>
            </div>
            <Image
              src="/portfolio/usg/usg-landing-liga-campeones.jpg"
              alt="Landing de la Liga USG de Campeones desarrollada por Antuario — promoción nacional con acumulación de puntos por compra de productos USG y premios como motos, pantallas y efectivo."
              width={1600}
              height={890}
              draggable={false}
              loading="lazy"
              className="w-full"
              sizes="(max-width: 1024px) 100vw, 1040px"
            />
          </div>
        </motion.div>

        {/* Ranking en vivo — captura + mini ranking animado */}
        <div className="mt-6 grid gap-4 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[20px] bg-onyx shadow-soft sm:rounded-[24px] lg:col-span-7"
            style={{ boxShadow: '0 4px 12px rgba(15,15,30,0.10), 0 18px 40px rgba(15,15,30,0.14)' }}
          >
            <Image
              src="/portfolio/usg/usg-ranking-tiempo-real.jpg"
              alt="Ranking de ganadores en tiempo real de la promoción USG — tabla de posiciones nacional que se actualiza automáticamente con los puntos registrados por el agente de IA."
              width={1600}
              height={886}
              draggable={false}
              loading="lazy"
              className="w-full"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </motion.div>

          {/* Mini ranking animado */}
          <div className="rounded-[20px] border border-onyx/8 bg-papel p-5 shadow-soft sm:rounded-[24px] sm:p-6 lg:col-span-5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-onyx">
                <Trophy className="h-3.5 w-3.5" style={{ color: '#F59E0B' }} />
                Ranking USG · Top
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em]" style={{ background: 'rgba(52,211,153,0.12)', color: '#1a7f4b' }}>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70" style={{ background: '#34D399' }} />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: '#34D399' }} />
                </span>
                Tiempo real
              </span>
            </div>
            <div className="mt-5 space-y-4">
              {RANKING.map((r, i) => (
                <div key={r.pos}>
                  <div className="flex items-center justify-between text-[13px] text-grafito">
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold text-onyx" style={{ background: r.accent }}>
                        {r.pos}
                      </span>
                      <span className="font-medium text-onyx">{r.name}</span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-plomo">{r.city}</span>
                    </span>
                    <span className="font-medium tabular-nums text-onyx">
                      <AnimatedCounter target={r.pts} separator duration={1800} /> pts
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-marfil">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(r.pts / RANK_MAX) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg,#34D399,#22D3EE)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[11px] leading-snug text-plomo">
              El ranking se alimenta solo: cada ticket que el agente de IA valida actualiza los puntos en la base de datos
              y refresca esta tabla al instante.
            </p>
          </div>
        </div>
      </ShellWrap>

      {/* ═══════════ FICHA / INTRO ═══════════ */}
      <ShellWrap data="light" variant="papel">
        <Breadcrumbs
          trail={[
            { label: 'Inicio', href: '/' },
            { label: 'Casos', href: '/casos' },
            { label: c.name },
          ]}
        />

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">Caso · {c.year}</span>
            <h2 className="hero-type mt-3 max-w-[24ch] text-[24px] text-onyx sm:text-[34px] lg:text-[38px]" style={{ fontWeight: 300 }}>
              {c.tagline}
            </h2>
            <div className="mt-6 space-y-4 text-[14px] leading-[1.65] text-grafito sm:text-[15px]">
              <p>
                USG es un referente mundial en materiales de construcción. Para el Mundial lanzó la{' '}
                <strong className="text-onyx">“Liga USG de Campeones”</strong>: una promoción nacional donde sus clientes
                acumulaban puntos por cada compra de productos USG con un distribuidor autorizado y, según su lugar en el
                ranking, ganaban premios como motocicletas, Smart TVs, herramienta profesional y dinero en efectivo.
              </p>
              <p>
                Cada producto sumaba un puntaje específico, y los participantes acreditaban sus compras enviando tickets,
                remisiones o facturas. Como{' '}
                <Link href="/servicios/inteligencia-artificial" className="font-medium text-cobalto underline decoration-cobalto/30 underline-offset-2 transition-opacity hover:opacity-70">agencia de inteligencia artificial</Link>,
                Antuario diseñó un sistema completo para gestionar la dinámica casi sin intervención humana: una landing con
                ranking en vivo, un{' '}
                <Link href="/servicios/software" className="font-medium text-cobalto underline decoration-cobalto/30 underline-offset-2 transition-opacity hover:opacity-70">software a la medida para empresas</Link>{' '}
                con base de datos y panel de control, y un agente conversacional en WhatsApp.
              </p>
              <p>
                Este es el tipo de proyecto que define a Antuario: combinamos{' '}
                <Link href="/servicios/desarrollo-web" className="font-medium text-cobalto underline decoration-cobalto/30 underline-offset-2 transition-opacity hover:opacity-70">desarrollo web profesional</Link>,
                software y agentes de IA con la tecnología más avanzada del mundo — y lo entregamos en tiempo récord. La
                “Liga USG de Campeones” pasó de ser una operación 100% manual a una experiencia automatizada al 90%, simple
                tanto para USG como para sus clientes participantes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-5">
            {[
              { label: 'Marca', value: 'USG' },
              { label: 'Industria', value: 'Materiales de construcción' },
              { label: 'Servicios', value: c.services.join(' · ') },
              { label: 'Entrega', value: '15 días · 2026' },
            ].map((m) => (
              <div key={m.label} className="card-bb-soft p-4">
                <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-plomo">{m.label}</span>
                <p className="mt-1.5 text-[13.5px] font-medium text-onyx" style={{ letterSpacing: '-0.014em' }}>
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ShellWrap>

      {/* ═══════════ I · EL RETO ═══════════ */}
      <ShellWrap data="dark" variant="dark">
        <div className="aurora aurora-quiet absolute inset-0 opacity-40" aria-hidden />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-12" />
        <div className="relative z-10">
          <ChapterTag roman="I" label="El reto" sub="Una promoción gestionada a mano" dark />
          <h2 className="hero-type mt-5 max-w-[26ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
            {c.challenge.headline}
          </h2>
          <p className="lead-type mt-6 max-w-[66ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">{c.challenge.body}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { t: 'Capturistas y asistencia', d: 'Años antes contrataban personal para recibir cada comprobante, leer los productos y sumar puntos a mano.' },
              { t: 'Lento y con errores', d: 'Miles de participantes a nivel nacional enviando tickets. Cada punto mal sumado erosionaba la confianza.' },
              { t: 'Fricción de información', d: 'Mantener a USG y a sus clientes al día era un trabajo aparte: consultas constantes, reportes manuales.' },
            ].map((b) => (
              <div key={b.t} className="rounded-[18px] p-5" style={{ background: 'rgba(255,255,255,0.03)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}>
                <h3 className="text-[14.5px] font-medium text-papel sm:text-[15.5px]">{b.t}</h3>
                <p className="mt-2 text-[12.5px] leading-[1.55] text-papel/60 sm:text-[13px]">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </ShellWrap>

      {/* ═══════════ II · LA SOLUCIÓN ═══════════ */}
      <ShellWrap data="light" variant="marfil">
        <ChapterTag roman="II" label="La solución" sub="IA + software a la medida" />
        <h2 className="hero-type mt-5 max-w-[28ch] text-[26px] text-onyx sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
          {c.strategy.headline}
        </h2>
        <p className="lead-type mt-5 max-w-[64ch] text-[14.5px] sm:text-[15.5px]">
          No resolvimos una sola pieza. Diseñamos para USG un sistema donde la landing, el agente de inteligencia
          artificial, la base de datos y el panel de control se conectan entre sí — y se actualizan en tiempo real. Así es
          como una agencia de IA convierte una promoción nacional en una operación que prácticamente se gestiona sola.
        </p>

        <div className="mt-10 grid gap-3 sm:gap-4 lg:grid-cols-2">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.t}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="card-bb-soft p-6 sm:p-7"
            >
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full text-onyx" style={{ background: p.accent }}>
                  <p.icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                </span>
                <h3 className="text-[17px] font-medium tracking-tight text-onyx sm:text-[19px]" style={{ letterSpacing: '-0.018em' }}>
                  {p.t}
                </h3>
              </div>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-grafito sm:text-[14px]">{p.d}</p>
              <Link href={p.href} className="mt-3.5 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-cobalto transition-opacity hover:opacity-70">
                {p.anchor}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap gap-2">
          {c.servicesSlug.map((slug) => {
            const s = SERVICES[slug]
            if (!s) return null
            return (
              <Link
                key={slug}
                href={s.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-papel px-3 py-1.5 text-[11.5px] font-medium text-onyx shadow-soft transition-colors hover:bg-marfil"
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.accent }} />
                {s.metaTitle.split(' — ')[0].replace('Agencia de ', '').replace('Agencia ', '')}
                <ArrowRight className="h-3 w-3" />
              </Link>
            )
          })}
        </div>
      </ShellWrap>

      {/* ═══════════ III · EL AGENTE IA EN ACCIÓN ═══════════ */}
      <ShellWrap data="dark" variant="dark">
        <div className="usg-aurora pointer-events-none absolute inset-0 opacity-55" aria-hidden />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-10" />
        <div className="relative z-10">
          <ChapterTag roman="III" label="El agente IA" sub="Conversacional · 24/7" dark />
          <h2 className="hero-type mt-5 max-w-[28ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
            El agente de inteligencia artificial que gestiona la promoción{' '}
            <span className="usg-grad">por WhatsApp.</span>
          </h2>
          <p className="lead-type mt-6 max-w-[66ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">
            El flujo del participante es simple: escribe al WhatsApp de la promoción, el agente lo registra y, a partir de
            ahí, solo manda sus tickets, remisiones o facturas. El agente analiza la imagen o el PDF, detecta los productos
            USG, calcula los puntos y actualiza la base de datos solo — todo en una conversación natural.
          </p>

          {/* Pipeline animado del agente */}
          <AgentPipeline />

          {/* Captura WhatsApp real + scan card */}
          <div className="mt-8 grid gap-4 lg:grid-cols-12">
            {/* WhatsApp screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="mx-auto max-w-[340px] overflow-hidden rounded-[26px]" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.3), 0 24px 50px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Image
                  src="/portfolio/usg/usg-agente-whatsapp.jpg"
                  alt="Agente de inteligencia artificial de USG en WhatsApp detectando productos en un ticket en PDF y sumando los puntos automáticamente — desarrollado por Antuario."
                  width={900}
                  height={1948}
                  draggable={false}
                  loading="lazy"
                  className="w-full"
                  sizes="(max-width: 1024px) 100vw, 340px"
                />
              </div>
              <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-papel/40">
                Conversación real · agente USG en WhatsApp
              </p>
            </motion.div>

            {/* Scan card — visión del agente */}
            <div className="lg:col-span-7">
              <ScanCard />
            </div>
          </div>

          {/* Workflow del agente */}
          <div className="mt-8 rounded-[22px] p-5 sm:p-7" style={{ background: 'rgba(255,255,255,0.025)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}>
            <div className="flex flex-wrap items-end justify-between gap-2">
              <h3 className="inline-flex items-center gap-2 text-[15px] font-medium text-papel sm:text-[17px]">
                <Sparkles className="h-4 w-4" style={{ color: '#6EE7B7' }} />
                El cerebro del agente
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-salvia-b">workflow · automatización</span>
            </div>
            <p className="mt-3 max-w-[64ch] text-[13px] leading-[1.6] text-papel/60 sm:text-[13.5px]">
              Detrás de la conversación corre un workflow de automatización con IA que orquesta cada paso: identifica al
              participante, procesa el documento con visión por computadora, valida los productos contra el catálogo de
              SKUs, calcula los puntos y escribe en la base de datos — con el cliente capaz de intervenir en cualquier momento.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 overflow-hidden rounded-[16px] bg-[#1a1a1a] sm:rounded-[18px]"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)' }}
            >
              <Image
                src="/portfolio/usg/usg-agente-workflow.jpg"
                alt="Workflow de automatización del agente de IA de USG construido por Antuario — orquestación de registro, análisis de documentos, cálculo de puntos y escritura en base de datos."
                width={1600}
                height={783}
                draggable={false}
                loading="lazy"
                className="w-full"
                sizes="(max-width: 1024px) 100vw, 960px"
              />
            </motion.div>
          </div>
        </div>
      </ShellWrap>

      {/* ═══════════ IV · EL PANEL DE CONTROL ═══════════ */}
      <ShellWrap data="light" variant="papel">
        <ChapterTag roman="IV" label="El panel de control" sub="Software a la medida" />
        <div className="mt-5 grid items-end gap-6 lg:grid-cols-12">
          <h2 className="hero-type max-w-[24ch] text-[26px] text-onyx sm:text-[36px] lg:col-span-7 lg:text-[40px]" style={{ fontWeight: 300 }}>
            Un panel de control a la medida que le dio a USG{' '}
            <span className="usg-grad-dark">control total, sin esfuerzo.</span>
          </h2>
          <p className="lead-type text-[14.5px] sm:text-[15.5px] lg:col-span-5">
            Desarrollamos un software propio para el cliente: una bandeja de entrada con los mensajes de WhatsApp siempre en
            vivo, la opción de detener al agente e intervenir manualmente, y acceso total a la base de datos con la
            información de cada participante, sus tickets, fotos y documentos.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[20px] bg-lino shadow-soft sm:rounded-[24px]"
          >
            <Image
              src="/portfolio/usg/usg-panel-bandeja-entrada.jpg"
              alt="Panel de control USG desarrollado por Antuario — bandeja de entrada con las conversaciones de WhatsApp de la promoción en tiempo real."
              width={1600}
              height={750}
              draggable={false}
              loading="lazy"
              className="w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[20px] bg-lino shadow-soft sm:rounded-[24px]"
          >
            <Image
              src="/portfolio/usg/usg-panel-conversacion.jpg"
              alt="Software a la medida de USG — el cliente revisa la conversación del agente con un participante y puede intervenir cuando lo necesita, con la base de datos actualizada en tiempo real."
              width={1600}
              height={752}
              draggable={false}
              loading="lazy"
              className="w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { icon: Inbox, t: 'Bandeja en vivo', d: 'Todas las conversaciones de WhatsApp en tiempo real, ordenadas y consultables.' },
            { icon: Zap, t: 'Intervención humana', d: 'Pueden detener al agente y responder ellos mismos cuando lo deciden — sin perder el hilo.' },
            { icon: Database, t: 'Base de datos completa', d: 'Acceso total a participantes, puntos, tickets, fotos y documentos. Cero solicitudes a la agencia.' },
          ].map((f) => (
            <div key={f.t} className="card-bb-soft p-5 sm:p-6">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full" style={{ background: 'rgba(34,211,238,0.12)' }}>
                <f.icon className="h-4 w-4" style={{ color: '#0891B2' }} strokeWidth={1.8} />
              </span>
              <h3 className="mt-3 text-[15px] font-medium text-onyx sm:text-[16px]">{f.t}</h3>
              <p className="mt-1.5 text-[12.5px] leading-[1.55] text-grafito sm:text-[13px]">{f.d}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-[68ch] text-[13.5px] leading-[1.6] text-grafito sm:text-[14px]">
          Lo mejor: el mismo agente de IA que contesta WhatsApp es el que administra el panel. USG dejó de depender de
          nosotros para saber qué pasaba con su promoción — lo ven todo, cuando quieren, en tiempo real.
        </p>
      </ShellWrap>

      {/* ═══════════ V · RESULTADOS ═══════════ */}
      <ShellWrap data="dark" variant="dark">
        <div className="usg-aurora pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-10" />
        <div className="relative z-10">
          <ChapterTag roman="V" label="Resultados" sub="Lo que logramos" dark />
          <h2 className="hero-type mt-5 max-w-[26ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
            {c.results.headline}
          </h2>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={rise}
                className="rounded-[20px] p-5 sm:p-6"
                style={{
                  background: 'linear-gradient(155deg, rgba(52,211,153,0.08) 0%, rgba(34,211,238,0.02) 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-papel/50">{m.label}</span>
                <p className="mt-2 text-[28px] font-light tracking-tight text-papel sm:text-[34px]" style={{ letterSpacing: '-0.028em' }}>
                  {m.literal ? (
                    m.literal
                  ) : (
                    <AnimatedCounter target={m.target} prefix={m.prefix ?? ''} suffix={m.suffix} separator={m.sep} />
                  )}
                </p>
                <span className="mt-1 inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-salvia-b">{m.delta}</span>
              </motion.div>
            ))}
          </div>

          <p className="lead-type mt-9 max-w-[68ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">{c.results.body}</p>

          {/* Antes / después */}
          <div className="mt-8 grid gap-3 sm:gap-4 lg:grid-cols-2">
            <div className="rounded-[22px] p-6 sm:p-7" style={{ background: 'rgba(255,255,255,0.025)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-papel/45">Antes · 100% manual</span>
              <ul className="mt-4 space-y-2.5 text-[13.5px] text-papel/65">
                {['Capturistas y equipo de asistencia', 'Lectura y suma de puntos a mano', 'Reportes y consultas constantes', 'Errores y demoras en el ranking'].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rubor-b" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[22px] p-6 sm:p-7" style={{ background: 'linear-gradient(155deg, rgba(52,211,153,0.10), rgba(34,211,238,0.03))', boxShadow: 'inset 0 0 0 1px rgba(52,211,153,0.18)' }}>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-salvia-b">Después · 90% automatizado</span>
              <ul className="mt-4 space-y-2.5 text-[13.5px] text-papel/80">
                {['Agente de IA que registra y atiende 24/7', 'Lectura de tickets y suma de puntos automática', 'Base de datos y ranking en tiempo real', 'Panel de control con visibilidad total'].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-salvia-b" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-6 max-w-[64ch] text-[11.5px] uppercase tracking-[0.16em] text-papel/40">
            Caso desarrollado por Antuario para USG · 2026 · IA, software a la medida y desarrollo web.
          </p>
        </div>
      </ShellWrap>

      {/* ═══════════ VI · CIERRE ═══════════ */}
      <ShellWrap data="dark" variant="dark">
        <div className="aurora aurora-quiet absolute inset-0 opacity-40" aria-hidden />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ChapterTag roman="VI" label="El cierre" sub="Tecnología avanzada, en tiempo récord" dark />
          <h2 className="hero-type mx-auto mt-6 max-w-[24ch] text-[26px] text-papel sm:text-[38px] lg:text-[44px]" style={{ fontWeight: 300 }}>
            Todo esto, construido en <span className="usg-grad">15 días.</span>
          </h2>
          <p className="lead-type mx-auto mt-6 max-w-[62ch] text-[14.5px] !text-papel/70 sm:text-[16px]">
            La “Liga USG de Campeones” es uno de nuestros casos de éxito que reúne las tres disciplinas que mejor dominamos:
            desarrollo web, software a la medida y agentes de inteligencia artificial. Tomamos una dinámica que durante años
            fue 100% manual y la convertimos en un sistema que prácticamente se gestiona solo — simple para USG y para sus
            clientes, y entregado en tiempo récord. La prueba de que aplicamos la tecnología más avanzada del mundo para
            resolver problemas reales de negocio.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {['Agente de IA en WhatsApp', 'Landing con ranking en vivo', 'Base de datos en tiempo real', 'Panel de control', '90% automatizado', '15 días'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-white/6 px-3 py-1.5 text-[11.5px] text-papel/80">
                <Check className="h-3 w-3 text-salvia-b" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </ShellWrap>

      {/* ═══════════ MÁS CASOS ═══════════ */}
      <ShellWrap data="light" variant="papel">
        <div className="mb-8">
          <ChapterTag roman="VII" label="Más casos" sub="Otros proyectos" />
          <h2 className="hero-type mt-5 max-w-[24ch] text-[26px] text-onyx sm:text-[36px] lg:text-[40px]" style={{ fontWeight: 300 }}>
            Otros sistemas que hemos <span className="multi-grad">construido a la medida.</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedCases.map((rc, i) => (
            <motion.div key={rc.slug} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise}>
              <Link
                href={`/casos/${rc.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-[28px] bg-lino"
                style={{ boxShadow: '0 2px 4px rgba(15,15,30,0.08), 0 18px 36px rgba(15,15,30,0.10)' }}
              >
                <Image
                  src={rc.imageSrc}
                  alt={rc.imageAlt}
                  width={1200}
                  height={1500}
                  draggable={false}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 sm:p-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/65">{rc.industry}</span>
                  <div className="mt-1.5 flex items-end justify-between">
                    <h3 className="text-[18px] font-medium tracking-tight text-papel sm:text-[22px]" style={{ letterSpacing: '-0.018em' }}>
                      {rc.name}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-papel/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-papel" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </ShellWrap>

      <CTASection
        title="¿Quieres un agente de IA"
        highlight="parecido al de USG?"
        description="Cuéntanos qué proceso quieres automatizar. Diseñamos un sistema a la medida —IA, software y web— con un caso de uso claro desde el día uno."
        secondary={{ label: 'Conocer servicios', href: '/servicios' }}
      />

      <style jsx global>{`
        .usg-grad {
          background: linear-gradient(100deg, #6EE7B7 0%, #34D399 38%, #22D3EE 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .usg-grad-dark {
          background: linear-gradient(100deg, #0E9F6E 0%, #0891B2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .usg-aurora {
          background:
            radial-gradient(42% 55% at 20% 18%, rgba(52,211,153,0.30), transparent 60%),
            radial-gradient(38% 50% at 82% 22%, rgba(34,211,238,0.26), transparent 62%),
            radial-gradient(50% 60% at 60% 92%, rgba(16,185,129,0.18), transparent 65%);
          filter: blur(4px);
          animation: usgDrift 16s ease-in-out infinite alternate;
        }
        @keyframes usgDrift {
          0%   { transform: translate3d(0,0,0) scale(1); }
          100% { transform: translate3d(0,-2%,0) scale(1.06); }
        }
        @media (prefers-reduced-motion: reduce) {
          .usg-aurora { animation: none; }
        }
      `}</style>
    </SiteFrame>
  )
}

/* ════════════════════════════════════════════════════════════
   Pipeline animado del agente de IA
   WhatsApp → Agente IA → Base de datos → Ranking en vivo
   ════════════════════════════════════════════════════════════ */
const FLOW = [
  { icon: WhatsAppIcon, t: 'Mensaje', d: 'El participante manda su ticket por WhatsApp.', accent: '#34D399' },
  { icon: Cpu, t: 'Agente IA', d: 'Lee la imagen o PDF y detecta los productos USG.', accent: '#6EE7B7' },
  { icon: Database, t: 'Base de datos', d: 'Suma los puntos y actualiza el registro solo.', accent: '#67E8F9' },
  { icon: Trophy, t: 'Ranking en vivo', d: 'El ranking público se refresca en tiempo real.', accent: '#22D3EE' },
]

function AgentPipeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mt-10 rounded-[22px] p-5 sm:p-7"
      style={{ background: 'rgba(255,255,255,0.025)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}
    >
      <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
        {FLOW.map((step, i) => (
          <div key={step.t} className="flex flex-1 flex-col lg:flex-row lg:items-stretch">
            {/* Nodo */}
            <div className="flex flex-1 items-start gap-3.5 lg:flex-col lg:items-start">
              <div className="relative flex-shrink-0">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-onyx"
                  style={{ background: step.accent, boxShadow: `0 0 0 6px ${step.accent}1f` }}
                >
                  <step.icon className="h-5 w-5" />
                </span>
                <span
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{ animation: `agentPulse 2.6s ease-out ${i * 0.4}s infinite`, boxShadow: `0 0 0 0 ${step.accent}66` }}
                />
              </div>
              <div className="lg:mt-3.5">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-papel/40">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="mt-0.5 text-[14px] font-medium text-papel sm:text-[15px]">{step.t}</h4>
                <p className="mt-1 max-w-[24ch] text-[12px] leading-[1.5] text-papel/55">{step.d}</p>
              </div>
            </div>

            {/* Conector con dato viajero */}
            {i < FLOW.length - 1 && (
              <div className="relative my-2 ml-[21px] flex w-px flex-shrink-0 items-center self-stretch lg:mx-3 lg:my-0 lg:h-px lg:w-auto lg:flex-1 lg:self-center">
                {/* línea base */}
                <span className="absolute inset-0 bg-white/10" />
                {/* dato viajero (vertical en móvil / horizontal en desktop) */}
                <span
                  className="absolute left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full lg:block"
                  style={{ background: step.accent, boxShadow: `0 0 8px ${step.accent}`, animation: `flowX 2.4s linear ${i * 0.5}s infinite` }}
                />
                <span
                  className="absolute top-0 h-1.5 w-1.5 rounded-full lg:hidden"
                  style={{ background: step.accent, boxShadow: `0 0 8px ${step.accent}`, animation: `flowY 2.4s linear ${i * 0.5}s infinite`, left: '-2.5px' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes agentPulse {
          0%   { box-shadow: 0 0 0 0 currentColor; opacity: 0.55; }
          70%  { box-shadow: 0 0 0 14px transparent; opacity: 0; }
          100% { box-shadow: 0 0 0 0 transparent; opacity: 0; }
        }
        @keyframes flowX {
          0%   { left: 0%; opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes flowY {
          0%   { top: 0%; opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          span { animation: none !important; }
        }
      `}</style>
    </motion.div>
  )
}

/* ════════════════════════════════════════════════════════════
   Scan card — "lo que ve el agente": ticket escaneado + productos detectados
   ════════════════════════════════════════════════════════════ */
function ScanCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="h-full rounded-[22px] p-5 sm:p-7"
      style={{ background: 'rgba(255,255,255,0.025)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}
    >
      <div className="flex items-center justify-between">
        <h3 className="inline-flex items-center gap-2 text-[15px] font-medium text-papel sm:text-[17px]">
          <ScanLine className="h-4 w-4" style={{ color: '#6EE7B7' }} />
          Lo que ve el agente
        </h3>
        <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em]" style={{ background: 'rgba(52,211,153,0.14)', color: '#6EE7B7' }}>
          <Sparkles className="h-3 w-3" /> Visión IA
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {/* Documento escaneado */}
        <div className="relative overflow-hidden rounded-[14px] bg-white/[0.04] p-4" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-2 text-papel/70">
            <FileText className="h-4 w-4" style={{ color: '#67E8F9' }} />
            <span className="font-mono text-[10px] uppercase tracking-[0.14em]">CIASA.pdf</span>
          </div>
          {/* líneas simulando texto del ticket */}
          <div className="mt-3 space-y-2">
            {[92, 78, 86, 64, 80, 70].map((w, i) => (
              <span key={i} className="block h-1.5 rounded-full bg-white/12" style={{ width: `${w}%` }} />
            ))}
          </div>
          {/* línea de escaneo */}
          <span
            className="pointer-events-none absolute inset-x-0 h-12"
            style={{
              background: 'linear-gradient(180deg, transparent, rgba(52,211,153,0.28), transparent)',
              animation: 'scanMove 2.8s ease-in-out infinite',
            }}
            aria-hidden
          />
          <span className="pointer-events-none absolute inset-0 rounded-[14px]" style={{ boxShadow: 'inset 0 0 0 1px rgba(52,211,153,0.25)' }} aria-hidden />
        </div>

        {/* Productos detectados */}
        <div className="rounded-[14px] bg-white/[0.04] p-4" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)' }}>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-papel/45">Productos detectados</span>
          <div className="mt-3 space-y-2.5">
            {DETECTED.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.25 }}
                className="flex items-center justify-between gap-2 rounded-lg bg-white/[0.04] px-3 py-2"
              >
                <span className="flex items-center gap-2 text-[12px] text-papel/85">
                  <Check className="h-3.5 w-3.5 flex-shrink-0 text-salvia-b" />
                  <span className="font-mono text-[10px] text-papel/50">{d.qty}</span>
                  {d.name}
                </span>
                <span className="flex-shrink-0 font-mono text-[11px] font-medium text-salvia-b">+{d.pts}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-white/8 pt-3">
            <span className="text-[12px] text-papel/60">Total provisional</span>
            <span className="text-[16px] font-light text-papel">
              +<AnimatedCounter target={900} separator duration={2000} /> pts
            </span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[11.5px] leading-snug text-papel/45">
        El agente detecta cada SKU participante, lo valida contra el catálogo, calcula los puntos y pide confirmación —
        antes de escribir en la base de datos.
      </p>

      <style jsx>{`
        @keyframes scanMove {
          0%, 100% { top: -10%; }
          50%      { top: 80%; }
        }
        @media (prefers-reduced-motion: reduce) {
          span[style*='scanMove'] { animation: none; }
        }
      `}</style>
    </motion.div>
  )
}
