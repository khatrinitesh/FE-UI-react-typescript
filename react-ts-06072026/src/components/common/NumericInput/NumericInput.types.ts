import type{ CSSProperties } from "react";

export interface NumericInputProps {
  value: string;
  label?: string;
  placeholder?: string;
  maxLength?: number;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  onChange?: (value: string, isNumeric: boolean) => void;
}