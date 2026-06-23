const SKILL_GROUPS = [
  {
    id:    'SRV-01',
    label: 'BACKEND_ARCH',
    dot:   'bg-cyan-400',
    labelColor: 'text-cyan-400',
    skills: [
      { name: 'Node.js',        level: 82 },
      { name: 'Express',        level: 80 },
      { name: 'PostgreSQL',     level: 72 },
      { name: 'MongoDB',        level: 70 },
      { name: 'JWT / API Sec.', level: 76 },
    ],
  },
  {
    id:    'SRV-02',
    label: 'FRONTEND_DEV',
    dot:   'bg-emerald-400',
    labelColor: 'text-emerald-400',
    skills: [
      { name: 'React',          level: 80 },
      { name: 'Vanilla JS',     level: 84 },
      { name: 'Tailwind CSS',   level: 88 },
      { name: 'HTML & CSS',     level: 92 },
    ],
  },
  {
    id:    'SRV-03',
    label: 'HARDWARE_IoT',
    dot:   'bg-orange-400',
    labelColor: 'text-orange-400',
    skills: [
      { name: 'Microcontroller Programming', level: 85 }, 
      { name: 'Sensor Integration & Calibration', level: 82 }, 
      { name: 'Actuator Logic Control', level: 80 }, 
      { name: 'Fuzzy Logic Implementation', level: 75 }, 
      { name: 'IoT Telemetry & Networking', level: 78 }, 
    ],
  },
]

// Build ASCII bar: 12 blocks total
function bar(level) {
  const filled = Math.round((level / 100) * 12)
  return '█'.repeat(filled) + '░'.repeat(12 - filled)
}

function SkillRow({ name, level }) {
  return (
    <div className="group flex items-center gap-2 px-4 py-2.5 border-l-2 border-transparent hover:border-emerald-500 hover:bg-slate-800/40 transition-all duration-150 cursor-default">
      {/* Skill name */}
      <span className="font-mono text-[11px] text-slate-500 group-hover:text-emerald-400 transition-colors w-32 shrink-0 truncate">
        {name}
      </span>

      {/* Dot-fill spacer */}
      <span
        aria-hidden
        className="flex-1 text-[8px] text-slate-800 leading-none overflow-hidden"
        style={{ letterSpacing: '0.05em' }}
      >
        {'·'.repeat(24)}
      </span>

      {/* ASCII progress bar */}
      <span className="font-mono text-[10px] text-emerald-600/70 group-hover:text-emerald-400 transition-colors shrink-0 tracking-tighter">
        [{bar(level)}]
      </span>

      {/* Percentage */}
      <span className="font-mono text-[9px] text-slate-700 w-7 text-right shrink-0">
        {level}%
      </span>
    </div>
  )
}

function ServerCard({ id, label, dot, labelColor, skills }) {
  const avg = Math.round(skills.reduce((s, k) => s + k.level, 0) / skills.length)

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden hover:border-slate-700 hover:shadow-neon-emerald transition-all duration-300 group/card">

      {/* ── Server rack header ─── */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800/70">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[9px] text-slate-700 border border-slate-800 px-1.5 py-0.5 rounded">
            {id}
          </span>
          <span className={`font-mono text-xs font-bold ${labelColor}`}>
            ▸ {label}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${dot} animate-pulse`} />
          <span className="font-mono text-[9px] text-slate-700">ACTIVE</span>
        </div>
      </div>

      {/* ── Skill rows ─────────── */}
      <div className="py-1">
        {skills.map(({ name, level }) => (
          <SkillRow key={name} name={name} level={level} />
        ))}
      </div>

      {/* ── Footer ─────────────── */}
      <div className="px-4 py-2.5 border-t border-slate-800/50 flex items-center justify-between">
        <span className="font-mono text-[9px] text-slate-700">
          {skills.length} modules
        </span>
        {/* Mini avg bar */}
        <div className="flex items-center gap-2">
          <div className="w-16 h-0.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500/60 rounded-full"
              style={{ width: `${avg}%` }}
            />
          </div>
          <span className="font-mono text-[9px] text-emerald-700">avg {avg}%</span>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <p className="font-mono text-xs text-emerald-400 mb-3 tracking-widest">
          // technical_arsenal
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-3">
          Technical Arsenal
        </h2>

        {/* Terminal-style subtitle */}
        <p className="font-mono text-sm text-slate-600 mb-14">
          <span className="text-slate-700">$ </span>
          <span className="text-slate-500">cat skills.json</span>
          <span className="text-slate-700"> | </span>
          <span className="text-slate-500">grep</span>
          <span className="text-emerald-600"> --active</span>
          <span className="text-slate-700"> --sort=proficiency</span>
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group) => (
            <ServerCard key={group.id} {...group} />
          ))}
        </div>

        {/* System status bar */}
        <div className="mt-8 flex items-center gap-3 font-mono text-[10px] text-slate-700">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>All systems operational</span>
          <span className="text-slate-800">·</span>
          <span>
            {SKILL_GROUPS.reduce((s, g) => s + g.skills.length, 0)} skills loaded
          </span>
          <span className="text-slate-800">·</span>
          <span className="text-slate-800">node v20.x · react v18.x</span>
        </div>
      </div>
    </section>
  )
}
