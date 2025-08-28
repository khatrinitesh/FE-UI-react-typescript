import type { JSX } from "react";

export interface MainLayoutProps {
  children: React.ReactNode;
}

export interface RouteDefinition {
  redirect: any;
  element: any;
  requires?: any;
  protected: boolean;
  title?: string;
  path: string;
  pathType?: number;
}
export interface ButtonProps {
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  variant?:
    | "yellow"
    | "outline"
    | "darkblue"
    | "whiteBorder"
    | "white"
    | "whiteBlueBorder";
  className?: string;
}

export interface InputProps {
  type?: string;
  placeholder?: string;
  maxLength?: number;
  id?: string;
  name: string;
  value: string;
  disabled?: boolean;
  readOnly?: boolean;
  variant?: "default" | "outlined" | "underlined";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export type Props = {
  children: React.ReactNode;
};

export type State = {
  hasError: boolean;
  error: Error | null;
};

export interface TimelineEntry {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CardData {
  title: string;
  description: string;
  image: string;
}

export interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

export interface AutoCompleteOption {
  id: number;
  label: string;
}
