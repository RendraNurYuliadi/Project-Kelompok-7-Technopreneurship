import React from 'react'

export default function Footer(){
  return (
    <footer className="py-12 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-silver border-t border-white/6 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="font-bold text-xl">Digisolve Studio</div>
            <div className="text-sm">© {new Date().getFullYear()} Digisolve Studio. All rights reserved.</div>
          </div>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
