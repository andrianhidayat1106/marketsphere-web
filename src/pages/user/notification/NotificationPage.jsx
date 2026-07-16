import React, { useState } from "react";
import { Bell, Truck, RefreshCw, Check } from "lucide-react";
import Navbar from "../../../components/layout/Navbar.jsx";
import Footer from "../../../components/layout/Footer.jsx";
import NotificationSidebar from "./component/NotificationSidebar";
import NotificationItem from "./component/NotificationItem";
import NotificationEmptyState from "./component/NotificationEmptyState";

const NotificationPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { label: "All", count: 12, icon: <Bell size={18} /> },
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

  // Menyaring notifikasi berdasarkan filter yang aktif
  const filteredNotifications = notifications.filter(
    (n) =>
      activeFilter === "All" ||
      (activeFilter === "Order Status" && n.type === "order") ||
      (activeFilter === "System Updates" && n.type === "system")
  );

  return (
    <>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
          {/* Header Section */}
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
            {/* 1. Sidebar Filters */}
            <NotificationSidebar
              filters={filters}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />

            {/* Notifications Content Area */}
            <section className="col-span-9 space-y-4">
              {/* 2. List Render */}
              {filteredNotifications.map((notif) => (
                <NotificationItem key={notif.id} notif={notif} />
              ))}

              {/* 3. Empty State Handling */}
              {activeFilter === "System Updates" &&
                filteredNotifications.length === 0 && (
                  <NotificationEmptyState />
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
