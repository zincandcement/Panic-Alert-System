const steps = [
  {
    icon: "👆",
    title: "1. Press Button",
    description:
      "A discreet, tactile SOS trigger that works through clothing, providing haptic feedback upon activation.",
  },
  {
    icon: "📍",
    title: "2. SMS & GPS Alert",
    description:
      "Instantaneous broadcast to security teams with precise floor-level indoor positioning and GPS coordinates.",
  },
  {
    icon: "☁️",
    title: "3. Cloud Logging",
    description:
      "Automatic archival of telemetry, voice snippets, and location history for post-incident medical compliance.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f4f8f4] py-16 px-8">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-extrabold text-slate-900">How It Works</h2>
        <p className="text-slate-500 mt-2 max-w-xl mx-auto">
          Three layers of redundant communication ensuring no signal is ever lost when it matters most.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.title}
            className="bg-white border border-green-100 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-lg mb-4">
              {step.icon}
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
            <p className="text-sm text-slate-500">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}