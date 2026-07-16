import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactSidebar from "./component/ContactSidebar.jsx";
import ChatHeader from "./component/ChatHeader.jsx";
import MessageArea from "./component/MessageArea.jsx";
import { ImageIcon, Smile, Send } from "lucide-react";

/**
 * ChatPage
 *
 * Full-screen layout — tidak pakai MainLayout.
 * Punya navbar/sidebar sendiri karena desain chat berbeda.
 *
 * BUG FIX: props ChatFooter sebelumnya salah (messageInput dipakai
 * sebagai setter & handler). Sekarang input area di-inline di sini
 * karena ChatFooter terlalu kecil untuk jadi component terpisah.
 */
const ChatPage = () => {
  const navigate = useNavigate();
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
        price: "Rp1.935.000",
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

  const handleBackToMenu = () => {
    navigate("/");
  };

  const activeContact = contacts.find((c) => c.id === activeContactId);

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Contact List Sidebar */}
      <ContactSidebar
        contacts={contacts}
        activeContactId={activeContactId}
        setActiveContactId={setActiveContactId}
        handleBackToMenu={handleBackToMenu}
      />

      {/* Chat Window */}
      <main className="flex-grow flex flex-col bg-white overflow-hidden">
        {/* Chat Header */}
        <ChatHeader activeContact={activeContact} />

        {/* Messages Area */}
        <MessageArea messages={messages} activeContact={activeContact} />

        {/* Input Area — inline karena terlalu kecil untuk component terpisah */}
        <footer className="p-6 bg-white border-t border-slate-100">
          <form
            className="flex items-center gap-3"
            onSubmit={handleSendMessage}
          >
            <button
              type="button"
              className="p-2.5 text-slate-400 hover:text-[#00aa5b] transition-colors"
            >
              <ImageIcon size={22} />
            </button>
            <button
              type="button"
              className="p-2.5 text-slate-400 hover:text-[#00aa5b] transition-colors"
            >
              <Smile size={22} />
            </button>
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow py-3 px-5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:bg-white focus:border-[#00aa5b]/20 focus:ring-2 focus:ring-[#00aa5b]/5 transition-all text-sm font-medium"
            />
            <button
              type="submit"
              className="p-3 bg-[#00aa5b] text-white rounded-xl hover:bg-[#008f4d] transition-all shadow-lg shadow-[#00aa5b]/20 active:scale-95"
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
