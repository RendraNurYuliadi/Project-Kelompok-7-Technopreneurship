import React from 'react'
import { Link } from 'react-router-dom'

export default function FloatingButtons(){

  return (
    <>
      <a href="#top" className="fixed left-6 bottom-6 z-[999] w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-105 transition-shadow" title="Back to top">
        <span className="material-symbols-outlined text-xl">arrow_upward</span>
      </a>

      <Link
        to="/chat"
        className="fixed right-6 bottom-6 z-[999] w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-105 transition-shadow"
        title="Open chat"
      >
        <span className="material-symbols-outlined animate-pulse">chat</span>
      </Link>
    </>
  )
}
