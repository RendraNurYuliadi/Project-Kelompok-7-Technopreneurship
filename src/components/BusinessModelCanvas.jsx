import React from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'

const canvasItems = [
  {label:'Customer Segments', icon:'groups', value:['Mahasiswa','UMKM','Pelaku bisnis kecil','Individu digital']},
  {label:'Value Propositions', icon:'workspace_premium', value:['Desain digital lengkap','Website sederhana','Data scraping & export','Layanan custom order','Cepat & fleksibel']},
  {label:'Channels', icon:'public', value:['Media sosial','Website / landing page','Marketplace jasa','Platform online']},
  {label:'Customer Relationships', icon:'support_agent', value:['Komunikasi langsung','Revisi sesuai kebutuhan','Custom order process']},
  {label:'Revenue Streams', icon:'attach_money', value:['Jasa per project','Paket layanan digital','Potensi template digital']},
  {label:'Key Resources', icon:'engineering', value:['Skill desain & web','Tools digital','Sistem kerja digital']},
  {label:'Key Activities', icon:'task_alt', value:['Pembuatan desain & dokumen','Pembuatan website sederhana','Data scraping','Marketing digital']},
  {label:'Key Partnerships', icon:'link', value:['Klien UMKM','Komunitas mahasiswa','Platform digital']},
  {label:'Cost Structure', icon:'account_balance_wallet', value:['Tools & software','Internet & operasional','Marketing','Pengembangan skill']}
]

export default function BusinessModelCanvas({ theme }){
  return (
    <section id="business-model" className="relative overflow-hidden py-20 bg-black">
      <BackgroundParticles theme={theme} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-bold">Business Model Canvas</h2>
          <p className="text-slate-400 max-w-2xl">Model bisnis Digisolve Studio merangkum layanan desain, web, dan data dengan fokus pada UMKM, mahasiswa, dan pelaku bisnis kecil.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {canvasItems.map((item, idx) => (
            <motion.div key={item.label} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*0.08}} className="glass p-6 rounded-3xl border border-white/10 shadow-glass dark:border-slate-700/40">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                <h3 className="font-semibold text-slate-900 dark:text-white">{item.label}</h3>
              </div>
              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                {item.value.map(text => <li key={text} className="flex items-start gap-2"><span className="mt-1 text-slate-900 dark:text-white">•</span>{text}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
