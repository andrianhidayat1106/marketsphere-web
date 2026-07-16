import React from "react";

const NotificationSidebar = ({ filters, activeFilter, setActiveFilter }) => {
  return (
    <aside className="col-span-3">
      <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100 overflow-hidden">
        <div className="space-y-1">
          {filters.map((filter) => (
            <button
              key={filter.label}
              onClick={() => setActiveFilter(filter.label)}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-200 ${
                activeFilter === filter.label
                  ? "bg-[#00aa5b] text-white shadow-lg shadow-[#00aa5b]/20"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center gap-3">
                {filter.icon}
                <span className="font-bold text-sm">{filter.label}</span>
              </div>
              {filter.count > 0 && (
                <span
                  className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                    activeFilter === filter.label
                      ? "bg-white text-[#00aa5b]"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {filter.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default NotificationSidebar;
