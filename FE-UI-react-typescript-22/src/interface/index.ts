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
