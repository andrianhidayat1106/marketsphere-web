import { User } from "lucide-react";
import { useState } from "react";
import InputField from "../../../../components/common/InputField.jsx";
import Button from "../../../../components/common/Button.jsx";
import Card from "../../../../components/common/Card.jsx";

export default function ProfileInfo() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const handleEditingProfile = () => {
    if (isEditingProfile) {
      setIsEditingProfile(false);
      return;
    }
    setIsEditingProfile(true);
  };



  return (
    <Card>
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-50 rounded-xl text-[#00aa5b]">
            <User size={20} />
          </div>
          <h2 className="font-bold text-lg text-slate-900">Personal Profile</h2>
        </div>
        <button
          onClick={() => handleEditingProfile()}
          className={`text-sm font-bold hover:underline transition-colors ${
            isEditingProfile
              ? "text-rose-600 hover:text-rose-700" // Warna saat True (Cancel)
              : "text-[#00aa5b] hover:text-[#008f4c]" // Warna saat False (Edit)
          }`}
        >
          {isEditingProfile ? "Cancel" : "Edit"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Full Name
          </label>
          <InputField type="text" isReadonly={!isEditingProfile} />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Email Address
          </label>
          <InputField type="email" isReadonly={!isEditingProfile} />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Phone Number
          </label>
          <InputField type="number" isReadonly={!isEditingProfile} />
        </div>
      </div>
      {isEditingProfile ? (
        <div className="flex justify-end">
          <Button size="sm">Save</Button>
        </div>
      ) : null}
    </Card>
  );
}
