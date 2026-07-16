import { ChevronRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function FlashSale({ timeLeft, flashSaleProducts }) {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[#00aa5b]">
            <Zap fill="currentColor" size={24} />
            <h2 className="text-2xl font-black italic uppercase tracking-tighter">
              Flash Sale
            </h2>
          </div>
          <div className="flex gap-2 text-white font-black text-sm">
            <span className="bg-slate-900 px-2 py-1 rounded">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <span className="text-slate-900">:</span>
            <span className="bg-slate-900 px-2 py-1 rounded">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-slate-900">:</span>
            <span className="bg-slate-900 px-2 py-1 rounded">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
        <Link
          to="/flash-sale"
          className="text-sm font-bold text-[#00aa5b] hover:underline flex items-center gap-1"
        >
          View All <ChevronRight size={16} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {flashSaleProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all group cursor-pointer flex flex-col"
          >
            <div className="relative aspect-square bg-slate-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-lg">
                -{product.discount}
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-bold text-slate-700 text-sm mb-2 line-clamp-2 leading-relaxed">
                {product.name}
              </h3>
              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-lg font-black text-[#00aa5b]">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-slate-400 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                </div>
                <div className="relative h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                    style={{ width: `${(product.sold / 100) * 100}%` }}
                  ></div>
                </div>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-2">
                  {product.sold < 50 ? `${product.sold} Sold` : "Almost Gone"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
