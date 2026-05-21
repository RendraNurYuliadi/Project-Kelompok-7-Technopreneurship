import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import BusinessModelCanvas from './components/BusinessModelCanvas'
import SWOT from './components/SWOT'
import Process from './components/Process'
import SampleProducts from './components/SampleProducts'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Technologies from './components/Technologies'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import AudioPlayer from './components/AudioPlayer'
import CursorFollower from './components/CursorFollower'
import SplashScreen from './components/SplashScreen'

export default function App(){
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <div id="top" className="relative min-h-screen text-slate-900 bg-white dark:text-white dark:bg-black">
        <Navbar theme={theme} setTheme={setTheme} />
        <main className="overflow-x-hidden relative z-10">
          <Hero theme={theme} />
          <About theme={theme} />
          <Team theme={theme} />
          <Services theme={theme} />
          <BusinessModelCanvas theme={theme} />
          <SWOT theme={theme} />
          <SampleProducts theme={theme} />
          <Process theme={theme} />
          <Stats theme={theme} />
          <Projects theme={theme} />
          <Testimonials theme={theme} />
          <Technologies theme={theme} />
          <FAQ theme={theme} />
          <Contact theme={theme} />
        </main>
        <Footer />
        <FloatingButtons />
        <AudioPlayer showSplash={showSplash} />
        <CursorFollower />
      </div>
    </>
  )
}
