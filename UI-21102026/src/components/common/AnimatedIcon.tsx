
import type { ReactNode } from "react";

type AnimatedIconProps = {
  icon: ReactNode;
  label?: string;
  className?: string;
};

export const AnimatedIcon = ({
  icon,
  label,
  className = "",
}: AnimatedIconProps) => {
  return (
    <span
      aria-label={label}
      className={`group inline-flex cursor-pointer items-center justify-center ${className}`}
    >
      <span className="inline-flex transition-transform duration-300 ease-out group-hover:scale-125 group-hover:-rotate-12">
        {icon}
      </span>
    </span>
  );
};
