import { useEffect, useState } from "react";
import Categories from "./component/Categories.jsx";
import FlashSale from "./component/FlashSale.jsx";
import DailyDiscover from "./component/DailyDiscover.jsx";
import HeroBanner from "./component/HeroBanner.jsx";

/**
 * HomePage
 *
 * Navbar & Footer sudah di-handle oleh MainLayout (lihat AppRouter.jsx).
 * Halaman ini hanya fokus ke konten utama.
 */
export default function HomePage() {
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
    <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8 pb-20">
      <HeroBanner />
      <Categories />
      <FlashSale timeLeft={timeLeft} flashSaleProducts={flashSaleProducts} />
      <DailyDiscover dailyDiscover={dailyDiscover} />
    </main>
  );
}
