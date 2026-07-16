import type { LucideIcon } from 'lucide-react';
import { Home, Info, Mail } from 'lucide-react';

export type NavigationItem = { label: string; to: '/' | '/about' | '/contact'; icon: LucideIcon }
export const NAVIGATION: NavigationItem[] = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'About', to: '/about', icon: Info },
  { label: 'Contact', to: '/contact', icon: Mail },
]
