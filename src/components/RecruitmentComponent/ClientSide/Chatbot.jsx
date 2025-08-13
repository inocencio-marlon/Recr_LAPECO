// src/components/RecruitmentComponent/ClientSide/ChatBot.jsx
import { useState } from "react";

const qaPairs = {
  "What are your office hours?": "Our office is open from 8 AM to 5 PM, Monday to Friday.",
  "How to apply?": "Go to our Careers page and submit your application.",
  "Where are you located?": "We are located in Cabuyao City, Laguna.",
};

export default function ChatBot({ onClose }) {
  const [messages, setMessages] = useState([]);

  const handleQuestionClick = (question) => {
    const botAnswer = qaPairs[question];
    const userMessage = { sender: "user", text: question };
    const botMessage = { sender: "peco", text: botAnswer };
    setMessages((prev) => [...prev, userMessage, botMessage]);
  };

  return (
    <div style={{
      position: 'fixed',
      top: '80px',
      right: '20px',
      width: '360px',
      zIndex: 1000,
      background: '#fff',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      padding: '15px',
      fontFamily: 'sans-serif',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h3 style={{ margin: 0 }}>🤖 Hi, I'm Peco </h3>
        <button
          onClick={onClose}
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          ×
        </button>
      </div>

      {/* Message Area */}
      <div style={{
        height: "250px",
        overflowY: "auto",
        border: "1px solid #eee",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "10px",
        background: "#fafafa",
      }}>
        {messages.map((msg, index) => (
  <div
    key={index}
    style={{
      display: "flex",
      justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
      marginBottom: "10px",
    }}
  >
    {msg.sender === "peco" && (
      <span style={{ fontSize: "20px", marginRight: "8px" }}>🤖</span>
    )}
    <div
      style={{
        padding: "10px 15px",
        borderRadius: "20px",
        background: msg.sender === "user" ? "#d1e7dd" : "#f0f0f0",
        maxWidth: "70%",
        textAlign: "left",
      }}
    >
      <strong>{msg.sender === "user" ? "" : "Peco:"}</strong> {msg.text}
    </div>
  </div>
))}

      </div>

      {/* Question Buttons */}
      <div>
        <p><strong>Choose a question:</strong></p>
        {Object.keys(qaPairs).map((question, i) => (
          <button
            key={i}
            onClick={() => handleQuestionClick(question)}
            style={{
              display: "block",
              margin: "6px 0",
              padding: "10px 15px",
              borderRadius: "15px",
              background: "#e6f4ea", // ✅ Faded green
              color: "#333",
              border: "1px solid #c6e2d6",
              cursor: "pointer",
              textAlign: "left",
              width: "100%",
              fontSize: "15px"
            }}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}
