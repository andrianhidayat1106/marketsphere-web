import React from "react";
import { Star, Truck, Minus, Plus, ShoppingCart } from "lucide-react";

const ProductInfoActions = ({
  product,
  selectedColor,
  setSelectedColor,
  quantity,
  setQuantity,
  formatCurrency,
}) => {
  return (
    <div className="col-span-7 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-10">
      <div className="flex items-center gap-3 mb-4">
        {product.mall && (
          <span className="bg-[#00aa5b] text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
            Mall
          </span>
        )}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              size={14}
              fill={s <= 4 ? "#fbbf24" : "none"}
              className={s <= 4 ? "text-[#fbbf24]" : "text-slate-200"}
            />
          ))}
          <span className="text-xs font-bold text-slate-400 ml-1">
            {product.rating} ({product.reviews} Ratings)
          </span>
        </div>
      </div>

      <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-tight mb-6">
        {product.name}
      </h1>

      <div className="bg-emerald-50/50 rounded-3xl p-6 mb-8 border border-emerald-50">
        <div className="flex items-baseline gap-4 mb-2">
          <span className="text-4xl font-black text-[#00aa5b]">
            {formatCurrency(product.price)}
          </span>
          <span className="text-lg text-slate-400 line-through font-bold">
            {formatCurrency(product.oldPrice)}
          </span>
          <span className="bg-red-100 text-red-500 text-xs font-black px-2 py-0.5 rounded-md">
            {product.discount}
          </span>
        </div>
        <p className="text-xs font-bold text-red-400 flex items-center gap-1">
          <span className="animate-pulse">🔥</span> Flash sale ends in 02:14:59
        </p>
      </div>

      {/* Variant Selector */}
      <div className="space-y-6 mb-10">
        <div>
          <label className="block text-sm font-black text-slate-900 uppercase tracking-widest mb-4">
            Color: <span className="text-slate-400">{selectedColor}</span>
          </label>
          <div className="flex gap-3">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColor(c.name)}
                className={`w-12 h-12 rounded-xl border-4 transition-all ${
                  selectedColor === c.name
                    ? "border-[#00aa5b] scale-110 shadow-lg"
                    : "border-transparent"
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        </div>

        {/* Shipping Info Card */}
        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
          <div className="p-3 bg-white rounded-xl text-[#00aa5b] shadow-sm">
            <Truck size={20} />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900">
              Free Standard Shipping
            </h4>
            <p className="text-xs text-slate-500 font-medium">
              Estimated delivery by Oct 24 - Oct 26
            </p>
          </div>
        </div>
      </div>

      {/* Purchase Actions */}
      <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
        <div className="flex items-center border-2 border-slate-100 rounded-2xl bg-white shadow-sm overflow-hidden">
          <button
            className="p-4 hover:bg-slate-50 text-slate-400 border-r border-slate-100 transition-colors"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus size={18} />
          </button>
          <input
            type="number"
            className="w-14 text-center text-lg font-black bg-transparent outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            value={quantity}
            readOnly
          />
          <button
            className="p-4 hover:bg-slate-50 text-slate-400 border-l border-slate-100 transition-colors"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus size={18} />
          </button>
        </div>

        <button className="flex-grow flex items-center justify-center gap-3 bg-white border-2 border-[#00aa5b] text-[#00aa5b] font-black py-4 rounded-2xl hover:bg-emerald-50 transition-all active:scale-95">
          <ShoppingCart size={20} />
          Add to Cart
        </button>

        <button className="flex-grow bg-[#00aa5b] hover:bg-[#008f4d] text-white font-black py-4 rounded-2xl shadow-lg shadow-[#00aa5b]/20 transition-all active:scale-95">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductInfoActions;
