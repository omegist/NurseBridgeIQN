// src/data/quizzes.ts

import type { Topic, Question } from '@/lib/types';
// Remove the individual Lucide icon imports since you'll use strings
// import { Stethoscope, Pill, HeartPulse, Brain, Baby, BookMarked, Repeat } from 'lucide-react'; // <--- REMOVE OR COMMENT OUT THIS LINE

// Empty placeholder for now
const emptyQuestions: Question[] = [];

export const quizTopics: Topic[] = [
  {
    id: 'fundamentals',
    name: 'Fundamentals of Nursing',
    icon: 'Stethoscope', // <--- CHANGED FROM Stethoscope to 'Stethoscope' (string)
    description: 'Covers core nursing skills, patient safety, infection control, and vital signs.',
    questionCount: 33,
    difficulty: 'hard',
    questions: emptyQuestions
  },
  {
    id: 'pharmacology',
    name: 'Pharmacology & Meds',
    icon: 'Pill', // <--- CHANGED TO STRING
    description: 'Test your knowledge of medications, drug actions, side effects, and dosage calculations.',
    questionCount: 23,
    difficulty: 'hard',
    questions: emptyQuestions
  },
  {
    id: 'medical-surgical',
    name: 'Medical-Surgical Nursing',
    icon: 'HeartPulse', // <--- CHANGED TO STRING
    description: 'Focuses on adult patients with acute and chronic illnesses.',
    questionCount: 58,
    difficulty: 'hard',
    questions: emptyQuestions
  },
  {
    id: 'mental-health',
    name: 'Mental Health Nursing',
    icon: 'Brain', // <--- CHANGED TO STRING
    description: 'Explore psychiatric conditions, therapeutic communication, and de-escalation techniques.',
    questionCount: 15,
    difficulty: 'easy',
    questions: emptyQuestions
  },
  {
    id: 'maternity-paediatric',
    name: 'Maternity & Paediatric',
    icon: 'Baby', // <--- CHANGED TO STRING
    description: 'Questions on pregnancy, childbirth, newborn care, and pediatric nursing.',
    questionCount: 15,
    difficulty: 'easy',
    questions: emptyQuestions
  },
  {
    id: 'maternity-child-quest',
    name: 'Maternity & Child Quest',
    icon: 'Baby', // <--- CHANGED TO STRING
    description: 'A quiz covering key topics in maternity and child health.',
    questionCount: 35,
    difficulty: 'hard',
    questions: emptyQuestions
  },
  {
    id: 'nz-nursing-context',
    name: 'NZ Nursing Context',
    icon: 'BookMarked', // <--- CHANGED TO STRING
    description: 'Covers cultural safety, ethics, and legal frameworks specific to nursing in New Zealand.',
    questionCount: 136,
    difficulty: 'hard',
    questions: emptyQuestions
  },
  {
    id: 'most-repeated-questions',
    name: 'Most Repeated Questions',
    icon: 'Repeat', // <--- CHANGED TO STRING
    description: 'Challenge yourself with a set of frequently asked questions covering critical nursing topics.',
    questionCount: 21,
    difficulty: 'hard',
    questions: emptyQuestions
  },
  {
    id: 'most-repeated-questions-b',
    name: 'Most Repeated Questions Part B',
    icon: 'Repeat', // <--- CHANGED TO STRING
    description: 'A second set of frequently asked questions covering critical nursing topics.',
    questionCount: 59,
    difficulty: 'hard',
    questions: emptyQuestions
  },
  {
    id: 'mental-health-iqn',
    name: 'Mental Health IQN',
    icon: 'Brain', // <--- CHANGED TO STRING
    description: 'A comprehensive set of questions focusing on various aspects of mental health nursing.',
    questionCount: 80,
    difficulty: 'hard',
    questions: emptyQuestions
  },
  {
    id: 'cardiology-quest-iqn',
    name: 'Cardiology Quest IQN',
    icon: 'HeartPulse', // <--- CHANGED TO STRING
    description: 'A comprehensive quiz on cardiology topics.',
    questionCount: 80,
    difficulty: 'hard',
    questions: emptyQuestions
  },
  {
    id: 'gastro-quest-iqn',
    name: 'Gastro Quest IQN',
    icon: 'Stethoscope', // <--- CHANGED TO STRING
    description: 'A comprehensive quiz on gastroenterology nursing topics.',
    questionCount: 135,
    difficulty: 'hard',
    questions: emptyQuestions
  }
];