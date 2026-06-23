const PROJECTS = [
  {
    emoji: '📚',
    title: 'Online Library System',
    description:
      'Full-stack web application for library management featuring complete book inventory, member accounts, and borrow/return transaction tracking. Secured with JWT authentication and built on a normalized relational database schema.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'REST API', 'Middleware'],
    github: 'https://github.com/sayid31/online_library_system',
    demo: null,
  },
  {
    emoji: '♻️',
    title: 'Sauber Composter — IoT',
    description:
      'Automated organic waste composter controlled by ESP32. Continuously monitors temperature, humidity, and pressure (DHT22 + BMP280) to autonomously regulate pump and cooling fan cycles. Operational data transmitted to a web dashboard.',
    tech: ['ESP32', 'Arduino C++', 'MySQL', 'React', 'Node.js', 'Fuzzy Logic'],
    github: 'https://github.com/sayid31/sauber-composter',
    demo: 'https://composter.my.id',
  },
  {
    emoji: '🍔',
    title: 'POS & Food Ordering System',
    description:
      'Interactive point-of-sale interface for fast-food operations featuring real-time cart state management, automatic tax calculation, and order ticket generation. Built for high-throughput order processing.',
    tech: ['React', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/sayid31/burger-pos-system',
    demo: 'https://sayid31.github.io/burger-pos-system/',
  },
  {
    emoji: '⚙️',
    title: '// next_project.init()',
    description:
      'A new project is currently in progress. Follow my GitHub to stay updated.',
    tech: [],
    github: null,
    demo: null,
    placeholder: true,
  },
]

function GitHubIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs font-semibold text-emerald-400 mb-3 tracking-widest">
          // featured_projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
          Featured Projects
        </h2>
        <p className="text-slate-500 mb-14 max-w-md">
          A selection of projects that showcase my work across web and IoT
          engineering.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className={`rounded-xl border transition-all duration-300 group ${
                project.placeholder
                  ? 'border-slate-800/50 border-dashed bg-slate-900/20'
                  : 'border-slate-800 bg-slate-900 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-neon-emerald'
              }`}
            >
              <div className="p-6">
                <div className="text-3xl mb-4">{project.emoji}</div>

                <h3
                  className={`font-semibold text-base mb-2 ${
                    project.placeholder ? 'font-mono text-slate-600' : 'text-slate-100'
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    project.placeholder ? 'text-slate-700' : 'text-slate-400'
                  }`}
                >
                  {project.description}
                </p>

                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 font-mono text-xs bg-slate-950 border border-slate-800 rounded text-cyan-400/70 group-hover:text-cyan-400 transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {!project.placeholder && (
                  <div className="flex gap-2.5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-emerald-400 border border-slate-800 rounded-lg hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-200"
                      >
                        <GitHubIcon />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-slate-400 border border-slate-800 rounded-lg hover:border-slate-600 hover:text-slate-200 transition-all duration-200"
                      >
                        <ExternalLinkIcon />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
