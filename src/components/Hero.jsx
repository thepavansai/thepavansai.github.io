import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiArrowDown, FiTerminal } from 'react-icons/fi'
import ScrambleText from './ScrambleText'
import HeroVisual from './HeroVisual'

const ease = [0.16, 1, 0.3, 1]

const PHRASES = [
  'FULL-STACK ARCHITECTURE',
  'AI PIPELINES',
  'HIGH-THROUGHPUT APIS',
  'DETERMINISTIC SYSTEMS',
]

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 px-6 md:px-12 flex flex-col justify-between max-w-[1440px] mx-auto overflow-hidden"
    >
      {/* Editorial Giant Title */}
      <div className="w-full text-center select-none pt-4 md:pt-8 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          <p className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--muted)] mb-3">
            G. PAVAN SAI SRIRAM
          </p>
          <h1
            className="text-[12vw] sm:text-[10vw] md:text-[8.5rem] lg:text-[10.5rem] font-black uppercase text-[var(--text)]"
            style={{ letterSpacing: '0.01em', lineHeight: 1.1 }}
          >
            <span className="block" style={{ letterSpacing: '0.02em' }}>
              <ScrambleText text="BUILDING" />
            </span>
            <span
              className="block metallic-text"
              style={{ marginTop: 'clamp(0.75rem, 2vw, 1.8rem)', letterSpacing: '0.02em' }}
            >
              <ScrambleText text="SYSTEMS" />
            </span>
          </h1>
        </motion.div>
      </div>

      {/* 12-Column Symmetrical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end relative z-10">
        {/* Left Column (3 cols) */}
        <div className="md:col-span-3 flex flex-col justify-between gap-10">
          <div>
            <span className="label block mb-2">ENGINEERING FOCUS</span>
            <div className="h-10 flex items-center">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[var(--text)] border-l-2 border-[var(--text)] pl-3">
                <ScrambleText key={phraseIndex} text={PHRASES[phraseIndex]} />
              </span>
            </div>
            <p className="text-xs text-[var(--muted)] leading-relaxed mt-4">
              Building software that survives contact with production. Retrieval-grounded query pipelines, deterministic intent routing, and scalable backend services.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#about"
              className="scroll-circle"
              aria-label="Scroll to content"
              data-cursor-text="EXPLORE"
            >
              <FiArrowDown className="text-lg" />
            </a>
            <span className="font-mono text-[10px] tracking-widest text-[var(--muted)] uppercase">
              SCROLL DOWN
            </span>
          </div>
        </div>

        {/* Center Column (6 cols): Replaced stick-figure with live System Topology HUD */}
        <div className="md:col-span-6 relative flex flex-col items-center">
          {/* Floating Pill Badges */}
          <div className="w-full flex justify-between items-center mb-4 px-2">
            <span className="float-badge" data-cursor-text="ENGINEER">
              <FiTerminal className="text-xs" />
              FULL-STACK ENGINEER
            </span>
            <span className="float-badge" data-cursor-text="AI CORE">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" />
              AI INTEGRATIONS
            </span>
          </div>

          <HeroVisual />
        </div>

        {/* Right Column (3 cols) */}
        <div className="md:col-span-3 flex flex-col justify-between gap-10">
          <div className="space-y-4">
            <span className="label block">CURRENT STATUS</span>
            <div className="flex items-center gap-2">
              <span className="available-badge">
                <span className="available-dot" />
                AVAILABLE FOR HIRE
              </span>
            </div>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Specialized in Python (FastAPI), Java (Spring Boot), PostgreSQL, Docker, Redis, and modern full-stack web architectures.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="label block">REPOSITORIES</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/thepavansai"
                target="_blank"
                rel="noopener noreferrer"
                className="circle-btn w-11 h-11"
                aria-label="GitHub Profile"
                data-cursor-text="GITHUB"
              >
                <FiGithub className="text-base" />
              </a>
              <a
                href="#projects"
                className="font-mono text-xs tracking-wider uppercase text-[var(--text)] underline underline-offset-4 hover:opacity-75 transition-opacity"
              >
                VIEW PROJECTS (05)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
