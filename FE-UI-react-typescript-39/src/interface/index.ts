import type { ReactNode } from "react";
import type { ALERT_VARIANTS } from "../constants/constants";

export interface Product {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

export interface FieldInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

export interface NavItem {
  name: string;
  path: string;
}

export interface LogoProps {
  variant?: "home" | "default";
}

export interface CardItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export type AlertVariant = keyof typeof ALERT_VARIANTS;

export interface AlertAction {
  label: string;
  onClick: () => void;
}
export interface AlertProps {
  isOpen: boolean;
  variant?: AlertVariant;
  title: string;
  description?: string;
  primaryAction?: AlertAction;
  secondaryAction?: AlertAction;
  onClose?: () => void;
}

export interface AnimatedIconProps {
  children: ReactNode; // your SVG icon
  size?: number;
  colorClass?: string;
}
