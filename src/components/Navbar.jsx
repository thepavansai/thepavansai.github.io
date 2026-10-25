import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiBookOpen, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { isDark, toggle } = useTheme()
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) })
      },
      { threshold: 0.3 }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-5 inset-x-0 z-50 flex justify-between items-center px-6 md:px-12 pointer-events-none"
    >
      {/* Brand Monogram & Wordmark */}
      <a
        href="#"
        className="flex items-center gap-2.5 pointer-events-auto group select-none"
        data-cursor-text="HOME"
      >
        <div className="w-8 h-8 rounded-lg bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--text)] transition-colors shadow-sm">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="text-[var(--text)]"
          >
            <rect x="3" y="3" width="18" height="18" rx="4" opacity="0.3" strokeDasharray="3 2" />
            <path d="M7 8h10M7 12h7M7 16h4" />
            <circle cx="16" cy="16" r="1.5" fill="currentColor" />
          </svg>
        </div>

        <div className="flex flex-col font-mono leading-none">
          <span className="text-xs font-bold tracking-[0.2em] text-[var(--text)] uppercase group-hover:metallic-text transition-colors">
            PAVAN SAI
          </span>
          <span className="text-[8px] text-[var(--muted)] tracking-wider uppercase mt-1">
            AI &bull; FULL-STACK
          </span>
        </div>
      </a>

      {/* Center Nav Pill (Desktop) */}
      <nav className="pill-nav hidden md:flex pointer-events-auto shadow-sm">
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            className={`nav-pill ${active === link.href ? 'active' : ''}`}
            data-cursor-text={link.label.toUpperCase()}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Right Controls */}
      <div className="flex items-center gap-2 pointer-events-auto">
        <div className="pill-nav shadow-sm p-1 gap-1">
          <a
            href="https://github.com/thepavansai"
            target="_blank"
            rel="noopener noreferrer"
            className="circle-btn w-8 h-8 text-xs"
            aria-label="GitHub Profile"
            data-cursor-text="GITHUB"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/thepavansai"
            target="_blank"
            rel="noopener noreferrer"
            className="circle-btn w-8 h-8 text-xs"
            aria-label="LinkedIn Profile"
            data-cursor-text="LINKEDIN"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://medium.com/@thepavansaii"
            target="_blank"
            rel="noopener noreferrer"
            className="circle-btn w-8 h-8 text-xs"
            aria-label="Medium Blog"
            data-cursor-text="MEDIUM"
          >
            <FiBookOpen />
          </a>

          <button
            onClick={toggle}
            className="circle-btn w-8 h-8 text-xs border-none"
            aria-label="Toggle theme"
            data-cursor-text="THEME"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="circle-btn w-9 h-9 md:hidden text-sm"
          aria-label="Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 right-6 bg-[var(--nav-bg)] border border-[var(--border)] rounded-2xl p-4 flex flex-col gap-2 backdrop-blur-xl shadow-2xl pointer-events-auto md:hidden"
          >
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="nav-pill text-left block"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
