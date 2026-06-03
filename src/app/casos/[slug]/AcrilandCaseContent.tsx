'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Heart, Share2, UserPlus, Eye, Check } from 'lucide-react'
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
import { LazyVideo } from '@/components/common/LazyVideo'
import { AccountabilityBoard } from '@/components/common/AccountabilityBoard'

const SLUG = 'acriland-desarrollo-web-seo'

const HERO_STATS = [
  { v: '100%', l: 'demanda orgánica' },
  { v: '+8,787%', l: 'sesiones del sitio' },
  { v: '1.25M', l: 'impresiones en Google' },
  { v: '2022', l: 'juntos desde' },
]

const PILLARS = [
  {
    n: '01',
    t: 'Marca, logotipo y desarrollo web',
    d: 'Desarrollamos su identidad de marca y un sitio en arquitectura optimizada para CTR, con ecommerce, fichas de producto con fotografía de primera y schema markup. Acriland pasó a percibirse tan profesional como realmente es.',
    accent: '#818CF8',
    href: '/servicios/desarrollo-web',
    anchor: 'desarrollo web profesional',
  },
  {
    n: '02',
    t: 'Posicionamiento SEO orgánico',
    d: 'Armamos todo el SEO técnico y de contenido de su web. Con el tiempo, la demanda orgánica superó por completo a la pagada — hoy la demanda de Acriland nunca duerme y proviene en su mayoría de búsquedas en Google.',
    accent: '#6EE7B7',
    href: '/servicios/seo',
    anchor: 'agencia SEO en México',
  },
  {
    n: '03',
    t: 'Software a la medida (CRM)',
    d: 'Les desarrollamos un software fullstack donde reúnen toda su información: CRM con pipelines, bandeja unificada de conversaciones de todos los canales, informes e indicadores clave de cada etapa del embudo comercial.',
    accent: '#67E8F9',
    href: '/servicios/software',
    anchor: 'software a la medida',
  },
  {
    n: '04',
    t: 'Contenido y presencia en IA',
    d: 'Producimos contenido orgánico para redes —concepto, guion, grabación y edición— que despierta confianza y posiciona la marca. Hoy Acriland aparece también en buscadores de IA como ChatGPT y Gemini.',
    accent: '#FDA4AF',
    href: '/servicios/inteligencia-artificial',
    anchor: 'inteligencia artificial aplicada',
  },
]

const METRICS = [
  { target: 33947, sep: true, suffix: '', label: 'Sesiones del sitio', delta: '+8,787% vs. baseline' },
  { target: 28321, sep: true, suffix: '', label: 'Visitantes únicos', delta: '+257,364%' },
  { target: 16.8, sep: false, decimals: 1, suffix: ' mil', label: 'Clics desde Google', delta: 'Search Console' },
  { target: 1.25, sep: false, decimals: 2, suffix: 'M', label: 'Impresiones en búsqueda', delta: 'posición media 7.4' },
]

const CHANNELS = [
  { name: 'Google', sub: 'Orgánica', value: 26089, accent: '#818CF8' },
  { name: 'Directa', sub: '↑ 2,567%', value: 5308, accent: '#67E8F9' },
  { name: 'Bing', sub: 'Orgánica', value: 1179, accent: '#6EE7B7' },
  { name: 'Yahoo', sub: 'Orgánica', value: 374, accent: '#FCD34D' },
  { name: 'ChatGPT', sub: 'IA', value: 134, accent: '#FDA4AF' },
]
const CHANNEL_MAX = Math.max(...CHANNELS.map((c) => c.value))

const REELS = [
  { src: '/portfolio/acriland/acriland-personificadores.mp4', poster: '/portfolio/acriland/acriland-personificadores-poster.jpg', label: '1,500 piezas · Liverpool' },
  { src: '/portfolio/acriland/acriland-euphoria.mp4', poster: '/portfolio/acriland/acriland-euphoria-poster.jpg', label: 'Exhibidor · Euphoria' },
  { src: '/portfolio/acriland/acriland-exhibidor.mp4', poster: '/portfolio/acriland/acriland-exhibidor-poster.jpg', label: 'Fabricación a medida' },
  { src: '/portfolio/acriland/acriland-orogold.mp4', poster: '/portfolio/acriland/acriland-orogold-poster.jpg', label: 'Proyecto · Orogold' },
]

