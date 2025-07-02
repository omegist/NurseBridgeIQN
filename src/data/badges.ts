import { Award, ShieldCheck, Star, Gem, type LucideIcon } from 'lucide-react';

export interface Badge {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export const badges: Badge[] = [
  {
    name: 'Pharmacology Novice',
    description: 'Complete your first Pharmacology quiz.',
    icon: Award,
    color: 'text-chart-1',
    bgColor: 'bg-chart-1/20',
  },
  {
    name: 'Physiology Pro',
    description: 'Score over 90% in a Physiology quiz.',
    icon: ShieldCheck,
    color: 'text-chart-2',
    bgColor: 'bg-chart-2/20',
  },
  {
    name: 'Neurology Nerd',
    description: 'Answer 10 Neurology questions correctly in a row.',
    icon: Star,
    color: 'text-chart-3',
    bgColor: 'bg-chart-3/20',
  },
  {
    name: 'Anatomy Ace',
    description: 'Master the Anatomy category.',
    icon: Gem,
    color: 'text-chart-4',
    bgColor: 'bg-chart-4/20',
  },
  {
    name: 'Quiz Master',
    description: 'Complete quizzes in all available topics.',
    icon: Award,
    color: 'text-chart-5',
    bgColor: 'bg-chart-5/20',
  },
  {
    name: 'Top Scorer',
    description: 'Achieve the highest score on any quiz.',
    icon: ShieldCheck,
    color: 'text-primary',
    bgColor: 'bg-primary/20',
  },
  {
    name: 'Speed Runner',
    description: 'Complete a quiz in under 5 minutes.',
    icon: Star,
    color: 'text-accent',
    bgColor: 'bg-accent/20',
  },
  {
    name: 'Perfect Score',
    description: 'Get a 100% score on any quiz.',
    icon: Gem,
    color: 'text-chart-3',
    bgColor: 'bg-chart-3/20',
  }
];
