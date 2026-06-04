'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Check, Camera, Megaphone, MessageCircle, Sparkles, Heart, Eye, Film, BookOpen } from 'lucide-react'
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
import { LazyVideo } from '@/components/common/LazyVideo'

const SLUG = 'somos-unno-redes-sociales-meta-ads'

const HERO_STATS = [
  { v: 'Cero', l: 'punto de partida' },
  { v: 'Miles', l: 'de leads generados' },
  { v: 'Saturados', l: 'de pedidos' },
  { v: 'WhatsApp', l: 'donde cierra la venta' },
]

const PILLARS = [
  {
    n: '01',
    icon: Sparkles,
    t: 'Marca y activos digitales',
    d: 'Construimos su marca y configuramos correctamente todos sus activos digitales —perfiles, catálogo y canales— para arrancar con bases sólidas y una identidad apetecible.',
    accent: '#FCD34D',
    href: '/servicios/diseno-creativo',
    anchor: 'agencia de branding y diseño',
  },
  {
    n: '02',
    icon: Camera,
    t: 'Creación de contenido',
    d: 'Nuestros fotógrafos, editores, diseñadores y guionistas produjeron reels en distintos formatos: pilares promocionales y piezas orgánicas como reseñas de películas y mini-blogs de recomendaciones.',
    accent: '#FDA4AF',
    href: '/servicios/redes-sociales',
    anchor: 'agencia de redes sociales',
  },
  {
    n: '03',
    icon: Megaphone,
    t: 'Performance ads en Meta',
    d: 'Lanzamos campañas en Facebook e Instagram —incluidas campañas de temporada como San Valentín— dirigidas directo a WhatsApp, con A/B testing creativo continuo.',
    accent: '#F59E0B',
    href: '/servicios/performance-ads',
    anchor: 'agencia de Meta Ads',
  },
  {
    n: '04',
    icon: MessageCircle,
    t: 'Seguimiento de leads',
    d: 'Atendimos a cada lead para que el cliente solo se ocupara de producir y entregar experiencias memorables. Trabajamos por números: rendimiento de redes y de campaña, medible y transparente.',
    accent: '#6EE7B7',
    href: '/servicios',
    anchor: 'agencia de marketing digital',
  },
]

// Reels producidos por Antuario — distintos formatos.
const REELS = [
  { src: '/portfolio/somos-unno/su-reel-experiencias.mp4', poster: '/portfolio/somos-unno/su-reel-experiencias-poster.jpg', label: 'Pilar · experiencias', icon: Heart },
  { src: '/portfolio/somos-unno/su-reel-cita.mp4', poster: '/portfolio/somos-unno/su-reel-cita-poster.jpg', label: 'Promocional · cita', icon: Heart },
  { src: '/portfolio/somos-unno/su-reel-cafe.mp4', poster: '/portfolio/somos-unno/su-reel-cafe-poster.jpg', label: 'Orgánico · recomendación', icon: BookOpen },
  { src: '/portfolio/somos-unno/su-reel-pelicula.mp4', poster: '/portfolio/somos-unno/su-reel-pelicula-poster.jpg', label: 'Orgánico · reseña de cine', icon: Film },
]

// Galería de fotografía gastronómica.
const GALLERY = [
  { src: '/portfolio/somos-unno/su-tabla-fruta.jpg', alt: 'Tabla de frutas y quesos gourmet de Somos Unno fotografiada por Antuario.' },
  { src: '/portfolio/somos-unno/su-box-1.jpg', alt: 'Picnic box de charcutería de Somos Unno con quesos, embutidos y fruta — fotografía de producto por Antuario.' },
  { src: '/portfolio/somos-unno/su-tabla-baguette.jpg', alt: 'Tabla de charcutería con baguette, aceitunas y mermeladas de Somos Unno producida por Antuario.' },
  { src: '/portfolio/somos-unno/su-vino-tablas.jpg', alt: 'Tablas de quesos y vino de Somos Unno — contenido de redes sociales producido por Antuario.' },
]

// Embudo de campaña Meta → WhatsApp.
const FUNNEL = [
  { icon: Eye, t: 'Anuncio en Meta', d: 'Reels y artes en Facebook e Instagram que despiertan el antojo.', accent: '#FCD34D' },
  { icon: ArrowRight, t: 'Clic', d: 'El usuario toca el anuncio y abre conversación.', accent: '#FDA4AF' },
  { icon: WhatsAppIcon, t: 'WhatsApp', d: 'Atendemos el lead al instante y resolvemos dudas.', accent: '#6EE7B7' },
  { icon: Check, t: 'Pedido', d: 'Se cierra la venta. El cliente solo produce y entrega.', accent: '#F59E0B' },
]

