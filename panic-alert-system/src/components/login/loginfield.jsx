import sentinoa_logo from "../../assets/sentinoalogo.png";

export default function LoginHeader() {
  return (
    <div className="bg-[#eef2ec] rounded-t-2xl px-6 pt-8 pb-4 text-center">
      <div className="flex justify-center mb-3">
        <img src={sentinoa_logo} alt="Sentinoa Logo" className="w-12 h-12 rounded-xl object-cover" />
      </div>
      <h1 className="text-2xl font-extrabold text-green-800 tracking-wide">SENTINOA</h1>
      <p className="text-xs text-slate-600 mt-1">UNN Security Device Portal</p>
    </div>
  );
}