import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiInstagram, FiCopy, FiCheck, FiArrowUpRight, FiClock, FiBookOpen } from 'react-icons/fi'
import ScrambleText from './ScrambleText'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('thepavansai@duck.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2400)
  }

  const socialLinks = [
    { label: 'GitHub', url: 'https://github.com/thepavansai', icon: FiGithub, handle: '@thepavansai' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/thepavansai', icon: FiLinkedin, handle: 'in/thepavansai' },
    { label: 'Medium', url: 'https://medium.com/@thepavansaii', icon: FiBookOpen, handle: '@thepavansaii' },
    { label: 'Instagram', url: 'https://www.instagram.com/thepavansai', icon: FiInstagram, handle: '@thepavansai' },
  ]

  return (
    <section id="contact" className="pt-14 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto relative">
      <hr className="section-rule" />

      {/* Top Metadata Strip */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 font-mono text-xs text-[var(--muted)]">
        <div className="flex items-center gap-2">
          <FiClock className="text-sm" />
          <span>HYDERABAD, INDIA [IST] : {time || '19:46:00'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>OPEN FOR OPPORTUNITIES</span>
        </div>
      </div>

      {/* Headline & Motto */}
      <div className="mb-14">
        <span className="label block mb-3">BUILD THINGS. LEARN CONSTANTLY. MAKE THEM BETTER.</span>
        <h2
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase text-[var(--text)]"
          style={{ letterSpacing: '0.01em', lineHeight: 1.14 }}
        >
          <span className="block" style={{ letterSpacing: '0.02em' }}>
            LET&apos;S BUILD
          </span>
          <span
            className="block metallic-text"
            style={{ marginTop: 'clamp(1.2rem, 3vw, 2.5rem)', letterSpacing: '0.02em' }}
          >
            <ScrambleText text="SOMETHING" />
          </span>
        </h2>
        <p className="font-mono text-sm tracking-widest text-[var(--muted)] uppercase mt-4">
          // NO LIMITATIONS!
        </p>
      </div>

      {/* Action Strip */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-6 border-t border-[var(--border)]">
        {/* Email Direct Box */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <span className="label">EMAIL</span>
          <div className="flex items-center flex-wrap gap-4">
            <a
              href="mailto:thepavansai@duck.com"
              className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-[var(--text)] hover:metallic-text transition-colors break-all"
              data-cursor-text="EMAIL"
            >
              thepavansai@duck.com
            </a>
            <button
              onClick={copyEmail}
              className="circle-btn w-12 h-12 text-base flex-shrink-0"
              aria-label="Copy email"
              data-cursor-text={copied ? 'COPIED' : 'COPY'}
            >
              {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
            </button>
          </div>
          {copied && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs text-emerald-400 tracking-wider uppercase"
            >
              ✓ Email address copied to clipboard
            </motion.p>
          )}
        </div>

        {/* Social Links Grid */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <span className="label">PROFILES &amp; SOCIALS</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {socialLinks.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 px-4 rounded-xl border border-[var(--border)] hover:border-[var(--text)] bg-[var(--surface)] transition-all group"
                  data-cursor-text={s.label.toUpperCase()}
                >
                  <div className="flex items-center gap-2.5 font-mono text-xs">
                    <Icon className="text-sm" />
                    <div>
                      <span className="block font-bold text-[var(--text)]">{s.label}</span>
                      <span className="text-[10px] text-[var(--muted)]">{s.handle}</span>
                    </div>
                  </div>
                  <FiArrowUpRight className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
