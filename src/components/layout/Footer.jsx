

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      {/* DIUBAH MENJADI md:grid-cols-3 */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">
        {/* Kolom 1 */}
        <div className="col-span-1">
          <h4 className="font-black text-lg text-slate-900 mb-6">
            MarketSphere
          </h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            Your premier destination for online shopping, offering endless
            categories and unbeatable prices.
          </p>
        </div>

        {/* Kolom 2 */}
        <div>
          <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-6">
            Customer Service
          </h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li className="hover:text-[#00aa5b] transition-colors duration-200 cursor-pointer">
              Help Centre
            </li>
            <li className="hover:text-[#00aa5b] transition-colors duration-200 cursor-pointer">
              Payment Methods
            </li>
            <li className="hover:text-[#00aa5b] transition-colors duration-200 cursor-pointer">
              Return & Refund
            </li>
            <li className="hover:text-[#00aa5b] transition-colors duration-200 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Kolom 3 */}
        <div>
          <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-6">
            About MarketSphere
          </h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li className="hover:text-[#00aa5b] transition-colors duration-200 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-[#00aa5b] transition-colors duration-200 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-[#00aa5b] transition-colors duration-200 cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-[#00aa5b] transition-colors duration-200 cursor-pointer">
              Seller Centre
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-400 font-medium">
          © 2026 MarketSphere Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
