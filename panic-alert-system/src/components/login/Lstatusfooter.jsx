export default function StatusFooter() {
  return (
    <>
      <div className="flex justify-center mt-6">
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 bg-slate-100 border border-slate-200 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          SYSTEMS NOMINAL
        </span>
      </div>
      <div className="flex justify-center gap-4 mt-3 text-xs text-slate-400">
        <a href="#" className="hover:text-slate-600">Compliance</a>
        <a href="#" className="hover:text-slate-600">Security Docs</a>
        <a href="#" className="hover:text-slate-600">Support</a>
      </div>
    </>
  );
}