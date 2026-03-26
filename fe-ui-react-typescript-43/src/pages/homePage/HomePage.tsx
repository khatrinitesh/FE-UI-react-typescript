import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1>Home Page</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
