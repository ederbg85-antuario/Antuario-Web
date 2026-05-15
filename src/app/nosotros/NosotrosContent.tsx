'use client'

import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { SiteFrame, AntuarioMark } from '@/components/layout/SiteFrame'
import {
  PageHero,
  ShellWrap,
  ChapterTag,
  CTASection,
  Breadcrumbs,
  rise,
} from '@/components/common/PageBuildingBlocks'
import {
  SharedDifferentiators,
  SharedData,
  SharedCoverage,
  SharedCases,
} from '@/components/common/PageSharedSections'

const principles = [
  {
    n: '01',
    t: 'Accountability total',
    d: 'Cada compromiso tiene un dueño y una métrica. No hay justificaciones cuando algo no rinde — hay acción.',
  },
  {
    n: '02',
    t: 'Estrategia + estructura',
    d: 'Visión completa del posicionamiento al funnel. Ordenamos lo suelto, conectamos los silos.',
  },
  {
    n: '03',
    t: 'Datos como brújula',
    d: 'Decisiones basadas en información — no en intuición ni en lo que diría una agencia genérica.',
  },
  {
    n: '04',
    t: 'Hecho a la medida',
    d: 'Cero paquetes prefabricados. Cada solución se diseña en función del negocio que tiene enfrente.',
  },
  {
    n: '05',
    t: 'Vanguardia con IA',
    d: 'Mientras la mayoría apenas la nombra, nosotros la operamos en producción todos los días.',
  },
  {
    n: '06',
    t: 'Transparencia radical',
    d: 'Reportes claros, presupuestos abiertos, métricas accesibles. Sin amarres ni costos escondidos.',
  },
]

// Equipo en formación — placeholder honesto. Se reemplaza con fotos y bios reales cuando el cliente las tenga.
const team = [
  { role: 'Dirección General', name: 'Por presentar', focus: 'Estrategia y crecimiento' },
  { role: 'Dirección Creativa', name: 'Por presentar', focus: 'Diseño y dirección de arte' },
  { role: 'Dirección de Performance', name: 'Por presentar', focus: 'Ads, SEO y medición' },
  { role: 'Dirección de Tecnología', name: 'Por presentar', focus: 'Software, IA, integraciones' },
  { role: 'Operaciones', name: 'Por presentar', focus: 'Cuentas y delivery' },
  { role: 'Producción Audiovisual', name: 'Por presentar', focus: 'Foto, video, post' },
]

const methodologySteps = [
  { n: '01', t: 'Diagnóstico', d: 'Antes de proponer, entendemos. Mapeo del negocio, embudo, competidores y oportunidad real.' },
  { n: '02', t: 'Estrategia', d: 'Plan con objetivos, KPIs y arquitectura técnica clara. Sin promesas vacías ni sales decks vendedores.' },
  { n: '03', t: 'Ejecución integrada', d: 'Equipos multidisciplinarios trabajando en sincronía bajo una sola dirección operativa.' },
  { n: '04', t: 'Medición + ajuste', d: 'Dashboards a la medida, reuniones de revisión semanales o quincenales, optimización continua.' },
]

