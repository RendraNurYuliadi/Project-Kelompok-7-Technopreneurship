import React from 'react'

export default function FloatingButtons(){
  return (
    <>
      <a href="#top" className="fixed left-6 bottom-6 z-[999] w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-105 transition-shadow" title="Back to top">
        <span className="material-symbols-outlined text-xl">arrow_upward</span>
      </a>

      <a href="https://wa.me/6281292731092" target="_blank" rel="noreferrer" className="fixed right-6 bottom-6 z-[999] w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform hover:scale-105" style={{background:'radial-gradient(circle, rgba(255,255,255,0.04), rgba(255,255,255,0.02))', boxShadow:'0 8px 30px rgba(255,255,255,0.06)'}}>
        <span className="material-symbols-outlined animate-pulse">chat</span>
      </a>
    </>
  )
}
