'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Check, Search, MessageCircle, Mail, Phone, FileText } from 'lucide-react'
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
import { AccountabilityBoard } from '@/components/common/AccountabilityBoard'

const SLUG = 'metrica-btl-desarrollo-web-seo'

const HERO_STATS = [
  { v: 'Demanda 0', l: 'punto de partida' },
  { v: '+25 años', l: 'de experiencia BTL' },
  { v: '278', l: 'solicitudes de contacto' },
  { v: '6 meses', l: 'desde nov. 2025' },
]

const PILLARS = [
  {
    n: '01',
    t: 'Rediseño web estratégico',
    d: 'Su sitio era un folleto digital: deuda técnica, cero SEO y cero CRO. Lo reconstruimos por completo, con cada copy pensado para posicionar, persuadir y —sobre todo— generar confianza, comunicando su experiencia, equipo, oficinas, capacidad operativa y su permiso REPSE.',
    accent: '#818CF8',
    href: '/servicios/desarrollo-web',
    anchor: 'desarrollo web profesional',
  },
  {
    n: '02',
    t: 'Posicionamiento SEO técnico',
    d: 'Montamos todo el SEO técnico y de contenido para que Métrica BTL apareciera en Google ante quien busca activaciones, promotoría y eventos. Empezamos por dominar su propia marca y escalamos hacia las keywords del negocio.',
    accent: '#6EE7B7',
    href: '/servicios/seo',
    anchor: 'agencia SEO en México',
  },
  {
    n: '03',
    t: 'Google Ads para activar demanda',
    d: 'Lanzamos campañas para activar la demanda de inmediato, sin esperar a que madurara el SEO. La pauta además alimenta el posicionamiento: trae tráfico relevante y recurrente que acelera la confianza de Google en el dominio.',
    accent: '#67E8F9',
    href: '/servicios/performance-ads',
    anchor: 'agencia de Google Ads',
  },
  {
    n: '04',
    t: 'Sistema comercial y accountability',
    d: 'Montamos la gestión del área comercial y de marketing con todo trackeable y unificado, con reporte mensual al cliente. Cada número tiene un responsable: trabajamos con accountability total, igual que con nuestros mejores casos.',
    accent: '#FDA4AF',
    href: '/servicios',
    anchor: 'agencia de marketing digital',
  },
]

// Resultados — datos reales (Wix Analytics, Search Console, GA4) nov 2025 → may 2026.
const METRICS = [
  { target: 278, sep: false, suffix: '', label: 'Solicitudes de contacto', delta: 'nov 2025 — may 2026' },
  { target: 1900, sep: true, suffix: '', label: 'Sesiones del sitio', delta: '+14,515% vs. baseline' },
  { target: 1419, sep: true, suffix: '', label: 'Visitantes únicos', delta: '+17,638%' },
  { target: 22.2, sep: false, decimals: 1, suffix: '%', label: 'Tasa de conversión', delta: 'B2B · pico sin pauta' },
]

// Sesiones por fuente de tráfico (Wix Analytics — periodo completo).
const CHANNELS = [
  { name: 'Google', sub: 'De pago', value: 650, accent: '#FCD34D' },
  { name: 'Google', sub: 'Orgánica · ↑27,300%', value: 548, accent: '#6EE7B7' },
  { name: 'Directa', sub: '↑ 4,000%', value: 451, accent: '#67E8F9' },
  { name: 'Referencia', sub: 'metricaprom.', value: 64, accent: '#818CF8' },
  { name: 'ChatGPT', sub: 'IA', value: 48, accent: '#FDA4AF' },
]
const CHANNEL_MAX = Math.max(...CHANNELS.map((c) => c.value))

// Cómo contactan — distribución de las acciones de contacto (datos GA4 + Wix).
const CONTACTS = [
  { icon: MessageCircle, name: 'WhatsApp', sub: 'Flotante + contacto', pct: 69.1, accent: '#6EE7B7' },
  { icon: Mail, name: 'Correo', sub: 'Hablemos por correo', pct: 11.5, accent: '#67E8F9' },
  { icon: Phone, name: 'Llamada', sub: 'Hablemos por teléfono', pct: 10.8, accent: '#818CF8' },
  { icon: FileText, name: 'Formulario', sub: 'Formulario enviado', pct: 8.6, accent: '#FDA4AF' },
]
const CONTACT_MAX = Math.max(...CONTACTS.map((c) => c.pct))

