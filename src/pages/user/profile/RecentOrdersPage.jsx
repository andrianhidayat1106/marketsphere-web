import { ShieldCheck } from "lucide-react";
import Navbar from "../../../components/layout/Navbar.jsx";
import Copyright from "../../../components/layout/Copyright.jsx";
import Card from "../../../components/common/Card.jsx";
import InputField from "../../../components/common/InputField.jsx";
import Button from "../../../components/common/Button.jsx";
import { Link } from "react-router-dom";
import RecentOrders from "./component/RecentOrders.jsx";

export default function RecentOrdersPage() {
  const recentOrders = [
    {
      id: "ORD-1092348",
      name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
      price: "$349.00",
      date: "2 days ago",
      status: "SHIPPED",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "ORD-1092110",
      name: "Minimalist Smartwatch Series 8",
      price: "$199.00",
      date: "1 week ago",
      status: "DELIVERED",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    },
    // --- 10 DATA DUMMY TAMBAHAN ---
    {
      id: "ORD-1092551",
      name: "Mechanical Gaming Keyboard RGB",
      price: "$89.99",
      date: "3 days ago",
      status: "PROCESSING",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=2065&auto=format&fit=crop",
    },
    {
      id: "ORD-1092672",
      name: "Ergonomic Office Chair",
      price: "$245.00",
      date: "4 days ago",
      status: "DELIVERED",
      image:
        "https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=2071&auto=format&fit=crop",
    },
    {
      id: "ORD-1092883",
      name: 'UltraWide Gaming Monitor 34"',
      price: "$450.00",
      date: "5 days ago",
      status: "SHIPPED",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "ORD-1093014",
      name: "Leather Bi-Fold Wallet",
      price: "$45.00",
      date: "6 days ago",
      status: "DELIVERED",
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "ORD-1093125",
      name: "Wireless Charging Pad Fast Charge",
      price: "$29.99",
      date: "1 week ago",
      status: "CANCELLED",
      image:
        "https://images.unsplash.com/photo-1622445262465-2481c4574875?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "ORD-1093236",
      name: "Portable Bluetooth Speaker Waterproof",
      price: "$79.00",
      date: "2 weeks ago",
      status: "DELIVERED",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "ORD-1093347",
      name: "Premium Arabica Coffee Beans 1kg",
      price: "$24.50",
      date: "2 weeks ago",
      status: "DELIVERED",
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2061&auto=format&fit=crop",
    },
    {
      id: "ORD-1093458",
      name: "Minimalist Desk Mat Premium Felt",
      price: "$35.00",
      date: "3 weeks ago",
      status: "PROCESSING",
      image:
        "https://images.unsplash.com/photo-1632292224971-0d45778bd364?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "ORD-1093569",
      name: "Stainless Steel Vacuum Water Bottle",
      price: "$18.99",
      date: "1 month ago",
      status: "DELIVERED",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "ORD-1093680",
      name: "4K Action Camera Ultra HD",
      price: "$120.00",
      date: "1 month ago",
      status: "CANCELLED",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        {/* Navigation Bar */}
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
          <div className="flex gap-8">
            {/* Right Content Area */}
            <div className="flex-grow space-y-8">
              <div className="flex flex-col gap-1 mb-2">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                  Recent Orders
                </h1>
                <p className="text-slate-500 font-medium">
                  Track and manage your recent purchases and order history.
                </p>
              </div>

              <RecentOrders recentOrders={recentOrders}></RecentOrders>
            </div>
          </div>
        </main>

        {/* Footer */}
      </div>
      <Copyright />
    </>
  );
}
