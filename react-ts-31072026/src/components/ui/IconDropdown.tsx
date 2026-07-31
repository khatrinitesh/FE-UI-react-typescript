import { Copy, Edit3, MoreHorizontal, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function IconDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
        className="
          flex h-11 w-11 items-center justify-center rounded-full
          border border-slate-300 bg-white text-secondary
          transition hover:border-primary hover:text-primary
          focus:outline-none focus:ring-4 focus:ring-primary/15
        "
      >
        <MoreHorizontal size={21} />
      </button>

      {isOpen && (
        <div
          className="
            absolute right-0 top-[calc(100%+8px)] z-50
            w-48 rounded-2xl border border-slate-200
            bg-white p-2 shadow-xl
          "
        >
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 font-montserrat text-14 text-secondary hover:bg-primary/10 hover:text-primary">
            <Edit3 size={17} />
            Edit
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 font-montserrat text-14 text-secondary hover:bg-primary/10 hover:text-primary">
            <Copy size={17} />
            Duplicate
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 font-montserrat text-14 text-red-600 hover:bg-red-50">
            <Trash2 size={17} />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
