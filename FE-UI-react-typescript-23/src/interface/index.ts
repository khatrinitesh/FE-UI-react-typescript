import type {
  ButtonHTMLAttributes,
  ChangeEvent,
  HTMLInputTypeAttribute,
  ReactNode,
} from "react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface FeatureCardProps {
  feature: Feature;
}
export interface StickyHeaderProps {
  showAfterY: number;
}

export interface FooterProps {
  showBeforeY?: number;
}
export interface FooterLink {
  id: number;
  label: string;
  href: string;
}

export interface Discover {
  id: number;
  videoSrc: string;
  caption: string;
}
export interface VideoSectionProps {
  src: string;
  thumbnail?: string;
}
export interface ConsentItem {
  id: string;
  text: string;
  required?: boolean;
}

export interface ConsentSectionProps {
  items: ConsentItem[]; // 👈 data comes from parent
  onChange?: (values: Record<string, boolean>) => void;
  children?: React.ReactNode; // 👈 extra content under list
  title?: string;
}

export interface CollapsibleProps {
  label: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  id?: string;
}
export interface FieldInputProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  maxLength?: number;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}

export interface OtpInputProps {
  length?: number;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  label?: string;
  resendLabel?: string;
  onResend?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface FieldTextareaProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  disabled?: boolean;
  className?: string;
}

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  fullWidth?: boolean;
}
export type LoadingDotsSize = "sm" | "md" | "lg";

export interface LoadingDotsProps {
  size?: LoadingDotsSize;
  className?: string;
  colors?: string[];
}

export type CircularLoaderSize = "sm" | "md" | "lg";

export interface CircularLoaderProps {
  size?: CircularLoaderSize;
  className?: string;
  color?: string;
  trackColor?: string;
}

export interface MusicProgressBarProps {
  value: number;
  duration?: number;
  className?: string;
  height?: number;
  trackColor?: string;
  fromColor?: string;
  toColor?: string;
  showLabel?: boolean;
}
