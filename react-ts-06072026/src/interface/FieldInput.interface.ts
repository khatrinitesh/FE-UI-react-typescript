import type {
  CSSProperties,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface FieldInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  style?: CSSProperties;
}