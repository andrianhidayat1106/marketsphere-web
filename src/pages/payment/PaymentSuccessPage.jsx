import {
  CheckCircle2,
  FileText,
  ShoppingBag,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import { formatRupiah } from "../../utils/formatCurrency.js";

/**
 * PaymentSuccessPage
 * Header & Footer sudah di-handle oleh MinimalLayout.
 */
const PaymentSuccessPage = () => {
  const transactionDetails = {
    orderNumber: "SP-8829103847",
    paymentMethod: "BCA Virtual Account",
    transactionTime: "24 Okt 2023, 14:32 WIB",
    totalPayment: 1450000,
  };

  return (
    <main className="flex-grow flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-2xl bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
        {/* Success Hero Section */}
        <div className="pt-12 pb-8 px-8 text-center flex flex-col items-center">
          <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-20"></div>
            <CheckCircle2
              size={48}
              className="text-[#00aa5b] relative z-10"
            />
          </div>

          <h1 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
            Pembayaran Berhasil!
          </h1>
          <p className="text-slate-500 font-medium max-w-sm mx-auto">
            Terima kasih, pesanan Anda sedang kami proses dan akan segera
            diteruskan ke penjual.
          </p>
        </div>

        {/* Transaction Info Card */}
        <div className="px-8 pb-8">
          <div className="bg-slate-50 rounded-3xl border border-slate-100 p-8 space-y-6">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                Nomor Pesanan
              </span>
              <span className="text-slate-900 font-black font-mono">
                {transactionDetails.orderNumber}
              </span>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                Metode Pembayaran
              </span>
              <span className="text-slate-900 font-bold">
                {transactionDetails.paymentMethod}
              </span>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                Waktu Transaksi
              </span>
              <span className="text-slate-900 font-bold">
                {transactionDetails.transactionTime}
              </span>
            </div>

            <div className="h-[1px] bg-slate-200 w-full my-2"></div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-black text-slate-900">
                Total Pembayaran
              </span>
              <span className="text-2xl font-black text-[#00aa5b]">
                {formatRupiah(transactionDetails.totalPayment)}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-8 pb-12 grid grid-cols-2 gap-4">
          <Link
            to="/orders/SP-8829103847/tracking"
            className="flex items-center justify-center gap-3 bg-[#00aa5b] hover:bg-[#008f4d] active:scale-[0.98] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-[#00aa5b]/20"
          >
            <FileText size={18} />
            Lihat Status Pesanan
          </Link>
          <Link
            to="/"
            className="flex items-center justify-center gap-3 bg-white border-2 border-slate-100 hover:border-[#00aa5b] hover:text-[#00aa5b] active:scale-[0.98] text-slate-600 font-bold py-4 rounded-2xl transition-all"
          >
            <ShoppingBag size={18} />
            Lanjut Belanja
          </Link>
        </div>

        {/* Footer Receipt Action */}
        <div className="bg-slate-50 py-4 px-8 border-t border-slate-100 flex justify-center">
          <button className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-[#00aa5b] transition-colors uppercase tracking-widest">
            <Download size={14} />
            Unduh Invoice (PDF)
          </button>
        </div>
      </div>
    </main>
  );
};

export default PaymentSuccessPage;
