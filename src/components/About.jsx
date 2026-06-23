// ── Syntax-highlight helpers ──────────────────
const Kw = ({ children }) => <span className="text-violet-400">{children}</span>
const Fn = ({ children }) => <span className="text-sky-400">{children}</span>
const Pk = ({ children }) => <span className="text-cyan-300">{children}</span>
const Sv = ({ children }) => <span className="text-emerald-400">{children}</span>
const Tl = ({ children }) => <span className="text-amber-400/90">{children}</span>
const Bv = ({ children }) => <span className="text-orange-400">{children}</span>
const Cm = ({ children }) => <span className="text-slate-600 italic">{children}</span>
const Op = ({ children }) => <span className="text-slate-500">{children}</span>

function Line({ n, children }) {
  return (
    <div className="flex items-start min-h-[1.75rem]">
      <span className="select-none text-right w-7 shrink-0 mr-5 text-slate-700 text-[10px] leading-7">
        {n}
      </span>
      <span className="flex-1 font-mono text-[11.5px] leading-7 whitespace-pre">
        {children}
      </span>
    </div>
  )
}

// ── Avatar ────────────────────────────────────
function Avatar() {
  return (
    <div className="relative group cursor-pointer select-none">
      {/* Spinning dashed outer ring */}
      <div className="absolute -inset-4 rounded-2xl border border-dashed border-emerald-500/15 animate-spin-slow pointer-events-none" />

      {/* Card */}
      <div className="relative w-44 h-44 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center gap-2 overflow-hidden group-hover:border-emerald-500/50 group-hover:shadow-neon-emerald transition-all duration-500">

        {/* Corner viewfinder brackets */}
        {[['top-3 left-3',  'border-t-2 border-l-2'],
          ['top-3 right-3', 'border-t-2 border-r-2'],
          ['bottom-3 left-3',  'border-b-2 border-l-2'],
          ['bottom-3 right-3', 'border-b-2 border-r-2'],
        ].map(([pos, border]) => (
          <div
            key={pos}
            className={`absolute ${pos} w-4 h-4 ${border} border-emerald-500/30 group-hover:border-emerald-400 transition-colors duration-300`}
          />
        ))}

        {/* Typographic logo — glitch on hover */}
        <span className="glitch-text font-mono font-extrabold text-2l text-emerald-400 group-hover:text-emerald-300 transition-colors duration-150">
          &lt;Sayid_Dev31/&gt;
        </span>
        <span className="font-mono text-[9px] text-slate-700 tracking-[0.22em] uppercase">
          v1.0.0-dev
        </span>

        {/* Scan line overlay on hover */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(52,211,153,0.025) 3px, rgba(52,211,153,0.025) 4px)',
          }}
        />
      </div>
    </div>
  )
}

