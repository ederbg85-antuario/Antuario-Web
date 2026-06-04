'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Check, Cpu, Database, FileText, Calculator, Sparkles, MessageCircle, CheckCheck } from 'lucide-react'
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
import { LazyVideo } from '@/components/common/LazyVideo'

const SLUG = 'reserva-27-desarrollo-web-agente-ia'

const HERO_STATS = [
  { v: '90%', l: 'del embudo automatizado' },
  { v: 'Al instante', l: 'cotización en vivo' },
  { v: '24/7', l: 'atención con agente IA' },
  { v: 'Todo', l: 'trackeable en un sistema' },
]

const PILLARS = [
  {
    n: '01',
    icon: Calculator,
    t: 'Sitio web con cotizador en vivo',
    d: 'Desarrollamos el sitio con un cotizador en tiempo real: el cliente arma su paquete paso a paso y ve el precio actualizándose al instante, con opción de recibirlo en PDF por WhatsApp o correo. Un diferenciador real frente a su competencia.',
    accent: '#F97316',
    href: '/servicios/desarrollo-web',
    anchor: 'desarrollo web profesional',
  },
  {
    n: '02',
    icon: Cpu,
    t: 'Agente de IA en WhatsApp',
    d: 'Implementamos un agente de inteligencia artificial que atiende a cada lead desde el primer contacto hasta prácticamente el cierre, conectado al sistema: consulta información real, actualiza el CRM y da seguimiento por etapa del pipeline.',
    accent: '#FB923C',
    href: '/servicios/inteligencia-artificial',
    anchor: 'agencia de inteligencia artificial',
  },
  {
    n: '03',
    icon: Database,
    t: 'Sistema de datos y CRM',
    d: 'Construimos un sistema que trackea todo —web, cotizaciones, CRM, leads, campañas y redes— para operar con accountability total y decisiones basadas en datos reales.',
    accent: '#FBBF24',
    href: '/servicios/inteligencia-artificial',
    anchor: 'software a la medida',
  },
  {
    n: '04',
    icon: Sparkles,
    t: 'Performance ads y contenido',
    d: 'Producimos fotografía, video y diseño, y lanzamos campañas de Meta Ads con A/B testing de creatividades dirigidas a WhatsApp, además de gestionar sus redes sociales.',
    accent: '#FCD34D',
    href: '/servicios/performance-ads',
    anchor: 'agencia de Meta Ads',
  },
]

// Desglose de una cotización en vivo (ejemplo del cotizador).
const QUOTE_ITEMS = [
  { label: '360 micheladas preparadas', value: 30600 },
  { label: 'Con clamato', value: 3600 },
  { label: 'Cervezas (Victoria · Modelo)', value: 14040 },
  { label: '2 baristas · 4h', value: 1500 },
  { label: 'Cargo de servicio (30%)', value: 8442 },
]
const QUOTE_TOTAL = QUOTE_ITEMS.reduce((a, b) => a + b.value, 0)

// Conversación demostrativa del agente IA de Reserva 27.
const CHAT = [
  { from: 'user', text: 'Hola 👋 ¿Hacen barras de micheladas para eventos? Es para una boda de 150 personas en CDMX.' },
  { from: 'bot', text: '¡Hola! 🍹 Claro que sí. Para 150 invitados solemos recomendar entre 300 y 450 micheladas. ¿Para qué fecha sería tu evento?' },
  { from: 'user', text: 'El 14 de marzo.' },
  { from: 'bot', text: '¡Perfecto, tenemos disponibilidad para esa fecha! Te armo una cotización: 360 micheladas con clamato, cervezas y 2 baristas por 4 horas. ¿Te la mando en PDF? 📄' },
  { from: 'user', text: 'Sí, porfa.' },
  { from: 'pdf', text: 'Cotizacion_Reserva27.pdf', sub: '1 página · 58 KB · Total estimado $58,182' },
  { from: 'bot', text: '¡Listo! ✅ Te dejé el desglose completo. ¿Quieres apartar tu fecha con un anticipo? Voy guardando tus datos para darte seguimiento.' },
]

