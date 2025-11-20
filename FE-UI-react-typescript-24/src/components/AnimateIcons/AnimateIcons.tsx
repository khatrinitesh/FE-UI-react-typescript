import { useRef } from "react";
import gsap from "gsap";

export interface Props {
  children: React.ReactNode; // your icon
  size?: number;
  color?: string;
}

const AnimateIcons = ({ children, size = 26, color = "#111" }: Props) => {
  const iconRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    gsap.to(iconRef.current, {
      scale: 1.25,
      rotate: 5,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(iconRef.current, {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  return (
    <div
      ref={iconRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ fontSize: size, color }}
      className="cursor-pointer inline-flex"
    >
      {children}
    </div>
  );
};

export default AnimateIcons;
