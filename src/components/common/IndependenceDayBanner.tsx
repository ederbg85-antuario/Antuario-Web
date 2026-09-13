'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const DISMISS_KEY = 'antuario-independence-day-banner-dismissed'

export default function IndependenceDayBanner() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (pathname === '/dashboard' || pathname.startsWith('/dashboard/')) {
      setVisible(false)
      return
    }
    if (window.localStorage.getItem(DISMISS_KEY) === '1') setVisible(false)
  }, [pathname])

  if (!visible) return null

  const dismiss = () => {
    window.localStorage.setItem(DISMISS_KEY, '1')
    setVisible(false)
  }

  return (
    <aside aria-label="Celebración de la Independencia de México" className="border-b border-[#d9d2c2] bg-[#f7f4ed] text-[#2d2a26]">
      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 pr-12 text-center text-xs font-medium sm:py-2.5 sm:text-sm">
        <span className="flex shrink-0 gap-0.5" aria-hidden="true">
          <span className="h-3 w-1 rounded-full bg-[#006847]" />
          <span className="h-3 w-1 rounded-full bg-[#b89b5e]" />
          <span className="h-3 w-1 rounded-full bg-[#ce1126]" />
        </span>
        <p className="leading-relaxed">Feliz 15 de septiembre <span className="mx-1 text-[#a47b2c]" aria-hidden="true">—</span> orgullosos de ser mexicanos</p>
        <button type="button" onClick={dismiss} aria-label="Cerrar mensaje de Independencia" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-[#6d665c] hover:bg-[#ebe5d8] hover:text-[#2d2a26] focus:outline-none focus:ring-2 focus:ring-[#a47b2c]">
          <span aria-hidden="true" className="text-base leading-none">×</span>
        </button>
      </div>
    </aside>
  )
}
