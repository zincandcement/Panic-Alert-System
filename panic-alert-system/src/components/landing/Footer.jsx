const columns = [
  {
    title: "PRODUCT",
    links: ["Devices", "Software", "Enterprise API", "Case Studies"],
  },
  {
    title: "COMPANY",
    links: ["About Us", "Careers", "Press", "Contact"],
  },
  {
    title: "LEGAL",
    links: ["Privacy Policy", "Terms of Service", "Compliance", "Security"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white px-8 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <span className="text-lg font-extrabold text-green-800">SENTINOA</span>
          <p className="text-sm text-slate-500 mt-2 max-w-xs">
            Setting the global standard for personal protection in high-stakes environments through innovative IoT solutions.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-xs font-semibold text-slate-500 mb-3">{col.title}</p>
            <ul className="space-y-2 text-sm text-slate-600">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-green-800 underline">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto border-t border-slate-200 mt-10 pt-6 flex justify-between items-center text-xs text-slate-400">
        <p>© 2024 SENTINOA IoT Systems. All rights reserved.</p>
        <div className="flex gap-3">
          <span>🌐</span>
          <span>🔗</span>
        </div>
      </div>
    </footer>
  );
}