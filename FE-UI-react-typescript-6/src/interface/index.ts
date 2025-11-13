import type { ReactElement } from "react";

export interface RouteDefinition {
  element: ReactElement;
  protection: boolean;
  path: string;
  title?: string;
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
  children: React.ReactNode;
}

export interface FieldInputProps {
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
  placeholder?: string;
  maxLength?: number;
  id?: string;
  name?: string;
  disabled?: boolean;
  readOnly?: boolean;
  rows?: number;
  variant?: "default" | "outlined" | "underlined";
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export interface MainLayoutProps {
  children: React.ReactNode;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Service {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Fruit {
  name: string;
  quantity: number;
}

export interface Species {
  id: number;
  scientific_name: string;
  conservation_status: string;
  group: string;
  iso_code: string;
  common_name: string;
}

export interface User {
  id: number;
  name: string;
}
