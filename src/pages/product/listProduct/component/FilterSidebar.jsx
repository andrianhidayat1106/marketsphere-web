import React from "react";
import { Filter, Star } from "lucide-react";

// Komponen internal SVG CheckCircle2
function CheckCircle2(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const FilterSidebar = ({ categories }) => {
  return (
    <aside className="col-span-3 space-y-6">
      {/* Categories */}
      <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
          <Filter size={14} /> Categories
        </h3>
        <div className="space-y-3">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`w-full text-left text-sm font-bold flex justify-between items-center transition-colors ${
                cat.active
                  ? "text-[#00aa5b]"
                  : "text-slate-500 hover:text-slate-800"
              } ${cat.parent ? "pl-4 text-xs" : ""}`}
            >
              <span>{cat.name}</span>
              {cat.active && (
                <CheckCircle2
                  size={14}
                  className="text-[#00aa5b]"
                  fill="currentColor"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Price Range */}
      <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">
          Price Range
        </h3>
        <div className="flex items-center gap-2 mb-6">
          <input
            type="number"
            placeholder="Min"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold outline-none focus:border-[#00aa5b]/20"
          />
          <span className="text-slate-300">-</span>
          <input
            type="number"
            placeholder="Max"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-100 rounded-lg text-xs font-bold outline-none focus:border-[#00aa5b]/20"
          />
        </div>
        <button className="w-full py-2.5 bg-[#00aa5b] text-white text-xs font-black rounded-xl hover:bg-[#008f4d] transition-all shadow-lg shadow-[#00aa5b]/10 active:scale-95">
          Apply Filters
        </button>
      </section>

      {/* Rating */}
      <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">
          Rating
        </h3>
        {[5, 4, 3].map((star) => (
          <button
            key={star}
            className="flex items-center gap-3 w-full mb-3 group"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i <= star ? "#fbbf24" : "none"}
                  className={i <= star ? "text-[#fbbf24]" : "text-slate-200"}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-400 group-hover:text-slate-900">
              & Up
            </span>
          </button>
        ))}
      </section>

      {/* Brands */}
      <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">
          Brands
        </h3>
        {["TechPro", "Zenith", "Quantum", "Nexa"].map((brand) => (
          <label
            key={brand}
            className="flex items-center gap-3 mb-4 cursor-pointer group"
          >
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-slate-300 text-[#00aa5b] focus:ring-[#00aa5b]/20"
            />
            <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors">
              {brand}
            </span>
          </label>
        ))}
      </section>
    </aside>
  );
};

export default FilterSidebar;
