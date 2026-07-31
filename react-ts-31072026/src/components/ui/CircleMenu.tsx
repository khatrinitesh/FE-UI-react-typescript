import {
  Home,
  Menu,
  MessageCircle,
  Search,
  ShoppingBag,
  User,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

type CircleMenuItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  onClick: () => void;
};

const menuItems: CircleMenuItem[] = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    onClick: () => console.log("Home clicked"),
  },
  {
    id: "search",
    label: "Search",
    icon: Search,
    onClick: () => console.log("Search clicked"),
  },
  {
    id: "cart",
    label: "Cart",
    icon: ShoppingBag,
    onClick: () => console.log("Cart clicked"),
  },
  {
    id: "chat",
    label: "Chat",
    icon: MessageCircle,
    onClick: () => console.log("Chat clicked"),
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
    onClick: () => console.log("Profile clicked"),
  },
];

export default function CircleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const radius = 126;
  const startAngle = 180;
  const endAngle = 270;

  const getPosition = (index: number) => {
    const step =
      menuItems.length > 1
        ? (endAngle - startAngle) / (menuItems.length - 1)
        : 0;

    const angle = startAngle + index * step;
    const angleInRadians = (angle * Math.PI) / 180;

    return {
      x: Math.cos(angleInRadians) * radius,
      y: Math.sin(angleInRadians) * radius,
    };
  };

  const handleMenuItemClick = (item: CircleMenuItem) => {
    item.onClick();
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close circle menu"
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-[2px]
          transition-all duration-300 desktop-sm:hidden
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Circle menu */}
      <nav
        aria-label="Mobile quick navigation"
        className="fixed bottom-6 right-5 z-50 desktop-sm:hidden"
      >
        <div className="relative h-16 w-16">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const position = getPosition(index);

            return (
              <button
                key={item.id}
                type="button"
                aria-label={item.label}
                onClick={() => handleMenuItemClick(item)}
                style={{
                  transform: isOpen
                    ? `translate(${position.x}px, ${position.y}px) scale(1)`
                    : "translate(0, 0) scale(0.4)",
                  transitionDelay: isOpen
                    ? `${index * 45}ms`
                    : `${(menuItems.length - index - 1) * 25}ms`,
                }}
                className={`
                  absolute left-1/2 top-1/2 flex h-[60px] w-[60px]
                  -translate-x-1/2 -translate-y-1/2 flex-col
                  items-center justify-center gap-1 rounded-full
                  border border-white/70 bg-white text-secondary
                  shadow-[0_10px_35px_rgba(15,23,42,0.18)]
                  transition-all duration-300 ease-out
                  focus:outline-none focus:ring-4 focus:ring-primary/20
                  ${
                    isOpen
                      ? "pointer-events-auto opacity-100"
                      : "pointer-events-none opacity-0"
                  }
                `}
              >
                <Icon
                  size={19}
                  strokeWidth={2.2}
                  className="text-primary"
                  aria-hidden="true"
                />

                <span className="font-montserrat text-[10px] font-semibold leading-none">
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* Main menu button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className={`
              relative z-10 flex h-16 w-16 items-center justify-center
              rounded-full bg-primary text-white
              shadow-[0_12px_35px_rgba(0,158,255,0.4)]
              transition-all duration-300
              focus:outline-none focus:ring-4 focus:ring-primary/25
              active:scale-95
              ${isOpen ? "rotate-90" : "rotate-0"}
            `}
          >
            {isOpen ? (
              <X size={28} strokeWidth={2.4} aria-hidden="true" />
            ) : (
              <Menu size={28} strokeWidth={2.4} aria-hidden="true" />
            )}
          </button>

          {/* Pulse effect */}
          {!isOpen && (
            <span className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full bg-primary/30" />
          )}
        </div>
      </nav>
    </>
  );
}
