export default function CtaBanner() {
  return (
    <section className="bg-green-900 text-white py-16 px-8 text-center">
      <h2 className="text-3xl font-extrabold mb-4">Ready to Secure Your Institution?</h2>
      <p className="text-green-100 max-w-xl mx-auto mb-8">
        Join over 150 medical centers and 40 university campuses worldwide already protected by SENTINOA.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-white text-green-900 font-semibold px-5 py-3 rounded-lg hover:bg-green-50">
          Schedule Consultation
        </button>
        <button className="bg-green-700 hover:bg-green-600 font-semibold px-5 py-3 rounded-lg">
          View Pricing
        </button>
      </div>
    </section>
  );
}