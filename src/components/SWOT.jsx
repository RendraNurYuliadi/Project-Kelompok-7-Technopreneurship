import React from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'
import SWOTImg from './OurTeam/Service/SWOT.png'

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
        
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Left Column - Image */}
          <motion.div 
            initial={{opacity:0,x:-20}} 
            whileInView={{opacity:1,x:0}} 
            viewport={{once:true}} 
            data-aos="fade-left"
            className="flex items-start justify-center"
          >
            <div className="glass p-4 rounded-3xl border border-white/10 shadow-glass overflow-hidden w-full">
              <img src={SWOTImg} alt="SWOT Analysis" className="w-full h-auto object-contain rounded-2xl" />
            </div>
          </motion.div>
          
          {/* Right Column - SWOT Cards */}
          <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} data-aos="fade-right" className="space-y-4">
            {swotData.map((item, idx) => {
              const colors = ['bg-green-500/30 border-green-500/30 text-green-400', 'bg-red-500/30 border-red-500/30 text-red-400', 'bg-blue-500/30 border-blue-500/30 text-blue-400', 'bg-yellow-500/30 border-yellow-500/30 text-yellow-400']
              const color = colors[idx]
              return (
                <motion.div 
                  key={item.title} 
                  initial={{opacity:0,y:10}} 
                  whileInView={{opacity:1,y:0}} 
                  viewport={{once:true}} 
                  transition={{delay:idx*0.1}} 
                  data-aos="fade-up" 
                  data-aos-delay={idx*80}
                  className="glass p-5 rounded-2xl border border-white/10 shadow-glass overflow-hidden"
                >
                  <div className="flex gap-4">
                    {/* Number Box */}
                    <div className={`flex-shrink-0 w-14 h-14 rounded-lg border ${color} flex items-center justify-center`}>
                      <span className={`text-2xl font-bold ${color.split(' ').pop()}`}>{idx + 1}</span>
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-slate-100">{item.title}</h3>
                      <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                        {item.points.map(point => <li key={point} className="flex items-start gap-2"><span className="mt-0.5 text-white">•</span>{point}</li>)}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}