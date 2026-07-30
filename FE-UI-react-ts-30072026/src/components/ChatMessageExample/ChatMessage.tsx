import {
  CheckCheck,
  Copy,
  MoreHorizontal,
  Reply,
  SmilePlus,
} from "lucide-react";
import { useState } from "react";

type MessageStatus = "sent" | "delivered" | "read";

type ChatMessageProps = {
  id: number;
  message: string;
  time: string;
  senderName: string;
  avatarUrl?: string;
  isOwnMessage?: boolean;
  status?: MessageStatus;
  isEdited?: boolean;
  replyTo?: {
    senderName: string;
    message: string;
  };
};

export function ChatMessage({
  message,
  time,
  senderName,
  avatarUrl,
  isOwnMessage = false,
  status = "read",
  isEdited = false,
  replyTo,
}: ChatMessageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [reaction, setReaction] = useState<string | null>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(message);
    setIsMenuOpen(false);
  };

  return (
    <article
      className={[
        "group flex w-full items-end gap-3",
        isOwnMessage ? "justify-end" : "justify-start",
      ].join(" ")}
    >
      {!isOwnMessage && <Avatar name={senderName} avatarUrl={avatarUrl} />}

      <div
        className={[
          "relative max-w-[85%] sm:max-w-[70%] lg:max-w-[58%]",
          isOwnMessage ? "items-end" : "items-start",
        ].join(" ")}
      >
        {!isOwnMessage && (
          <p className="mb-1 px-1 text-brand-12 text-slate-500 dark:text-slate-400">
            {senderName}
          </p>
        )}

        <div
          className={[
            "relative rounded-2xl px-4 py-3 shadow-sm",
            isOwnMessage
              ? "rounded-br-md bg-secondary text-white dark:bg-primary dark:text-slate-950"
              : "rounded-bl-md border border-slate-200 bg-white text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100",
          ].join(" ")}
        >
          {replyTo && (
            <div
              className={[
                "mb-3 rounded-xl border-l-4 px-3 py-2",
                isOwnMessage
                  ? "border-primary bg-white/10 dark:border-secondary dark:bg-secondary/10"
                  : "border-primary bg-slate-100 dark:bg-slate-800",
              ].join(" ")}
            >
              <p
                className={[
                  "text-brand-12",
                  isOwnMessage
                    ? "text-primary dark:text-secondary"
                    : "text-secondary dark:text-primary",
                ].join(" ")}
              >
                {replyTo.senderName}
              </p>

              <p
                className={[
                  "mt-1 truncate text-brand-12",
                  isOwnMessage
                    ? "text-white/70 dark:text-slate-700"
                    : "text-slate-500 dark:text-slate-400",
                ].join(" ")}
              >
                {replyTo.message}
              </p>
            </div>
          )}

          <p className="whitespace-pre-wrap break-words text-brand-14 leading-6">
            {message}
          </p>

          <div
            className={[
              "mt-2 flex items-center justify-end gap-1.5 text-brand-11",
              isOwnMessage
                ? "text-white/65 dark:text-slate-700"
                : "text-slate-400",
            ].join(" ")}
          >
            {isEdited && <span>Edited</span>}

            <time>{time}</time>

            {isOwnMessage && <MessageStatusIcon status={status} />}
          </div>

          {reaction && (
            <button
              type="button"
              onClick={() => setReaction(null)}
              className="absolute -bottom-4 right-3 flex min-h-8 min-w-8 items-center justify-center rounded-full border border-slate-200 bg-white px-2 text-brand-14 shadow-md dark:border-slate-700 dark:bg-slate-900"
            >
              {reaction}
            </button>
          )}
        </div>

        <div
          className={[
            "absolute top-1/2 z-10 flex -translate-y-1/2 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100",
            isOwnMessage ? "right-full mr-2" : "left-full ml-2",
          ].join(" ")}
        >
          <button
            type="button"
            aria-label="Reply to message"
            className="flex size-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:text-secondary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-primary"
          >
            <Reply size={15} />
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-label="Message actions"
              className="flex size-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:text-secondary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-primary"
            >
              <MoreHorizontal size={16} />
            </button>

            {isMenuOpen && (
              <div
                className={[
                  "absolute top-10 z-20 w-40 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-slate-700 dark:bg-slate-900",
                  isOwnMessage ? "right-0" : "left-0",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-brand-13 text-slate-600 transition hover:bg-slate-100 hover:text-secondary dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-primary"
                >
                  <Copy size={15} />
                  Copy message
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setReaction("👍");
                    setIsMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-brand-13 text-slate-600 transition hover:bg-slate-100 hover:text-secondary dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-primary"
                >
                  <SmilePlus size={15} />
                  Add reaction
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {isOwnMessage && <Avatar name={senderName} avatarUrl={avatarUrl} />}
    </article>
  );
}

type AvatarProps = {
  name: string;
  avatarUrl?: string;
};

function Avatar({ name, avatarUrl }: AvatarProps) {
  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={name}
        className="size-9 shrink-0 rounded-full object-cover"
      />
    );
  }

  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-brand-13 text-secondary">
      {name.charAt(0).toUpperCase()}
    </span>
  );
}

function MessageStatusIcon({ status }: { status: MessageStatus }) {
  if (status === "sent") {
    return <CheckCheck size={14} className="opacity-50" />;
  }

  if (status === "delivered") {
    return <CheckCheck size={14} />;
  }

  return <CheckCheck size={14} className="text-sky-300 dark:text-sky-700" />;
}
