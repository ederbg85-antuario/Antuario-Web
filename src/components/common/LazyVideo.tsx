'use client'

import { useEffect, useRef, useState } from 'react'
import { Play, Volume2, VolumeX } from 'lucide-react'

/**
 * Reproductor de video optimizado para velocidad de sitio.
 * - preload="none": no descarga ni un byte hasta que el reel está cerca del viewport.
 * - Carga la fuente sólo cuando IntersectionObserver lo detecta próximo.
 * - Autoplay muteado al entrar en pantalla, pausa al salir (ahorra CPU/datos).
 * - Respeta prefers-reduced-motion: no autoplay, queda como póster con botón.
 * - Tap para activar/silenciar audio.
 */
export function LazyVideo({
  src,
  poster,
  label,
  className = '',
}: {
  src: string
  poster: string
  label?: string
  className?: string
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)

  // Carga diferida: monta el <source> sólo cuando el reel se acerca al viewport.
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          io.disconnect()
        }
      },
      { rootMargin: '400px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Play/pause automático según visibilidad (sólo si ya cargó).
  useEffect(() => {
    if (!shouldLoad) return
    const el = wrapRef.current
    const video = videoRef.current
    if (!el || !video) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setPlaying(true)).catch(() => {})
        } else {
          video.pause()
          setPlaying(false)
        }
      },
      { threshold: 0.45 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [shouldLoad])

  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return
    if (!playing) {
      video.play().then(() => setPlaying(true)).catch(() => {})
    }
    video.muted = !video.muted
    setMuted(video.muted)
  }

  return (
    <div
      ref={wrapRef}
      className={`group relative aspect-[9/16] overflow-hidden rounded-[22px] bg-onyx ${className}`}
      style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08), 0 18px 40px rgba(0,0,0,0.42)' }}
    >
      {shouldLoad ? (
        <video
          ref={videoRef}
          poster={poster}
          muted={muted}
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt={label ?? 'Reel de Acriland producido por Antuario'}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Gradiente inferior + etiqueta */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-3.5">
        {label && (
          <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-papel/80">
            {label}
          </span>
        )}
      </div>

      {/* Botón de sonido / play */}
      <button
        type="button"
        onClick={toggleSound}
        aria-label={muted ? 'Activar sonido' : 'Silenciar'}
        className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-papel backdrop-blur-md transition-colors hover:bg-black/65"
      >
        {!playing ? (
          <Play className="h-3.5 w-3.5 translate-x-[1px]" />
        ) : muted ? (
          <VolumeX className="h-4 w-4" />
        ) : (
          <Volume2 className="h-4 w-4" />
        )}
      </button>
    </div>
  )
}