// Reels producidos por Antuario.
const REELS = [
  { src: '/portfolio/reserva-27/r27-reel-eventos.mp4', poster: '/portfolio/reserva-27/r27-reel-eventos-poster.jpg', label: 'Nos encargamos de todo' },
  { src: '/portfolio/reserva-27/r27-reel-paquetes.mp4', poster: '/portfolio/reserva-27/r27-reel-paquetes-poster.jpg', label: 'Paquetes para eventos' },
  { src: '/portfolio/reserva-27/r27-reel-micheladas.mp4', poster: '/portfolio/reserva-27/r27-reel-micheladas-poster.jpg', label: 'Barra de micheladas' },
]

export function ReservaCaseContent() {
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
            <div className="r27-aurora pointer-events-none absolute inset-0 opacity-70" aria-hidden />
            <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />

            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <motion.span initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} className="eyebrow-light inline-flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70" style={{ background: '#F97316' }} />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: '#F97316' }} />
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
                  {c.hero.title} <span className="r27-grad">{c.hero.highlight}</span>
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
                    Quiero un sistema así
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
                  style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.3), 0 30px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(249,115,22,0.18)' }}
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

      {/* ═══════════ EL COTIZADOR EN VIVO ═══════════ */}
      <ShellWrap data="light" variant="marfil">
        <div className="mx-auto max-w-[940px] text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
            Desarrollo web · Cotizador en tiempo real
          </span>
          <h2 className="hero-type mx-auto mt-4 max-w-[24ch] text-[26px] text-onyx sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
            Un sitio que cotiza tu evento <span className="r27-grad-dark">en tiempo real.</span>
          </h2>
          <p className="lead-type mx-auto mt-4 max-w-[62ch] text-[14px] sm:text-[15px]">
            El gran diferenciador de Reserva 27: cualquiera puede armar su paquete paso a paso y ver el precio
            actualizándose al instante — y pedir que se lo enviemos en PDF por WhatsApp o correo. Sin esperar, sin fricción.
          </p>
        </div>

        {/* Mockup navegador con el sitio */}
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
            <div className="flex items-center gap-3 border-b border-white/8 px-3 py-3 sm:px-4">
              <span className="hidden gap-1.5 sm:flex">
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
              </span>
              <div className="flex flex-1 items-center gap-2.5 rounded-full bg-white/6 px-4 py-2 sm:py-2.5">
                <span className="h-3 w-3 flex-shrink-0 rounded-full" style={{ background: 'linear-gradient(135deg,#F97316,#FBBF24)' }} />
                <span className="flex-1 truncate font-mono text-[12px] text-papel/70 sm:text-[13px]">reserva27.vercel.app/cotizador</span>
              </div>
              <span className="hidden items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] sm:inline-flex" style={{ background: 'rgba(249,115,22,0.16)', color: '#FB923C' }}>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70" style={{ background: '#F97316' }} />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: '#F97316' }} />
                </span>
                En vivo
              </span>
            </div>
            <Image
              src="/portfolio/reserva-27/r27-cotizador.jpg"
              alt="Cotizador en tiempo real del sitio web de Reserva 27 desarrollado por Antuario — el cliente arma su paquete de micheladas y ve el total actualizándose en vivo."
              width={1600}
              height={946}
              draggable={false}
              loading="lazy"
              className="w-full"
              sizes="(max-width: 1024px) 100vw, 1040px"
            />
          </div>
        </motion.div>

        {/* Cotizador animado + pasos */}
        <div className="mt-6 grid gap-4 lg:grid-cols-12">
          <CotizadorLive />
          <div className="lg:col-span-5">
            <div className="h-full rounded-[20px] border border-onyx/8 bg-papel p-5 shadow-soft sm:rounded-[24px] sm:p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-plomo">Cómo funciona</span>
              <ol className="mt-4 space-y-4">
                {[
                  { t: 'Eliges cuántas micheladas', d: 'Sugerencias por número de invitados.' },
                  { t: 'Mezclas sabores y cervezas', d: 'Clamato, chiles, extras y marcas.' },
                  { t: 'Recibes tu cotización en PDF', d: 'Por WhatsApp, correo o descarga directa.' },
                ].map((s, i) => (
                  <li key={s.t} className="flex gap-3">
                    <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-medium text-papel" style={{ background: '#F97316' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-[14px] font-medium text-onyx">{s.t}</h3>
                      <p className="mt-0.5 text-[12.5px] leading-snug text-grafito">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-5 flex items-center gap-2 rounded-xl bg-marfil p-3">
                <FileText className="h-4 w-4 flex-shrink-0" style={{ color: '#F97316' }} />
                <span className="text-[12px] text-grafito">Cotización lista para enviar en PDF por WhatsApp o correo.</span>
              </div>
            </div>
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
                Reserva 27 es una <strong className="text-onyx">barra de micheladas para eventos</strong> en CDMX: montan y
                atienden la barra en bodas, fiestas y eventos corporativos. Antuario se encargó de todo su frente digital
                como{' '}
                <Link href="/servicios" className="font-medium text-cobalto underline decoration-cobalto/30 underline-offset-2 transition-opacity hover:opacity-70">agencia de marketing digital</Link>:
                marca, sitio web, sistema comercial, agente de IA, campañas y contenido — bajo una sola dirección.
              </p>
              <p>
                Más allá de las campañas y el contenido, lo que distingue a este caso es la tecnología. Desarrollamos su{' '}
                <Link href="/servicios/desarrollo-web" className="font-medium text-cobalto underline decoration-cobalto/30 underline-offset-2 transition-opacity hover:opacity-70">desarrollo web profesional</Link>{' '}
                con un cotizador en tiempo real, un sistema que trackea todo el negocio y un{' '}
                <Link href="/servicios/inteligencia-artificial" className="font-medium text-cobalto underline decoration-cobalto/30 underline-offset-2 transition-opacity hover:opacity-70">agente de inteligencia artificial</Link>{' '}
                en WhatsApp que atiende y da seguimiento a cada lead hasta el cierre.
              </p>
              <p>
                El agente es avanzado: se conecta al sistema, consulta información real de Reserva 27 y su pipeline en el CRM,
                actualiza los datos en tiempo real y mueve a cada lead por cada etapa hasta cerrar el trato. Así logramos
                automatizar el <strong className="text-onyx">90% del embudo comercial</strong>. Un ecosistema que funciona
                casi solo — y que sumado a las{' '}
                <Link href="/servicios/performance-ads" className="font-medium text-cobalto underline decoration-cobalto/30 underline-offset-2 transition-opacity hover:opacity-70">campañas de Meta Ads</Link>{' '}
                y la gestión de redes, convirtió a Reserva 27 en una marca sólida y confiable.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-5">
            {[
              { label: 'Marca', value: 'Reserva 27' },
              { label: 'Industria', value: 'Barra de micheladas · Eventos' },
              { label: 'Servicios', value: c.services.join(' · ') },
              { label: 'Embudo', value: '90% automatizado' },
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
          <ChapterTag roman="I" label="El reto" sub="No perder ni un lead" dark />
          <h2 className="hero-type mt-5 max-w-[26ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
            {c.challenge.headline}
          </h2>
          <p className="lead-type mt-6 max-w-[66ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">{c.challenge.body}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { t: 'Empezaban en cero', d: 'Sin presencia digital, sin sistema y sin una forma ágil de cotizar a sus clientes.' },
              { t: 'Cotizar a mano es lento', d: 'En eventos, quien no responde al instante pierde al cliente con la competencia.' },
              { t: 'Leads sin seguimiento', d: 'Sin un sistema, las cotizaciones se caían y los leads se perdían en el camino.' },
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
        <ChapterTag roman="II" label="La solución" sub="Un ecosistema digital" />
        <h2 className="hero-type mt-5 max-w-[28ch] text-[26px] text-onyx sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
          {c.strategy.headline}
        </h2>
        <p className="lead-type mt-5 max-w-[64ch] text-[14.5px] sm:text-[15.5px]">
          Diseñamos para Reserva 27 un sistema donde cada pieza —web, cotizador, agente de IA, CRM, ads y redes— se conecta
          y se refuerza. Así es como una agencia de marketing digital convierte una marca nueva en una operación comercial
          que prácticamente camina sola.
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
        <div className="r27-aurora pointer-events-none absolute inset-0 opacity-55" aria-hidden />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-10" />
        <div className="relative z-10">
          <ChapterTag roman="III" label="El agente IA" sub="Atiende y cierra solo" dark />
          <h2 className="hero-type mt-5 max-w-[28ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
            Un agente de IA que atiende, cotiza y da seguimiento{' '}
            <span className="r27-grad">hasta el cierre.</span>
          </h2>
          <p className="lead-type mt-6 max-w-[66ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">
            El agente atiende a cada lead en WhatsApp desde el primer mensaje. Está conectado al sistema: consulta
            información real de Reserva 27, su disponibilidad y el pipeline del CRM, arma cotizaciones, las envía en PDF y da
            seguimiento por etapa — actualizando todo en tiempo real, sin que nadie tenga que mover un dedo.
          </p>

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            {/* Chat WhatsApp simulado */}
            <div className="lg:col-span-5">
              <AgentChat />
            </div>

            {/* Workflow + explicación */}
            <div className="lg:col-span-7">
              <div className="h-full rounded-[22px] p-5 sm:p-7" style={{ background: 'rgba(255,255,255,0.025)', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.05)' }}>
                <div className="flex flex-wrap items-end justify-between gap-2">
                  <h3 className="inline-flex items-center gap-2 text-[15px] font-medium text-papel sm:text-[17px]">
                    <Sparkles className="h-4 w-4" style={{ color: '#FB923C' }} />
                    El cerebro del agente
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: '#FB923C' }}>workflow · automatización</span>
                </div>
                <p className="mt-3 max-w-[64ch] text-[13px] leading-[1.6] text-papel/60 sm:text-[13.5px]">
                  Detrás de la conversación corre un workflow de automatización con IA: identifica al lead, consulta el
                  sistema y el CRM, arma la cotización, la envía y agenda el seguimiento — moviendo el pipeline por etapas de
                  forma automática.
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
                    src="/portfolio/reserva-27/r27-agente-workflow.jpg"
                    alt="Workflow de automatización del agente de IA de Reserva 27 construido por Antuario — orquesta atención, cotización, CRM y seguimiento del lead."
                    width={1600}
                    height={783}
                    draggable={false}
                    loading="lazy"
                    className="w-full"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                </motion.div>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-papel/35">
                  * Workflow de referencia · esquema del agente
                </p>
              </div>
            </div>
          </div>
        </div>
      </ShellWrap>

      {/* ═══════════ IV · SISTEMA Y ACCOUNTABILITY ═══════════ */}
      <ShellWrap data="dark" variant="dark">
        <div className="ai-aurora opacity-45" />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-10" />
        <div className="relative z-10">
          <ChapterTag roman="IV" label="El sistema" sub="Todo trackeable" dark />
          <h2 className="hero-type mt-5 max-w-[28ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
            Un sistema que trackea <span className="r27-grad">todo el negocio — en un solo lugar.</span>
          </h2>
          <p className="lead-type mt-6 max-w-[64ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">
            Desarrollamos un sistema que reúne web, cotizaciones, CRM, leads, campañas y redes. El agente de IA lo alimenta
            en tiempo real, y el equipo opera con <strong className="!text-papel">accountability total</strong>: cada
            número tiene un responsable y cada decisión se toma con datos reales.
          </p>

          <div className="mt-10">
            <AccountabilityBoard
              label="sistema.reserva27 · antuario"
              barsTitle="Leads atendidos · últimos meses"
              barsFootStart="Inicio"
              barsFootEnd="Hoy · 90% automatizado"
              kpis={[
                { label: 'Embudo automatizado', value: 90, suffix: '%', owner: 'Agente IA', accent: '#F97316' },
                { label: 'Atención a leads', value: 24, suffix: '/7', owner: 'Agente IA', accent: '#FB923C' },
                { label: 'Cotización en vivo', value: 100, suffix: '%', owner: 'Web', accent: '#FBBF24' },
                { label: 'Seguimiento en CRM', value: 100, suffix: '%', owner: 'Sistema', accent: '#FCD34D' },
              ]}
              bars={[12, 18, 26, 31, 44, 52, 49, 61, 70, 78, 84, 92]}
              footnote={
                <>
                  El agente de IA mueve cada lead por el pipeline y actualiza el sistema en{' '}
                  <span className="text-papel">tiempo real</span> — web, cotizaciones, CRM, campañas y redes, todo trackeable.
                </>
              }
            />
          </div>
        </div>
      </ShellWrap>

      {/* ═══════════ V · CONTENIDO Y CAMPAÑAS ═══════════ */}
      <ShellWrap data="light" variant="papel">
        <ChapterTag roman="V" label="Contenido y campañas" sub="Redes + Meta Ads" />
        <div className="mt-5 grid items-end gap-6 lg:grid-cols-12">
          <h2 className="hero-type max-w-[24ch] text-[26px] text-onyx sm:text-[36px] lg:col-span-7 lg:text-[40px]" style={{ fontWeight: 300 }}>
            Contenido que <span className="r27-grad-dark">vende la experiencia</span> del evento.
          </h2>
          <p className="lead-type text-[14.5px] sm:text-[15.5px] lg:col-span-5">
            Producimos fotografía, video y diseño, y lanzamos campañas en Meta con A/B testing dirigidas a WhatsApp. Reels que
            muestran la barra en acción, el montaje y la experiencia — para que el cliente se imagine su evento.
          </p>
        </div>

        {/* Reels */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {REELS.map((r, i) => (
            <motion.div key={r.src} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise}>
              <LazyVideo src={r.src} poster={r.poster} label={r.label} />
            </motion.div>
          ))}
          {/* Foto destacada como 4ª pieza */}
          <motion.div custom={3} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} className="relative aspect-[9/16] overflow-hidden rounded-[22px] bg-lino" style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08), 0 18px 40px rgba(0,0,0,0.42)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/portfolio/reserva-27/r27-michelada-2.jpg" alt="Michelada de Reserva 27 fotografiada por Antuario para contenido de redes sociales." loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </motion.div>
        </div>

        {/* Fotografía de eventos */}
        <div className="mt-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">La barra en eventos</span>
          <p className="mt-2 max-w-[60ch] text-[14px] text-grafito sm:text-[15px]">
            Fotografía de la barra montada en eventos reales en CDMX — la prueba social que genera confianza y antojo.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {[
              { src: '/portfolio/reserva-27/r27-baristas.jpg', alt: 'Baristas de Reserva 27 atendiendo la barra de micheladas en un evento en CDMX con vista al Ángel de la Independencia.' },
              { src: '/portfolio/reserva-27/r27-michelada-1.jpg', alt: 'Michelada preparada de Reserva 27 con escarchado de tamarindo.' },
              { src: '/portfolio/reserva-27/r27-michelada-3.jpg', alt: 'Michelada de Reserva 27 servida en un evento nocturno con luces.' },
              { src: '/portfolio/reserva-27/r27-barista.jpg', alt: 'Barista de Reserva 27 preparando micheladas en un evento.' },
            ].map((g, i) => (
              <motion.div key={g.src} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={rise} className="overflow-hidden rounded-[18px] bg-lino shadow-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.05]" />
              </motion.div>
            ))}
          </div>
        </div>
      </ShellWrap>

      {/* ═══════════ VI · RESULTADOS ═══════════ */}
      <ShellWrap data="dark" variant="dark">
        <div className="r27-aurora pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-10" />
        <div className="relative z-10">
          <ChapterTag roman="VI" label="Resultados" sub="Lo que logramos" dark />
          <h2 className="hero-type mt-5 max-w-[26ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]" style={{ fontWeight: 300 }}>
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
                className="rounded-[20px] p-5 sm:p-6"
                style={{
                  background: 'linear-gradient(155deg, rgba(249,115,22,0.10) 0%, rgba(251,191,36,0.02) 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-papel/50">{m.label}</span>
                <p className="mt-2 text-[26px] font-light tracking-tight text-papel sm:text-[32px]" style={{ letterSpacing: '-0.028em' }}>
                  {m.value}
                </p>
                <span className="mt-1 inline-block font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: '#FCD34D' }}>{m.delta}</span>
              </motion.div>
            ))}
          </div>

          <p className="lead-type mt-9 max-w-[68ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">{c.results.body}</p>
          <p className="mt-5 max-w-[64ch] text-[11.5px] uppercase tracking-[0.16em] text-papel/40">
            Caso desarrollado por Antuario para Reserva 27 · desarrollo web, IA, software, Meta Ads y redes sociales.
          </p>
        </div>
      </ShellWrap>

      {/* ═══════════ VII · CIERRE ═══════════ */}
      <ShellWrap data="dark" variant="dark">
        <div className="aurora aurora-quiet absolute inset-0 opacity-40" aria-hidden />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ChapterTag roman="VII" label="El cierre" sub="Un ecosistema que camina solo" dark />
          <h2 className="hero-type mx-auto mt-6 max-w-[24ch] text-[26px] text-papel sm:text-[38px] lg:text-[44px]" style={{ fontWeight: 300 }}>
            El 90% del embudo, <span className="r27-grad">operando en automático.</span>
          </h2>
          <p className="lead-type mx-auto mt-6 max-w-[62ch] text-[14.5px] !text-papel/70 sm:text-[16px]">
            Le dimos a Reserva 27 un ecosistema digital completo: marca, sitio con cotizador en vivo, un agente de IA que
            atiende y cierra, un sistema que trackea todo y campañas que activan la demanda. Un negocio que arrancó en cero y
            hoy opera con una marca sólida, confiable, y un embudo comercial automatizado al 90%.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {['Web con cotizador', 'Agente de IA', 'Sistema y CRM', 'Meta Ads', 'Contenido y redes'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-white/6 px-3 py-1.5 text-[11.5px] text-papel/80">
                <Check className="h-3 w-3" style={{ color: '#FCD34D' }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </ShellWrap>

      {/* ═══════════ MÁS CASOS ═══════════ */}
      <ShellWrap data="light" variant="papel">
        <div className="mb-8">
          <ChapterTag roman="VIII" label="Más casos" sub="Otros proyectos" />
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
        highlight="parecido al de Reserva 27?"
        description="Cuéntanos qué proceso comercial quieres automatizar. Diseñamos un ecosistema a la medida —web, cotizador, IA y campañas— con accountability desde el día uno."
        secondary={{ label: 'Conocer servicios', href: '/servicios' }}
      />

      <style jsx global>{`
        .r27-grad {
          background: linear-gradient(100deg, #FDBA74 0%, #F97316 45%, #FBBF24 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .r27-grad-dark {
          background: linear-gradient(100deg, #EA580C 0%, #D97706 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .r27-aurora {
          background:
            radial-gradient(42% 55% at 18% 16%, rgba(249,115,22,0.30), transparent 60%),
            radial-gradient(40% 50% at 84% 22%, rgba(251,191,36,0.22), transparent 62%),
            radial-gradient(52% 60% at 60% 92%, rgba(234,88,12,0.18), transparent 65%);
          filter: blur(4px);
          animation: r27Drift 16s ease-in-out infinite alternate;
        }
        @keyframes r27Drift {
          0%   { transform: translate3d(0,0,0) scale(1); }
          100% { transform: translate3d(0,-2%,0) scale(1.06); }
        }
        @media (prefers-reduced-motion: reduce) {
          .r27-aurora { animation: none; }
        }
      `}</style>
    </SiteFrame>
  )
}

/* ════════════════════════════════════════════════════════════
   Cotizador en vivo — total que sube en tiempo real
   ════════════════════════════════════════════════════════════ */
function CotizadorLive() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[20px] bg-onyx p-5 shadow-soft sm:rounded-[24px] sm:p-7 lg:col-span-7"
      style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 18px 40px rgba(0,0,0,0.16)' }}
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-papel/70">
          <Calculator className="h-3.5 w-3.5" style={{ color: '#FB923C' }} />
          Tu cotización en vivo
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em]" style={{ background: 'rgba(249,115,22,0.16)', color: '#FB923C' }}>
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70" style={{ background: '#F97316' }} />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: '#F97316' }} />
          </span>
          En vivo
        </span>
      </div>

      <div className="mt-5 divide-y divide-white/8">
        {QUOTE_ITEMS.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 + i * 0.18 }}
            className="flex items-center justify-between py-2.5 text-[13px] sm:text-[13.5px]"
          >
            <span className="text-papel/70">{it.label}</span>
            <span className="font-medium tabular-nums text-papel">
              $<AnimatedCounter target={it.value} separator duration={1500} />
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex items-end justify-between border-t border-white/15 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-papel/50">Total estimado</span>
        <span className="text-[28px] font-light tracking-tight text-papel sm:text-[34px]" style={{ letterSpacing: '-0.03em' }}>
          $<AnimatedCounter target={QUOTE_TOTAL} separator duration={2000} />
        </span>
      </div>
    </motion.div>
  )
}

