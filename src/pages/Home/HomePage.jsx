import { useEffect, useState } from "react";
import {
  Search,
  ShoppingCart,
  Bell,
  MessageSquare,
  User,
  Menu,
  ChevronRight,
  Flashlight,
  Globe,
  Ticket,
  HelpCircle,
  Smartphone,
  Shirt,
  Home,
  Sparkles,
  Utensils,
  Gamepad2,
  PawPrint,
  MoreHorizontal,
  Star,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Countdown timer simulation
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { label: "Electronics", icon: <Smartphone size={24} /> },
    { label: "Fashion", icon: <Shirt size={24} /> },
    { label: "Home & Living", icon: <Home size={24} /> },
    { label: "Beauty", icon: <Sparkles size={24} /> },
    { label: "Groceries", icon: <Utensils size={24} /> },
    { label: "Toys & Games", icon: <Gamepad2 size={24} /> },
    { label: "Pet Supplies", icon: <PawPrint size={24} /> },
    { label: "More", icon: <MoreHorizontal size={24} /> },
  ];

  const flashSaleProducts = [
    {
      id: 1,
      name: "Sony WH-1000XM4 Wireless Noise Canceling",
      price: 199.0,
      oldPrice: 349.0,
      sold: 85,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
      discount: "45%",
    },
    {
      id: 2,
      name: "Nike Air Max 270 Running Shoes Red",
      price: 105.0,
      oldPrice: 150.0,
      sold: 40,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
      discount: "30%",
    },
    {
      id: 3,
      name: "Minimalist Smart Watch Series 5",
      price: 89.0,
      oldPrice: 225.0,
      sold: 10,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
      discount: "60%",
    },
  ];

  const dailyDiscover = [
    {
      id: 4,
      name: "Polaroid Now Instant Film Camera - White (Gen 2)",
      price: 119.99,
      rating: 4.8,
      reviews: "1.2k",
      image:
        "https://images.unsplash.com/photo-1526170315830-ef18a283ac16?q=80&w=2070&auto=format&fit=crop",
      tag: "Free Shipping",
    },
    {
      id: 5,
      name: "Pro True Wireless Earbuds Bluetooth 5.3 Active Noise...",
      price: 45.5,
      rating: 4.5,
      reviews: "3.4k",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Luxury Men's Chronograph Stainless Steel Waterproof Watch",
      price: 210.0,
      rating: 4.9,
      reviews: "850",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop",
    },
    {
      id: 7,
      name: 'UltraSlim Book Pro 14" M2 Chip 8GB RAM 256GB SSD',
      price: 999.0,
      rating: 5.0,
      reviews: "245",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
      tag: "Mall",
    },
    {
      id: 8,
      name: "Advanced Hydration Skincare Routine Set (3 Items)",
      price: 75.0,
      rating: 4.7,
      reviews: "5.1k",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Upper Nav */}
          <div className="flex justify-end gap-6 py-2 text-xs font-medium text-slate-500 border-b border-slate-50">
            <button className="hover:text-[#00aa5b]">Flash Sale</button>
            <button className="hover:text-[#00aa5b]">Global</button>
            <button className="hover:text-[#00aa5b]">Vouchers</button>
            <button className="hover:text-[#00aa5b]">Help</button>
          </div>

          {/* Main Nav */}
          <div className="flex items-center justify-between py-4 gap-8">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-[#00aa5b] rounded-lg flex items-center justify-center text-white">
                <Globe size={20} />
              </div>
              <span className="text-xl font-black tracking-tight text-[#00aa5b]">
                MarketSphere
              </span>
            </div>

            <div className="flex-grow max-w-2xl relative">
              <input
                type="text"
                placeholder="Search products, brands and categories..."
                className="w-full pl-4 pr-12 py-2.5 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-[#00aa5b]/20 outline-none transition-all text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#00aa5b] text-white rounded-md hover:bg-[#008f4d] transition-colors">
                <Search size={18} />
              </button>
            </div>

            <div className="flex items-center gap-5 text-slate-600">
              <button className="relative hover:text-[#00aa5b] transition-colors">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                  3
                </span>
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
        {/* Hero Banner */}
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
            <button className="w-fit bg-[#00aa5b] hover:bg-[#008f4d] text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-[#00aa5b]/20 active:scale-95">
              Shop Now
            </button>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00aa5b]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white/40"></div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-10">
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-[#00aa5b]/10 group-hover:text-[#00aa5b] transition-all group-hover:scale-110">
                  {cat.icon}
                </div>
                <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Flash Sale */}
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
                <span className="bg-slate-900 px-2 py-1 rounded">02</span>
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
            <button className="text-sm font-bold text-[#00aa5b] hover:underline flex items-center gap-1">
              View All <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flashSaleProducts.map((product) => (
              <div
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
                      {product.sold < 50
                        ? `${product.sold} Sold`
                        : "Almost Gone"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Discover */}
        <section>
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-2xl font-black text-slate-900 uppercase tracking-widest mb-2">
              Daily Discover
            </h2>
            <div className="w-16 h-1 bg-[#00aa5b] rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {dailyDiscover.map((product) => (
              <div
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
                        <Star
                          size={12}
                          fill="#fbbf24"
                          className="text-[#fbbf24]"
                        />
                        <span>{product.rating}</span>
                        <span className="ml-1">({product.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="px-10 py-3 border-2 border-[#00aa5b] text-[#00aa5b] font-bold rounded-xl hover:bg-[#00aa5b] hover:text-white transition-all active:scale-95">
              Load More
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <h4 className="font-black text-lg text-slate-900 mb-6">
              MarketSphere
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Your premier destination for online shopping, offering endless
              categories and unbeatable prices.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-6">
              Customer Service
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="hover:text-[#00aa5b] cursor-pointer">
                Help Centre
              </li>
              <li className="hover:text-[#00aa5b] cursor-pointer">
                Payment Methods
              </li>
              <li className="hover:text-[#00aa5b] cursor-pointer">
                Return & Refund
              </li>
              <li className="hover:text-[#00aa5b] cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-6">
              About MarketSphere
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="hover:text-[#00aa5b] cursor-pointer">About Us</li>
              <li className="hover:text-[#00aa5b] cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-[#00aa5b] cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-[#00aa5b] cursor-pointer">
                Seller Centre
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-6">
              Download Our App
            </h4>
            <div className="flex flex-col gap-3">
              <div className="bg-slate-900 text-white px-4 py-2 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-slate-800 transition-colors">
                <Smartphone size={20} />
                <div className="text-left">
                  <p className="text-[10px] leading-none">Download on the</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </div>
              <div className="bg-slate-900 text-white px-4 py-2 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-slate-800 transition-colors">
                <Gamepad2 size={20} />
                <div className="text-left">
                  <p className="text-[10px] leading-none">Get it on</p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 border-t border-slate-50 text-center">
          <p className="text-xs text-slate-400 font-medium">
            © 2024 MarketSphere Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
