import { ChatMessage } from "./ChatMessage";

const messages = [
  {
    id: 1,
    senderName: "Sarah",
    message:
      "Hi! I have completed the updated dashboard design. Could you review it?",
    time: "10:32 AM",
    isOwnMessage: false,
  },
  {
    id: 2,
    senderName: "You",
    message:
      "Sure, please share the latest version. I will review the responsive screens as well.",
    time: "10:34 AM",
    isOwnMessage: true,
    status: "read" as const,
  },
  {
    id: 3,
    senderName: "Sarah",
    message: "The file has been uploaded to the project workspace.",
    time: "10:35 AM",
    isOwnMessage: false,
    replyTo: {
      senderName: "You",
      message: "Please share the latest version.",
    },
  },
];

export function ChatMessageExample() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-100 px-5 py-10 font-brand dark:bg-slate-950">
      <div className="w-full max-w-4xl overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        <header className="flex items-center gap-4 border-b border-slate-200 px-6 py-5 dark:border-slate-800">
          <span className="flex size-11 items-center justify-center rounded-full bg-primary text-brand-16 text-secondary">
            S
          </span>

          <div>
            <h1 className="text-brand-16 text-slate-900 dark:text-white">
              Sarah Wilson
            </h1>

            <p className="text-brand-12 text-emerald-500">Online</p>
          </div>
        </header>

        <div className="h-150 space-y-7 overflow-y-auto bg-slate-50 px-5 py-8 dark:bg-slate-950 sm:px-8">
          <div className="flex justify-center">
            <span className="rounded-full bg-slate-200 px-4 py-1.5 text-brand-11 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              Today
            </span>
          </div>

          {messages.map((message) => (
            <ChatMessage key={message.id} {...message} />
          ))}
        </div>

        <footer className="border-t border-slate-200 p-5 dark:border-slate-800">
          <div className="flex items-end gap-3 rounded-2xl bg-slate-100 p-2 dark:bg-slate-950">
            <textarea
              rows={1}
              placeholder="Write a message..."
              className="max-h-32 min-h-11 flex-1 resize-none bg-transparent px-3 py-3 text-brand-14 text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
            />

            <button
              type="button"
              className="min-h-11 rounded-xl bg-secondary px-5 text-brand-14 text-white transition hover:bg-secondary/90 dark:bg-primary dark:text-slate-950"
            >
              Send
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
