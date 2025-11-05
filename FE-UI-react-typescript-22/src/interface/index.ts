export interface NavItem {
  id: number;
  name: string;
  path: string;
}

export interface ContactForm {
  name: string;
  mobile: string;
  message: string;
}

export interface FieldInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  textarea?: boolean;
  rows?: number;
}
export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export interface AccordionItemProps {
  id: string;
  title: string;
  content: string;
}

export type ToastType = "success" | "error" | "info" | "warning";

export interface Toast {
  id: string; // unique id for each toast
  message: string;
  type: ToastType;
  duration?: number; // ms before auto-dismiss (optional)
}

export interface IconItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
}

export interface AnimatedIconProps {
  item: IconItem;
}
export interface SearchState {
  query: string;
  setQuery: (value: string) => void;
  isActive: boolean;
  setActive: (value: boolean) => void;
}
