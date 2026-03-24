import { type ReactNode } from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
  variant?: "primary" | "secondary" | "outline" | "danger";
  maxLength?: number;
}

export interface GlobePoint {
  id: number;
  x: number;
  y: number;
  label: string;
}

export interface GlareCardProps {
  title: string;
  description: string;
  image: string;
}

export interface CardData {
  id: number;
  title: string;
  description: string;
}
