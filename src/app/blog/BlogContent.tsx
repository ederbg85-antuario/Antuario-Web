'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Compass, BarChart3, Sparkles } from 'lucide-react'
import { SiteFrame } from '@/components/layout/SiteFrame'
import {
  PageHero,
  ShellWrap,
  ChapterTag,
  CTASection,
  Breadcrumbs,
  rise,
} from '@/components/common/PageBuildingBlocks'
import { SharedCases } from '@/components/common/PageSharedSections'
import { BLOG_POSTS } from '@/lib/blog-data'

const clusters = [
  {
    Icon: Compass,
    accent: 'var(--cobalto-b)',
    name: 'Estrategia',
    sub: 'Decidir bien antes de invertir',
    posts: [
      'Cómo elegir una agencia de marketing digital para B2B',
      'Qué incluir en un brief para una agencia de marketing',
      'Cuánto cuesta una agencia de marketing digital en México',
      'In-house vs. agencia: cuándo conviene cada uno',
      'ROI real del marketing digital con soluciones a la medida',
    ],
  },
  {
    Icon: BarChart3,
    accent: 'var(--salvia-b)',
    name: 'Medición',
    sub: 'Datos que mueven el negocio',
    posts: [
      'Qué métricas importan en una campaña de Performance',
      'Dashboards de marketing: qué reportar y qué no',
      'Cómo medir la atribución multicanal en 2026',
      'Calcular el CAC y el LTV correctamente',
      'GA4 + GTM para empresas que no son nativas digitales',
    ],
  },
  {
    Icon: Sparkles,
    accent: 'var(--glicina-b)',
    name: 'IA + Operación',
    sub: 'Lo que sí se está implementando',
    posts: [
      'Agentes de WhatsApp para ventas B2B',
      'Automatizar la calificación de leads con IA',
      'LLMs a la medida vs. ChatGPT Enterprise',
      'Optimización de pujas con Machine Learning',
      'IA generativa para producción de contenido a escala',
    ],
  },
]

