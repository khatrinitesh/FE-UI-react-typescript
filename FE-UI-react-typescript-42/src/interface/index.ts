import type { ChangeEvent } from "react";

export interface InputFieldProps {
  name: string;
  label?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
export interface FieldTextAreaProps {
  name: string;
  label?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}
export interface ButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger" | "outline";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}
export interface NavItem {
  name: string;
  path: string;
}

export interface Product {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface FormState {
  name: string;
  email: string;
  message: string;
}
export interface LoginForm {
  email: string;
  password: string;
}
