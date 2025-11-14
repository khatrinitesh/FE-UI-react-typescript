import type { InspirationsProps } from "../../interface";
import Button from "../UI/Button/Button";

const Inspirations: React.FC<InspirationsProps> = ({
  title = "Inspirations",
  items,
  onRefresh,
  onSelectItem,
}) => {
  return (
    <div
      className="
        w-full
        bg-[#f9f5fd]
        border border-[#e5d9f2]
        rounded-[16px]
        p-4
        shadow-[0_4px_16px_rgba(110,76,165,0.15)]
      "
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">💡</span>
        <span className="text-sm congenial-medium text-[#4c2b87]">{title}</span>
      </div>

      {/* Inspiration items */}
      <div className="flex flex-col gap-2 mb-3">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onSelectItem?.(item)}
            className="
              w-full text-left cursor-pointer
              bg-white color-purple-3
              rounded-[12px]
              px-4 py-2 text-[0.813rem]
              congenial-medium
              border border-[#e5d9f2]
              transition-colors duration-200
            "
          >
            {item}
          </button>
        ))}
      </div>

      <Button
        onClick={onRefresh}
        iconLeft={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
            <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14" />
          </svg>
        }
        className="
          mt-1
          border-[#6c4b97]
          bg-transparent
          text-[#6c4b97]
        "
      >
        Refresh
      </Button>
    </div>
  );
};

export default Inspirations;
