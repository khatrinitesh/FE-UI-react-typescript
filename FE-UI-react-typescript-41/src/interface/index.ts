export interface IProduct {
  id: number;
  title: string;
  body: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  style?: React.CSSProperties;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export interface InputProps {
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export interface TextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  className?: string;
  name?:string;
  style?: React.CSSProperties;
}
