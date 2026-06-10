import React from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'

const techCategories = [
  {
    title: 'Frontend',
    technologies: [
      {name:'HTML5', icon:'code'},
      {name:'CSS3', icon:'style'},
      {name:'Tailwind CSS', icon:'palette'},
      {name:'JavaScript', icon:'bolt'},
      {name:'React.js', icon:'memory'}
    ]
  },
  {
    title: 'Backend & Data',
    technologies: [
      {name:'Laravel', icon:'storage'},
      {name:'Python', icon:'analytics'},
      {name:'MySQL', icon:'database'},
      {name:'REST API', icon:'api'},
      {name:'Google Colab', icon:'smart_toy'}
    ]
  },
  {
    title: 'Design & Deployment',
    technologies: [
      {name:'Figma', icon:'brush'},
      {name:'Canva', icon:'palette'},
      {name:'GitHub', icon:'code_blocks'},
      {name:'Vercel', icon:'cloud_upload'}
    ]
  }
]

export default function Technologies({ theme }){
  return (
    <section id="technologies" className="relative overflow-hidden py-20">
      <BackgroundParticles theme={theme} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Our Technology Stack</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-xl">Kami memanfaatkan teknologi modern, framework terpercaya, dan platform industri untuk menghadirkan solusi digital yang cepat, scalable, aman, dan berorientasi pada kebutuhan bisnis.</p>
          </div>
        </div>

        <div className="mt-12 space-y-10">
          {techCategories.map((category, catIdx) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.technologies.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -6 }}
                    data-aos="fade-up"
                    data-aos-delay={(catIdx * 50) + (idx * 50)}
                    className="glass surface p-4 rounded-3xl border border-slate-200/50 dark:border-white/10 shadow-glass"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-2xl bg-slate-900/5 dark:bg-white/10 flex items-center justify-center text-lg">
                        <span className="material-symbols-outlined text-lg">{item.icon}</span>
                      </div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm">{item.name}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
