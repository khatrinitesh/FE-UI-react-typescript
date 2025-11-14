import { useState } from "react";
import type { ConsentSectionProps } from "../../../interface";

const CheckboxSection = ({
  items,
  onChange,
  children,
}: ConsentSectionProps) => {
  const [values, setValues] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setValues((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      onChange?.(next);
      return next;
    });
  };

  return (
    <div
      className="
        w-full 
      "
    >
      {/* {title && (
        <h2 className="text-sm sm:text-base font-semibold text-[#6e4a8e] mb-1">
          {title}
        </h2>
      )} */}

      {items.map((item) => {
        const checked = !!values[item.id];

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => toggle(item.id)}
            className="
              w-full text-left
              flex items-start gap-3
              px-2 py-2
              rounded-2xl
              transition
              cursor-pointer
            "
          >
            {/* Custom checkbox */}
            <span
              className={`
                mt-[2px]
                inline-flex h-5 w-5 
                items-center justify-center
                rounded border-2
                shrink-0
                ${
                  checked
                    ? "border-[#6e4a8e] bg-[#6e4a8e]"
                    : "border-[#6e4a8e] bg-transparent"
                }
              `}
            >
              <svg
                className={`h-4 w-4 text-white transition-opacity duration-150 ${
                  checked ? "opacity-100" : "opacity-0"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </span>

            {/* Label text */}
            <span className="flex-1 text-sm leading-relaxed text-black congenial-regular">
              {item.text}
              {item.required && <span className="color-purple-1 ml-1">*</span>}
            </span>
          </button>
        );
      })}

      {/* Extra content from parent (e.g. collapsible "Learn more") */}
      {children && <div className="pt-2">{children}</div>}
    </div>
  );
};

export default CheckboxSection;
