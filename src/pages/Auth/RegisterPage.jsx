import { Link } from "react-router-dom";
import BrandSection from "./component/BrandSection.jsx";
import AuthCard from "./component/AuthCard.jsx";
import InputField from "../../components/common/InputField.jsx";
import CheckBoxField from "../../components/common/CheckBoxField.jsx";
import Button from "../../components/common/Button.jsx";

export default function RegisterPage() {
  return (
    <>
      {/* Left Side: Brand Visuals (Consistent with Login) */}

      <BrandSection
        title={"Empowering your business at scale."}
        subtitle={
          "Join the world's most efficient marketplace ecosystem. Streamline your operations, reach global customers, and manage your inventory with precision."
        }
      />

      {/* Right Side: Register Form */}
      <AuthCard
        title={"Create your account"}
        subtitle={"Fill in the details below to get started with your store."}
      >
        <form className="space-y-4">
          {/* Full Name */}

          <InputField
            label={"Full Name"}
            placeholder={"Jhon Doe"}
            type={"text"}
            id={"fullName"}
            isRequired={true}
          />

          {/* Email Address */}

          <InputField
            placeholder={"jhon@gmail.com"}
            label={"Email Address"}
            type={"email"}
            isRequired={true}
          />

          {/* Phone Number */}
          <div>
            <InputField
              placeholder={"8325523246"}
              label={"Phone"}
              type={"number"}
              isRequired={true}
            />
          </div>

          {/* Password Grid */}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <InputField
                label={"Password"}
                placeholder={"••••••••"}
                id={"password"}
                type="password"
                isRequired={true}
              />
            </div>
            <div>
              <InputField
                label={"Confirm Password"}
                placeholder={"••••••••"}
                type="password"
                id={"confirmPassword"}
                isRequired={true}
              />
            </div>
          </div>

          {/* Terms of Service */}
          <div className="flex items-start py-2">
            <CheckBoxField id={"terms"} isRequired={true}>
              I agree to the{" "}
              <button
                type="button"
                className="text-[#00aa5b] font-bold hover:underline"
                onClick={() => alert("Buka modal Terms")}
              >
                Terms of Service
              </button>{" "}
              and{" "}
              <button
                type="button"
                className="text-[#00aa5b] font-bold hover:underline"
                onClick={() => alert("Buka modal Privacy")}
              >
                Privacy Policy
              </button>{" "}
              regarding my personal data.
            </CheckBoxField>
          </div>

          {/* Submit Button */}

          <Button type="submit" size="lg">
            <span>Create Account</span>
          </Button>

          {/* Divider */}
          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-slate-100"></div>
            <span className="flex-shrink mx-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              or continue with
            </span>
            <div className="flex-grow border-t border-slate-100"></div>
          </div>

          {/* Social Registration */}
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
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#00aa5b] font-bold hover:underline ml-1"
            >
              Login here
            </Link>
          </p>
        </div>
      </AuthCard>
    </>
  );
}
