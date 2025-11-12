import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Features from "./components/Features";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

// 🌟 Replace this with your Gemini API key
const GEMINI_API_KEY = "AIzaSyCiR_GmK91VvvYbmtdwcWEpRWubkkSuKo0";

// 🔮 Simple fetch-based Gemini function (no SDK needed)
async function getGeminiResponse(prompt: string): Promise<string> {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();
    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn’t get a response. Please try again!"
    );
  } catch (error) {
    console.error("Gemini API error:", error);
    return "I'm having a little trouble connecting right now. Please try again in a moment.";
  }
}

// 💬 Floating Chatbot Component
const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");

    const botResponse = await getGeminiResponse(userMessage);
    setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="w-80 h-96 bg-[#1E1C55]/90 border border-purple-400/30 rounded-2xl shadow-lg p-3 flex flex-col backdrop-blur-md">
          <div className="flex justify-between items-center border-b border-purple-400/30 pb-2 mb-2">
            <h3 className="text-white font-semibold">MindSpace AI</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              ✖
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 mb-2 p-1">
            {messages.length === 0 && (
              <p className="text-gray-400 text-sm text-center mt-4">
                👋 Hi! I’m your MindSpace assistant.  
                How can I help you today?
              </p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl text-sm max-w-[90%] ${
                  msg.sender === "user"
                    ? "bg-cyan-500/20 text-cyan-100 self-end ml-auto"
                    : "bg-purple-800/30 text-white self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-[#0A092D]/70 text-white rounded-lg px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-2 rounded-lg transition"
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#9F70FD] to-[#00F5D4] text-black font-bold px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          💬 Chat
        </button>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="relative bg-[#0A092D] min-h-screen overflow-hidden">
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <Problems />
        <Features />
        <Team />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />

      {/* 🧠 Add chatbot floating button */}
      <Chatbot />
    </div>
  );
};

export default App;
