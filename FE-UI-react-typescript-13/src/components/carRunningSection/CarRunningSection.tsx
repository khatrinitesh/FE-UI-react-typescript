import { useEffect, useRef } from "react";
import type { CarProps } from "../../interface";
import { ANIMATION_DURATION, CAR_WIDTH } from "./components/data";
import gsap from "gsap";

const CarRunningSection = ({
  color = "red",
  speed = ANIMATION_DURATION,
}: CarProps) => {
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carRef.current) {
      gsap.fromTo(
        carRef.current,
        { x: -CAR_WIDTH },
        {
          x: window.innerWidth,
          duration: speed,
          ease: "power1.inOut",
          repeat: -1,
        }
      );
    }
  }, [speed]);

  return (
    <div style={{ position: "relative", height: "100px", overflow: "hidden" }}>
      <div
        ref={carRef}
        style={{
          width: `${CAR_WIDTH}px`,
          height: "50px",
          backgroundColor: color,
          borderRadius: "10px",
          position: "absolute",
          top: "25px",
        }}
      >
        🚗
      </div>
    </div>
  );
};

export default CarRunningSection;
