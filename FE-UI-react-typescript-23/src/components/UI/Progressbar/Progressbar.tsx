import { useEffect, useState } from "react";
import type { MusicProgressBarProps } from "../../../interface";

const Progressbar = ({
  value,
  duration = 800,
  className = "",
  height = 10,
  trackColor = "#cbb8e3", // same purple as your UI
  fromColor = "#4fd4ff", // left cyan
  toColor = "#3a9fff", // right blue
  showLabel = true,
}: MusicProgressBarProps) => {
  const [animatedValue, setAnimatedValue] = useState(0);
  useEffect(() => {
    // clamp 0–100
    const target = Math.max(0, Math.min(100, value));
    setAnimatedValue(target);
  }, [value]);

  return (
    <div
      className={`w-full ${className} flex gap-3 items-center justify-center`}
    >
      {/* track */}
      <div
        className="w-full overflow-hidden rounded-full"
        style={{
          backgroundColor: trackColor,
          height,
        }}
      >
        {/* animated bar */}
        <div
          className="h-full rounded-full transition-[width] ease-out"
          style={{
            width: `${animatedValue}%`,
            transitionDuration: `${duration}ms`,
            backgroundImage: `linear-gradient(90deg, ${fromColor}, ${toColor})`,
          }}
        />
      </div>
      {showLabel && (
        <div className="flex justify-end text-sm congenial-medium text-white/80">
          {Math.round(animatedValue)}%
        </div>
      )}
    </div>
  );
};

export default Progressbar;
