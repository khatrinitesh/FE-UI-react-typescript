import { motion } from "framer-motion";
import { BENTO_GRID_ITEMS } from "../../constants/constants";
import { useBentoStore } from "./../../store/useBentoStore";
import type { BentoGridItem } from "../../interface";

const BentoGrid = () => {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 p-6">
        {BENTO_GRID_ITEMS.map((item) => (
          <GridItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default BentoGrid;

type GridItemProps = {
  item: BentoGridItem;
};

const GridItem = ({ item }: GridItemProps) => {
  const { selectedId, select } = useBentoStore();
  const isSelected = selectedId === item.id;

  // grid span classes
  const sizeClasses =
    item.size === "small"
      ? "col-span-1 row-span-1"
      : item.size === "medium"
        ? "col-span-2 row-span-1"
        : "col-span-2 row-span-2";
  return (
    <motion.div
      className={`${item.color} ${sizeClasses} rounded-lg cursor-pointer shadow-lg flex items-center justify-center text-white font-bold text-lg`}
      whileHover={{ scale: 1.05 }}
      onClick={() => select(item.id)}
      animate={{ scale: isSelected ? 1.1 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {item.title}
    </motion.div>
  );
};
