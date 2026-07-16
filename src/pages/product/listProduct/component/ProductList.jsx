import React from "react";
import {
  Grid,
  List as ListIcon,
  ChevronDown,
  ShoppingCart,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const ProductList = ({ products, viewMode, setViewMode, formatCurrency }) => {
  return (
    <div className="col-span-9">
      {/* Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-slate-400">
            Showing 1-24 of 1,452 results
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 border border-slate-100 rounded-xl p-1 bg-slate-50/50">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === "grid"
                  ? "bg-white shadow-sm text-[#00aa5b]"
                  : "text-slate-400"
              }`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === "list"
                  ? "bg-white shadow-sm text-[#00aa5b]"
                  : "text-slate-400"
              }`}
            >
              <ListIcon size={18} />
            </button>
          </div>
          <div className="relative group">
            <select className="pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-xs font-black outline-none appearance-none cursor-pointer">
              <option>Sort by: Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Products Display */}
      <div
        className={`grid ${
          viewMode === "grid" ? "grid-cols-4 gap-6" : "grid-cols-1 gap-4"
        }`}
      >
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-xl transition-all group flex flex-col cursor-pointer"
          >
            <div className="relative aspect-square bg-slate-50 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {product.tag && (
                <div
                  className={`absolute top-4 left-4 text-[10px] font-black px-2.5 py-1 rounded-lg ${
                    product.tag === "SALE"
                      ? "bg-red-500 text-white"
                      : "bg-emerald-500 text-white"
                  }`}
                >
                  {product.tag}
                </div>
              )}
              <button className="absolute bottom-4 right-4 w-12 h-12 bg-[#00aa5b] text-white rounded-2xl shadow-xl flex items-center justify-center translate-y-16 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#008f4d]">
                <ShoppingCart size={20} />
              </button>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xs font-bold text-slate-700 mb-3 line-clamp-2 leading-relaxed h-8">
                {product.name}
              </h3>
              <div className="mt-auto">
                <p className="text-lg font-black text-[#00aa5b] mb-3">
                  {formatCurrency(product.price)}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                    <Star size={12} fill="#fbbf24" className="text-[#fbbf24]" />
                    <span>{product.rating}</span>
                    <span>({product.reviews})</span>
                  </div>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                    {product.location}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-16 flex justify-center items-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-[#00aa5b] transition-all">
          <ChevronLeft size={18} />
        </button>
        {[1, 2, 3, "...", 60].map((page, idx) => (
          <button
            key={idx}
            className={`w-10 h-10 text-xs font-black rounded-xl transition-all ${
              page === 1
                ? "bg-[#00aa5b] text-white shadow-lg shadow-[#00aa5b]/20"
                : "bg-white border border-slate-100 text-slate-400 hover:border-[#00aa5b] hover:text-[#00aa5b]"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-[#00aa5b] transition-all">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
