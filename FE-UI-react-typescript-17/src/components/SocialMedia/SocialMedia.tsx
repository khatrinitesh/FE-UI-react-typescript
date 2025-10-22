import { motion } from "framer-motion";
import { socialMediaData } from "./socialMediaData";
import "./style.css";

const SocialMedia = () => {
  return (
    <div className="social-icons">
      {socialMediaData.map(({ icon: Icon, url, name }, index) => (
        <motion.a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          whileHover={{
            scale: 1.2,
            rotate: 5,
            boxShadow: "0 8px 30px rgba(255,255,255,0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          aria-label={name}
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMedia;
