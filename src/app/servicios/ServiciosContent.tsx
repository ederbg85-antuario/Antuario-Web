'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteFrame } from '@/components/layout/SiteFrame'
import {
  PageHero,
  ShellWrap,
  ChapterTag,
  CTASection,
  FAQAccordion,
  Breadcrumbs,
  rise,
} from '@/components/common/PageBuildingBlocks'
import { SharedCases } from '@/components/common/PageSharedSections'
import { ServiceIcon } from '@/components/common/ServiceIcon'
import { SERVICE_LIST } from '@/lib/services-data'

const services = SERVICE_LIST.map((s, i) => ({
  n: String(i + 1).padStart(2, '0'),
  iconKey: s.iconKey,
  title: s.metaTitle.split(' — ')[0].replace('Agencia de ', '').replace('Agencia ', ''),
  href: s.href,
  keyword: s.keyword,
  description: s.tagline + ' ' + s.description.split('.').slice(0, 1).join('.') + '.',
  accent: s.accent,
}))

const faqs = [
  {
    q: '¿Puedo contratar un solo servicio o tienen que ser todos?',
    a: 'Cualquier servicio se contrata por separado. La ventaja de tomar varios bajo la misma dirección es la coherencia: tu SEO, tu performance y tu desarrollo web hablan el mismo idioma y se optimizan en función del mismo objetivo de negocio.',
  },
  {
    q: '¿Trabajan con empresas fuera de CDMX?',
    a: 'Sí. Nuestra sede está en la Ciudad de México y atendemos proyectos en cualquier estado de la República Mexicana, de forma remota o presencial cuando se requiere. También trabajamos con marcas latinoamericanas que operan en MX.',
  },
  {
    q: '¿Cuánto tarda en arrancar un proyecto?',
    a: 'Una vez firmada la propuesta, el kickoff sucede entre 5 y 10 días hábiles. Las primeras métricas medibles dependen del servicio: Performance Ads en 2-4 semanas, SEO entre 3 y 6 meses, desarrollo web entre 4 y 12 semanas según alcance.',
  },
  {
    q: '¿Cómo miden los resultados?',
    a: 'Cada cliente tiene un dashboard a la medida con las métricas que mueven su negocio (ROAS, CPL, leads calificados, conversiones, posiciones SEO, tráfico orgánico). Sin reportes de vanidad: sólo lo que ayuda a decidir.',
  },
  {
    q: '¿Son una agencia para empresas pequeñas?',
    a: 'Trabajamos mejor con empresas que ya tienen un equipo interno de marketing y necesitan un partner externo con accountability real. Si estás arrancando, podemos sumar valor pero no somos la opción más eficiente para presupuestos muy bajos.',
  },
]

