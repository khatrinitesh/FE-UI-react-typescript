import { fadeUp } from "../constants/constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 scroll-smooth">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-blue-600"
        >
          About Our Company
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 max-w-2xl text-lg text-gray-600"
        >
          We build modern web applications with scalable architecture, beautiful
          design, and smooth user experience.
        </motion.p>

        <motion.a
          href="#story"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg cursor-pointer"
        >
          Discover More
        </motion.a>
      </section>

      {/* Story Section */}
      <section
        id="story"
        className="min-h-screen flex items-center px-6 md:px-20 py-20"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vel hendrerit libero. Praesent pulvinar tincidunt elit, sit amet
              feugiat felis volutpat non.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla
              dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-blue-600 rounded-3xl h-80 shadow-2xl"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="min-h-screen bg-white flex flex-col justify-center px-6 md:px-20 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Values
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {["Innovation", "Quality", "Integrity"].map((item, index) => (
            <motion.div
              key={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 1}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl shadow-lg bg-gray-50 text-center"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                {item}
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Floating CTA Section */}
      <section className="min-h-screen flex items-center justify-center bg-blue-600 text-white px-6">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="max-w-xl mx-auto mb-8">
            Let’s create something amazing together. We focus on performance,
            scalability, and user experience.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-xl"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
