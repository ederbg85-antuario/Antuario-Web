'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { SiteFrame } from '@/components/layout/SiteFrame'
import {
  PageHero,
  ShellWrap,
  ChapterTag,
  CTASection,
  Breadcrumbs,
  rise,
} from '@/components/common/PageBuildingBlocks'
import { CASES, DETAILED_CASES } from '@/lib/cases-data'
import { SERVICES } from '@/lib/services-data'
import { AcrilandCaseContent } from './AcrilandCaseContent'
import { MetricaBtlCaseContent } from './MetricaBtlCaseContent'

export function CaseDetailContent({ slug }: { slug: string }) {
  // Caso destacado con contenido a la medida (multimedia + dashboard animado)
  if (slug === 'acriland-desarrollo-web-seo') return <AcrilandCaseContent />
  if (slug === 'metrica-btl-desarrollo-web-seo') return <MetricaBtlCaseContent />

  const c = CASES[slug]
  if (!c) return null

  const relatedCases = DETAILED_CASES.filter((x) => x.slug !== slug)

  return (
    <SiteFrame>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        highlight={c.hero.highlight}
        description={c.hero.description}
        keyword={c.industry}
        ctaSecondary={{ label: 'Ver todos los casos', href: '/casos' }}
      />

      <ShellWrap data="light" variant="papel">
        <Breadcrumbs
          trail={[
            { label: 'Inicio', href: '/' },
            { label: 'Casos', href: '/casos' },
            { label: c.name },
          ]}
        />

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="lg:col-span-7"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
              Caso · {c.year}
            </span>
            <h2
              className="hero-type mt-3 max-w-[20ch] text-[26px] text-onyx sm:text-[36px] lg:text-[42px]"
              style={{ fontWeight: 300 }}
            >
              {c.tagline}
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: 'Marca', value: c.name },
                { label: 'Industria', value: c.industry.split(' · ')[1] || c.industry },
                { label: 'Servicios', value: c.services.join(' · ') },
                { label: 'Año', value: c.year },
              ].map((m) => (
                <div key={m.label} className="card-bb-soft p-4">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-plomo">
                    {m.label}
                  </span>
                  <p
                    className="mt-1.5 text-[13.5px] font-medium text-onyx"
                    style={{ letterSpacing: '-0.014em' }}
                  >
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div
              className="overflow-hidden rounded-[28px] bg-lino"
              style={{
                boxShadow:
                  '0 2px 4px rgba(15,15,30,0.08), 0 24px 50px rgba(15,15,30,0.12)',
              }}
            >
              <Image
                src={c.imageSrc}
                alt={c.imageAlt}
                width={1200}
                height={1500}
                priority
                draggable={false}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </ShellWrap>

      <ShellWrap data="dark" variant="dark">
        <div className="aurora aurora-quiet absolute inset-0 opacity-40" aria-hidden />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-12" />

        <div className="relative z-10">
          <ChapterTag roman="I" label="El reto" sub="Diagnóstico" dark />
          <h2
            className="hero-type mt-5 max-w-[26ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]"
            style={{ fontWeight: 300 }}
          >
            {c.challenge.headline}
          </h2>
          <p className="lead-type mt-6 max-w-[64ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">
            {c.challenge.body}
          </p>
        </div>
      </ShellWrap>

      <ShellWrap data="light" variant="marfil">
        <ChapterTag roman="II" label="La estrategia" sub="Cómo lo abordamos" />
        <h2
          className="hero-type mt-5 max-w-[26ch] text-[26px] text-onyx sm:text-[36px] lg:text-[42px]"
          style={{ fontWeight: 300 }}
        >
          {c.strategy.headline}
        </h2>

        <div className="mt-10 grid gap-3 sm:gap-4 lg:grid-cols-2">
          {c.strategy.pillars.map((p, i) => (
            <motion.div
              key={p.t}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="card-bb-soft p-6 sm:p-7"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className="mt-2 text-[17px] font-medium tracking-tight text-onyx sm:text-[19px]"
                style={{ letterSpacing: '-0.018em' }}
              >
                {p.t}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-[1.55] text-grafito sm:text-[14px]">
                {p.d}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {c.servicesSlug.map((slug) => {
            const s = SERVICES[slug]
            if (!s) return null
            return (
              <Link
                key={slug}
                href={s.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-papel px-3 py-1.5 text-[11.5px] font-medium text-onyx shadow-soft transition-colors hover:bg-marfil"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: s.accent }}
                />
                {s.metaTitle.split(' — ')[0].replace('Agencia de ', '').replace('Agencia ', '')}
                <ArrowRight className="h-3 w-3" />
              </Link>
            )
          })}
        </div>
      </ShellWrap>

      <ShellWrap data="dark" variant="dark">
        <div className="ai-aurora opacity-50" />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-10" />

        <div className="relative z-10">
          <ChapterTag roman="III" label="Resultados" sub="Métricas" dark />
          <h2
            className="hero-type mt-5 max-w-[26ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]"
            style={{ fontWeight: 300 }}
          >
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
                  background:
                    'linear-gradient(155deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/50">
                  {m.label}
                </span>
                <p
                  className="mt-2 text-[28px] font-light tracking-tight text-papel sm:text-[34px]"
                  style={{ letterSpacing: '-0.028em' }}
                >
                  {m.value}
                </p>
                <span className="mt-1 inline-block font-mono text-[10px] uppercase tracking-[0.18em] text-salvia-b">
                  {m.delta}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="lead-type mt-10 max-w-[64ch] text-[14.5px] !text-papel/70 sm:text-[15.5px]">
            {c.results.body}
          </p>

          <p className="mt-5 max-w-[60ch] text-[11.5px] uppercase tracking-[0.18em] text-papel/40">
            Métricas demostrativas. Datos reales bajo NDA — disponibles en sesión de discovery.
          </p>
        </div>
      </ShellWrap>

      <ShellWrap data="light" variant="papel">
        <div className="mb-8">
          <ChapterTag roman="IV" label="Más casos" sub="Otros proyectos" />
          <h2
            className="hero-type mt-5 max-w-[24ch] text-[26px] text-onyx sm:text-[36px] lg:text-[40px]"
            style={{ fontWeight: 300 }}
          >
            Otros sistemas que hemos{' '}
            <span className="multi-grad">construido a la medida.</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedCases.map((rc, i) => (
            <motion.div
              key={rc.slug}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
            >
              <Link
                href={`/casos/${rc.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-[28px] bg-lino"
                style={{
                  boxShadow:
                    '0 2px 4px rgba(15,15,30,0.08), 0 18px 36px rgba(15,15,30,0.10)',
                }}
              >
                <Image
                  src={rc.imageSrc}
                  alt={rc.imageAlt}
                  width={1200}
                  height={1500}
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 sm:p-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/65">
                    {rc.industry}
                  </span>
                  <div className="mt-1.5 flex items-end justify-between">
                    <h3
                      className="text-[18px] font-medium tracking-tight text-papel sm:text-[22px]"
                      style={{ letterSpacing: '-0.018em' }}
                    >
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
        highlight="parecido al de "
        description={`Cuéntanos qué reto persigues. Diseñamos un sistema a la medida para tu empresa con compromisos medibles desde el día uno.`}
        secondary={{ label: 'Conocer servicios', href: '/servicios' }}
      />
    </SiteFrame>
  )
}
