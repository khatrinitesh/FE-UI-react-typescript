import { COPY_CONTENT } from "../../constants/constants";
import { useClipboardStore } from "../../store/useClipboardStore";
import { motion } from "framer-motion";

const CopyClipboard = () => {
  const { copied, setCopied } = useClipboardStore();

  const copyText = async () => {
    await navigator.clipboard.writeText(COPY_CONTENT.text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-3 bg-white shadow-lg p-4 rounded-xl">
        <span className="text-gray-700">{COPY_CONTENT.text}</span>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={copyText}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          {copied ? "Copied!" : "Copy"}
        </motion.button>
      </div>
    </div>
  );
};

export default CopyClipboard;
