import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'
import RogStoreImg from './OurTeam/Service/RogStore.png'
import FashionStoreImg from './OurTeam/Service/FashionStore.png'
import TravelImg from './OurTeam/Service/Travel.png'
import HydraImg from './OurTeam/Service/Hydra Landing Page.png'
import DekingImg from './OurTeam/Service/Deking.png'
import SDIImg from './OurTeam/Service/SDI.png'
import ChitaTravelImg from './OurTeam/Service/NusaTravel.png'

const projectScrollbarStyles = `
  .project-modal::-webkit-scrollbar {
    width: 8px;
  }
  .project-modal::-webkit-scrollbar-track {
    background: transparent;
  }
  .project-modal::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }
  .project-modal::-webkit-scrollbar-thumb:hover {
    background: #0f172a;
    background-clip: padding-box;
  }
`

const sample = [
  {title:'Rog Store', tag:'ecommerce', img:RogStoreImg, services:['Web Development'], description:'E-commerce shop experience dengan tampilan premium.', figmaUrl:'https://www.figma.com/design/ClUsiVC866SvyeGmw2av7j/Rog-Store?node-id=23-470&t=hxQsOgHjGwtf8mCO-1'},
  {title:'Tahu fashion', tag:'ecommerce', img:FashionStoreImg, services:['Design Services','Web Development'], description:'Website fashion modern untuk branding digital.', figmaUrl:'https://www.figma.com/design/NbQ0wHyB1KMfft4zUrXsYq/Project-Akhir-Tahungoding?node-id=1-96&t=UN4SDYyHSvkpQSY4-1', websiteUrl:'https://tahu-fashion.vercel.app/'},
  {title:'Chita Tour and Travel', tag:'travel', img:ChitaTravelImg, services:['Web Development'], description:'Platform tour dan travel dengan pengalaman pengguna yang intuitif.', figmaUrl:'https://www.figma.com/', websiteUrl:'https://chita-travel.vercel.app/'},
  {title:'Travel Website', tag:'travel', img:TravelImg, services:['Design Services','Web Development'], description:'Landing page travel dengan storytelling visual.', figmaUrl:'https://www.figma.com/design/OUxGCwC6CvKzUAMJrzOeTI/Travel-Website-Landing-Page?node-id=0-1&t=8uUA56C3hb0JCw1a-1'},
  {title:'Event Website', tag:'event', img:HydraImg, services:['Web Development'], description:'Website event dengan informasi, jadwal, dan RSVP.', figmaUrl:'https://www.figma.com/design/6vuvT8TLLVT6VPs1N42jmv/Event-Landing-Page?node-id=0-1&t=A2OzQFyJ8hg3b9U8-1'},
  {title:'Deking', tag:'saas', img:DekingImg, services:['Web Development'], description:'Konsep startup lab teknologi untuk produk digital.', figmaUrl:'https://www.figma.com/design/LPmGLucvCe0r0km0lCn11f/Deking-TechLab?node-id=67-481&t=YDv7z7HVNKUsAGAE-1', websiteUrl:'https://deking-tech-lab.vercel.app/'},
  {title:'Sumedang Digital Solution', tag:'agency', img:SDIImg, services:['Web Development','Design Services'], description:'Solusi digital untuk memperkuat brand lokal Sumedang.', figmaUrl:'https://www.figma.com/design/Kf6FMfp20covdVgx8lYDbx/Prototype---Sumedang-Digital-Solution?node-id=14-10&t=aFJvJYev3Vesqo13-1'}
]

const tags = ['all','ecommerce','travel','event','saas','agency']

export default function Projects(){
  const [filter,setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const list = sample.filter(p=> filter==='all' || p.tag===filter)

  return (
    <>
      <style>{projectScrollbarStyles}</style>
      <section id="projects" className="relative overflow-hidden py-12">
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

        <motion.div layout className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {list.map((p, idx)=> (
              <motion.div key={p.title} layout initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} transition={{duration:0.35,delay:idx * 0.05}} data-aos="fade-up" className="rounded-[1.75rem] overflow-hidden glass shadow-glass border border-white/10 group cursor-pointer" onClick={() => setSelectedProject(p)}>
                <div className="relative h-56 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-slate-400">{p.tag}</div>
                  <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-slate-300 text-sm">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[0.75rem]">
                    {p.figmaUrl && <span className="rounded-full border border-white/10 px-3 py-1 text-slate-300">Figma</span>}
                    {p.websiteUrl && <span className="rounded-full border border-white/10 px-3 py-1 text-slate-300">Web</span>}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={p.figmaUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-slate-200 transition">
                      View on Figma <span className="material-symbols-outlined text-base">arrow_outward</span>
                    </a>
                    {p.websiteUrl && (
                      <a href={p.websiteUrl} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-slate-200 transition">
                        Open Web <span className="material-symbols-outlined text-base">arrow_outward</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center px-4"
              >
                <div className="project-modal glass rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[70vh] overflow-y-auto border border-white/10 shadow-2xl">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-slate-400">{selectedProject.tag}</div>
                      <h2 className="mt-3 text-3xl font-bold text-white">{selectedProject.title}</h2>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-slate-300 hover:text-white transition"
                    >
                      <span className="material-symbols-outlined text-2xl">close</span>
                    </button>
                  </div>

                  <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-72 sm:h-96 object-cover rounded-2xl mb-6" />

                  <p className="text-slate-300 text-base mb-6">{selectedProject.description}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-200 mb-3">Services</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map(service => (
                        <span key={service} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-200 mb-3">Links</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.figmaUrl && (
                        <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                          Figma
                        </span>
                      )}
                      {selectedProject.websiteUrl && (
                        <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                          Web
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a href={selectedProject.figmaUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-sm font-semibold text-white hover:bg-slate-900/80 transition">
                      <span className="material-symbols-outlined text-base">design_services</span>
                      View on Figma
                    </a>
                    {selectedProject.websiteUrl && (
                      <a href={selectedProject.websiteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-sm font-semibold text-white hover:bg-slate-900/80 transition">
                        <span className="material-symbols-outlined text-base">language</span>
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
    </>
  )
}

