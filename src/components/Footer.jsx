import { FiGithub, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full border-t border-[var(--border)] py-8 px-6 md:px-12 bg-[var(--bg)] select-none">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="metallic-text font-black text-sm tracking-wider uppercase">
            PAVAN SAI
          </span>
          <span className="font-mono text-[10px] text-[var(--muted)]">
            // FULL-STACK SOFTWARE ENGINEER
          </span>
        </div>

        {/* Copyright */}
        <p className="font-mono text-[11px] text-[var(--muted)] tracking-wider uppercase text-center sm:text-left">
          &copy; {new Date().getFullYear()} G. Pavan Sai Sriram. Built with React &amp; Tailwind.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/thepavansai"
            target="_blank"
            rel="noopener noreferrer"
            className="circle-btn w-9 h-9 text-sm"
            aria-label="GitHub Profile"
            data-cursor-text="GITHUB"
          >
            <FiGithub />
          </a>
          <button
            onClick={scrollToTop}
            className="circle-btn w-9 h-9 text-sm"
            aria-label="Back to Top"
            data-cursor-text="TOP"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}
