import { useEffect, useMemo } from 'react'

const particleCount = 32

export default function SplashScreen({ onFinish }) {
  const particleConfigs = useMemo(
    () =>
      Array.from({ length: particleCount }, () => {
        const size = 3 + Math.random() * 3
        return {
          top: 6 + Math.random() * 88,
          left: 6 + Math.random() * 88,
          delay: Math.random() * 1.2,
          duration: 2.2 + Math.random() * 1.4,
          driftX: (Math.random() - 0.5) * 40,
          driftY: (Math.random() - 0.5) * 40,
          scale: 1 + Math.random() * 0.35,
          opacity: 0.65 + Math.random() * 0.25,
          size,
        }
      }),
    [],
  )

  useEffect(() => {
    const timer = window.setTimeout(onFinish, 7000)
    return () => window.clearTimeout(timer)
  }, [onFinish])

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black text-white">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_18%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.05),_transparent_32%)]" />

        <div className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center gap-8 text-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400 animate-fade-in-down">
              Company Profile
            </p>
            <h1 className="text-5xl font-semibold uppercase tracking-[0.18em] text-white sm:text-6xl animate-fade-in-up">
              Digisolve Studio
            </h1>
            <p className="mx-auto max-w-xl text-sm leading-7 text-slate-300/90 animate-fade-in-up delay-200">
              Solusi digital all-in-one untuk desain, website, dokumen, dan data scraping. Kami mendukung UMKM, mahasiswa, dan bisnis kecil dengan layanan profesional dan proses otomatis berbasis teknologi.
            </p>
          </div>

          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/15">
            <div className="absolute inset-0 rounded-full border border-white/25 animate-ping-slow" />
            <div className="absolute inset-6 rounded-full border border-white/60" />
            <span className="relative z-10 text-xs uppercase tracking-[0.35em] text-white/80">
              loading
            </span>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0">
          {particleConfigs.map((config, index) => (
            <span
              key={index}
              className="splash-particle"
              style={{
                top: `${config.top}%`,
                left: `${config.left}%`,
                animationDelay: `${config.delay}s`,
                animationDuration: `${config.duration}s`,
                width: `${config.size}px`,
                height: `${config.size}px`,
                opacity: config.opacity,
                '--drift-x': `${config.driftX}px`,
                '--drift-y': `${config.driftY}px`,
                '--drift-scale': config.scale,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
