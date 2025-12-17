import type { IconType } from "react-icons";

export interface ILogin {
  email: string;
  password: string;
}
export interface IOTP {
  email: string;
  otp: string;
}
export interface IRegister {
  name: string;
  email: string;
  password: string;
}
export interface CardItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}
export type AlertType = "success" | "error" | "info" | "warning";

export interface Alert {
  id: string;
  type: AlertType;
  message: string;
  duration?: number;
}

export interface IconItem {
  id: number;
  name: string;
  icon: IconType;
}
export interface SearchItem {
  id: number;
  name: string;
}
export interface SearchState {
  query: string;
  results: SearchItem[];
  setQuery: (query: string) => void;
  setResults: (results: SearchItem[]) => void;
}
export interface Item {
  id: number;
  title: string;
  description: string;
}

export interface CarouselState {
  currentIndex: number;
  next: () => void;
  prev: () => void;
  items: Item[];
}
export interface AuroraLayer {
  id: number;
  color: string;
  blur: number;
  opacity: number;
  speed: number;
}

export interface AutocompleteItem {
  id: number;
  name: string;
}

export interface AutocompleteState {
  query: string;
  results: AutocompleteItem[];
  setQuery: (query: string) => void;
  setResults: (results: AutocompleteItem[]) => void;
}
export interface Avatar {
  id: number;
  name: string;
  image: string;
}

export interface AvatarState {
  selectedId: number | null;
  selectAvatar: (id: number) => void;
}

export interface Beam {
  id: number;
  x: number;
  y: number;
  dx: number; // speed x
  dy: number; // speed y
  width: number;
  height: number;
  color: string;
}

export interface BeamState {
  beams: Beam[];
  updateBeams: (width: number, height: number) => void;
}

export interface NavLink {
  id: number;
  name: string;
  href: string;
}

export interface BreadcrumbItem {
  id: number;
  label: string;
  href: string;
}
export interface Bullet {
  id: number;
  label: string;
  color: string;
}

export interface BulletState {
  selectedId: number | null;
  setSelectedId: (id: number) => void;
}

export interface Day {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
}

export interface CalendarState {
  selectedDate: Date | null;
  currentMonth: Date;
  setSelectedDate: (date: Date) => void;
  setCurrentMonth: (date: Date) => void;
}

export interface Car {
  id: number;
  color: string;
  width: number;
  height: number;
}

export interface ZoomHoverProps {
  id: string;
  title: string;
  image: string;
}

export interface ZigZagItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ZebraStripeTableRow {
  id: string; //1
  name: string; //2
  email: string; //3
  role: string; //4
  age?: number; //5
  department?: string; //6
  location?: string; //7
  phone?: string; //
  status?: string;
  startDate?: string;
}

export interface VortexItem {
  id: string;
  label: string;
  color?: string;
}
