import React, { useState } from "react";
import {
  Store,
  MapPin,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Truck,
  Check,
  Building2,
  Info,
} from "lucide-react";

/**
 * MarketSphere Seller Registration - Store Info Component
 * Built with React and Tailwind CSS.
 */
const StoreRegisterPage = () => {
  const [formData, setFormData] = useState({
    storeName: "",
    storeAddress: "",
    category: "",
    description: "",
  });

  const steps = [
    { id: 1, label: "Info Toko", icon: <Store size={18} />, status: "active" },
    {
      id: 2,
      label: "Verifikasi",
      icon: <ShieldCheck size={18} />,
      status: "pending",
    },
    {
      id: 3,
      label: "Pengiriman",
      icon: <Truck size={18} />,
      status: "pending",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Moving to verification step:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Header */}
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
          {/* Progress Line Background */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
          {/* Active Progress Line */}
          <div className="absolute top-1/2 left-0 w-1/3 h-0.5 bg-[#00aa5b] -translate-y-1/2 z-0"></div>

          {steps.map((step) => (
            <div
              key={step.id}
              className="relative z-10 flex flex-col items-center gap-3"
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-lg ${
                  step.status === "active"
                    ? "bg-[#00aa5b] text-white ring-4 ring-[#00aa5b]/10 scale-110"
                    : "bg-white text-slate-400 border-2 border-slate-100"
                }`}
              >
                {step.status === "completed" ? <Check size={20} /> : step.icon}
              </div>
              <span
                className={`text-[10px] font-black uppercase tracking-widest ${
                  step.status === "active" ? "text-[#00aa5b]" : "text-slate-400"
                }`}
              >
                {step.id}. {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Form Card */}
        <section className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="p-10 md:p-16 text-center border-b border-slate-50">
            <h1 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">
              Buka Toko Anda
            </h1>
            <p className="text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
              Langkah pertama untuk mulai berjualan di ekosistem MarketSphere.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-10 md:p-16 space-y-10">
            {/* Store Name */}
            <div className="space-y-3">
              <label className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                Nama Toko <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#00aa5b] transition-colors">
                  <Building2 size={20} />
                </div>
                <input
                  type="text"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleInputChange}
                  placeholder="Contoh: Toko Berkah Jaya"
                  className="w-full pl-14 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-[#00aa5b]/20 focus:ring-4 focus:ring-[#00aa5b]/5 transition-all text-sm font-medium"
                  required
                />
              </div>
              <p className="text-[10px] font-bold text-slate-400 italic">
                Gunakan nama yang mudah diingat pelanggan.
              </p>
            </div>

            {/* Store Address */}
            <div className="space-y-3">
              <label className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                Alamat Toko <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#00aa5b] transition-colors">
                  <MapPin size={20} />
                </div>
                <input
                  type="text"
                  name="storeAddress"
                  value={formData.storeAddress}
                  onChange={handleInputChange}
                  placeholder="Cari alamat atau koordinat..."
                  className="w-full pl-14 pr-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-[#00aa5b]/20 focus:ring-4 focus:ring-[#00aa5b]/5 transition-all text-sm font-medium"
                  required
                />
              </div>
            </div>

            {/* Main Category */}
            <div className="space-y-3">
              <label className="text-sm font-black text-slate-900 uppercase tracking-widest">
                Kategori Utama <span className="text-red-500">*</span>
              </label>
              <div className="relative group">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-[#00aa5b]/20 focus:ring-4 focus:ring-[#00aa5b]/5 transition-all text-sm font-medium appearance-none cursor-pointer"
                  required
                >
                  <option value="">Pilih kategori bisnis</option>
                  <option value="electronics">Elektronik</option>
                  <option value="fashion">Fashion & Aksesoris</option>
                  <option value="home">Home & Living</option>
                  <option value="beauty">Kesehatan & Kecantikan</option>
                </select>
                <ChevronDown
                  size={18}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#00aa5b] pointer-events-none"
                />
              </div>
            </div>

            {/* Store Description */}
            <div className="space-y-3">
              <label className="text-sm font-black text-slate-900 uppercase tracking-widest">
                Deskripsi Toko Singkat <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Ceritakan apa yang Anda jual..."
                className="w-full h-32 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-[#00aa5b]/20 focus:ring-4 focus:ring-[#00aa5b]/5 transition-all text-sm font-medium resize-none"
                required
              ></textarea>
            </div>

            {/* Info Tip */}
            <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-start gap-4">
              <div className="p-2.5 bg-white rounded-xl text-[#00aa5b] shadow-sm">
                <Info size={18} />
              </div>
              <p className="text-xs text-emerald-700 font-medium leading-relaxed">
                Pastikan informasi toko Anda akurat untuk mempercepat proses
                verifikasi oleh tim kami.
              </p>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="w-full bg-[#00aa5b] hover:bg-[#008f4d] active:scale-[0.98] text-white font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#00aa5b]/20 group"
            >
              Lanjut ke Verifikasi
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>
        </section>
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

export default StoreRegisterPage;
