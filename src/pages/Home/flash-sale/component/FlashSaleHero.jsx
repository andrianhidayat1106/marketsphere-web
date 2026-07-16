import React from "react";
import { Flame } from "lucide-react";

const FlashSaleHero = ({ timeLeft }) => {
  return (
    <section className="relative bg-gradient-to-br from-[#00aa5b] via-[#008f4d] to-[#00aa5b] overflow-hidden py-16">
      {/* Animated Background Decor */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="grid grid-cols-12 h-full w-full gap-4">
          {[...Array(144)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-white rounded-full opacity-20"
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-red-600 px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-black/20 mb-8 animate-bounce">
          <Flame size={14} fill="currentColor" />
          Waktu Terbatas!
        </div>

        <h1 className="text-7xl md:text-8xl font-black uppercase tracking-tighter mb-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]">
          FLASH SALE
        </h1>

        <p className="text-emerald-100 font-bold text-sm uppercase tracking-widest mb-10 opacity-80">
          Berakhir dalam:
        </p>

        {/* Countdown Blocks */}
        <div className="flex justify-center items-center gap-4 md:gap-8">
          <div className="flex flex-col gap-2">
            <div className="w-20 h-24 md:w-28 md:h-32 bg-white rounded-2xl flex items-center justify-center text-[#00aa5b] text-4xl md:text-6xl font-black shadow-2xl">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-100 opacity-60">
              Jam
            </span>
          </div>
          <div className="text-4xl md:text-6xl font-black text-white pb-6">
            :
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-20 h-24 md:w-28 md:h-32 bg-white rounded-2xl flex items-center justify-center text-[#00aa5b] text-4xl md:text-6xl font-black shadow-2xl">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-100 opacity-60">
              Menit
            </span>
          </div>
          <div className="text-4xl md:text-6xl font-black text-white pb-6">
            :
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-20 h-24 md:w-28 md:h-32 bg-white rounded-2xl flex items-center justify-center text-[#00aa5b] text-4xl md:text-6xl font-black shadow-2xl">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-100 opacity-60">
              Detik
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSaleHero;
