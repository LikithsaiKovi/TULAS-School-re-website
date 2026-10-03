"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
} from "lucide-react";

interface Message {
  sender: "ai" | "user";
  text: string;
  quickActions?: { label: string; action: () => void }[];
}

const PRESET_QUERIES = [
  "What is the fee for Class 7 boarding?",
  "Tell me about the Horse Riding Academy",
  "How does TIS ensure child safety?",
  "What is the CBSE board exam pass rate?",
  "Can I schedule an in-person campus visit?",
];

const KNOWLEDGE_BASE: Record<string, string> = {
  fee: "The annual investment for residential boarding at TIS ranges from ₹4.8L to ₹5.2L (all-inclusive: CBSE tuition, AC hostels, 5 chef-curated meals daily, 16+ sports coaching, and medical coverage). Merit scholarships up to 20% are available for 90%+ marks or national athletic achievements.",
  riding: "TIS is one of the premier schools in North India with a dedicated 2.5-acre Equestrian Academy. We house 14 Thoroughbred horses, certified national dressage and show-jumping instructors, and private riding tracks. Riding is coached daily during evening athletics.",
  safety: "Our 22-acre campus has 150+ CCTV cameras, gated biometric perimeter security, and round-the-clock guards. Hostels feature separate boys and girls wings with resident Housemasters, Matrons, and an on-campus 10-bed infirmary with visiting doctors.",
  pass: "Tulas International School maintains a 100% CBSE Board Examination pass rate. In the recent Class XII board results, over 38% of students scored above 90%, with alumni successfully placed in IITs, BITS Pilani, AIIMS, and top overseas universities like Columbia and Purdue.",
  visit: "We welcome parents for campus walkthroughs Monday to Saturday from 9:00 AM to 5:00 PM. We also offer airport and railway station pickup assistance from Dehradun. You can book an appointment directly through our Admissions Desk at +91-98379 83791.",
  default: "Tulas International School (TIS) is a premier CBSE co-ed boarding school in Dehradun, Uttarakhand for Classes IV through XII. Would you like to explore our 16+ Sports Academy, calculate fees, or speak to our Senior Admissions Counselor?",
};

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Namaste! I am the TIS Admissions AI Copilot. How can I assist you with your child's education at Tulas International School today?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg: Message = { sender: "user", text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // AI Response matching
    setTimeout(() => {
      const lower = textToSend.toLowerCase();
      let reply = KNOWLEDGE_BASE.default;

      if (lower.includes("fee") || lower.includes("cost") || lower.includes("scholarship")) {
        reply = KNOWLEDGE_BASE.fee;
      } else if (lower.includes("horse") || lower.includes("riding") || lower.includes("sport") || lower.includes("equestrian")) {
        reply = KNOWLEDGE_BASE.riding;
      } else if (lower.includes("safe") || lower.includes("hostel") || lower.includes("dorms") || lower.includes("security")) {
        reply = KNOWLEDGE_BASE.safety;
      } else if (lower.includes("result") || lower.includes("pass") || lower.includes("rank") || lower.includes("academic")) {
        reply = KNOWLEDGE_BASE.pass;
      } else if (lower.includes("visit") || lower.includes("tour") || lower.includes("come")) {
        reply = KNOWLEDGE_BASE.visit;
      }

      const aiMsg: Message = {
        sender: "ai",
        text: reply,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating AI Launcher Button */}
      <div className="fixed bottom-5 right-5 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-slate-950 font-black text-xs shadow-2xl shadow-amber-500/40 border border-amber-300/40 cursor-pointer"
        >
          <Bot size={18} className="animate-bounce" />
          <span className="hidden sm:inline">Ask TIS AI</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </motion.button>
      </div>

      {/* AI Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-20 right-4 sm:right-6 w-[94vw] sm:w-[400px] h-[520px] rounded-3xl bg-slate-950/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col z-50 overflow-hidden text-white"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-slate-900 to-slate-950 border-b border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>TIS Admissions Copilot</span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-semibold">
                      AI Active
                    </span>
                  </h4>
                  <p className="text-[10px] text-slate-400">
                    Instant answers on admissions, academics & boarding
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                      m.sender === "user"
                        ? "bg-amber-400 text-slate-950 font-medium"
                        : "bg-slate-900/90 border border-slate-800 text-slate-200"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-amber-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse delay-75" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse delay-150" />
                    <span className="text-[10px] text-slate-400 ml-1">TIS Copilot is typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="p-2 border-t border-white/5 bg-slate-900/40 flex gap-1.5 overflow-x-auto no-scrollbar shrink-0">
              {PRESET_QUERIES.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 hover:border-amber-400/40 text-[10px] text-slate-300 hover:text-white whitespace-nowrap cursor-pointer transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-white/10 bg-slate-950 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about fees, riding, hostels..."
                className="flex-1 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors cursor-pointer shrink-0"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
