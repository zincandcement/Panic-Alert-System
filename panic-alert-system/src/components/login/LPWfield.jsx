import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function PasswordField({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="text-sm font-medium text-slate-700 mb-1.5 block">Password</label>
      <div className="flex items-center gap-2 bg-[#f4f7f2] border border-slate-200 rounded-lg px-3 py-2.5 focus-within:ring-2 focus-within:ring-green-700 focus-within:border-transparent">
        <Lock size={16} className="text-slate-400" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          value={value}
          onChange={onChange}
          className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="text-slate-400 hover:text-slate-600"
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );
}