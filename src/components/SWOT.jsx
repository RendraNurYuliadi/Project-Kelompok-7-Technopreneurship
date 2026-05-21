import React from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'

const swotData = [
  {title:'Strengths', points:['Layanan lengkap desain, web, dokumen, data','Custom order sesuai kebutuhan','Fokus UMKM dan mahasiswa']},
  {title:'Weaknesses', points:['Brand masih baru','Skala tim terbatas','Bergantung pada skill individu']},
  {title:'Opportunities', points:['Pertumbuhan kebutuhan jasa digital','UMKM semakin go digital','Permintaan website & desain meningkat']},
  {title:'Threats', points:['Kompetitor jasa digital besar','Perubahan tren tools digital cepat','Otomatisasi AI berkembang']}
]

export default function SWOT({ theme }){
  return (
    <section id="swot" className="relative overflow-hidden py-20">
      <BackgroundParticles theme={theme} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">SWOT Analysis</h2>
            <p className="mt-2 text-slate-400 max-w-xl">Analisis SWOT ini menggambarkan kekuatan, kelemahan, peluang, dan ancaman Digisolve Studio berdasarkan model bisnis dan kondisi pasar.</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {swotData.map((item, idx) => (
            <motion.div key={item.title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*0.08}} className="glass p-6 rounded-3xl border border-white/10 shadow-glass">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {item.points.map(point => <li key={point} className="flex items-start gap-2"><span className="mt-1 text-white">•</span>{point}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// SWOT analysis ini memberikan gambaran menyeluruh tentang posisi Digisolve Studio dalam pasar jasa digital, membantu mengidentifikasi area untuk pengembangan dan strategi mitigasi risiko.