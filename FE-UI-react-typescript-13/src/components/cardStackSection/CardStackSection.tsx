import gsap from "gsap";
import type { CardStackProps } from "../../interface";
import {
  CARD_ANIMATION_DURATION,
  CARD_EASING,
  CARD_FAN_ROTATION,
  CARD_STACK_OFFSET,
} from "./components/data";
import { useRef } from "react";

const CardStackSection = ({ cards }: CardStackProps) => {
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const handleMouseEnter = () => {
    cardRefs.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: index * (CARD_STACK_OFFSET + 10),
          rotation: (index - cards.length / 2) * CARD_FAN_ROTATION,
          duration: CARD_ANIMATION_DURATION,
          ease: CARD_EASING,
        });
      }
    });
  };

  const handleMouseLeave = () => {
    cardRefs.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: index * CARD_STACK_OFFSET,
          rotation: 0,
          duration: CARD_ANIMATION_DURATION,
          ease: CARD_EASING,
        });
      }
    });
  };
  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        height: "200px",
        margin: "50px auto",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cards.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => (cardRefs.current[index] = el!)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            transform: `translateY(${index * CARD_STACK_OFFSET}px)`,
            zIndex: cards.length - index,
            padding: "20px",
            transition: "box-shadow 0.3s ease",
          }}
        >
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardStackSection;
