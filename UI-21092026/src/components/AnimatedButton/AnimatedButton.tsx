import type { LucideIcon } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type AnimatedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  animation?: "lift" | "scale" | "slide";
};

export function AnimatedButton({ children, icon: Icon, iconPosition = "right", animation = "lift", className = "", ...props }: AnimatedButtonProps) {
  const animations = {
    lift: "hover:-translate-y-0.5 hover:shadow-md",
    scale: "hover:scale-[1.03]",
    slide: "group",
  };

  return (
    <button
      className={`
        animated-button
        bg-neutral-950
        text-white
        ${animations[animation]}
        ${className}
      `}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon
          className={`
            size-4 transition-transform duration-200
            ${animation === "slide" ? "group-hover:-translate-x-1" : ""}
          `}
        />
      )}

      <span>{children}</span>

      {Icon && iconPosition === "right" && (
        <Icon
          className={`
            size-4 transition-transform duration-200
            ${animation === "slide" ? "group-hover:translate-x-1" : ""}
          `}
        />
      )}
    </button>
  );
}
