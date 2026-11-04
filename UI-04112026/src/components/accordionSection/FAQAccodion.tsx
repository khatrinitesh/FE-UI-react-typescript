import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useFAQ } from "../../hooks/useFAQ";

export default function FAQAccordion() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const { data, isLoading, isError, refetch } = useFAQ();

  if (isLoading) {
    return <p className="p-6 text-gray-500">Loading FAQs...</p>;
  }

  if (isError) {
    return (
      <button onClick={() => refetch()} className="p-6 text-red-500">
        Failed to load FAQs. Try again.
      </button>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-3 p-6">
      <h2 className="mb-5 text-2xl font-bold">API FAQs</h2>

      {data?.map((item) => {
        const isOpen = activeId === item.id;

        return (
          <div key={item.id} className="overflow-hidden rounded-xl border">
            <button
              onClick={() => setActiveId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-${item.id}`}
              className="cursor-pointer flex w-full items-center justify-between p-4 text-left font-semibold hover:bg-gray-50"
            >
              {item.title}

              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <ChevronDown />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="border-t p-4 text-gray-600">{item.body}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
