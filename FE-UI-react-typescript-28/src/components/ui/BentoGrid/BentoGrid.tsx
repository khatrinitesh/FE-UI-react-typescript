import { motion } from "framer-motion";
import { useBentoItems } from "./useBentoItems";
import BentoTile from "./BentoTile";

const BentoGrid = () => {
  const { data, isLoading } = useBentoItems();

  if (isLoading)
    return <p className="text-gray-500 text-center py-6">Loading…</p>;
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {data?.map((item) => (
        <motion.div
          key={item.id}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <BentoTile id={item.id} title={item.title} image={item.image} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BentoGrid;
