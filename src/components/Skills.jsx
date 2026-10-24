import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiCheckCircle } from 'react-icons/fi'
import ScrambleText from './ScrambleText'

const experiences = [
  {
    period: 'JUN 2025 - PRESENT',
    role: 'Software Engineer 1',
    company: 'Insight Global',
    type: 'Full-time • Client AI Solutions',
    badge: 'CURRENT ROLE',
    highlights: [
      'Built a natural-language query agent over Jira, Confluence, and SharePoint (FastAPI, React) for client leadership and PMs. Handles 600+ queries/day, cutting lookup time by ~70%. Conduct bi-weekly client demos.',
      'Designed a retrieval-grounded pipeline with a deterministic intent-routing layer to resolve common queries (issue counts, blockers) without model calls, dropping worst-case response times under 30s.',
      'Rebuilt network infrastructure tool frontend in React with streaming responses, slashing load time from 40s to 15s.',
      'Fixed a third-party connector silently capping results at 100 tickets: built an adaptive recursive time-range narrowing method tested against 1,600+ tickets with 0 missed results.',
      'Implemented fuzzy assignee name matching with confidence checks to flag ambiguous entities instead of guessing.',
      'Built automated test suites, integrated ServiceNow, migrated source to GitLab, and configured GitHub Actions CI/CD for 3 Azure-hosted apps.',
    ],
    stack: ['Python', 'FastAPI', 'Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Azure', 'GitLab CI/CD'],
  },
  {
    period: 'FEB 2025 - JUN 2025',
    role: 'Software Engineer Intern',
    company: 'Insight Global',
    type: 'Internship • 5 mos',
    badge: 'CONVERTED TO FULL-TIME',
    highlights: [
      'Five-month engineering internship contributing to enterprise client prototypes, AI tooling, and backend API services.',
      'Demonstrated high-velocity execution and clean architecture standards, resulting in a direct conversion to full-time Software Engineer 1 in June 2025.',
    ],
    stack: ['Python', 'FastAPI', 'Java', 'React', 'Docker', 'GitLab'],
  },
  {
    period: '2024 - PRESENT',
    role: 'Creator & Full-Stack Systems Architect',
    company: 'Open Source Systems',
    type: 'Independent Engineering',
    badge: 'PRODUCTION ARCHITECTURES',
    highlights: [
      'Built change-impact-analyzer: Deterministic Java dependency-graph analyzer tracing downstream blast radius and public-API breaks before PR merge.',
      'Engineered Cric-Auction: High-performance, thread-safe FastAPI real-time player auction backend with reactive Vite frontend.',
      'Shipped Ascendant Initiative: Full-stack cognitive training platform running hybrid Rule + AI evaluation engine (Spring Boot, Next.js 16, Redis).',
    ],
    stack: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Next.js 16', 'Redis', 'PostgreSQL', 'AST Parsing'],
  },
  {
    period: 'OCT 2021 - JUN 2025',
    role: 'B.Tech in Computer Science & Engineering (Hons.)',
    company: 'SASTRA Deemed University',
    type: 'Degree Program',
    badge: 'HONORS GRADUATE',
    highlights: [
      'Deep academic grounding in Systems Design, Distributed Systems, Data Structures & Algorithms, and Cloud Computing.',
      'Certified across 5 specialized industry & NPTEL programs in MongoDB Aggregation, Machine Learning, and Distributed Networks.',
      'Active contributor to open-source developer tooling and technical writing on Medium.',
    ],
    stack: ['Systems Design', 'Distributed Systems', 'Algorithms', 'Java', 'SQL', 'MongoDB'],
  },
]

const certifications = [
  {
    name: 'MongoDB Aggregation Fundamentals',
    issuer: 'MongoDB',
    date: 'SEP 2025',
    credentialId: '3fdb1392-846a-47ab-98ba-4b75101c632d',
    url: 'https://www.credly.com/badges/3fdb1392-846a-47ab-98ba-4b75101c632d/',
    platform: 'Credly',
  },
  {
    name: 'Human Computer Interaction',
    issuer: 'NPTEL',
    date: 'APR 2025',
    credentialId: 'NPTEL25CS38S646002479',
    url: 'https://internalapp.nptel.ac.in/NOC/NOC25/SEM1/Ecertificates/106/noc25-cs38/Course/NPTEL25CS38S64600247904314497.pdf',
    platform: 'NPTEL E-Certificate',
  },
  {
    name: 'Introduction to Industry 4.0 & Industrial IoT',
    issuer: 'NPTEL',
    date: 'OCT 2024',
    credentialId: 'NPTEL24CS95S455400557',
    url: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs95/Course/NPTEL24CS95S45540055703802513.pdf',
    platform: 'NPTEL E-Certificate',
  },
  {
    name: 'Privacy & Security in Online Social Media',
    issuer: 'NPTEL',
    date: 'APR 2024',
    credentialId: 'NPTEL24CS04S1268600284',
    url: 'https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs04/Course/NPTEL24CS04S126860028430301905.pdf',
    platform: 'NPTEL E-Certificate',
  },
  {
    name: 'Introduction to Machine Learning',
    issuer: 'NPTEL',
    date: 'OCT 2023',
    credentialId: 'NPTEL23CS98S847800531',
    url: 'https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs98/Course/NPTEL23CS98S84780053120002086.pdf',
    platform: 'NPTEL E-Certificate',
  },
]

