"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! 👋 I'm LeSgo's AI Assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "Tell me about services",
    "How to become a rider?",
    "Track my delivery",
    "Contact support",
  ];

  const handleSendMessage = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponses: { [key: string]: string } = {
        services:
          "LeSgo offers three main services:\n\n🚗 LeSeat - Fast rides around the city\n📦 LeSgo - Same-day courier delivery\n🛍️ LeSbuy - Shop and delivery service\n\nWhich one interests you?",
        rider:
          "To become a LeSgo rider:\n\n1. Download the app\n2. Complete registration\n3. Pass background check\n4. Get verified\n5. Start earning!\n\nEarn ₱15-25 per delivery with bonuses!",
        track:
          "To track your delivery:\n\n1. Open the LeSgo app\n2. Go to 'Active Orders'\n3. Select your delivery\n4. View real-time location\n\nYou can also chat with your rider directly!",
        contact:
          "Contact our support team:\n\n📧 Email: hello@lesgo.ph\n📞 Phone: +63 (2) 1234-5678\n💬 Chat: Available 24/7\n\nWe're here to help!",
        default:
          "Thanks for your message! I'm here to help with questions about LeSgo services, becoming a rider, tracking deliveries, or connecting you with support. What would you like to know?",
      };

      const lowerText = messageText.toLowerCase();
      let response = botResponses.default;

      if (lowerText.includes("service")) response = botResponses.services;
      else if (lowerText.includes("rider") || lowerText.includes("earn"))
        response = botResponses.rider;
      else if (lowerText.includes("track") || lowerText.includes("delivery"))
        response = botResponses.track;
      else if (lowerText.includes("contact") || lowerText.includes("support"))
        response = botResponses.contact;

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-[#a78bfa] to-[#ec4899] text-white shadow-2xl shadow-[#a78bfa]/40 hover:shadow-[#a78bfa]/60 transition-all"
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-24px)] rounded-2xl bg-gradient-to-br from-[#1a0a2e] to-[#0f0319] border border-white/10 shadow-2xl shadow-[#a78bfa]/20 overflow-hidden flex flex-col"
            style={{ height: "600px" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#a78bfa] to-[#ec4899] p-4 text-white">
              <h3 className="font-bold text-lg">LeSgo AI Assistant</h3>
              <p className="text-sm text-white/90">Always here to help</p>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0b0217]/50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-[#a78bfa] to-[#ec4899] text-white rounded-br-none"
                        : "bg-white/[0.08] text-white/90 border border-white/10 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.text}
                    </p>
                    <p className="text-xs text-white/50 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/[0.08] text-white/90 border border-white/10 px-4 py-3 rounded-2xl rounded-bl-none">
                    <div className="flex gap-2 items-center">
                      <Loader className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Thinking...</span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && !isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-4 py-3 border-t border-white/10 space-y-2"
              >
                <p className="text-xs text-white/60 font-semibold">Quick replies:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickReplies.map((reply, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => handleSendMessage(reply)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-xs px-3 py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] text-white/80 hover:text-white border border-white/10 transition-all"
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Input Area */}
            <div className="border-t border-white/10 p-4 bg-[#0b0217]/80 backdrop-blur-sm">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && !isLoading) {
                      handleSendMessage();
                    }
                  }}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/[0.08] border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:border-[#a78bfa] focus:ring-1 focus:ring-[#a78bfa]/50 transition-all"
                  disabled={isLoading}
                />
                <motion.button
                  onClick={() => handleSendMessage()}
                  disabled={isLoading || !input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-gradient-to-r from-[#a78bfa] to-[#ec4899] text-white hover:shadow-lg hover:shadow-[#a78bfa]/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification Badge */}
      <AnimatePresence>
        {!isOpen && messages.length > 1 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-24 right-6 z-40 w-3 h-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50"
          />
        )}
      </AnimatePresence>
    </>
  );
}
