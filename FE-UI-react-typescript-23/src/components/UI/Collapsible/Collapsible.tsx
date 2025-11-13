import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react"; // 👈 add this
import type { CollapsibleProps } from "../../../interface";
import { COLLAPSIBLE_ANIMATION_MS } from "../../../constants/constants";

const Collapsible: React.FC<CollapsibleProps> = ({
  label,
  children,
  defaultOpen = false,
  className = "",
  id,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(
    defaultOpen ? undefined : 0
  );
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isOpen) {
      const fullHeight = el.scrollHeight;
      setMaxHeight(fullHeight);

      const timeout = setTimeout(
        () => setMaxHeight(undefined),
        COLLAPSIBLE_ANIMATION_MS
      );
      return () => clearTimeout(timeout);
    } else {
      const fullHeight = el.scrollHeight;
      setMaxHeight(fullHeight);
      requestAnimationFrame(() => setMaxHeight(0));
    }
  }, [isOpen, children]);

  return (
    <div className={`w-full ${className}`} id={id}>
      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="
          flex items-center gap-1.5
          text-sm congenial-medium
          text-[#6e4a8e]
          hover:text-[#54458e]
          transition-colors cursor-pointer
        "
      >
        <span>{label}</span>

        {/* arrow icon (Lucide) */}
        <span
          className={`
            inline-flex h-4 w-4 items-center justify-center
            transition-transform duration-200
            ${isOpen ? "rotate-180" : "rotate-0"}
          `}
          aria-hidden="true"
        >
          <ChevronDown className="h-5 w-5" /> {/* 👈 icon here */}
        </span>
      </button>

      {/* Sliding panel */}
      <div
        className="
          transition-all
          overflow-hidden
        "
        style={{
          transitionDuration: `${COLLAPSIBLE_ANIMATION_MS}ms`,
          maxHeight: maxHeight !== undefined ? `${maxHeight}px` : undefined,
          opacity: isOpen ? 1 : 0,
        }}
        aria-hidden={!isOpen}
      >
        <div
          ref={contentRef}
          className="
            mt-3 rounded-3xl
            bg-white
            px-4 py-4 sm:px-5 sm:py-5
            text-sm sm:text-[15px] leading-relaxed
            text-[#33354d]
          "
        >
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
};

export default Collapsible;
