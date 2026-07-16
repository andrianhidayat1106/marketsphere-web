import React from "react";
import { BellRing } from "lucide-react";

const ReminderBanner = () => {
  return (
    <section className="bg-gradient-to-r from-[#00aa5b] to-[#008f4d] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl shadow-[#00aa5b]/20">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>

      <div className="relative z-10 text-white max-w-xl">
        <h2 className="text-2xl font-black mb-3">
          Pantau Terus Promo Berikutnya!
        </h2>
        <p className="text-sm font-medium text-emerald-50 opacity-90 leading-relaxed">
          Aktifkan notifikasi untuk sesi Flash Sale jam 15:00. Jangan sampai
          ketinggalan penawaran terbaik hari ini.
        </p>
      </div>

      <button className="relative z-10 bg-white text-[#00aa5b] hover:bg-emerald-50 px-8 py-4 rounded-2xl font-black text-sm flex items-center gap-3 transition-all active:scale-95 shadow-xl">
        <BellRing size={20} />
        Ingatkan Saya
      </button>
    </section>
  );
};

export default ReminderBanner;
