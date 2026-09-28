import { useEffect, useState } from "react";

interface CarRunningProps {
  duration?: number;
  className?: string;
}

const CarRunning = ({ duration = 3000, className = "" }: CarRunningProps) => {
  const [running, setRunning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setRunning((value) => !value), duration);
    return () => clearInterval(timer);
  }, [duration]);

  return (
    <div className={`car-running relative h-24 w-full overflow-hidden rounded-xl bg-sky-100 ${className}`}>
      <div className="car-running__road absolute bottom-0 left-0 h-8 w-full bg-gray-800" />
      <div className="car-running__car absolute bottom-5 left-0 text-4xl transition-transform duration-[3000ms] ease-linear" style={{ transform: running ? "translateX(calc(100vw - 100px))" : "translateX(0)" }}>
        🚗
      </div>
    </div>
  );
};

export default CarRunning;