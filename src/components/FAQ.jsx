import React from 'react'
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
          {faqs.map((f,i)=> (
            <motion.details key={i} whileTap={{scale:0.99}} className="glass surface p-4 rounded-3xl border border-slate-200/40 shadow-glass">
              <summary className="cursor-pointer font-medium flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/5 dark:bg-white/10 text-slate-700 dark:text-slate-200">?</span>
                {f.q}
              </summary>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}
