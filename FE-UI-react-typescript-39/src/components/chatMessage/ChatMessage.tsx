import { ANIMATION_DURATION2 } from "../../constants/constants";
import { motion } from "framer-motion";
import type { Message } from "../../interface";

interface Props {
  message: Message;
}
const ChatMessage = ({ message }: Props) => {
  const isUser = message.sender === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_DURATION2 }}
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[70%] px-4 py-2 rounded-2xl shadow-md text-sm
        ${
          isUser
            ? "bg-blue-500 text-white rounded-br-sm"
            : "bg-gray-200 text-gray-900 rounded-bl-sm"
        }`}
      >
        {message.text}
      </div>
    </motion.div>
  );
};

export default ChatMessage;
