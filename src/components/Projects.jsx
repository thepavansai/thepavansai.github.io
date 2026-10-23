import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiChevronDown, FiCopy, FiCheck, FiTerminal, FiMaximize2 } from 'react-icons/fi'
import ScrambleText from './ScrambleText'

const projects = [
  {
    num: '01',
    name: 'Change Impact Analyzer',
    tagline: 'Deterministic Java Dependency Graph Analyzer',
    subtitle: 'Answers: "If I merge this change, what could I break?"',
    category: 'CI/CD & AST Code Intelligence',
    stack: ['Python', 'Java', 'AST Analysis', 'CI/CD', 'GitHub Actions', 'Risk Assessment'],
    description:
      'A deterministic dependency-graph analyzer that answers "If I merge this change, what could I break?" It traces downstream impact, flags breaking public-API alterations before merge, and recommends targeted tests to run.',
    highlights: [
      'Traces downstream call chains and public API signature mutations deterministically',
      'Calculates risk-assessment scores before PR merges to prevent silent regressions',
      'Smart test suite recommendation based on AST-grounded impact radii',
    ],
    terminalOutput: [
      '$ change-impact-analyzer --diff PR-42.diff',
      '-> Parsing Java AST (not regex) into component dependency graph...',
      '-> Tracing downstream impact: Field changed from String to Optional<String>',
      '-> Blast radius detected across 6 dependent services:',
      '   ├── [API_BREAK] OrderService.updateItem() - signature mutation',
      '   ├── [DOWNSTREAM] BillingClient.processInvoice()',
      '   └── [TEST_SUITE] Recommended: OrderServiceTest, BillingRegressionIT',
      '-> Result: Risk Score 0.84 (HIGH) | Precision: 1.00 | Recall: 1.00',
    ],
    github: 'https://github.com/thepavansai/change-impact-analyzer',
    cloneCmd: 'git clone https://github.com/thepavansai/change-impact-analyzer.git',
  },
  {
    num: '02',
    name: 'Cric-Auction Platform',
    tagline: 'High-Performance Real-Time Bidding Engine',
    subtitle: 'Thread-safe FastAPI backend + React 18 / Vite frontend',
    category: 'Real-Time Distributed System',
    stack: ['Python', 'FastAPI', 'Pydantic', 'Uvicorn', 'React 18', 'Vite', 'Tailwind CSS'],
    image: './projects/cric-auction-preview.png',
    altImage: './projects/cric-auction-light.png',
    description:
      'A high-performance, thread-safe bidding backend and modern reactive client built for live cricket player auctions. Handles concurrent auction rooms, bid validation, timer states, and team budget constraints with zero database bottleneck.',
    highlights: [
      'Thread-safe in-memory state engine designed for high-concurrency real-time bidding',
      'Ultra-responsive live UI synchronized with auctioneer timers and team budgets',
      'Sub-millisecond state broadcasts and Excel-based player roster ingestion',
    ],
    github: 'https://github.com/thepavansai/cric-auction-backend',
    frontendGithub: 'https://github.com/thepavansai/cric-auction',
    cloneCmd: 'git clone https://github.com/thepavansai/cric-auction-backend.git',
  },
  {
    num: '03',
    name: 'Ascendant Initiative',
    tagline: 'Gamified Cognitive Training Engine',
    subtitle: 'Spring Boot + Next.js 16 + Hybrid Rule + AI Engine',
    category: 'AI-Integrated Backend & Frontend',
    stack: ['Java', 'Spring Boot', 'Next.js 16', 'Redis', 'PostgreSQL', 'Groq / LLMs', 'Docker'],
    image: './projects/ascendant-preview.png',
    description:
      'The Spring Boot brain and Next.js 16 platform behind Ascendant Initiative. A gamified cognitive training platform using a hybrid Rule + AI evaluation engine to score reasoning, judgment, and clarity with deterministic intent routing.',
    highlights: [
      'Hybrid evaluation pipeline combining deterministic rule engines with LLM scoring',
      'Redis session caching for sub-millisecond real-time scoring updates',
      'Role-based portals with Next.js 16, interactive missions, and Framer Motion animations',
    ],
    github: 'https://github.com/thepavansai/ascendant-backend',
    frontendGithub: 'https://github.com/thepavansai/ascendant-frontend',
    cloneCmd: 'git clone https://github.com/thepavansai/ascendant-backend.git',
  },
  {
    num: '04',
    name: 'HealthNest',
    tagline: 'Digital Healthcare Companion Platform',
    subtitle: 'Medical appointments & record workflows for patients and doctors',
    category: 'Full-Stack Platform',
    stack: ['JavaScript', 'React', 'Node.js / Express', 'PostgreSQL', 'Docker'],
    image: './projects/healthnest-preview.png',
    description:
      'A modern healthcare management platform streamlining doctor-patient workflows, appointment scheduling, and patient history records in a unified, secure portal.',
    highlights: [
      'Collision-proof scheduling algorithms for clinical appointments',
      'Role-based workflows separating patient self-service from physician dashboards',
      'Containerized environment with production-ready Docker deployment',
    ],
    github: 'https://github.com/thepavansai/HealthNest',
    cloneCmd: 'git clone https://github.com/thepavansai/HealthNest.git',
  },
  {
    num: '05',
    name: 'MicroCM',
    tagline: 'Cloud Monitoring Architecture',
    subtitle: 'Microservice invocation tracer & performance monitor',
    category: 'Distributed Systems Architecture',
    stack: ['Java', 'Microservices', 'Distributed Tracing', 'Cloud Architecture'],
    description:
      'A dedicated cloud monitoring and telemetry architecture designed for distributed microservice invocation tracking, latency observation, and service degradation detection.',
    highlights: [
      'Telemetry probes monitoring inter-service RPC latency and throughput',
      'Non-intrusive invocation tracking for decoupled microservice topologies',
      'Lightweight metrics aggregation for real-time observability',
    ],
    github: 'https://github.com/thepavansai/microcm',
    cloneCmd: 'git clone https://github.com/thepavansai/microcm.git',
  },
]

