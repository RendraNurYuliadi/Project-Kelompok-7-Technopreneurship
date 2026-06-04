import React from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'

import FastResponseImg from './OurTeam/Service/fash response.png'
import ModernDesignImg from './OurTeam/Service/modern clean design.png'
import AffordableImg from './OurTeam/Service/affordable pricing.png'
import ClientFocusedImg from './OurTeam/Service/client focused.png'

export default function WhyChooseUs({ theme }) {
  const items = [
    {
      title: 'Fast Response',
      img: FastResponseImg,
      desc: 'Respon cepat dan komunikasi yang jelas selama proyek berlangsung.'
    },
    {
      title: 'Modern & Clean Design',
      img: ModernDesignImg,
      desc: 'Tampilan profesional dengan fokus pada estetika, fungsionalitas, dan pengalaman pengguna.'
    },
    {
      title: 'Affordable Pricing',
      img: AffordableImg,
      desc: 'Solusi digital dengan biaya yang terjangkau tanpa mengorbankan kualitas hasil.'
    },
    {
      title: 'Client-Focused Approach',
      img: ClientFocusedImg,
      desc: 'Setiap proyek dikerjakan berdasarkan kebutuhan, tujuan, dan preferensi klien.'
    }
  ]

  return (
    <section id="why-choose-us" className="relative overflow-hidden py-20">
      <BackgroundParticles theme={theme} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-glass ${theme === 'dark' ? 'bg-slate-900/40' : 'bg-slate-50/40'}`}
        >
          <div className="text-center mb-8">
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Why Choose Us</h2>
            <p className={`mt-3 max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Keunggulan layanan Digisolve Studio yang mendukung hasil kerja berkualitas, komunikasi yang baik, dan harga yang bersahabat.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((it, idx) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="glass rounded-2xl p-6 flex flex-col items-center text-center border border-white/10"
              >
                <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-xl overflow-hidden">
                  <img src={it.img} alt={it.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">{it.title}</h3>
                <p className="text-sm text-slate-300">{it.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
