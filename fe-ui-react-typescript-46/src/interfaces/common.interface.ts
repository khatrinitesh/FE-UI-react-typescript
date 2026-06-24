import type { ButtonHTMLAttributes, ChangeEvent, ReactNode } from "react";

export interface NavItem {
  label: string;
  path: string;
}

export interface PageInfo {
  title: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export type InputVariant = "color1" | "color2";
export type IconPosition = "left" | "right";
export type TextAlign = "left" | "center" | "right";

export interface AppInputProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  type?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;

  variant?: InputVariant;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  align?: TextAlign;

  textarea?: boolean;
  rows?: number;
}

export type ButtonVariant = "color1" | "color2";
export type ButtonAlign = "left" | "center" | "right";

export interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  align?: ButtonAlign;
  fullWidth?: boolean;
}
