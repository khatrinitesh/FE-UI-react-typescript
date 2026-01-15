import { motion, useMotionValue, useTransform } from "framer-motion";

const Card3D = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  return (
    <motion.div
      className="w-64 h-40 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl shadow-2xl flex items-center justify-center text-white font-bold text-lg cursor-pointer"
      style={{ rotateX, rotateY }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      3D Card
    </motion.div>
  );
};

export default Card3D;
