import type { CSSProperties, ReactNode } from "react";

export interface CheckBoxProps {
  id?: string;
  name?: string;
  label?: string;
  checked: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  onChange?: (checked: boolean) => void;
}