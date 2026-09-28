import type { ReactNode } from "react";

interface ChatMessageProps {
  message: string;
  sender?: string;
  avatar?: string;
  time?: string;
  isOwn?: boolean;
  children?: ReactNode;
  className?: string;
}

const ChatMessage = ({ message, sender, avatar, time, isOwn = false, children, className = "" }: ChatMessageProps) => {
  return (
    <div className={`chat-message flex w-full items-end gap-2 ${isOwn ? "justify-end" : "justify-start"} ${className}`}>
      {!isOwn && <div className="chat-message__avatar h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gray-200">{avatar ? <img src={avatar} alt={sender ?? "User"} className="h-full w-full object-cover" /> : <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-gray-500">{sender?.charAt(0).toUpperCase() ?? "U"}</span>}</div>}
      <div className={`chat-message__content max-w-[75%] ${isOwn ? "items-end" : "items-start"} flex flex-col`}>
        {sender && !isOwn && <span className="mb-1 text-xs font-medium text-gray-500">{sender}</span>}
        <div className={`chat-message__bubble rounded-2xl px-4 py-2.5 text-sm leading-5 ${isOwn ? "rounded-br-md bg-blue-600 text-white" : "rounded-bl-md bg-gray-100 text-gray-900"}`}>
          {message}
          {children}
        </div>
        {time && <span className="mt-1 text-[11px] text-gray-400">{time}</span>}
      </div>
    </div>
  );
};

export default ChatMessage;