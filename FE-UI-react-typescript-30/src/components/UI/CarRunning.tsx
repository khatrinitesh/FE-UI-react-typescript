import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

interface Car {
  color: string;
  width: string;
  height: string;
}

interface CarRunningProps {
  car: Car;
  duration?: number;
}

const CarRunning = ({ car, duration = 5 }: CarRunningProps) => {
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carRef.current) {
      gsap.fromTo(
        carRef.current,
        { x: "-100%" },
        { x: "100%", duration, repeat: -1, ease: "linear" }
      );
    }
  }, [duration]);
  return (
    <motion.div
      ref={carRef}
      className={`absolute bottom-10 ${car.color}`}
      style={{ width: car.width, height: car.height, borderRadius: "4px" }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  );
};

export default CarRunning;
