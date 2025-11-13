import { useEffect, useRef } from "react";
import { useCircleMenuStore } from "../../store/useCircleMenuStore/useCircleMenuStore";
import { animateMenuItems } from "../../utils/animations";
import { CIRCLE_MENU_ITEMS } from "./components/data";

const CircleMenuMobileSection = () => {
  const isOpen = useCircleMenuStore((s) => s.isOpen);
  const menuRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (menuRefs.current) {
      animateMenuItems(menuRefs.current as HTMLElement[], isOpen);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu Items */}
      <div className="relative">
        {CIRCLE_MENU_ITEMS.map((item, index) => (
          <button
            key={item.id}
            ref={(el) => (menuRefs.current[index] = el)}
            onClick={item.action}
            className="absolute w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-xl opacity-0 pointer-events-auto"
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* FAB Button */}
      <div className="mt-4">
        <MobileMenu />
      </div>
    </div>
  );
};

export default CircleMenuMobileSection;

const MobileMenu = () => {
  const toggleMenu = useCircleMenuStore((s) => s.toggleMenu);
  return (
    <button
      onClick={toggleMenu}
      className="w-14 h-14 rounded-full bg-blue-600 text-white text-2xl flex items-center justify-center shadow-lg"
    >
      +
    </button>
  );
};
