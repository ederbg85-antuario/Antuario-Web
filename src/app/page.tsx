'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { siteConfig } from '@/config/site'

// ─── Logo Antuario (isotipo) ───────────────────────────────────────────────
function AntuarioMark({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  const fill = dark ? '#fafafa' : '#0a0a0a'
  return (
    <svg
      viewBox="0 0 1200 787.5"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Antuario"
    >
      <path
        d="M1049.59 619.8c-85.805-121.912-170.613-244.49-258.074-365.084-51.02-70.235-123.575-108.332-210.371-115.29-186.52-15.238-337.918 141.794-316.715 326.657 20.207 173.266 198.441 292.531 368.062 246.48 47.375-12.921 87.465-38.43 126.887-66.257 17.558-12.59 35.117-24.516 53.34-37.106a4608 4608 0 0 0-43.403-61.62c-14.242-20.208-28.488-40.087-43.066-60.626-30.148 20.871-58.64 42.406-88.457 61.29-52.672 33.128-107.336 34.452-159.352.331-50.687-33.46-71.89-82.16-62.28-142.125 8.944-55.988 53.007-101.375 108.995-114.297 56.32-12.922 114.957 8.282 148.418 55.657 55.989 78.515 111.317 157.695 166.64 236.543 13.583 19.546 30.15 35.78 51.02 48.039 50.356 29.484 119.926 26.504 161.34-6.957-.996-2.32-1.656-3.977-2.984-5.633z"
        fill={fill}
      />
      <circle cx="243" cy="124" r="96" fill={fill} />
    </svg>
  )
}

// ─── WhatsApp icon ─────────────────────────────────────────────────────────
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

// ─── Animation variants ────────────────────────────────────────────────────
const fade = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

// ─── Section wrapper ───────────────────────────────────────────────────────
function Section({
  id,
  dark = false,
  children,
  innerRef,
}: {
  id: string
  dark?: boolean
  children: React.ReactNode
  innerRef?: (el: HTMLElement | null) => void
}) {
  return (
    <section
      id={id}
      ref={(el) => innerRef?.(el)}
      data-section={id}
      className={`swipe-section section-pad ${dark ? 'bg-ink-900 text-white' : 'bg-background text-ink'}`}
    >
      {children}
    </section>
  )
}

// ─── SECTION DATA ──────────────────────────────────────────────────────────
const SECTIONS = [
  { id: 'hero', label: 'Inicio' },
  { id: 'agencia', label: 'La agencia' },
  { id: 'pilares', label: 'Operación' },
  { id: 'capacidades', label: 'Capacidades' },
  { id: 'equipo', label: 'Equipo' },
  { id: 'datos', label: 'Datos' },
  { id: 'accountability', label: 'Accountability' },
  { id: 'ia', label: 'IA' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'metodologia', label: 'Metodología' },
  { id: 'cta', label: 'Contacto' },
] as const

const DARK_SECTIONS = ['hero', 'accountability', 'ia', 'cta']

// ─── Page ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  const shellRef = useRef<HTMLDivElement | null>(null)
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map())
  const [active, setActive] = useState<string>('hero')
  const isDark = DARK_SECTIONS.includes(active)

  useEffect(() => {
    const shell = shellRef.current
    if (!shell) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
            const id = (entry.target as HTMLElement).dataset.section
            if (id) setActive(id)
          }
        })
      },
      { root: shell, threshold: [0.55, 0.75] }
    )
    sectionRefs.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const goTo = (id: string) => {
    const el = sectionRefs.current.get(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const registerRef = (id: string) => (el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el)
    else sectionRefs.current.delete(id)
  }

  return (
    <>
      {/* Top brand bar — only logo */}
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-7 pt-6 sm:px-10 sm:pt-7">
        <button
          onClick={() => goTo('hero')}
          className="pointer-events-auto flex items-center"
          aria-label="Antuario · Ir al inicio"
        >
          <AntuarioMark className="h-9 w-auto transition-opacity duration-500 sm:h-11" dark={isDark} />
        </button>

        <a
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`pointer-events-auto hidden rounded-full border px-4 py-2 text-[12px] font-medium transition-all duration-500 sm:inline-flex ${
            isDark
              ? 'border-white/15 bg-white/5 text-white/85 hover:bg-white/10'
              : 'border-ink-900/10 bg-white text-ink-800 hover:border-ink-900/25'
          }`}
        >
          Cuéntanos tu proyecto →
        </a>
      </div>

      {/* Progress dot rail */}
      <nav aria-label="Progreso" className="dot-rail">
        {SECTIONS.map((s, i) => {
          const activeNow = active === s.id
          return (
            <button
              key={s.id}
              onClick={() => goTo(s.id)}
              aria-label={`Ir a ${s.label}`}
              className="group relative flex items-center"
            >
              <span
                className={`block rounded-full transition-all duration-500 ${
                  activeNow
                    ? isDark
                      ? 'h-6 w-1.5 bg-white'
                      : 'h-6 w-1.5 bg-ink-900'
                    : isDark
                      ? 'h-1.5 w-1.5 bg-white/30 group-hover:bg-white/60'
                      : 'h-1.5 w-1.5 bg-ink-300 group-hover:bg-ink-500'
                }`}
              />
              <span
                className={`pointer-events-none absolute right-6 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  isDark ? 'bg-white/10 text-white' : 'bg-ink-900 text-white'
                }`}
              >
                {String(i + 1).padStart(2, '0')} · {s.label}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Swipe shell */}
      <div ref={shellRef} className="swipe-shell">
        <HeroSection innerRef={registerRef('hero')} onNext={() => goTo('agencia')} />
        <AgencySection innerRef={registerRef('agencia')} />
        <PillarsSection innerRef={registerRef('pilares')} />
        <CapabilitiesSection innerRef={registerRef('capacidades')} />
        <TeamSection innerRef={registerRef('equipo')} />
        <DataSection innerRef={registerRef('datos')} />
        <AccountabilitySection innerRef={registerRef('accountability')} />
        <AISection innerRef={registerRef('ia')} />
        <ProcessSection innerRef={registerRef('proceso')} />
        <MethodologySection innerRef={registerRef('metodologia')} />
        <CTASection innerRef={registerRef('cta')} />
      </div>
    </>
  )
}

// ─── 01 · HERO ─────────────────────────────────────────────────────────────
function HeroSection({ innerRef, onNext }: { innerRef: (el: HTMLElement | null) => void; onNext: () => void }) {
  const services = [
    'Redes Sociales',
    'Creación de Contenido',
    'Performance ADS',
    'SEO',
    'Desarrollo Web',
    'Software a la medida',
    'Agentes IA',
  ]

  return (
    <Section id="hero" dark innerRef={innerRef}>
      {/* Fondo dinámico — blobs animados + grid + veil */}
      <div className="dyn-bg-dark" aria-hidden>
        <span className="dyn-blob dyn-blob-a" />
        <span className="dyn-blob dyn-blob-b" />
        <span className="dyn-blob dyn-blob-c" />
      </div>
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 z-[1] opacity-25" />
      <div className="dyn-veil z-[1]" aria-hidden />

      <div className="relative z-[2] mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 animate-subtle-pulse rounded-full bg-white/80" />
          <span className="eyebrow-light !text-white/65">Agencia de Marketing Digital</span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="display text-balance text-[34px] leading-[1.08] text-white sm:text-[52px] lg:text-[68px]"
        >
          Soluciones de{' '}
          <span className="gradient-anim-bright">Marketing Digital</span>{' '}
          a la medida.
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mx-auto mt-7 max-w-xl text-balance text-[14px] leading-relaxed text-white/60 sm:text-[16px]"
        >
          Marketing, sistemas e inteligencia artificial — bajo una sola dirección estratégica, con
          accountability total sobre cada resultado.
        </motion.p>

        {/* Servicios chips */}
        <motion.ul
          custom={3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mx-auto mt-9 flex max-w-2xl flex-wrap items-center justify-center gap-x-2 gap-y-2.5"
        >
          {services.map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-white/20" />}
              <span className="text-[12.5px] font-medium text-white/75 sm:text-[13px]">{s}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          custom={4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-semibold text-ink-900 transition-transform duration-300 hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Cuéntanos tu proyecto
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <span className="text-[12px] text-white/40">Sin costo · Sin compromiso</span>
        </motion.div>
      </div>

      {/* Swipe down indicator */}
      <button
        onClick={onNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/45 transition-colors hover:text-white"
        aria-label="Siguiente sección"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.22em]">Desliza</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </button>
    </Section>
  )
}

// ─── 02 · QUIÉNES SOMOS ────────────────────────────────────────────────────
function AgencySection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  return (
    <Section id="agencia" innerRef={innerRef}>
      <div className="mx-auto flex h-full max-w-5xl flex-col justify-center">
        <motion.span
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="eyebrow"
        >
          Quiénes somos
        </motion.span>

        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="display mt-6 text-[36px] text-ink-900 sm:text-[56px] lg:text-[68px]"
        >
          Más que <br className="sm:hidden" />
          <span className="gradient-anim">una agencia.</span>
        </motion.h2>

        <motion.p
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mt-10 max-w-3xl text-[18px] font-medium leading-snug text-ink-800 sm:text-[22px]"
        >
          Capacidades estratégicas, tecnológicas y creativas que van mucho más allá de lo que la mayoría de
          agencias puede ofrecer.
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mt-6 max-w-2xl text-[14px] leading-relaxed text-ink-500 sm:text-[15px]"
        >
          Trabajamos como un partner estratégico real: nos involucramos a fondo, diseñamos soluciones a la
          medida y respondemos por los resultados — no por las tareas.
        </motion.p>
      </div>
    </Section>
  )
}

// ─── 03 · PILARES ──────────────────────────────────────────────────────────
function PillarsSection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  const pillars = [
    {
      n: '01',
      title: 'Soluciones a la medida',
      text: 'Cada proyecto tiene su propio contexto. Sin paquetes estándar — diseñamos la solución correcta para cada marca y momento.',
    },
    {
      n: '02',
      title: 'Adaptabilidad total',
      text: 'Nos integramos como extensión del equipo, como operadores completos de una línea o atacando una necesidad puntual.',
    },
    {
      n: '03',
      title: 'Partner, no proveedor',
      text: 'Visión de largo plazo. Nos importan los resultados de la marca — no solo cerrar el contrato. Esa diferencia se nota desde el día uno.',
    },
  ]

  return (
    <Section id="pilares" innerRef={innerRef}>
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mb-12"
        >
          <span className="eyebrow">Cómo operamos</span>
          <h2 className="display mt-4 text-[32px] text-ink-900 sm:text-[48px]">
            Nuestro modo <br className="sm:hidden" />
            <span className="gradient-anim">de trabajar.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.n}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="card-min p-7"
            >
              <span className="font-mono text-[11px] tracking-widest text-ink-400">{p.n}</span>
              <h3 className="mt-6 text-[20px] font-bold tracking-tight text-ink-900 sm:text-[22px]">
                {p.title}
              </h3>
              <div className="hairline my-5" />
              <p className="text-[14px] leading-relaxed text-ink-500">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// ─── 04 · CAPACIDADES ──────────────────────────────────────────────────────
function CapabilitiesSection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  const caps = [
    { tag: 'Paid Media', title: 'Performance Ads', items: ['Google · Meta · TikTok', 'ROAS, CPA y CPL reales'] },
    { tag: 'Orgánico', title: 'SEO y posicionamiento', items: ['Técnico y de contenido', 'Auditoría continua'] },
    { tag: 'Contenido', title: 'Redes y producción', items: ['Estrategia y guiones', 'Video, foto, edición'] },
    { tag: 'Web', title: 'Desarrollo y conversión', items: ['Sitios y landing pages', 'Ecommerce + UX'] },
    { tag: 'Tecnología', title: 'Software a la medida', items: ['CRM, integraciones', 'Automatización'] },
    { tag: 'Vanguardia', title: 'Inteligencia Artificial', items: ['Agentes, LLMs', 'IA generativa'] },
  ]

  return (
    <Section id="capacidades" innerRef={innerRef}>
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mb-10"
        >
          <span className="eyebrow">Capacidades</span>
          <h2 className="display mt-4 text-[32px] text-ink-900 sm:text-[48px]">
            Lo que nuestro equipo domina <br className="hidden sm:block" />
            <span className="gradient-anim">y pone a disposición.</span>
          </h2>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {caps.map((c, i) => (
            <motion.div
              key={c.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="group bg-paper p-6 transition-colors duration-300 hover:bg-ink-50"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">{c.tag}</span>
              <h3 className="mt-4 text-[18px] font-bold tracking-tight text-ink-900">{c.title}</h3>
              <ul className="mt-4 space-y-1.5">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[13px] text-ink-500">
                    <span className="mt-1.5 h-px w-3 flex-shrink-0 bg-ink-300" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// ─── 05 · EQUIPO ───────────────────────────────────────────────────────────
function TeamSection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  const roles = [
    'Estrategas digitales',
    'Media buyers',
    'SEO specialists',
    'Diseñadores',
    'Editores de video',
    'Desarrolladores web',
    'Ingenieros de software',
    'Especialistas en IA',
    'Analistas de datos',
    'Consultores técnicos',
  ]

  return (
    <Section id="equipo" innerRef={innerRef}>
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <span className="eyebrow">Nuestro equipo</span>
          <h2 className="display mt-4 text-[32px] text-ink-900 sm:text-[52px]">
            Especialistas a disposición <br className="hidden sm:block" />
            <span className="gradient-anim">de tu proyecto.</span>
          </h2>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {roles.map((r, i) => (
            <motion.span
              key={r}
              custom={i + 1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="inline-flex items-center rounded-full border border-ink-900/10 bg-paper px-4 py-2 text-[13px] font-medium text-ink-700"
            >
              {r}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mt-10 max-w-xl text-[14px] leading-relaxed text-ink-500"
        >
          Equipo multidisciplinario coordinado bajo una misma dirección estratégica. El perfil correcto para
          cada parte del proyecto, siempre disponible.
        </motion.p>
      </div>
    </Section>
  )
}

// ─── 06 · DATOS E INFORMACIÓN ──────────────────────────────────────────────
function DataSection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  return (
    <Section id="datos" innerRef={innerRef}>
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="text-center sm:text-left">
          <span className="eyebrow">Datos e información</span>
          <h2 className="display mt-3 text-balance text-[26px] text-ink-900 sm:text-[38px] lg:text-[44px]">
            Trackeo estratégico,{' '}
            <span className="gradient-anim">no reportes genéricos.</span>
          </h2>
        </motion.div>

        <div className="mt-7 grid auto-rows-min gap-3.5 sm:mt-9 sm:gap-4 lg:grid-cols-12">
          {/* Card grande con line chart */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
            className="card-min p-4 sm:p-5 lg:col-span-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink-400">
                  Prospectos calificados · 30d
                </span>
                <div className="mt-1.5 flex items-baseline gap-2">
                  <AnimatedNumber to={284} className="text-[28px] font-extrabold tracking-tight text-ink-900 sm:text-[32px]" />
                  <span className="text-[11.5px] font-semibold text-emerald-600">+38%</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="pulse-live h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-medium uppercase tracking-wider text-ink-500">Live</span>
              </div>
            </div>

            <LineChart />
          </motion.div>

          {/* KPIs verticales — ROAS + CPL */}
          <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:col-span-4 lg:grid-cols-1">
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="card-min flex flex-col justify-between p-4 sm:p-5"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-400">ROAS</span>
              <div className="mt-1 flex items-baseline gap-1.5">
                <AnimatedNumber
                  to={5.4}
                  decimals={1}
                  className="text-[24px] font-extrabold tracking-tight text-ink-900 sm:text-[26px]"
                />
                <span className="text-[12px] font-medium text-ink-500">x</span>
                <span className="ml-auto text-[11px] font-semibold text-emerald-600">+0.8</span>
              </div>
              <Sparkline color="#0a0a0a" />
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="card-min flex flex-col justify-between p-4 sm:p-5"
            >
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-400">CPL</span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-[14px] font-medium text-ink-400">$</span>
                <AnimatedNumber to={142} className="text-[24px] font-extrabold tracking-tight text-ink-900 sm:text-[26px]" />
                <span className="ml-auto text-[11px] font-semibold text-emerald-600">−24%</span>
              </div>
              <Sparkline color="#0a0a0a" reverse />
            </motion.div>
          </div>

          {/* Card barras */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
            className="card-min p-4 sm:p-5 lg:col-span-5"
          >
            <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink-400">
              Conversión por canal
            </span>
            <BarChart />
          </motion.div>

          {/* Antuario Dashboard preview */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
            className="relative overflow-hidden rounded-2xl bg-ink-900 p-4 text-white sm:p-5 lg:col-span-7"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                Antuario Dashboard
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white/60">
                Live
              </span>
            </div>
            <h3 className="mt-2 text-[15px] font-bold tracking-tight sm:text-[17px]">
              Centralizado y visible{' '}
              <span className="gradient-anim-bright">en tiempo real.</span>
            </h3>
            <p className="mt-1.5 text-[11.5px] leading-relaxed text-white/55 sm:text-[12.5px]">
              Campañas, métricas y avance — todo en una sola vista.
            </p>

            {/* Mini cards anidadas */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { label: 'Sesiones', value: '12.4K' },
                { label: 'Leads', value: '284' },
                { label: 'Cierre', value: '8.2%' },
              ].map((m) => (
                <div key={m.label} className="rounded-lg border border-white/10 bg-white/5 p-2">
                  <span className="text-[9px] uppercase tracking-wider text-white/45">{m.label}</span>
                  <p className="mt-0.5 text-[13px] font-bold text-white sm:text-[14px]">{m.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

// ─── Animated Number Counter ───────────────────────────────────────────────
function AnimatedNumber({
  to,
  decimals = 0,
  className,
}: {
  to: number
  decimals?: number
  className?: string
}) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    let start = 0
    const duration = 1600

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start = performance.now()
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - t, 3)
              setVal(eased * to)
              if (t < 1) raf = requestAnimationFrame(tick)
            }
            raf = requestAnimationFrame(tick)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to])

  return (
    <span ref={ref} className={className}>
      {val.toFixed(decimals)}
    </span>
  )
}

// ─── Animated Line Chart ──────────────────────────────────────────────────
function LineChart() {
  const points = [16, 22, 18, 30, 28, 40, 38, 52, 48, 64, 70, 82]
  const max = Math.max(...points)
  const w = 480
  const h = 110
  const stepX = w / (points.length - 1)
  const path = points
    .map((v, i) => {
      const x = i * stepX
      const y = h - (v / max) * (h - 12) - 6
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`
    })
    .join(' ')
  const fillPath = `${path} L ${w} ${h} L 0 ${h} Z`

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-4 h-[100px] w-full sm:h-[110px]" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0a0a0a" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineStroke" x1="0" x2="1">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>
      {/* grid lines */}
      {[0.25, 0.5, 0.75].map((p) => (
        <line
          key={p}
          x1="0"
          x2={w}
          y1={h * p}
          y2={h * p}
          stroke="rgba(10,10,10,0.05)"
          strokeWidth="1"
        />
      ))}
      <path d={fillPath} fill="url(#lineFill)" className="chart-line" style={{ animationDelay: '0.1s' }} />
      <path
        d={path}
        fill="none"
        stroke="url(#lineStroke)"
        strokeWidth="2"
        strokeLinecap="round"
        className="chart-line"
      />
      {/* end dot */}
      <circle
        cx={w}
        cy={h - (points[points.length - 1] / max) * (h - 12) - 6}
        r="4"
        fill="#0a0a0a"
        className="animate-pulse"
      />
    </svg>
  )
}

// ─── Animated Bar Chart ───────────────────────────────────────────────────
function BarChart() {
  const data = [
    { label: 'SEO', value: 78 },
    { label: 'Ads', value: 56 },
    { label: 'Social', value: 42 },
    { label: 'Direct', value: 32 },
    { label: 'Email', value: 24 },
  ]
  const max = Math.max(...data.map((d) => d.value))

  return (
    <div className="mt-4">
      <div className="flex h-[100px] items-end gap-2.5 sm:h-[110px]">
        {data.map((d, i) => (
          <div key={d.label} className="flex flex-1 flex-col items-center gap-1">
            <span className="text-[9px] font-semibold text-ink-700">{d.value}%</span>
            <div
              className="chart-bar w-full rounded-t-md bg-ink-900"
              style={{
                height: `${(d.value / max) * 100}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
            <span className="text-[10px] font-medium text-ink-400">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Sparkline ────────────────────────────────────────────────────────────
function Sparkline({ color = '#0a0a0a', reverse = false }: { color?: string; reverse?: boolean }) {
  const data = reverse ? [60, 55, 48, 50, 42, 36, 28, 24] : [20, 28, 24, 38, 36, 50, 56, 64]
  const max = Math.max(...data)
  const w = 100
  const h = 28
  const stepX = w / (data.length - 1)
  const path = data
    .map((v, i) => `${i === 0 ? 'M' : 'L'} ${i * stepX} ${h - (v / max) * (h - 4) - 2}`)
    .join(' ')

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 h-[28px] w-full" preserveAspectRatio="none">
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" className="chart-line" />
    </svg>
  )
}

// ─── 07 · ACCOUNTABILITY ───────────────────────────────────────────────────
function AccountabilitySection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  const us = [
    'Metas claras y medibles desde el día 1',
    'Compromisos concretos desde el inicio',
    'Cuando algo falla, hay acción inmediata',
    'Solo métricas que realmente importan',
    'Nosotros empujamos el seguimiento',
    'Trazabilidad completa del ROI',
  ]
  const them = [
    'Entregan tareas, no resultados',
    'Los objetivos son vagos o cambian solos',
    'Cuando algo falla, hay justificación',
    'Reportes con datos que nadie entiende',
    'La marca persigue el seguimiento',
    'No saben cuánto vale cada peso invertido',
  ]

  return (
    <Section id="accountability" dark innerRef={innerRef}>
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <span className="eyebrow-light">Accountability</span>
          <h2 className="display mt-4 text-[32px] text-white sm:text-[52px]">
            Resultados concretos. <br />
            <span className="gradient-anim-bright">Responsabilidad total.</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
            className="rounded-2xl border border-white/8 bg-white/[0.03] p-6"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              Otra agencia
            </span>
            <ul className="mt-5 space-y-3">
              {them.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-[13px] text-white/45 line-through decoration-white/20"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-white/20" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fade}
            className="rounded-2xl border border-white/15 bg-white p-6 text-ink-900"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">Antuario</span>
            <ul className="mt-5 space-y-3">
              {us.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[13.5px] font-medium text-ink-800">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink-900" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

// ─── 08 · INTELIGENCIA ARTIFICIAL ──────────────────────────────────────────
function AISection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  const items = [
    { title: 'Agentes de WhatsApp', text: 'Atienden, califican y dan seguimiento las 24 horas.' },
    { title: 'Agentes de llamadas', text: 'Voz con IA para confirmar citas, calificar prospectos y FAQs.' },
    { title: 'Automatización comercial', text: 'Seguimientos, clasificación de leads, asignación de tareas.' },
    { title: 'IA en campañas', text: 'Optimización de puja, segmentación predictiva, creatividades.' },
    { title: 'LLMs a la medida', text: 'Asistentes internos y sistemas autónomos.' },
    { title: 'IA generativa', text: 'Imágenes, video, animaciones 3D, contenido a escala.' },
  ]

  return (
    <Section id="ia" dark innerRef={innerRef}>
      {/* Apple Intelligence aurora */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ai-aurora" />
      </div>
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900/70" />

      <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade} className="text-center sm:text-left">
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <span className="relative inline-flex h-3 w-3 items-center justify-center">
              <span className="ai-orb absolute inset-0" />
              <span className="relative h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="eyebrow-light">Inteligencia Artificial</span>
          </div>
          <h2 className="display mt-4 text-balance text-[28px] text-white sm:text-[44px] lg:text-[52px]">
            No hablamos de IA.{' '}
            <span className="gradient-anim-bright">La implementamos.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-[13px] leading-relaxed text-white/65 sm:mx-0 sm:mt-6 sm:text-[14.5px]">
            Mientras la mayoría apenas la conoce como tendencia, nosotros la operamos en proyectos reales —
            integrada a la operación de las marcas.
          </p>
        </motion.div>

        <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="group relative bg-ink-900/80 p-5 backdrop-blur-md transition-colors duration-300 hover:bg-ink-800/80 sm:p-6"
            >
              <h3 className="text-[14.5px] font-bold tracking-tight text-white sm:text-[15px]">{it.title}</h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-white/60 sm:mt-2.5 sm:text-[13px]">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// ─── 09 · CÓMO TRABAJAMOS ──────────────────────────────────────────────────
function ProcessSection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  const steps = [
    { n: '01', title: 'Cuéntanos sobre el proyecto', text: 'Una idea o un proyecto definido. Escríbenos.' },
    { n: '02', title: 'Te armamos una propuesta', text: '100% personalizada. Sin plantillas, sin paquetes estándar.' },
    { n: '03', title: 'La revisamos juntos', text: 'Iteramos hasta que quede exactamente como se necesita.' },
    { n: '04', title: 'Arrancamos', text: 'Plan claro, métricas definidas, equipo asignado, sistemas activos.' },
  ]

  return (
    <Section id="proceso" innerRef={innerRef}>
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <span className="eyebrow">Cómo empezamos</span>
          <h2 className="display mt-4 text-[32px] text-ink-900 sm:text-[48px]">
            Simple. Rápido. <br className="sm:hidden" />
            <span className="gradient-anim">Sin complicaciones.</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="card-min p-6"
            >
              <span className="font-mono text-[11px] tracking-widest text-ink-400">{s.n}</span>
              <h3 className="mt-5 text-[16px] font-bold tracking-tight text-ink-900">{s.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-500">{s.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          custom={5}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mt-8 text-[13px] text-ink-500"
        >
          Sin filtros, sin formularios. Directo.
        </motion.p>
      </div>
    </Section>
  )
}

// ─── 10 · METODOLOGÍA ──────────────────────────────────────────────────────
function MethodologySection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  const items = [
    {
      tag: 'EOS / Traction',
      title: 'Estructura, no intuición.',
      text: 'Objetivos trimestrales, reuniones eficientes, roles claros, seguimiento semanal.',
    },
    {
      tag: 'Sistemas',
      title: 'Cada acción se mide.',
      text: 'Estructuras de información que dan visibilidad real y permiten optimizar continuamente.',
    },
    {
      tag: 'Accountability',
      title: 'Todo atado a un objetivo.',
      text: 'No ejecutamos por ejecutar — todo se mide y todo es responsabilidad nuestra.',
    },
  ]

  return (
    <Section id="metodologia" innerRef={innerRef}>
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <span className="eyebrow">Metodología</span>
          <h2 className="display mt-4 text-[32px] text-ink-900 sm:text-[48px]">
            Operamos con estructura, <br className="hidden sm:block" />
            <span className="gradient-anim">no con intuición.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.tag}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="bg-paper p-7"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">{it.tag}</span>
              <h3 className="mt-5 text-[20px] font-bold tracking-tight text-ink-900">{it.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-500">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// ─── 11 · CTA FINAL ────────────────────────────────────────────────────────
function CTASection({ innerRef }: { innerRef: (el: HTMLElement | null) => void }) {
  return (
    <Section id="cta" dark innerRef={innerRef}>
      {/* Fondo dinámico — mismo lenguaje visual que el Hero */}
      <div className="dyn-bg-dark" aria-hidden>
        <span className="dyn-blob dyn-blob-a" />
        <span className="dyn-blob dyn-blob-b" />
        <span className="dyn-blob dyn-blob-c" />
      </div>
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 z-[1] opacity-25" />
      <div className="dyn-veil z-[1]" aria-hidden />

      <div className="relative z-[2] mx-auto flex h-full w-full max-w-3xl flex-col justify-center text-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fade}>
          <AntuarioMark className="mx-auto h-12 w-auto" dark />
        </motion.div>

        <motion.h2
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="display mt-10 text-[36px] text-white sm:text-[60px]"
        >
          ¿Hay un proyecto <br />
          <span className="gradient-anim-bright">sobre la mesa?</span>
        </motion.h2>

        <motion.p
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/55 sm:text-[17px]"
        >
          Platícanos sobre él — aunque sea solo una dirección general. Nosotros construimos la propuesta.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-ink-900 transition-transform duration-300 hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Cuéntanos tu proyecto
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-white/10"
          >
            Agendar videollamada
          </a>
        </motion.div>

        <motion.p
          custom={4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mt-6 text-[12px] text-white/40"
        >
          Sin costo · Sin compromiso
        </motion.p>

        <motion.div
          custom={5}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fade}
          className="mt-16 flex items-center justify-center gap-6 text-[11px] text-white/30"
        >
          <span>{siteConfig.email}</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>México</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>© {new Date().getFullYear()}</span>
        </motion.div>
      </div>
    </Section>
  )
}
