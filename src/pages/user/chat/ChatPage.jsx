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
import ContactSidebar from "./component/ContactSidebar.jsx";
import ChatHeader from "./component/ChatHeader.jsx";
import MessageArea from "./component/MessageArea.jsx";
import Footer from "../../../components/layout/Footer.jsx";
import ChatFooter from "./component/ChatFooter.jsx";

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

        {/* Input Area */}
        <ChatFooter
          messageInput={messageInput}
          setMessageInput={messageInput}
          handleSendMessage={messageInput}
        />
      </main>
    </div>
  );
};

export default ChatPage;
