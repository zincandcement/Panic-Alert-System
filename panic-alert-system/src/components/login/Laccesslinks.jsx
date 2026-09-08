import { Link } from "react-router-dom";

export function RequestAccessNote() {
  return (
    <p className="text-center text-xs text-slate-500">
      Authorized use only.{" "}
      <Link to="/request-access" className="text-green-800 font-semibold hover:underline">
        Request access
      </Link>
    </p>
  );
}

export function SignupNote() {
  return (
    <p className="text-center text-xs text-slate-500">
      Don't have an account?{" "}
      <Link to="/signup" className="text-green-800 font-semibold hover:underline">
        Sign up
      </Link>
    </p>
  );
}