import type { Message } from "../../interface";
import { useCharacterStore } from "../../store/useCharacterStore";
import ChatMessage from "./ChatMessage";

const ChatSection = () => {
  const messages = useCharacterStore((state) => state.messages) ?? [];

  return (
    <>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg: Message) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
      </div>
    </>
  );
};

export default ChatSection;
