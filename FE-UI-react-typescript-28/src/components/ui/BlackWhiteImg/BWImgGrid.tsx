// BWImageGrid.tsx
import { motion } from "framer-motion";
import { useBWImages } from "./useBWImages";
import BWImage from "./BWImage";

export function BWImageGrid() {
  const { data, isLoading } = useBWImages();

  if (isLoading)
    return <p className="text-gray-500 text-center py-6">Loading…</p>;

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {data?.map((img) => (
        <motion.div
          key={img.id}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <BWImage id={img.id} url={img.url} author={img.author} />
        </motion.div>
      ))}
    </motion.div>
  );
}
