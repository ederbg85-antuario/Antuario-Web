'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'

const DISMISS_KEY = 'antuario-independence-day-banner-2026-editorial'
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
      className="independence-banner"
    >
      <div className="independence-banner__aurora" aria-hidden="true" />
      <div className="independence-banner__rule" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-[1440px] items-center gap-3 px-10 py-3 sm:gap-4 sm:px-12 sm:py-[13px]">
        <p className="independence-banner__date hidden sm:block">15 · IX · MMXXVI</p>
        <span className="independence-banner__divider hidden sm:block" aria-hidden="true" />

        <p className="min-w-0 flex-1 text-center sm:text-left lg:text-center">
          <span className="independence-banner__date mb-1.5 block sm:hidden">
            15 · IX · MMXXVI
          </span>
          <span className="independence-banner__lead block sm:inline">
            Feliz 15 de septiembre
          </span>
          <span className="independence-banner__dot hidden sm:inline-block" aria-hidden="true" />
          <span className="independence-banner__aside mt-0.5 block sm:mt-0 sm:inline">
            orgullosos de ser mexicanos
          </span>
        </p>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Cerrar mensaje del 15 de septiembre"
          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-papel/40 transition-colors hover:bg-papel/8 hover:text-papel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-papel/55 sm:right-3"
        >
          <X className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
        </button>
      </div>

      <div className="independence-banner__rule independence-banner__rule--floor" aria-hidden="true" />
    </aside>
  )
}
