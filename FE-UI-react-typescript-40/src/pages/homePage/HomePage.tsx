import { motion } from "framer-motion";
import GetCheckboxValuesusingCheckBoxName from "../../components/UI/getCheckboxValuesusingCheckBoxName/getCheckboxValuesusingCheckBoxName";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="container mx-auto">
        <GetCheckboxValuesusingCheckBoxName />
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
