const smallFeatures = [
  {
    icon: "📈",
    title: "Actionable Insights",
    description: "Detailed logs and heatmaps of safety alerts to optimize security patrols.",
  },
  {
    icon: "🔗",
    title: "Seamless Integration",
    description: "Connects via API with existing hospital management and university IT systems.",
  },
  {
    icon: "🔋",
    title: "7-Day Endurance",
    description: "Long-lasting lithium-ion power designed for back-to-back 12-hour shifts.",
  },
];

export default function SafetyFeatures() {
  return (
    <section className="bg-[#f4f8f4] py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Safety Features</h2>
            <p className="text-slate-500 mt-2 max-w-md">
              The SENTINOA ecosystem is built on the pillars of reliability, integration, and user-centric design.
            </p>
          </div>
          <a href="#" className="text-sm font-semibold text-green-800 hover:underline whitespace-nowrap">
            View Technical Specs
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6">
            <span className="inline-block text-xs font-semibold text-green-800 bg-green-50 rounded-full px-3 py-1 mb-3">
              REAL-TIME TELEMETRY
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Advanced Vitals Monitoring</h3>
            <p className="text-sm text-slate-500 mb-4">
              Our devices track heart rate variability and stress levels to predict potential incidents before they escalate.
            </p>
            <div className="bg-slate-100 rounded-lg h-40" />
          </div>

          <div className="bg-red-700 rounded-xl p-6 flex flex-col items-center justify-center text-center text-white">
            <div className="w-16 h-16 rounded-full bg-white mb-4" />
            <h3 className="text-xl font-bold mb-2">One-Touch Rescue</h3>
            <p className="text-sm text-red-50 max-w-xs">
              The SENTINOA ecosystem is built on the pillars of reliability, integration, and user-centric design.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {smallFeatures.map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}