export function BlogContent() {
  const featured = BLOG_POSTS[0]

  return (
    <SiteFrame>
      <PageHero
        eyebrow="Blog · Antuario · MMXXVI"
        title="Análisis, estrategia y"
        highlight="aprendizajes operativos."
        description="Ideas, datos y aprendizajes operativos para empresas que quieren hacer marketing digital con estrategia, sistemas, IA y accountability real."
        keyword="blog · marketing digital · estrategia"
        ctaSecondary={{ label: 'Ver casos de éxito', href: '/casos' }}
      />

      <SharedCases />

      <ShellWrap data="light" variant="papel">
        <Breadcrumbs trail={[{ label: 'Inicio', href: '/' }, { label: 'Blog' }]} />

        <div className="mt-10 max-w-3xl">
          <ChapterTag roman="I" label="Primer artículo" sub="Estrategia + medición" />
          <h2
            className="hero-type mt-5 text-[28px] text-onyx sm:text-[40px] lg:text-[44px]"
            style={{ fontWeight: 300 }}
          >
            Empezamos con una pregunta incómoda:{' '}
            <span className="multi-grad">¿tu agencia dirige crecimiento o solo entrega contenido?</span>
          </h2>
          <p className="lead-type mt-5 text-[14.5px] sm:text-[15.5px]">
            El primer artículo cruza datos de mercado, presión presupuestal,
            KPIs, sistemas de información y accountability para explicar cómo
            distinguir una agencia seria de una operación desordenada.
          </p>
        </div>

        <motion.article
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rise}
          className="mt-12 overflow-hidden rounded-[30px] bg-onyx text-papel"
        >
          <Link href={`/blog/${featured.slug}`} className="group grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[360px] p-7 sm:p-10 lg:p-12">
              <div className="aurora aurora-deep absolute inset-0 opacity-55" aria-hidden />
              <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />
              <div className="relative z-10 flex h-full flex-col justify-between gap-12">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-[11.5px] text-papel/45">
                    <span className="font-mono uppercase tracking-[0.22em]">{featured.category}</span>
                    <span className="h-px w-8 bg-papel/15" />
                    <span>{featured.readingTime}</span>
                  </div>
                  <h3 className="mt-6 max-w-[16ch] text-[32px] font-light leading-tight tracking-tight text-papel sm:text-[46px]">
                    {featured.title}{' '}
                    <span className="multi-grad-bright">{featured.highlight}</span>
                  </h3>
                  <p className="mt-6 max-w-[54ch] text-[15px] leading-[1.65] text-papel/65 sm:text-[16px]">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-papel">
                  Leer artículo
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
            <div className="grid gap-3 bg-papel/[0.04] p-5 sm:grid-cols-2 lg:grid-cols-1 lg:p-7">
              {[
                ['110 M', 'usuarios de internet en México'],
                ['7.7%', 'presupuesto promedio de marketing vs. ingresos'],
                ['$941B', 'MXN de eCommerce retail en México'],
                ['5', 'preguntas para evaluar una agencia'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[22px] border border-papel/10 bg-papel/[0.055] p-5">
                  <p className="text-[34px] font-light tracking-tight text-papel">{value}</p>
                  <p className="mt-1.5 text-[12.5px] leading-snug text-papel/55">{label}</p>
                </div>
              ))}
            </div>
          </Link>
        </motion.article>

        <div className="mt-16 max-w-3xl">
          <ChapterTag roman="II" label="Roadmap" sub="Clusters editoriales" />
          <h2
            className="hero-type mt-5 text-[28px] text-onyx sm:text-[40px] lg:text-[44px]"
            style={{ fontWeight: 300 }}
          >
            Tres clusters de contenido,{' '}
            <span className="multi-grad">cuatro posts al mes.</span>
          </h2>
          <p className="lead-type mt-5 text-[14.5px] sm:text-[15.5px]">
            Cada artículo arranca de algo que estamos viendo en proyectos
            reales. Sin trending topics genéricos, sin guías genéricas de
            marketing. Aquí lo que se publica son hallazgos operativos.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:gap-5 lg:grid-cols-3">
          {clusters.map((c, i) => (
            <motion.article
              key={c.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="relative overflow-hidden rounded-[24px] bg-papel p-7 sm:p-8"
              style={{
                boxShadow:
                  '0 1px 2px rgba(15,15,30,0.06), 0 4px 16px rgba(15,15,30,0.06)',
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-25 blur-2xl"
                style={{ background: c.accent }}
              />
              <div className="relative">
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${c.accent}28, transparent)`,
                    boxShadow: `inset 0 0 0 1px ${c.accent}30`,
                  }}
                >
                  <c.Icon className="h-4 w-4" style={{ color: c.accent }} />
                </span>
                <h3
                  className="mt-5 text-[20px] font-medium tracking-tight text-onyx sm:text-[22px]"
                  style={{ letterSpacing: '-0.018em' }}
                >
                  Cluster · {c.name}
                </h3>
                <p className="mt-1.5 text-[12.5px] text-plomo sm:text-[13px]">
                  {c.sub}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-onyx/8 pt-5">
                  {c.posts.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-[12.5px] leading-snug text-grafito sm:text-[13px]"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full"
                        style={{ background: c.accent }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
                    En producción
                  </span>
                  <span className="h-px flex-1 bg-onyx/10" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 max-w-[60ch] text-[12.5px] text-plomo">
          Publicaremos un artículo nuevo cada semana y convertiremos cada tema
          en carruseles, publicaciones y videos cortos para redes.
        </p>
      </ShellWrap>

      <CTASection
        title="Mientras llega el primer post,"
        highlight="hablemos directo."
        description="Si tienes un reto operativo concreto, no esperes a la publicación. Cuéntanos directo — un estratega te responde."
        secondary={{ label: 'Ver servicios', href: '/servicios' }}
      />
    </SiteFrame>
  )
}
