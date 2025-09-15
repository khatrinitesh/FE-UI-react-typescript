import type { AspectRatio } from "../components/apectRatioComponent/components/aspectRatioData";
import type { ARROW_DIRECTIONS } from "../components/arrowsComponent/component/arrowData";
import type { AuroraTheme } from "../components/auroraComponent/components/auroraData";
import type { AvatarSize } from "../components/avatarImgComponent/components/avatarImgData";
import type { BreakpointName } from "../components/breakPointComponent/components/breakPointData";
import type { TypewriterStatus } from "../components/typeWriterComponent/components/typeWriteData";
import type { RatingScore } from "../components/userRatingComponent/components/userRatingData";
import type { Role } from "../components/vortexComponent/components/vortexData";
// import type { LayoutDirection } from "../components/zigZagLayoutComponent/components/zigZagLayoutData";
import type { Paths } from "../routes/path";

export interface lLayoutProps {
  children: React.ReactNode;
  className?: string;
}
export interface RouteDefinition {
  routes?: RouteDefinition[];
  protected?: boolean;
  pathType?: number;
  path: string;
  title?: string;
  element: any;
  redirect?: any;
  requires?: any;
}
export interface IHeadTitleProps {
  children: React.ReactNode;
  className?: string;
}
export interface ISubTitleProps {
  children: React.ReactNode;
  className?: string;
}
export interface IDescriptionProps {
  children: React.ReactNode;
  className?: string;
}
export interface ButtonProps {
  label: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  variant?: "yellow" | "outline" | "darkblue" | "whiteBorder" | "white";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}
export interface InputProps {
  type?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
  variant?: "default" | "outlined" | "underlined";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
export interface FieldTextAreaProps {
  maxlength?: number; // Optional field for maxlength
  disabled?: boolean; // Optional field for disabling the input
  placeholder?: string; // Optional placeholder
  rows?: number; // Optional rows for textarea
  cols?: number; // Optional cols for textarea
  className?: string; // Optional className for custom styling
  name: string;
}
export type Props = {
  children: React.ReactNode;
};
export type State = {
  hasError: boolean;
  error: Error | null;
};
export interface NavigationItem {
  label: string;
  path: Paths;
}

export interface SearchState {
  query: string;
  setQuery: (value: string) => void;
  clearQuery: () => void;
}

export interface UserTableFormatProps {
  id: number;
  name: string;
  email: string;
  age: number;
}

export type SortOrder = "asc" | "desc";

export interface TableState {
  data: UserTableFormatProps[];
  searchQuery: string;
  currentPage: number;
  rowsPerPage: number;
  sortBy: keyof UserTableFormatProps;
  sortOrder: SortOrder;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: number) => void;
  setSort: (column: keyof UserTableFormatProps) => void;
  setData: (data: UserTableFormatProps[]) => void;
}

export interface IconState {
  isAnimating: boolean;
  toggleAnimation: () => void;
}

export interface UIAnimationState {
  isVisible: boolean;
  toggleVisibility: () => void;
}

export type ArrowDirection =
  (typeof ARROW_DIRECTIONS)[keyof typeof ARROW_DIRECTIONS];

export interface ArrowProps {
  direction: "left" | "right" | "up" | "down"; // Or use a constant type
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export interface AspectRatioBoxProps {
  ratio?: AspectRatio;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export interface AuroraBackgroundProps {
  theme?: AuroraTheme;
  className?: string;
  children?: React.ReactNode;
}

export interface Suggestion {
  id: string | number;
  label: string;
  [key: string]: any; // extra optional fields
}

export interface AutocompleteProps {
  suggestions: Suggestion[];
  onSelect: (suggestion: Suggestion) => void;
  placeholder?: string;
  debounceDelay?: number;
  maxSuggestions?: number;
  className?: string;
}

export interface AvatarProps {
  src?: string; // image source URL
  alt?: string; // alt text for image
  size?: AvatarSize; // size key for avatar dimensions
  className?: string; // additional classNames
  onClick?: () => void; // optional click handler
  rounded?: boolean; // rounded vs circle
}

export interface Beam {
  x: number;
  y: number;
  width: number;
  height: number;
  velocityX: number;
  velocityY: number;
  color: string;
}

export interface BackgroundBeamsProps {
  width?: number;
  height?: number;
  beamCount?: number;
  colors?: string[];
  minSpeed?: number;
  maxSpeed?: number;
  minSize?: number;
  maxSize?: number;
}
export interface GrayScaleImgProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  blackAndWhite?: boolean;
  className?: string;
}

export interface ZoomImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  scale?: number;
  transitionDuration?: string;
  className?: string;
  style?: React.CSSProperties;
}
export interface ZigZagSectionData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ZigZagSectionProps {
  data: ZigZagSectionData;
  isReversed?: boolean; // Controls if image is on right or left
  className?: string;
}

export interface ZigZagLayoutProps {
  sections: ZigZagSectionData[];
}

export interface VortexUser {
  id: string;
  name: string;
  role: Role;
  email?: string;
}

export interface VortexUserState {
  user: VortexUser | null;
  setUser: (user: VortexUser) => void;
  clearUser: () => void;
}

export interface UserRating {
  userId: string;
  rating: RatingScore;
  comment?: string;
}

export interface UserRatingState {
  ratings: Record<string, UserRating>; // userId -> UserRating
  setRating: (userId: string, rating: RatingScore, comment?: string) => void;
  clearRating: (userId: string) => void;
}

export interface UserRatingProps {
  userId: string;
}

export interface BreakpointState {
  current: BreakpointName;
}

export interface BreakpointStore extends BreakpointState {
  setBreakpoint: (bp: BreakpointName) => void;
}

export interface TypewriterState {
  text: string; // full text to type
  displayText: string; // currently displayed text
  status: TypewriterStatus;
}

export interface TypewriterStore extends TypewriterState {
  setText: (text: string) => void;
  setStatus: (status: TypewriterStatus) => void;
  setDisplayText: (text: string) => void;
  reset: () => void;
}

export interface TypewriterProps {
  text: string;
}

export interface TimelineItem {
  id: number;
  year: number;
  date: string;
  time: string;
  description: string;
}
