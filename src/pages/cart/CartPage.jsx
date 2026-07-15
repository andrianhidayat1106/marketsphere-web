import React, { useState } from "react";
import {
  Trash2,
  Minus,
  Plus,
  ChevronRight,
  Ticket,
  Search,
  ShoppingCart,
  Bell,
  MessageSquare,
  Globe,
  ExternalLink,
  Store,
} from "lucide-react";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";

/**
 * MarketSphere Shopping Cart Component
 * Built with React and Tailwind CSS (JSX Version).
 */

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "item-1",
      shopName: "TechVision Official Store",
      productName: 'UltraWide 34" Curved Gaming Monitor HDR10',
      variant: "Midnight Black",
      price: 5499000,
      oldPrice: 6200000,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=2070&auto=format&fit=crop",
      selected: true,
    },
    {
      id: "item-2",
      shopName: "FashionHub Indonesia",
      productName: "Eco-Leather Minimalist Sneakers - Pure White",
      variant: "Size: 42",
      price: 899000,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
      selected: false,
    },
  ]);

  const toggleSelectAll = (checked) => {
    setCartItems(cartItems.map((item) => ({ ...item, selected: checked })));
  };

  const toggleSelectItem = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const updateQuantity = (id, delta) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const selectedItems = cartItems.filter((item) => item.selected);
  const totalItemsCount = selectedItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalPrice = selectedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingFee = totalPrice > 0 ? 0 : 0; // Simulated free shipping
  const discount = 0; // Simulated discount
  const finalTotal = totalPrice + shippingFee - discount;

  return (
    <>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
        {/* Navigation Bar */}
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-8">
            Keranjang Belanja
          </h1>

          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Cart Items List */}
            <div className="col-span-8 space-y-4">
              {/* Selection Header */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-slate-300 text-[#00aa5b] focus:ring-[#00aa5b]/20 cursor-pointer"
                    checked={
                      cartItems.length > 0 &&
                      cartItems.every((item) => item.selected)
                    }
                    onChange={(e) => toggleSelectAll(e.target.checked)}
                  />
                  <span className="font-bold text-slate-700">
                    Pilih Semua ({cartItems.length})
                  </span>
                </div>
                <button className="text-sm font-bold text-red-500 hover:underline">
                  Hapus Terpilih
                </button>
              </div>

              {/* Items Grouped by Shop */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                >
                  <div className="p-6 border-b border-slate-50 flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-slate-300 text-[#00aa5b] focus:ring-[#00aa5b]/20 cursor-pointer"
                      checked={item.selected}
                      onChange={() => toggleSelectItem(item.id)}
                    />
                    <div className="flex items-center gap-2 group cursor-pointer">
                      <Store
                        size={18}
                        className="text-slate-400 group-hover:text-[#00aa5b] transition-colors"
                      />
                      <h3 className="font-bold text-slate-900 group-hover:text-[#00aa5b] transition-colors">
                        {item.shopName}
                      </h3>
                      <ChevronRight size={16} className="text-slate-300" />
                    </div>
                  </div>

                  <div className="p-6 flex gap-6">
                    <div className="w-24 h-24 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 border border-slate-100">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="font-bold text-slate-900 mb-1 leading-snug line-clamp-2">
                        {item.productName}
                      </h4>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-3">
                        {item.variant}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-lg font-black text-[#00aa5b]">
                            {formatCurrency(item.price)}
                          </p>
                          {item.oldPrice && (
                            <p className="text-xs text-slate-400 line-through font-medium">
                              {formatCurrency(item.oldPrice)}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-3">
                            <button
                              className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 size={18} />
                            </button>
                            <div className="flex items-center border border-slate-200 rounded-lg bg-white shadow-sm overflow-hidden">
                              <button
                                className="p-1.5 hover:bg-slate-50 text-slate-400 border-r border-slate-100 transition-colors"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus size={14} />
                              </button>
                              <input
                                type="number"
                                className="w-12 text-center text-sm font-bold bg-transparent outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                value={item.quantity}
                                readOnly
                              />
                              <button
                                className="p-1.5 hover:bg-slate-50 text-slate-400 border-l border-slate-100 transition-colors"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky Order Summary Sidebar */}
            <aside className="col-span-4 sticky top-28 space-y-6">
              <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                <h2 className="font-bold text-lg text-slate-900 mb-6 border-b border-slate-50 pb-4">
                  Ringkasan Belanja
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">
                      Total Harga ({totalItemsCount} Barang)
                    </span>
                    <span className="text-slate-900 font-bold">
                      {formatCurrency(totalPrice)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">
                      Total Diskon
                    </span>
                    <span className="text-red-500 font-bold">
                      -{formatCurrency(discount)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">
                      Biaya Pengiriman
                    </span>
                    <span className="text-emerald-600 font-bold">Gratis</span>
                  </div>
                </div>

                <div className="h-[1px] bg-slate-50 w-full mb-6"></div>

                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg font-black text-slate-900">
                    Total Belanja
                  </span>
                  <span className="text-2xl font-black text-[#00aa5b]">
                    {formatCurrency(finalTotal)}
                  </span>
                </div>

                <button
                  disabled={selectedItems.length === 0}
                  className="w-full bg-[#00aa5b] hover:bg-[#008f4d] active:scale-[0.98] disabled:bg-slate-200 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#00aa5b]/20"
                >
                  Checkout Now ({selectedItems.length})
                  <ChevronRight size={18} />
                </button>
              </section>

              {/* Promo / Coupon Card */}
              <button className="w-full bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex items-center justify-between group hover:border-[#00aa5b]/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-50 rounded-xl text-[#00aa5b]">
                    <Ticket size={18} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">
                    Gunakan Promo/Kupon
                  </span>
                </div>
                <ChevronRight
                  size={18}
                  className="text-slate-300 group-hover:text-[#00aa5b] transition-colors"
                />
              </button>
            </aside>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
