import type {motion, HTMLMotionProps } from "framer-motion";

export interface FieldInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export interface FieldTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}
export interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}
export interface NavItem {
  label: string;
  path: string;
}