export function SomosUnnoCaseContent() {
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
            <div className="su-aurora pointer-events-none absolute inset-0 opacity-70" aria-hidden />
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
                  {c.hero.title} <span className="su-grad">{c.hero.highlight}</span>
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
                  style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.3), 0 30px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(245,158,11,0.15)' }}
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
                Somos Unno es una marca mexicana de <strong className="text-onyx">charcutería, tablas de quesos y picnic
                boxes gourmet</strong>. Llegaron a Antuario prácticamente empezando: nos contrataron para tomar sus fotos,
                crear su contenido e implementar campañas en Meta Ads —Facebook e Instagram— para activar la demanda y
                conseguir clientes. Como{' '}
                <Link href="/servicios/redes-sociales" className="font-medium text-cobalto underline decoration-cobalto/30 underline-offset-2 transition-opacity hover:opacity-70">agencia de redes sociales</Link>,
                nos encargamos de todo: marca, contenido, pauta y seguimiento de leads.
              </p>
              <p>
                Construimos la marca, desarrollamos sus activos digitales y los configuramos correctamente. Nuestro equipo de{' '}
                <Link href="/servicios/diseno-creativo" className="font-medium text-cobalto underline decoration-cobalto/30 underline-offset-2 transition-opacity hover:opacity-70">diseño y producción creativa</Link>{' '}
                —fotógrafos, editores, diseñadores y guionistas— produjo reels en distintos formatos: pilares promocionales
                y piezas más orgánicas como reseñas de películas o mini-blogs de recomendaciones. Probamos varios formatos y
                medimos cuáles funcionaban mejor.
              </p>
              <p>
                Trabajamos con accountability total, encargándonos de los números de redes sociales y del rendimiento de
                campaña. Llevamos pauta de temporada —como San Valentín— con{' '}
                <Link href="/servicios/performance-ads" className="font-medium text-cobalto underline decoration-cobalto/30 underline-offset-2 transition-opacity hover:opacity-70">campañas de Meta Ads</Link>{' '}
                dirigidas directo a WhatsApp, donde se cerraba la venta. Generamos miles de leads de forma muy rápida — al
                poco tiempo de comenzar, Somos Unno ya estaba saturado de pedidos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-5">
            {[
              { label: 'Marca', value: 'Somos Unno' },
              { label: 'Industria', value: 'Charcutería gourmet' },
              { label: 'Servicios', value: c.services.join(' · ') },
              { label: 'Cierre de venta', value: 'WhatsApp' },
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
          <ChapterTag roman="I" label="El reto" sub="Arrancar desde cero" dark />
          <h2 className="hero-type mt-5 max-w-[26ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
            {c.challenge.headline}
          </h2>
          <p className="lead-type mt-6 max-w-[66ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">{c.challenge.body}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { t: 'Sin presencia digital', d: 'Empezaban de cero: sin redes activas, sin contenido y sin una fuente de clientes.' },
              { t: 'Categoría visual', d: 'En charcutería gourmet, la compra entra por los ojos. Sin fotografía profesional, la marca no existía.' },
              { t: 'Demanda por activar', d: 'Necesitaban campañas que generaran pedidos reales, no solo likes ni alcance vacío.' },
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
        <ChapterTag roman="II" label="La estrategia" sub="Qué hicimos" />
        <h2 className="hero-type mt-5 max-w-[28ch] text-[26px] text-onyx sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
          {c.strategy.headline}
        </h2>
        <p className="lead-type mt-5 max-w-[64ch] text-[14.5px] sm:text-[15.5px]">
          Diseñamos para Somos Unno un sistema donde el contenido y la pauta se refuerzan: piezas que despiertan el antojo,
          campañas que las amplifican y un canal de cierre por WhatsApp. Así es como una agencia de redes sociales convierte
          una marca nueva en una marca deseada.
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

      {/* ═══════════ III · CONTENIDO QUE DA HAMBRE ═══════════ */}
      <ShellWrap data="light" variant="papel">
        <ChapterTag roman="III" label="Contenido" sub="Que da hambre" />
        <div className="mt-5 grid items-end gap-6 lg:grid-cols-12">
          <h2 className="hero-type max-w-[24ch] text-[26px] text-onyx sm:text-[36px] lg:col-span-7 lg:text-[40px]" style={{ fontWeight: 300 }}>
            Contenido que <span className="su-grad-dark">despierta el antojo</span> y se queda en la mente.
          </h2>
          <p className="lead-type text-[14.5px] sm:text-[15.5px] lg:col-span-5">
            Producimos los conceptos, guiones, fotografía, grabación y edición. Reels en distintos formatos: pilares
            promocionales y piezas orgánicas como reseñas de cine y mini-blogs de recomendaciones — para construir marca y
            comunidad, no solo vender.
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

        {/* Galería de fotografía */}
        <div className="mt-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">Fotografía de producto</span>
          <p className="mt-2 max-w-[60ch] text-[14px] text-grafito sm:text-[15px]">
            Sesiones de fotografía gastronómica con dirección de arte — cada tabla, pensada para verse tan rica como sabe.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <motion.div
                key={g.src}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={rise}
                className="overflow-hidden rounded-[18px] bg-lino shadow-soft"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.alt} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-[1.05]" />
              </motion.div>
            ))}
          </div>
        </div>
      </ShellWrap>

      {/* ═══════════ IV · CAMPAÑAS QUE VENDEN ═══════════ */}
      <ShellWrap data="dark" variant="dark">
        <div className="su-aurora pointer-events-none absolute inset-0 opacity-55" aria-hidden />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-10" />
        <div className="relative z-10">
          <ChapterTag roman="IV" label="Performance Ads" sub="Meta → WhatsApp" dark />
          <h2 className="hero-type mt-5 max-w-[28ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
            Campañas en Meta que dirigen <span className="su-grad">directo a la venta.</span>
          </h2>
          <p className="lead-type mt-6 max-w-[66ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">
            Lanzamos campañas en Facebook e Instagram con A/B testing creativo continuo. Cada anuncio dirige a WhatsApp, donde
            atendemos el lead y se cierra la venta. Incluimos campañas de temporada —como San Valentín— que amplifican el
            antojo justo cuando la gente está lista para comprar.
          </p>

          {/* Embudo animado Meta → WhatsApp */}
          <div className="mt-10 rounded-[22px] p-5 sm:p-7" style={{ background: 'rgba(255,255,255,0.025)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}>
            <div className="flex flex-col gap-0 lg:flex-row lg:items-stretch">
              {FUNNEL.map((step, i) => (
                <div key={step.t} className="flex flex-1 flex-col lg:flex-row lg:items-stretch">
                  <div className="flex flex-1 items-start gap-3.5 lg:flex-col lg:items-start">
                    <div className="relative flex-shrink-0">
                      <span
                        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-onyx"
                        style={{ background: step.accent, boxShadow: `0 0 0 6px ${step.accent}1f` }}
                      >
                        <step.icon className="h-5 w-5" />
                      </span>
                      <span className="pointer-events-none absolute inset-0 rounded-2xl su-funnel-pulse" style={{ animationDelay: `${i * 0.4}s`, color: step.accent }} />
                    </div>
                    <div className="lg:mt-3.5">
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-papel/40">{String(i + 1).padStart(2, '0')}</span>
                      <h4 className="mt-0.5 text-[14px] font-medium text-papel sm:text-[15px]">{step.t}</h4>
                      <p className="mt-1 max-w-[24ch] text-[12px] leading-[1.5] text-papel/55">{step.d}</p>
                    </div>
                  </div>
                  {i < FUNNEL.length - 1 && (
                    <div className="relative my-2 ml-[21px] flex w-px flex-shrink-0 items-center self-stretch lg:mx-3 lg:my-0 lg:h-px lg:w-auto lg:flex-1 lg:self-center">
                      <span className="absolute inset-0 bg-white/10" />
                      <span className="absolute left-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 rounded-full su-flow-x lg:block" style={{ background: step.accent, boxShadow: `0 0 8px ${step.accent}`, animationDelay: `${i * 0.5}s` }} />
                      <span className="absolute top-0 h-1.5 w-1.5 rounded-full su-flow-y lg:hidden" style={{ background: step.accent, boxShadow: `0 0 8px ${step.accent}`, animationDelay: `${i * 0.5}s`, left: '-2.5px' }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Campaña de temporada — San Valentín */}
          <div className="mt-8 grid items-center gap-5 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[20px] lg:col-span-5"
              style={{ boxShadow: '0 18px 40px rgba(0,0,0,0.3)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/portfolio/somos-unno/su-promo-sanvalentin.jpg"
                alt="Campaña de San Valentín de Somos Unno — arte promocional del Kit Picnic diseñado por Antuario para Meta Ads."
                loading="lazy"
                className="w-full"
              />
            </motion.div>
            <div className="lg:col-span-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-nectar-b">Campaña de temporada</span>
              <h3 className="mt-3 text-[20px] font-light text-papel sm:text-[24px]" style={{ letterSpacing: '-0.02em' }}>
                Kit Picnic de San Valentín
              </h3>
              <p className="mt-3 max-w-[56ch] text-[13.5px] leading-[1.6] text-papel/65 sm:text-[14px]">
                Concepto, arte y copy producidos por nuestro equipo. Pauta segmentada en Meta dirigida a WhatsApp, lista para
                aprovechar el pico de demanda del 14 de febrero. El tipo de campaña estacional que convierte una fecha en
                ventas reales.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {['Concepto y arte', 'Copy persuasivo', 'Pauta en Meta', 'Cierre por WhatsApp'].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-white/6 px-3 py-1.5 text-[11.5px] text-papel/80">
                    <Check className="h-3 w-3 text-nectar-b" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ShellWrap>

      {/* ═══════════ V · RESULTADOS ═══════════ */}
      <ShellWrap data="light" variant="marfil">
        <ChapterTag roman="V" label="Resultados" sub="Lo que logramos" />
        <h2 className="hero-type mt-5 max-w-[26ch] text-[26px] text-onyx sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
          {c.results.headline}
        </h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {c.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="card-bb-soft p-5 sm:p-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-plomo">{m.label}</span>
              <p className="mt-2 text-[26px] font-light tracking-tight text-onyx sm:text-[32px]" style={{ letterSpacing: '-0.028em' }}>
                {m.value}
              </p>
              <span className="mt-1 inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-nectar">{m.delta}</span>
            </motion.div>
          ))}
        </div>

        <p className="lead-type mt-9 max-w-[68ch] text-[14.5px] sm:text-[15.5px]">{c.results.body}</p>
        <p className="mt-5 max-w-[64ch] text-[11.5px] uppercase tracking-[0.16em] text-plomo">
          Caso desarrollado por Antuario para Somos Unno · contenido, redes sociales y Meta Ads.
        </p>
      </ShellWrap>

      {/* ═══════════ VI · CIERRE ═══════════ */}
      <ShellWrap data="dark" variant="dark">
        <div className="su-aurora pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ChapterTag roman="VI" label="El cierre" sub="Una marca deseada" dark />
          <h2 className="hero-type mx-auto mt-6 max-w-[24ch] text-[26px] text-papel sm:text-[38px] lg:text-[44px]" style={{ fontWeight: 300 }}>
            Construimos una marca <span className="su-grad">hermosa, confiable y deseada.</span>
          </h2>
          <p className="lead-type mx-auto mt-6 max-w-[62ch] text-[14.5px] !text-papel/70 sm:text-[16px]">
            Nuestro equipo hizo un gran trabajo con la fotografía, los artes, los videos, las campañas y el seguimiento de
            leads. Convertimos a Somos Unno en una marca de gran calidad — y le activamos la demanda desde cero hasta
            saturarlos de pedidos. El cliente pudo dedicarse a lo suyo: producir y entregar experiencias memorables.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {['Marca y diseño', 'Fotografía y video', 'Reels multiformato', 'Meta Ads', 'Seguimiento de leads'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-white/6 px-3 py-1.5 text-[11.5px] text-papel/80">
                <Check className="h-3 w-3 text-nectar-b" />
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
        highlight="parecido al de Somos Unno?"
        description="Cuéntanos qué marca quieres activar. Producimos contenido, lanzamos campañas y te traemos clientes — medible y transparente desde el día uno."
        secondary={{ label: 'Conocer servicios', href: '/servicios' }}
      />

      <style jsx global>{`
        .su-grad {
          background: linear-gradient(100deg, #FCD34D 0%, #F59E0B 45%, #FDA4AF 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .su-grad-dark {
          background: linear-gradient(100deg, #D97706 0%, #E11D48 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .su-aurora {
          background:
            radial-gradient(42% 55% at 18% 16%, rgba(245,158,11,0.28), transparent 60%),
            radial-gradient(40% 50% at 84% 22%, rgba(253,164,175,0.24), transparent 62%),
            radial-gradient(52% 60% at 60% 92%, rgba(252,211,77,0.16), transparent 65%);
          filter: blur(4px);
          animation: suDrift 16s ease-in-out infinite alternate;
        }
        @keyframes suDrift {
          0%   { transform: translate3d(0,0,0) scale(1); }
          100% { transform: translate3d(0,-2%,0) scale(1.06); }
        }
        .su-funnel-pulse {
          animation: suFunnelPulse 2.6s ease-out infinite;
          box-shadow: 0 0 0 0 currentColor;
        }
        @keyframes suFunnelPulse {
          0%   { box-shadow: 0 0 0 0 currentColor; opacity: 0.5; }
          70%  { box-shadow: 0 0 0 14px transparent; opacity: 0; }
          100% { box-shadow: 0 0 0 0 transparent; opacity: 0; }
        }
        .su-flow-x { animation: suFlowX 2.4s linear infinite; }
        @keyframes suFlowX {
          0% { left: 0%; opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { left: 100%; opacity: 0; }
        }
        .su-flow-y { animation: suFlowY 2.4s linear infinite; }
        @keyframes suFlowY {
          0% { top: 0%; opacity: 0; } 15% { opacity: 1; } 85% { opacity: 1; } 100% { top: 100%; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .su-aurora, .su-funnel-pulse, .su-flow-x, .su-flow-y { animation: none; }
        }
      `}</style>
    </SiteFrame>
  )
}
