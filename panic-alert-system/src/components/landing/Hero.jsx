export default function Hero() {
  return (
    <section className="px-8 py-16 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
      <div>
        <span className="inline-block text-xs font-semibold text-green-800 bg-green-50 border border-green-200 rounded-full px-3 py-1 mb-4">
          🛡 UNIVERSITY SAFETY STANDARD
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Your Safety,<br />
          <span className="text-green-800">Our Priority</span>
        </h1>
        <p className="text-slate-500 mt-4 max-w-md">
          Join over 150 medical centers and 40 university campuses worldwide already protected by SENTINOA.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="bg-green-800 hover:bg-green-900 text-white font-semibold px-5 py-3 rounded-lg flex items-center gap-2">
            Deploy System <span>→</span>
          </button>
          <button className="border border-slate-300 text-slate-700 font-semibold px-5 py-3 rounded-lg hover:bg-slate-50">
            View Demo
          </button>
        </div>
        <div className="flex gap-10 mt-10 border-t border-slate-200 pt-6">
          <div>
            <p className="text-2xl font-extrabold text-slate-900">99.9%</p>
            <p className="text-xs text-slate-500 tracking-wide">UPTIME RELIABILITY</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-slate-900">&lt;2s</p>
            <p className="text-xs text-slate-500 tracking-wide">ALERT LATENCY</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 rounded-2xl h-72 md:h-96 shadow-inner" />
    </section>
  );
}