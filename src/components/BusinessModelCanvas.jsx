import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'
import CanvasImg from './OurTeam/Service/Canvas.png'

const canvasItems = [
  {label:'Customer Segments', icon:'groups', value:['Mahasiswa','UMKM','Pelaku bisnis kecil','Individu digital']},
  {label:'Key Resources', icon:'engineering', value:['Skill desain & web','Tools: Figma, Python','Sistem kerja digital']},
  {label:'Value Propositions', icon:'workspace_premium', value:['Desain digital lengkap','Website sederhana','Data scraping & export','Layanan custom order','Cepat & fleksibel']},
  {label:'Customer Relationships', icon:'support_agent', value:['Komunikasi langsung','Revisi sesuai kebutuhan','Custom order process']},
  {label:'Revenue Streams', icon:'attach_money', value:['Jasa per project','Paket layanan digital','Potensi template digital']}
]

export default function BusinessModelCanvas({ theme }){
  const [selectedItem, setSelectedItem] = useState(null)
  return (
    <section id="business-model" className="relative overflow-hidden py-20 bg-black">
      <BackgroundParticles theme={theme} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-bold">Business Model Canvas</h2>
          <p className="text-slate-400 max-w-2xl">Model bisnis Digisolve Studio merangkum layanan desain, web, dan data dengan fokus pada UMKM, mahasiswa, dan pelaku bisnis kecil.</p>
        </div>

        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} data-aos="fade-up" className="mt-8 mb-12">
          <div className="glass p-4 rounded-3xl border border-white/10 shadow-glass overflow-hidden">
            <img src={CanvasImg} alt="Business Model Canvas" className="w-full h-auto object-contain rounded-2xl" />
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* Top Row - Customer Segments, Key Resources, Value Propositions */}
          {canvasItems.slice(0, 3).map((item, idx) => (
            <motion.button 
              key={item.label} 
              onClick={() => setSelectedItem(item)}
              initial={{opacity:0,y:20}} 
              whileInView={{opacity:1,y:0}} 
              whileHover={{scale:1.05}}
              viewport={{once:true}} 
              transition={{delay:idx*0.1}} 
              data-aos="fade-up" 
              data-aos-delay={idx*80} 
              className="glass p-6 rounded-3xl border border-white/10 shadow-glass dark:border-slate-700/40 cursor-pointer transition text-left hover:border-white/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                <h3 className="font-semibold text-slate-900 dark:text-white">{item.label}</h3>
              </div>
              <motion.div 
                initial={{opacity:0, y:-5}}
                whileInView={{opacity:1, y:0}}
                transition={{delay:0.2}}
                className="flex items-center gap-2 text-xs text-slate-400 group-hover:text-white transition"
              >
                <span>Klik untuk lihat detail</span>
                <span className="material-symbols-outlined text-sm">info</span>
              </motion.div>
            </motion.button>
          ))}
        </div>

        {/* Bottom Row - Customer Relationships & Revenue Streams */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {canvasItems.slice(3, 5).map((item, idx) => (
            <motion.button 
              key={item.label} 
              onClick={() => setSelectedItem(item)}
              initial={{opacity:0,y:20}} 
              whileInView={{opacity:1,y:0}} 
              whileHover={{scale:1.05}}
              viewport={{once:true}} 
              transition={{delay:(idx+3)*0.1}} 
              data-aos="fade-up" 
              data-aos-delay={(idx+3)*80} 
              className="glass p-6 rounded-3xl border border-white/10 shadow-glass dark:border-slate-700/40 cursor-pointer transition text-left hover:border-white/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                <h3 className="font-semibold text-slate-900 dark:text-white">{item.label}</h3>
              </div>
              <motion.div 
                initial={{opacity:0, y:-5}}
                whileInView={{opacity:1, y:0}}
                transition={{delay:0.2}}
                className="flex items-center gap-2 text-xs text-slate-400 group-hover:text-white transition"
              >
                <span>Klik untuk lihat detail</span>
                <span className="material-symbols-outlined text-sm">info</span>
              </motion.div>
            </motion.button>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <>
              <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                onClick={() => setSelectedItem(null)}
                className="fixed inset-0 bg-black/50 z-[99998] pointer-events-auto"
              />
              <motion.div 
                initial={{opacity:0,scale:0.9,y:20}}
                animate={{opacity:1,scale:1,y:0}}
                exit={{opacity:0,scale:0.9,y:20}}
                transition={{duration:0.3}}
                className="fixed inset-0 z-[99999] flex items-center justify-center px-4"
              >
                <div className="relative glass border border-white/10 rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                  {/* Close Button */}
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition"
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>

                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-3xl">{selectedItem.icon}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-center">{selectedItem.label}</h3>

                  {/* Content */}
                  <div className="mt-6">
                    <ul className="space-y-3">
                      {selectedItem.value.map(text => (
                        <li key={text} className="flex items-start gap-3">
                          <span className="text-slate-400 mt-1">•</span>
                          <span className="text-slate-300">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