export function NosotrosContent() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Nosotros · Antuario · CDMX"
        title="Somos Antuario — una agencia de marketing digital"
        highlight="con visión estratégica."
        description="Operamos como un equipo de marketing digital integrado para empresas en México. Diseñamos soluciones de marketing digital a la medida — estrategia, ejecución y medición bajo una sola dirección, con accountability sobre cada compromiso."
        keyword="agencia de marketing digital con visión estratégica"
        ctaSecondary={{ label: 'Ver nuestros servicios', href: '/servicios' }}
        mobileMarkAbove
      />

      <SharedCases />

      <ShellWrap data="light" variant="papel">
        <Breadcrumbs trail={[{ label: 'Inicio', href: '/' }, { label: 'Nosotros' }]} />

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="lg:col-span-7"
          >
            <ChapterTag roman="I" label="Manifiesto" sub="Por qué existimos" />
            <h2
              className="hero-type mt-5 max-w-[20ch] text-[28px] text-onyx sm:text-[40px] lg:text-[46px]"
              style={{ fontWeight: 300 }}
            >
              Una agencia que rinde cuentas{' '}
              <span className="multi-grad">con métricas, no con justificaciones.</span>
            </h2>
            <p className="lead-type mt-6 max-w-[52ch] text-[15px] sm:text-[16px]">
              Antuario nace en CDMX con una idea simple: construir una agencia
              donde el accountability no sea un slogan. Donde cada compromiso
              tenga un dueño, cada métrica un responsable y cada peso invertido
              una trazabilidad clara.
            </p>
            <p className="body-type mt-4 max-w-[56ch] text-[14.5px]">
              Diseñamos sistemas de marketing digital a la medida para empresas
              que ya no caben en el modelo de la agencia tradicional. Marcas
              que necesitan estrategia y ejecución bajo una sola dirección,
              sin perder el rigor en datos ni la velocidad en la operación.
            </p>
            <p className="body-type mt-4 max-w-[56ch] text-[14.5px]">
              Operamos siete servicios bajo un mismo techo —{' '}
              <strong className="font-medium text-onyx">SEO, Performance Ads, Desarrollo Web, Redes Sociales, Diseño Creativo, Software a la medida e Inteligencia Artificial</strong>{' '}
              — porque las marcas modernas no se construyen en silos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center lg:col-span-5"
          >
            <div className="relative flex h-[320px] w-[320px] items-center justify-center sm:h-[380px] sm:w-[380px]">
              <span
                className="agency-halo absolute inset-6 rounded-full sm:inset-8"
                aria-hidden
              />
              <span className="agency-pulse absolute h-16 w-16 rounded-full" aria-hidden />
              <span className="agency-pulse delay-1 absolute h-16 w-16 rounded-full" aria-hidden />
              <span className="agency-core-glow pointer-events-none absolute h-28 w-28 rounded-full" aria-hidden />
              <div className="agency-core-breath relative">
                <AntuarioMark className="h-[100px] w-auto text-onyx sm:h-[128px]" />
              </div>
            </div>
          </motion.div>
        </div>
      </ShellWrap>

      <ShellWrap data="dark" variant="dark">
        <div className="aurora aurora-soft absolute inset-0 opacity-50" aria-hidden />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-12" />

        <div className="relative z-10">
          <ChapterTag roman="II" label="Principios" sub="Cómo trabajamos" dark />
          <h2
            className="hero-type mt-5 max-w-[20ch] text-[28px] text-papel sm:text-[40px] lg:text-[46px]"
            style={{ fontWeight: 300 }}
          >
            Seis principios que sostienen{' '}
            <span className="multi-grad-bright">cada decisión.</span>
          </h2>

          <div className="mt-10 grid gap-y-2 lg:grid-cols-2 lg:gap-x-12">
            {principles.map((p, i) => (
              <motion.div
                key={p.t}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={rise}
                className="grid grid-cols-[auto_1fr] gap-x-5 py-6 sm:gap-x-7 sm:py-7"
                style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span
                  className="text-[44px] font-light leading-none tabular-nums text-papel/15 sm:text-[52px]"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  {p.n}
                </span>
                <div className="pt-1">
                  <h3
                    className="text-[18px] font-medium tracking-tight text-papel sm:text-[20px]"
                    style={{ letterSpacing: '-0.018em' }}
                  >
                    {p.t}
                  </h3>
                  <p className="mt-2 max-w-[42ch] text-[13.5px] leading-[1.55] text-papel/65 sm:text-[14.5px]">
                    {p.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ShellWrap>

      <ShellWrap data="light" variant="marfil">
        <ChapterTag roman="III" label="Equipo" sub="Quién está detrás" />
        <h2
          className="hero-type mt-5 max-w-[24ch] text-[28px] text-onyx sm:text-[38px] lg:text-[44px]"
          style={{ fontWeight: 300 }}
        >
          Un equipo multidisciplinario{' '}
          <span className="multi-grad">en formación constante.</span>
        </h2>
        <p className="lead-type mt-5 max-w-[58ch] text-[15px] sm:text-[16px]">
          Estamos terminando de presentar a cada miembro del equipo. Por
          ahora, los roles que sostienen Antuario:
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <motion.article
              key={member.role}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={rise}
              className="rounded-[24px] bg-papel p-6 sm:p-7"
              style={{
                boxShadow:
                  '0 1px 2px rgba(15,15,30,0.04), 0 4px 14px rgba(15,15,30,0.06)',
              }}
            >
              <div
                className="relative mb-5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(79,70,229,0.10), rgba(34,211,238,0.06) 60%, rgba(167,139,250,0.10))',
                }}
              >
                <span
                  className="absolute inset-0 opacity-50"
                  style={{
                    background:
                      'radial-gradient(50% 50% at 50% 50%, rgba(79,70,229,0.18), transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                  aria-hidden
                />
                <User className="relative h-8 w-8 text-plomo opacity-50" />
                <span className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-[0.22em] text-plomo">
                  Foto pendiente
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
                {member.role}
              </span>
              <h3
                className="mt-2 text-[17px] font-medium tracking-tight text-onyx sm:text-[18px]"
                style={{ letterSpacing: '-0.014em' }}
              >
                {member.name}
              </h3>
              <p className="mt-1 text-[12.5px] text-grafito sm:text-[13px]">
                {member.focus}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 max-w-[60ch] text-[12.5px] text-plomo">
          * Estamos finalizando las presentaciones del equipo.
          Esta sección se actualizará con fotos profesionales y biografías
          completas en las próximas semanas.
        </p>
      </ShellWrap>

      <ShellWrap data="dark" variant="dark">
        <div className="aurora aurora-quiet absolute inset-0 opacity-40" aria-hidden />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-12" />

        <div className="relative z-10">
          <ChapterTag roman="IV" label="Metodología" sub="Cómo entregamos" dark />
          <h2
            className="hero-type mt-5 max-w-[24ch] text-[28px] text-papel sm:text-[40px] lg:text-[46px]"
            style={{ fontWeight: 300 }}
          >
            Cuatro fases que repetimos{' '}
            <span className="multi-grad-bright">en cada proyecto.</span>
          </h2>

          <div className="mt-10 grid gap-y-8 lg:grid-cols-2 lg:gap-x-12">
            {methodologySteps.map((s, i) => (
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

      {/* Shared sections — Diferenciadores · Medición · Cobertura */}
      <SharedDifferentiators />
      <SharedData />
      <SharedCoverage />

      <CTASection
        title="¿Quieres conocer al equipo"
        highlight="que va a llevar tu proyecto?"
        description="Agendamos una llamada inicial sin costo. Te presentamos a las personas que estarían en el proyecto y te entregamos un diagnóstico inicial."
        secondary={{ label: 'Ver casos de éxito', href: '/casos' }}
      />
    </SiteFrame>
  )
}
