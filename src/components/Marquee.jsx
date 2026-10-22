import { motion } from 'framer-motion'

export default function Marquee({ items, reverse = false, speed = 25 }) {
  const content = items.join('  •  ') + '  •  '

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-[var(--border)] bg-[var(--surface)] select-none">
      <motion.div
        className="flex whitespace-nowrap font-mono text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[var(--text)] opacity-80"
        animate={{
          x: reverse ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}
      >
        <span>{content}</span>
        <span>{content}</span>
        <span>{content}</span>
        <span>{content}</span>
      </motion.div>
    </div>
  )
}
