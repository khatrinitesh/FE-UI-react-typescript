import { motion, AnimatePresence } from "framer-motion";
import { useExpandableCardStore } from "../../store/useExpandableCardStore";
import { EXPANDABLE_CARDS_DATA } from "../../constants/constants";

const ExpandableCards = () => {
  const { activeCard, setActiveCard } = useExpandableCardStore();
  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 p-6">
      {EXPANDABLE_CARDS_DATA.map((card) => {
        const isOpen = activeCard === card.id;

        return (
          <motion.div
            key={card.id}
            layout
            onClick={() => setActiveCard(isOpen ? null : card.id)}
            className="cursor-pointer bg-zinc-900 text-white rounded-2xl overflow-hidden border border-zinc-800"
          >
            <motion.img
              layout
              src={card.image}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-zinc-400">{card.description}</p>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="pt-3 text-sm text-zinc-300"
                  >
                    {card.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ExpandableCards;
