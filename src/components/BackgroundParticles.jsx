import { useMemo } from 'react'

const particleLayers = [
  {
    id: 'faint',
    count: 18,
    minSize: 1.2,
    maxSize: 2.4,
    color: 'rgba(255,255,255,0.18)',
    lightColor: 'rgba(15,23,42,0.22)',
    durationMin: 18,
    durationMax: 30,
    opacity: 0.18,
  },
  {
    id: 'medium',
    count: 10,
    minSize: 2.6,
    maxSize: 4.2,
    color: 'rgba(255,255,255,0.32)',
    lightColor: 'rgba(15,23,42,0.34)',
    durationMin: 16,
    durationMax: 24,
    opacity: 0.3,
  },
  {
    id: 'solid',
    count: 6,
    minSize: 3.8,
    maxSize: 5.5,
    color: 'rgba(255,255,255,0.9)',
    lightColor: 'rgba(15,23,42,0.72)',
    durationMin: 12,
    durationMax: 20,
    opacity: 0.7,
  },
]

const randomPercent = () => `${Math.round(6 + Math.random() * 88)}%`
const randomOffset = (max) => `${Math.round((Math.random() - 0.5) * max)}px`
const randomScale = () => (0.85 + Math.random() * 0.35).toFixed(2)
const randomDuration = (min, max) => `${(min + Math.random() * (max - min)).toFixed(2)}s`
const randomDelay = () => `${(Math.random() * 3).toFixed(2)}s`

const buildParticles = (layer, theme) =>
  Array.from({ length: layer.count }, () => ({
    top: randomPercent(),
    left: randomPercent(),
    size: (layer.minSize + Math.random() * (layer.maxSize - layer.minSize)).toFixed(2),
    duration: randomDuration(layer.durationMin, layer.durationMax),
    delay: randomDelay(),
    color: theme === 'dark' ? layer.color : layer.lightColor ?? layer.color,
    opacity: layer.opacity,
    x1: randomOffset(48),
    y1: randomOffset(42),
    s1: randomScale(),
    x2: randomOffset(52),
    y2: randomOffset(54),
    s2: randomScale(),
    x3: randomOffset(36),
    y3: randomOffset(48),
    s3: randomScale(),
    x4: randomOffset(44),
    y4: randomOffset(36),
    s4: randomScale(),
    x5: randomOffset(50),
    y5: randomOffset(50),
    s5: randomScale(),
  }))

const getTheme = () =>
  typeof window !== 'undefined' && document.documentElement?.classList.contains('dark')
    ? 'dark'
    : 'light'

export default function BackgroundParticles({ theme }) {
  const currentTheme = theme || getTheme()
  const glowShadow = currentTheme === 'dark'
    ? '0 0 20px rgba(255,255,255,0.18), 0 0 10px rgba(255,255,255,0.12)'
    : '0 0 18px rgba(15,23,42,0.16), 0 0 8px rgba(15,23,42,0.1)'

  const layers = useMemo(
    () => particleLayers.map((layer) => ({ ...layer, particles: buildParticles(layer, currentTheme) })),
    [currentTheme],
  )

  return (
    <div className="page-particles pointer-events-none absolute inset-0 z-0">
      {layers.map((layer) => (
        <div key={layer.id} className="page-particles__group absolute inset-0">
          {layer.particles.map((particle, index) => (
            <span
              key={`${layer.id}-${index}`}
              className="page-particle"
              style={{
                top: particle.top,
                left: particle.left,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                opacity: particle.opacity,
                animationDuration: particle.duration,
                animationDelay: particle.delay,
                boxShadow: glowShadow,
                '--x1': particle.x1,
                '--y1': particle.y1,
                '--s1': particle.s1,
                '--x2': particle.x2,
                '--y2': particle.y2,
                '--s2': particle.s2,
                '--x3': particle.x3,
                '--y3': particle.y3,
                '--s3': particle.s3,
                '--x4': particle.x4,
                '--y4': particle.y4,
                '--s4': particle.s4,
                '--x5': particle.x5,
                '--y5': particle.y5,
                '--s5': particle.s5,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
