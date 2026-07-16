import React from "react";
import { Plus, ImageIcon, Smile, Send } from "lucide-react";

const ChatFooter = ({ messageInput, setMessageInput, handleSendMessage }) => {
  const quickReplies = [
    "Is it available?",
    "How long is delivery?",
    "Any discounts?",
  ];

  return (
    <footer className="p-6 border-t border-slate-100 bg-white">
      {/* Quick Replies */}
      <div className="flex gap-3 mb-4 overflow-x-auto pb-1 scrollbar-hide">
        {quickReplies.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => setMessageInput(q)}
            className="whitespace-nowrap px-4 py-1.5 border border-slate-200 rounded-full text-[11px] font-bold text-slate-500 hover:border-[#00aa5b] hover:text-[#00aa5b] transition-all bg-white shadow-sm"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSendMessage} className="flex items-center gap-3">
        <div className="flex gap-1">
          <button
            type="button"
            className="p-2.5 hover:bg-slate-50 rounded-xl text-slate-400 hover:text-[#00aa5b] transition-colors"
          >
            <Plus size={20} />
          </button>
          <button
            type="button"
            className="p-2.5 hover:bg-slate-50 rounded-xl text-slate-400 hover:text-[#00aa5b] transition-colors"
          >
            <ImageIcon size={20} />
          </button>
        </div>

        <div className="flex-grow relative">
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type your message here..."
            className="w-full pl-5 pr-12 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-sm outline-none focus:bg-white focus:border-[#00aa5b]/20 transition-all placeholder:text-slate-400 font-medium"
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#00aa5b] transition-colors"
          >
            <Smile size={20} />
          </button>
        </div>

        <button
          type="submit"
          disabled={!messageInput.trim()}
          className="w-12 h-12 bg-[#00aa5b] hover:bg-[#008f4d] disabled:bg-slate-200 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#00aa5b]/20 transition-all active:scale-95"
        >
          <Send size={20} />
        </button>
      </form>
    </footer>
  );
};

export default ChatFooter;
