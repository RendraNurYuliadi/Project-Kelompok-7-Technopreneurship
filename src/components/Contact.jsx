import React, { useState } from 'react'
import BackgroundParticles from './BackgroundParticles'

export default function Contact({ theme }){
  const [loading,setLoading] = useState(false)
  const [success,setSuccess] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      setSuccess(true)
      e.target.reset()
    },1000)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <BackgroundParticles />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Contact</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-xl">Hubungi kami untuk custom order desain, website, atau layanan data. Email: rendra.education@gmail.com</p>
          </div>
          <div className="text-sm text-slate-700 dark:text-slate-300">
            WhatsApp: <a href="https://wa.me/6281292731092" target="_blank" rel="noreferrer" className="underline">081292731092</a>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass surface p-6 rounded-3xl border border-slate-200/40 shadow-glass">
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-slate-900/5 dark:bg-white/10 w-12 h-12 flex items-center justify-center text-lg">
                  <span className="material-symbols-outlined">email</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Email</div>
                  <div className="mt-1 text-slate-600 dark:text-slate-300">rendra.education@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-slate-900/5 dark:bg-white/10 w-12 h-12 flex items-center justify-center text-lg">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">WhatsApp</div>
                  <div className="mt-1 text-slate-600 dark:text-slate-300">081292731092</div>
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400">Gunakan form di samping atau kirim langsung ke WhatsApp untuk request desain, website, atau layanan data.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass surface p-6 rounded-3xl border border-slate-200/40 shadow-glass grid gap-4">
            <div className="relative">
              <input name="name" required placeholder="Nama" className="w-full rounded-2xl border border-slate-200/60 bg-white/90 dark:bg-black/50 dark:border-slate-600/30 py-3 pl-4 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-slate-400 dark:focus:border-slate-500" />
            </div>
            <div className="relative">
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-2xl border border-slate-200/60 bg-white/90 dark:bg-black/50 dark:border-slate-600/30 py-3 pl-4 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-slate-400 dark:focus:border-slate-500" />
            </div>
            <div className="relative">
              <input name="whatsapp" placeholder="Nomor WhatsApp" className="w-full rounded-2xl border border-slate-200/60 bg-white/90 dark:bg-black/50 dark:border-slate-600/30 py-3 pl-4 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-slate-400 dark:focus:border-slate-500" />
            </div>
            <div className="relative md:col-span-2">
              <textarea name="message" placeholder="Pesan Anda" className="w-full min-h-[140px] rounded-2xl border border-slate-200/60 bg-white/90 dark:bg-black/50 dark:border-slate-600/30 py-3 pl-4 pr-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:border-slate-400 dark:focus:border-slate-500 resize-none" rows={5} />
            </div>
            <button type="submit" className="mt-2 rounded-2xl bg-black text-black px-6 py-3 font-semibold shadow-lg shadow-black/20 transition hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-100">{loading ? 'Mengirim...' : 'Kirim Pesan'}</button>
          </form>
        </div>

        {success && <div className="mt-4 rounded-2xl bg-emerald-500/10 p-4 text-emerald-900 dark:bg-emerald-500/15 dark:text-emerald-200">Pesan terkirim, kami akan menghubungi Anda segera.</div>}
      </div>
    </section>
  )
}
