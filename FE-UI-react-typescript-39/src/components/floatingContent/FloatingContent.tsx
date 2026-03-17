import { motion } from "framer-motion";
import { CONTENT_BLOCK } from "../../constants/constants";
import { useFloatStore } from "../../store/useFloatStore";

const FloatingContent = () => {
  const { activeId, setActive } = useFloatStore();
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-10">
      {CONTENT_BLOCK.map((block) => (
        <div key={block.id} className="text-gray-700 leading-relaxed">
          {/* Floating Image */}
          <motion.img
            src={block.image}
            alt=""
            onMouseEnter={() => setActive(block.id)}
            onMouseLeave={() => setActive(null)}
            className={`w-40 h-40 object-cover rounded-xl shadow-md
              ${block.align === "left" ? "float-left mr-4 mb-2" : "float-right ml-4 mb-2"}
            `}
            animate={{
              scale: activeId === block.id ? 1.1 : 1,
              rotate: activeId === block.id ? 2 : 0,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />

          {/* Text */}
          <p>{block.text.repeat(5)}</p>

          {/* Clear float */}
          <div className="clear-both" />
        </div>
      ))}
    </div>
  );
};

export default FloatingContent;
