import type {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  style?: CSSProperties;
}