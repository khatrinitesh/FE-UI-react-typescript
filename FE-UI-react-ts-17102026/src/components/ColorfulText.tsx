import type { ReactNode } from "react";

interface ColorfulTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animated?: boolean;
}

const ColorfulText = ({
  children,
  className = "",
  colors = ["#F43F5E", "#8B5CF6", "#06B6D4"],
  animated = false,
}: ColorfulTextProps) => {
  return (
    <span
      className={`colorful-text inline-block bg-clip-text font-bold text-transparent ${animated ? "animate-pulse" : ""} ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
      }}
    >
      {children}
    </span>
  );
};

export default ColorfulText;
