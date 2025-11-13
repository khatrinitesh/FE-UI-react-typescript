import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { finishLineX, initialRacers } from "./data";
import Bike from "./Bike";

const BikeComponent = () => {
  const [winner, setWinner] = useState<string | null>(null);
  const bikeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const runRace = () => {
    setWinner(null);
    bikeRefs.current.forEach((bike, i) => {
      if (bike) {
        const duration = Math.random() * 3 + 2; // 2-5 seconds
        gsap.to(bike, {
          x: finishLineX,
          duration,
          ease: "power1.out",
          onComplete: () => {
            setWinner((prev) => (prev === null ? initialRacers[i].name : prev));
          },
        });
      }
    });
  };

  const resetRace = () => {
    setWinner(null);
    bikeRefs.current.forEach((bike) => {
      if (bike) {
        gsap.set(bike, { x: 0 });
      }
    });
  };

  useEffect(() => {
    resetRace();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Bike Race — Friends Edition
      </h1>

      <div className="relative w-[900px] h-[220px] border border-gray-400 rounded-md mx-auto bg-gray-100 overflow-hidden">
        {/* Finish line */}
        <div
          className="absolute top-0 bottom-0 w-2 bg-black"
          style={{ left: finishLineX + 80 }}
        ></div>

        {/* Bikes stacked vertically */}
        <div className="flex flex-col justify-between h-full p-6">
          {initialRacers.map((racer, i) => (
            <div key={racer.id} className="relative h-12">
              <Bike
                ref={(el) => (bikeRefs.current[i] = el)}
                color={racer.color}
                name={racer.name}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center space-x-4">
        <button
          onClick={runRace}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Start Race
        </button>
        <button
          onClick={resetRace}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Reset Race
        </button>
      </div>

      {winner && (
        <div className="mt-8 text-center text-2xl font-bold text-indigo-700">
          Winner: {winner} 🏆
        </div>
      )}
    </div>
  );
};

export default BikeComponent;
