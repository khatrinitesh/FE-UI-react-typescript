export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface AccordionStore {
  openItemId: string | null;
  toggleItem: (id: string) => void;
}

export interface PlusMinusIconProps {
  isOpen: boolean;
}

export interface Card3DSpringConfig {
  stiffness: number;
  damping: number;
  mass: number;
}

export interface Card3DGlareConfig {
  startXPercent: number;
  startYPercent: number;
  opacity: number;
  fadeStopPercent: number;
}

export interface Card3DConfig {
  maxTiltDeg: number;
  hoverScale: number;
  perspective: number;
  shadowOffset: number;
  shadowBlur: number;
  shadowColor: string;
  spring: Card3DSpringConfig;
  glare: Card3DGlareConfig;
}
