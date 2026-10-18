import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyToClipboardProps {
  text: string;
  className?: string;
}

const CopyToClipboard = ({ text, className = "" }: CopyToClipboardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className={`copy-to-clipboard flex w-full max-w-md items-center gap-2 rounded-lg border border-gray-200 bg-white p-3 ${className}`}
    >
      <p className="min-w-0 flex-1 truncate text-sm text-gray-700">{text}</p>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Text copied" : "Copy text"}
        className={`flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition ${copied ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CopyToClipboard;
