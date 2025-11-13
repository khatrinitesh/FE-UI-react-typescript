import {
  DEFAULT_ARC_COLOR,
  DEFAULT_TRACK_COLOR,
  sizeMap,
  thicknessMap,
} from "../../../constants/constants";
import type { CircularLoaderProps } from "../../../interface";

const CircularLoader = ({
  size = "md",
  className = "",
  color = DEFAULT_ARC_COLOR,
  trackColor = DEFAULT_TRACK_COLOR,
}: CircularLoaderProps) => {
  const diameter = sizeMap[size];
  const thickness = thicknessMap[size];
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: diameter, height: diameter }}
    >
      {/* base white ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          borderStyle: "solid",
          borderWidth: thickness,
          borderColor: trackColor,
          opacity: 0.95,
        }}
      />

      {/* rotating arc */}
      <div
        className="absolute inset-0 rounded-full animate-spin-smooth"
        style={{
          borderStyle: "solid",
          borderWidth: thickness,
          borderTopColor: "transparent",
          borderRightColor: color,
          borderBottomColor: color,
          borderLeftColor: "transparent",
          opacity: 0.85,
        }}
      />
    </div>
  );
};

export default CircularLoader;