export default function Skills() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const cardWidth = container.firstElementChild?.clientWidth || 550
      const scrollAmount = direction === 'left' ? -(cardWidth + 24) : (cardWidth + 24)
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const cardWidth = container.firstElementChild?.clientWidth || 550
      const newIndex = Math.round(container.scrollLeft / (cardWidth + 24))
      setActiveIndex(Math.min(experiences.length - 1, Math.max(0, newIndex)))
    }
  }

  useEffect(() => {
    const container = scrollRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto select-none">
      <hr className="section-rule" />

      {/* Header and Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
        <div>
          <span className="label block mb-2">CAREER &amp; WORK HISTORY</span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-[var(--text)]">
            EXPERIENCE <br />
            <span className="metallic-text">
              <ScrambleText text="& ARCHITECTURE" />
            </span>
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-4">
          <div className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase">
            <span>{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="mx-2">/</span>
            <span>{String(experiences.length).padStart(2, '0')}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="circle-btn w-11 h-11 text-base hover:scale-105 active:scale-95"
              aria-label="Scroll left"
              data-cursor-text="PREV"
            >
              <FiArrowLeft />
            </button>
            <button
              onClick={() => scroll('right')}
              className="circle-btn w-11 h-11 text-base hover:scale-105 active:scale-95"
              aria-label="Scroll right"
              data-cursor-text="NEXT"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="w-[88vw] sm:w-[620px] shrink-0 snap-start p-8 md:p-10 bg-[var(--surface)] border border-[var(--border)] rounded-2xl flex flex-col justify-between hover:border-[var(--text)] transition-all duration-300 group"
          >
            <div>
              {/* Top Meta */}
              <div className="flex justify-between items-start gap-4 mb-6">
                <div>
                  <span className="available-badge text-[9px] mb-2 inline-flex">
                    <span className="available-dot" />
                    {exp.badge}
                  </span>
                  <p className="font-mono text-xs text-[var(--muted)] tracking-wider uppercase mt-1">
                    {exp.company} &bull; {exp.type}
                  </p>
                </div>

                <span className="metallic-text font-black font-mono text-xl sm:text-2xl tracking-tight text-right whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Role Title */}
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[var(--text)] mb-6">
                {exp.role}
              </h3>

              {/* Highlights List */}
              <ul className="space-y-3 font-normal text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                {exp.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[var(--text)] font-mono shrink-0 mt-0.5">↳</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-6 border-t border-[var(--border)] mt-8">
              <span className="label block text-[9px] mb-2.5">TECH STACK</span>
              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map(tech => (
                  <span key={tech} className="skill-pill text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications & Licenses Strip */}
      <div className="mt-20 pt-12 border-t border-[var(--border)]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div>
            <span className="label block mb-2">LICENSES &amp; CERTIFICATIONS</span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[var(--text)]">
              LICENSES &amp; <span className="metallic-text">CERTIFICATIONS</span>
            </h3>
          </div>
          <span className="font-mono text-xs text-[var(--muted)]">5 VERIFIED</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded-xl flex flex-col justify-between hover:border-[var(--text)] transition-all group"
              data-cursor-text="VERIFY"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-3">
                  <span className="skill-pill text-[9px] font-bold">
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-[10px] text-[var(--muted)]">
                    {cert.date}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[var(--text)] leading-snug mb-2 group-hover:underline">
                  {cert.name}
                </h4>

                <p className="font-mono text-[10px] text-[var(--muted)] truncate">
                  ID: {cert.credentialId}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--border)] flex justify-between items-center font-mono text-[10px] text-[var(--text)]">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <FiCheckCircle className="text-xs" />
                  <span>VERIFIED</span>
                </span>
                <span className="flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>{cert.platform}</span>
                  <FiExternalLink />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
