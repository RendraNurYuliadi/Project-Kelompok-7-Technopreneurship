import React, { useState } from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'

const shadowAnimationStyle = `
  @keyframes shadowFlow {
    0% {
      box-shadow: -100px 0px 60px rgba(0, 0, 0, 0.3), inset -100px 0px 60px rgba(255, 255, 255, 0.1)
    }
    50% {
      box-shadow: 100px 0px 60px rgba(0, 0, 0, 0.3), inset 100px 0px 60px rgba(255, 255, 255, 0.1)
    }
    100% {
      box-shadow: -100px 0px 60px rgba(0, 0, 0, 0.3), inset -100px 0px 60px rgba(255, 255, 255, 0.1)
    }
  }
  
  .newsletter-animated {
    animation: shadowFlow 6s ease-in-out infinite;
  }
`

export default function Newsletter({ theme }){
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    setIsLoading(true)
    // Form akan auto submit ke Getform
  }

  return (
    <>
      <style>{shadowAnimationStyle}</style>
      <section id="newsletter" className="relative overflow-hidden py-20">
        <BackgroundParticles theme={theme} />
        <div className="relative z-10 w-full px-6">
          <motion.div 
            initial={{opacity:0,y:20}} 
            whileInView={{opacity:1,y:0}} 
            viewport={{once:true}} 
            transition={{duration:0.6}}
            className={`glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-glass overflow-hidden w-full newsletter-animated ${theme === 'dark' ? 'bg-slate-900/40' : 'bg-slate-50/40'}`}
          >
          {/* Content */}
          <div className="text-center">
            {/* Icon */}
            <motion.div 
              initial={{scale:0}}
              whileInView={{scale:1}}
              viewport={{once:true}}
              transition={{delay:0.1}}
              className="flex justify-center mb-6"
            >
              <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center ${theme === 'dark' ? 'bg-slate-700/50 border-slate-600/50 text-slate-300' : 'bg-slate-300/50 border-slate-400/50 text-slate-700'}`}>
                <span className="material-symbols-outlined text-3xl">mail_outline</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              initial={{opacity:0,y:10}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:0.2}}
              className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            >
              Jadilah Bagian dari Keluarga Digisolve
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{opacity:0,y:10}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:0.3}}
              className={`mt-4 max-w-2xl mx-auto text-lg ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
            >
              Dapatkan update terbaru tentang layanan kami, tips desain digital, dan penawaran eksklusif langsung ke inbox Anda.
            </motion.p>

            {/* Benefits */}
            <motion.div 
              initial={{opacity:0,y:10}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:0.4}}
              className={`mt-6 flex flex-col sm:flex-row justify-center gap-4 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
            >
              <div className="flex items-center gap-2 text-emerald-500">
                <span className="material-symbols-outlined">check_circle</span>
                <span className={theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}>Promo eksklusif</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-500">
                <span className="material-symbols-outlined">check_circle</span>
                <span className={theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}>Tips & insight digital</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-500">
                <span className="material-symbols-outlined">check_circle</span>
                <span className={theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}>Update portfolio</span>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{opacity:0,y:15}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:0.5}}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <form 
                action="https://getform.io/f/lb4s0n3vzd5" 
                method="POST" 
                onSubmit={handleSubmit}
                className="w-full flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  name="fi-sender-email"
                  placeholder="Masukkan email Anda"
                  required
                  className={`flex-1 px-6 py-3 rounded-full placeholder-slate-500 focus:outline-none focus:ring-2 transition disabled:opacity-50 ${theme === 'dark' ? 'bg-black border border-slate-700/50 text-white focus:border-slate-600 focus:ring-slate-700/30' : 'bg-black border border-slate-600/50 text-white focus:border-slate-500 focus:ring-slate-600/30'}`}
                />
                <input type="hidden" name="fi-text-form-type" value="newsletter" />
                <motion.button
                  whileHover={{scale:1.05}}
                  whileTap={{scale:0.95}}
                  type="submit"
                  className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-slate-100 hover:shadow-lg hover:shadow-black/30 transition disabled:opacity-50 cursor-pointer shadow-md shadow-black/20"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined animate-spin text-sm">sync</span>
                      Mengirim...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>Subscribe</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Privacy Note */}
            <motion.p 
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              viewport={{once:true}}
              transition={{delay:0.6}}
              className={`mt-4 text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}
            >
              Kami tidak akan membagikan email Anda kepada pihak ketiga. Unsubscribe kapan saja.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  )
}
