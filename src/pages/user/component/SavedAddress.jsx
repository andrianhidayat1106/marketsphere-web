import { MapPin, Plus } from "lucide-react";
import Card from "../../../components/common/Card.jsx";
import { Link } from "react-router-dom";

export default function SavedAddress({ addresses }) {
  return (
    <Card>
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-xl text-blue-500">
            <MapPin size={20} />
          </div>
          <h2 className="font-bold text-lg text-slate-900">Saved Addresses</h2>
        </div>
        <Link
          to={"/profile/form-address"}
          className="flex items-center gap-2 bg-[#00aa5b] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#008f4d] transition-all shadow-lg shadow-[#00aa5b]/20 active:scale-95"
        >
          <Plus size={18} />
          Add New
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`p-6 rounded-2xl border transition-all ${
              addr.isDefault
                ? "border-[#00aa5b] bg-[#00aa5b]/[0.02] ring-1 ring-[#00aa5b]"
                : "border-slate-100 hover:border-slate-200 bg-white"
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900">
                  {addr.name} | {addr.label}
                </h3>
                {addr.isDefault && (
                  <span className="text-[9px] font-black bg-[#00aa5b] text-white px-2 py-0.5 rounded-md uppercase tracking-widest">
                    Default
                  </span>
                )}
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-500 mb-2">
              {addr.phone}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line mb-6">
              {addr.address}
            </p>
            <div className="flex gap-4">
              <button className="text-xs font-bold text-[#00aa5b] hover:underline">
                Edit
              </button>
              {!addr.isDefault && (
                <button className="text-xs font-bold text-red-500 hover:underline">
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
