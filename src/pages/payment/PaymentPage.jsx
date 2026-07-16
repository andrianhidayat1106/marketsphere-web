import React, { useState } from "react";
import {
  MapPin,
  CreditCard,
  Wallet,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Info,
  ChevronDown,
  Building2,
  Lock,
  ArrowLeft,
} from "lucide-react";

/**
 * MarketSphere Payment Page Component
 * Built with React and Tailwind CSS.
 */
const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("bank_transfer");
  const [selectedBank, setSelectedBank] = useState("");

  const paymentMethods = [
    {
      id: "bank_transfer",
      title: "Transfer Bank (Virtual Account)",
      icon: <Building2 size={20} />,
      options: ["BCA", "Mandiri", "BNI", "BRI"],
    },
    { id: "e_wallet", title: "E-Wallet", icon: <Wallet size={20} /> },
    {
      id: "credit_card",
      title: "Kartu Kredit / Debit",
      icon: <CreditCard size={20} />,
    },
  ];

  const orderItems = [
    {
      id: 1,
      name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones - Black",
      qty: 1,
      price: 5499000,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Apple Watch Series 9 GPS 45mm Midnight Aluminum Case",
      qty: 1,
      price: 7999000,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    },
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const subtotal = orderItems.reduce((acc, item) => acc + item.price, 0);
  const shipping = 25000;
  const voucherDiscount = 100000;
  const serviceFee = 2000;
  const total = subtotal + shipping - voucherDiscount + serviceFee;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-50 rounded-full text-slate-400 transition-colors">
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#00aa5b] rounded-lg flex items-center justify-center text-white font-black">
                M
              </div>
              <span className="text-xl font-black text-[#00aa5b]">
                MarketSphere
              </span>
              <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
              <span className="text-sm font-bold text-slate-500">
                Checkout Aman
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[#00aa5b] font-bold text-xs uppercase tracking-widest">
            <ShieldCheck size={18} />
            100% Aman & Terenkripsi
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
            Pembayaran
          </h1>
          <p className="text-slate-500 font-medium">
            Selesaikan pesanan Anda dengan memilih metode pembayaran di bawah
            ini.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Main Checkout Sections */}
          <div className="col-span-8 space-y-6">
            {/* Shipping Address Section */}
            <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-50 rounded-xl text-[#00aa5b]">
                    <MapPin size={20} />
                  </div>
                  <h2 className="font-bold text-lg text-slate-900">
                    Alamat Pengiriman & Tagihan
                  </h2>
                </div>
                <button className="text-sm font-bold text-[#00aa5b] hover:underline">
                  Ubah
                </button>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-slate-900">Budi Santoso</h3>
                  <span className="text-[10px] font-black bg-slate-200 text-slate-500 px-2 py-0.5 rounded-md uppercase tracking-widest">
                    Utama
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-500 mb-3">
                  +62 812-3456-7890
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Jl. Sudirman No. 45, Tower B, Lantai 12, Unit 12A
                  <br />
                  Kebayoran Baru, Jakarta Selatan
                  <br />
                  DKI Jakarta, 12190
                </p>
              </div>
            </section>

            {/* Payment Method Section */}
            <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-emerald-50 rounded-xl text-[#00aa5b]">
                  <CreditCard size={20} />
                </div>
                <h2 className="font-bold text-lg text-slate-900">
                  Pilih Metode Pembayaran
                </h2>
              </div>

              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="space-y-4">
                    <button
                      onClick={() => setSelectedMethod(method.id)}
                      className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all ${
                        selectedMethod === method.id
                          ? "border-[#00aa5b] bg-[#00aa5b]/[0.02] ring-1 ring-[#00aa5b]"
                          : "border-slate-100 hover:border-slate-200 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                            selectedMethod === method.id
                              ? "border-[#00aa5b]"
                              : "border-slate-200"
                          }`}
                        >
                          {selectedMethod === method.id && (
                            <div className="w-3 h-3 bg-[#00aa5b] rounded-full"></div>
                          )}
                        </div>
                        <span className="font-bold text-slate-700">
                          {method.title}
                        </span>
                      </div>
                      <div className="text-slate-300">{method.icon}</div>
                    </button>

                    {/* Method Details (Bank Selection) */}
                    {selectedMethod === method.id && method.options && (
                      <div className="ml-10 p-6 bg-slate-50 rounded-2xl border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-xs font-bold text-slate-500 mb-4">
                          Pilih bank untuk melihat nomor Virtual Account.
                          Verifikasi otomatis dalam 10 menit.
                        </p>
                        <div className="grid grid-cols-4 gap-3">
                          {method.options.map((bank) => (
                            <button
                              key={bank}
                              onClick={() => setSelectedBank(bank)}
                              className={`py-3 px-4 rounded-xl border font-bold text-xs transition-all ${
                                selectedBank === bank
                                  ? "border-[#00aa5b] bg-white text-[#00aa5b] shadow-sm"
                                  : "border-slate-200 bg-white text-slate-400 hover:border-slate-300"
                              }`}
                            >
                              {bank}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Order Summary */}
          <aside className="col-span-4 sticky top-28 space-y-6">
            <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8">
              <h2 className="font-bold text-lg text-slate-900 mb-6">
                Ringkasan Pesanan
              </h2>

              {/* Order Items List */}
              <div className="space-y-4 mb-8">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-2">
                    <div className="w-16 h-16 bg-slate-50 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-slate-700 line-clamp-2 leading-relaxed mb-1">
                        {item.name}
                      </h4>
                      <p className="text-[10px] font-bold text-slate-400">
                        Qty: {item.qty}
                      </p>
                      <p className="text-sm font-black text-slate-900 mt-1">
                        {formatCurrency(item.price)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-[1px] bg-slate-50 w-full mb-6"></div>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">
                    Subtotal ({orderItems.length} Produk)
                  </span>
                  <span className="text-slate-900 font-bold">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">
                    Ongkos Kirim
                  </span>
                  <span className="text-slate-900 font-bold">
                    {formatCurrency(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">
                    Voucher Diskon
                  </span>
                  <span className="text-red-500 font-bold">
                    -{formatCurrency(voucherDiscount)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">
                    Biaya Layanan
                  </span>
                  <span className="text-slate-900 font-bold">
                    {formatCurrency(serviceFee)}
                  </span>
                </div>
              </div>

              <div className="h-[1px] bg-slate-50 w-full mb-6"></div>

              {/* Total */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-black text-slate-900">
                  Total Pembayaran
                </span>
                <span className="text-2xl font-black text-[#00aa5b]">
                  {formatCurrency(total)}
                </span>
              </div>

              {/* Submit Action */}
              <button className="w-full bg-[#00aa5b] hover:bg-[#008f4d] active:scale-[0.98] text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#00aa5b]/20 mb-6">
                <Lock size={18} />
                Bayar Sekarang
              </button>

              {/* Terms Checkbox/Text */}
              <div className="flex gap-3 text-[10px] leading-relaxed text-slate-400 font-medium">
                <div className="p-1 bg-slate-50 rounded-md h-fit">
                  <Info size={14} className="text-slate-300" />
                </div>
                <p>
                  Dengan melanjutkan, Anda menyetujui{" "}
                  <button className="text-[#00aa5b] font-bold hover:underline">
                    Syarat & Ketentuan
                  </button>{" "}
                  serta Kebijakan Privasi MarketSphere.
                </p>
              </div>
            </section>

            {/* Trusted Badges */}
            <div className="flex justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                className="h-4"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="h-6"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-5"
              />
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-10 text-center">
        <p className="text-xs text-slate-400 font-medium">
          © 2024 MarketSphere Inc. Seluruh hak cipta dilindungi undang-undang.
        </p>
      </footer>
    </div>
  );
};

export default PaymentPage;
