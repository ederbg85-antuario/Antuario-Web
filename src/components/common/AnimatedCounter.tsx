'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  target: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

export default function AnimatedCounter({
  target,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(eased * target)

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [target, duration, hasAnimated])

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.round(count)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}
