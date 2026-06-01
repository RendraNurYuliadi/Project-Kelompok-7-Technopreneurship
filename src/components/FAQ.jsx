import React, { useState } from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'

const faqs = [
  {q:'Layanan apa saja?', a:'Design, Web Development, Data & Scraping, Automation, dan lainnya.'},
  {q:'Apakah bisa custom?', a:'Ya, kami menerima request custom sesuai kebutuhan.'},
  {q:'Apakah menerima UMKM?', a:'Ya, paket khusus untuk UMKM tersedia.'},
  {q:'Apakah support revisi?', a:'Termasuk revisi terbatas sesuai paket.'},
  {q:'Bagaimana sistem order?', a:'Kontak via form atau WhatsApp, kami akan follow up.'}
]

export default function FAQ({ theme }){
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative overflow-hidden py-20">
      <BackgroundParticles theme={theme} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">FAQ</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-xl">Pertanyaan umum seputar layanan, custom order, UMKM, dan proses revisi.</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {faqs.map((f, i)=> (
            <motion.div key={i} data-aos="fade-up" data-aos-delay={i*50} className="glass surface p-6 rounded-3xl border border-slate-200/40 shadow-glass overflow-hidden">
              <button 
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between cursor-pointer font-medium transition hover:opacity-80"
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/5 dark:bg-white/10 text-slate-700 dark:text-slate-200">?</span>
                  {f.q}
                </span>
                <motion.span 
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="material-symbols-outlined text-slate-400 dark:text-slate-300 flex-shrink-0"
                >
                  add
                </motion.span>
              </button>
              
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p className="mt-4 text-slate-600 dark:text-slate-300 ml-11">{f.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