const ease = [0.16, 1, 0.3, 1]

function ProjectItem({ project, expanded, onToggle }) {
  const [copied, setCopied] = useState(false)

  const copyClone = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(project.cloneCmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={`border-t border-[var(--border)] transition-colors duration-300 ${
        expanded ? 'bg-[var(--surface)]' : 'hover:bg-[var(--surface)]/50'
      }`}
    >
      {/* Header Row */}
      <div
        onClick={onToggle}
        className="py-7 px-4 md:px-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
        data-cursor-text={expanded ? 'COLLAPSE' : 'EXPAND'}
      >
        <div className="flex items-baseline gap-6 md:gap-10">
          <span className="font-mono text-xs md:text-sm font-bold text-[var(--muted)]">
            {project.num}
          </span>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[var(--text)] flex items-center gap-3">
              <ScrambleText text={project.name} triggerOnHover={false} />
            </h3>
            <p className="font-mono text-xs text-[var(--muted)] tracking-wider uppercase mt-1">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Tech tags & Buttons */}
        <div className="flex items-center gap-4 flex-wrap md:flex-nowrap justify-between md:justify-end">
          <div className="hidden lg:flex items-center gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className="skill-pill text-[10px]">
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="skill-pill text-[10px]">+{project.stack.length - 3}</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="circle-btn w-10 h-10 text-sm hover:scale-110"
              aria-label="GitHub Repository"
              data-cursor-text="CODE"
            >
              <FiGithub />
            </a>

            <div
              className={`circle-btn w-10 h-10 text-sm transition-transform duration-300 ${
                expanded ? 'rotate-180 bg-[var(--text)] text-[var(--bg)]' : ''
              }`}
            >
              <FiChevronDown />
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Blueprint Details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            className="overflow-hidden px-4 md:px-14 pb-8"
          >
            <div className="pt-4 border-t border-[var(--border)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column (7 cols): Description, Highlights, and Visual Mockup */}
              <div className="lg:col-span-7 space-y-5">
                <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
                  {project.description}
                </p>

                {/* Live Visual Showcase: Image Mockup or Terminal */}
                {project.image && (
                  <div className="mt-4 rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg)] shadow-xl group/mockup">
                    <div className="px-3 py-2 bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between font-mono text-[10px] text-[var(--muted)]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80 inline-block" />
                        <span className="ml-2 font-semibold text-[var(--text)]">{project.name} // LIVE UI</span>
                      </div>
                      <span>1920x1080 RENDER</span>
                    </div>
                    <div className="max-h-[360px] overflow-hidden bg-black/5 dark:bg-black/40">
                      <img
                        src={project.image}
                        alt={`${project.name} Interface Screenshot`}
                        className="w-full object-cover object-top transition-transform duration-700 group-hover/mockup:scale-102"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}

                {project.terminalOutput && (
                  <div className="mt-4 rounded-xl overflow-hidden border border-[var(--border)] bg-[#0C0D0E] text-neutral-300 font-mono text-xs p-4 shadow-xl">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-[10px] text-neutral-500">
                      <div className="flex items-center gap-1.5">
                        <FiTerminal className="text-emerald-400" />
                        <span className="text-neutral-300 font-bold">CHANGE_IMPACT_CLI</span>
                      </div>
                      <span>DETERMINISTIC_AST_ANALYZER</span>
                    </div>
                    <div className="space-y-1.5">
                      {project.terminalOutput.map((line, idx) => (
                        <p
                          key={idx}
                          className={`${
                            line.startsWith('$')
                              ? 'text-white font-bold'
                              : line.includes('HIGH')
                              ? 'text-amber-400 font-bold'
                              : line.includes('API_BREAK')
                              ? 'text-red-400'
                              : line.includes('Result:')
                              ? 'text-emerald-400 font-bold'
                              : 'text-neutral-400'
                          }`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2 pt-2">
                  <span className="label block">KEY ENGINEERING ATTRIBUTES</span>
                  <ul className="space-y-1.5 font-mono text-xs text-[var(--text)]">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[var(--muted)]">↳</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column (5 cols): Tech Stack & Repo Quick Clone */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <span className="label block mb-2">COMPLETE ARCHITECTURE STACK</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span key={t} className="skill-pill text-[10px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl space-y-2 shadow-sm">
                  <span className="label text-[9px] block">QUICK TERMINAL CLONE</span>
                  <div className="flex items-center justify-between font-mono text-[11px] text-[var(--muted)]">
                    <span className="truncate pr-2">{project.cloneCmd}</span>
                    <button
                      onClick={copyClone}
                      className="p-1.5 hover:text-[var(--text)] transition-colors"
                      title="Copy clone command"
                      data-cursor-text={copied ? 'COPIED' : 'COPY'}
                    >
                      {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap font-mono text-xs uppercase tracking-widest text-[var(--text)]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                    data-cursor-text="GITHUB"
                  >
                    <span>SOURCE REPO</span>
                    <FiExternalLink />
                  </a>
                  {project.frontendGithub && (
                    <a
                      href={project.frontendGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--text)] hover:underline"
                      data-cursor-text="CLIENT"
                    >
                      <span>CLIENT UI APP</span>
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
      <hr className="section-rule" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="label block mb-2">FEATURED CODEBASES</span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-[var(--text)]">
            SELECTED <br />
            <span className="metallic-text">PROJECTS</span>
          </h2>
        </div>

        <div className="text-right">
          <p className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase">
            5 FEATURED REPOSITORIES
          </p>
          <p className="font-mono text-[11px] text-[var(--muted)] mt-1">
            CLICK ANY ROW TO VIEW LIVE SCREENS &amp; ARCHITECTURE
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="border-b border-[var(--border)]">
        {projects.map((p, idx) => (
          <ProjectItem
            key={p.num}
            project={p}
            expanded={expandedIndex === idx}
            onToggle={() => setExpandedIndex(expandedIndex === idx ? -1 : idx)}
          />
        ))}
      </div>
    </section>
  )
}
