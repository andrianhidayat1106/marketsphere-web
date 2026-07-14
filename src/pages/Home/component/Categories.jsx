import {
  Gamepad2,
  Home,
  MoreHorizontal,
  PawPrint,
  Shirt,
  Smartphone,
  Sparkles,
  Utensils,
} from "lucide-react";

export default function Categories() {
  return (
    <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-10">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
        {/* 1. Electronics */}
        <button
          type="button"
          className="flex flex-col items-center gap-3 group"
        >
          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-[#00aa5b]/10 group-hover:text-[#00aa5b] transition-all group-hover:scale-110">
            <Smartphone size={24} />
          </div>
          <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
            Electronics
          </span>
        </button>

        {/* 2. Fashion */}
        <button
          type="button"
          className="flex flex-col items-center gap-3 group"
        >
          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-[#00aa5b]/10 group-hover:text-[#00aa5b] transition-all group-hover:scale-110">
            <Shirt size={24} />
          </div>
          <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
            Fashion
          </span>
        </button>

        {/* 3. Home & Living */}
        <button
          type="button"
          className="flex flex-col items-center gap-3 group"
        >
          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-[#00aa5b]/10 group-hover:text-[#00aa5b] transition-all group-hover:scale-110">
            <Home size={24} />
          </div>
          <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
            Home & Living
          </span>
        </button>

        {/* 4. Beauty */}
        <button
          type="button"
          className="flex flex-col items-center gap-3 group"
        >
          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-[#00aa5b]/10 group-hover:text-[#00aa5b] transition-all group-hover:scale-110">
            <Sparkles size={24} />
          </div>
          <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
            Beauty
          </span>
        </button>

        {/* 5. Groceries */}
        <button
          type="button"
          className="flex flex-col items-center gap-3 group"
        >
          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-[#00aa5b]/10 group-hover:text-[#00aa5b] transition-all group-hover:scale-110">
            <Utensils size={24} />
          </div>
          <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
            Groceries
          </span>
        </button>

        {/* 6. Toys & Games */}
        <button
          type="button"
          className="flex flex-col items-center gap-3 group"
        >
          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-[#00aa5b]/10 group-hover:text-[#00aa5b] transition-all group-hover:scale-110">
            <Gamepad2 size={24} />
          </div>
          <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
            Toys & Games
          </span>
        </button>

        {/* 7. Pet Supplies */}
        <button
          type="button"
          className="flex flex-col items-center gap-3 group"
        >
          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-[#00aa5b]/10 group-hover:text-[#00aa5b] transition-all group-hover:scale-110">
            <PawPrint size={24} />
          </div>
          <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
            Pet Supplies
          </span>
        </button>

        {/* 8. More */}
        <button
          type="button"
          className="flex flex-col items-center gap-3 group"
          onClick={() => alert("Buka menu kategori lengkap")}
        >
          <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-[#00aa5b]/10 group-hover:text-[#00aa5b] transition-all group-hover:scale-110">
            <MoreHorizontal size={24} />
          </div>
          <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
            More
          </span>
        </button>
      </div>
    </section>
  );
}
