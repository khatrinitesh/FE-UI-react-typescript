import type { ReactNode } from "react";
import type { ALERT_VARIANTS } from "../constants/constants";

// props product 4 > userId/id/title/body
export interface Product {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// props button 7 > children/onClick/disabled/isLoading/icon/iconPosition/className
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

// props field input 7 > value/onChange/placeholder/maxLength/disabled/isLoading/className
export interface FieldInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

// props nav item 2 > name/path
export interface NavItem {
  name: string;
  path: string;
}

// props logo 1 > variant
export interface LogoProps {
  variant?: "home" | "default";
}

// props card item > id/title/description/image
export interface CardItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

// props accordion 3 > title/children/defaultOpen
export interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

// props alert variant typeof
export type AlertVariant = keyof typeof ALERT_VARIANTS;

// props alert action 2 > label/onClick
export interface AlertAction {
  label: string;
  onClick: () => void;
}

// props alert 7 > isOpen/variant/title/description/primaryAction/secondaryAction/onClose
export interface AlertProps {
  isOpen: boolean;
  variant?: AlertVariant;
  title: string;
  description?: string;
  primaryAction?: AlertAction;
  secondaryAction?: AlertAction;
  onClose?: () => void;
}

// props animated icons 3 > children/size/colorClass
export interface AnimatedIconProps {
  children: ReactNode; // your SVG icon
  size?: number;
  colorClass?: string;
}

// props skills 3 > id/name/level
export interface Skill {
  id: number;
  name: string;
  level: number;
}

// props arrow slide 4 > id/title/description/color
export interface ArrowSlide {
  id: number;
  title: string;
  description: string;
  color: string; // background color for demonstration
}

// props carousel 3 > currentIndex/next/prev
export interface CarouselState {
  currentIndex: number;
  next: (length: number) => void;
  prev: (length: number) => void;
}

// props aspect ratio card 4 > id/title/description/color
export interface AspectRatioCard {
  id: number;
  title: string;
  description: string;
  color: string;
}

// props autocomplete 2 > id/name
export interface AutoCompleteItem {
  id: number;
  name: string;
}

// props avatar 3 > id/name/image
export interface Avatar {
  id: number;
  name: string;
  image: string;
}

// props beam 7 > id/x/y/vx/vy/size/color
export interface Beam {
  id: number;
  x: number; // current x position
  y: number; // current y position
  vx: number; // velocity x
  vy: number; // velocity y
  size: number; // width/height of beam
  color: string; // Tailwind color
}

// props banner 4 > id/title/subtitle/color
export interface BannerMessage {
  id: number;
  title: string;
  subtitle: string;
  color: string; // Tailwind background color
}

// props bento Grid item 4 > id/title/size/color
export interface BentoGridItem {
  id: number;
  title: string;
  size: "small" | "medium" | "large"; // controls span in grid
  color: string; // Tailwind color
}

// props gallery image 3 > id/title/src
export interface GalleryImage {
  id: number;
  title: string;
  src: string;
}

// props blur background image 3 > id/title/url
export interface BackgroundImage {
  id: number;
  title: string;
  url: string;
}
// props Image Border 2 > src/alt
export interface BorderImageProps {
  src: string;
  alt: string;
}

// props navitem 2 > id/label
export interface NavLinkItem {
  id: number;
  label: string;
}

// props bullet item 2 > id/label
export interface BulletItem {
  id: number;
  label: string;
}

// props button block 2 > id/label
export interface ButtonBlockItem {
  id: number;
  label: string;
}

// props image button card 3 > image/title/buttontext
export interface ImageButtonCardProps {
  image: string;
  title: string;
  buttonText: string;
}

// props calculator 2 > id/value
export interface CalcButton {
  id: number;
  value: string;
}

// props calendar 1 > day
export interface CalendarDay {
  day: number;
}

// props callout 2 > message/type
export interface CalloutProps {
  message: string;
  type?: "success" | "warning" | "info";
}

// props reveal 3 > image/title/description
export interface RevealProps {
  image: string;
  title: string;
  description: string;
}

export interface CardHoverEffectProps {
  image: string;
  title: string;
  description: string;
}

export interface CardSpotlightProps {
  image: string;
  title: string;
  description: string;
}

export interface CardStackItem {
  id: number;
  image: string;
  title: string;
}

export interface CardStackProps {
  cards: CardStackItem[];
}

export interface CharacterState {
  messages: any;
  text: string;
  setText: (value: string) => void;
}

export interface Message {
  id: string;
  text: string;
}
export interface ChatState {
  messages: Message[];
  addMessage: (message: Message) => void;
}