const NEW_CLIENTS = ['Uber Eats', 'Telcel', 'Macropay']
const LEGACY_CLIENTS = ['Colgate', 'Suavitel', 'Palmolive']

export function MetricaBtlCaseContent() {
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

      {/* ═══════════ ASÍ APARECE EN GOOGLE ═══════════ */}
      <ShellWrap data="light" variant="marfil">
        <div className="mx-auto max-w-[940px] text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
            Posicionamiento orgánico · Google
          </span>
          <h2 className="hero-type mx-auto mt-4 max-w-[22ch] text-[26px] text-onyx sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
            Así aparece Métrica BTL cuando <span className="multi-grad">buscas en Google.</span>
          </h2>
          <p className="lead-type mx-auto mt-4 max-w-[60ch] text-[14px] sm:text-[15px]">
            De no existir en buscadores a dominar su marca con sitelinks y ficha de negocio verificada. Y más allá de su
            nombre, hoy aparece para keywords del negocio como «agencia btl» y «empresas btl» — posicionamiento SEO real
            que pone a Métrica BTL frente a quien busca activaciones.
          </p>
        </div>

        {/* Mockup buscador */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-10 max-w-[1040px]"
        >
          <div
            className="overflow-hidden rounded-[20px] bg-papel sm:rounded-[26px]"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(15,15,30,0.05), 0 4px 12px rgba(15,15,30,0.08), 0 30px 64px rgba(15,15,30,0.14)' }}
          >
            {/* Chrome + barra de búsqueda Google */}
            <div className="flex items-center gap-3 border-b border-onyx/6 px-3 py-3 sm:px-4">
              <span className="hidden gap-1.5 sm:flex">
                <span className="h-2.5 w-2.5 rounded-full bg-onyx/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-onyx/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-onyx/10" />
              </span>
              <div
                className="flex flex-1 items-center gap-2.5 rounded-full bg-marfil px-4 py-2 sm:py-2.5"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(15,15,30,0.06)' }}
              >
                <GoogleG className="h-4 w-4 flex-shrink-0" />
                <span className="flex-1 truncate text-[13px] text-onyx sm:text-[14px]">agencia btl</span>
                <span className="hidden h-4 w-px bg-onyx/10 sm:block" />
                <Search className="h-4 w-4 flex-shrink-0" style={{ color: '#4285F4' }} />
              </div>
              <span className="hidden items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] sm:inline-flex" style={{ background: 'rgba(52,211,153,0.14)', color: '#1a7f4b' }}>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70" style={{ background: '#34D399' }} />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: '#34D399' }} />
                </span>
                Rank orgánico
              </span>
            </div>

            {/* Captura del resultado */}
            <Image
              src="/portfolio/metrica-btl/metrica-google-serp.jpg"
              alt="Métrica BTL posicionado en Google con sitelinks y ficha de Google Business verificada — agencia de marketing en CDMX, posicionamiento SEO orgánico logrado por Antuario."
              width={1600}
              height={737}
              draggable={false}
              loading="lazy"
              className="w-full"
              sizes="(max-width: 1024px) 100vw, 1040px"
            />
          </div>

          {/* Highlights de la ficha de Google Business */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-grafito sm:text-[12.5px]">
            <span className="inline-flex items-center gap-1.5"><span style={{ color: '#F59E0B' }}>★</span> 3.9 · 26 reseñas en Google</span>
            <span className="hidden h-3 w-px bg-onyx/12 sm:block" />
            <span>Ficha de Google Business verificada</span>
            <span className="hidden h-3 w-px bg-onyx/12 sm:block" />
            <span>Posición media 7.8 · Search Console</span>
          </div>
        </motion.div>
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
                Métrica BTL es una agencia mexicana de activaciones, promotoría y experiencias de marca con más de{' '}
                <strong className="text-onyx">25 años de trayectoria</strong>. Tiene oficinas, equipo interno para operar
                casi cualquier proyecto y toda la regulación legal requerida (permiso REPSE). En su historia ha trabajado
                con marcas globales como Colgate, Suavitel y Palmolive. Como{' '}
                <Link href="/servicios" className="font-medium text-cobalto underline decoration-cobalto/30 underline-offset-2 transition-opacity hover:opacity-70">agencia de marketing digital</Link>,
                desde noviembre de 2025 nos encargamos de su sitio, su posicionamiento y su sistema comercial — bajo una sola dirección.
              </p>
              <p>
                Es un negocio B2B de nicho: sus números no son masivos, pero cada solicitud de contacto pesa muchísimo
                porque puede valer un proyecto de seis cifras. Por eso el reto no era «traer tráfico», sino traer el{' '}
                <strong className="text-onyx">tráfico correcto</strong> y convertirlo. Reconstruimos su{' '}
                <Link href="/servicios/desarrollo-web" className="font-medium text-cobalto underline decoration-cobalto/30 underline-offset-2 transition-opacity hover:opacity-70">desarrollo web profesional</Link>,
                montamos el SEO técnico y activamos Google Ads para encender la demanda desde el primer mes.
              </p>
              <p>
                Este es el tipo de proyecto que define a Antuario como{' '}
                <Link href="/servicios/seo" className="font-medium text-cobalto underline decoration-cobalto/30 underline-offset-2 transition-opacity hover:opacity-70">agencia SEO en México</Link>:
                no vendemos volumen ni paquetes prefabricados, construimos sistemas a la medida para empresas con proyectos
                serios. Desde nuestra sede en CDMX operamos cuentas en toda la República — y el caso Métrica BTL es la prueba
                de qué pasa cuando el desarrollo web, el posicionamiento orgánico y el performance trabajan juntos, con
                accountability y transparencia total.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-5">
            {[
              { label: 'Marca', value: 'Métrica BTL' },
              { label: 'Industria', value: 'Agencia BTL · Activaciones' },
              { label: 'Servicios', value: c.services.join(' · ') },
              { label: 'Colaboración', value: 'Desde nov. 2025 · activa' },
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
          <ChapterTag roman="I" label="El reto" sub="Demanda en cero" dark />
          <h2 className="hero-type mt-5 max-w-[26ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
            {c.challenge.headline}
          </h2>
          <p className="lead-type mt-6 max-w-[66ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">{c.challenge.body}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { t: 'Adquisición en cero', d: 'Vivían de clientes cautivos de hace años. Perdían cuentas sin ganar una sola nueva.' },
              { t: '3–4 intentos fallidos', d: 'Contrataron a varias personas internas para armar web y campañas. Ninguna dio la talla.' },
              { t: 'Dueños escépticos', d: 'Creían que a las marcas grandes solo se llega por contactos o boca a boca, nunca por internet.' },
            ].map((b) => (
              <div key={b.t} className="rounded-[18px] p-5" style={{ background: 'rgba(255,255,255,0.03)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}>
                <h3 className="text-[14.5px] font-medium text-papel sm:text-[15.5px]">{b.t}</h3>
                <p className="mt-2 text-[12.5px] leading-[1.55] text-papel/60 sm:text-[13px]">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </ShellWrap>

      {/* ═══════════ II · ESTRATEGIA ═══════════ */}
      <ShellWrap data="light" variant="marfil">
        <ChapterTag roman="II" label="La estrategia" sub="Qué construimos" />
        <h2 className="hero-type mt-5 max-w-[28ch] text-[26px] text-onyx sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
          {c.strategy.headline}
        </h2>
        <p className="lead-type mt-5 max-w-[64ch] text-[14.5px] sm:text-[15.5px]">
          No atacamos un solo frente. Diseñamos para Métrica BTL un sistema donde cada pieza —web, SEO, Google Ads y
          gestión comercial— se refuerza con las demás. Así es como una agencia de marketing digital convierte 25 años de
          capacidad operativa en demanda real y medible.
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
            Implementamos para Métrica BTL un sistema 100% transparente y trackeable: web, SEO, Google Ads y embudo
            comercial bajo un mismo tablero. Entregamos un reporte <strong className="!text-papel">mensual</strong> con
            cada métrica y su responsable, y lecturas <strong className="!text-papel">trimestrales</strong> estratégicas
            con toda la información que dirección necesita para decidir.
          </p>

          <div className="mt-10">
            <AccountabilityBoard
              label="dashboard.metricabtl · antuario"
              barsTitle="Sesiones del sitio · dic — may"
              barsFootStart="Demanda 0"
              barsFootEnd="Hoy · sin pauta"
              kpis={[
                { label: 'Solicitudes de contacto', value: 278, suffix: '', owner: 'Growth', accent: '#818CF8' },
                { label: 'Sesiones del sitio', value: 1900, suffix: '', owner: 'Growth', accent: '#67E8F9' },
                { label: 'Impresiones en Google', value: 22200, suffix: '', owner: 'SEO Lead', accent: '#6EE7B7' },
                { label: 'Tasa de conversión', value: 22, suffix: '%', owner: 'Estrategia', accent: '#FDA4AF' },
              ]}
              bars={[3, 5, 9, 29, 47, 33, 26, 23, 34, 40, 19, 21]}
              reports={{
                mensual: {
                  tag: 'Reporte mensual',
                  title: 'Lectura táctica, cada mes.',
                  body: 'Cada mes entregamos a Métrica BTL un reporte con tráfico, conversiones por canal, queries y posición orgánica, rendimiento de Ads y costo por solicitud — con la acción concreta detrás de cada número.',
                  items: ['Wix + GA4 · sesiones y conversiones', 'Search Console · queries y posición', 'Google Ads · inversión, CTR y costo/contacto'],
                },
                trimestral: {
                  tag: 'Reporte trimestral',
                  title: 'Lectura estratégica, cada trimestre.',
                  body: 'Cada trimestre subimos a altura estratégica: cuándo escalar pauta, cuándo apagarla y dejar que el orgánico cargue, qué servicio empujar y qué decisiones tomar — con toda la data sobre la mesa.',
                  items: ['Mix de pauta vs. orgánico', 'Calidad del contacto, no solo volumen', 'Decisiones con data, no con corazonadas'],
                },
              }}
              footnote={
                <>
                  Cada líder del proyecto es responsable de <span className="text-papel">un número concreto</span>. Web, SEO, Ads y embudo se optimizan de forma quirúrgica — todo trackeable, todo transparente.
                </>
              }
            />
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

          <div className="mt-8 grid gap-3 sm:gap-4 lg:grid-cols-12">
            {/* Desglose por canal — sesiones */}
            <div className="rounded-[22px] p-5 sm:p-7 lg:col-span-7" style={{ background: 'rgba(255,255,255,0.025)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}>
              <div className="flex flex-wrap items-end justify-between gap-2">
                <h3 className="text-[15px] font-medium text-papel sm:text-[17px]">Sesiones por fuente de tráfico</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-salvia-b">activación · 6 meses</span>
              </div>
              <div className="mt-6 space-y-3.5">
                {CHANNELS.map((ch, i) => (
                  <div key={ch.name + ch.sub} className="flex items-center gap-3">
                    <span className="w-[92px] flex-shrink-0 text-[12.5px] text-papel/80 sm:w-[124px] sm:text-[13.5px]">
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
                    <span className="w-[52px] flex-shrink-0 text-right text-[12.5px] font-medium tabular-nums text-papel sm:text-[13.5px]">
                      <AnimatedCounter target={ch.value} separator duration={1600} />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cómo contactan — distribución de conversiones */}
            <div className="rounded-[22px] p-5 sm:p-7 lg:col-span-5" style={{ background: 'rgba(255,255,255,0.025)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}>
              <div className="flex flex-wrap items-end justify-between gap-2">
                <h3 className="text-[15px] font-medium text-papel sm:text-[17px]">Cómo contactan</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-salvia-b">% de contactos</span>
              </div>
              <div className="mt-6 space-y-4">
                {CONTACTS.map((ct, i) => (
                  <div key={ct.name}>
                    <div className="flex items-center justify-between text-[12.5px] text-papel/80 sm:text-[13px]">
                      <span className="inline-flex items-center gap-1.5">
                        <ct.icon className="h-3.5 w-3.5" style={{ color: ct.accent }} />
                        {ct.name}
                        <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-papel/40">{ct.sub}</span>
                      </span>
                      <span className="font-medium tabular-nums text-papel">{ct.pct}%</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/6">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(ct.pct / CONTACT_MAX) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{ background: ct.accent }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[11px] leading-snug text-papel/45">
                WhatsApp es el canal preferido del público B2B en México — casi 7 de cada 10 contactos.
              </p>
            </div>
          </div>

          <p className="lead-type mt-9 max-w-[66ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">{c.results.body}</p>

          {/* Nuevos clientes — prueba */}
          <div className="mt-8 rounded-[22px] p-6 sm:p-7" style={{ background: 'rgba(255,255,255,0.03)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-papel/50">Nuevos clientes cerrados por vía digital</span>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {NEW_CLIENTS.map((cl) => (
                <span key={cl} className="inline-flex items-center gap-1.5 rounded-full bg-white/8 px-3.5 py-2 text-[13px] font-medium text-papel">
                  <span className="h-1.5 w-1.5 rounded-full bg-salvia-b" />
                  {cl}
                </span>
              ))}
              <span className="inline-flex items-center rounded-full bg-white/[0.04] px-3.5 py-2 text-[13px] text-papel/55">y más</span>
            </div>
            <p className="mt-4 max-w-[60ch] text-[12.5px] leading-[1.55] text-papel/55">
              Justo el tipo de marcas que los dueños creían inalcanzables por internet — llegaron a través del sistema
              digital que construimos.
            </p>
          </div>

          <p className="mt-5 max-w-[64ch] text-[11.5px] uppercase tracking-[0.16em] text-papel/40">
            Datos reales de Métrica BTL · Wix Analytics, Google Search Console y GA4 · nov 2025 — may 2026.
          </p>
        </div>
      </ShellWrap>

      {/* ═══════════ V · SITIO EN VIVO ═══════════ */}
      <ShellWrap data="light" variant="papel">
        <ChapterTag roman="V" label="El sitio en vivo" sub="Web que genera confianza" />
        <div className="mt-5 grid items-end gap-6 lg:grid-cols-12">
          <h2 className="hero-type max-w-[24ch] text-[26px] text-onyx sm:text-[36px] lg:col-span-7 lg:text-[40px]" style={{ fontWeight: 300 }}>
            Un sitio que comunica <span className="multi-grad">25 años de capacidad</span> y convierte.
          </h2>
          <p className="lead-type text-[14.5px] sm:text-[15.5px] lg:col-span-5">
            Rediseñamos cada página para posicionar en Google, transmitir confianza e incentivar el contacto. Páginas de
            activaciones, promotoría, eventos y experiencias — con prueba social, capacidad operativa y CTAs claros.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[20px] bg-lino shadow-soft sm:rounded-[24px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portfolio/metrica-btl/metrica-sitio-activaciones.jpg"
            alt="Sitio web de Métrica BTL desarrollado por Antuario — landing de activaciones BTL en México con copy optimizado para SEO y conversión."
            loading="lazy"
            className="w-full"
          />
        </div>

        {/* Clientes históricos */}
        <div className="mt-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">Su trayectoria habla</span>
          <p className="mt-2 max-w-[64ch] text-[14px] text-grafito sm:text-[15px]">
            Más de 25 años operando activaciones para marcas globalmente reconocidas. La web por fin comunica esa autoridad.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {LEGACY_CLIENTS.map((cl) => (
              <span key={cl} className="inline-flex items-center gap-1.5 rounded-full bg-marfil px-3.5 py-2 text-[13px] font-medium text-onyx shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-cobalto" />
                {cl}
              </span>
            ))}
          </div>
        </div>
      </ShellWrap>

      {/* ═══════════ VI · BLINDAJE / CIERRE ═══════════ */}
      <ShellWrap data="dark" variant="dark">
        <div className="aurora aurora-quiet absolute inset-0 opacity-40" aria-hidden />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ChapterTag roman="VI" label="El cierre" sub="La apuesta que valió la pena" dark />
          <h2 className="hero-type mx-auto mt-6 max-w-[24ch] text-[26px] text-papel sm:text-[38px] lg:text-[44px]" style={{ fontWeight: 300 }}>
            Se arriesgaron, invirtieron, y les <span className="multi-grad-bright">demostramos que sí se puede.</span>
          </h2>
          <p className="lead-type mx-auto mt-6 max-w-[60ch] text-[14.5px] !text-papel/70 sm:text-[16px]">
            Los dueños de Métrica BTL eran escépticos: estaban convencidos de que clientes de esa talla solo se consiguen
            por contactos. Apostaron por nosotros, y en seis meses pasaron de demanda cero a no dar abasto — con marcas
            como Uber Eats, Telcel y Macropay tocando la puerta por vía digital. Tan exitosa fue la activación que su propio
            equipo comercial pidió pausar las campañas. Hoy operan con un sistema medible, transparente y que camina solo.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {['Web que genera confianza', 'SEO técnico', 'Google Ads', 'Sistema comercial', 'Accountability'].map((t) => (
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
        highlight="parecido al de Métrica BTL?"
        description="Cuéntanos qué reto persigues. Diseñamos un sistema a la medida para tu empresa — con accountability y métricas medibles desde el día uno."
        secondary={{ label: 'Conocer servicios', href: '/servicios' }}
      />
    </SiteFrame>
  )
}

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden focusable="false">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  )
}
