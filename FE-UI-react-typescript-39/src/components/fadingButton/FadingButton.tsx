import { FADING_BUTTONS } from "../../constants/constants";
import { useFadingButtonsStore } from "../../store/useFadingButtonsStore";
import { motion } from "framer-motion";

const FadingButton = () => {
  const { active, setActive } = useFadingButtonsStore();
  return (
    <div className="flex gap-6 justify-center p-10">
      {FADING_BUTTONS.map((btn) => (
        <motion.button
          key={btn.id}
          onClick={() => setActive(btn.id)}
          initial={{ opacity: 0 }}
          animate={{
            opacity: active === btn.id ? 1 : 0.5,
          }}
          whileHover={{
            opacity: 1,
            scale: 1.05,
          }}
          transition={{ duration: 0.3 }}
          className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-lg"
        >
          {btn.label}
        </motion.button>
      ))}
    </div>
  );
};

export default FadingButton;
