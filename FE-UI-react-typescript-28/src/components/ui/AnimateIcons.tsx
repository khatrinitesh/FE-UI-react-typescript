import { ICON_CONFIG } from "../../constants/constants";
import type { AnimatedIconProps } from "../../interface";
import { animateIconStore } from "../../store/animateIconStore";
import { motion } from "framer-motion";

const iconMap = {
  heart: "❤️",
  star: "⭐",
  check: "✔️",
  alert: "⚠️",
};

export const DemoIcons = () => {
  const { speed, setSpeed } = animateIconStore();

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-2xl font-bold">Animated Icons</h1>

      <div className="flex gap-6 text-4xl">
        <AnimateIcons type="heart" color="red" />
        <AnimateIcons type="star" color="gold" />
        <AnimateIcons type="check" color="green" />
        <AnimateIcons type="alert" color="orange" />
      </div>

      <div className="mt-6">
        <label className="font-medium">Animation Speed: {speed}x</label>
        <input
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
};

const AnimateIcons = ({
  type,
  size = ICON_CONFIG.defaultSize,
  color = ICON_CONFIG.defaultColor,
}: AnimatedIconProps) => {
  const speed = animateIconStore((state) => state.speed);
  return (
    <motion.span
      style={{ fontSize: size, color }}
      animate={ICON_CONFIG.animations[type]}
      transition={{
        ...ICON_CONFIG.animations[type].transition,
        duration: ICON_CONFIG.animations[type].transition.duration / speed,
      }}
      className="inline-block"
    >
      {iconMap[type]}
    </motion.span>
  );
};
