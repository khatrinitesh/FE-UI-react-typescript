import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";

const ClearInputField = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Search
        </label>

        <motion.div
          animate={{
            scale: value ? 1.02 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="relative"
        >
          {/* Search Icon */}
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type something..."
            className="
              h-14
              w-full
              rounded-full
              border
              border-slate-300
              bg-white
              pl-12
              pr-14
              text-slate-700
              outline-none
              transition-all
              duration-300
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-200
            "
          />

          {/* Clear Button */}
          <AnimatePresence>
            {value && (
              <motion.button
                type="button"
                initial={{
                  scale: 0,
                  rotate: -180,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  scale: 0,
                  rotate: 180,
                  opacity: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                onClick={clearInput}
                className="
                  absolute
                  right-3
                  top-1/2
                  flex
                  h-8
                  w-8
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-200
                  text-slate-700
                  hover:bg-red-500
                  hover:text-white
                  transition-colors
                "
              >
                <X size={16} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Info */}
        <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
          <span>{value ? "Typing..." : "Input is empty"}</span>

          <motion.span
            key={value.length}
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
          >
            {value.length} / 100
          </motion.span>
        </div>

        {/* Preview */}
        <AnimatePresence>
          {value && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="mt-6 rounded-xl bg-white p-5 shadow"
            >
              <h2 className="mb-2 font-semibold text-slate-700">
                Live Preview
              </h2>

              <p className="break-all text-slate-600">{value}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ClearInputField;