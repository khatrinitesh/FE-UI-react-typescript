export interface ILayout {
  children: React.ReactNode;
}

export interface IService {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IHeadTitle {
  className: string;
  children: React.ReactNode;
}

export interface ISubHeadTitle {
  className: string;
  children: React.ReactNode;
}

export interface NavLinkItem {
  label: string;
  path: string;
}

export interface IButtonProps {
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
  autoComplete?: "on" | "off";
}

export interface IDropdownProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  label?: string;
}

export interface RouteDefinition {
  element: any;
  redirect?: any;
  requires?: any;
  protected?: boolean;
  path: string;
  title?: string;
  pathType?: number;
}

export type Props = {
  children: React.ReactNode;
};

export type State = {
  hasError: boolean;
  error: Error | null;
};
