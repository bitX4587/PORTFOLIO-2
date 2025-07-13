import { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I’m CodexBot. Ask me anything." },
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotReply = (message) => {
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("service") || lowerMsg.includes("offer")) {
      return "I develop systems like websites, mobile apps, and games.";
    }

    if (lowerMsg.includes("contact")) {
      return "You can contact Mark via the contact section or email at mark@example.com.";
    }

    if (lowerMsg.includes("tech stack") || lowerMsg.includes("tools")) {
      return "Mark uses React, Tailwind, PHP, Firebase, MySQL, and more.";
    }

    if (lowerMsg.includes("name")) {
      return "I'm CodexBot, created by Mark Daniel Partoza to assist you.";
    }

    if (lowerMsg.includes("who are you") || lowerMsg.includes("about you")) {
      return "I'm a friendly chatbot designed to help you learn about Mark's portfolio.";
    }

    if (
      lowerMsg.includes("hi") ||
      lowerMsg.includes("hello") ||
      lowerMsg.includes("hey")
    ) {
      return "Hello there! 👋 How can I assist you today?";
    }

    if (lowerMsg.includes("skills")) {
      return "Mark specializes in full-stack web, mobile, and game development.";
    }

    if (lowerMsg.includes("projects") || lowerMsg.includes("portfolio")) {
      return "You can view the Projects section to explore past works.";
    }

    if (lowerMsg.includes("thanks") || lowerMsg.includes("thank you")) {
      return "You're very welcome! 😊";
    }

    if (lowerMsg.includes("available") || lowerMsg.includes("hire")) {
      return "Yes, Mark is available for freelance or project-based work!";
    }

    return "I'm not sure how to answer that. Try asking something else?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const botReply = getBotReply(userMessage);

    setMessages((prev) => [
      ...prev,
      { from: "user", text: userMessage },
      { from: "bot", text: botReply },
    ]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="w-80 h-96 bg-white border border-gray-300 rounded-xl shadow-lg p-4 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-semibold text-blue-600">CodexBot</h4>
            <button
              onClick={() => setOpen(false)}
              className="text-red-500 text-lg"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto text-sm text-gray-700 space-y-2 pr-1">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`${
                  msg.from === "user"
                    ? "text-right text-blue-600"
                    : "text-left text-gray-800"
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-xl ${
                    msg.from === "user" ? "bg-blue-100" : "bg-gray-100"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="mt-2 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ask me anything..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Robot Icon (only show when closed) */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          title="Open chatbot"
          className="w-14 h-14 bg-blue-600 text-white text-2xl rounded-full shadow-md flex items-center justify-center 
               hover:w-20 hover:h-20 hover:bg-blue-700 transition-all duration-300 ease-in-out"
        >
          <FaRobot />
        </button>
      )}
    </div>
  );
}
