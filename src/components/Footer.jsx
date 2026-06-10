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
            <a
              href="https://www.instagram.com/digisolve_studio?utm_source=qr&igsh=NWdzZXBpbjV3dTl6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
              aria-label="Digisolve Studio Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
              </svg>
              <span className="text-sm">@digisolve_studio</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
