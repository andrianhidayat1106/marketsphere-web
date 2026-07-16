import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Bell,
  MessageSquare,
  Globe,
  MessageCircle,
  Plus,
  Star,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { formatRupiah } from "../../utils/formatCurrency.js";

/**
 * MarketSphere Store Profile Component
 * Built with React and Tailwind CSS.
 */
const StorePage = () => {
  const [activeTab, setActiveTab] = useState("Home");


  const featuredBanners = [
    {
      id: 1,
      title: "Next-Gen Gaming Series",
      subtitle: "Up to 40% Off on selected models",
      cta: "Shop Now",
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2089&auto=format&fit=crop",
      color: "bg-[#00aa5b]",
    },
    {
      id: 2,
      title: "Audio Gear Hub",
      subtitle: "New Arrivals",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Smart Wearables",
      subtitle: "Mulai dari Rp1.500.000",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    },
  ];

  const topSelling = [
    {
      id: 1,
      name: "Premium Wireless Noise-Cancelling Headphones Pro",
      price: 1935000,
      oldPrice: 2985000,
      rating: 4.9,
      reviews: "2.1k",
      sold: "5k+ sold",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
      tag: "Flash Sale",
    },
    {
      id: 2,
      name: "X-Series Smartphone 5G 128GB - Midnight Black",
      price: 7485000,
      rating: 4.8,
      reviews: "890",
      sold: "1.2k sold",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Velocity Run Max Sneakers - Crimson Red Edition",
      price: 1282500,
      oldPrice: 1425000,
      rating: 4.7,
      sold: "800 sold",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
      tag: "Free Shipping",
    },
    {
      id: 4,
      name: "MechKeys K80 TKL Mechanical Gaming Keyboard",
      price: 975000,
      rating: 4.9,
      sold: "3.4k sold",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      name: 'UltraWide 34" Curved Gaming Monitor 144Hz',
      price: 5235000,
      rating: 4.6,
      sold: "420 sold",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=2070&auto=format&fit=crop",
      discount: "15% Off",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-end gap-6 py-2 text-xs font-medium text-slate-500 border-b border-slate-50">
            <button className="hover:text-[#00aa5b]">Flash Sale</button>
            <button className="hover:text-[#00aa5b]">Global</button>

            <button className="hover:text-[#00aa5b]">Help</button>
          </div>

          <div className="flex items-center justify-between py-4 gap-8">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-[#00aa5b] rounded-lg flex items-center justify-center text-white">
                <Globe size={20} />
              </div>
              <span className="text-xl font-black tracking-tight text-[#00aa5b]">
                MarketSphere
              </span>
            </div>

            <div className="flex-grow max-w-2xl relative flex gap-2">
              <div className="relative flex-grow">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-100 border-r border-slate-200 text-[10px] font-bold text-slate-500 rounded-l-md">
                  In this shop
                </div>
                <input
                  type="text"
                  placeholder="Search in TechHaven Electronics..."
                  className="w-full pl-28 pr-12 py-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#00aa5b]/20 outline-none transition-all text-sm"
                />
              </div>
              <button className="p-2.5 bg-[#00aa5b] text-white rounded-md hover:bg-[#008f4d] transition-colors">
                <Search size={18} />
              </button>
            </div>

            <div className="flex items-center gap-5 text-slate-600">
              <button className="hover:text-[#00aa5b] transition-colors">
                <ShoppingCart size={24} />
              </button>
              <button className="hover:text-[#00aa5b] transition-colors">
                <Bell size={24} />
              </button>
              <button className="hover:text-[#00aa5b] transition-colors">
                <MessageSquare size={24} />
              </button>
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm cursor-pointer ml-2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        {/* Store Header Section */}
        <section className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 mb-8">
          {/* Banner */}
          <div className="h-48 relative">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
              alt="Store Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Store Info Overlay */}
          <div className="px-8 pb-6 relative">
            <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-12 mb-6">
              <div className="w-32 h-32 rounded-3xl bg-slate-900 border-4 border-white shadow-xl overflow-hidden flex items-center justify-center p-4">
                <div className="w-full h-full border-2 border-[#00aa5b]/30 rounded-2xl flex items-center justify-center">
                  <Globe size={40} className="text-[#00aa5b]" />
                </div>
              </div>
              <div className="flex-grow mb-2">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-black text-slate-900 md:text-white drop-shadow-none md:drop-shadow-md">
                    TechHaven Electronics
                  </h1>
                  <div className="bg-emerald-500 text-white p-0.5 rounded-full">
                    <ArrowRight size={12} className="rotate-[-45deg]" />
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs font-bold text-slate-500 md:text-slate-100 drop-shadow-none md:drop-shadow-md">
                  <span className="flex items-center gap-1">
                    <Star size={14} fill="#fbbf24" className="text-[#fbbf24]" />{" "}
                    4.9 (12k Ratings)
                  </span>
                  <span className="w-1 h-1 bg-slate-300 md:bg-white/40 rounded-full"></span>
                  <span>45k Followers</span>
                  <span className="w-1 h-1 bg-slate-300 md:bg-white/40 rounded-full"></span>
                  <span className="text-emerald-600 md:text-emerald-400">
                    Active 2 mins ago
                  </span>
                </div>
              </div>
              <div className="flex gap-3 mb-20 md:mb-2">
                <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                  <MessageCircle size={18} />
                  Chat
                </button>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-[#00aa5b] text-white font-bold rounded-xl hover:bg-[#008f4d] transition-all active:scale-95 shadow-lg shadow-[#00aa5b]/20">
                  <Plus size={18} />
                  Follow
                </button>
              </div>
            </div>

            {/* Store Navigation */}
            <nav className="flex gap-10 border-t border-slate-100 pt-6">
              {["Home", "All Products", "Categories"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-black transition-all relative ${
                    activeTab === tab
                      ? "text-[#00aa5b]"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00aa5b] rounded-full"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </section>

        {/* Home Tab Content */}
        {activeTab === "Home" && (
          <div className="space-y-10">
            {/* Featured Grid */}
            <section className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-8 relative aspect-[16/9] rounded-3xl overflow-hidden group cursor-pointer">
                <img
                  src={featuredBanners[0].image}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent p-12 flex flex-col justify-center">
                  <p className="text-[#00aa5b] font-black text-xs uppercase tracking-widest mb-4">
                    Flash Sale
                  </p>
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight max-w-md">
                    {featuredBanners[0].title}
                  </h2>
                  <p className="text-slate-300 font-medium mb-6 md:mb-8">
                    {featuredBanners[0].subtitle}
                  </p>
                  <button className="w-fit px-8 py-3 bg-[#00aa5b] text-white font-black rounded-xl hover:bg-[#008f4d] transition-all shadow-lg shadow-[#00aa5b]/20">
                    {featuredBanners[0].cta}
                  </button>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                {featuredBanners.slice(1).map((banner) => (
                  <div
                    key={banner.id}
                    className="relative flex-grow min-h-[150px] rounded-3xl overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={banner.image}
                      className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-end">
                      <h3 className="text-xl font-black text-white mb-1">
                        {banner.title}
                      </h3>
                      <p className="text-slate-200 text-xs font-bold">
                        {banner.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>



            {/* Top Selling Grid */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Top Selling
                </h2>
                <button className="flex items-center gap-1 text-sm font-bold text-[#00aa5b] hover:underline">
                  View All <ChevronRight size={16} />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {topSelling.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all group flex flex-col"
                  >
                    <div className="relative aspect-square bg-slate-50 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.tag && (
                        <div className="absolute top-0 left-0 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-br-xl">
                          {product.tag}
                        </div>
                      )}
                      {product.discount && (
                        <div className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-black px-2 py-1 rounded-bl-xl">
                          {product.discount}
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-xs font-bold text-slate-700 line-clamp-2 mb-3 h-8 leading-relaxed">
                        {product.name}
                      </h3>
                      <div className="mt-auto">
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-sm font-black text-[#00aa5b]">
                            {formatRupiah(product.price)}
                          </span>
                          {product.oldPrice && (
                            <span className="text-[10px] text-slate-400 line-through">
                              {formatRupiah(product.oldPrice)}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                            <Star
                              size={10}
                              fill="#fbbf24"
                              className="text-[#fbbf24]"
                            />
                            <span>{product.rating}</span>
                          </div>
                          <span className="text-[10px] font-bold text-slate-400">
                            {product.sold}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#00aa5b] rounded-lg flex items-center justify-center text-white font-black">
                  M
                </div>
                <span className="text-lg font-black text-slate-900">
                  MarketSphere
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Empowering global trade with speed, reliability, and precision.
                Join the world's most efficient marketplace.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900 uppercase tracking-widest mb-6">
                Explore
              </h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="hover:text-[#00aa5b] cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-[#00aa5b] cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-[#00aa5b] cursor-pointer">
                  Terms of Service
                </li>
                <li className="hover:text-[#00aa5b] cursor-pointer">
                  Seller Centre
                </li>
                <li className="hover:text-[#00aa5b] cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-50 text-center">
            <p className="text-xs text-slate-400 font-medium">
              © 2024 MarketSphere Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StorePage;
