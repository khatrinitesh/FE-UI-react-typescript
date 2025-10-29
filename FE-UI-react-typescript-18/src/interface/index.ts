import type { JSX } from "react";

export interface IRoute {
  path: string;
  element: JSX.Element;
  title?: string;
  protected?: boolean;
}

export interface InputProps {
  label?: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string;
  textarea?: boolean;
}
export interface NavItem {
  name: string;
  path: string;
}

export interface FormState {
  name: string;
  mobile: string;
  message: string;
}
