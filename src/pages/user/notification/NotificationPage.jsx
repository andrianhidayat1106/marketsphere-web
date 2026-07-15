import React, { useState } from "react";
import {
  Bell,
  Search,
  ShoppingCart,
  MessageSquare,
  Tag,
  Truck,
  RefreshCw,
  MoreVertical,
  Check,
} from "lucide-react";
import Navbar from "../../../components/layout/Navbar.jsx";
import Footer from "../../../components/layout/Footer.jsx";

/**
 * MarketSphere Notifications Component
 * Built with React and Tailwind CSS (JSX Version).
 */

const NotificationPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { label: "All", count: 12, icon: <Bell size={18} /> },
    { label: "Promotions", count: 3, icon: <Tag size={18} /> },
    { label: "Order Status", count: 2, icon: <Truck size={18} /> },
    { label: "System Updates", count: 0, icon: <RefreshCw size={18} /> },
  ];

  const notifications = [
    {
      id: 1,
      type: "order",
      title: "Order Shipped!",
      description:
        "Your order #ORD-88392 is on its way. Track your package now.",
      time: "Just now",
      isRead: false,
      icon: <Truck className="w-6 h-6 text-emerald-600" />,
      color: "border-emerald-500",
      actionLabel: "Track Order",
    },
    {
      id: 2,
      type: "promo",
      title: "Flash Sale Alert: Electronics",
      description:
        "Get up to 50% off on top electronics. Sale ends in 4 hours!",
      time: "2 hours ago",
      isRead: false,
      icon: <Tag className="w-6 h-6 text-orange-600" />,
      color: "border-orange-500",
      actionLabel: "Flash Sale",
      badge: "Ends Soon",
    },
    {
      id: 3,
      type: "system",
      title: "New Features Available",
      description:
        "We've updated our return policy process to make it faster and easier for you.",
      time: "Yesterday",
      isRead: true,
      icon: <RefreshCw className="w-6 h-6 text-blue-600" />,
      color: "border-slate-200",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        {/* Navigation Bar */}
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">
                Notifications
              </h1>
              <p className="text-slate-500 font-medium">
                Stay updated with your latest alerts.
              </p>
            </div>
            <button className="flex items-center gap-2 text-sm font-bold text-[#00aa5b] hover:underline">
              <Check size={18} />
              Mark all as read
            </button>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Sidebar Filters */}
            <aside className="col-span-3">
              <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 overflow-hidden">
                <div className="space-y-1">
                  {filters.map((filter) => (
                    <button
                      key={filter.label}
                      onClick={() => setActiveFilter(filter.label)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-200 ${
                        activeFilter === filter.label
                          ? "bg-[#00aa5b] text-white shadow-lg shadow-[#00aa5b]/20"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {filter.icon}
                        <span className="font-bold text-sm">
                          {filter.label}
                        </span>
                      </div>
                      {filter.count > 0 && (
                        <span
                          className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                            activeFilter === filter.label
                              ? "bg-white text-[#00aa5b]"
                              : "bg-red-500 text-white"
                          }`}
                        >
                          {filter.count}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Notifications List */}
            <section className="col-span-9 space-y-4">
              {notifications
                .filter(
                  (n) =>
                    activeFilter === "All" ||
                    (activeFilter === "Promotions" && n.type === "promo") ||
                    (activeFilter === "Order Status" && n.type === "order") ||
                    (activeFilter === "System Updates" && n.type === "system")
                )
                .map((notif) => (
                  <div
                    key={notif.id}
                    className={`bg-white rounded-3xl border-l-4 ${notif.color} shadow-sm border border-y-slate-100 border-r-slate-100 p-6 flex items-start gap-6 hover:shadow-md transition-shadow relative group cursor-pointer`}
                  >
                    <div className="p-4 bg-slate-50 rounded-2xl group-hover:scale-105 transition-transform">
                      {notif.icon}
                    </div>

                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-black text-slate-900">
                          {notif.title}
                        </h3>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {notif.time}
                        </span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4 max-w-2xl">
                        {notif.description}
                      </p>

                      <div className="flex items-center gap-3">
                        {notif.actionLabel && (
                          <button
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                              notif.type === "order"
                                ? "border-2 border-[#00aa5b] text-[#00aa5b] hover:bg-[#00aa5b] hover:text-white"
                                : "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20"
                            }`}
                          >
                            {notif.actionLabel}
                          </button>
                        )}
                        {notif.badge && (
                          <span className="px-3 py-2 bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-xl">
                            {notif.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors opacity-0 group-hover:opacity-100">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                ))}

              {/* Empty State Simulation for System Updates */}
              {activeFilter === "System Updates" && (
                <div className="py-20 flex flex-col items-center justify-center bg-white rounded-3xl border border-dashed border-slate-200">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-6">
                    <RefreshCw size={40} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    No system updates
                  </h3>
                  <p className="text-sm text-slate-500">
                    You're all caught up with the latest platform changes.
                  </p>
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default NotificationPage;
