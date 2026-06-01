import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import BackgroundParticles from '../components/BackgroundParticles'
import CursorFollower from '../components/CursorFollower'

const API_KEY = import.meta.env.VITE_API_KEY

export default function GeminiChatPage({ theme }) {
  const navigate = useNavigate()
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Halo! 👋 Saya adalah AI assistant dari Digisolve Studio. Ada yang bisa saya bantu?",
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  // Auto scroll ke bawah ketika ada pesan baru
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const filterResponse = (text) => {
    // Filter response - buang tag HTML, normalize whitespace
    let filtered = text
      .replace(/<[^>]*>/g, '') // Buang HTML tags
      .replace(/\*\*/g, '') // Buang markdown bold
      .replace(/\*/g, '') // Buang markdown asterisk
      .replace(/#{1,6}\s/g, '') // Buang markdown headers
      .trim()
    
    return filtered
  }

  const sendMessage = async () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const prompt = `Anda adalah assistant yang ramah dan helpful dari Digisolve Studio - sebuah startup teknologi yang menyediakan solusi digital. 
      Jawab pertanyaan berikut dengan singkat, jelas, dan helpful dalam bahasa Indonesia atau bahasa yang digunakan user.
      
      User question: ${inputValue}`

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1024,
            }
          })
        }
      )

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }

      const data = await response.json()
      
      let aiResponse = ''
      if (data.candidates && data.candidates.length > 0) {
        const content = data.candidates[0].content
        if (content && content.parts && content.parts.length > 0) {
          aiResponse = content.parts[0].text
        }
      }

      // Filter response
      aiResponse = filterResponse(aiResponse) || "Maaf, saya tidak bisa memahami permintaan Anda."

      // Add AI message
      const aiMessage = {
        id: messages.length + 2,
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error calling Gemini API:', error)
      
      const errorMessage = {
        id: messages.length + 2,
        text: "Maaf, ada kesalahan saat memproses pertanyaan Anda. Silakan coba lagi.",
        sender: 'ai',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-slate-900'} relative overflow-hidden`}>
      {/* Background Particles */}
      <BackgroundParticles theme={theme} />
      
      <div className="relative z-10 flex flex-col h-screen">
        {/* Header */}
        <div className={`fixed top-0 left-0 right-0 z-50 ${theme === 'dark' ? 'bg-black/80 border-slate-800' : 'bg-white/80 border-slate-200'} backdrop-blur-md border-b`}>
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">Digisolve AI Assistant</h1>
            <button 
              onClick={() => navigate('/')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                theme === 'dark'
                  ? 'bg-slate-800 hover:bg-slate-700'
                  : 'bg-slate-100 hover:bg-slate-200'
              }`}
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Kembali
            </button>
          </div>
        </div>

        {/* Messages Container */}
        <div className={`flex-1 overflow-y-auto pt-20 pb-24`}>
          <div className="max-w-4xl mx-auto px-6 py-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                data-aos={message.sender === 'user' ? 'fade-left' : 'fade-right'}
                data-aos-duration="300"
              >
                <div className={`flex items-end gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} max-w-md`}>
                  {/* Icon */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user'
                      ? theme === 'dark'
                        ? 'bg-slate-700'
                        : 'bg-slate-300'
                      : theme === 'dark'
                        ? 'bg-slate-600'
                        : 'bg-slate-400'
                  }`}>
                    <span className={`material-symbols-outlined text-sm ${
                      message.sender === 'user'
                        ? theme === 'dark' ? 'text-slate-200' : 'text-slate-700'
                        : theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
                    }`}>
                      {message.sender === 'user' ? 'person' : 'smart_toy'}
                    </span>
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`px-4 py-3 rounded-lg ${
                      message.sender === 'user'
                        ? theme === 'dark'
                          ? 'bg-slate-800 text-white rounded-br-none'
                          : 'bg-slate-200 text-slate-900 rounded-br-none'
                        : theme === 'dark'
                          ? 'bg-slate-900 text-slate-100 rounded-bl-none'
                          : 'bg-slate-100 text-slate-900 rounded-bl-none'
                    }`}
                  >
                    <p className="break-words text-sm md:text-base">{message.text}</p>
                    <span className={`text-xs mt-2 block ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      {message.timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-end gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark' ? 'bg-slate-600' : 'bg-slate-400'
                  }`}>
                    <span className={`material-symbols-outlined text-sm ${
                      theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
                    }`}>smart_toy</span>
                  </div>
                  <div className={`px-4 py-3 rounded-lg ${
                    theme === 'dark'
                      ? 'bg-slate-900 text-slate-100'
                      : 'bg-slate-100 text-slate-900'
                  } rounded-bl-none`}>
                    <div className="flex gap-2 items-center">
                      <div className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-slate-400' : 'bg-slate-600'} animate-bounce`}></div>
                      <div className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-slate-400' : 'bg-slate-600'} animate-bounce delay-100`}></div>
                      <div className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-slate-400' : 'bg-slate-600'} animate-bounce delay-200`}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className={`fixed bottom-0 left-0 right-0 z-40 ${theme === 'dark' ? 'bg-black/80 border-slate-800' : 'bg-white/80 border-slate-200'} backdrop-blur-md border-t`}>
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tanya sesuatu..."
                disabled={isLoading}
                className={`flex-1 px-4 py-2 rounded-lg border transition ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-slate-600'
                    : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-slate-400'
                } outline-none focus:ring-1 focus:ring-slate-500/30`}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !inputValue.trim()}
                className={`px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
                  isLoading || !inputValue.trim()
                    ? theme === 'dark'
                      ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                      : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    : theme === 'dark'
                      ? 'bg-slate-700 hover:bg-slate-600 text-white'
                      : 'bg-slate-300 hover:bg-slate-400 text-slate-900'
                }`}
              >
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cursor Follower */}
      <CursorFollower />
    </div>
  )
}
