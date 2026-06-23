import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#about',    label: 'About'    },
  { href: '#skills',   label: 'Skills'   },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo — monospace */}
        <a
          href="#"
          className="font-mono text-base font-bold text-emerald-400 tracking-tight hover:text-emerald-300 transition-colors"
        >
          Sayid_Dev31<span className="animate-pulse">_</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="font-mono text-sm text-slate-500 hover:text-slate-100 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://drive.google.com/file/d/1iB3b8XqmIDO-ItkILu9vm0xmOSW3MUvA/view?usp=sharing"
          download
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 font-mono text-sm text-slate-400 border border-slate-700 rounded-lg hover:border-emerald-500/60 hover:text-emerald-400 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          ./cv.pdf
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 text-slate-500 hover:text-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800">
          <ul className="flex flex-col px-4 py-4 gap-4">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-mono text-sm text-slate-500 hover:text-slate-100 transition-colors block"
                  onClick={() => setMenuOpen(false)}
                >
                  ./{label.toLowerCase()}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-slate-800">
              <a href="https://drive.google.com/file/d/1iB3b8XqmIDO-ItkILu9vm0xmOSW3MUvA/view?usp=sharing" download className="font-mono text-sm text-emerald-400 font-medium">
                --download-cv →
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
