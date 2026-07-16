import React from "react";
import { MoreVertical } from "lucide-react";

const NotificationItem = ({ notif }) => {
  return (
    <div
      className={`bg-white rounded-3xl border-l-4 ${notif.color} shadow-sm border border-y-slate-100 border-r-slate-100 p-6 flex items-start gap-6 hover:shadow-md transition-shadow relative group cursor-pointer`}
    >
      <div className="p-4 bg-slate-50 rounded-2xl group-hover:scale-105 transition-transform">
        {notif.icon}
      </div>

      <div className="flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-black text-slate-900">{notif.title}</h3>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            {notif.time}
          </span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 max-w-2xl">
          {notif.description}
        </p>

        <div className="flex items-center gap-3">
          {notif.actionLabel && (
            <button
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 ${
                notif.type === "order"
                  ? "border-2 border-[#00aa5b] text-[#00aa5b] hover:bg-[#00aa5b] hover:text-white"
                  : "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20"
              }`}
            >
              {notif.actionLabel}
            </button>
          )}
          {notif.badge && (
            <span className="px-3 py-2 bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-xl">
              {notif.badge}
            </span>
          )}
        </div>
      </div>

      <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors opacity-0 group-hover:opacity-100">
        <MoreVertical size={20} />
      </button>
    </div>
  );
};

export default NotificationItem;
