import { motion } from "framer-motion"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

interface CopyToClipboardProps {
  text: string
}

export default function CopyToClipboard({ text }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } 
    catch (error) {
      console.error("Copy failed:", error)
    }
  }

  return (
    <div className="flex w-full max-w-xl items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="flex-1 truncate text-sm font-medium text-slate-700">
        {text}
      </p>

      <motion.button
        type="button"
        onClick={handleCopy}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.04 }}
        className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
          copied
            ? "bg-green-500 text-white"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied
          </>
        ) : (
          <>
            <Copy size={16} />
            Copy
          </>
        )}
      </motion.button>
    </div>
  )
}