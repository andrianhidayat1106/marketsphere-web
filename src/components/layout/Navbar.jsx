import { Bell, Globe, MessageSquare, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Nav */}
        <div className="flex items-center justify-between py-4 gap-8">
          <Link to={"/"}>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-[#00aa5b] rounded-lg flex items-center justify-center text-white">
                <Globe size={20} />
              </div>
              <span className="text-xl font-black tracking-tight text-[#00aa5b]">
                MarketSphere
              </span>
            </div>
          </Link>

          <div className="flex-grow max-w-2xl relative">
            <input
              type="text"
              placeholder="Search products, brands and categories..."
              className="w-full pl-4 pr-12 py-2.5 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-[#00aa5b]/20 outline-none transition-all text-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#00aa5b] text-white rounded-md hover:bg-[#008f4d] transition-colors">
              <Search size={18} />
            </button>
          </div>

          <div className="flex items-center gap-5 text-slate-600">
            <Link
              to={"/cart"}
              className="relative hover:text-[#00aa5b] transition-colors"
            >
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                3
              </span>
            </Link>
            <Link to={"/notification"}>
              <button className="hover:text-[#00aa5b] transition-colors">
                <Bell size={24} />
              </button>
            </Link>
            <Link to={"/chat"}>
              <button className="hover:text-[#00aa5b] transition-colors">
                <MessageSquare size={24} />
              </button>
            </Link>
            <Link to={"/profile"}>
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm cursor-pointer ml-2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
