import type { ReactNode } from "react";

export interface ButtonGroupItem {
  label: string;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
}

interface ButtonGroupProps {
  items: ButtonGroupItem[];
  activeValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const ButtonGroup = ({ items, activeValue, onChange, className = "" }: ButtonGroupProps) => {
  return (
    <div className={["button-group", "inline-flex items-center overflow-hidden rounded-lg border border-gray-300 bg-white", className].filter(Boolean).join(" ")}>
      {items.map((item, index) => {
        const isActive = activeValue === item.value;

        return (
          <button key={item.value} type="button" disabled={item.disabled} onClick={() => onChange?.(item.value)} className={["button-group__button", "inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors duration-200 focus:z-10 focus:outline-none", index > 0 && "border-l border-gray-300", isActive ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-100", item.disabled && "cursor-not-allowed opacity-50 hover:bg-white"].filter(Boolean).join(" ")}>
            {item.icon}
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;