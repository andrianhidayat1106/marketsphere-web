import React from "react";
import {
  ArrowLeft,
  Package,
  Truck,
  CheckCircle2,
  MapPin,
  ChevronRight,
  Copy,
  FileText,
  HelpCircle,
  Search,
  ShoppingCart,
  Bell,
  MessageSquare,
} from "lucide-react";

/**
 * MarketSphere Order Tracking Component
 * Built with React and Tailwind CSS.
 */
const OrderTrackingPage = () => {
  const orderInfo = {
    id: "SP-2024-88A9F1B",
    date: "24 Okt 2024, 14:30 WIB",
    total: 4599000,
    status: "Lunas",
    courier: "JNT Express Reguler",
    receipt: "JP8819203001",
    destination: "Jakarta Selatan, DKI Jakarta",
  };

  const trackingSteps = [
    {
      status: "Pesanan Sampai",
      description: "Estimasi: 26-28 Okt 2024",
      time: "",
      icon: <Package size={20} />,
      isCompleted: false,
      isActive: false,
    },
    {
      status: "Pesanan Dikirim",
      description:
        "Paket sedang dalam perjalanan menuju kota tujuan (Jakarta).",
      time: "25 Okt 2024, 08:15 WIB",
      icon: <Truck size={20} />,
      isCompleted: true,
      isActive: true,
    },
    {
      status: "Pesanan Dikemas",
      description: "Penjual telah menyerahkan paket ke kurir.",
      time: "24 Okt 2024, 18:30 WIB",
      icon: <Package size={20} />,
      isCompleted: true,
      isActive: false,
    },
    {
      status: "Pesanan Diterima",
      description: "Pembayaran terverifikasi. Pesanan diteruskan ke penjual.",
      time: "24 Okt 2024, 14:35 WIB",
      icon: <CheckCircle2 size={20} />,
      isCompleted: true,
      isActive: false,
    },
  ];

  const products = [
    {
      id: 1,
      name: "Smartphone Nova Pro X5G - 256GB Midnight Black",
      variant: "Black, 256GB",
      qty: 1,
      price: 4499000,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Ultra Clear Shockproof Case for Nova Pro X5G",
      variant: "Clear",
      qty: 2,
      price: 25000,
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format&fit=crop",
    },
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-4 gap-8">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-[#00aa5b] rounded-lg flex items-center justify-center text-white font-black text-xl">
                M
              </div>
              <span className="text-xl font-black tracking-tight text-[#00aa5b]">
                MarketSphere
              </span>
            </div>

            <div className="flex-grow max-w-2xl relative">
              <input
                type="text"
                placeholder="Cari pesanan atau produk..."
                className="w-full pl-4 pr-12 py-2.5 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-[#00aa5b]/20 outline-none transition-all text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#00aa5b] text-white rounded-md hover:bg-[#008f4d] transition-colors">
                <Search size={18} />
              </button>
            </div>

            <div className="flex items-center gap-5 text-slate-600">
              <button className="hover:text-[#00aa5b] transition-colors">
                <ShoppingCart size={24} />
              </button>
              <button className="relative hover:text-[#00aa5b] transition-colors">
                <Bell size={24} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
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

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
        {/* Back Button & Title */}
        <div className="flex items-center gap-4 mb-8">
          <button className="p-2 hover:bg-white rounded-full text-slate-400 transition-all border border-transparent hover:border-slate-100 shadow-sm">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Detail Pesanan & Pelacakan
          </h1>
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-8 space-y-6">
            {/* Order Status Header Card */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">
                    No. Pesanan
                  </label>
                  <h2 className="text-xl font-black text-slate-900">
                    {orderInfo.id}
                  </h2>
                  <p className="text-xs font-semibold text-slate-400 mt-1">
                    Dibeli pada {orderInfo.date}
                  </p>
                </div>
                <div className="text-right">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">
                    Total Pembayaran
                  </label>
                  <div className="text-2xl font-black text-[#00aa5b] mb-2">
                    {formatCurrency(orderInfo.total)}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider rounded-lg border border-emerald-100">
                    <CheckCircle2
                      size={12}
                      fill="currentColor"
                      className="text-white"
                    />
                    {orderInfo.status}
                  </span>
                </div>
              </div>

              {/* Courier Info Bar */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#00aa5b] shadow-sm border border-slate-100">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {orderInfo.courier}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      Resi:{" "}
                      <span className="font-bold text-slate-700">
                        {orderInfo.receipt}
                      </span>
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-xs font-bold text-slate-600 rounded-xl hover:border-[#00aa5b] hover:text-[#00aa5b] transition-all shadow-sm">
                  <Copy size={14} />
                  Salin Resi
                </button>
              </div>
            </section>

            {/* Tracking Timeline Section */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-10">
              <div className="space-y-0 relative">
                {/* Connector Line */}
                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-100"></div>

                {trackingSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative flex gap-8 pb-10 last:pb-0"
                  >
                    <div
                      className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-sm transition-all ${
                        step.isActive
                          ? "bg-[#00aa5b] text-white ring-4 ring-[#00aa5b]/10 scale-110"
                          : step.isCompleted
                          ? "bg-[#00aa5b] text-white"
                          : "bg-slate-100 text-slate-300"
                      }`}
                    >
                      {step.isCompleted && !step.isActive ? (
                        <CheckCircle2 size={18} />
                      ) : (
                        step.icon
                      )}
                    </div>
                    <div className="flex-grow pt-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4
                          className={`font-black tracking-tight ${
                            step.isActive
                              ? "text-slate-900 text-lg"
                              : "text-slate-700 text-sm"
                          }`}
                        >
                          {step.status}
                        </h4>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          {step.time}
                        </span>
                      </div>
                      <p
                        className={`text-sm leading-relaxed ${
                          step.isActive
                            ? "text-slate-600 font-medium"
                            : "text-slate-400"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Product List Section */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-slate-50 flex items-center gap-3">
                <div className="p-2 bg-emerald-50 rounded-xl text-[#00aa5b]">
                  <Package size={20} />
                </div>
                <h3 className="font-bold text-lg text-slate-900">
                  Produk dalam pesanan
                </h3>
              </div>
              <div className="divide-y divide-slate-50">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="p-8 flex gap-6 hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="w-24 h-24 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0 border border-slate-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="font-bold text-slate-900 mb-1 leading-snug line-clamp-2">
                        {product.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">
                        Varian: {product.variant}
                      </p>
                      <p className="text-xs font-bold text-slate-500 bg-slate-100 w-fit px-2 py-0.5 rounded-md">
                        Kuantitas: {product.qty}x
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-black text-slate-900">
                        {formatCurrency(product.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <aside className="col-span-4 space-y-6 sticky top-28">
            {/* Map Preview Card */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
              <div className="h-48 bg-emerald-100 relative overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop"
                  alt="Map"
                  className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#00aa5b] rounded-full flex items-center justify-center text-white shadow-xl ring-8 ring-[#00aa5b]/20 animate-bounce">
                    <MapPin size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-slate-100 rounded-xl text-slate-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">
                      Tujuan Akhir
                    </label>
                    <p className="text-sm font-bold text-slate-800 leading-relaxed">
                      {orderInfo.destination}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Help & Support Card */}
            <section className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-6">
                Butuh Bantuan?
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-3 bg-[#00aa5b] hover:bg-[#008f4d] active:scale-[0.98] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-[#00aa5b]/20">
                  <MessageSquare size={18} />
                  Hubungi Penjual
                </button>
                <button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-100 hover:border-[#00aa5b] hover:text-[#00aa5b] active:scale-[0.98] text-slate-600 font-bold py-4 rounded-2xl transition-all">
                  <FileText size={18} />
                  Unduh Invoice
                </button>
                <button className="w-full flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 active:scale-[0.98] text-slate-500 font-bold py-4 rounded-2xl transition-all">
                  <HelpCircle size={18} />
                  Pusat Bantuan Pelacakan
                </button>
              </div>
            </section>

            {/* Promo Banner Simulation */}
            <div className="bg-[#00aa5b] rounded-[2rem] p-8 text-white relative overflow-hidden group cursor-pointer shadow-xl shadow-[#00aa5b]/20">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
                <Package size={120} />
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-80">
                  Exclusive Offer
                </p>
                <h4 className="text-xl font-black mb-4 leading-tight">
                  Dapatkan Gratis Ongkir untuk Pesanan Berikutnya!
                </h4>
                <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-all">
                  Klaim Sekarang <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 text-center mt-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm font-bold text-slate-400">
            <button className="hover:text-[#00aa5b] transition-colors">
              Tentang Kami
            </button>
            <button className="hover:text-[#00aa5b] transition-colors">
              Kebijakan Privasi
            </button>
            <button className="hover:text-[#00aa5b] transition-colors">
              Syarat & Ketentuan
            </button>
            <button className="hover:text-[#00aa5b] transition-colors">
              Seller Centre
            </button>
            <button className="hover:text-[#00aa5b] transition-colors">
              Hubungi Kami
            </button>
          </div>
          <p className="text-xs text-slate-400 font-medium">
            © 2024 MarketSphere Marketplace. Seluruh hak cipta dilindungi
            undang-undang.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OrderTrackingPage;
