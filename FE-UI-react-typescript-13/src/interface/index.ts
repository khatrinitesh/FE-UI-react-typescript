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

export interface CarProps {
  color?: string;
  speed?: number; // seconds
}

export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export interface CardSpotlightProps {
  title: string;
  description: string;
  backgroundColor?: string;
}

export interface CardData {
  id: number;
  title: string;
  description: string;
}

export interface CardStackProps {
  cards: CardData[];
}

export interface ColorOption {
  label: string;
  value: string;
}

export interface ScrollBackgroundStep {
  scrollY: number;
  color: string;
}

export interface CharacterCounterProps {
  limit?: number;
  warningAt?: number;
}
export type MessageType = "user" | "bot";

export interface ChatMessageProps {
  id: string;
  text: string;
  type: MessageType;
}

export interface AnimatedCheckboxProps {
  id: string;
  label: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}
