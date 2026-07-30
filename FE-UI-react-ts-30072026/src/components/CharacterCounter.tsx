import {
  AlertCircle,
  CheckCircle2,
  MessageSquareText,
  RotateCcw,
} from "lucide-react";
import { useMemo, useState } from "react";

const MAX_CHARACTERS = 280;
const WARNING_LIMIT = 220;

export function CharacterCounter() {
  const [message, setMessage] = useState("");

  const characterCount = message.length;
  const remainingCharacters = MAX_CHARACTERS - characterCount;

  const progress = Math.min((characterCount / MAX_CHARACTERS) * 100, 100);

  const status = useMemo(() => {
    if (characterCount >= MAX_CHARACTERS) {
      return {
        label: "Character limit reached",
        textClass: "text-red-600 dark:text-red-400",
        progressClass: "bg-red-500",
        icon: <AlertCircle size={18} />,
      };
    }

    if (characterCount >= WARNING_LIMIT) {
      return {
        label: "Approaching character limit",
        textClass: "text-amber-600 dark:text-amber-400",
        progressClass: "bg-amber-500",
        icon: <AlertCircle size={18} />,
      };
    }

    return {
      label: "Message length looks good",
      textClass: "text-secondary dark:text-primary",
      progressClass: "bg-primary",
      icon: <CheckCircle2 size={18} />,
    };
  }, [characterCount]);

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setMessage(event.target.value.slice(0, MAX_CHARACTERS));
  };

  const handleReset = () => {
    setMessage("");
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-100 px-5 py-12 font-brand dark:bg-slate-950">
      <div className="w-full max-w-2xl">
        <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none sm:p-8">
          <header className="flex items-start justify-between gap-5">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-secondary dark:text-primary">
                <MessageSquareText size={23} />
              </span>

              <div>
                <p className="text-brand-12 uppercase tracking-[0.16em] text-slate-400">
                  Text input
                </p>

                <h1 className="mt-1 text-brand-28 text-secondary dark:text-primary">
                  Character counter
                </h1>

                <p className="mt-2 text-brand-14 leading-6 text-slate-500 dark:text-slate-400">
                  Write a message within the maximum character limit.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              disabled={!message}
              aria-label="Clear message"
              className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-primary hover:bg-primary/10 hover:text-secondary disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:text-slate-300 dark:hover:text-primary"
            >
              <RotateCcw size={18} />
            </button>
          </header>

          <div className="mt-7">
            <label
              htmlFor="character-message"
              className="mb-2 block text-brand-14 text-slate-700 dark:text-slate-200"
            >
              Your message
            </label>

            <div className="relative">
              <textarea
                id="character-message"
                value={message}
                onChange={handleMessageChange}
                maxLength={MAX_CHARACTERS}
                rows={7}
                placeholder="Start typing your message..."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 pb-12 text-brand-16 leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:border-primary dark:focus:bg-slate-950"
              />

              <span
                className={[
                  "absolute bottom-4 right-4 rounded-lg px-3 py-1 text-brand-12",
                  characterCount >= MAX_CHARACTERS
                    ? "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400"
                    : characterCount >= WARNING_LIMIT
                      ? "bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400"
                      : "bg-primary/15 text-secondary dark:text-primary",
                ].join(" ")}
              >
                {characterCount}/{MAX_CHARACTERS}
              </span>
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between">
              <div
                className={`flex items-center gap-2 text-brand-13 ${status.textClass}`}
              >
                {status.icon}
                <span>{status.label}</span>
              </div>

              <span
                className={[
                  "text-brand-13",
                  remainingCharacters <= 0
                    ? "text-red-600 dark:text-red-400"
                    : "text-slate-500 dark:text-slate-400",
                ].join(" ")}
              >
                {remainingCharacters} remaining
              </span>
            </div>

            <div className="h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className={`h-full rounded-full transition-all duration-300 ${status.progressClass}`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <CounterCard label="Characters" value={characterCount} />

            <CounterCard
              label="Words"
              value={message.trim() ? message.trim().split(/\s+/).length : 0}
            />

            <CounterCard
              label="Lines"
              value={message ? message.split("\n").length : 0}
              className="col-span-2 sm:col-span-1"
            />
          </div>

          <button
            type="button"
            disabled={!message.trim()}
            className="mt-6 w-full rounded-xl bg-secondary px-5 py-3.5 text-brand-14 text-white transition hover:bg-secondary/90 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-primary dark:text-slate-950"
          >
            Submit message
          </button>
        </div>
      </div>
    </section>
  );
}

type CounterCardProps = {
  label: string;
  value: number;
  className?: string;
};

function CounterCard({ label, value, className = "" }: CounterCardProps) {
  return (
    <article
      className={`rounded-2xl bg-slate-50 p-4 dark:bg-slate-950 ${className}`}
    >
      <p className="text-brand-12 text-slate-500 dark:text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-brand-20 text-secondary dark:text-primary">
        {value}
      </p>
    </article>
  );
}
