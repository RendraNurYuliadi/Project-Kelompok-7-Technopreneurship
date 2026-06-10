import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'
import ameliaPhoto from './OurTeam/Amels.jpeg'
import rendraPhoto from './OurTeam/Rendra.png'
import eiPhoto from './OurTeam/Ei.jpeg'
import wulansPhoto from './OurTeam/Wulans.png'

const scrollbarStyles = `
  .team-modal::-webkit-scrollbar {
    width: 8px;
  }
  .team-modal::-webkit-scrollbar-track {
    background: transparent;
  }
  .team-modal::-webkit-scrollbar-thumb {
    background: #1f2937;
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }
  .team-modal::-webkit-scrollbar-thumb:hover {
    background: #111827;
    background-clip: padding-box;
  }
`

const members = [
  {
    name:'Amelia', 
    fullName:'Amelia',
    role:'UI/UX Designer & Frontend Developer',
    description:'Creative designer dengan passion di UI/UX dan frontend development. Spesialis dalam menciptakan desain yang indah dan fungsional.',
    img:ameliaPhoto,
    whatsapp:'62813805275587',
    skills:['HTML','CSS','JavaScript','Figma','Canva','Word','Excel','Power Point','Google Colab','Google Sheets']
  },
  {
    name:'Rendra', 
    fullName:'Rendra',
    role:'Full Stack Developer & Tech Lead',
    description:'Tech lead dan full stack developer dengan keahlian di frontend, backend, dan data solutions. Memimpin tim dalam eksekusi project teknis.',
    img:rendraPhoto,
    whatsapp:'628195200444',
    skills:['HTML','CSS','JavaScript','ReactJS','TailwindCSS','Figma','Google AI Studio','Python','Word','Excel','Power Point','Google Colab','Google Sheets']
  },
  {
    name:'Herliana', 
    fullName:'Herliana',
    role:'Graphic Designer',
    description:'Graphic designer profesional dengan expertise dalam visual design dan branding. Menciptakan aset visual yang menarik dan impactful.',
    img:eiPhoto,
    whatsapp:'628195200444',
    skills:['Figma','Canva','Word','Excel','Power Point','Google Colab','Google Sheets']
  },
  {
    name:'Wulan', 
    fullName:'Wulan',
    role:'Frontend Developer',
    description:'Frontend developer berpengalaman dalam membuat UI yang responsive dan interactive. Expert dalam implementasi design ke code.',
    img:wulansPhoto,
    whatsapp:'628565957109',
    skills:['HTML','CSS','JavaScript','Figma','Canva','Word','Excel','Power Point','Google Colab','Google Sheets']
  }
]

const skillIcons = {
  'HTML':'code',
  'CSS':'style',
  'JavaScript':'bolt',
  'ReactJS':'memory',
  'TailwindCSS':'dashboard_customize',
  'Figma':'brush',
  'Canva':'content_cut',
  'Word':'description',
  'Excel':'table_chart',
  'Power Point':'slideshow',
  'Google Colab':'api',
  'Google Sheets':'grid_on',
  'Google AI Studio':'smart_toy',
  'Python':'analytics'
}

export default function Team({ theme }){
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <>
      <style>{scrollbarStyles}</style>
    <section id="team" className="relative overflow-hidden py-20">
      <BackgroundParticles theme={theme} />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Our Team</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {members.map((m, idx)=> (
            <motion.div 
              key={m.name}
              whileHover={{scale:1.03}} 
              data-aos="zoom-in" 
              data-aos-delay={idx*100} 
              className="glass p-4 rounded-2xl text-center cursor-pointer transition shadow-lg hover:shadow-2xl group"
              onClick={() => setSelectedMember(m)}
            >
              <img src={m.img} alt={m.name} className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto object-cover" />
              <h4 className="mt-3 font-semibold">{m.name}</h4>
              <div className="text-slate-400 text-sm">{m.role}</div>
              <motion.div 
                initial={{opacity:0, y:-5}}
                whileInView={{opacity:1, y:0}}
                transition={{delay:0.2}}
                className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-300 flex items-center justify-center gap-1 group-hover:text-white transition"
              >
                <span>Lihat Detail</span>
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div 
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/50 z-40"
            />
            <motion.div 
              initial={{opacity:0,scale:0.9,y:20}}
              animate={{opacity:1,scale:1,y:0}}
              exit={{opacity:0,scale:0.9,y:20}}
              transition={{duration:0.3}}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <div className="glass border border-white/10 rounded-3xl p-8 max-w-md w-full max-h-[58vh] overflow-y-auto shadow-2xl team-modal">
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>

                {/* Photo */}
                <img 
                  src={selectedMember.img} 
                  alt={selectedMember.name} 
                  className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-white/20" 
                />

                {/* Info */}
                <h3 className="mt-6 text-2xl font-bold text-center">{selectedMember.fullName}</h3>
                <p className="text-slate-400 text-center text-sm mt-2">{selectedMember.role}</p>
                
                {/* Description */}
                <p className="mt-4 text-slate-300 text-sm leading-relaxed text-center">
                  {selectedMember.description}
                </p>

                {/* Skills */}
                <div className="mt-6">
                  <h4 className="font-semibold mb-3 text-slate-200">Skills & Tools</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedMember.skills.map(skill => (
                      <div key={skill} className="flex flex-col items-center gap-1">
                        <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition">
                          <span className="material-symbols-outlined text-base">{skillIcons[skill] || 'star'}</span>
                        </div>
                        <span className="text-xs text-slate-400 text-center">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-3">
                  <motion.a
                    href={`https://wa.me/${selectedMember.whatsapp}?text=Halo ${selectedMember.fullName}, saya ingin bertanya tentang layanan Digisolve Studio`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-white text-black font-semibold text-sm transition"
                  >
                    <span className="material-symbols-outlined">mail</span>
                    Chat
                  </motion.a>
                  <motion.button
                    onClick={() => {
                      setSelectedMember(null)
                      setTimeout(() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'}), 100)
                    }}
                    whileHover={{scale:1.05}}
                    whileTap={{scale:0.95}}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-white transition"
                  >
                    <span className="material-symbols-outlined">folder_open</span>
                    Portfolio
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
    </>
  )
}
