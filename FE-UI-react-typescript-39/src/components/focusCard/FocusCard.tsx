import { motion } from "framer-motion";
import { FOCUS_CARDS } from "../../constants/constants";
import { useFocusStore } from "../../store/useFocusStore";

const FocusCard = () => {
  const { activeId, setActive } = useFocusStore();

  return (
    <div className="flex flex-wrap justify-center gap-6 p-10">
      {FOCUS_CARDS.map((card) => {
        const isActive = activeId === card.id;
        const isDimmed = activeId !== null && !isActive;

        return (
          <motion.div
            key={card.id}
            onMouseEnter={() => setActive(card.id)}
            onMouseLeave={() => setActive(null)}
            className="relative w-72 h-96 rounded-2xl overflow-hidden cursor-pointer"
            animate={{
              scale: isActive ? 1.08 : 1,
              filter: isDimmed
                ? "blur(2px) brightness(0.7)"
                : "blur(0px) brightness(1)",
              opacity: isDimmed ? 0.6 : 1,
              y: isActive ? -10 : 0,
            }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 p-4 flex flex-col justify-end h-full text-white">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm opacity-80">{card.description}</p>
            </div>

            {/* Glow Effect */}
            {isActive && (
              <motion.div
                className="absolute inset-0 border-2 border-white/50 rounded-2xl"
                layoutId="focus-ring"
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FocusCard;
