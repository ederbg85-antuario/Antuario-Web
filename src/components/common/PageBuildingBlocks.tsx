'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { WhatsAppIcon, AntuarioMark } from '@/components/layout/SiteFrame'

export type SectionTheme = 'dark' | 'light'
export type ShellVariant = 'dark' | 'marfil' | 'papel'

export const rise = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

export function ChapterTag({
  roman,
  label,
  sub,
  dark = false,
}: {
  roman: string
  label: string
  sub?: string
  dark?: boolean
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span
        className={`rounded-md px-1.5 py-0.5 font-mono text-[9px] tracking-[0.10em] ${
          dark ? 'bg-papel text-onyx' : 'bg-onyx text-papel'
        }`}
      >
        {roman}
      </span>
      <span
        className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
          dark ? 'text-papel/55' : 'text-plomo'
        }`}
      >
        {label}
      </span>
      {sub && (
        <>
          <span className={`h-px w-10 ${dark ? 'bg-papel/15' : 'bg-onyx/10'}`} />
          <span className={dark ? 'eyebrow-light' : 'eyebrow'}>{sub}</span>
        </>
      )}
    </div>
  )
}

export function ShellWrap({
  children,
  data,
  variant,
  className = '',
  topPad = false,
}: {
  children: React.ReactNode
  data: SectionTheme
  variant: ShellVariant
  className?: string
  topPad?: boolean
}) {
  const shell =
    variant === 'dark'
      ? 'shell-dark'
      : variant === 'marfil'
      ? 'shell-marfil'
      : 'shell-papel'

  return (
    <section
      data-theme={data}
      className={`section-pad ${topPad ? 'pt-[88px] sm:pt-[96px]' : ''} ${className}`}
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className={`section-shell ${shell}`}>{children}</div>
      </div>
    </section>
  )
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  keyword,
  ctaSecondary,
  topPad = true,
  mobileMarkAbove = false,
}: {
  eyebrow: string
  title: string
  highlight: string
  description: string
  keyword?: string
  ctaSecondary?: { label: string; href: string }
  topPad?: boolean
  /** Si es true, el isotipo animado se renderiza arriba del texto en móvil (default: abajo) */
  mobileMarkAbove?: boolean
}) {
  return (
    <section
      data-theme="dark"
      className={topPad ? 'pt-[80px] sm:pt-[92px] lg:pt-[100px]' : ''}
      style={{ paddingBottom: 'clamp(20px, 2.4vh, 36px)' }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-[clamp(10px,2.4vw,28px)]">
        <div className="section-shell shell-dark pt-[48px] sm:pt-[56px] lg:pt-[64px]">
          <div className="aurora aurora-deep absolute inset-0 opacity-65" aria-hidden />
          <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 35%, rgba(5,5,5,0.45) 100%)',
            }}
          />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Mobile · Antuario mark animado (sólo visible < lg) — arriba si mobileMarkAbove */}
            {mobileMarkAbove && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto flex justify-center lg:hidden"
              >
                <HeroMarkMobile />
              </motion.div>
            )}

            <div className="lg:col-span-7">
              <motion.span
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={rise}
                className="eyebrow-light"
              >
                {eyebrow}
              </motion.span>

              <motion.h1
                custom={1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={rise}
                className="display mt-5 max-w-[22ch] text-balance text-[32px] leading-[1.04] text-papel sm:text-[44px] lg:text-[52px]"
              >
                {title}{' '}
                <span className="multi-grad-bright">{highlight}</span>
              </motion.h1>

              <motion.p
                custom={2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={rise}
                className="mt-6 max-w-[52ch] text-[15px] leading-[1.55] text-papel/70 sm:text-[16.5px]"
              >
                {description}
              </motion.p>

              <motion.div
                custom={3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={rise}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3"
              >
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-inv"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  Cuéntanos tu proyecto
                  <ArrowRight className="h-3 w-3" />
                </a>
                {ctaSecondary && (
                  <Link href={ctaSecondary.href} className="btn-ghost-dark">
                    {ctaSecondary.label}
                  </Link>
                )}
              </motion.div>

              {keyword && (
                <motion.div
                  custom={4}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={rise}
                  className="mt-3.5 flex items-center gap-2 text-[11.5px] text-papel/40"
                >
                  <span className="font-mono uppercase tracking-[0.22em]">
                    Keyword
                  </span>
                  <span className="h-px w-6 bg-papel/15" />
                  <span>{keyword}</span>
                </motion.div>
              )}
            </div>

            {/* Mobile · Antuario mark animado debajo del texto (default) */}
            {!mobileMarkAbove && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto flex justify-center lg:hidden"
              >
                <HeroMarkMobile />
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:col-span-5 lg:block"
            >
              <HeroMark />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroMarkMobile() {
  return (
    <div className="relative flex h-[200px] w-[200px] items-center justify-center sm:h-[240px] sm:w-[240px]">
      {/* Aurora orbital — conic multicolor */}
      <span
        className="pointer-events-none absolute -inset-2 rounded-full opacity-60 blur-[28px] animate-aurora-drift"
        style={{
          background:
            'conic-gradient(from 0deg at 50% 50%, rgba(129,140,248,0.55), rgba(196,181,253,0.45), rgba(253,164,175,0.50), rgba(252,211,77,0.35), rgba(110,231,183,0.45), rgba(103,232,249,0.55), rgba(129,140,248,0.55))',
        }}
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-3 rounded-full opacity-50 blur-[22px] animate-plasma"
        style={{
          background:
            'radial-gradient(45% 50% at 30% 30%, rgba(167,139,250,0.55), transparent 60%), radial-gradient(40% 50% at 70% 80%, rgba(34,211,238,0.50), transparent 60%)',
          backgroundSize: '220% 220%',
        }}
        aria-hidden
      />
      {/* Orb conic */}
      <span
        className="absolute h-[80px] w-[80px] rounded-full opacity-55 blur-md sm:h-[100px] sm:w-[100px]"
        style={{
          background:
            'conic-gradient(from 0deg, #818CF8, #C4B5FD, #FDA4AF, #FCD34D, #6EE7B7, #67E8F9, #818CF8)',
          animation: 'ai-orb-spin 12s linear infinite',
        }}
        aria-hidden
      />
      <div className="relative z-10 agency-core-breath">
        <AntuarioMark
          className="h-[80px] w-auto text-papel sm:h-[100px]"
          style={{
            filter: 'drop-shadow(0 6px 18px rgba(129,140,248,0.45))',
          }}
        />
      </div>
    </div>
  )
}

function HeroMark() {
  return (
    <div className="relative mx-auto flex h-[400px] w-full max-w-[440px] items-center justify-center sm:h-[480px]">
      {/* Aurora orbital — conic multicolor que rota lento */}
      <span
        className="pointer-events-none absolute -inset-4 rounded-full opacity-65 blur-[55px] animate-aurora-drift"
        style={{
          background:
            'conic-gradient(from 0deg at 50% 50%, rgba(129,140,248,0.55), rgba(196,181,253,0.45), rgba(253,164,175,0.50), rgba(252,211,77,0.35), rgba(110,231,183,0.45), rgba(103,232,249,0.55), rgba(129,140,248,0.55))',
        }}
        aria-hidden
      />

      {/* Plasma layer detrás — anima rapido (heredando 14s plasma) */}
      <span
        className="pointer-events-none absolute inset-6 rounded-full opacity-50 blur-[40px] animate-plasma"
        style={{
          background:
            'radial-gradient(45% 50% at 30% 30%, rgba(167,139,250,0.6), transparent 60%), radial-gradient(40% 50% at 70% 80%, rgba(34,211,238,0.5), transparent 60%), radial-gradient(35% 40% at 80% 30%, rgba(251,113,133,0.4), transparent 60%)',
          backgroundSize: '220% 220%',
        }}
        aria-hidden
      />

      {/* Ring dashed rotando — like agency-ring-dashed */}
      <svg
        className="absolute h-[300px] w-[300px] animate-[ringDash_36s_linear_infinite] sm:h-[360px] sm:w-[360px]"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <defs>
          <linearGradient id="hero-mark-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#C4B5FD" stopOpacity="0.45" />
            <stop offset="50%"  stopColor="#FDA4AF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#67E8F9" stopOpacity="0.45" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r="98"
          fill="none"
          stroke="url(#hero-mark-ring)"
          strokeWidth="1"
          strokeDasharray="2 8"
        />
      </svg>

      {/* Pulsos cobalto-bright concentrico */}
      <span
        className="absolute h-[180px] w-[180px] rounded-full sm:h-[220px] sm:w-[220px]"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(196,181,253,0.18), 0 0 80px rgba(196,181,253,0.10)',
        }}
        aria-hidden
      />

      {/* Orb conic (ai-orb) en escala grande */}
      <span
        className="absolute h-[140px] w-[140px] rounded-full opacity-55 blur-md sm:h-[170px] sm:w-[170px]"
        style={{
          background:
            'conic-gradient(from 0deg, #818CF8, #C4B5FD, #FDA4AF, #FCD34D, #6EE7B7, #67E8F9, #818CF8)',
          animation: 'ai-orb-spin 12s linear infinite',
        }}
        aria-hidden
      />

      {/* Halo central que respira */}
      <span
        className="absolute h-[140px] w-[140px] rounded-full sm:h-[170px] sm:w-[170px]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)',
          animation: 'agency-core-pulse 4s ease-in-out infinite',
        }}
        aria-hidden
      />

      {/* Isotipo central — respira sutilmente */}
      <div className="relative z-10 agency-core-breath">
        <AntuarioMark
          className="h-[150px] w-auto text-papel sm:h-[190px]"
          style={{
            filter: 'drop-shadow(0 8px 24px rgba(129,140,248,0.45))',
          }}
        />
      </div>

      <style jsx>{`
        @keyframes ringDash {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export function FAQAccordion({
  items,
  dark = false,
}: {
  items: { q: string; a: string }[]
  dark?: boolean
}) {
  return (
    <div className="divide-y divide-line/30">
      {items.map((it, i) => (
        <details
          key={it.q}
          className="group py-5"
          {...(i === 0 ? { open: true } : {})}
        >
          <summary
            className={`flex cursor-pointer list-none items-start justify-between gap-6 text-[15.5px] font-medium tracking-tight transition-colors sm:text-[17px] ${
              dark ? 'text-papel hover:text-papel' : 'text-onyx hover:text-grafito'
            }`}
            style={{ letterSpacing: '-0.014em' }}
          >
            <span>{it.q}</span>
            <span
              className={`mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[14px] transition-all duration-300 group-open:rotate-45 ${
                dark ? 'bg-papel/8 text-papel' : 'bg-onyx/6 text-onyx'
              }`}
            >
              +
            </span>
          </summary>
          <p
            className={`mt-3 max-w-[68ch] text-[13.5px] leading-[1.6] sm:text-[14.5px] ${
              dark ? 'text-papel/65' : 'text-grafito'
            }`}
          >
            {it.a}
          </p>
        </details>
      ))}
    </div>
  )
}

export function CTASection({
  title,
  highlight,
  description,
  secondary,
}: {
  title: string
  highlight: string
  description: string
  secondary?: { label: string; href: string }
}) {
  return (
    <ShellWrap data="dark" variant="dark">
      <div className="aurora aurora-deep absolute inset-0 opacity-55" aria-hidden />
      <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <AntuarioMark className="h-10 w-auto text-papel sm:h-12" />

        <h2
          className="hero-type mt-7 max-w-[20ch] text-[28px] text-papel sm:text-[42px] lg:text-[52px]"
          style={{ fontWeight: 300 }}
        >
          {title}{' '}
          <span className="multi-grad-bright">{highlight}</span>
        </h2>

        <p className="lead-type mt-5 max-w-[44ch] text-[15px] !text-papel/65 sm:text-[16.5px]">
          {description}
        </p>

        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:gap-3">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-inv"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Cuéntanos tu proyecto
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          {secondary && (
            <Link href={secondary.href} className="btn-ghost-dark">
              {secondary.label}
            </Link>
          )}
        </div>

        <p className="mt-4 text-[11.5px] text-papel/40">
          Sin costo · Sin compromiso
        </p>
      </div>
    </ShellWrap>
  )
}

export function CaseCard({
  src,
  alt,
  name,
  tag,
  href,
}: {
  src: string
  alt: string
  name: string
  tag: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[4/5] overflow-hidden rounded-[28px] bg-lino"
      style={{
        boxShadow:
          '0 2px 4px rgba(15,15,30,0.08), 0 18px 36px rgba(15,15,30,0.10), 0 36px 72px rgba(15,15,30,0.07)',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 sm:p-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/65">
          {tag}
        </span>
        <div className="mt-1.5 flex items-end justify-between">
          <h3
            className="text-[18px] font-medium tracking-tight text-papel sm:text-[22px]"
            style={{ letterSpacing: '-0.018em' }}
          >
            {name}
          </h3>
          <ArrowUpRight className="h-4 w-4 text-papel/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-papel" />
        </div>
      </div>
    </Link>
  )
}

export function Breadcrumbs({
  trail,
  dark = false,
}: {
  trail: { label: string; href?: string }[]
  dark?: boolean
}) {
  return (
    <nav
      aria-label="Migas de pan"
      className={`flex flex-wrap items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] ${
        dark ? 'text-papel/50' : 'text-plomo'
      }`}
    >
      {trail.map((t, i) => (
        <span key={`${t.label}-${i}`} className="inline-flex items-center gap-2">
          {t.href ? (
            <Link href={t.href} className="transition-colors hover:opacity-100">
              {t.label}
            </Link>
          ) : (
            <span className={dark ? 'text-papel/80' : 'text-onyx'}>{t.label}</span>
          )}
          {i < trail.length - 1 && (
            <span className={dark ? 'text-papel/25' : 'text-onyx/20'}>·</span>
          )}
        </span>
      ))}
    </nav>
  )
}
