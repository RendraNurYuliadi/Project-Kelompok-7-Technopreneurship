import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'
import localPhoto1 from './OurTeam/Amels.jpeg'

const data = [
  {name:'Nadia R.', role:'Founder, TechX', text:'Hasilnya cepat, profesional, dan sesuai ekspektasi.', image: localPhoto1},
  {name:'Siti L.', role:'Marketing Head, Cakra', text:'UX premium mereka meningkatkan konversi kami secara signifikan.', image:'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80'},
  {name:'Alya P.', role:'Product Lead, Nova', text:'Pengiriman cepat dan eksekusi rapi di setiap milestone.', image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'},
  {name:'Faris A.', role:'Founder, Orbit', text:'Sistem desain mereka membuat produk kami terasa lebih profesional.', image:'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'},
  {name:'Dana S.', role:'Head of Growth, Lumina', text:'Agile, tajam, dan dapat diandalkan di setiap pengiriman.', image:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80'}
]

export default function Testimonials({ theme }){
  const sliderRef = useRef(null)
  const directionRef = useRef(1)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const step = 1.5
    const interval = window.setInterval(() => {
      if (paused) return

      const maxScroll = slider.scrollWidth - slider.clientWidth
      const next = slider.scrollLeft + step * directionRef.current

      if (next >= maxScroll) {
        directionRef.current = -1
        slider.scrollLeft = maxScroll
      } else if (next <= 0) {
        directionRef.current = 1
        slider.scrollLeft = 0
      } else {
        slider.scrollLeft = next
      }
    }, 16)

    return () => window.clearInterval(interval)
  }, [paused])

  return (
    <section id="testimonials" className="relative overflow-hidden py-20">
      <BackgroundParticles />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Testimoni</h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-xl">Suara klien yang puas dengan hasil desain premium, pengiriman cepat, dan konversi yang meningkat.</p>
          </div>
        </div>

        <div
          ref={sliderRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mt-10 overflow-x-auto no-scrollbar scroll-smooth"
        >
          <div className="flex gap-6 snap-x snap-mandatory pb-3">
            {[...data, ...data].map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                whileHover={{ y: -8 }}
                className="min-w-[320px] snap-start glass surface p-6 rounded-3xl border border-slate-200/20 shadow-glass transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover border border-slate-300/30" />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-700 border border-slate-300/30" />
                  )}
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{item.name}</div>
                    <div className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{item.role}</div>
                  </div>
                </div>
                <p className="mt-5 text-slate-700 dark:text-slate-200">“{item.text}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
