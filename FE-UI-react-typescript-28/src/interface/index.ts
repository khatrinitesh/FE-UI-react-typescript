import type { ReactNode } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export interface ProductDetail {
  thumbnail: string | undefined;
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

export interface LayoutProps {
  children: ReactNode;
}

export interface CardProps {
  title: string;
  image: string;
  description?: string;
}

export interface PinProps {
  title: string;
  image: string;
  width?: string;
  height?: string;
}

export interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
}
export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertData {
  message: string;
  type: AlertType;
}

export interface AlertProps {
  alert: AlertData | null;
}

export type IconType = "heart" | "star" | "check" | "alert";

export interface AnimatedIconProps {
  type: IconType;
  size?: number;
  color?: string;
}

export interface AvatarProps {
  id: number;
  src: string;
  name: string;
}
