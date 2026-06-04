import React from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'
import WorkflowImg from './OurTeam/Service/WorkFlow.png'

const steps = [
  {title:'Order & Briefing', detail:'Klien mengirim permintaan, brief, dan referensi layanan digital.'},
  {title:'Design & Development', detail:'Pengerjaan desain, website, dan data scraping dengan pendekatan efisien.'},
  {title:'Review & Revisi', detail:'Feedback pelanggan ditindaklanjuti dengan revisi hingga sesuai.'},
  {title:'Delivery & Export', detail:'Final file diserahkan, termasuk export CSV/Excel/JSON bila diperlukan.'}
]

export default function Process({ theme }){
  return (
    <section id="process" className="relative overflow-hidden py-12 bg-black">
      <BackgroundParticles theme={theme} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">How We Work</h2>
            <p className="mt-2 text-slate-400 max-w-xl">Proses Digisolve Studio dirancang agar setiap project bergerak cepat, transparan, dan mudah diikuti oleh klien.</p>
          </div>
        </div>

        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} data-aos="fade-up" className="mt-6 mb-6">
          <div className="glass p-4 rounded-3xl border border-white/10 shadow-glass overflow-hidden">
            <img src={WorkflowImg} alt="Workflow Process" className="w-full h-auto object-contain rounded-2xl" />
          </div>
        </motion.div>

        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div key={step.title} data-aos="fade-up" data-aos-delay={idx*100} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*0.08}} className="glass p-6 rounded-3xl border border-white/10 shadow-glass">
              <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Step {idx+1}</div>
              <h3 className="mt-4 font-semibold text-xl">{step.title}</h3>
              <p className="mt-3 text-slate-300 text-sm">{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
