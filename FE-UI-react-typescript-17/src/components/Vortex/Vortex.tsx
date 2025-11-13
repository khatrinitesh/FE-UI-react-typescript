import { useVortexStore } from "../../store/vortexStore";
import { VORTEX_CONSTANTS } from "./vortexConstants";
import "./style.css";

const Vortex = () => {
  const { active, reverse, toggleActive, toggleDirection } = useVortexStore();
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        Vortex Effect 🌪️
      </h2>

      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        {VORTEX_CONSTANTS.map(({ id, color, size, speed }) => (
          <div
            key={id}
            className="absolute rounded-full border-4"
            style={{
              borderColor: color,
              width: `${size}px`,
              height: `${size}px`,
              animation: active
                ? `${
                    reverse ? "spinReverse" : "spin"
                  } ${speed}s linear infinite`
                : "none",
            }}
          ></div>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={toggleActive}
          className={`px-5 py-2 rounded-md font-semibold text-white transition ${
            active
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {active ? "Stop" : "Start"} Vortex
        </button>

        <button
          onClick={toggleDirection}
          className="px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
        >
          Reverse
        </button>
      </div>
    </section>
  );
};

export default Vortex;
