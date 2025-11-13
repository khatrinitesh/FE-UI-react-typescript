import { useEffect, useRef, useState } from "react";
import { ANIMATION_DURATION } from "./components/data";
import gsap from "gsap";
import type { ChatMessageProps } from "../../interface";

const ChatMessageSection = () => {
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    { id: "1", text: "Hi, how can I help you?", type: "bot" },
    { id: "2", text: "What is your return policy?", type: "user" },
  ]);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        height: "400px",
        overflowY: "auto",
      }}
    >
      {messages.map((msg) => (
        <ChatBox key={msg.id} {...msg} />
      ))}
    </div>
  );
};

export default ChatMessageSection;

const ChatBox = ({ id, text, type }: ChatMessageProps) => {
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageRef.current) {
      gsap.fromTo(
        messageRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: ANIMATION_DURATION, ease: "power2.out" }
      );
    }
  }, []);
  const isUser = type === "user";
  return (
    <>
      <div
        ref={messageRef}
        style={{
          display: "flex",
          justifyContent: isUser ? "flex-end" : "flex-start",
          marginBottom: "12px",
        }}
      >
        <div
          style={{
            maxWidth: "60%",
            backgroundColor: isUser ? "#4CAF50" : "#e0e0e0",
            color: isUser ? "#fff" : "#000",
            padding: "12px 16px",
            borderRadius: "20px",
            borderTopLeftRadius: isUser ? "20px" : "0",
            borderTopRightRadius: isUser ? "0" : "20px",
            fontSize: "14px",
            lineHeight: 1.4,
          }}
        >
          {text}
        </div>
      </div>
    </>
  );
};
