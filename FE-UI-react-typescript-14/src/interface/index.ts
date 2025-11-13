export interface RouteDefinition {
  path: string;
  title?: string;
  element: React.ReactNode;
  protected?: boolean;
  pathType?: number;
  redirect?: string;
  requires?: any;
}

export interface ILayoutProps {
  children: React.ReactNode;
  className?: string;
}

export interface IHeaderProps {
  className?: string;
}
export interface IFooterProps {
  className?: string;
}

export interface IOtherPageProps {
  className?: string;
}

export interface BaseFieldProps {
  id: string;
  label: string;
  name: string;
  required?: boolean;
  className?: string;
}
export interface InputFieldProps extends BaseFieldProps {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export interface TextareaFieldProps extends BaseFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectFieldProps extends BaseFieldProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
}

export interface Racer {
  id: number;
  name: string;
  color: string;
}
