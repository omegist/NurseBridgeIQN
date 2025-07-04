import type { LucideIcon } from 'lucide-react';

export interface Badge {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export const badges: Badge[] = [];
