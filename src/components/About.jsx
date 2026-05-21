import React from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'

export default function About({ theme }){
  return (
    <section id="about" className="relative overflow-hidden py-20">
      <BackgroundParticles theme={theme} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl font-bold">About Digisolve Studio</motion.h2>
        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}} className="mt-4 text-slate-700 dark:text-slate-300 max-w-3xl text-lg">
          Digisolve Studio adalah startup jasa digital yang menggabungkan technopreneurship, inovasi teknologi, dan layanan custom order untuk mendukung UMKM, mahasiswa, dan bisnis kecil.
        </motion.p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="glass p-8 rounded-3xl shadow-glass border border-white/10 dark:border-slate-700/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-3xl">assignment</span>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Overview</h3>
            </div>
            <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300 text-sm">
              <li>✓ Technopreneurship sebagai landasan untuk produk jasa digital.</li>
              <li>✓ Solusi kreatif untuk desain, dokumen, website, dan data scraping.</li>
              <li>✓ Berbasis digital dengan proses cepat, fleksibel, dan efisien.</li>
            </ul>
          </motion.div>

          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="glass p-8 rounded-3xl shadow-glass border border-white/10 dark:border-slate-700/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-3xl">public</span>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Local Impact</h3>
            </div>
            <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300 text-sm">
              <li>✓ Mendukung UMKM dan bisnis lokal melalui digitalisasi usaha.</li>
              <li>✓ Mengoptimalkan teknologi untuk pemasaran produk lokal.</li>
              <li>✓ Solusi digital disesuaikan dengan kebutuhan dan budaya lokal.</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="glass p-8 rounded-3xl shadow-glass border border-white/10 dark:border-slate-700/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-3xl">visibility</span>
              <h4 className="font-semibold text-slate-900 dark:text-white">Vision</h4>
            </div>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm">
              Menjadi penyedia layanan jasa digital profesional, cepat, dan terpercaya dalam membantu kebutuhan desain, dokumen, website, serta pengolahan data.
            </p>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}} className="glass p-8 rounded-3xl shadow-glass border border-white/10 dark:border-slate-700/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-3xl">flag</span>
              <h4 className="font-semibold text-slate-900 dark:text-white">Mission</h4>
            </div>
            <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300 text-sm">
              <li>✓ Menyediakan layanan digital berkualitas sesuai kebutuhan klien.</li>
              <li>✓ Memberikan solusi kreatif dan praktis di desain, teknologi, dan data.</li>
              <li>✓ Mengutamakan ketepatan waktu, kerapihan, dan kepuasan pelanggan.</li>
            </ul>
          </motion.div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}} className="glass p-8 rounded-3xl shadow-glass border border-white/10 dark:border-slate-700/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-3xl">star</span>
              <h4 className="font-semibold text-slate-900 dark:text-white">Values</h4>
            </div>
            <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300 text-sm">
              <li>✓ Digital innovation</li>
              <li>✓ Customer-centric service</li>
              <li>✓ Flexible custom order</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
