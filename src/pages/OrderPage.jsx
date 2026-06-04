import React from 'react'
import { Link } from 'react-router-dom'
import Order from '../components/Order'
import FloatingButtons from '../components/FloatingButtons'
import AudioPlayer from '../components/AudioPlayer'
import logo from '../components/OurTeam/Icon2.png'

export default function OrderPage({ theme }) {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white">
      {/* Header */}
      <div className="fixed w-full z-40 top-4 px-6">
        <nav className="max-w-6xl mx-auto flex items-center justify-between glass rounded-2xl py-3 px-4 shadow-glass backdrop-blur">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
              <img src={logo} alt="Digisolve Studio" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-bold">Digisolve Studio</span>
          </Link>

          <Link 
            to="/" 
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-white text-black font-semibold hover:bg-slate-100 transition"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Kembali
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <main className="pt-20">
        <Order theme={theme} />
      </main>
      <FloatingButtons />
      <AudioPlayer showSplash={false} />
    </div>
  )
}
