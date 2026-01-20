import { CALLOUT_TYPES } from "../constants/constants";

export interface CalculatorState {
  value: number;
  add: (n: number) => void;
  subtract: (n: number) => void;
  reset: () => void;
}
export interface CalendarState {
  selectedDate: Date | null;
  selectDate: (date: Date) => void;
}

export interface CalloutState {
  isOpen: boolean;
  message: string;
  type: keyof typeof CALLOUT_TYPES;
  show: (msg: string, type: CalloutState["type"]) => void;
  hide: () => void;
}
export interface RevealState {
  x: number;
  y: number;
  isActive: boolean;
  reveal: (x: number, y: number) => void;
  reset: () => void;
}
