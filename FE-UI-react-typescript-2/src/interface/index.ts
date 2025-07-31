import type { ReactNode } from "react";

export interface RouteDefinition {
  routes?: RouteDefinition[];
  element: any;
  redirect?: any;
  requires?: any;
  path: string;
  protected: boolean;
  title?: string;
  pathType?: number;
}

export interface MainLayoutProps {
  children: React.ReactNode;
}

export interface ButtonProps {
  label: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  variant?:
    | "yellow"
    | "outline"
    | "darkblue"
    | "whiteBorder"
    | "white"
    | "whiteBlueBorder";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
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

export interface TextareaInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  rows?: number;
  clearable?: boolean;
}

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface FieldDropdownProps {
  name: string;
  id: string;
  options: DropdownOption[];
  disabled?: boolean;
  placeholder: string;
}
export interface RadioOption {
  value: string;
  label: string;
}

export type Props = {
  children: ReactNode;
};
export type State = {
  hasError: boolean;
  error: Error | null;
};
