'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'

const DISMISS_KEY = 'antuario-independence-day-banner-dismissed'
const BANNER_HEIGHT_VAR = '--independence-banner-h'
const TIME_ZONE = 'America/Mexico_City'

/** Visible Sep 13–16 in Mexico City. Exported for a focused date-window check. */
export function isIndependenceBannerWindow(now = new Date()): boolean {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now)

  const month = Number(parts.find((part) => part.type === 'month')?.value)
  const day = Number(parts.find((part) => part.type === 'day')?.value)
  return month === 9 && day >= 13 && day <= 16
}

function isDashboardPath(pathname: string) {
  return pathname === '/dashboard' || pathname.startsWith('/dashboard/')
}

function clearBannerOffset() {
  document.documentElement.style.removeProperty(BANNER_HEIGHT_VAR)
}

export default function IndependenceDayBanner() {
  const pathname = usePathname()
  const bannerRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isDashboardPath(pathname)) {
      setVisible(false)
      return
    }
    if (!isIndependenceBannerWindow()) {
      setVisible(false)
      return
    }
    if (window.localStorage.getItem(DISMISS_KEY) === '1') {
      setVisible(false)
      return
    }
    setVisible(true)
  }, [pathname])

  useEffect(() => {
    if (!visible) {
      clearBannerOffset()
      return
    }

    const el = bannerRef.current
    if (!el) return

    const apply = () => {
      document.documentElement.style.setProperty(
        BANNER_HEIGHT_VAR,
        `${el.offsetHeight}px`
      )
    }

    apply()
    const observer = new ResizeObserver(apply)
    observer.observe(el)
    return () => {
      observer.disconnect()
      clearBannerOffset()
    }
  }, [visible])

  if (!visible) return null

  const dismiss = () => {
    window.localStorage.setItem(DISMISS_KEY, '1')
    setVisible(false)
  }

  return (
    <aside
      ref={bannerRef}
      role="region"
      aria-label="Celebración del 15 de septiembre"
      className="fixed inset-x-0 top-0 z-[60] bg-onyx text-papel"
    >
      <div
        className="h-px w-full bg-gradient-to-r from-[#006847] via-[#c4a35a] to-[#ce1126]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-[36px] max-w-[1440px] items-center justify-center gap-2.5 px-10 py-1.5 sm:px-12">
        <span className="hidden shrink-0 items-center gap-1 sm:flex" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-[#006847]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#c4a35a]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#ce1126]" />
        </span>
        <p className="text-center text-[11.5px] font-medium leading-snug tracking-[-0.01em] text-papel/88 sm:text-[12.5px]">
          Feliz 15 de septiembre
          <span className="mx-1.5 text-[#c4a35a]" aria-hidden="true">
            —
          </span>
          orgullosos de ser mexicanos
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Cerrar mensaje del 15 de septiembre"
          className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-papel/45 transition-colors hover:bg-papel/8 hover:text-papel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-papel/60 sm:right-3"
        >
          <X className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </aside>
  )
}
