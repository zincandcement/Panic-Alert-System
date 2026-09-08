export default function CopyrightFooter() {
  return (
    <div className="text-center mt-8 text-[11px] text-slate-500 leading-relaxed">
      <p>© 2024 SENTINOA IoT Systems. All rights reserved.</p>
      <div className="flex justify-center gap-3 mt-2">
        <a href="#" className="hover:text-slate-300">Privacy Policy</a>
        <a href="#" className="hover:text-slate-300">Terms of Service</a>
        <a href="#" className="hover:text-slate-300">Compliance</a>
        <a href="#" className="hover:text-slate-300">Security</a>
      </div>
    </div>
  );
}