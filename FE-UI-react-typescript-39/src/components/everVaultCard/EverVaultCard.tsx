import { CARD_DATA2 } from "../../constants/constants";
import { useARCardStore } from "../../store/useARCardStore";
import { motion } from "framer-motion";

const EverVaultCard = () => {
  const { activeCard, setActiveCard } = useARCardStore();
  return (
    <div className="grid md:grid-cols-3 gap-6 p-10">
      {CARD_DATA2.map((card) => (
        <motion.div
          key={card.id}
          onMouseEnter={() => setActiveCard(card.id)}
          onMouseLeave={() => setActiveCard(null)}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative group"
        >
          {/* Glow Layer */}
          <div
            className={`absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-lg
            ${
              activeCard === card.id
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                : ""
            }`}
          />

          {/* Card */}
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-44 flex flex-col justify-center text-white backdrop-blur-lg">
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>

            <p className="text-sm text-zinc-400">{card.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EverVaultCard;
