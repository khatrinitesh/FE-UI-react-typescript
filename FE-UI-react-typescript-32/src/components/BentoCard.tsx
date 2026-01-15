import type { BentoItem } from "../interface";
import { useBentoStore } from "../store/useBentoStore";
import { motion } from "framer-motion";

interface Props {
  item: BentoItem;
}

const BentoGridComp = () => {
  const { items } = useBentoStore();
  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4">
          {items.map((item) => (
            <BentoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BentoGridComp;

const BentoCard = ({ item }: Props) => {
  const { activeId, setActive } = useBentoStore();
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setActive(item.id)}
      onHoverEnd={() => setActive(null)}
      className={`relative rounded-2xl p-6 text-white cursor-pointer bg-gradient-to-br ${item.gradient} ${item.span}`}
    >
      <motion.h3
        className="text-xl font-bold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {item.title}
      </motion.h3>

      <motion.p
        className="text-sm opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {item.description}
      </motion.p>

      {/* Glow effect */}
      {activeId === item.id && (
        <motion.div
          layoutId="glow"
          className="absolute inset-0 rounded-2xl border border-white/30"
        />
      )}
    </motion.div>
  );
};
