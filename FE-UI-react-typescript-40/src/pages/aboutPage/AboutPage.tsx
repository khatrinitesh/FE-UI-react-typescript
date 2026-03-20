import { motion } from "framer-motion";
import { containerVariant, itemVariant } from "../../constants/animationData";
import { aboutData } from "../../constants/constants";

const AboutPage = () => {
  return (
    <div className="aboutPage py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-10"
        >
          About Us
        </motion.h1>

        {/* Content */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-6"
        >
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              className="p-6 border rounded shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
