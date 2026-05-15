'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SiteFrame } from '@/components/layout/SiteFrame'
import {
  PageHero,
  ShellWrap,
  ChapterTag,
  CTASection,
  Breadcrumbs,
  rise,
} from '@/components/common/PageBuildingBlocks'
import { CASE_LIST } from '@/lib/cases-data'

export function CasosContent() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Casos · Antuario · México"
        title="Marcas que ya confían en"
        highlight="nuestra agencia de marketing digital."
        description="Casos de éxito de empresas medianas y grandes mexicanas que operan su marketing digital, desarrollo web y posicionamiento orgánico con Antuario. Cada proyecto es un sistema diseñado a la medida — no una plantilla."
        keyword="casos de éxito · marketing digital"
        ctaSecondary={{ label: 'Ver servicios', href: '/servicios' }}
      />

      <ShellWrap data="light" variant="papel">
        <Breadcrumbs trail={[{ label: 'Inicio', href: '/' }, { label: 'Casos' }]} />

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <ChapterTag roman="I" label="Trabajo" sub="Marcas que confían en Antuario" />
            <h2
              className="hero-type mt-5 max-w-[22ch] text-[28px] text-onyx sm:text-[40px] lg:text-[46px]"
              style={{ fontWeight: 300 }}
            >
              Sistemas diseñados a la medida,{' '}
              <span className="multi-grad">resultados medibles.</span>
            </h2>
          </div>
          <p className="lead-type max-w-[42ch] text-[14.5px] sm:text-[15.5px]">
            Selección de proyectos donde aplicamos estrategia, performance,
            desarrollo web, SEO y producción creativa bajo una sola dirección.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_LIST.map((c, i) => (
            <motion.div
              key={c.slug}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
            >
              <Link
                href={c.detail ? `/casos/${c.slug}` : '#'}
                className={`group relative block aspect-[4/5] overflow-hidden rounded-[28px] bg-lino ${
                  c.detail ? '' : 'pointer-events-none cursor-default'
                }`}
                style={{
                  boxShadow:
                    '0 2px 4px rgba(15,15,30,0.08), 0 18px 36px rgba(15,15,30,0.10), 0 36px 72px rgba(15,15,30,0.07)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.imageSrc}
                  alt={c.imageAlt}
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent p-5 sm:p-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/65">
                    {c.industry}
                  </span>
                  <div className="mt-1.5 flex items-end justify-between gap-3">
                    <h3
                      className="text-[18px] font-medium tracking-tight text-papel sm:text-[22px]"
                      style={{ letterSpacing: '-0.018em' }}
                    >
                      {c.name}
                    </h3>
                    {c.detail ? (
                      <ArrowUpRight className="h-4 w-4 text-papel/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-papel" />
                    ) : (
                      <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-papel/45">
                        Próximamente
                      </span>
                    )}
                  </div>
                  <p className="mt-2 line-clamp-2 text-[12px] text-papel/65 sm:text-[12.5px]">
                    {c.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 max-w-[60ch] text-[12.5px] text-plomo">
          * Los casos sin enlace activo están en proceso de documentación.
          Se irán publicando en las próximas semanas con resultados detallados.
        </p>
      </ShellWrap>

      <CTASection
        title="¿Quieres construir un caso"
        highlight="parecido a estos?"
        description="Cuéntanos tu reto. Diseñamos un sistema a la medida para tu empresa y nos comprometemos con métricas concretas."
        secondary={{ label: 'Conocer servicios', href: '/servicios' }}
      />
    </SiteFrame>
  )
}
