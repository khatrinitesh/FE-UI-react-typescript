import { FOOTER_LINKS } from "../../constants/constants";
import { motion } from "framer-motion";

const FooterLink = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full pb-14 bg-white border-t border-gray-200 pt-6 px-6 flex justify-center"
    >
      <ul className="flex flex-wrap justify-center gap-3 text-1xl font-medium text-[#3a2b70]">
        {FOOTER_LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className="hover:underline text-base congenial-regular transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.footer>
  );
};

export default FooterLink;
