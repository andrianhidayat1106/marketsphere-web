import React, { useState } from "react";
import {
  Check,
  Camera,
  ShieldCheck,
  ChevronLeft,
  ArrowRight,
  User,
  CreditCard,
  Image as ImageIcon,
} from "lucide-react";

/**
 * MarketSphere Seller Registration - Identity Verification Component
 * Built with React and Tailwind CSS.
 */
const StoreIdentityVerification = () => {
  const [formData, setFormData] = useState({
    nik: "",
    fullName: "",
  });

  const steps = [
    { id: 1, label: "Info Toko", status: "completed" },
    { id: 2, label: "Verifikasi KTP", status: "active" },
    { id: 3, label: "Konfirmasi", status: "pending" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Navigation Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-[#00aa5b] rounded-lg flex items-center justify-center text-white font-black text-xl">
              M
            </div>
            <span className="text-xl font-black tracking-tight text-[#00aa5b]">
              MarketSphere
            </span>
          </div>
          <nav className="flex items-center gap-8 text-sm font-bold text-slate-500">
            <button className="hover:text-[#00aa5b] transition-colors">
              Benefits
            </button>
            <button className="hover:text-[#00aa5b] transition-colors">
              Pricing
            </button>
            <button className="hover:text-[#00aa5b] transition-colors">
              Support
            </button>
            <button className="bg-[#00aa5b] text-white px-6 py-2.5 rounded-xl hover:bg-[#008f4d] transition-all shadow-lg shadow-[#00aa5b]/20 active:scale-95">
              Register Now
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Stepper */}
        <div className="flex justify-between items-center mb-16 relative px-4">
          {/* Background Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
          {/* Active Progress Line */}
          <div className="absolute top-1/2 left-0 w-1/2 h-0.5 bg-[#00aa5b] -translate-y-1/2 z-0"></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center gap-3"
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-lg ${
                  step.status === "active"
                    ? "bg-[#00aa5b] text-white ring-4 ring-[#00aa5b]/10 scale-110"
                    : step.status === "completed"
                    ? "bg-[#00aa5b] text-white"
                    : "bg-white text-slate-400 border-2 border-slate-100"
                }`}
              >
                {step.status === "completed" ? (
                  <Check size={20} />
                ) : (
                  <span className="font-black">{step.id}</span>
                )}
              </div>
              <span
                className={`text-[10px] font-black uppercase tracking-widest ${
                  step.status === "active" || step.status === "completed"
                    ? "text-[#00aa5b]"
                    : "text-slate-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Main Content Card */}
        <section className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="p-10 md:p-16 text-center border-b border-slate-50">
            <h1 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
              Verifikasi Identitas
            </h1>
            <p className="text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
              Pastikan data yang Anda masukkan sesuai dengan KTP asli untuk
              mempercepat proses verifikasi toko.
            </p>
          </div>

          <div className="p-10 md:p-16 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Identity Form Side */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                    Nomor Induk Kependudukan (NIK)
                  </label>
                  <div className="relative group">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#00aa5b] transition-colors">
                      <CreditCard size={20} />
                    </div>
                    <input
                      type="text"
                      name="nik"
                      value={formData.nik}
                      onChange={handleInputChange}
                      placeholder="16 digit nomor KTP"
                      className="w-full pl-14 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-[#00aa5b]/20 focus:ring-4 focus:ring-[#00aa5b]/5 transition-all text-sm font-medium"
                    />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 italic">
                    Contoh: 3171234567890001
                  </p>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest">
                    Nama Lengkap (Sesuai KTP)
                  </label>
                  <div className="relative group">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#00aa5b] transition-colors">
                      <User size={20} />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap Anda"
                      className="w-full pl-14 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-[#00aa5b]/20 focus:ring-4 focus:ring-[#00aa5b]/5 transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-start gap-4">
                  <div className="p-2.5 bg-white rounded-xl text-[#00aa5b] shadow-sm">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-emerald-900 uppercase tracking-tighter mb-1">
                      Data Terjamin Aman
                    </h4>
                    <p className="text-[10px] text-emerald-700 font-medium leading-relaxed">
                      Informasi identitas Anda akan dienkripsi dan hanya
                      digunakan untuk kepentingan verifikasi akun seller.
                    </p>
                  </div>
                </div>
              </div>

              {/* Identity Upload Side */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest">
                    Foto KTP
                  </label>
                  <div className="aspect-[3/2] border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 flex flex-col items-center justify-center p-6 hover:border-[#00aa5b] hover:bg-emerald-50/30 transition-all cursor-pointer group">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#00aa5b] shadow-sm mb-3 group-hover:scale-110 transition-transform">
                      <Camera size={24} />
                    </div>
                    <span className="text-xs font-bold text-[#00aa5b] mb-1">
                      Klik untuk Unggah KTP
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Format JPG/PNG, Maks. 2MB
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-900 uppercase tracking-widest">
                    Selfie dengan KTP
                  </label>
                  <div className="aspect-[3/2] border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50 flex flex-col items-center justify-center p-6 hover:border-[#00aa5b] hover:bg-emerald-50/30 transition-all cursor-pointer group">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#00aa5b] shadow-sm mb-3 group-hover:scale-110 transition-transform">
                      <ImageIcon size={24} />
                    </div>
                    <span className="text-xs font-bold text-[#00aa5b] mb-1">
                      Klik untuk Unggah Selfie
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Wajah dan KTP terlihat jelas
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="pt-10 flex items-center justify-between border-t border-slate-50">
              <button className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors group">
                <ChevronLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                Kembali
              </button>
              <button className="bg-[#00aa5b] hover:bg-[#008f4d] active:scale-[0.98] text-white px-10 py-4 rounded-2xl font-black text-sm flex items-center gap-3 transition-all shadow-xl shadow-[#00aa5b]/20 group">
                Lanjut ke Konfirmasi
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </section>

        {/* Security Compliance Badges */}
        <div className="mt-12 flex justify-center items-center gap-8 opacity-40 grayscale">
          <div className="flex items-center gap-2 text-xs font-bold">
            <ShieldCheck size={16} /> ISO 27001 Certified
          </div>
          <div className="flex items-center gap-2 text-xs font-bold">
            <ShieldCheck size={16} /> SSL Secured
          </div>
          <div className="flex items-center gap-2 text-xs font-bold">
            <ShieldCheck size={16} /> GDPR Compliant
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 mt-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <h4 className="font-black text-lg text-slate-900">
                MarketSphere Seller Center
              </h4>
              <p className="text-xs text-slate-400 font-medium">
                © 2024 MarketSphere Seller Center. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-500">
              <button className="hover:text-[#00aa5b] transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-[#00aa5b] transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-[#00aa5b] transition-colors">
                Help Center
              </button>
              <button className="hover:text-[#00aa5b] transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StoreIdentityVerification;