// ── Component ─────────────────────────────────
export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">

        <p className="font-mono text-xs text-emerald-400 mb-2 tracking-widest">// about_me</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-10 leading-snug">
          Developer Story
        </h2>

        <div className="grid md:grid-cols-[1fr_190px] gap-8 items-start">

          {/* ── VS Code-style editor ───────────── */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl">

            {/* Title bar */}
            <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-950/60">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 flex items-center gap-2">
                <span className="font-mono text-xs text-slate-400">about.js</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70 inline-block" title="unsaved" />
              </div>
              <div className="ml-auto flex gap-4">
                <span className="font-mono text-[10px] text-slate-700">JavaScript</span>
                <span className="font-mono text-[10px] text-slate-700">UTF-8</span>
                <span className="font-mono text-[10px] text-slate-700">Ln 33</span>
              </div>
            </div>

            {/* Code body */}
            <div className="p-4 overflow-x-auto editor-scroll">
              <Line n={1}><Kw>const </Kw><Fn>getAboutMe</Fn><Op> = () =&gt; {'{'}</Op></Line>
              <Line n={2}><Op>{'  return {'}</Op></Line>
              <Line n={3}></Line>
              <Line n={4}><Cm>    // ── Identity ──────────────────────────────</Cm></Line>
              <Line n={5}><Op>{'    '}</Op><Pk>name</Pk><Op>:    </Op><Sv>"Muhamad Sayid Amanulloh"</Sv><Op>,</Op></Line>
              <Line n={6}><Op>{'    '}</Op><Pk>role</Pk><Op>:    </Op><Sv>"Fullstack Web + IoT Engineer"</Sv><Op>,</Op></Line>
              <Line n={7}><Op>{'    '}</Op><Pk>degree</Pk><Op>:  </Op><Sv>"Computer Systems Engineer. @ INSTI"</Sv><Op>,</Op></Line>
              <Line n={8}></Line>
              <Line n={9}><Cm>    // ── Vision ────────────────────────────────</Cm></Line>
              <Line n={10}><Op>{'    '}</Op><Pk>vision</Pk><Op>: </Op><Sv>"Collapse the gap between physical hardware"</Sv></Line>
              <Line n={11}><Op>{'             '}</Op><Sv>"and the scalable digital web"</Sv><Op>,</Op></Line>
              <Line n={12}></Line>
              <Line n={13}><Cm>    // ── Story ─────────────────────────────────</Cm></Line>
              <Line n={14}><Op>{'    '}</Op><Pk>story</Pk><Op>: </Op><Tl>{'`'}</Tl></Line>
              <Line n={15}><Tl>      I am a Computer Systems Engineering student</Tl></Line>
              <Line n={16}><Tl>      focusing on IoT and Web Development integration.</Tl></Line>
              <Line n={17}><Tl>      Experienced in designing environmental automation</Tl></Line>
              <Line n={18}><Tl>      systems and leading a team to win a campus</Tl></Line>
              <Line n={19}><Tl>      innovation competition. Strongly committed to</Tl></Line>
              <Line n={20}><Tl>      continuous growth in the tech industry, currently</Tl></Line>
              <Line n={21}><Tl>      focusing on actively honing and deepening</Tl></Line>
              <Line n={22}><Tl>      my expertise in backend development.</Tl></Line>
              <Line n={23}><Op>{'    '}</Op><Tl>{'`'}</Tl><Op>,</Op></Line>
              <Line n={23}></Line>
              <Line n={24}><Cm>    // ── Community ─────────────────────────────</Cm></Line>
              <Line n={25}><Op>{'    '}</Op><Pk>activities</Pk><Op>: [</Op></Line>
              <Line n={26}><Op>{'      '}</Op><Sv>"Active in campus tech innovation community"</Sv><Op>,</Op></Line>
              <Line n={27}><Op>{'      '}</Op><Sv>"Hackathon & applied research collaborations"</Sv><Op>,</Op></Line>
              <Line n={28}><Op>{'    '}</Op><Op>],</Op></Line>
              <Line n={29}></Line>
              <Line n={30}><Cm>    // ── Status ────────────────────────────────</Cm></Line>
              <Line n={31}><Op>{'    '}</Op><Pk>thesis</Pk><Op>:    </Op><Sv>"pending_defense"</Sv><Op>,</Op></Line>
              <Line n={32}><Op>{'    '}</Op><Pk>available</Pk><Op>: </Op><Bv>true</Bv><Op>,</Op></Line>
              <Line n={33}><Op>{'  '}</Op><Op>{'}'}</Op></Line>
              <Line n={34}><Op>{'}'}</Op></Line>
              <Line n={35}></Line>
              <Line n={36}><Kw>export default </Kw><Fn>getAboutMe</Fn></Line>

              {/* Blinking cursor */}
              <div className="flex items-start mt-1">
                <span className="select-none w-7 shrink-0 mr-5 text-slate-700 text-[10px] leading-7 text-right">37</span>
                <span className="inline-block w-2 h-[18px] bg-emerald-400 animate-pulse mt-[5px]" />
              </div>
            </div>
          </div>

          {/* ── Avatar — floating, asymmetric ─── */}
          <div className="md:sticky md:top-28 flex justify-center md:justify-start md:-mt-2 md:rotate-1">
            <Avatar />
          </div>

        </div>
      </div>
    </section>
  )
}
