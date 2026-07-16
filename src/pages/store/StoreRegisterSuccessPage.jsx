import React from "react";
import {
  CheckCircle2,
  LayoutDashboard,
  BookOpen,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

/**
 * MarketSphere Seller Registration Success Component
 * Built with React and Tailwind CSS.
 */
const StoreRegisterSuccessPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
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
            <button className="hover:text-[#00aa5b] transition-colors text-[#00aa5b]">
              Help Center
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6 py-16">
        <div className="w-full max-w-2xl bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Success Hero Section */}
          <div className="pt-16 pb-10 px-8 text-center flex flex-col items-center">
            <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 bg-emerald-100 rounded-[2rem] animate-ping opacity-20"></div>
              <CheckCircle2
                size={48}
                className="text-[#00aa5b] relative z-10"
              />
            </div>

            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Pendaftaran Berhasil!
            </h1>
            <p className="text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
              Toko Anda sedang ditinjau dalam 1×24 jam. Kami akan memberi tahu
              Anda melalui email jika akun Anda telah aktif.
            </p>
          </div>

          {/* Action Buttons Section */}
          <div className="px-10 pb-16 space-y-4">
            <button className="w-full bg-[#00aa5b] hover:bg-[#008f4d] active:scale-[0.98] text-white font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#00aa5b]/20 group">
              <LayoutDashboard size={20} />
              Buka Dashboard Penjual
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button className="w-full bg-white border-2 border-slate-100 hover:border-[#00aa5b] hover:text-[#00aa5b] active:scale-[0.98] text-slate-600 font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3">
              <BookOpen size={20} />
              Pelajari Cara Jualan
            </button>
          </div>

          {/* Visual Placeholder / Dashboard Preview */}
          <div className="px-10 pb-10">
            <div className="aspect-video bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden relative group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                alt="Dashboard Preview"
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-sm border border-white flex items-center gap-3">
                  <ShieldCheck className="text-[#00aa5b]" size={20} />
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                    Sistem Keamanan Terjamin
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="bg-white border-t border-slate-100 py-12">
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StoreRegisterSuccessPage;
