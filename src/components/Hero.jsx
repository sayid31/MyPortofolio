export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">

      {/* Radial emerald glow — very subtle */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 38%, rgba(52,211,153,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* ── Terminal pre-loader line ─────────────── */}
        <div className="flex items-center justify-center gap-1 font-mono text-sm mb-8">
          <span className="text-slate-600 select-none">~/portfolio </span>
          <span className="typewriter text-emerald-400">
            $ sudo start-portfolio --user=Sayid_Dev31
          </span>
        </div>

        {/* ── Status badge ─────────────────────────── */}
        <div className="hero-reveal inline-flex items-center gap-2 px-3 py-1.5 mb-7 rounded border border-emerald-500/20 bg-emerald-500/5 font-mono text-xs text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          [available_for_hire: true]
        </div>

        {/* ── Name ─────────────────────────────────── */}
        <div className="hero-reveal-2">
          <h1 className="text-4xl sm:text-5xl md:text-[3.6rem] font-extrabold leading-[1.1] tracking-tight mb-5">
            <span className="text-slate-100">Muhamad Sayid</span>
            <br />
            <span className="text-emerald-400">Amanulloh</span>
          </h1>

          {/* Role — monospace */}
          <p className="font-mono text-sm sm:text-base text-cyan-400 mb-5">
            &gt;&nbsp;Fullstack Web Developer{' '}
            <span className="text-slate-700">&&</span>
            {' '}IoT Engineer
          </p>

          {/* Tagline */}
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            I build reliable web systems and IoT solutions — from REST APIs to
            microcontroller integrations — bridging software and hardware for
            real-world impact.
          </p>
        </div>

        {/* ── CTAs — command-line style ─────────────── */}
        <div className="hero-reveal-3 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-semibold text-sm rounded-lg transition-colors duration-200"
          >
            ./view-projects
          </a>
          <a
            href="https://drive.google.com/file/d/1iB3b8XqmIDO-ItkILu9vm0xmOSW3MUvA/view?usp=sharing"
            download
            className="inline-flex items-center gap-1.5 px-6 py-2.5 border border-slate-700 hover:border-emerald-500/60 text-slate-300 hover:text-emerald-400 font-mono text-sm rounded-lg transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            --download-cv
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 border border-slate-800 hover:border-slate-600 text-slate-600 hover:text-slate-300 font-mono text-sm rounded-lg transition-all duration-200"
          >
            contact --me
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-700 hover:text-emerald-400 transition-colors"
        aria-label="Scroll down"
      >
        <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}
