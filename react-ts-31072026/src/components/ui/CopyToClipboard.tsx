import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyToClipboardProps = {
  text: string;
  label?: string;
};

export default function CopyToClipboard({
  text,
  label = "Copy text",
}: CopyToClipboardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyText = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");

        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";

        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setIsCopied(true);

      window.setTimeout(() => {
        setIsCopied(false);
      }, 1800);
    } catch (error) {
      console.error("Unable to copy text:", error);
    }
  };

  return (
    <section className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-5 shadow-lg desktop-sm:p-7">
      <header className="mb-5">
        <p className="font-montserrat text-12 font-semibold uppercase tracking-[0.16em] text-primary">
          Clipboard
        </p>

        <h1 className="mt-2 font-arialnb text-28 font-bold text-secondary">
          Copy Text
        </h1>

        <p className="mt-2 font-montserrat text-14 text-secondary/70">
          Click the button to copy the text to your clipboard.
        </p>
      </header>

      <div className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-slate-50 p-3">
        <div className="min-w-0 flex-1">
          <p className="break-all font-montserrat text-14 leading-6 text-secondary">
            {text}
          </p>
        </div>

        <button
          type="button"
          onClick={copyText}
          aria-label={isCopied ? "Text copied" : label}
          className={`
            flex h-11 shrink-0 items-center justify-center gap-2
            rounded-xl px-4 font-montserrat text-12 font-semibold
            transition focus:outline-none focus:ring-4
            ${
              isCopied
                ? "bg-emerald-500 text-white focus:ring-emerald-200"
                : "bg-primary text-white hover:bg-sky-600 focus:ring-primary/20"
            }
          `}
        >
          {isCopied ? (
            <>
              <Check size={17} aria-hidden="true" />
              Copied
            </>
          ) : (
            <>
              <Copy size={17} aria-hidden="true" />
              Copy
            </>
          )}
        </button>
      </div>
    </section>
  );
}
