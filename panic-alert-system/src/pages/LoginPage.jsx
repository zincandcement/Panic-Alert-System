import { useState } from "react";
import { Mail, LogIn } from "lucide-react";
import LoginHeader from "../components/login/loginheader";
import Field from "../components/login/loginfield";
import PasswordField from "../components/login/LPWfield";
import RememberForgotRow from "../components/login/LRmFgRow";
import { RequestAccessNote, SignupNote } from "../components/login/Laccesslinks";
import StatusFooter from "../components/login/Lstatusfooter";
import CopyrightFooter from "../components/login/LCRfooter";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    console.log("Login submitted:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <LoginHeader />

        <div className="bg-white rounded-b-2xl shadow-md px-6 pt-8 pb-6">
          <div className="space-y-4">
            <Field
              label="School Email"
              icon={<Mail size={16} className="text-slate-400" />}
              placeholder="name.regno@unn.edu.ng"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordField value={password} onChange={(e) => setPassword(e.target.value)} />

            <RememberForgotRow rememberMe={rememberMe} onToggle={setRememberMe} />

            <button
              onClick={handleSubmit}
              className="w-full bg-green-800 hover:bg-green-900 text-white font-semibold text-sm py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
            >
              Sign In
              <LogIn size={16} />
            </button>

            <hr className="border-slate-200 my-2" />
            <RequestAccessNote />
          </div>

          <hr className="border-slate-200 my-4" />
          <SignupNote />

          <StatusFooter />
        </div>

        <CopyrightFooter />
      </div>
    </div>
  );
}