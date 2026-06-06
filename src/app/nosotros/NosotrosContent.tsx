'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
  SharedData,
  SharedCoverage,
  SharedCases,
  TEAM_PHOTOS,
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

const culturePrinciples = [
  { t: 'Nada al aventón', d: 'No improvisamos ni hacemos las cosas a medias. Cada proyecto se trabaja con método, datos y una sola dirección estratégica.' },
  { t: 'Primero definir, luego cotizar', d: 'No cotizamos a ciegas. Una propuesta seria necesita objetivos, alcance y estrategia claros. Si aún no los tienes, los aterrizamos contigo en una Consultoría.' },
  { t: 'El trabajo se respeta', d: 'Definir estrategia y desarrollar un proyecto es trabajo real, no un favor gratis. Lo hacemos en serio y le ponemos un valor justo — para ti y para nosotros.' },
  { t: 'Relaciones de largo plazo', d: 'Trabajamos con quienes valoran hacer las cosas bien. Cuando no hay esa sintonía, preferimos no avanzar: no estamos hechos para el corto plazo.' },
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

      {/* Portada — equipo */}
      <ShellWrap data="light" variant="papel">
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[28px] bg-lino shadow-soft"
        >
          <Image
            src={TEAM_PHOTOS[0].src}
            alt={TEAM_PHOTOS[0].alt}
            width={1600}
            height={900}
            priority
            draggable={false}
            className="aspect-[16/9] h-full w-full object-cover"
            sizes="100vw"
          />
        </motion.div>
      </ShellWrap>

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
        <ChapterTag roman="III" label="Equipo" sub="Quiénes somos" />
        <div className="mt-2 grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2
              className="hero-type max-w-[26ch] text-[28px] text-onyx sm:text-[38px] lg:text-[44px]"
              style={{ fontWeight: 300 }}
            >
              Un equipo pequeño de líderes,{' '}
              <span className="multi-grad">con visión estratégica y cobertura nacional.</span>
            </h2>
            <p className="lead-type mt-5 max-w-[58ch] text-[15px] sm:text-[16px]">
              No somos una agencia de cientos de personas. Somos un equipo interno
              reducido, con un rol estratégico y de liderazgo sobre cada proyecto.
              Operamos desde la Ciudad de México y damos servicio a empresas en
              toda la República Mexicana.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[24px] bg-lino shadow-soft lg:col-span-5"
          >
            <Image
              src={TEAM_PHOTOS[2].src}
              alt={TEAM_PHOTOS[2].alt}
              width={960}
              height={1280}
              draggable={false}
              className="aspect-[4/5] h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </motion.div>
        </div>

        {/* Operación · oficinas · red extendida */}
        <div className="mt-8 grid gap-3 sm:gap-4 lg:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="card-bb-soft p-6"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
              Sede y oficinas
            </span>
            <h3 className="mt-2 text-[16px] font-medium tracking-tight text-onyx" style={{ letterSpacing: '-0.014em' }}>
              CDMX · WeWork
            </h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-grafito">
              Operamos principalmente desde WeWork Insurgentes:{' '}
              <strong className="font-medium text-onyx">Av. Insurgentes Sur 1079, Col. del Valle Sur, Benito Juárez, 03720, CDMX</strong>.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            custom={1}
            className="card-bb-soft p-6"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
              Reuniones presenciales
            </span>
            <h3 className="mt-2 text-[16px] font-medium tracking-tight text-onyx" style={{ letterSpacing: '-0.014em' }}>
              Cualquier WeWork de CDMX
            </h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-grafito">
              Podemos vernos en persona con clientes en cualquier WeWork de la
              ciudad para platicar de proyectos, reportes y estrategia.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            custom={2}
            className="card-bb-soft p-6"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">
              Cobertura
            </span>
            <h3 className="mt-2 text-[16px] font-medium tracking-tight text-onyx" style={{ letterSpacing: '-0.014em' }}>
              Toda la República Mexicana
            </h3>
            <p className="mt-2 text-[13px] leading-[1.55] text-grafito">
              Operamos desde CDMX, pero trabajamos con empresas en cualquier
              estado del país — de forma remota o presencial cuando el proyecto
              lo amerita.
            </p>
          </motion.div>
        </div>

        <p className="lead-type mt-8 max-w-[64ch] text-[14.5px] sm:text-[15px]">
          Para proyectos de mayor escala, nos apoyamos en{' '}
          <strong className="font-medium text-onyx">freelancers independientes de nuestra entera confianza</strong>{' '}
          — especialistas que sumamos al equipo manteniendo siempre la dirección,
          los estándares y el accountability de Antuario.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 overflow-hidden rounded-[24px] bg-lino shadow-soft"
        >
          <Image
            src={TEAM_PHOTOS[1].src}
            alt={TEAM_PHOTOS[1].alt}
            width={1600}
            height={900}
            draggable={false}
            className="aspect-[16/7] h-full w-full object-cover"
            sizes="100vw"
          />
        </motion.div>
      </ShellWrap>

      <ShellWrap data="dark" variant="dark">
        <div className="aurora aurora-quiet absolute inset-0 opacity-40" aria-hidden />
        <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-12" />

        <div className="relative z-10">
          {/* Cultura / valores */}
          <div>
            <ChapterTag roman="IV" label="Cultura" sub="Cómo elegimos con quién trabajar" dark />
            <h2
              className="hero-type mt-5 max-w-[26ch] text-[26px] text-papel sm:text-[36px] lg:text-[40px]"
              style={{ fontWeight: 300 }}
            >
              Hacemos las cosas bien — y{' '}
              <span className="multi-grad-bright">esperamos lo mismo de los clientes con los que trabajamos.</span>
            </h2>
            <div className="mt-10 grid gap-y-8 lg:grid-cols-2 lg:gap-x-12">
              {culturePrinciples.map((c, i) => (
                <motion.div
                  key={c.t}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={rise}
                  className="border-t border-papel/10 pt-6"
                >
                  <h3
                    className="text-[17px] font-medium tracking-tight text-papel sm:text-[19px]"
                    style={{ letterSpacing: '-0.018em' }}
                  >
                    {c.t}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.55] text-papel/65 sm:text-[14.5px]">
                    {c.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ShellWrap>

      {/* Shared sections — Medición · Cobertura */}
      <SharedData />
      <SharedCoverage />

      <CTASection
        title="¿Quieres conocer al equipo"
        highlight="que va a llevar tu proyecto?"
        description="Agendamos una reunión inicial. Te presentamos a las personas que estarían en el proyecto y vemos juntos cómo trabajarlo."
        secondary={{ label: 'Ver casos de éxito', href: '/casos' }}
      />
    </SiteFrame>
  )
}
