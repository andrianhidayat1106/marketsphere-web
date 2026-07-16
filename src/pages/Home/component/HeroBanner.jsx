import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="relative rounded-3xl overflow-hidden mb-8 aspect-[21/9] bg-slate-900 group">
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
      />
      <div className="relative z-10 h-full flex flex-col justify-center p-12 text-white max-w-xl">
        <span className="inline-block bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md mb-4 w-fit">
          Super Brand Day
        </span>
        <h1 className="text-5xl font-black mb-6 leading-tight">
          Tech Gadget Mania 50% Off
        </h1>
        <Link
          to="/flash-sale"
          className="w-fit bg-[#00aa5b] hover:bg-[#008f4d] text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-[#00aa5b]/20 active:scale-95"
        >
          Shop Now
        </Link>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#00aa5b]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
      </div>
    </section>
  );
}
