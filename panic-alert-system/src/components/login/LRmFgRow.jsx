import { Link } from "react-router-dom";

export default function RememberForgotRow({ rememberMe, onToggle }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => onToggle(e.target.checked)}
          className="w-4 h-4 rounded border-slate-300 text-green-700 focus:ring-green-700"
        />
        Remember Me
      </label>
      <Link to="/forgot-password" className="text-green-800 font-medium hover:underline">
        Forgot Password?
      </Link>
    </div>
  );
}