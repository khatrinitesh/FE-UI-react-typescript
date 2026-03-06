import { BORDER_TRANSITION, NAV_LINKS } from "../../constants/constants";
import { useNavStore } from "../../store/useNavStore";
import { motion } from "framer-motion";

const BorderBottomNavLinks = () => {
  const { activeIndex, setActive } = useNavStore();

  return (
    <nav className="flex justify-center bg-white shadow-md">
      <ul className="flex gap-8 relative">
        {NAV_LINKS.map((item, index) => (
          <li
            key={item.id}
            className="relative cursor-pointer py-4"
            onClick={() => setActive(index)}
          >
            <span className="text-gray-700 font-medium">{item.label}</span>

            {activeIndex === index && (
              <motion.div
                layoutId="navUnderline"
                transition={BORDER_TRANSITION}
                className="absolute left-0 right-0 -bottom-1 h-[3px] bg-blue-500 rounded"
              />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BorderBottomNavLinks;
