import type { Topic } from '@/lib/types';

/**
 * Metadata for each quiz topic.
 * ‑ `questionCount` lets you draw progress bars or badges.
 * ‑ `difficulty` can drive filters or colour‑coding in the UI.
 * Questions themselves are loaded lazily elsewhere for performance.
 */
export type TopicMeta = Omit<Topic, 'questions'> & {
  questionCount: number;
  difficulty: 'easy' | 'medium' | 'hard';
};

export const topics: TopicMeta[] = [
  {
    id: 'fundamentals',
    name: 'Fundamentals of Nursing',
    icon: 'stethoscope',
    description:
      'Covers core nursing skills, patient safety, infection control, and vital signs.',
    questionCount: 33,
    difficulty: 'hard',
  },
  {
    id: 'pharmacology',
    name: 'Pharmacology & Meds',
    icon: 'pill',
    description:
      'Test your knowledge of medications, drug actions, side effects, and dosage calculations.',
    questionCount: 23,
    difficulty: 'hard',
  },
  {
    id: 'medical-surgical',
    name: 'Medical‑Surgical Nursing',
    icon: 'heartPulse',
    description: 'Focuses on adult patients with acute and chronic illnesses.',
    questionCount: 58,
    difficulty: 'hard',
  },
  {
    id: 'mental-health',
    name: 'Mental Health Nursing',
    icon: 'brain',
    description:
      'Explore psychiatric conditions, therapeutic communication, and de‑escalation techniques.',
    questionCount: 15,
    difficulty: 'easy',
  },
  {
    id: 'maternity-paediatric',
    name: 'Maternity & Paediatric',
    icon: 'baby',
    description:
      'Questions on pregnancy, childbirth, newborn care, and pediatric nursing.',
    questionCount: 15,
    difficulty: 'easy',
  },
  {
    id: 'maternity-child-quest',
    name: 'Maternity & Child Quest',
    icon: 'baby',
    description: 'A quiz covering key topics in maternity and child health.',
    questionCount: 35,
    difficulty: 'hard',
  },
  {
    id: 'nz-nursing-context',
    name: 'NZ Nursing Context',
    icon: 'bookMarked',
    description:
      'Covers cultural safety, ethics, and legal frameworks specific to nursing in New Zealand.',
    questionCount: 136,
    difficulty: 'hard',
  },
  {
    id: 'most-repeated-questions',
    name: 'Most Repeated Questions',
    icon: 'repeat',
    description:
      'Challenge yourself with a set of frequently asked questions covering critical nursing topics.',
    questionCount: 21,
    difficulty: 'hard',
  },
  {
    id: 'most-repeated-questions-b',
    name: 'Most Repeated Questions – Part B',
    icon: 'repeat',
    description:
      'A second set of frequently asked questions covering critical nursing topics.',
    questionCount: 59,
    difficulty: 'hard',
  },
  {
    id: 'mental-health-iqn',
    name: 'Mental Health IQN',
    icon: 'brain',
    description:
      'A comprehensive set of questions focusing on various aspects of mental health nursing.',
    questionCount: 80,
    difficulty: 'hard',
  },
  {
    id: 'cardiology-quest-iqn',
    name: 'Cardiology Quest IQN',
    icon: 'heartPulse',
    description: 'A comprehensive quiz on cardiology topics.',
    questionCount: 80,
    difficulty: 'hard',
  },
  {
    id: 'gastro-quest-iqn',
    name: 'Gastro Quest IQN',
    icon: 'stethoscope',
    description:
      'A comprehensive quiz on gastroenterology nursing topics.',
    questionCount: 135,
    difficulty: 'hard',
  },
];
