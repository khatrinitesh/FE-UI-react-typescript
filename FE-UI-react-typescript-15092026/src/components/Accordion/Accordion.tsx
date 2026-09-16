import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library used to build interactive user interfaces.",
  },
  {
    id: 2,
    title: "What is TypeScript?",
    content:
      "TypeScript is a strongly typed programming language built on JavaScript.",
  },
  {
    id: 3,
    title: "What is Tailwind CSS?",
    content:
      "Tailwind CSS is a utility-first CSS framework for creating modern interfaces.",
  },
];

const Accordion = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="mx-auto flex w-full max-w-[700px] flex-col gap-3">
      {accordionData.map((item) => {
        const isActive = activeId === item.id;

        return (
          <div
            key={item.id}
            className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
              isActive
                ? "border-indigo-500 shadow-[0_4px_15px_rgba(99,102,241,0.15)]"
                : "border-gray-200"
            }`}
          >
            <button
              type="button"
              className={`flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold transition-colors duration-300 ${
                isActive ? "text-indigo-500" : "text-gray-900"
              }`}
              onClick={() => handleToggle(item.id)}
              aria-expanded={isActive}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span>{item.title}</span>

              <span
                className={`flex items-center justify-center transition-colors duration-300 ${
                  isActive ? "text-indigo-500" : "text-gray-500"
                }`}
              >
                {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </button>

            <div
              id={`accordion-content-${item.id}`}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`overflow-hidden text-sm leading-7 text-gray-500 transition-all duration-300 ${
                    isActive ? "px-5 pb-5" : "px-5"
                  }`}
                >
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
