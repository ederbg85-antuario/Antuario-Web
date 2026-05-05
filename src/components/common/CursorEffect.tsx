'use client'

import { useEffect, useRef } from 'react'

export default function CursorEffect() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
    }

    const animate = () => {
      const ease = 0.18
      ringX += (mouseX - ringX) * ease
      ringY += (mouseY - ringY) * ease
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(animate)
    }

    const onPointerEnter = (e: Event) => {
      const t = e.target as HTMLElement | null
      if (!t || typeof t.closest !== 'function') return
      if (t.closest('a, button, [role="button"], input, textarea, select, label')) {
        dot.classList.add('is-pointer')
        ring.classList.add('is-pointer')
      }
    }

    const onPointerLeave = (e: Event) => {
      const t = e.target as HTMLElement | null
      if (!t || typeof t.closest !== 'function') return
      if (t.closest('a, button, [role="button"], input, textarea, select, label')) {
        dot.classList.remove('is-pointer')
        ring.classList.remove('is-pointer')
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onPointerEnter, true)
    document.addEventListener('mouseout', onPointerLeave, true)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onPointerEnter, true)
      document.removeEventListener('mouseout', onPointerLeave, true)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring hidden md:block" aria-hidden />
      <div ref={dotRef} className="cursor-dot hidden md:block" aria-hidden />
    </>
  )
}
