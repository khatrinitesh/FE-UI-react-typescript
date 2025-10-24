import type { ReactElement, ReactNode } from "react";
import type { IconType } from "react-icons/lib";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface Props {
  children: ReactNode;
}

export interface State {
  hasError: boolean;
}

export interface RouteType {
  path: string;
  element: ReactElement;
  title: string;
  isProtected?: boolean;
}

export interface NavItem {
  title: string;
  path: string;
  icon: IconType;
}

export interface HeadTitleProps {
  children: ReactNode;
  className: string;
}

export interface TableRow {
  id: number;
  name: string;
  value: string | number;
  status?: string; // optional
}

export interface TableData {
  title: string;
  rows: TableRow[];
}

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

export interface ZigZagItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface TableRowZebraStriping {
  id: number;
  name: string;
  age: number;
  role: string;
  active: boolean;
}

export interface TextWrapperProps {
  id: number;
  title: string;
  text: string;
}

export interface VortexConfig {
  id: number;
  color: string;
  size: number; // px
  speed: number; // animation duration in seconds
}

export interface VerticalMenuItem {
  id: number;
  label: string;
  path: string;
  icon: IconType;
}

export interface VerticalLineConfig {
  color: string;
  height: number; // in pixels
  thickness: number; // px width of line
  visible: boolean;
}

export interface VerticalButtonGrpProps {
  id: number;
  label: string;
  value: string;
}

export interface UserRatingConfig {
  maxRating: number;
}

export interface BreakPointsProps {
  mobile: number;
  tablet: number;
  laptop: number;
  desktop: number;
}

export interface TypewriterConfig {
  text: string; // text to type
  speed: number; // typing speed (ms per character)
}

export interface InputSettings {
  spellCheck: boolean;
}

export interface InputSettings {
  autocomplete: "on" | "off";
}

export interface TruncateConfig {
  maxLength: number; // max length of string before truncation
  ellipsis: string; // ellipsis characters
}

export interface ButtonConfig {
  label: string;
}

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  isExpanded?: boolean;
}
export interface TransparentTextSettings {
  text: string;
  opacity: number; // 0 (fully transparent) to 1 (fully opaque)
  color: string; // text color
}

export interface HoverTransitionSettings {
  scale: number; // how much to scale on hover
  duration: number; // transition duration (seconds)
  color: string; // background color when hovered
}

export interface TracingBeamConfig {
  color: string;
  thickness: number;
  speed: number; // how fast the beam follows the mouse (0.05 = smooth, 1 = instant)
}

export interface TooltipState {
  visible: boolean;
  content: string;
  x: number;
  y: number;
}

export interface InputFocusState {
  focused: boolean;
}

export interface TextImageEffectProps {
  text: string;
  imageUrl: string;
  fontSize?: string;
  width?: string;
  height?: string;
  className?: string;
}

export interface TextHoverEffectProps {
  text: string;
  fontSize?: string;
  color?: string;
  hoverColor?: string;
  transitionDuration?: string;
  className?: string;
}

export interface StrokeTextProps {
  text: string;
  strokeColor?: string;
  fillColor?: string;
  fontSize?: string;
}
