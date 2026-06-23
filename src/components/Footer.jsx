export default function Footer() {
  return (
    <footer className="py-6 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-slate-700">
        <p>© 2026 Muhamad Sayid Amanulloh</p>
        <p>
          <span className="text-emerald-400/50">{'>'}</span>
          {' '}Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
