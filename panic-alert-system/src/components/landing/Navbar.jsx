export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#f4f8f4]">
      <span className="text-xl font-extrabold text-green-800 tracking-wide">SENTINOA</span>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
        <a href="#" className="text-green-800 border-b-2 border-green-800 pb-1">Dashboard</a>
        <a href="#" className="hover:text-green-800">History</a>
        <a href="#" className="hover:text-green-800">Resources</a>
        <a href="#" className="hover:text-green-800">Support</a>
      </div>
      <div className="flex items-center gap-4 text-slate-500">
        <button aria-label="Notifications">🔔</button>
        <button aria-label="Settings">⚙️</button>
        <button aria-label="Account">👤</button>
      </div>
    </nav>
  );
}