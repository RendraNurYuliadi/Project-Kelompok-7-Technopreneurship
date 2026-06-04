import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SplashScreen from './components/SplashScreen'
import LandingPage from './pages/LandingPage'
import OrderPage from './pages/OrderPage'
import ProductsPage from './pages/ProductsPage'
import GeminiChatPage from './pages/GeminiChatPage'

export default function App(){

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      offset: 100
    })
  }, [])

  return (
    <BrowserRouter>
      <>
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
        <div id="top" className="relative min-h-screen text-slate-900 bg-white dark:text-white dark:bg-black">
          <Routes>
            <Route 
              path="/" 
              element={<LandingPage theme={theme} setTheme={setTheme} showSplash={showSplash} />} 
            />
            <Route 
              path="/order" 
              element={<OrderPage theme={theme} />} 
            />
            <Route 
              path="/products" 
              element={<ProductsPage theme={theme} />} 
            />
            <Route 
              path="/chat" 
              element={<GeminiChatPage theme={theme} />} 
            />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  )
}
