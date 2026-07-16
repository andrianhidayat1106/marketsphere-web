import { useState, useEffect } from "react";
import FlashSaleHero from "./component/FlashSaleHero.jsx";
import ProductGrid from "./component/ProductGrid.jsx";
import ReminderBanner from "./component/ReminderBanner.jsx";
import { formatRupiah } from "../../../utils/formatCurrency.js";

/**
 * FlashSalePage
 * Navbar & Footer sudah di-handle oleh MainLayout.
 */
const FlashSalePage = () => {
  const [activeSession, setActiveSession] = useState("Berlangsung");
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 55,
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

  const sessions = [
    { label: "Berlangsung", time: "12:00 - 15:00" },
    { label: "Akan Datang", time: "15:00 - 18:00" },
    { label: "Besok", time: "10:00 - 12:00" },
    { label: "Besok", time: "15:00 - 18:00" },
  ];

  const products = [
    {
      id: 1,
      name: "Smartphone Ultimate Gen 5 - 256GB Midnight Black",
      price: 4599000,
      oldPrice: 12000000,
      discount: "-65%",
      stock: 3,
      soldPercentage: 97,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop",
      tag: "SEGERA HABIS",
    },
    {
      id: 2,
      name: "Wireless Audio-Pro Headphones V3 ANC",
      price: 899000,
      oldPrice: 1799000,
      discount: "-50%",
      stock: 12,
      soldPercentage: 80,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Laptop Ultra-Slim X1 - Core i7 16GB",
      price: 12499000,
      oldPrice: 18500000,
      discount: "-40%",
      stock: 5,
      soldPercentage: 90,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
      tag: "STOK TERBATAS",
    },
    {
      id: 4,
      name: "Air Purifier HEPA 13 - Quiet Mode Smart App",
      price: 1250000,
      oldPrice: 1800000,
      discount: "-30%",
      stock: 25,
      soldPercentage: 45,
      image:
        "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Espresso Machine Pro - Barista Quality Home",
      price: 2100000,
      oldPrice: 4700000,
      discount: "-55%",
      stock: 2,
      soldPercentage: 98,
      image:
        "https://images.unsplash.com/photo-1517706362655-893d8b16ef54?q=80&w=2069&auto=format&fit=crop",
      tag: "HAMPIR HABIS",
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <FlashSaleHero timeLeft={timeLeft} />

      {/* Session Tabs */}
      <nav className="bg-white border-b border-slate-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-4">
            {sessions.map((session, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSession(session.label)}
                className={`py-6 flex flex-col items-center gap-1 transition-all relative ${
                  activeSession === session.label
                    ? "text-[#00aa5b]"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <span className="text-sm font-black uppercase tracking-wider">
                  {session.label}
                </span>
                <span className="text-[10px] font-bold opacity-60">
                  {session.time}
                </span>
                {activeSession === session.label && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00aa5b] rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-12 pb-20">
        <ProductGrid products={products} formatCurrency={formatRupiah} />
        <ReminderBanner />
      </main>
    </>
  );
};

export default FlashSalePage;
