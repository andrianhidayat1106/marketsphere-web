import { Bell, Globe, MessageSquare, Search, ShoppingCart, User, Store, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Di sini bisa ditambahkan logika clear token/session
    setIsProfileOpen(false);
    navigate("/login");
  };

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
            <Link
              to={"/products"}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#00aa5b] text-white rounded-md hover:bg-[#008f4d] transition-colors"
            >
              <Search size={18} />
            </Link>
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
            
            {/* Profile Dropdown */}
            <div className="relative ml-2" ref={dropdownRef}>
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={`w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 transition-all ${isProfileOpen ? 'border-[#00aa5b] shadow-md ring-2 ring-[#00aa5b]/20' : 'border-white shadow-sm hover:border-slate-200'}`}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50 transform opacity-100 scale-100 transition-all origin-top-right">
                  <div className="p-4 border-b border-slate-50 bg-slate-50/50">
                    <p className="text-sm font-black text-slate-900">John Doe</p>
                    <p className="text-xs font-bold text-slate-400 mt-0.5">johndoe@example.com</p>
                  </div>
                  <div className="p-2 space-y-1">
                    <Link 
                      to="/profile" 
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-slate-600 hover:text-[#00aa5b] hover:bg-emerald-50 rounded-xl transition-colors"
                    >
                      <User size={16} /> Profil
                    </Link>
                    <Link 
                      to="/store/register" 
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-slate-600 hover:text-[#00aa5b] hover:bg-emerald-50 rounded-xl transition-colors"
                    >
                      <Store size={16} /> Bikin Toko Anda
                    </Link>
                  </div>
                  <div className="p-2 border-t border-slate-50">
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
