import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          Error 404
        </p>
        <h1 className="mb-4 font-heading text-5xl font-bold text-text-primary">
          Página no encontrada
        </h1>
        <p className="mb-8 text-lg text-text-secondary">
          La página que buscas no existe o fue movida.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-2xl bg-navy px-6 py-3 text-base font-semibold text-white shadow-card transition-all hover:shadow-card-hover"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
