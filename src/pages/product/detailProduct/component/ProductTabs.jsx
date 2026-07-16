import React from "react";

const ProductTabs = ({ activeTab, setActiveTab }) => {
  return (
    <section className="mt-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
      <div className="flex border-b border-slate-50">
        {["Product Description", "Reviews (1,204)", "Specifications"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-10 py-6 text-sm font-black transition-all relative ${
                activeTab === tab
                  ? "text-[#00aa5b]"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00aa5b] rounded-full"></div>
              )}
            </button>
          )
        )}
      </div>

      <div className="p-12">
        {activeTab === "Product Description" && (
          <div className="max-w-4xl space-y-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              Experience sound in its purest form with the AuraSound Pro.
              Engineered with custom 40mm titanium drivers and our proprietary
              Active Noise Cancelling technology, these headphones create an
              immersive acoustic sanctuary wherever you are.
            </p>
            <ul className="space-y-4">
              {[
                {
                  label: "Industry-leading ANC",
                  text: "Blocks out 95% of low-frequency ambient noise.",
                },
                {
                  label: "High-Resolution Audio",
                  text: "Supports LDAC for lossless wireless listening.",
                },
                {
                  label: "40-Hour Battery Life",
                  text: "A single charge lasts a full week of commuting.",
                },
                {
                  label: "Multipoint Connection",
                  text: "Seamlessly switch between your phone and laptop.",
                },
                {
                  label: "Ergonomic Comfort",
                  text: "Memory foam ear cushions wrapped in premium synthetic leather.",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00aa5b] flex-shrink-0"></div>
                  <p className="text-slate-700">
                    <span className="font-black">{item.label}:</span>{" "}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500 italic pt-4">
              Included in the box: AuraSound Pro Headphones, Hard Travel Case,
              USB-C Charging Cable, 3.5mm Audio Cable, User Manual.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductTabs;
