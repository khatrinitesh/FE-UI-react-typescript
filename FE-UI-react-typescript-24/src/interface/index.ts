export interface TabItem {
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}
export interface CardItem {
  title: string;
  image: string;
  description: string;
}
export type AlertType = "success" | "error" | "warning" | "info";

export interface AnimatedButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export interface AnimatedSearchProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  width?: number; // expanded width
}

export interface AnimatedArrowProps {
  direction?: "left" | "right" | "up" | "down";
  size?: number;
  color?: string;
  loop?: boolean; // Arrow float animation
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode; // custom SVG
}
