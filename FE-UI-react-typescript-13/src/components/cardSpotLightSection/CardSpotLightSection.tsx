import { useRef } from "react";
import type { CardSpotlightProps } from "../../interface";
import {
  SPOTLIGHT_DURATION,
  SPOTLIGHT_EASING,
  SPOTLIGHT_SIZE,
} from "./components/data";
import gsap from "gsap";

const CardSpotLightSection = ({
  title,
  description,
  backgroundColor = "#ffffff",
}: CardSpotlightProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const spotlight = spotlightRef.current;
    if (!card || !spotlight) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(spotlight, {
      x: x - SPOTLIGHT_SIZE / 2,
      y: y - SPOTLIGHT_SIZE / 2,
      duration: SPOTLIGHT_DURATION,
      ease: SPOTLIGHT_EASING,
    });
  };

  const handleMouseLeave = () => {
    if (spotlightRef.current) {
      gsap.to(spotlightRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    }
  };

  const handleMouseEnter = () => {
    if (spotlightRef.current) {
      gsap.to(spotlightRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    }
  };
  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        position: "relative",
        width: "320px",
        height: "200px",
        backgroundColor,
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        cursor: "pointer",
      }}
    >
      <div
        ref={spotlightRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${SPOTLIGHT_SIZE}px`,
          height: `${SPOTLIGHT_SIZE}px`,
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 80%)",
          opacity: 0,
        }}
      />
      <h3 style={{ marginBottom: "12px" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "#333" }}>{description}</p>
    </div>
  );
};

export default CardSpotLightSection;
