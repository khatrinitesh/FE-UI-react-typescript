import type { LoadingDotsProps, LoadingDotsSize } from "../../../interface";

const sizeMap: Record<LoadingDotsSize, { dot: string; padding: string }> = {
  sm: { dot: "h-1.5 w-1.5", padding: "px-3 py-1.5" },
  md: { dot: "h-2 w-2", padding: "px-3.5 py-2" },
  lg: { dot: "h-2.5 w-2.5", padding: "px-4 py-2.5" },
};

const DOT_COLORS = ["#704da0", "#9a80bd", "#b9a7d3"] as const;

const LoadingDots = ({ size = "md", className = "" }: LoadingDotsProps) => {
  const s = sizeMap[size];
  return (
    <div
      className={`
        inline-flex items-center justify-center
        my-[10px]
        rounded-[24px] rounded-tl-[4px]
        bg-[#eee4ff]
        shadow-[0_10px_30px_rgba(150,120,220,0.4)]
        ${s.padding}
        ${className}
      `}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`
            mx-0.5 rounded-full
            ${s.dot}
            animate-dot-bounce
          `}
          style={{
            backgroundColor: DOT_COLORS[i],
            animationDelay: `${i * 0.18}s`,
          }}
        />
      ))}
    </div>
  );
};

export default LoadingDots;
