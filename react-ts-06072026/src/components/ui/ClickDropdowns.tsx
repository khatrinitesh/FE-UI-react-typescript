import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

const ClickDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select Country");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "India",
    "United States",
    "Canada",
    "Australia",
    "Germany",
    "Japan",
    "Singapore",
    "United Kingdom",
  ];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div
        ref={dropdownRef}
        className="relative w-full max-w-sm"
      >
        {/* Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setOpen(!open)}
          className="
            flex
            h-14
            w-full
            items-center
            justify-between
            rounded-xl
            border
            border-slate-300
            bg-white
            px-5
            shadow-sm
            transition
            hover:border-blue-500
          "
        >
          <span className="font-medium text-slate-700">
            {selected}
          </span>

          <motion.div
            animate={{
              rotate: open ? 180 : 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <ChevronDown size={22} />
          </motion.div>
        </motion.button>

        {/* Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                absolute
                mt-2
                w-full
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                shadow-xl
              "
            >
              {options.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  onClick={() => {
                    setSelected(item);
                    setOpen(false);
                  }}
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    px-5
                    py-3
                    text-left
                    transition
                    hover:bg-blue-50
                    ${
                      selected === item
                        ? "bg-blue-100 font-semibold text-blue-600"
                        : "text-slate-700"
                    }
                  `}
                >
                  {item}

                  {selected === item && (
                    <Check size={18} />
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ClickDropdown;