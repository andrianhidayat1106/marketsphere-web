import { CheckCircle2, ChevronLeft, MoreVertical, Store } from "lucide-react";

export default function ChatHeader({ activeContact }) {
  return (
    <header className="px-6 py-4 border-b border-slate-100 flex items-center justify-between shadow-sm z-10">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-10 h-10 rounded-xl bg-slate-100 overflow-hidden border border-slate-200">
            <img
              src={activeContact?.avatar}
              alt={activeContact?.name}
              className="w-full h-full object-cover"
            />
          </div>
          {activeContact?.online && (
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
          )}
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="font-bold text-slate-900">{activeContact?.name}</h3>
            {activeContact?.isOfficial && (
              <CheckCircle2
                size={14}
                className="text-[#00aa5b]"
                fill="currentColor"
              />
            )}
          </div>
          <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
            {activeContact?.online ? "Online" : "Offline"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-500 transition-colors">
          <Store size={20} />
        </button>
        <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-500 transition-colors">
          <MoreVertical size={20} />
        </button>
      </div>
    </header>
  );
}