/* ════════════════════════════════════════════════════════════
   Chat de WhatsApp simulado — el agente IA atendiendo un lead
   ════════════════════════════════════════════════════════════ */
function AgentChat() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-[26px]"
      style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.3), 0 24px 50px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Header estilo WhatsApp */}
      <div className="flex items-center gap-3 px-4 py-3" style={{ background: '#075E54' }}>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-[12px] font-semibold text-white">27</span>
        <div className="flex-1">
          <p className="text-[13.5px] font-medium text-white">Reserva 27</p>
          <p className="inline-flex items-center gap-1.5 text-[10.5px] text-white/70">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-1.5 py-px font-mono text-[8.5px] uppercase tracking-[0.12em]">
              <Cpu className="h-2.5 w-2.5" /> Agente IA
            </span>
            en línea · responde al instante
          </p>
        </div>
        <MessageCircle className="h-4 w-4 text-white/70" />
      </div>

      {/* Cuerpo del chat */}
      <div className="space-y-2.5 px-3.5 py-4" style={{ background: '#0B141A', minHeight: 420 }}>
        {CHAT.map((m, i) => {
          if (m.from === 'pdf') {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.35 }}
                className="ml-auto max-w-[82%] rounded-2xl rounded-tr-sm p-2.5"
                style={{ background: '#005C4B' }}
              >
                <div className="flex items-center gap-2.5 rounded-lg bg-black/20 p-2.5">
                  <FileText className="h-7 w-7 flex-shrink-0 text-white/80" />
                  <div className="min-w-0">
                    <p className="truncate text-[12.5px] font-medium text-white">{m.text}</p>
                    <p className="text-[10px] text-white/55">{m.sub}</p>
                  </div>
                </div>
                <span className="mt-1 flex items-center justify-end gap-1 text-[9px] text-white/50">
                  10:24 <CheckCheck className="h-3 w-3" style={{ color: '#53BDEB' }} />
                </span>
              </motion.div>
            )
          }
          const isBot = m.from === 'bot'
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.35 }}
              className={`max-w-[82%] rounded-2xl px-3 py-2 text-[12.5px] leading-[1.45] ${
                isBot ? 'ml-auto rounded-tr-sm text-white' : 'mr-auto rounded-tl-sm text-white'
              }`}
              style={{ background: isBot ? '#005C4B' : '#202C33' }}
            >
              {m.text}
              <span className={`mt-0.5 flex items-center gap-1 text-[9px] ${isBot ? 'justify-end text-white/50' : 'text-white/40'}`}>
                10:2{i} {isBot && <CheckCheck className="h-3 w-3" style={{ color: '#53BDEB' }} />}
              </span>
            </motion.div>
          )
        })}

        {/* Indicador escribiendo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 + CHAT.length * 0.35 }}
          className="mr-auto inline-flex items-center gap-1.5 rounded-2xl rounded-tl-sm px-3 py-2.5"
          style={{ background: '#202C33' }}
        >
          {[0, 1, 2].map((d) => (
            <span key={d} className="h-1.5 w-1.5 rounded-full bg-white/50 r27-typing" style={{ animationDelay: `${d * 0.2}s` }} />
          ))}
        </motion.div>
      </div>

      {/* Footer badge */}
      <div className="flex items-center justify-center gap-2 px-4 py-2.5" style={{ background: '#0B141A', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <Sparkles className="h-3 w-3" style={{ color: '#FB923C' }} />
        <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-white/55">Atendido 100% por IA · seguimiento automático</span>
      </div>

      <style jsx>{`
        .r27-typing {
          animation: r27Typing 1.2s ease-in-out infinite;
        }
        @keyframes r27Typing {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-3px); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .r27-typing { animation: none; }
        }
      `}</style>
    </motion.div>
  )
}
