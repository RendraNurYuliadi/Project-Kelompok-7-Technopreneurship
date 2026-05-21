import React, { useEffect, useRef, useState } from 'react'
import backSound from './OurTeam/backsound.mp3'

export default function AudioPlayer({ showSplash }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.22
    audio.muted = false
    audio.preload = 'auto'

    const handleEnded = () => setPlaying(false)
    const handlePlaySuccess = () => setPlaying(true)

    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('play', handlePlaySuccess)

    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))

    return () => {
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('play', handlePlaySuccess)
    }
  }, [])

  const togglePlayback = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <div>
      <audio
        ref={audioRef}
        src={backSound}
        autoPlay
        playsInline
      />
      <button
        onClick={togglePlayback}
        className={`fixed left-6 bottom-20 z-[999] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg backdrop-blur transition hover:bg-white/20 ${showSplash ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label={playing ? 'Pause background audio' : 'Play background audio'}
        type="button"
      >
        {playing ? '⏸' : '▶'}
      </button>
    </div>
  )
}
