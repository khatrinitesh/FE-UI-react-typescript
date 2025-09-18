import type { ComponentType } from "react";

export interface ILayoutProps {
  children: React.ReactNode;
  className?: string;
}

export interface Props {
  children: React.ReactNode;
}

export interface State {
  hasError: boolean;
}

export interface NavLinkItem {
  name: string;
  path: string;
}

export type IconPosition = "left" | "right";

export interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  onClick?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string; // for custom styling
}

export interface PostProps {
  id: number;
  title: string;
}

export interface PostDetailProps {
  id: number;
  title: string;
  body: string;
}

export interface SwiperItem {
  id: number | string;
  image: string;
  title?: string;
  description?: string;
}

export interface SwiperItem {
  id: number | string;
  image: string;
  title?: string;
  description?: string;
}

export interface SliderProps {
  slides: SwiperItem[];
}
export interface TimelineItem {
  id: number | string;
  title: string;
  description?: string;
  date?: string;
  icon?: ComponentType<{ color?: string; size?: number }>;
}
export interface TimelineProps {
  items: TimelineItem[];
}
