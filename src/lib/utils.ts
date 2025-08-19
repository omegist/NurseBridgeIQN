
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* ----------------------------------------------------------------------------
 * cn(): Tailwind‑aware className helper
 * ----------------------------------------------------------------------------
 * Combines clsx (conditional classes) with tailwind‑merge (deduping) so you
 * can safely compose Tailwind class strings.
 * -------------------------------------------------------------------------- */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* ----------------------------------------------------------------------------
 * iconMap: string key  ➜  Lucide React icon component
 * ----------------------------------------------------------------------------
 * Store your topic / flashcard icon names as strings (e.g. "pill").
 * At render time, map that string to the actual Lucide icon component.
 * Extend this list as you add more icons.
 * -------------------------------------------------------------------------- */
import {
  Pill,
  HeartPulse,
  Brain,
  Stethoscope,
  BookMarked,
  Repeat,
  Baby,
  BookOpen,
  Award,
  BarChart,
  Star,
  LucideIcon
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  pill: Pill,
  heartPulse: HeartPulse,
  brain: Brain,
  stethoscope: Stethoscope,
  bookMarked: BookMarked,
  repeat: Repeat,
  baby: Baby,
  bookOpen: BookOpen,
  award: Award,
  barChart: BarChart,
  star: Star,
  // ➕ add more name‑to‑icon pairs here as needed
};
