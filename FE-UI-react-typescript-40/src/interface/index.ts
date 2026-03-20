export interface FieldInputProps {
  name: string;
  value: string;
  placeholder?: string;
  error?: string;
  type?: "text" | "email" | "tel" | "password";
  disabled?: boolean;
  className?: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextAreaProps {
  name: string;
  value: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  maxLength?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export type Variant = "primary" | "secondary" | "outline";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: Variant;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ProductSection {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}
