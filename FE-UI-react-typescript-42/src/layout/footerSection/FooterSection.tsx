import { motion } from "framer-motion";
const FooterSection = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-black  p-5 mt-auto"
    >
      <p className="txtCopyright text-white text-center">
        © {currentFullYear} Your Company. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default FooterSection;
