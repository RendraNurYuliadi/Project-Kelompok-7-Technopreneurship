import React from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'
import ameliaPhoto from './OurTeam/Amels.jpeg'
import rendraPhoto from './OurTeam/Rendra.png'
import eiPhoto from './OurTeam/Ei.jpeg'
import wulansPhoto from './OurTeam/Wulans.png'

const members = [
  {name:'Amelia', role:'Designer', img:ameliaPhoto},
  {name:'Rendra', role:'Lead', img:rendraPhoto},
  {name:'Ei', role:'Team Member', img:eiPhoto},
  {name:'Wulans', role:'Team Member', img:wulansPhoto}
]

export default function Team({ theme }){
  return (
    <section id="team" className="relative overflow-hidden py-20">
      <BackgroundParticles theme={theme} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Our Team</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {members.map(m=> (
            <motion.div whileHover={{scale:1.03}} className="glass p-4 rounded-2xl text-center" key={m.name}>
              <img src={m.img} alt={m.name} className="w-24 h-24 rounded-full mx-auto object-cover" />
              <h4 className="mt-3 font-semibold">{m.name}</h4>
              <div className="text-silver text-sm">{m.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
