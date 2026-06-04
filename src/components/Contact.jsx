import React, { useState } from 'react'
import { motion } from 'framer-motion'
import BackgroundParticles from './BackgroundParticles'

export default function Contact({ theme }){
  const [loading,setLoading] = useState(false)

  const handleSubmit = (e) => {
    setLoading(true)
    // Form akan auto submit ke Getform
    // Getform akan handle email sending
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <BackgroundParticles />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between" data-aos="fade-down">
          <div>
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-xl">Hubungi kami untuk custom order desain, website, atau layanan data. Email: technopreneurshipdigisolvestud@gmail.com</p>
          </div>
          <div className="text-sm text-slate-700 dark:text-slate-300">
            Customer Support WhatsApp: <a href="https://wa.me/6281952004447" target="_blank" rel="noreferrer" className="underline">081952004447</a>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass surface p-6 rounded-3xl border border-slate-200/40 shadow-glass" data-aos="fade-right">
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-slate-900/5 dark:bg-white/10 w-12 h-12 flex items-center justify-center text-lg">
                  <span className="material-symbols-outlined">email</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Email</div>
                  <div className="mt-1 text-slate-600 dark:text-slate-300">technopreneurshipdigisolvestud@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-slate-900/5 dark:bg-white/10 w-12 h-12 flex items-center justify-center text-lg">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Customer Support</div>
                  <div className="mt-1 text-slate-600 dark:text-slate-300">081952004447</div>
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400">Silakan kirim pesan WhatsApp ke customer support untuk bantuan cepat, konfirmasi order, atau pertanyaan layanan Digisolve Studio.</p>
            </div>
          </div>

          <form action="https://getform.io/f/lb4s0n3vzd5" method="POST" onSubmit={handleSubmit} className="glass surface p-6 rounded-3xl border border-slate-200/40 shadow-glass grid gap-4" data-aos="fade-left">
            <div className="relative">
              <input type="text" name="fi-sender-fullName" required placeholder="Nama" className="w-full rounded-2xl border border-slate-200/60 bg-white/90 dark:bg-black/50 dark:border-slate-600/30 py-3 pl-4 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-slate-400 dark:focus:border-slate-500" />
            </div>
            <div className="relative">
              <input type="email" name="fi-sender-email" required placeholder="Email" className="w-full rounded-2xl border border-slate-200/60 bg-white/90 dark:bg-black/50 dark:border-slate-600/30 py-3 pl-4 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-slate-400 dark:focus:border-slate-500" />
            </div>
            <div className="relative">
              <input type="tel" name="fi-text-whatsapp" placeholder="Nomor WhatsApp" className="w-full rounded-2xl border border-slate-200/60 bg-white/90 dark:bg-black/50 dark:border-slate-600/30 py-3 pl-4 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-slate-400 dark:focus:border-slate-500" />
            </div>
            <div className="relative md:col-span-2">
              <textarea name="fi-text-message" placeholder="Pesan Anda" className="w-full min-h-[140px] rounded-2xl border border-slate-200/60 bg-white/90 dark:bg-black/50 dark:border-slate-600/30 py-3 pl-4 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-slate-400 dark:focus:border-slate-500 resize-none" rows={5} />
            </div>
            <input type="hidden" name="fi-text-form-type" value="contact" />
            <motion.button 
              type="submit" 
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-2xl bg-black text-white px-6 py-3 font-semibold shadow-lg shadow-black/20 transition-all duration-300 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-100"
            >
              {loading ? 'Mengirim...' : 'Kirim Pesan'}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  )
}
