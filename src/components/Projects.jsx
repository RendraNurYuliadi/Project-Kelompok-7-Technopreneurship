import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'
import RogStoreImg from './OurTeam/Service/RogStore.png'
import FashionStoreImg from './OurTeam/Service/FashionStore.png'
import TravelImg from './OurTeam/Service/Travel.png'
import HydraImg from './OurTeam/Service/Hydra Landing Page.png'
import DekingImg from './OurTeam/Service/Deking.png'
import SDIImg from './OurTeam/Service/SDI.png'

const sample = [
  {title:'Rog Store', tag:'ecommerce', img:RogStoreImg, tech:['Figma'], description:'E-commerce shop experience dengan tampilan premium.', figmaUrl:'https://www.figma.com/design/ClUsiVC866SvyeGmw2av7j/Rog-Store?node-id=23-470&t=hxQsOgHjGwtf8mCO-1'},
  {title:'Fashion Store', tag:'ecommerce', img:FashionStoreImg, tech:['Figma'], description:'Website fashion modern untuk branding digital.', figmaUrl:'https://www.figma.com/design/NbQ0wHyB1KMfft4zUrXsYq/Project-Akhir-Tahungoding?node-id=1-96&t=UN4SDYyHSvkpQSY4-1'},
  {title:'Travel Website', tag:'travel', img:TravelImg, tech:['Figma'], description:'Landing page travel dengan storytelling visual.', figmaUrl:'https://www.figma.com/design/OUxGCwC6CvKzUAMJrzOeTI/Travel-Website-Landing-Page?node-id=0-1&t=8uUA56C3hb0JCw1a-1'},
  {title:'Event Website', tag:'event', img:HydraImg, tech:['Figma'], description:'Website event dengan informasi, jadwal, dan RSVP.', figmaUrl:'https://www.figma.com/design/6vuvT8TLLVT6VPs1N42jmv/Event-Landing-Page?node-id=0-1&t=A2OzQFyJ8hg3b9U8-1'},
  {title:'Deking TechLab', tag:'saas', img:DekingImg, tech:['Figma'], description:'Konsep startup lab teknologi untuk produk digital.', figmaUrl:'https://www.figma.com/design/LPmGLucvCe0r0km0lCn11f/Deking-TechLab?node-id=67-481&t=YDv7z7HVNKUsAGAE-1'},
  {title:'Sumedang Digital Solution', tag:'agency', img:SDIImg, tech:['Figma'], description:'Solusi digital untuk memperkuat brand lokal Sumedang.', figmaUrl:'https://www.figma.com/design/Kf6FMfp20covdVgx8lYDbx/Prototype---Sumedang-Digital-Solution?node-id=14-10&t=aFJvJYev3Vesqo13-1'}
]

const tags = ['all','ecommerce','travel','event','saas','agency']

export default function Projects(){
  const [filter,setFilter] = useState('all')
  const list = sample.filter(p=> filter==='all' || p.tag===filter)

  return (
    <section id="projects" className="relative overflow-hidden py-20">
      <BackgroundParticles />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="mt-2 text-slate-400 max-w-xl">Showcase sample project Digisolve Studio berdasarkan konsep Rog Store, Fashion Store, Travel Website, Event Website, Deking TechLab, dan Sumedang Digital Solution.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {tags.map(t=> (
              <button key={t} onClick={()=>setFilter(t)} className={`px-4 py-2 rounded-full text-sm transition ${filter===t? 'bg-white text-black':'glass text-slate-300'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {list.map((p, idx)=> (
              <motion.div key={p.title} layout initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} transition={{duration:0.35,delay:idx * 0.05}} data-aos="fade-up" className="rounded-[1.75rem] overflow-hidden glass shadow-glass border border-white/10 group">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-400">{p.tag}</div>
                  <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-slate-300 text-sm">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[0.75rem] text-slate-400">
                    {p.tech.map(tool => <span key={tool} className="rounded-full border border-white/10 px-3 py-1">{tool}</span>)}
                  </div>
                  <a href={p.figmaUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-slate-200 transition">
                    View on Figma <span className="material-symbols-outlined text-base">arrow_outward</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
