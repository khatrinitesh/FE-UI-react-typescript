import { ChevronDown, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type DropdownItem = {
  id: string;
  label: string;
  icon?: LucideIcon;
  danger?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

type ClickDropdownProps = {
  label?: string;
  items: DropdownItem[];
  align?: "left" | "right";
};

export default function ClickDropdown({
  label = "Actions",
  items,
  align = "left",
}: ClickDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleItemClick = (item: DropdownItem) => {
    if (item.disabled) return;

    item.onClick?.();
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
        className="
          flex h-12 items-center justify-center gap-2 rounded-xl
          border border-slate-300 bg-white px-5
          font-montserrat text-14 font-semibold text-secondary
          shadow-sm transition
          hover:border-primary hover:text-primary
          focus:outline-none focus:ring-4 focus:ring-primary/15
        "
      >
        <span>{label}</span>

        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        role="menu"
        className={`
          absolute top-[calc(100%+8px)] z-50 min-w-56
          overflow-hidden rounded-2xl border border-slate-200
          bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.16)]
          transition-all duration-200
          ${align === "right" ? "right-0" : "left-0"}
          ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }
        `}
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              role="menuitem"
              disabled={item.disabled}
              onClick={() => handleItemClick(item)}
              className={`
                flex w-full items-center gap-3 rounded-xl px-3 py-3
                text-left font-montserrat text-14 transition
                focus:outline-none focus:ring-2 focus:ring-primary/20
                ${
                  item.danger
                    ? "text-red-600 hover:bg-red-50"
                    : "text-secondary hover:bg-primary/10 hover:text-primary"
                }
                ${
                  item.disabled
                    ? "cursor-not-allowed opacity-40"
                    : "cursor-pointer"
                }
              `}
            >
              {Icon && (
                <Icon
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="shrink-0"
                />
              )}

              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
