import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function DailyDiscover({ dailyDiscover }) {
  return (
    <section>
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest mb-2">
          Daily Discover
        </h2>
        <div className="w-16 h-1 bg-[#00aa5b] rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {dailyDiscover.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all group flex flex-col"
          >
            <div className="relative aspect-square bg-slate-50 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              {product.tag && (
                <div
                  className={`absolute top-0 right-0 text-[10px] font-black px-2 py-1 rounded-bl-xl ${
                    product.tag === "Mall"
                      ? "bg-red-600 text-white"
                      : "bg-emerald-500 text-white"
                  }`}
                >
                  {product.tag}
                </div>
              )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xs font-semibold text-slate-700 line-clamp-2 mb-3 h-8">
                {product.name}
              </h3>
              <div className="mt-auto">
                <p className="text-sm font-black text-[#00aa5b] mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                    <Star size={12} fill="#fbbf24" className="text-[#fbbf24]" />
                    <span>{product.rating}</span>
                    <span className="ml-1">({product.reviews})</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          to="/products"
          className="px-10 py-3 border-2 border-[#00aa5b] text-[#00aa5b] font-bold rounded-xl hover:bg-[#00aa5b] hover:text-white transition-all active:scale-95"
        >
          Load More
        </Link>
      </div>
    </section>
  );
}
