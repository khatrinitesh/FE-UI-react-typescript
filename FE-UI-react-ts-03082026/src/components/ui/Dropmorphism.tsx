import { Droplets, Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function Dropmorphism() {
  const [glasses, setGlasses] = useState(5);
  const goal = 8;
  const progress = Math.round((glasses / goal) * 100);

  const decreaseWater = () => {
    setGlasses((current) => Math.max(0, current - 1));
  };

  const increaseWater = () => {
    setGlasses((current) => Math.min(goal, current + 1));
  };

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#78aefb] p-6">
      {/* Decorative drops */}
      <div
        aria-hidden="true"
        className="absolute left-[12%] top-[15%] size-28"
        style={{
          borderRadius: "58% 42% 52% 48% / 44% 58% 42% 56%",
          background: "#78aefb",
          boxShadow: `
            12px 16px 25px rgba(37, 91, 181, 0.55),
            inset 8px 8px 14px rgba(255, 255, 255, 0.35),
            inset -8px -8px 14px rgba(34, 102, 211, 0.4)
          `,
        }}
      />

      <div
        aria-hidden="true"
        className="absolute bottom-[12%] right-[14%] size-20"
        style={{
          borderRadius: "45% 55% 38% 62% / 58% 42% 58% 42%",
          background: "#78aefb",
          boxShadow: `
            10px 14px 22px rgba(37, 91, 181, 0.5),
            inset 6px 6px 12px rgba(255, 255, 255, 0.35),
            inset -6px -6px 12px rgba(34, 102, 211, 0.4)
          `,
        }}
      />

      {/* Main droplet */}
      <section
        className="relative flex h-[430px] w-full max-w-[370px] flex-col items-center justify-center px-12 text-center text-white"
        style={{
          borderRadius: "54% 46% 62% 38% / 44% 57% 43% 56%",
          background: "#78aefb",
          boxShadow: `
            25px 35px 45px rgba(31, 84, 175, 0.65),
            -15px -15px 35px rgba(187, 219, 255, 0.6),
            inset 12px 12px 25px rgba(255, 255, 255, 0.35),
            inset -18px -20px 30px rgba(33, 101, 213, 0.45)
          `,
        }}
      >
        {/* Glossy highlights */}
        <span className="absolute left-[25%] top-[14%] h-9 w-9 rounded-full bg-white/70 blur-[1px]" />

        <span className="absolute left-[38%] top-[12%] h-4 w-4 rounded-full bg-white/50" />

        <div className="mb-4 rounded-full bg-white/20 p-4 shadow-inner backdrop-blur">
          <Droplets size={34} />
        </div>

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-100">
          Daily hydration
        </p>

        <h1 className="mt-2 text-5xl font-bold">{progress}%</h1>

        <p className="mt-2 text-blue-100">
          {glasses} of {goal} glasses completed
        </p>

        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-blue-900/20">
          <div
            className="h-full rounded-full bg-white transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-7 flex items-center gap-4">
          <button
            type="button"
            onClick={decreaseWater}
            disabled={glasses === 0}
            aria-label="Remove one glass"
            className="grid size-11 place-items-center rounded-full bg-white/20 shadow-inner transition hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Minus size={20} />
          </button>

          <button
            type="button"
            onClick={increaseWater}
            disabled={glasses === goal}
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-blue-600 shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Plus size={18} />
            Add water
          </button>
        </div>
      </section>
    </main>
  );
}
