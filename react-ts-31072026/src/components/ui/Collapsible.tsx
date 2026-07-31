import { ChevronDown } from "lucide-react";
import { useId, useState, type ReactNode } from "react";

type CollapsibleProps = {
  title: string;
  description?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  disabled?: boolean;
  className?: string;
};

export default function Collapsible({
  title,
  description,
  children,
  defaultOpen = false,
  disabled = false,
  className = "",
}: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <section
      className={`
        overflow-hidden rounded-2xl border border-slate-200
        bg-white shadow-sm transition
        ${isOpen ? "border-primary/40 shadow-primary/5" : ""}
        ${className}
      `}
    >
      <button
        type="button"
        disabled={disabled}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((current) => !current)}
        className={`
          flex w-full items-center justify-between gap-4
          px-5 py-4 text-left transition
          focus:outline-none focus-visible:ring-4
          focus-visible:ring-inset focus-visible:ring-primary/15

          ${disabled ? "cursor-not-allowed opacity-50" : "hover:bg-primary/5"}
        `}
      >
        <span className="min-w-0 flex-1">
          <span className="block font-arialnb text-20 font-bold text-secondary">
            {title}
          </span>

          {description && (
            <span className="mt-1 block font-montserrat text-12 leading-5 text-secondary/70">
              {description}
            </span>
          )}
        </span>

        <span
          className={`
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full transition-all duration-300

            ${
              isOpen
                ? "rotate-180 bg-primary text-white"
                : "bg-primary/10 text-primary"
            }
          `}
        >
          <ChevronDown size={20} aria-hidden="true" />
        </span>
      </button>

      <div
        id={contentId}
        className={`
          grid transition-[grid-template-rows] duration-300 ease-in-out
          ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="overflow-hidden">
          <div
            className={`
              border-t border-slate-200 px-5 py-5
              font-montserrat text-14 leading-6 text-secondary
              transition-opacity duration-300
              ${isOpen ? "opacity-100" : "opacity-0"}
            `}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
