import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  {label:'Proyek selesai', value:120, plus:true},
  {label:'Klien', value:78, plus:false},
  {label:'Desain siap pakai', value:12, plus:false},
  {label:'Tim kreatif', value:4, plus:false}
]

export default function Stats(){
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const intervalMs = 50

    const interval = window.setInterval(() => {
      setCounts((prev) => {
        const next = prev.map((current, index) => {
          const target = stats[index].value
          if (current >= target) return target
          const step = Math.max(1, Math.ceil(target / 15))
          return Math.min(current + step, target)
        })

        if (next.every((value, index) => value >= stats[index].value)) {
          window.clearInterval(interval)
        }

        return next
      })
    }, intervalMs)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="stats" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, index) => (
            <motion.div key={s.label} whileInView={{scale:1}} initial={{scale:0.95,opacity:0}} whileHover={{scale:1.02}} className="glass p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold">{counts[index]}{s.plus ? '+' : ''}</div>
              <div className="text-silver">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
