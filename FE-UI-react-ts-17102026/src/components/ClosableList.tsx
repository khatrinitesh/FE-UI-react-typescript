import { X } from "lucide-react";
import { useState } from "react";

interface ClosableListItem {
  id: string;
  label: string;
}

interface ClosableListProps {
  items: ClosableListItem[];
  onRemove?: (id: string) => void;
  className?: string;
}

const ClosableList = ({
  items,
  onRemove,
  className = "",
}: ClosableListProps) => {
  const [list, setList] = useState(items);

  const handleRemove = (id: string) => {
    setList((previous) => previous.filter((item) => item.id !== id));
    onRemove?.(id);
  };

  return (
    <ul className={`closable-list space-y-2 ${className}`}>
      {list.map((item) => (
        <li
          key={item.id}
          className="closable-list__item flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 shadow-sm"
        >
          <span>{item.label}</span>
          <button
            type="button"
            onClick={() => handleRemove(item.id)}
            aria-label={`Remove ${item.label}`}
            className="closable-list__close rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-red-500"
          >
            <X size={16} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ClosableList;
