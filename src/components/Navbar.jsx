import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from './OurTeam/Icon2.png'

const links = ['Home','About','Team','Services','Projects','Technologies','FAQ','Contact']

export default function Navbar({ theme, setTheme }){
  const [open,setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    const sections = links.map((link) => {
      const id = link.toLowerCase()
      return { name: link, el: document.getElementById(id) }
    }).filter((section) => section.el)

    const onScroll = () => {
      const scrollPosition = window.scrollY + 120
      const current = sections.reduce((active, section) => {
        const top = section.el.offsetTop
        const height = section.el.offsetHeight
        if (scrollPosition >= top && scrollPosition < top + height) {
          return section.name
        }
        return active
      }, 'Home')
      setActiveLink(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const getLinkClass = (link) => {
    const isActive = activeLink === link
    return `relative inline-block py-1 px-1 transition ${isActive ? 'font-semibold text-white border-b-2 border-white' : 'text-silver hover:text-white'}`
  }

  return (
    <motion.header
      initial={{y:-40,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:0.6}}
      className="fixed w-full z-40 top-4 px-6">
      <nav className="max-w-6xl mx-auto flex items-center justify-between glass rounded-2xl py-3 px-4 shadow-glass backdrop-blur">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-6 text-sm items-center">
              {links.map(l=> (
                <li key={l} className="relative">
                  <a href={`#${l.toLowerCase()}`} className={getLinkClass(l)}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/products" className="inline-flex items-center justify-center w-10 h-10 rounded-full glass border border-white/10 text-silver hover:text-white transition" aria-label="products page">
            <span className="material-symbols-outlined">shopping_bag</span>
          </Link>
          <button onClick={toggleTheme} className="inline-flex items-center justify-center w-10 h-10 rounded-full glass border border-white/10 text-silver hover:text-white transition" aria-label="toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="md:hidden p-2" onClick={()=>setOpen(v=>!v)} aria-label="menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </nav>

      {open && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="md:hidden mt-2 max-w-6xl mx-auto glass rounded-2xl p-4">
          <ul className="flex flex-col gap-3">
            {links.map(l=> (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className={`block py-2 ${activeLink === l ? 'font-semibold text-white' : 'text-silver hover:text-white'}`}>{l}</a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}
