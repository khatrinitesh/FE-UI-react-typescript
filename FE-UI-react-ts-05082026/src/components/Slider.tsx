import { useState } from "react";

type SliderProps = {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  description?: string;
};

export function Slider({
  initialValue = 50,
  min = 0,
  max = 100,
  step = 1,
  label = "Slider value",
  description = "Drag the handle to update the value in real time.",
}: SliderProps) {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-950/90 p-6 shadow-lg shadow-black/10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            {label}
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
        </div>
        <div className="rounded-3xl bg-white/5 px-4 py-3 text-right text-3xl font-black text-white shadow-inner shadow-black/10 sm:px-6">
          {value}
        </div>
      </div>

      <div className="mt-8">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="w-full cursor-pointer"
          aria-label={label}
        />
        <div className="mt-3 flex items-center justify-between text-sm text-zinc-400">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </div>
    </div>
  );
}
