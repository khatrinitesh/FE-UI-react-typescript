import { motion } from "framer-motion";
import { FOLD_CARDS } from "../../constants/constants";
import { useFoldStore } from "../../store/useFoldStore";

const FoldedCard = () => {
  const { activeId, setActive } = useFoldStore();

  return (
    <div className="flex gap-6 p-10">
      {FOLD_CARDS.map((card) => {
        const isActive = activeId === card.id;

        return (
          <motion.div
            key={card.id}
            onMouseEnter={() => setActive(card.id)}
            onMouseLeave={() => setActive(null)}
            className="relative w-72 h-44 bg-white rounded-xl shadow-lg p-5 overflow-hidden cursor-pointer"
            animate={{
              scale: isActive ? 1.05 : 1,
              y: isActive ? -6 : 0,
            }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
          >
            {/* 📄 Folded Corner */}
            <motion.div
              className="absolute top-0 right-0 w-16 h-16 bg-gray-200 origin-top-right"
              style={{
                clipPath: "polygon(100% 0, 0 0, 100% 100%)",
              }}
              animate={{
                rotate: isActive ? -15 : 0,
                scale: isActive ? 1.2 : 1,
              }}
              transition={{ type: "spring", stiffness: 200 }}
            />

            {/* ✨ Shadow under fold */}
            <motion.div
              className="absolute top-0 right-0 w-16 h-16 bg-black/10"
              style={{
                clipPath: "polygon(100% 0, 0 0, 100% 100%)",
              }}
              animate={{
                opacity: isActive ? 0.3 : 0.1,
              }}
            />

            {/* 📝 Content */}
            <h3 className="text-lg font-semibold text-gray-800">
              {card.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">{card.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FoldedCard;
