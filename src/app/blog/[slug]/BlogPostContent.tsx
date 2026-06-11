'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Database,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  XCircle,
} from 'lucide-react'
import { SiteFrame } from '@/components/layout/SiteFrame'
import {
  Breadcrumbs,
  CTASection,
  ChapterTag,
  ShellWrap,
  rise,
} from '@/components/common/PageBuildingBlocks'
import type { BlogPost } from '@/lib/blog-data'

const marketStats = [
  {
    value: '110 M',
    label: 'usuarios de internet en México',
    detail: '83.5% de penetración al cierre de 2025.',
    source: 'DataReportal 2026',
    accent: 'var(--laguna-b)',
  },
  {
    value: '99 M',
    label: 'identidades en redes sociales',
    detail: '74.9% de la población mexicana.',
    source: 'DataReportal 2026',
    accent: 'var(--glicina-b)',
  },
  {
    value: '$941B',
    label: 'MXN de eCommerce retail',
    detail: '77.2 millones de compradores digitales.',
    source: 'AMVO 2026',
    accent: 'var(--salvia-b)',
  },
  {
    value: '7.7%',
    label: 'ingresos destinados a marketing',
    detail: 'Presupuesto promedio reportado por CMOs en 2025.',
    source: 'Gartner 2025',
    accent: 'var(--nectar-b)',
  },
]

const channelReach = [
  { channel: 'TikTok', value: 89.7, note: 'del internet user base' },
  { channel: 'Facebook', value: 84.7, note: 'del internet user base' },
  { channel: 'Messenger', value: 49.5, note: 'del internet user base' },
  { channel: 'Instagram', value: 48.5, note: 'del internet user base' },
  { channel: 'LinkedIn', value: 26.3, note: 'del internet user base' },
]

const pressureStats = [
  { label: 'CMOs con presupuesto insuficiente', value: 59, source: 'Gartner' },
  { label: 'Marketing recortado si utilidades fallan', value: 45.4, source: 'The CMO Survey' },
  { label: 'Compradores digitales investigan online antes de comprar offline', value: 42, source: 'AMVO' },
]

const warningSigns = [
  'Nadie puede explicar qué KPI debe mover cada entregable.',
  'Las tareas viven en chats, no en un sistema de gestión.',
  'El reporte presume alcance, likes o clics sin conectar con pipeline.',
  'Cada área culpa a otra cuando el resultado no aparece.',
  'No existe una bitácora clara de hipótesis, pruebas y aprendizajes.',
  'El dashboard es una vitrina, no una herramienta de decisión.',
]

const evaluationQuestions = [
  {
    q: '¿Qué KPIs recomiendan para mi negocio y por qué?',
    a: 'Una agencia seria primero entiende margen, ciclo de venta, ticket promedio, capacidad operativa y objetivo de crecimiento.',
  },
  {
    q: '¿Cómo diferencian métricas de vanidad y métricas de negocio?',
    a: 'El alcance y los clics pueden servir, pero no sustituyen CAC, ROAS, pipeline, MQLs, SQLs o conversión a cliente.',
  },
  {
    q: '¿Quién es dueño de cada número?',
    a: 'Accountability significa que cada resultado importante tiene responsable, contexto y cadencia de revisión.',
  },
  {
    q: '¿Qué hacen cuando una campaña no funciona?',
    a: 'El diagnóstico debe revisar tracking, tráfico, oferta, creatividad, landing, respuesta comercial y calidad del lead.',
  },
  {
    q: '¿Dónde documentan aprendizajes?',
    a: 'La optimización no existe si cada decisión se pierde en WhatsApp o se reinventa cada mes.',
  },
]

const systemLayers = [
  { title: 'Objetivo', text: 'Qué resultado de negocio se busca mover.', Icon: Target },
  { title: 'Indicador', text: 'Cómo sabremos si el proyecto avanza.', Icon: BarChart3 },
  { title: 'Responsable', text: 'Quién interpreta, decide y responde.', Icon: ShieldCheck },
  { title: 'Sistema', text: 'Dónde viven tareas, datos y seguimiento.', Icon: Database },
  { title: 'Aprendizaje', text: 'Qué cambia con base en la evidencia.', Icon: Sparkles },
]

