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
      dot.style.transform = `translate(${mouseX - 11}px, ${mouseY - 11}px)`
    }

    const setHover = (hovering: boolean) => {
      isHovering = hovering
      if (hovering) {
        dot.style.width = '28px'
        dot.style.height = '28px'
        dot.style.transform = `translate(${mouseX - 14}px, ${mouseY - 14}px)`
        ring.style.width = '80px'
        ring.style.height = '80px'
        ring.style.borderColor = 'rgba(0, 214, 143, 0.55)'
      } else {
        dot.style.width = '22px'
        dot.style.height = '22px'
        ring.style.width = '64px'
        ring.style.height = '64px'
        ring.style.borderColor = 'rgba(255, 255, 255, 0.22)'
      }
    }

    const onEnter = () => setHover(true)
    const onLeave = () => setHover(false)

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      const size = isHovering ? 40 : 32
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
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-[22px] w-[22px] rounded-full bg-white mix-blend-difference will-change-transform md:block"
        style={{ transition: 'width 0.2s, height 0.2s' }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-16 w-16 rounded-full border-2 border-white/[0.22] mix-blend-difference will-change-transform md:block"
        style={{ transition: 'width 0.3s, height 0.3s, border-color 0.3s' }}
      />
    </>
  )
}
