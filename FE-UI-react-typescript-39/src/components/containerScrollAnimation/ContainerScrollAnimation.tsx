import { SCROLL_ITEMS } from "../../constants/constants";
import { useScrollStore } from "../../store/useScrollStore";
import { motion } from "framer-motion";

const ContainerScrollAnimation = () => {
  const { setActive } = useScrollStore();
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto space-y-10 px-6">
        {SCROLL_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            onViewportEnter={() => setActive(item.id)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>

            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContainerScrollAnimation;
