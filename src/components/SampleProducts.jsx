import React from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'

const samples = [
  {title:'Rog Store', category:'E-commerce', url:'https://www.figma.com/design/ClUsiVC866SvyeGmw2av7j/Rog-Store?node-id=23-470&t=hxQsOgHjGwtf8mCO-1'},
  {title:'Fashion Store', category:'E-commerce', url:'https://www.figma.com/design/NbQ0wHyB1KMfft4zUrXsYq/Project-Akhir-Tahungoding?node-id=1-96&t=UN4SDYyHSvkpQSY4-1'},
  {title:'Travel Website', category:'Travel', url:'https://www.figma.com/design/OUxGCwC6CvKzUAMJrzOeTI/Travel-Website-Landing-Page?node-id=0-1&t=8uUA56C3hb0JCw1a-1'},
  {title:'Event Website', category:'Event', url:'https://www.figma.com/design/6vuvT8TLLVT6VPs1N42jmv/Event-Landing-Page?node-id=0-1&t=A2OzQFyJ8hg3b9U8-1'},
  {title:'Deking TechLab', category:'SaaS', url:'https://www.figma.com/design/LPmGLucvCe0r0km0lCn11f/Deking-TechLab?node-id=67-481&t=YDv7z7HVNKUsAGAE-1'},
  {title:'Sumedang Digital Solution', category:'Agency', url:'https://www.figma.com/design/Kf6FMfp20covdVgx8lYDbx/Prototype---Sumedang-Digital-Solution?node-id=14-10&t=aFJvJYev3Vesqo13-1'}
]

export default function SampleProducts({ theme }){
  return (
    <section id="samples" className="relative overflow-hidden py-20">
      <BackgroundParticles theme={theme} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Sample Product Links</h2>
            <p className="mt-2 text-slate-400 max-w-xl">Figma prototype dan konsep project yang menjadi acuan Digisolve Studio untuk desain dan website.</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {samples.map((item, idx) => (
            <motion.a key={item.title} href={item.url} target="_blank" rel="noreferrer" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:idx*0.08}} className="glass p-6 rounded-3xl border border-white/10 shadow-glass hover:-translate-y-2 hover:border-white/20 transition">
              <div className="text-slate-400 text-xs uppercase tracking-[0.3em]">{item.category}</div>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-slate-300 text-sm">Lihat prototype Figma dan desain konsep untuk startup project.</p>
              <div className="mt-5 text-slate-400 text-xs">Open in Figma</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
