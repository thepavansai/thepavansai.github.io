import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiBookOpen, FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi'
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
      className="fixed top-4 sm:top-5 inset-x-0 z-50 flex justify-between items-center px-4 sm:px-6 md:px-12 pointer-events-none"
    >
      {/* Brand Monogram & Wordmark */}
      <a
        href="#"
        className="flex items-center gap-2 sm:gap-2.5 pointer-events-auto group select-none shrink-0"
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
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[var(--text)] uppercase group-hover:metallic-text transition-colors">
            PAVAN SAI
          </span>
          <span className="text-[8px] text-[var(--muted)] tracking-wider uppercase mt-1">
            AI &bull; FULL-STACK
          </span>
        </div>
      </a>

      {/* Center Nav Pill (Desktop Only: hidden on mobile via CSS) */}
      <nav className="pill-nav pointer-events-auto shadow-sm">
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
      <div className="flex items-center gap-2 pointer-events-auto shrink-0">
        <div className="pill-nav shadow-sm p-1 gap-1">
          {/* Desktop-only Social Icons */}
          <a
            href="https://github.com/thepavansai"
            target="_blank"
            rel="noopener noreferrer"
            className="circle-btn w-8 h-8 text-xs nav-desktop-social"
            aria-label="GitHub Profile"
            data-cursor-text="GITHUB"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/thepavansai"
            target="_blank"
            rel="noopener noreferrer"
            className="circle-btn w-8 h-8 text-xs nav-desktop-social"
            aria-label="LinkedIn Profile"
            data-cursor-text="LINKEDIN"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://medium.com/@thepavansaii"
            target="_blank"
            rel="noopener noreferrer"
            className="circle-btn w-8 h-8 text-xs nav-desktop-social"
            aria-label="Medium Blog"
            data-cursor-text="MEDIUM"
          >
            <FiBookOpen />
          </a>

          {/* Theme Toggle (Visible everywhere) */}
          <button
            onClick={toggle}
            className="circle-btn w-8 h-8 text-xs border-none"
            aria-label="Toggle theme"
            data-cursor-text="THEME"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="circle-btn w-9 h-9 nav-mobile-btn text-sm bg-[var(--surface)] border border-[var(--border)]"
          aria-label="Open Navigation Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 right-4 left-4 sm:left-auto sm:w-80 bg-[var(--nav-bg)] border border-[var(--border)] rounded-2xl p-5 flex flex-col gap-3 backdrop-blur-2xl shadow-2xl pointer-events-auto md:hidden z-50"
          >
            <div className="flex justify-between items-center pb-3 border-b border-[var(--border)] font-mono text-[10px] text-[var(--muted)]">
              <span>NAVIGATION</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="hover:text-[var(--text)] transition-colors"
              >
                CLOSE [✕]
              </button>
            </div>

            <div className="flex flex-col gap-1.5 py-1">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="p-3 rounded-xl hover:bg-[var(--surface)] font-mono text-xs font-bold uppercase tracking-wider text-[var(--text)] transition-colors flex justify-between items-center"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <span className="text-[var(--muted)] text-[10px]">↳</span>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[var(--border)] flex justify-between items-center font-mono text-xs text-[var(--muted)]">
              <span>SOCIALS</span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/thepavansai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="circle-btn w-8 h-8 text-xs text-[var(--text)]"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/thepavansai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="circle-btn w-8 h-8 text-xs text-[var(--text)]"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
                <a
                  href="https://medium.com/@thepavansaii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="circle-btn w-8 h-8 text-xs text-[var(--text)]"
                  aria-label="Medium"
                >
                  <FiBookOpen />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
