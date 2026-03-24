import { motion } from "framer-motion";
import Glassmorphism from "../../components/UI/glassmorphism/Glassmorphism";
import { cards } from "../../constants/constants";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {cards.map((card) => (
            <Glassmorphism key={card.id} data={card} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-6"
        >
          <h1 className="text-2xl font-bold">Home Page</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
