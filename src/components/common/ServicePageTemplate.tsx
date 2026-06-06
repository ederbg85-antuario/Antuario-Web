'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { SiteFrame } from '@/components/layout/SiteFrame'
import { ServiceIcon } from '@/components/common/ServiceIcon'
import {
  PageHero,
  ShellWrap,
  ChapterTag,
  CTASection,
  FAQAccordion,
  Breadcrumbs,
  rise,
} from '@/components/common/PageBuildingBlocks'
import {
  SharedDifferentiators,
  SharedData,
  SharedCoverage,
  SharedCases,
  SharedTeam,
} from '@/components/common/PageSharedSections'
import type { ServiceData } from '@/lib/services-data'
import { SERVICES, SERVICE_LIST } from '@/lib/services-data'

export function ServicePageTemplate({ slug }: { slug: string }) {
  const data = SERVICES[slug]
  if (!data) {
    throw new Error(`Service "${slug}" no encontrado en services-data.ts`)
  }
  const otherServices = SERVICE_LIST.filter((s) => s.slug !== data.slug).slice(0, 4)

  return (
    <SiteFrame>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        highlight={data.highlight}
        description={data.description}
        keyword={data.keyword}
        ctaSecondary={{ label: 'Ver casos relacionados', href: '/casos' }}
      />

      <SharedCases />

      <ShellWrap data="light" variant="papel">
        <Breadcrumbs
          trail={[
            { label: 'Inicio', href: '/' },
            { label: 'Servicios', href: '/servicios' },
            { label: data.metaTitle.split(' — ')[0].split(':')[0] },
          ]}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rise}
          className="mt-8 max-w-3xl"
        >
          <ChapterTag roman="I" label="El problema" sub="Diagnóstico" />
          <h2
            className="hero-type mt-5 text-[26px] text-onyx sm:text-[36px] lg:text-[42px]"
            style={{ fontWeight: 300 }}
          >
            {data.problem.headline}
          </h2>
          <p className="lead-type mt-4 text-[14.5px] sm:text-[15.5px]">
            {data.problem.sub}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:gap-4 lg:grid-cols-3">
          {data.problem.points.map((p, i) => (
            <motion.div
              key={p.t}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="card-bb-soft p-6"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className="mt-2 text-[16.5px] font-medium tracking-tight text-onyx sm:text-[17.5px]"
                style={{ letterSpacing: '-0.014em' }}
              >
                {p.t}
              </h3>
              <p className="mt-2.5 text-[13px] leading-[1.55] text-grafito sm:text-[13.5px]">
                {p.d}
              </p>
            </motion.div>
          ))}
        </div>
      </ShellWrap>

      <ShellWrap data="dark" variant="dark">
        <div className="aurora aurora-quiet absolute inset-0 opacity-50" aria-hidden />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-12" />

        <div className="relative z-10">
          <ChapterTag roman="II" label="Cómo trabajamos" sub="Proceso" dark />
          <h2
            className="hero-type mt-5 max-w-[24ch] text-[26px] text-papel sm:text-[36px] lg:text-[42px]"
            style={{ fontWeight: 300 }}
          >
            {data.process.headline}
          </h2>

          <div className="mt-10 grid gap-y-8 lg:grid-cols-2 lg:gap-x-12">
            {data.process.steps.map((s, i) => (
              <motion.div
                key={s.t}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={rise}
                className="grid grid-cols-[auto_1fr] gap-4 border-t border-papel/10 pt-6 sm:gap-6"
              >
                <span
                  className="font-mono text-[36px] font-light tabular-nums text-papel/25 sm:text-[44px]"
                  style={{ letterSpacing: '-0.04em', lineHeight: 1 }}
                >
                  {s.n}
                </span>
                <div>
                  <h3
                    className="text-[17px] font-medium tracking-tight text-papel sm:text-[19px]"
                    style={{ letterSpacing: '-0.018em' }}
                  >
                    {s.t}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.55] text-papel/65 sm:text-[14.5px]">
                    {s.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ShellWrap>

      <ShellWrap data="light" variant="marfil">
        <ChapterTag roman="III" label="Entregables" sub="Qué incluye" />
        <h2
          className="hero-type mt-5 max-w-[24ch] text-[26px] text-onyx sm:text-[36px] lg:text-[42px]"
          style={{ fontWeight: 300 }}
        >
          {data.deliverables.headline}
        </h2>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4">
          {data.deliverables.items.map((it, i) => (
            <motion.li
              key={it}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="flex items-start gap-3 rounded-2xl bg-papel p-4 sm:p-5"
              style={{
                boxShadow:
                  '0 1px 2px rgba(15,15,30,0.04), 0 4px 10px rgba(15,15,30,0.04)',
              }}
            >
              <span
                className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${data.accent}33, transparent)`,
                  boxShadow: `inset 0 0 0 1px ${data.accent}40`,
                }}
              >
                <Check className="h-3.5 w-3.5" style={{ color: data.accent }} />
              </span>
              <span className="text-[13.5px] leading-snug text-grafito sm:text-[14px]">
                {it}
              </span>
            </motion.li>
          ))}
        </ul>
      </ShellWrap>

      <ShellWrap data="light" variant="papel">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <ChapterTag roman="IV" label="Casos relacionados" sub="Trabajo" />
            <h2
              className="hero-type mt-5 max-w-[28ch] text-[26px] text-onyx sm:text-[34px] lg:text-[40px]"
              style={{ fontWeight: 300 }}
            >
              Casos donde aplicamos {data.metaTitle.split(' — ')[0].toLowerCase().replace('agencia ', '').replace('agencia de ', '')}.
            </h2>
          </div>
          <Link
            href="/casos"
            className="inline-flex items-center gap-2 text-[12.5px] font-medium text-onyx hover:text-grafito"
          >
            Ver todos los casos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {data.cases.map((c, i) => (
            <motion.div
              key={c.slug}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
            >
              <Link
                href={`/casos/${c.slug}`}
                className="group flex h-full flex-col rounded-[24px] bg-papel p-6 transition-all duration-500 hover:-translate-y-1 sm:p-7"
                style={{
                  boxShadow:
                    '0 1px 2px rgba(15,15,30,0.06), 0 6px 18px rgba(15,15,30,0.08)',
                }}
              >
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-plomo">
                  Caso · {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="mt-3 text-[20px] font-medium tracking-tight text-onyx sm:text-[22px]"
                  style={{ letterSpacing: '-0.018em' }}
                >
                  {c.name}
                </h3>
                <p className="mt-2 flex-1 text-[13px] text-grafito sm:text-[13.5px]">
                  Lee cómo aplicamos {data.keyword.split(' ').slice(-2).join(' ')} en este proyecto.
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
                    Caso de éxito
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5"
                    style={{ color: data.accent }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </ShellWrap>

      <ShellWrap data="light" variant="marfil">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ChapterTag roman="V" label="FAQ" sub="Preguntas frecuentes" />
            <h2
              className="hero-type mt-5 max-w-[20ch] text-[26px] text-onyx sm:text-[36px] lg:text-[40px]"
              style={{ fontWeight: 300 }}
            >
              Lo que solemos resolver{' '}
              <span className="multi-grad">antes de empezar.</span>
            </h2>
            <p className="lead-type mt-5 max-w-[40ch] text-[14.5px] sm:text-[15px]">
              Si tu duda no está aquí, escríbenos por WhatsApp y te
              respondemos directo — sin formularios largos.
            </p>
          </div>
          <div className="lg:col-span-7">
            <FAQAccordion items={data.faqs} />
          </div>
        </div>
      </ShellWrap>

      <ShellWrap data="light" variant="papel">
        <div className="mb-8">
          <ChapterTag roman="VI" label="Otros servicios" sub="Más capacidades" />
          <h2
            className="hero-type mt-5 max-w-[24ch] text-[24px] text-onyx sm:text-[32px] lg:text-[38px]"
            style={{ fontWeight: 300 }}
          >
            Servicios que combinan bien{' '}
            <span className="multi-grad">con este.</span>
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {otherServices.map((s, i) => (
            <motion.div
              key={s.slug}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
            >
              <Link
                href={s.href}
                className="group flex h-full items-start gap-3 rounded-2xl bg-papel p-5 transition-all duration-500 hover:-translate-y-0.5"
                style={{
                  boxShadow:
                    '0 1px 2px rgba(15,15,30,0.04), 0 4px 12px rgba(15,15,30,0.06)',
                }}
              >
                <span
                  className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${s.accent}28, transparent)`,
                    boxShadow: `inset 0 0 0 1px ${s.accent}30`,
                  }}
                >
                  <ServiceIcon iconKey={s.iconKey} className="h-3.5 w-3.5" style={{ color: s.accent }} />
                </span>
                <div className="min-w-0">
                  <h3
                    className="text-[14px] font-medium tracking-tight text-onyx"
                    style={{ letterSpacing: '-0.014em' }}
                  >
                    {s.title.replace('Agencia de ', '').replace('Agencia ', '')}
                  </h3>
                  <p className="mt-0.5 text-[11.5px] text-plomo">
                    {s.keyword}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </ShellWrap>

      {/* Shared sections — Diferenciadores · Medición · Cobertura · Equipo */}
      <SharedDifferentiators />
      <SharedData />
      <SharedCoverage />
      <SharedTeam />

      <CTASection
        title={data.ctaTitle}
        highlight={data.ctaHighlight}
        description={data.ctaDescription}
        secondary={{ label: 'Ver casos de éxito', href: '/casos' }}
      />
    </SiteFrame>
  )
}

