import Avatar from "./Avatar";
import { useAvatars } from "./useAvatars";
import { motion } from "framer-motion";

const AvatarGroup = () => {
  const { data, isLoading } = useAvatars();

  if (isLoading) return <p className="text-gray-500">Loading avatars…</p>;

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="flex gap-6 flex-wrap"
      >
        {data?.map((a: any) => (
          <motion.div
            key={a.id}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Avatar id={a.id} src={a.image} name={a.name} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default AvatarGroup;
