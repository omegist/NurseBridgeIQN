
"use client";

import React, { useState } from "react";
import { runChatbotFlow } from "@/app/actions/chatbot-action";

export default function Chatbot() {
  const [userMessage, setUserMessage] = useState("");
  const [chatLog, setChatLog] = useState<{ sender: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async () => {
    if (!userMessage.trim()) return;

    setError(null);
    setChatLog((prev) => [...prev, { sender: "user", text: userMessage }]);
    setLoading(true);

    try {
      const result = await runChatbotFlow({ message: userMessage });
      if (result.success && result.response) {
        setChatLog((prev) => [
          ...prev,
          { sender: "bot", text: result.response },
        ]);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      console.error("Flow error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setUserMessage("");
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      {/* Chat Box */}
      <div className="border rounded-lg p-4 h-96 overflow-y-auto bg-gray-50 mb-4">
        {chatLog.map((entry, idx) => (
          <div
            key={idx}
            className={`mb-2 ${entry.sender === "user" ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block px-3 py-2 rounded-lg ${
                entry.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {entry.text}
            </span>
          </div>
        ))}

        {/* Loading */}
        {loading && (
          <div className="text-left mb-2">
            <span className="inline-block px-3 py-2 rounded-lg bg-gray-300 text-gray-700 animate-pulse">
              Bot is typing...
            </span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-red-500 text-sm mt-2">⚠️ {error}</div>
        )}
      </div>

      {/* Input Area */}
      <div className="flex">
        <input
          className="flex-1 border rounded-l-lg px-3 py-2"
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
          disabled={loading}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className={`px-4 py-2 rounded-r-lg ${
            loading
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
