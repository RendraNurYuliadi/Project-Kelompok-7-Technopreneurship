import React from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'

const tech = [
  {name:'HTML', icon:'code'},
  {name:'CSS', icon:'style'},
  {name:'JavaScript', icon:'bolt'},
  {name:'ReactJS', icon:'memory'},
  {name:'TailwindCSS', icon:'dashboard_customize'},
  {name:'Figma', icon:'brush'},
  {name:'Canva', icon:'content_cut'},
  {name:'AI Automation', icon:'smart_toy'},
  {name:'Data Scraping', icon:'analytics'}
]

export default function Technologies({ theme }){
  return (
    <section id="technologies" className="relative overflow-hidden py-20">
      <BackgroundParticles theme={theme} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Technologies</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-xl">Toolset modern yang kami gunakan untuk membangun desain, website, dan data solution premium.</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tech.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -6 }}
              className="glass surface p-4 rounded-3xl border border-slate-200/50 shadow-glass"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl bg-slate-900/5 dark:bg-white/10 flex items-center justify-center text-lg">
                  <span className="material-symbols-outlined text-lg">{item.icon}</span>
                </div>
                <div className="font-semibold text-slate-900 dark:text-white">{item.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
