import { useState } from "react";
import { useCharacterStore } from "../../store/useCharacterStore";
import { MAX_MESSAGE_LENGTH } from "../../constants/constants";

const ChatInput = () => {
  const [text, setText] = useState("");
  const addMessage = useCharacterStore((s) => s.messages);

  const handleSend = () => {
    if (!text.trim()) return;

    addMessage({
      id: crypto.randomUUID(),
      text,
      sender: "user",
      timestamp: Date.now(),
    });

    setText("");
  };
  return (
    <div className="flex gap-2 border-t p-3">
      <input
        value={text}
        maxLength={MAX_MESSAGE_LENGTH}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
