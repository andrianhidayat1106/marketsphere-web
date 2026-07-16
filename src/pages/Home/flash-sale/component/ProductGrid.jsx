import React from "react";
import { Zap } from "lucide-react";

const ProductGrid = ({ products, formatCurrency }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col overflow-hidden"
        >
          <div className="relative aspect-square overflow-hidden bg-slate-50">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Discount Badge */}
            <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-md shadow-lg">
              {product.discount}
            </div>

            {/* Warning Badge */}
            {product.tag && (
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-red-100 flex items-center justify-center gap-2">
                <Zap size={12} className="text-orange-500 fill-current" />
                <span className="text-[8px] font-black text-red-600 uppercase tracking-widest">
                  {product.tag}
                </span>
              </div>
            )}
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xs font-bold text-slate-700 mb-3 line-clamp-2 leading-relaxed h-8">
              {product.name}
            </h3>

            <div className="mt-auto">
              <p className="text-lg font-black text-red-600 mb-0.5">
                {formatCurrency(product.price)}
              </p>
              <p className="text-[10px] font-bold text-slate-300 line-through mb-4">
                {formatCurrency(product.oldPrice)}
              </p>

              {/* Stock Indicator */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-wider">
                  <span
                    className={
                      product.stock < 5 ? "text-red-500" : "text-slate-400"
                    }
                  >
                    Sisa {product.stock} Stok
                  </span>
                  <span className="text-slate-400">
                    {product.soldPercentage}% Terjual
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      product.soldPercentage > 80
                        ? "bg-gradient-to-r from-orange-400 to-red-600"
                        : "bg-[#00aa5b]"
                    }`}
                    style={{ width: `${product.soldPercentage}%` }}
                  ></div>
                </div>
              </div>

              <button className="w-full bg-[#00aa5b] hover:bg-[#008f4d] active:scale-[0.98] text-white font-black py-3 rounded-xl text-xs transition-all shadow-lg shadow-[#00aa5b]/20">
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
