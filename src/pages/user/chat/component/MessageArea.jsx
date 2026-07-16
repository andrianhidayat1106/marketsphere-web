import React from "react";

const MessageArea = ({ messages, activeContact }) => {
  return (
    <div className="flex-grow overflow-y-auto p-8 space-y-8 bg-slate-50/30">
      <div className="flex justify-center">
        <span className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest shadow-sm">
          Today
        </span>
      </div>

      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[70%] group ${
              msg.sender === "user"
                ? "flex flex-col items-end"
                : "flex items-start gap-3"
            }`}
          >
            {msg.sender === "seller" && (
              <div className="w-8 h-8 rounded-lg bg-slate-200 flex-shrink-0 mt-1">
                {activeContact?.avatar ? (
                  <img
                    src={activeContact.avatar}
                    className="w-full h-full object-cover rounded-lg"
                    alt=""
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-300 text-slate-600 font-bold rounded-lg text-xs">
                    {activeContact?.name?.charAt(0)}
                  </div>
                )}
              </div>
            )}

            <div className="space-y-2">
              {/* Product Layout Card */}
              {msg.isProduct && msg.productData && (
                <div className="mb-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex items-center gap-4 hover:border-[#00aa5b]/30 transition-colors cursor-pointer group/product">
                  <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0">
                    <img
                      src={msg.productData.image}
                      alt={msg.productData.name}
                      className="w-full h-full object-cover group-hover/product:scale-110 transition-transform"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5">
                      You shared a product
                    </p>
                    <h4 className="text-xs font-bold text-slate-700 truncate mb-1">
                      {msg.productData.name}
                    </h4>
                    <p className="text-sm font-black text-[#00aa5b]">
                      {msg.productData.price}
                    </p>
                  </div>
                </div>
              )}

              {/* Chat Bubble */}
              <div
                className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-[#00aa5b] text-white rounded-tr-none"
                    : "bg-white border border-slate-100 text-slate-700 rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
              <div
                className={`flex items-center gap-1 text-[10px] font-bold text-slate-400 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.time}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageArea;
