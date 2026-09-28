import { MoreVertical } from "lucide-react";

interface CircleDotsProps {
  onClick?: () => void;
  className?: string;
}

const CircleDots = ({ onClick, className = "" }: CircleDotsProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open menu"
      className={`circle-dots flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100 ${className}`}
    >
      <MoreVertical size={20} />
    </button>
  );
};

export default CircleDots;
