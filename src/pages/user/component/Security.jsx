import { ChevronRight, Lock, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../../../components/common/Card.jsx";

export default function Security() {
  return (
    <Card width="4">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-red-50 rounded-xl text-red-500">
          <ShieldCheck size={20} />
        </div>
        <h2 className="font-bold text-lg text-slate-900">Security</h2>
      </div>

      <div className="space-y-6">
        <Link
          to={"/profile/change-password"}
          className="w-full flex items-center justify-between group p-2 hover:bg-slate-50 rounded-2xl transition-colors"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 bg-slate-100 rounded-xl text-slate-500 group-hover:bg-white group-hover:shadow-sm transition-all">
              <Lock size={18} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Change Password
              </h4>
              <p className="text-[10px] text-slate-400 font-medium">
                Last updated 2 months ago
              </p>
            </div>
          </div>
          <ChevronRight size={18} className="text-slate-300" />
        </Link>
      </div>
    </Card>
  );
}
