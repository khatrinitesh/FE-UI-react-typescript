import type { LucideIcon } from "lucide-react";

type AnimatedIconProps = {
  icon: LucideIcon;
  animation?: "scale" | "rotate" | "bounce";
  className?: string;
};

export function AnimatedIcon({ icon: Icon, animation = "scale", className = "" }: AnimatedIconProps) {
  const animationClasses = {
    scale: "hover:scale-125",
    rotate: "hover:rotate-12",
    bounce: "hover:-translate-y-1",
  };

  return (
    <span
      className={`
        animated-icon
        ${animationClasses[animation]}
        ${className}
      `}
    >
      <Icon className="size-5" />
    </span>
  );
}
