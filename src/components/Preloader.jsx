import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setExiting(true)
            setTimeout(() => {
              if (onComplete) onComplete()
            }, 900)
          }, 300)
          return 100
        }
        // Accelerate towards 100
        const step = Math.max(1, Math.floor((100 - prev) * 0.15) + Math.floor(Math.random() * 4))
        return Math.min(100, prev + step)
      })
    }, 35)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-8 md:p-14 bg-[#0D0D0D] text-[#F0F0F0] select-none"
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center text-xs font-mono tracking-widest uppercase opacity-60">
            <span>G. PAVAN SAI SRIRAM</span>
            <span>PORTFOLIO 2026</span>
          </div>

          {/* Center Brand */}
          <div className="max-w-4xl mx-auto w-full text-center my-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-neutral-400 mb-4"
            >
              G. Pavan Sai Sriram
            </motion.p>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              BUILDING <br />
              <span className="metallic-text">SYSTEMS</span>
            </h1>
            <div className="flex justify-center items-center gap-3 text-xs font-mono text-neutral-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>FULL-STACK SOFTWARE ENGINEER</span>
            </div>
          </div>

          {/* Bottom Progress Bar & Percentage */}
          <div className="w-full max-w-4xl mx-auto flex flex-col gap-3">
            <div className="flex justify-between items-end text-xs font-mono">
              <span className="opacity-40">LOADING RESOURCES...</span>
              <span className="text-2xl md:text-4xl font-bold font-mono tracking-tighter">
                {String(percent).padStart(3, '0')}%
              </span>
            </div>
            <div className="w-full h-[2px] bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                style={{ width: `${percent}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
