import React, { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Truck,
  BarChart3,
  Wallet,
  Megaphone,
  Settings,
  LogOut,
  Search,
  Bell,
  Plus,
  Users,
  ShieldCheck,
  AlertCircle,
  TrendingUp,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Activity,
  Database,
  HardDrive,
  UserCheck,
  FileText,
} from "lucide-react";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  const metrics = [
    {
      label: "Total Revenue",
      value: "$2.4M",
      growth: "+12.5%",
      icon: <Wallet className="w-6 h-6 text-emerald-600" />,
      trend: "up",
    },
    {
      label: "New Registered Users",
      value: "14,205",
      growth: "+8.2%",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      trend: "up",
    },
    {
      label: "Pending Seller Verifications",
      value: "342",
      status: "Action Needed",
      icon: <ShieldCheck className="w-6 h-6 text-orange-600" />,
      trend: "neutral",
    },
    {
      label: "Active Disputes",
      value: "89",
      status: "High Priority",
      icon: <AlertCircle className="w-6 h-6 text-red-600" />,
      trend: "down",
    },
  ];

  const transactions = [
    {
      id: "#TRX-98231",
      seller: "TechHaven",
      amount: "$1,249.00",
      status: "Completed",
      date: "Oct 24, 14:32",
    },
    {
      id: "#TRX-98230",
      seller: "Luxe Apparel",
      amount: "$340.50",
      status: "Processing",
      date: "Oct 24, 13:15",
    },
    {
      id: "#TRX-98229",
      seller: "HomeGoods Direct",
      amount: "$89.99",
      status: "Failed",
      date: "Oct 24, 11:05",
    },
    {
      id: "#TRX-98228",
      seller: "ElectroWorld",
      amount: "$4,500.00",
      status: "Completed",
      date: "Oct 24, 09:45",
    },
  ];

  const sidebarLinks = [
    { label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { label: "Product Management", icon: <Package size={20} /> },
    { label: "Order Tracking", icon: <Truck size={20} /> },
    { label: "Sales Analytics", icon: <BarChart3 size={20} /> },
    { label: "Finance", icon: <Wallet size={20} /> },
    { label: "Marketing", icon: <Megaphone size={20} /> },
  ];

  const systemHealth = [
    {
      label: "API Gateway",
      status: "99.9% Uptime",
      color: "bg-emerald-500",
      value: 100,
    },
    {
      label: "Database Load",
      status: "65% Load",
      color: "bg-orange-500",
      value: 65,
    },
    {
      label: "Storage Capacity",
      status: "82% Used",
      color: "bg-red-500",
      value: 82,
    },
  ];

  const quickActions = [
    {
      label: "Manage Admins",
      icon: <UserCheck className="w-5 h-5 text-emerald-600" />,
    },
    {
      label: "Announcements",
      icon: <Megaphone className="w-5 h-5 text-emerald-600" />,
    },
    {
      label: "Update Policies",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    },
    {
      label: "System Logs",
      icon: <FileText className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full z-20">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#00aa5b] rounded-xl flex items-center justify-center shadow-lg shadow-[#00aa5b]/20 text-white">
              <TrendingUp size={24} />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 leading-tight">
                Seller Center
              </h1>
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                Elite Merchant Status
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-grow px-4 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setActiveTab(link.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === link.label
                  ? "bg-[#00aa5b] text-white shadow-md shadow-[#00aa5b]/20"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {link.icon}
              <span className="font-semibold text-sm">{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-slate-100">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#00aa5b] text-white rounded-xl font-bold text-sm mb-4 hover:bg-[#008f4d] transition-colors shadow-lg shadow-[#00aa5b]/10">
            <Plus size={18} />
            Add New Product
          </button>

          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">
              <Settings size={18} />
              Settings
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:text-red-600 transition-colors text-sm font-medium">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow ml-64 p-8">
        {/* Top Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Global Platform Overview
            </h2>
            <p className="text-slate-500 font-medium">
              Super Admin Dashboard & System Health
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#00aa5b] transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Search transactions, sellers, orders..."
                className="pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl w-80 outline-none focus:border-[#00aa5b] focus:ring-4 focus:ring-[#00aa5b]/5 transition-all font-medium text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <button className="p-3 bg-white border border-slate-200 rounded-xl relative hover:border-slate-300 transition-colors">
              <Bell size={20} className="text-slate-600" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>

            <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900 leading-none">
                  Admin Authority
                </p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  Root Access
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-200 overflow-hidden border-2 border-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="Admin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Metrics Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform">
                  {metric.icon}
                </div>
                {metric.growth && (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                    {metric.growth}
                  </span>
                )}
                {metric.status && (
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-lg ${
                      metric.status === "High Priority"
                        ? "text-red-600 bg-red-50"
                        : "text-orange-600 bg-orange-50"
                    }`}
                  >
                    {metric.status}
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold text-slate-500 mb-1">
                {metric.label}
              </p>
              <h3 className="text-2xl font-black text-slate-900">
                {metric.value}
              </h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Recent Transactions */}
          <div className="col-span-8 bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center">
              <h3 className="font-bold text-lg text-slate-900">
                Recent Transaction Activities
              </h3>
              <button className="text-sm font-bold text-[#00aa5b] hover:underline">
                View All
              </button>
            </div>
            <div className="flex-grow">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50/50">
                    <th className="px-6 py-4">Transaction ID</th>
                    <th className="px-6 py-4">Seller</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {transactions.map((trx, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="px-6 py-4 font-bold text-sm text-[#00aa5b]">
                        {trx.id}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-100"></div>
                          <span className="text-sm font-bold text-slate-700">
                            {trx.seller}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold text-sm text-slate-900">
                        {trx.amount}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                            trx.status === "Completed"
                              ? "bg-emerald-100 text-emerald-700"
                              : trx.status === "Processing"
                              ? "bg-slate-100 text-slate-600"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {trx.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs font-semibold text-slate-400">
                        {trx.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-slate-50 flex justify-end gap-2">
              <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400">
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Sidebar Widgets */}
          <div className="col-span-4 space-y-6">
            {/* System Health */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
                System Health
              </h3>
              <div className="space-y-6">
                {systemHealth.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-slate-500 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span
                        className={
                          item.value > 80 ? "text-red-600" : "text-emerald-600"
                        }
                      >
                        {item.status}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${item.color}`}
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Management */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-6">
                Quick Management
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, idx) => (
                  <button
                    key={idx}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-50 bg-slate-50/30 hover:bg-[#00aa5b]/5 hover:border-[#00aa5b]/20 transition-all group"
                  >
                    <div className="p-2 bg-white rounded-xl shadow-sm mb-3 group-hover:scale-110 transition-transform">
                      {action.icon}
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 group-hover:text-[#00aa5b] transition-colors text-center">
                      {action.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
