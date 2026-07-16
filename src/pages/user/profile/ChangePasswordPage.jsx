import { ShieldCheck } from "lucide-react";
import Card from "../../../components/common/Card.jsx";
import InputField from "../../../components/common/InputField.jsx";
import Button from "../../../components/common/Button.jsx";
import { Link } from "react-router-dom";

/**
 * ChangePasswordPage
 * Navbar & Footer sudah di-handle oleh MainLayout.
 */
const ChangePasswordPage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <div className="flex gap-8">
        <div className="flex-grow space-y-8">
          <div className="flex flex-col gap-1 mb-2">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              Change Password
            </h1>
            <p className="text-slate-500 font-medium">
              Update your password regularly to keep your account secure.
            </p>
          </div>

          <Card>
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 rounded-xl text-red-500">
                  <ShieldCheck size={20} />
                </div>
                <h2 className="font-bold text-lg text-slate-900">
                  Security
                </h2>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    CURRENT PASSWORD
                  </label>
                  <InputField type="password" placeholder="••••••••" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    NEW PASSWORD
                  </label>
                  <InputField type="password" placeholder="••••••••" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    CONFIRM NEW PASSWORD
                  </label>
                  <InputField type="password" placeholder="••••••••" />
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 border-t border-slate-100 pt-6">
                <Link to={"/profile"}>
                  <Button variant="secondary" size="md">
                    Kembali
                  </Button>
                </Link>
                <Button variant="success" size="md" type="submit">
                  Change Password
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default ChangePasswordPage;
