import React from 'react'
import { Link } from 'react-router-dom'
import Order from '../components/Order'

export default function OrderPage({ theme }) {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-700/20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold hover:opacity-80 transition">
            Digisolve Studio
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Kembali
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-20">
        <Order theme={theme} />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-400">
          <p>&copy; 2024 Digisolve Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
