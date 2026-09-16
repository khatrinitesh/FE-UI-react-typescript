import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import "./ThreeDCard.css";

interface ThreeDCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

const ThreeDCard = ({
  title,
  description,
  image,
  category,
}: ThreeDCardProps) => {
  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / rect.height) * -20;
    const rotateY = ((x - rect.width / 2) / rect.width) * 20;

    setRotate({
      x: rotateX,
      y: rotateY,
    });
  };

  const handleMouseLeave = () => {
    setRotate({
      x: 0,
      y: 0,
    });
  };

  return (
    <motion.div
      className="three-d-card-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        className="three-d-card"
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
      >
        {/* Image */}
        <div className="card-image-wrapper">
          <img src={image} alt={title} className="card-image" />

          <div className="card-image-overlay" />

          <span className="card-category">
            <Sparkles size={14} />
            {category}
          </span>
        </div>

        {/* Content */}
        <div className="card-content">
          <h2 className="card-title">{title}</h2>

          <p className="card-description">{description}</p>

          <button className="card-button">
            Explore More
            <ArrowUpRight size={18} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ThreeDCard;
