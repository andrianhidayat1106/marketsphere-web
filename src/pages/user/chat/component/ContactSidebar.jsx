import { ArrowLeft, Search } from "lucide-react";

export default function ContactSidebar({
  contacts,
  activeContactId,
  setActiveContactId,
  handleBackToMenu,
}) {
  return (
    <aside className="w-80 bg-white border-r border-slate-200 flex flex-col flex-shrink-0">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-black text-slate-900">Messages</h2>
          {/* Tombol kembali ke menu utama */}
          <button
            onClick={handleBackToMenu}
            className="p-2 hover:bg-slate-100 text-slate-500 hover:text-slate-900 rounded-xl transition-all flex items-center gap-1.5 text-xs font-bold"
            title="Kembali ke Menu"
          >
            <ArrowLeft size={16} />
            <span>Kembali</span>
          </button>
        </div>
        <div className="relative group">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#00aa5b] transition-colors"
            size={16}
          />
          <input
            type="text"
            placeholder="Search chats..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#00aa5b]/10 outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex-grow overflow-y-auto">
        {contacts.map((contact) => (
          <button
            key={contact.id}
            onClick={() => setActiveContactId(contact.id)}
            className={`w-full flex items-center gap-4 px-6 py-4 transition-all duration-200 border-l-4 ${
              activeContactId === contact.id
                ? "bg-slate-50 border-[#00aa5b]"
                : "border-transparent hover:bg-slate-50/50"
            }`}
          >
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 overflow-hidden border border-slate-200 shadow-sm">
                {contact.avatar ? (
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-500 font-bold">
                    {contact.name.charAt(0)}
                  </div>
                )}
              </div>
              {contact.online && (
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
              )}
            </div>
            <div className="flex-grow text-left min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3
                  className={`text-sm font-bold truncate ${
                    activeContactId === contact.id
                      ? "text-slate-900"
                      : "text-slate-700"
                  }`}
                >
                  {contact.name}
                </h3>
                <span className="text-[10px] font-semibold text-slate-400 whitespace-nowrap ml-2">
                  {contact.time}
                </span>
              </div>
              <p className="text-xs text-slate-500 truncate leading-snug">
                {contact.lastMessage}
              </p>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}
