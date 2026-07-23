import type { HTMLMotionProps } from "framer-motion";
import type {
    CSSProperties,
    InputHTMLAttributes,
    ReactNode,
    TextareaHTMLAttributes
} from "react";

export type ComponentVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "ghost";

export type ComponentSize = "sm" | "md" | "lg";

export interface CommonComponentProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export interface FieldInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClassName?: string;
  inputClassName?: string;
  showCharacterCount?: boolean;
}

export interface FieldTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClassName?: string;
  textareaClassName?: string;
  showCharacterCount?: boolean;
}

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}