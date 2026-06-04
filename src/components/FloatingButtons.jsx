import React from 'react'

export default function FloatingButtons(){

  return (
    <>
      <a href="#top" className="fixed left-6 bottom-6 z-[999] w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-105 transition-shadow" title="Back to top" aria-label="Back to top">
        <span className="material-symbols-outlined text-xl">arrow_upward</span>
      </a>

      <a
        href="https://wa.me/6281952004447?text=Halo%20Customer%20Support%2C%20saya%20ingin%20menanyakan%20layanan%20Digisolve%20Studio."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 z-[999] w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-105 transition-shadow"
        title="Chat dengan Customer Support"
        aria-label="Chat dengan Customer Support via WhatsApp"
      >
        <span className="material-symbols-outlined animate-pulse">chat</span>
      </a>
    </>
  )
}
