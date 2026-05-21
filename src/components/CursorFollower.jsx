import React, { useEffect, useState } from 'react'

export default function CursorFollower(){
  const [pos, setPos] = useState({x:-100,y:-100})

  useEffect(()=>{
    const move = (e)=> setPos({x:e.clientX, y:e.clientY})
    window.addEventListener('mousemove', move)
    return ()=> window.removeEventListener('mousemove', move)
  },[])

  return (
    <div className="pointer-events-none">
      <div className="cursor-follower" style={{left:pos.x, top:pos.y, background:'radial-gradient(circle, rgba(255,255,255,0.08), rgba(255,255,255,0.02))'}} />
    </div>
  )
}
