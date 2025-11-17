import type { ButtonHTMLAttributes, ChangeEvent, ReactNode } from "react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface FeatureCardProps {
  feature: Feature;
}
export interface StickyHeaderProps {
  showAfterY: number;
}

// export interface FooterProps {
//   showBeforeY?: number;
// }
export interface FooterProps {
  isVisible: boolean;
  onHowItWorksClick: () => void;
}
export interface BannerProps {
  onHowItWorksClick: () => void;
}
export interface FooterLink {
  id: number;
  label: string;
  href: string;
}

export interface Discover {
  id: number;
  videoSrc: string;
  caption: string;
}
export interface VideoSectionProps {
  src: string;
  thumbnail?: string;
}
export interface ConsentItem {
  id: string;
  text: string;
  required?: boolean;
}

export interface ConsentSectionProps {
  items: ConsentItem[]; // 👈 data comes from parent
  onChange?: (values: Record<string, boolean>) => void;
  children?: React.ReactNode; // 👈 extra content under list
  title?: string;
  className?: string;
}

export interface CollapsibleProps {
  label: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  id?: string;
}
export interface FieldInputProps {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  disabled?: boolean;
  className?: string;
  rightIcon?: React.ReactNode;
  readOnly?: boolean;
}

export interface OtpInputProps {
  length?: number;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  label?: string;
  resendLabel?: string;
  onResend?: () => void;
  disabled?: boolean;
  className?: string;
}

export interface FieldTextareaProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  disabled?: boolean;
  className?: string;
}

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  children: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  fullWidth?: boolean;
}
export type LoadingDotsSize = "sm" | "md" | "lg";

export interface LoadingDotsProps {
  size?: LoadingDotsSize;
  className?: string;
  colors?: string[];
}

export type CircularLoaderSize = "sm" | "md" | "lg";

export interface CircularLoaderProps {
  size?: CircularLoaderSize;
  className?: string;
  color?: string;
  trackColor?: string;
}

export interface MusicProgressBarProps {
  value: number;
  duration?: number;
  className?: string;
  height?: number;
  trackColor?: string;
  fromColor?: string;
  toColor?: string;
  showLabel?: boolean;
}

export interface ProfileStatusCardProps {
  name: string;
  statusText?: string;
  avatarSrc: string;
}
export interface IntroMessageProps {
  name?: string;
  avatarSrc?: string;
  children?: React.ReactNode;
  showHeader?: boolean;
  showBody?: boolean;
  className?: string;
}
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export interface InspirationsProps {
  title?: string;
  items: string[];
  onRefresh?: () => void;
  onSelectItem?: (value: string) => void;
}

export interface InfoBannerProps {
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
}

export interface UploadDropzoneProps {
  onFilesSelected: (files: FileList | null) => void;
  title?: string;
  helperText?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  className?: string;
}
export interface VideoPreviewProps {
  src: string; // video file path, e.g. "/video.mp4"
  poster?: string; // optional preview image
  className?: string; // optional extra classes for outer wrapper
}

export interface SelectOption {
  value: string;
  label: string;
  icon?: string;
}
export interface FieldDropdownProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "onChange" | "value"
  > {
  name: string;
  value: string;
  options: SelectOption[];
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
}

export type HowItWorksIcon = "mail" | "edit" | "play";

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: HowItWorksIcon;
}

export interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}