export function ServiciosContent() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Servicios · Marketing Digital · CDMX"
        title="Servicios de marketing digital —"
        highlight="bajo una sola dirección."
        description="Performance Ads, SEO, desarrollo web, redes sociales, diseño creativo, software a la medida e inteligencia artificial. Siete servicios integrados bajo una misma estrategia, con accountability sobre cada resultado."
        keyword="servicios de marketing digital"
        ctaSecondary={{ label: 'Ver casos de éxito', href: '/casos' }}
      />

      <SharedCases />

      <ShellWrap data="light" variant="papel">
        <Breadcrumbs trail={[{ label: 'Inicio', href: '/' }, { label: 'Servicios' }]} />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={rise}
          className="mt-8 max-w-3xl"
        >
          <ChapterTag roman="I" label="Catálogo" sub="Qué hacemos" />
          <h2
            className="hero-type mt-5 text-[28px] text-onyx sm:text-[38px] lg:text-[44px]"
            style={{ fontWeight: 300 }}
          >
            Siete capacidades, una sola{' '}
            <span className="multi-grad">dirección estratégica.</span>
          </h2>
          <p className="lead-type mt-5 text-[15px] sm:text-[16px]">
            Cada servicio funciona por sí mismo y suma cuando se opera junto a
            los demás. Construimos lo que tu marca necesita en este momento —
            sin paquetes prefabricados y sin amarres.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
            >
              <Link
                href={s.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-[24px] bg-papel p-6 transition-all duration-500 hover:-translate-y-1 sm:p-7"
                style={{
                  boxShadow:
                    '0 1px 2px rgba(15,15,30,0.06), 0 4px 14px rgba(15,15,30,0.08)',
                }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-25 blur-2xl transition-opacity duration-700 group-hover:opacity-50"
                  style={{ background: s.accent }}
                />

                <div className="relative flex items-start justify-between">
                  <span
                    className="font-mono text-[10.5px] tracking-[0.18em] text-plomo"
                  >
                    {s.n}
                  </span>
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${s.accent}28, transparent)`,
                      boxShadow: `inset 0 0 0 1px ${s.accent}30`,
                    }}
                  >
                    <ServiceIcon iconKey={s.iconKey} className="h-4 w-4" style={{ color: s.accent }} />
                  </span>
                </div>

                <h3
                  className="relative mt-6 text-[20px] font-medium tracking-tight text-onyx sm:text-[22px]"
                  style={{ letterSpacing: '-0.018em' }}
                >
                  {s.title}
                </h3>
                <p className="relative mt-3 flex-1 text-[13.5px] leading-[1.55] text-grafito sm:text-[14px]">
                  {s.description}
                </p>

                <div className="relative mt-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
                    {s.keyword}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5"
                    style={{ color: s.accent }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </ShellWrap>

      <ShellWrap data="dark" variant="dark">
        <div className="aurora aurora-soft absolute inset-0 opacity-50" aria-hidden />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-12" />

        <div className="relative z-10">
          <ChapterTag roman="II" label="Por qué bajo una sola dirección" sub="Coherencia" dark />
          <h2
            className="hero-type mt-5 max-w-[26ch] text-[28px] text-papel sm:text-[40px] lg:text-[48px]"
            style={{ fontWeight: 300 }}
          >
            Por qué los servicios de marketing digital{' '}
            <span className="multi-grad-bright">no deberían vivir en silos.</span>
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {[
              {
                t: 'Decisiones más rápidas',
                d: 'Cuando SEO, performance y desarrollo viven en el mismo equipo, los cambios se discuten en una llamada — no entre tres proveedores.',
              },
              {
                t: 'Una métrica de verdad',
                d: 'Atribución limpia y dashboards unificados. Sabes exactamente qué canal aporta y cuál sólo gasta presupuesto.',
              },
              {
                t: 'Voz de marca consistente',
                d: 'El copy del anuncio, el contenido orgánico y la web hablan en el mismo tono porque salen del mismo equipo creativo.',
              },
            ].map((b, i) => (
              <motion.div
                key={b.t}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={rise}
                className="border-t border-papel/10 pt-6"
              >
                <h3
                  className="text-[18px] font-medium tracking-tight text-papel sm:text-[20px]"
                  style={{ letterSpacing: '-0.018em' }}
                >
                  {b.t}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.6] text-papel/65 sm:text-[14.5px]">
                  {b.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </ShellWrap>

      <ShellWrap data="light" variant="marfil">
        <ChapterTag roman="III" label="FAQ" sub="Preguntas frecuentes" />
        <h2
          className="hero-type mt-5 max-w-[24ch] text-[26px] text-onyx sm:text-[36px] lg:text-[42px]"
          style={{ fontWeight: 300 }}
        >
          Lo que solemos resolver{' '}
          <span className="multi-grad">antes de empezar.</span>
        </h2>

        <div className="mt-8">
          <FAQAccordion items={faqs} />
        </div>
      </ShellWrap>

      <CTASection
        title="Solicita una propuesta de"
        highlight="marketing digital para tu empresa."
        description="Cuéntanos tu proyecto — aunque sea sólo una dirección general. Diseñamos la propuesta a la medida en menos de una semana."
        secondary={{ label: 'Ver nuestros casos', href: '/casos' }}
      />
    </SiteFrame>
  )
}
