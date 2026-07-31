import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyInput() {
  const [value, setValue] = useState("PROMO2026");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);

    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="
          h-12 w-full rounded-xl border border-slate-300
          bg-white px-4 pr-14 font-montserrat text-14
          text-secondary outline-none transition
          focus:border-primary focus:ring-4 focus:ring-primary/10
        "
      />

      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy input value"
        className="
          absolute right-2 top-1/2 flex h-9 w-9
          -translate-y-1/2 items-center justify-center
          rounded-lg text-secondary transition
          hover:bg-primary/10 hover:text-primary
        "
      >
        {copied ? (
          <Check size={17} className="text-emerald-600" />
        ) : (
          <Copy size={17} />
        )}
      </button>
    </div>
  );
}
