type CircleDotsProps = {
  size?: number;
  dotSize?: number;
  dotCount?: number;
  animated?: boolean;
  className?: string;
};

export default function CircleDots({
  size = 180,
  dotSize = 14,
  dotCount = 12,
  animated = true,
  className = "",
}: CircleDotsProps) {
  const radius = size / 2 - dotSize;

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`relative ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      {Array.from({ length: dotCount }).map((_, index) => {
        const angle = (360 / dotCount) * index;

        return (
          <span
            key={index}
            className={`absolute left-1/2 top-1/2 rounded-full bg-primary ${
              animated ? "animate-circle-dot" : ""
            }`}
            style={{
              width: dotSize,
              height: dotSize,
              marginLeft: -(dotSize / 2),
              marginTop: -(dotSize / 2),
              transform: `rotate(${angle}deg) translateY(-${radius}px)`,
              animationDelay: `${index * 80}ms`,
              opacity: 0.25 + (index / dotCount) * 0.75,
            }}
          />
        );
      })}

      <div className="absolute inset-[22%] flex items-center justify-center rounded-full border border-primary/20 bg-white shadow-lg">
        <span className="font-arialnb text-24 font-bold text-primary">
          {dotCount}
        </span>
      </div>
    </div>
  );
}
