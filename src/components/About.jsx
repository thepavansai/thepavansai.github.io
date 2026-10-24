import { motion } from 'framer-motion'
import { FiExternalLink, FiBookOpen } from 'react-icons/fi'
import ScrambleText from './ScrambleText'

const skills = [
  'Python (FastAPI)', 'Java (Spring Boot)', 'React', 'Next.js',
  'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'AI / LLM Pipelines',
  'Deterministic Routing', 'AST Parsing', 'Microservices', 'REST APIs',
  'TypeScript', 'Git', 'Linux', 'Tailwind CSS', 'Go'
]

const areas = [
  {
    code: '01',
    title: 'AI-INTEGRATED SYSTEMS',
    desc: 'Retrieval-grounded query pipelines that let people talk to enterprise data in plain language. Hybrid rule + LLM evaluation engines, deterministic intent routing, and making AI systems reliable instead of just impressive in a demo.',
  },
  {
    code: '02',
    title: 'BACKEND SYSTEMS',
    desc: 'Production-ready APIs and distributed services in Python (FastAPI) and Java (Spring Boot), backed by PostgreSQL, MySQL, and Redis, shipped through Docker.',
  },
  {
    code: '03',
    title: 'FULL-STACK APPS',
    desc: 'High-performance React and Next.js frontends tightly integrated with robust, observable backend architectures and asynchronous task queues.',
  },
  {
    code: '04',
    title: 'ENGINEERING PRINCIPLE',
    desc: 'I care more about software that survives contact with production than software that looks good in a demo. Build things. Learn constantly. Make them better.',
  },
]

const ease = [0.16, 1, 0.3, 1]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-[1440px] mx-auto">
      <hr className="section-rule" />

      {/* Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="label block mb-2">ABOUT &amp; FOCUS</span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[var(--text)]">
              BUILDING <br />
              <span className="metallic-text">
                <ScrambleText text="END-TO-END" />
              </span>
            </h2>
          </div>

          <div className="space-y-4 text-sm md:text-base text-[var(--muted)] leading-relaxed font-normal">
            <p>
              Hey, I&apos;m <strong className="text-[var(--text)] font-semibold">Pavan Sai</strong>.
            </p>
            <p>
              I build things end to end - backend services, APIs, full-stack apps, and lately, a lot of AI-integrated systems.
            </p>
            <p className="border-l-2 border-[var(--text)] pl-4 text-[var(--text)] italic text-sm">
              &ldquo;I care more about software that survives contact with production than software that looks good in a demo.&rdquo;
            </p>
            <p>
              My stack centers around Python (FastAPI), Java (Spring Boot), PostgreSQL, MySQL, and Redis, deployed via Docker with React / Next.js frontends wired directly into the core.
            </p>
          </div>

          {/* Medium Writing Link Pill */}
          <div className="pt-2">
            <a
              href="https://medium.com/@thepavansaii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 p-3 px-5 rounded-full border border-[var(--border)] hover:border-[var(--text)] transition-colors group"
              data-cursor-text="READ"
            >
              <FiBookOpen className="text-base" />
              <div className="text-left font-mono text-xs">
                <span className="block font-bold uppercase tracking-wider text-[var(--text)]">
                  READING &amp; WRITING ON MEDIUM
                </span>
                <span className="text-[10px] text-[var(--muted)]">
                  Notes on software engineering &amp; lessons learned the hard way
                </span>
              </div>
              <FiExternalLink className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Skills Tag Cloud */}
          <div className="pt-2">
            <span className="label block mb-3">TECHNICAL SPECS</span>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-pill"
                  data-cursor-text={skill.toUpperCase()}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 4 Architecture Bento Pillars (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {areas.map((a, i) => (
            <motion.div
              key={a.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-2xl flex flex-col justify-between space-y-6 hover:border-[var(--text)] transition-colors group"
            >
              <div className="flex justify-between items-start font-mono text-xs text-[var(--muted)]">
                <span>// DOMAIN_SPEC</span>
                <span className="text-[var(--text)] font-bold">{a.code}</span>
              </div>

              <div>
                <h3 className="font-mono text-sm font-bold tracking-wider uppercase text-[var(--text)] mb-2 group-hover:metallic-text transition-colors">
                  {a.title}
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  {a.desc}
                </p>
              </div>

              <div className="w-full h-[1px] bg-[var(--border)] group-hover:bg-[var(--text)] transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
