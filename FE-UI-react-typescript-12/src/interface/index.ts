export interface ILayoutProps {
  children?: React.ReactNode;
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
  value?: string;
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
