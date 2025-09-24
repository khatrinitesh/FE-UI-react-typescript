import { useRef } from "react";
import type { CardProps } from "../../interface";
import {
  CARD_HOVER_DURATION,
  CARD_HOVER_EASE,
  CARD_HOVER_SCALE,
} from "./components/data";
import gsap from "gsap";

const CardHoverEffectSection = ({
  title,
  description,
  imageUrl,
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: CARD_HOVER_SCALE,
        duration: CARD_HOVER_DURATION,
        ease: CARD_HOVER_EASE,
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        duration: CARD_HOVER_DURATION,
        ease: CARD_HOVER_EASE,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "300px",
        height: "200px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        padding: "16px",
        cursor: "pointer",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: "100%",
            height: "100px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      )}
      <h3 style={{ margin: "12px 0 8px" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "#555" }}>{description}</p>
    </div>
  );
};

export default CardHoverEffectSection;
