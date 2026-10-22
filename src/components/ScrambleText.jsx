import { useState, useEffect, useRef } from 'react'

const GLYPHS = '0123456789ABCDEF!@#$%&*?/'

export default function ScrambleText({ text, className = '', triggerOnHover = true }) {
  const [displayText, setDisplayText] = useState(text)
  const isScrambling = useRef(false)

  const scramble = () => {
    if (isScrambling.current) return
    isScrambling.current = true

    let iteration = 0
    const maxIterations = text.length * 3
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < iteration / 3) {
              return text[index]
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          })
          .join('')
      )

      if (iteration >= maxIterations) {
        clearInterval(interval)
        setDisplayText(text)
        isScrambling.current = false
      }
      iteration += 1
    }, 28)
  }

  useEffect(() => {
    scramble()
  }, [text])

  return (
    <span
      className={className}
      onMouseEnter={triggerOnHover ? scramble : undefined}
      style={{ cursor: triggerOnHover ? 'default' : 'inherit' }}
    >
      {displayText}
    </span>
  )
}
