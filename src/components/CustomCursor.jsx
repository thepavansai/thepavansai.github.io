import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [activeText, setActiveText] = useState('')
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const pos = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 })

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }
    setEnabled(true)

    const onMouseMove = (e) => {
      pos.current.targetX = e.clientX
      pos.current.targetY = e.clientY
    }

    const checkHover = (e) => {
      const target = e.target.closest('a, button, .project-row, .circle-btn, .nav-pill, [data-magnetic]')
      if (target) {
        setHovered(true)
        const customText = target.getAttribute('data-cursor-text')
        setActiveText(customText || '')
      } else {
        setHovered(false)
        setActiveText('')
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseover', checkHover, { passive: true })

    let rafId
    const loop = () => {
      // Direct position for the center dot
      pos.current.x += (pos.current.targetX - pos.current.x) * 0.18
      pos.current.y += (pos.current.targetY - pos.current.y) * 0.18

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.targetX}px, ${pos.current.targetY}px, 0)`
      }
      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
      }

      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', checkHover)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      {/* Precision Center Dot */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[99999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white transition-transform duration-100 ease-out" />
      </div>

      {/* Trailing Fluid Ring */}
      <div
        ref={followerRef}
        className="pointer-events-none fixed top-0 left-0 z-[99998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-size duration-300"
      >
        <div
          className={`flex items-center justify-center rounded-full border border-white/70 transition-all duration-300 ease-out ${
            hovered
              ? 'w-14 h-14 bg-white/20 backdrop-blur-[1px] scale-110'
              : 'w-8 h-8 scale-100'
          }`}
        >
          {activeText && (
            <span className="text-[9px] font-mono tracking-widest text-white uppercase select-none">
              {activeText}
            </span>
          )}
        </div>
      </div>
    </>
  )
}
