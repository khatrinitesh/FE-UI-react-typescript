import { useRef } from "react";
import { gsap } from "gsap";

interface Props {
  width?: number;
  height?: number;
  children: React.ReactNode;
}

const ThreeDCard = ({ width = 260, height = 340, children }: Props) => {
  const card = useRef<HTMLDivElement>(null);
  const shine = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // Percent positions
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // 3D Tilt
    const tiltX = -(y - 0.5) * 25;
    const tiltY = (x - 0.5) * 25;

    gsap.to(card.current, {
      rotateX: tiltX,
      rotateY: tiltY,
      scale: 1.05,
      duration: 0.4,
      ease: "power3.out",
    });

    // Shine highlight
    gsap.to(shine.current, {
      opacity: 0.4,
      background: `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%, 
          rgba(255,255,255,0.8), 
          transparent 55%
        )
      `,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(card.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(shine.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };
  return (
    <div
      style={{ width, height }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative cursor-pointer perspective-1000"
    >
      <div
        ref={card}
        className="
          h-full w-full rounded-xl bg-white shadow-xl p-4 
          transform-gpu relative overflow-hidden
        "
      >
        {/* Shine overlay */}
        <div
          ref={shine}
          className="
            absolute inset-0 opacity-0 pointer-events-none 
            transition-none
          "
        />

        {children}
      </div>
    </div>
  );
};

export default ThreeDCard;
