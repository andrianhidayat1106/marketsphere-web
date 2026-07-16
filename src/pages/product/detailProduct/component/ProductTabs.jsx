import React from "react";
import { Star, ThumbsUp, ShieldCheck, MapPin, Store, MessageSquare } from "lucide-react";

const ProductTabs = ({ activeTab, setActiveTab }) => {
  return (
    <section className="mt-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
      <div className="flex border-b border-slate-50 overflow-x-auto no-scrollbar">
        {["Product Description", "Specifications", "Reviews (1,204)", "Store Detail"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-10 py-6 text-sm font-black transition-all relative whitespace-nowrap ${
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

      <div className="p-8 lg:p-12">
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

        {activeTab === "Specifications" && (
          <div className="max-w-3xl">
            <h3 className="text-lg font-black text-slate-900 mb-6">Technical Specifications</h3>
            <div className="border border-slate-100 rounded-2xl overflow-hidden">
              {[
                { label: "Category", value: "Electronics > Audio > Headphones" },
                { label: "Brand", value: "AuraSound" },
                { label: "Model", value: "Pro ANC V2" },
                { label: "Warranty", value: "1 Year Official Warranty" },
                { label: "Connection", value: "Bluetooth 5.3 & 3.5mm Jack" },
                { label: "Battery Capacity", value: "800mAh (Up to 40 hours)" },
                { label: "Weight", value: "250g" },
                { label: "Water Resistance", value: "IPX4 (Sweat & Splash Resistant)" },
              ].map((spec, idx) => (
                <div key={idx} className={`flex flex-col sm:flex-row border-b border-slate-100 last:border-0 ${idx % 2 === 0 ? "bg-slate-50/50" : "bg-white"}`}>
                  <div className="sm:w-1/3 p-4 text-sm font-bold text-slate-500">{spec.label}</div>
                  <div className="sm:w-2/3 p-4 text-sm font-medium text-slate-900">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Reviews (1,204)" && (
          <div className="max-w-4xl space-y-8">
            {/* Reviews Summary */}
            <div className="flex flex-col sm:flex-row items-center gap-8 p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                <span className="text-5xl font-black text-slate-900">4.8</span>
                <div className="flex text-[#fbbf24] mt-2 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill={star <= 4 ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">1,204 Ratings</span>
              </div>
              
              <div className="flex-grow w-full border-t sm:border-t-0 sm:border-l border-slate-200 pt-6 sm:pt-0 sm:pl-8 space-y-2">
                {[5, 4, 3, 2, 1].map((star, idx) => {
                  const percentages = [85, 10, 3, 1, 1];
                  return (
                    <div key={star} className="flex items-center gap-3">
                      <div className="flex items-center gap-1 w-12 justify-end text-xs font-bold text-slate-500">
                        {star} <Star size={10} fill="currentColor" className="text-[#fbbf24]"/>
                      </div>
                      <div className="flex-grow h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#00aa5b] rounded-full" style={{ width: `${percentages[idx]}%` }}></div>
                      </div>
                      <div className="w-8 text-right text-[10px] font-bold text-slate-400">{percentages[idx]}%</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="space-y-6">
              {[
                {
                  name: "Budi Santoso",
                  date: "2 days ago",
                  rating: 5,
                  comment: "Kualitas suara sangat jernih dan bass-nya nendang banget! Noise cancelling berfungsi dengan sangat baik saat dipakai di MRT. Worth the price!",
                  likes: 24,
                  avatar: "https://i.pravatar.cc/150?u=1"
                },
                {
                  name: "Sarah W.",
                  date: "1 week ago",
                  rating: 5,
                  comment: "Baterainya awet banget, seminggu cuma charge sekali padahal dipakai tiap hari buat kerja. Bantalan telinganya juga super empuk.",
                  likes: 12,
                  avatar: "https://i.pravatar.cc/150?u=2"
                },
                {
                  name: "David K.",
                  date: "2 weeks ago",
                  rating: 4,
                  comment: "Barang ori dan pengiriman cepat. Sedikit panas kalau dipakai kelamaan (lebih dari 4 jam), tapi wajar untuk headphone model over-ear.",
                  likes: 5,
                  avatar: "https://i.pravatar.cc/150?u=3"
                }
              ].map((review, idx) => (
                <div key={idx} className="p-6 border border-slate-100 rounded-3xl hover:shadow-md transition-all bg-white">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                        <div className="flex items-center gap-2">
                          <div className="flex text-[#fbbf24]">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={10} fill={i < review.rating ? "currentColor" : "none"} />
                            ))}
                          </div>
                          <span className="text-[10px] text-slate-400 font-semibold">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-wider">
                      <ShieldCheck size={12} /> Verified Buyer
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{review.comment}</p>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-[#00aa5b] transition-colors">
                    <ThumbsUp size={14} /> {review.likes} Helpful
                  </button>
                </div>
              ))}
            </div>
            
            <button className="w-full py-4 border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-600 hover:border-[#00aa5b] hover:text-[#00aa5b] transition-all">
              Load More Reviews
            </button>
          </div>
        )}

        {activeTab === "Store Detail" && (
          <div className="max-w-4xl flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full mb-4 overflow-hidden border-4 border-white shadow-lg relative">
                <img src="https://images.unsplash.com/photo-1572059002053-8cc5ad2f4a38?q=80&w=1780&auto=format&fit=crop" alt="Store Avatar" className="w-full h-full object-cover" />
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-1 flex items-center gap-2 justify-center">
                TechGadgets Official <ShieldCheck size={18} className="text-blue-500" />
              </h3>
              <p className="text-sm font-semibold text-slate-400 mb-6 flex items-center gap-1 justify-center">
                <MapPin size={14} /> Jakarta Selatan, Indonesia
              </p>
              
              <div className="grid grid-cols-3 w-full gap-4 mb-8">
                <div className="flex flex-col items-center p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-lg font-black text-[#00aa5b]">4.9</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center mt-1">Rating</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-lg font-black text-slate-900">99%</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center mt-1">Chat Reply</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-lg font-black text-slate-900">12k</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center mt-1">Followers</span>
                </div>
              </div>
              
              <div className="flex w-full gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#00aa5b] text-white rounded-xl font-bold hover:bg-[#008f4d] active:scale-95 transition-all text-sm">
                  <Store size={16} /> Visit Store
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-slate-200 text-slate-600 rounded-xl font-bold hover:border-[#00aa5b] hover:text-[#00aa5b] active:scale-95 transition-all text-sm">
                  <MessageSquare size={16} /> Chat
                </button>
              </div>
            </div>
            
            <div className="flex-1">
              <h4 className="text-lg font-black text-slate-900 mb-4">Store Highlights</h4>
              <ul className="space-y-4 mb-8">
                {[
                  { icon: <ShieldCheck size={20} className="text-[#00aa5b]" />, title: "Official Brand Distributor", desc: "100% Original Products with warranty" },
                  { icon: <Star size={20} className="text-[#fbbf24]" />, title: "Top Rated Seller", desc: "Consistently highly rated by buyers" },
                  { icon: <Store size={20} className="text-blue-500" />, title: "Joined Since 2021", desc: "Trusted seller for over 5 years" },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100">{item.icon}</div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h5>
                      <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl text-blue-700 text-sm">
                <p className="font-bold mb-1">Store Operational Hours:</p>
                <p className="opacity-80 font-medium">Monday - Friday: 09:00 - 17:00 WIB<br/>Saturday: 09:00 - 14:00 WIB<br/>Sunday & Public Holidays: Closed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductTabs;
