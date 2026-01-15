export interface Beam {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export interface BeamsState {
  beams: Beam[];
  updateBeams: () => void;
}
export interface Box {
  id: number;
  x: number;
  y: number;
  size: number;
  rotate: number;
  vx: number;
  vy: number;
  vRotate: number;
}

export interface BoxesState {
  boxes: Box[];
  updateBoxes: () => void;
}

export interface BannerItem {
  id: number;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  bgColor: string;
}

export interface BentoItem {
  id: number;
  title: string;
  description: string;
  span: string; // tailwind grid span
  gradient: string;
}

export interface BigHeaderContent {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  secondaryCta?: string;
}

export interface BWImage {
  id: number;
  src: string;
  alt: string;
}

export interface BlockButtonItem {
  id: number;
  label: string;
  variant: "primary" | "secondary" | "danger";
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
}
