import React from "react";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Shirt,
  Home,
  Sparkles,
  Utensils,
  Gamepad2,
  PawPrint,
  MoreHorizontal,
} from "lucide-react";

export default function Categories() {
  // Data array untuk merender item kategori secara dinamis
  const categoryData = [
    { id: "electronics", name: "Electronics", icon: Smartphone },
    { id: "fashion", name: "Fashion", icon: Shirt },
    { id: "home-living", name: "Home & Living", icon: Home },
    { id: "beauty", name: "Beauty", icon: Sparkles },
    { id: "groceries", name: "Groceries", icon: Utensils },
    { id: "toys-games", name: "Toys & Games", icon: Gamepad2 },
    { id: "pet-supplies", name: "Pet Supplies", icon: PawPrint },
  ];

  return (
    <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-10">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
        {/* Render Kategori Otomatis */}
        {categoryData.map((category) => {
          const IconComponent = category.icon;
          return (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="flex flex-col items-center gap-3 group text-center"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-[#00aa5b]/10 group-hover:text-[#00aa5b] transition-all group-hover:scale-110">
                <IconComponent size={24} />
              </div>
              <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                {category.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
