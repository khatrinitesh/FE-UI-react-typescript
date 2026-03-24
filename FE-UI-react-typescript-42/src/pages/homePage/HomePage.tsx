import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import Button from "../../components/UI/button/Button";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="container mx-auto text-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            Welcome to Our App 🚀
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto">
            Build modern UI with React, TypeScript, Tailwind CSS and smooth
            animations using Framer Motion.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              text="Explore Products"
              onClick={() => navigate("/products")}
              icon="➡️"
              iconPosition="right"
            >
              Explore Products{" "}
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {["Fast", "Scalable", "Modern"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-600">
                High-quality UI and smooth performance for better user
                experience.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
