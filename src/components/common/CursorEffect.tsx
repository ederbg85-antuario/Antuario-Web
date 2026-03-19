'use client'

import { useEffect, useRef } from 'react'

export default function CursorEffect() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    if (window.matchMedia('(pointer: coarse)').matches) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let isHovering = false

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX - 7}px, ${mouseY - 7}px)`
    }

    const setHover = (hovering: boolean) => {
      isHovering = hovering
      if (hovering) {
        dot.style.width = '18px'
        dot.style.height = '18px'
        dot.style.transform = `translate(${mouseX - 9}px, ${mouseY - 9}px)`
        ring.style.width = '60px'
        ring.style.height = '60px'
        ring.style.borderColor = 'rgba(0, 214, 143, 0.5)'
      } else {
        dot.style.width = '14px'
        dot.style.height = '14px'
        ring.style.width = '48px'
        ring.style.height = '48px'
        ring.style.borderColor = 'rgba(255, 255, 255, 0.18)'
      }
    }

    const onEnter = () => setHover(true)
    const onLeave = () => setHover(false)

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      const size = isHovering ? 30 : 24
      ring.style.transform = `translate(${ringX - size}px, ${ringY - size}px)`
      requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animateRing()

    const addListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    addListeners()

    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-[14px] w-[14px] rounded-full bg-white mix-blend-difference will-change-transform md:block"
        style={{ transition: 'width 0.25s, height 0.25s' }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-12 w-12 rounded-full border-2 border-white/[0.18] mix-blend-difference will-change-transform md:block"
        style={{ transition: 'width 0.35s, height 0.35s, border-color 0.35s' }}
      />
    </>
  )
}
