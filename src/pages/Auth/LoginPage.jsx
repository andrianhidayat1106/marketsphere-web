import { Link } from "react-router-dom";
import Button from "../../components/common/Button.jsx";
import InputField from "../../components/common/InputField.jsx";
import { useState } from "react";
import CheckBoxField from "../../components/common/CheckBoxField.jsx";
import AuthCard from "./component/AuthCard.jsx";
import BrandSection from "./component/BrandSection.jsx";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* Left Side: Brand Visuals (Hidden on small screens) */}
      <BrandSection
        title={
          "Empowering global trade with speed, reliability, and precision."
        }
        subtitle={
          "Access the world's most efficient logistics network today. Join thousands of merchants scaling their businesses globally."
        }
      />

      {/* Right Side: Login Form */}
      <AuthCard
        title={"Welcome back"}
        subtitle={"Please enter your details to access your account."}
      >
        <form className="space-y-6">
          {/* Email Field */}
          <InputField
            placeholder={"user@gmail.com"}
            label={"Email"}
            type={"email"}
            isRequired={true}
          />

          {/* Password Field */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="pass"
                className="text-sm font-semibold text-slate-700"
              >
                Password
              </label>
              <button
                type="button"
                className="text-xs font-bold text-[#00aa5b] hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <InputField
                placeholder={"••••••••"}
                id={"password"}
                type={showPassword ? "text" : "password"}
                isRequired={true}
              />

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <CheckBoxField
            isRequired={true}
            label={"Remember for 30 days"}
          />

          {/* Submit Button */}
          <Button size="lg" type="submit">
            <span>Sign In</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Button>

          {/* Divider */}
          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-slate-100"></div>
            <span className="flex-shrink mx-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              or continue with
            </span>
            <div className="flex-grow border-t border-slate-100"></div>
          </div>

          {/* Social Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-sm font-semibold text-slate-700"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Google
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#00aa5b] font-bold hover:underline ml-1"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </AuthCard>
    </>
  );
}

export default LoginPage;