const TIKTOK_STATS = [
  { icon: Eye, v: 88032, label: 'Visualizaciones' },
  { icon: Heart, v: 1261, label: 'Me gusta' },
  { icon: Share2, v: 509, label: 'Compartidos' },
  { icon: UserPlus, v: 752, label: 'Nuevos seguidores' },
]

export function AcrilandCaseContent() {
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
            <div className="aurora aurora-deep absolute inset-0 opacity-60" aria-hidden />
            <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <motion.span initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} className="eyebrow-light">
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
                  {c.hero.title} <span className="multi-grad-bright">{c.hero.highlight}</span>
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
                    Quiero un caso así
                    <ArrowRight className="h-3 w-3" />
                  </a>
                  <Link href="/casos" className="btn-ghost-dark">
                    Ver todos los casos
                  </Link>
                </motion.div>
              </div>

              {/* Imagen principal — la web (fondo rojo) */}
              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-6"
              >
                <div
                  className="overflow-hidden rounded-[24px] sm:rounded-[28px]"
                  style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.3), 0 30px 60px rgba(0,0,0,0.4)' }}
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
                  <p className="text-[24px] font-light tracking-tight text-papel sm:text-[28px]" style={{ letterSpacing: '-0.03em' }}>
                    {s.v}
                  </p>
                  <span className="mt-0.5 block font-mono text-[9.5px] uppercase tracking-[0.14em] text-papel/45">{s.l}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

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
                Acriland es una empresa y fábrica mexicana que produce artículos de acrílico: maneja SKUs de línea y
                producción 100% a la medida para proyectos de retail, perfumerías, joyerías y más. Trabajamos juntos
                desde <strong className="text-onyx">2022</strong>, y como{' '}
                <Link href="/servicios" className="font-medium text-cobalto underline decoration-cobalto/30 underline-offset-2 transition-opacity hover:opacity-70">agencia de marketing digital</Link> nos encargamos de
                su marca, su web, su posicionamiento orgánico y su sistema comercial — bajo una sola dirección.
              </p>
              <p>
                No solo hicimos la página y el logo: los liberamos de su antigua fuente de adquisición, montamos un
                sistema con datos reales y los apoyamos a nivel estratégico. Hoy Acriland es un competidor notable y
                uno de los líderes en su rubro — con una demanda <strong className="text-onyx">100% orgánica</strong>{' '}
                que llega por Google, redes sociales y buscadores de IA.
              </p>
              <p>
                Este es el tipo de proyecto que define a Antuario como{' '}
                <Link href="/servicios/seo" className="font-medium text-cobalto underline decoration-cobalto/30 underline-offset-2 transition-opacity hover:opacity-70">agencia SEO en México</Link>:
                no vendemos volumen ni paquetes prefabricados, construimos sistemas a la medida para empresas medianas y
                grandes con proyectos serios. Desde nuestra sede en CDMX operamos cuentas en toda la República — y el caso
                Acriland es la prueba de qué pasa cuando el desarrollo web, el posicionamiento orgánico, el software comercial
                y el contenido de marca trabajan bajo una sola dirección estratégica, con accountability y transparencia total.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-5">
            {[
              { label: 'Marca', value: 'Acriland' },
              { label: 'Industria', value: 'Fabricación de acrílico' },
              { label: 'Servicios', value: c.services.join(' · ') },
              { label: 'Colaboración', value: 'Desde 2022 · activa' },
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
          <ChapterTag roman="I" label="El reto" sub="Punto de partida" dark />
          <h2 className="hero-type mt-5 max-w-[26ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
            {c.challenge.headline}
          </h2>
          <p className="lead-type mt-6 max-w-[66ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">{c.challenge.body}</p>
        </div>
      </ShellWrap>

      {/* ═══════════ II · ESTRATEGIA ═══════════ */}
      <ShellWrap data="light" variant="marfil">
        <ChapterTag roman="II" label="La estrategia" sub="Qué construimos" />
        <h2 className="hero-type mt-5 max-w-[28ch] text-[26px] text-onyx sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
          {c.strategy.headline}
        </h2>
        <p className="lead-type mt-5 max-w-[64ch] text-[14.5px] sm:text-[15.5px]">
          No atacamos un solo frente. Diseñamos para Acriland un sistema completo donde cada pieza —marca, web, SEO,
          software y contenido— se refuerza con las demás. Así es como una agencia de marketing digital convierte
          esfuerzos sueltos en un motor de adquisición orgánica que crece solo.
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
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-medium text-papel" style={{ background: p.accent }}>
                  {p.n}
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

      {/* ═══════════ III · ACCOUNTABILITY ═══════════ */}
      <ShellWrap data="dark" variant="dark">
        <div className="ai-aurora opacity-45" />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-10" />
        <div className="relative z-10">
          <ChapterTag roman="III" label="Accountability" sub="Trabajamos por números" dark />
          <h2 className="hero-type mt-5 max-w-[28ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
            Cada decisión se sostiene en un{' '}
            <span className="multi-grad-bright">número — y cada número tiene un responsable.</span>
          </h2>
          <p className="lead-type mt-6 max-w-[64ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">
            Implementamos para Acriland un sistema 100% transparente y trackeable. Todo nuestro equipo de líderes trabaja
            con accountability: cada uno es responsable de uno o más números, y las tareas que ejecutamos existen solo para
            mover esos resultados. Entregamos reportes <strong className="!text-papel">mensuales</strong> y{' '}
            <strong className="!text-papel">trimestrales</strong> estratégicos con toda la información que dirección necesita
            para tomar las mejores decisiones.
          </p>

          <div className="mt-10">
            <AccountabilityBoard />
          </div>
        </div>
      </ShellWrap>

      {/* ═══════════ IV · RESULTADOS ═══════════ */}
      <ShellWrap data="dark" variant="dark">
        <div className="aurora aurora-deep absolute inset-0 opacity-50" aria-hidden />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-10" />
        <div className="relative z-10">
          <ChapterTag roman="IV" label="Resultados" sub="Datos reales" dark />
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
                  background: 'linear-gradient(155deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-papel/50">{m.label}</span>
                <p className="mt-2 text-[28px] font-light tracking-tight text-papel sm:text-[34px]" style={{ letterSpacing: '-0.028em' }}>
                  <AnimatedCounter target={m.target} decimals={m.decimals ?? 0} suffix={m.suffix} separator={m.sep} />
                </p>
                <span className="mt-1 inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-salvia-b">{m.delta}</span>
              </motion.div>
            ))}
          </div>

          {/* Desglose por canal — 100% orgánico */}
          <div className="mt-8 rounded-[22px] p-5 sm:p-7" style={{ background: 'rgba(255,255,255,0.025)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}>
            <div className="flex flex-wrap items-end justify-between gap-2">
              <h3 className="text-[15px] font-medium text-papel sm:text-[17px]">Sesiones por fuente de tráfico</h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-salvia-b">100% orgánico · sin pauta</span>
            </div>
            <div className="mt-6 space-y-3.5">
              {CHANNELS.map((ch, i) => (
                <div key={ch.name} className="flex items-center gap-3">
                  <span className="w-[88px] flex-shrink-0 text-[12.5px] text-papel/80 sm:w-[120px] sm:text-[13.5px]">
                    {ch.name}
                    <span className="ml-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-papel/40">{ch.sub}</span>
                  </span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/6">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(ch.value / CHANNEL_MAX) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ background: ch.accent }}
                    />
                  </div>
                  <span className="w-[58px] flex-shrink-0 text-right text-[12.5px] font-medium tabular-nums text-papel sm:text-[13.5px]">
                    <AnimatedCounter target={ch.value} separator duration={1600} />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="lead-type mt-9 max-w-[66ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">{c.results.body}</p>
          <p className="mt-5 max-w-[60ch] text-[11.5px] uppercase tracking-[0.16em] text-papel/40">
            Datos reales de Acriland · Google Search Console y analítica del sitio.
          </p>
        </div>
      </ShellWrap>

      {/* ═══════════ V · CONTENIDO Y REDES ═══════════ */}
      <ShellWrap data="light" variant="papel">
        <ChapterTag roman="V" label="Contenido y marca" sub="Redes sociales" />
        <div className="mt-5 grid items-end gap-6 lg:grid-cols-12">
          <h2 className="hero-type max-w-[24ch] text-[26px] text-onyx sm:text-[36px] lg:col-span-7 lg:text-[40px]" style={{ fontWeight: 300 }}>
            Contenido que <span className="multi-grad">despierta confianza</span> y se queda en la mente.
          </h2>
          <p className="lead-type text-[14.5px] sm:text-[15.5px] lg:col-span-5">
            Producimos los conceptos, guiones, grabación y edición. Todo orgánico, sin pauta — con piezas que rozaron las
            100,000 vistas. Los clientes empezaron a llegar diciendo que los vieron en TikTok e Instagram.
          </p>
        </div>

        {/* Galería de reels — lazy, preload none */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {REELS.map((r, i) => (
            <motion.div key={r.src} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise}>
              <LazyVideo src={r.src} poster={r.poster} label={r.label} />
            </motion.div>
          ))}
        </div>

        {/* Stat destacado de un reel */}
        <div className="mt-5 grid items-stretch gap-3 sm:gap-4 lg:grid-cols-12">
          <div className="rounded-[22px] bg-onyx p-6 sm:p-8 lg:col-span-7" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 40px rgba(0,0,0,0.16)' }}>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-papel/50">Un solo reel · 100% orgánico</span>
            <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {TIKTOK_STATS.map((t) => (
                <div key={t.label}>
                  <t.icon className="h-4 w-4 text-rubor-b" />
                  <p className="mt-2 text-[22px] font-light tracking-tight text-papel sm:text-[26px]" style={{ letterSpacing: '-0.03em' }}>
                    <AnimatedCounter target={t.v} separator />
                  </p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-papel/45">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[22px] bg-lino lg:col-span-5">
            <Image
              src="/portfolio/acriland-marketing-digital.jpg"
              alt="Contenido de redes sociales de Acriland producido por Antuario — donde la precisión se encuentra con la creatividad."
              width={900}
              height={1125}
              draggable={false}
              loading="lazy"
              className="h-full min-h-[220px] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Sitio en vivo */}
        <div className="mt-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">El sitio en vivo</span>
          <p className="mt-2 max-w-[60ch] text-[14px] text-grafito sm:text-[15px]">
            Una web con ecommerce optimizado, fichas de producto y fabricación a la medida — pensada para convertir.
          </p>
          <div className="mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2">
            {[
              { src: '/portfolio/acriland/acriland-sitio-catalogo.jpg', alt: 'Catálogo del sitio web de Acriland desarrollado por Antuario con exhibidores de acrílico.' },
              { src: '/portfolio/acriland/acriland-sitio-ecommerce.jpg', alt: 'Ficha de producto y ecommerce del sitio de Acriland desarrollado por Antuario.' },
            ].map((shot) => (
              <div key={shot.src} className="overflow-hidden rounded-[18px] bg-lino shadow-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={shot.src} alt={shot.alt} loading="lazy" className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </ShellWrap>

      {/* ═══════════ VI · BLINDAJE / CIERRE ═══════════ */}
      <ShellWrap data="dark" variant="dark">
        <div className="aurora aurora-quiet absolute inset-0 opacity-40" aria-hidden />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ChapterTag roman="VI" label="El cierre" sub="Blindaje comercial" dark />
          <h2 className="hero-type mx-auto mt-6 max-w-[22ch] text-[26px] text-papel sm:text-[38px] lg:text-[44px]" style={{ fontWeight: 300 }}>
            Le dimos a Acriland <span className="multi-grad-bright">orden, estructura y todos los fierros</span> para crecer.
          </h2>
          <p className="lead-type mx-auto mt-6 max-w-[58ch] text-[14.5px] !text-papel/70 sm:text-[16px]">
            Hemos blindado comercial y estructuralmente a Acriland: marca, web, SEO, software a la medida y contenido —
            con gestión mes tras mes y números 100% reales y transparentes. Hoy es uno de nuestros mejores clientes.
            Los recomendamos muchísimo: no les fallarán.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {['Marca y web', 'SEO orgánico', 'Software / CRM', 'Contenido', 'Presencia en IA'].map((t) => (
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
        title="¿Quieres un caso de éxito"
        highlight="parecido al de Acriland?"
        description="Cuéntanos qué reto persigues. Diseñamos un sistema a la medida para tu empresa — con accountability y métricas medibles desde el día uno."
        secondary={{ label: 'Conocer servicios', href: '/servicios' }}
      />
    </SiteFrame>
  )
}