function formatDate(date: string) {
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}

function StatCard({ stat, index }: { stat: (typeof marketStats)[number]; index: number }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={rise}
      className="relative overflow-hidden rounded-[24px] bg-papel p-6"
      style={{ boxShadow: '0 1px 2px rgba(15,15,30,0.06), 0 12px 28px rgba(15,15,30,0.08)' }}
    >
      <span
        aria-hidden
        className="absolute -right-12 -top-12 h-28 w-28 rounded-full opacity-30 blur-2xl"
        style={{ background: stat.accent }}
      />
      <div className="relative">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">{stat.source}</p>
        <p className="mt-4 text-[42px] font-light tracking-tight text-onyx sm:text-[50px]">{stat.value}</p>
        <h3 className="mt-2 text-[16px] font-medium tracking-tight text-onyx">{stat.label}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-plomo">{stat.detail}</p>
      </div>
    </motion.div>
  )
}

function ReachChart() {
  return (
    <div className="rounded-[28px] bg-onyx p-6 text-papel sm:p-8">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <ChapterTag roman="II" label="México digital" sub="alcance publicitario" dark />
          <h2 className="mt-5 max-w-[18ch] text-[28px] font-light leading-tight tracking-tight sm:text-[40px]">
            El mercado está lleno. La medición separa señal de ruido.
          </h2>
        </div>
        <p className="max-w-[34ch] text-[13px] leading-relaxed text-papel/58">
          Alcance reportado por herramientas publicitarias como porcentaje de la base local de usuarios de internet. Fuente: DataReportal 2026.
        </p>
      </div>
      <div className="mt-9 space-y-4">
        {channelReach.map((item, index) => (
          <div key={item.channel}>
            <div className="mb-1.5 flex items-center justify-between gap-4">
              <span className="text-[13px] font-medium text-papel">{item.channel}</span>
              <span className="font-mono text-[11px] text-papel/55">{item.value}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-papel/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full"
                style={{
                  background:
                    'linear-gradient(90deg, var(--cobalto-b), var(--glicina-b), var(--rubor-b), var(--nectar-b), var(--salvia-b), var(--laguna-b))',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PressurePanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[28px] bg-marfil p-6 sm:p-8">
        <ChapterTag roman="III" label="Presión" sub="menos margen para improvisar" />
        <h2 className="mt-5 text-[28px] font-light leading-tight tracking-tight text-onyx sm:text-[38px]">
          Cuando el presupuesto se aprieta, la agencia tiene que probar valor.
        </h2>
        <p className="mt-5 text-[14px] leading-relaxed text-grafito">
          Gartner reportó presupuestos estancados; The CMO Survey muestra presión financiera; AMVO confirma que el comprador mexicano investiga antes de decidir. La conclusión es simple: el marketing necesita sistema, no solo producción.
        </p>
      </div>
      <div className="grid gap-4">
        {pressureStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            custom={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="rounded-[22px] bg-papel p-5"
            style={{ boxShadow: '0 1px 2px rgba(15,15,30,0.06), 0 10px 26px rgba(15,15,30,0.07)' }}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">{stat.source}</p>
                <h3 className="mt-2 text-[15px] font-medium text-onyx">{stat.label}</h3>
              </div>
              <p className="text-[34px] font-light tracking-tight text-onyx">{stat.value}%</p>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-onyx/8">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${stat.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                className="h-full rounded-full bg-onyx"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ArticleSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mx-auto max-w-[760px] py-10 sm:py-12">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-plomo">{eyebrow}</p>
      <h2 className="mt-4 text-[28px] font-light leading-tight tracking-tight text-onyx sm:text-[40px]">
        {title}
      </h2>
      <div className="mt-6 space-y-5 text-[16px] leading-[1.78] text-grafito">{children}</div>
    </section>
  )
}

function WarningGrid() {
  return (
    <div className="rounded-[28px] bg-marfil p-6 sm:p-8">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <ChapterTag roman="IV" label="Diagnóstico" sub="señales de alarma" />
          <h2 className="mt-5 max-w-[18ch] text-[28px] font-light leading-tight tracking-tight text-onyx sm:text-[40px]">
            Una agencia sin sistema puede parecer ocupada, pero no necesariamente útil.
          </h2>
        </div>
        <AlertTriangle className="h-10 w-10 text-rubor" />
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {warningSigns.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-[18px] bg-papel p-4">
            <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-rubor" />
            <p className="text-[13.5px] leading-relaxed text-grafito">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SystemDiagram() {
  return (
    <div className="rounded-[28px] bg-onyx p-6 text-papel sm:p-8">
      <ChapterTag roman="V" label="Sistema operativo" sub="de estrategia a aprendizaje" dark />
      <div className="mt-8 grid gap-3 lg:grid-cols-5">
        {systemLayers.map((layer, index) => (
          <motion.div
            key={layer.title}
            custom={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={rise}
            className="relative rounded-[22px] border border-papel/10 bg-papel/[0.045] p-5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-papel/8">
              <layer.Icon className="h-4 w-4 text-laguna-b" />
            </div>
            <p className="mt-5 font-mono text-[10px] text-papel/35">0{index + 1}</p>
            <h3 className="mt-2 text-[17px] font-medium tracking-tight text-papel">{layer.title}</h3>
            <p className="mt-2 text-[12.5px] leading-relaxed text-papel/58">{layer.text}</p>
            {index < systemLayers.length - 1 && (
              <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-papel/22 lg:block" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function EvaluationMatrix() {
  return (
    <div className="rounded-[28px] bg-papel p-6 sm:p-8" style={{ boxShadow: '0 1px 2px rgba(15,15,30,0.06), 0 14px 34px rgba(15,15,30,0.08)' }}>
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <ChapterTag roman="VI" label="Antes de contratar" sub="preguntas que revelan método" />
          <h2 className="mt-5 max-w-[20ch] text-[28px] font-light leading-tight tracking-tight text-onyx sm:text-[40px]">
            Si no pueden responder esto, probablemente no hay sistema.
          </h2>
        </div>
        <CheckCircle2 className="h-10 w-10 text-salvia" />
      </div>
      <div className="mt-8 divide-y divide-onyx/8">
        {evaluationQuestions.map((item, index) => (
          <div key={item.q} className="grid gap-3 py-5 sm:grid-cols-[42px_1fr]">
            <span className="font-mono text-[11px] text-plomo">0{index + 1}</span>
            <div>
              <h3 className="text-[17px] font-medium tracking-tight text-onyx">{item.q}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-grafito">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Sources({ post }: { post: BlogPost }) {
  return (
    <div className="rounded-[28px] bg-marfil p-6 sm:p-8">
      <ChapterTag roman="VII" label="Fuentes" sub="datos usados" />
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {post.sources.map((source) => (
          <a
            key={source.href}
            href={source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[18px] bg-papel p-4 transition-transform hover:-translate-y-0.5"
          >
            <p className="text-[13.5px] font-medium leading-snug text-onyx">{source.label}</p>
            <p className="mt-2 text-[11px] text-plomo group-hover:text-grafito">Abrir fuente</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <SiteFrame>
      <section data-theme="dark" className="pt-[80px] sm:pt-[92px] lg:pt-[100px]">
        <div className="mx-auto w-full max-w-[1440px] px-[clamp(10px,2.4vw,28px)]">
          <div className="section-shell shell-dark overflow-hidden pt-[48px] sm:pt-[64px]">
            <div className="aurora aurora-deep absolute inset-0 opacity-65" aria-hidden />
            <div className="grid-pattern-dark pointer-events-none absolute inset-0 opacity-15" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow-light">{post.category}</span>
                  <span className="h-px w-8 bg-papel/15" />
                  <span className="text-[12px] text-papel/45">{formatDate(post.date)}</span>
                  <span className="text-[12px] text-papel/45">{post.readingTime}</span>
                </div>
                <h1 className="display mt-6 max-w-[18ch] text-balance text-[34px] leading-[1.02] text-papel sm:text-[48px] lg:text-[62px]">
                  {post.title}{' '}
                  <span className="multi-grad-bright">{post.highlight}</span>
                </h1>
                <p className="mt-6 max-w-[58ch] text-[15.5px] leading-[1.65] text-papel/68 sm:text-[17px]">
                  {post.excerpt}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3 text-[11.5px] text-papel/42">
                  <span className="font-mono uppercase tracking-[0.22em]">Keyword</span>
                  <span className="h-px w-6 bg-papel/15" />
                  <span>{post.keyword}</span>
                </div>
              </div>
              <div className="rounded-[28px] border border-papel/10 bg-papel/[0.045] p-5 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-[18px] bg-papel/8 p-4">
                    <CircleDollarSign className="h-5 w-5 text-salvia-b" />
                    <p className="mt-5 text-[26px] font-light tracking-tight text-papel">CAC</p>
                    <p className="mt-1 text-[11.5px] leading-snug text-papel/50">Costo real de adquisición</p>
                  </div>
                  <div className="rounded-[18px] bg-papel/8 p-4">
                    <LineChart className="h-5 w-5 text-laguna-b" />
                    <p className="mt-5 text-[26px] font-light tracking-tight text-papel">ROAS</p>
                    <p className="mt-1 text-[11.5px] leading-snug text-papel/50">Retorno medible</p>
                  </div>
                  <div className="rounded-[18px] bg-papel/8 p-4">
                    <Workflow className="h-5 w-5 text-rubor-b" />
                    <p className="mt-5 text-[26px] font-light tracking-tight text-papel">SLA</p>
                    <p className="mt-1 text-[11.5px] leading-snug text-papel/50">Ritmo operativo</p>
                  </div>
                  <div className="rounded-[18px] bg-papel/8 p-4">
                    <Network className="h-5 w-5 text-glicina-b" />
                    <p className="mt-5 text-[26px] font-light tracking-tight text-papel">KPI</p>
                    <p className="mt-1 text-[11.5px] leading-snug text-papel/50">Dueño + número</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShellWrap data="light" variant="papel">
        <Breadcrumbs
          trail={[
            { label: 'Inicio', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: 'Datos y accountability' },
          ]}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {marketStats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        <ArticleSection eyebrow="La tesis" title="El problema no es que falten agencias. El problema es que muchas venden actividad sin dirección.">
          <p>
            Contratar una agencia de marketing digital en CDMX se volvió más difícil de lo que debería. No porque falten opciones. Al contrario: sobran agencias, freelancers, estudios creativos, equipos de performance, productoras de contenido, consultores de pauta, especialistas SEO, community managers y promesas de resultados en 90 días.
          </p>
          <p>
            El problema es que desde afuera muchas se ven iguales. Todas dicen hacer estrategia. Todas dicen trabajar con datos. Todas hablan de creatividad, resultados, crecimiento, performance, IA y dashboards. Pero cuando el proyecto arranca, muchas empresas descubren demasiado tarde que lo que compraron no era un sistema de marketing: era una lista de entregables.
          </p>
          <p>
            Un calendario de contenidos. Un par de campañas. Un reporte mensual. Un grupo de WhatsApp lleno de pendientes. Algunas juntas. Algunas piezas bonitas. Mucha actividad. Y poca claridad.
          </p>
          <p>
            La diferencia entre una buena y una mala agencia rara vez está en si el arte se ve bonito. Está en algo menos visible, pero mucho más importante: la estructura operativa con la que la agencia convierte una estrategia en decisiones, tareas, responsables, datos y aprendizaje.
          </p>
        </ArticleSection>

        <ReachChart />

        <ArticleSection eyebrow="Contexto" title="El mercado digital creció. La tolerancia al caos no debería crecer con él.">
          <p>
            México ya no es un mercado donde estar en digital sea ventaja. DataReportal reporta 110 millones de usuarios de internet en México al cierre de 2025, una penetración de 83.5%, y 99 millones de identidades en redes sociales.
          </p>
          <p>
            AMVO, por su parte, reporta que el eCommerce retail en México alcanzó $941 mil millones de pesos y 77.2 millones de compradores digitales. Además, 42% de compradores digitales usa internet principalmente como herramienta de información antes de concretar una compra en otro canal.
          </p>
          <p>
            Eso cambia la conversación. El problema de muchas empresas ya no es si su cliente está o no en internet. El problema es cómo competir por su atención, cómo convertir esa atención en demanda real y cómo saber qué parte de la inversión está funcionando.
          </p>
          <p>
            Mientras más canales existen, más fácil es confundir movimiento con avance. Publicar más no necesariamente vende más. Tener más métricas no significa entender mejor. Hacer más campañas no garantiza tener una mejor estrategia.
          </p>
        </ArticleSection>

        <PressurePanel />

        <ArticleSection eyebrow="Accountability" title="Accountability no es echar culpas. Es ser dueño de un número.">
          <p>
            En muchas agencias, cuando algo sale mal, empieza el teatro de la culpa. El equipo de pauta dice que la landing no convierte. El equipo web dice que la campaña trae tráfico malo. El equipo de contenido dice que ventas no da seguimiento. Ventas dice que los leads no sirven. Dirección pide mejorar los artes. Todos tienen parte de razón, pero nadie tiene el sistema completo.
          </p>
          <p>
            Ese es el costo de trabajar sin accountability. Accountability no significa regañar al equipo ni buscar culpables. Significa que cada resultado importante tiene un dueño, una métrica y un contexto de decisión.
          </p>
          <p>
            En una empresa grande, a un director de marketing no se le delega simplemente hacer campañas. Se le responsabiliza por resultados: crecimiento, CAC, pipeline, participación de mercado, eficiencia de inversión, retención y demanda calificada. Una agencia de marketing digital seria debería operar con la misma lógica.
          </p>
          <p>
            No debería decir que entrega 20 posts, 3 reels, 2 campañas y un reporte. Debería poder decir que es responsable de mejorar indicadores específicos, bajo condiciones claras, con hipótesis documentadas, medición semanal y decisiones tomadas cuando los números cambian.
          </p>
        </ArticleSection>

        <SystemDiagram />

        <ArticleSection eyebrow="KPIs" title="La diferencia entre métrica y KPI cambia toda la conversación.">
          <p>
            Think with Google lo explica de forma clara en su guía de efectividad de medios: una métrica mide algo; un KPI mide progreso hacia un objetivo específico. La diferencia parece pequeña, pero en marketing es enorme.
          </p>
          <p>
            Un post puede tener alcance. Una campaña puede tener clics. Un reel puede tener reproducciones. Una página puede tener sesiones. Todo eso son métricas. Pero si el objetivo del negocio es adquirir clientes rentables, entonces el KPI no puede quedarse en alcance, clics o sesiones. Tiene que acercarse al resultado comercial.
          </p>
          <p>
            El CAC es un buen ejemplo. NetSuite lo define como el costo total promedio para adquirir un nuevo cliente, calculado dividiendo los costos de ventas y marketing entre los nuevos clientes adquiridos en un periodo. No es una métrica decorativa; es un indicador de sostenibilidad.
          </p>
          <p>
            Una agencia que no entiende CAC puede optimizar para leads baratos. Una agencia que sí lo entiende preguntará algo más importante: ¿cuál es el costo aceptable para adquirir un cliente rentable?
          </p>
        </ArticleSection>

        <WarningGrid />

        <ArticleSection eyebrow="Creatividad" title="La creatividad sin sistema se vuelve azar.">
          <p>
            Esto no significa que la creatividad no importe. Importa muchísimo. Un mensaje fuerte, una identidad clara, una pieza bien ejecutada y un concepto distinto pueden cambiar el desempeño de una campaña.
          </p>
          <p>
            Pero la creatividad sin sistema se vuelve difícil de mejorar. Si una pieza funciona y nadie sabe por qué, no hay aprendizaje. Si una campaña falla y nadie sabe qué variable falló, no hay optimización. Si cada mes se empieza desde cero, la agencia no está construyendo inteligencia: está produciendo ruido.
          </p>
          <p>
            Un sistema serio permite que la creatividad deje de depender del gusto y empiece a convertirse en hipótesis medibles: qué mensaje atrae mejor al cliente correcto, qué propuesta genera conversaciones calificadas, qué landing convierte mejor por fuente de tráfico y qué canal trae clientes con mejor LTV.
          </p>
        </ArticleSection>

        <ArticleSection eyebrow="Dashboard" title="El dashboard no es el sistema. Es la ventana al sistema.">
          <p>
            Muchas agencias ya entendieron que decir que tienen dashboard suena bien. Pero un dashboard por sí solo no resuelve nada.
          </p>
          <p>
            Un tablero lleno de gráficas puede ser tan inútil como un PDF lleno de capturas si no está conectado a decisiones reales. La pregunta no es si la agencia reporta datos. La pregunta es si esos datos cambian lo que la agencia hace.
          </p>
          <p>
            Deloitte encontró en 2025 que las organizaciones que invierten más en tecnología de marketing que en working media reportan 18% mayor sales lift y 7% mayor crecimiento de ingresos que las que invierten más en medios que en tecnología. La lectura no es comprar herramientas por comprar herramientas. La lectura es que la infraestructura importa.
          </p>
          <p>
            Sin una base de datos, integraciones, trazabilidad, medición y procesos, la inversión en medios puede quedarse sin inteligencia.
          </p>
        </ArticleSection>

        <EvaluationMatrix />

        <ArticleSection eyebrow="Antuario" title="En Antuario creemos que el marketing debe ser medible, optimizable y escalable.">
          <p>
            En Antuario no vemos el marketing digital como una colección de entregables. Lo vemos como un sistema.
          </p>
          <p>
            Por eso trabajamos con estrategia, datos, estructura y accountability. No porque suene sofisticado, sino porque es la única forma seria de operar proyectos donde hay dinero, equipos, objetivos y crecimiento de por medio.
          </p>
          <p>
            Nos responsabilizamos de indicadores. Construimos sistemas de información. Aterrizamos proyectos en tareas, responsables, checklists y ciclos de optimización. Conectamos creatividad, pauta, SEO, web, software e inteligencia artificial bajo una sola dirección.
          </p>
          <p>
            Una agencia puede publicar, pautar, diseñar y reportar. Pero una agencia seria debe poder explicar qué está intentando mover, por qué, cómo lo va a medir, quién es responsable y qué decisión se tomará cuando los datos lleguen.
          </p>
          <p>
            Esa es la diferencia entre ejecutar marketing y dirigir crecimiento.
          </p>
        </ArticleSection>

        <Sources post={post} />

        <div className="mt-10 flex flex-col justify-between gap-4 rounded-[28px] bg-onyx p-6 text-papel sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-papel/45">Siguiente paso</p>
            <h2 className="mt-3 text-[24px] font-light tracking-tight sm:text-[34px]">
              ¿Quieres evaluar tu operación de marketing?
            </h2>
          </div>
          <Link href="/contacto" className="btn-primary-inv w-fit">
            Hablemos
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </ShellWrap>

      <CTASection
        title="Si buscas sistema,"
        highlight="hablemos de crecimiento."
        description="Cuéntanos tu proyecto y revisamos qué indicadores, activos y sistemas necesita para operar con claridad."
        secondary={{ label: 'Ver servicios', href: '/servicios' }}
      />
    </SiteFrame>
  )
}
