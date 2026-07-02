import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

export interface AccordionItem {
  id: number
  title: string
  description: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [activeId, setActiveId] = useState<number | null>(null)

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="w-full max-w-2xl space-y-3">
      {items.map((item) => {
        const isActive = activeId === item.id

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => handleToggle(item.id)}
              className="cursor-pointer flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <h3 className="text-base font-semibold text-gray-900">
                {item.title}
              </h3>

              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700">
                {isActive ? (
                  <ChevronDown size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-100 px-5 py-4">
                    <p className="text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}