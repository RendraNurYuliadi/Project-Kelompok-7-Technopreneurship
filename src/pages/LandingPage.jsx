import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import BusinessModelCanvas from '../components/BusinessModelCanvas'
import SWOT from '../components/SWOT'
import Process from '../components/Process'
import Stats from '../components/Stats'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import Technologies from '../components/Technologies'
import Team from '../components/Team'
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'
import CursorFollower from '../components/CursorFollower'

export default function LandingPage({ theme, setTheme, showSplash }) {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="overflow-x-hidden relative z-10">
        <Hero theme={theme} />
        <About theme={theme} />
        <Team theme={theme} />
        <Services theme={theme} />
        <BusinessModelCanvas theme={theme} />
        <SWOT theme={theme} />
        <Process theme={theme} />
        <Stats theme={theme} />
        <Projects theme={theme} />
        <WhyChooseUs theme={theme} />
        <Technologies theme={theme} />
        <FAQ theme={theme} />
        <Newsletter theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer />
      <FloatingButtons />
      <CursorFollower />
    </>
  )
}
