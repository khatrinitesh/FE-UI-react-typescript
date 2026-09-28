import { useState } from "react";
import { Home, Menu, User, Settings, X } from "lucide-react";

interface CircleMenuItem {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

interface CircleMenuProps {
  items?: CircleMenuItem[];
  className?: string;
}

const CircleMenu = ({ items = [], className = "" }: CircleMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`circle-menu fixed bottom-6 right-6 z-50 ${className}`}>
      <div
        className={`circle-menu__items absolute bottom-0 right-0 h-48 w-48 transition-all duration-300 ${isOpen ? "scale-100 opacity-100" : "pointer-events-none scale-0 opacity-0"}`}
      >
        {items.map((item, index) => {
          const angle = -90 + index * (180 / Math.max(items.length - 1, 1));
          const radius = 70;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <button
              key={item.label}
              type="button"
              onClick={item.onClick}
              title={item.label}
              className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg transition-transform hover:scale-110"
            >
              <span
                style={{ transform: `translate(${x}px, ${y}px)` }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white"
              >
                {item.icon}
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="circle-menu__toggle relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-xl transition-transform duration-300 hover:scale-105"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default CircleMenu;
