import gsap from "gsap";
import { variantStyles } from "../../constants/constants";
import type { AnimatedButtonProps } from "../../interface";
import { useRef } from "react";

const AnimatedButtons = ({
  label,
  onClick,
  variant = "primary",
  className = "",
}: AnimatedButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Small pop animation
    gsap.to(btnRef.current, {
      scale: 1.06,
      y: -2,
      duration: 0.25,
      ease: "power3.out",
    });

    // Glow follow effect
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(glowRef.current, {
      x: x - rect.width / 2,
      y: y - rect.height / 2,
      opacity: 0.6,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(glowRef.current, {
      x: x - rect.width / 2,
      y: y - rect.height / 2,
      duration: 0.2,
    });
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.3,
    });
  };

  const handleClick = () => {
    gsap.fromTo(
      btnRef.current,
      { scale: 1 },
      { scale: 0.95, duration: 0.15, yoyo: true, repeat: 1 }
    );
    onClick?.();
  };

  return (
    <button
      ref={btnRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
      onClick={handleClick}
      className={`
        relative overflow-hidden rounded-lg px-6 py-3 font-semibold 
        transition-all active:scale-95
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {/* Glow element */}
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-lg bg-white opacity-0 blur-xl pointer-events-none"
      />

      {/* Button label */}
      <span className="relative z-10">{label}</span>
    </button>
  );
};

export default AnimatedButtons;
