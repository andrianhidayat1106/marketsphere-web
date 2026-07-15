import React, { useState } from "react";
import {
  Search,
  MoreVertical,
  Plus,
  ImageIcon,
  Smile,
  Send,
  Store,
  CheckCircle2,
  ChevronLeft,
  ArrowLeft, // Ditambahkan untuk ikon tombol kembali di desktop
} from "lucide-react";

/**
 * MarketSphere Chat Component
 * Built with React and Tailwind CSS (JSX Version).
 */

const ChatPage = () => {
  const [activeContactId, setActiveContactId] = useState(1);
  const [messageInput, setMessageInput] = useState("");

  const contacts = [
    {
      id: 1,
      name: "TechGadgets Official",
      lastMessage: "Yes, the wireless earbuds come with...",
      time: "10:42 AM",
      online: true,
      isOfficial: true,
      avatar:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "SneakerHub ID",
      lastMessage: "Your order #MS-8921 has been...",
      time: "Yesterday",
      avatar:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Modern Home Decor",
      lastMessage: "Thanks for your review!",
      time: "Mon",
      avatar: "",
    },
  ];

  const initialMessages = [
    {
      id: 1,
      sender: "user",
      text: "Hi! I'm interested in these earbuds. Do they come with a warranty?",
      time: "10:40 AM",
      isProduct: true,
      productData: {
        name: "Premium Noise Cancelling Wireless Earbuds Pro 2",
        price: "$129.00",
        image:
          "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2070&auto=format&fit=crop",
      },
    },
    {
      id: 2,
      sender: "seller",
      text: "Hello! Thanks for reaching out. Yes, the wireless earbuds come with a 1-year official manufacturer warranty. We also offer a 7-day return policy for any factory defects.",
      time: "10:42 AM",
    },
  ];

  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      text: messageInput,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMessage]);
    setMessageInput("");
  };

  // Fungsi navigasi kembali ke menu utama "/"
  const handleBackToMenu = () => {
    window.location.href = "/";
  };

  const activeContact = contacts.find((c) => c.id === activeContactId);

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Contact List Sidebar */}
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

      {/* Chat Window */}
      <main className="flex-grow flex flex-col bg-white overflow-hidden">
        {/* Chat Header */}
        <header className="px-6 py-4 border-b border-slate-100 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center gap-4">
            {/* Tombol kembali di mode mobile */}
            <button
              onClick={handleBackToMenu}
              className="lg:hidden text-slate-500 p-1 hover:bg-slate-50 rounded-lg"
            >
              <ChevronLeft size={24} />
            </button>
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
                <h3 className="font-bold text-slate-900">
                  {activeContact?.name}
                </h3>
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

        {/* Messages Area */}
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
                    <img
                      src={activeContact?.avatar}
                      className="w-full h-full object-cover rounded-lg"
                      alt=""
                    />
                  </div>
                )}

                <div className="space-y-2">
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

        {/* Input Area */}
        <footer className="p-6 border-t border-slate-100 bg-white">
          <div className="flex gap-3 mb-4 overflow-x-auto pb-1 scrollbar-hide">
            {[
              "Is it available?",
              "How long is delivery?",
              "Any discounts?",
            ].map((q) => (
              <button
                key={q}
                onClick={() => setMessageInput(q)}
                className="whitespace-nowrap px-4 py-1.5 border border-slate-200 rounded-full text-[11px] font-bold text-slate-500 hover:border-[#00aa5b] hover:text-[#00aa5b] transition-all bg-white shadow-sm"
              >
                {q}
              </button>
            ))}
          </div>

          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-3"
          >
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
      </main>
    </div>
  );
};

export default ChatPage;
