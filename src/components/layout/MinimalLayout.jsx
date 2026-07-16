import { Outlet, Link } from "react-router-dom";
import { Globe } from "lucide-react";

/**
 * MinimalLayout — Layout minimal untuk flow khusus.
 *
 * Kapan dipakai:
 * Halaman yang butuh header sederhana (logo + text) tanpa full Navbar.
 * Contoh: PaymentPage, StoreRegister, PaymentSuccess.
 *
 * Kenapa dibuat:
 * 6+ halaman buat header dan footer sendiri secara inline (copy-paste).
 * Sekarang cukup pakai layout ini, semua konsisten.
 */
export default function MinimalLayout() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Simple Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#00aa5b] rounded-lg flex items-center justify-center text-white">
              <Globe size={20} />
            </div>
            <span className="text-xl font-black tracking-tight text-[#00aa5b]">
              MarketSphere
            </span>
          </Link>
        </div>
      </header>

      {/* Page Content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-slate-100 py-10 text-center">
        <p className="text-xs text-slate-400 font-medium">
          © 2026 MarketSphere Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
