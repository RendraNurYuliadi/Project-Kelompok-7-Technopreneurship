import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'
import HeroImg from './OurTeam/Service/Hero.png'

export default function Hero({ theme }){
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-24">
      <BackgroundParticles theme={theme} />
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -left-24 top-1/4 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-10 top-20 w-60 h-60 rounded-full bg-white/5 blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <motion.span initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} data-aos="fade-down" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-slate-600 dark:text-silver/80">Startup Studio • Technopreneurship • UMKM Support</motion.span>
          <motion.h1 initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7}} data-aos="fade-right" className="text-4xl md:text-6xl font-extrabold leading-tight">Digisolve Studio</motion.h1>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.15}} data-aos="fade-up" className="max-w-xl text-slate-700 dark:text-slate-300 text-lg">
            Solusi digital all-in-one untuk desain, website, dokumen, dan data scraping. Kami mendukung UMKM, mahasiswa, dan bisnis kecil dengan layanan profesional dan proses otomatis berbasis teknologi.
          </motion.p>

          <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.3}} data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap gap-4">
            <Link to="/order" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-slate-100 transition">Order Sekarang</Link>
            <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-silver hover:border-white">Lihat Portfolio</a>
          </motion.div>

          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.45}} data-aos="zoom-in" className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="glass rounded-3xl p-4 text-center">
              <div className="text-3xl font-bold">3</div>
              <div className="text-slate-400 text-sm">Layanan Utama</div>
            </div>
            <div className="glass rounded-3xl p-4 text-center">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-slate-400 text-sm">Portfolio</div>
            </div>
            <div className="glass rounded-3xl p-4 text-center">
              <div className="text-3xl font-bold">Agile</div>
              <div className="text-slate-400 text-sm">Process</div>
            </div>
            <div className="glass rounded-3xl p-4 text-center">
              <div className="text-3xl font-bold">4</div>
              <div className="text-slate-400 text-sm">Tim Kreatif</div>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.7}} className="w-full h-80 md:h-[28rem] rounded-[2rem] overflow-hidden glass shadow-glass border border-white/10">
            <img src={HeroImg} alt="studio" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div initial={{x:80,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{delay:0.2}} className="md:absolute md:-bottom-8 md:left-8 relative mt-6 md:mt-0 glass rounded-3xl p-4 md:p-5 shadow-glass border border-white/10 backdrop-blur max-w-sm md:max-w-xs">
            <div className="text-slate-300 text-xs uppercase tracking-[0.2em]">Startup Ready</div>
            <div className="mt-2 font-semibold text-sm md:text-base">Design, Web & Data Solutions untuk bisnis yang berkembang cepat.</div>
          </motion.div>

          <div className="absolute -right-10 top-12 h-28 w-28 rounded-full border border-white/10 opacity-70" />
          <div className="absolute right-0 bottom-24 h-20 w-20 rounded-full bg-white/5 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
