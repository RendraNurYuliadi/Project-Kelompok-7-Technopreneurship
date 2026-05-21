import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'

const sample = [
  {title:'Rog Store', tag:'ecommerce', img:'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=1600&auto=format&fit=crop', tech:['React','Tailwind'], description:'E-commerce shop experience dengan tampilan premium.'},
  {title:'Fashion Store', tag:'ecommerce', img:'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d1?q=80&w=1600&auto=format&fit=crop', tech:['React','Figma'], description:'Website fashion modern untuk branding digital.'},
  {title:'Travel Website', tag:'travel', img:'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1600&auto=format&fit=crop', tech:['React','Tailwind'], description:'Landing page travel dengan storytelling visual.'},
  {title:'Event Website', tag:'event', img:'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop', tech:['Vite','Tailwind'], description:'Website event dengan informasi, jadwal, dan RSVP.'},
  {title:'Deking TechLab', tag:'saas', img:'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop', tech:['React','Node'], description:'Konsep startup lab teknologi untuk produk digital.'},
  {title:'Sumedang Digital Solution', tag:'agency', img:'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop', tech:['React','Canva'], description:'Solusi digital untuk memperkuat brand lokal Sumedang.'}
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
              <motion.div key={p.title} layout initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} transition={{duration:0.35,delay:idx * 0.05}} className="rounded-[1.75rem] overflow-hidden glass shadow-glass border border-white/10 group">
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
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
