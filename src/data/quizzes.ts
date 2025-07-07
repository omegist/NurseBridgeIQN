import type { Topic, Question } from '@/lib/types';
import { questions as fundamentals } from './questions/fundamentals';
import { questions as pharmacology } from './questions/pharmacology';
import { questions as medicalSurgical } from './questions/medical-surgical';
import { questions as mentalHealth } from './questions/mental-health';
import { questions as maternityPaediatric } from './questions/maternity-paediatric';
import { questions as maternityChildQuest } from './questions/maternity-child-quest';
import { questions as nzNursingContext } from './questions/nz-nursing-context';
import { questions as mostRepeatedQuestions } from './questions/most-repeated-questions';
import { questions as mostRepeatedQuestionsB } from './questions/most-repeated-questions-b';
import { questions as mentalHealthIqn } from './questions/mental-health-iqn';
import { questions as cardiologyQuestIqn } from './questions/cardiology-quest-iqn';
import { questions as gastroQuestIqn } from './questions/gastro-quest-iqn';

export const quizTopics: Topic[] = [
  {
    id: 'fundamentals',
    name: 'Fundamentals of Nursing',
    icon: 'stethoscope',
    description: 'Covers core nursing skills, patient safety, infection control, and vital signs.',
    questionCount: 33,
    difficulty: 'hard',
    questions: fundamentals,
  },
  {
    id: 'pharmacology',
    name: 'Pharmacology & Meds',
    icon: 'pill',
    description: 'Test your knowledge of medications, drug actions, side effects, and dosage calculations.',
    questionCount: 23,
    difficulty: 'hard',
    questions: pharmacology,
  },
  {
    id: 'medical-surgical',
    name: 'Medical-Surgical Nursing',
    icon: 'heartPulse',
    description: 'Focuses on adult patients with acute and chronic illnesses.',
    questionCount: 58,
    difficulty: 'hard',
    questions: medicalSurgical,
  },
  {
    id: 'mental-health',
    name: 'Mental Health Nursing',
    icon: 'brain',
    description: 'Explore psychiatric conditions, therapeutic communication, and de-escalation techniques.',
    questionCount: 15,
    difficulty: 'easy',
    questions: mentalHealth,
  },
  {
    id: 'maternity-paediatric',
    name: 'Maternity & Paediatric',
    icon: 'baby',
    description: 'Questions on pregnancy, childbirth, newborn care, and pediatric nursing.',
    questionCount: 15,
    difficulty: 'easy',
    questions: maternityPaediatric,
  },
  {
    id: 'maternity-child-quest',
    name: 'Maternity & Child Quest',
    icon: 'baby',
    description: 'A quiz covering key topics in maternity and child health.',
    questionCount: 35,
    difficulty: 'hard',
    questions: maternityChildQuest,
  },
  {
    id: 'nz-nursing-context',
    name: 'NZ Nursing Context',
    icon: 'bookMarked',
    description: 'Covers cultural safety, ethics, and legal frameworks specific to nursing in New Zealand.',
    questionCount: 136,
    difficulty: 'hard',
    questions: nzNursingContext,
  },
  {
    id: 'most-repeated-questions',
    name: 'Most Repeated Questions',
    icon: 'repeat',
    description: 'Challenge yourself with a set of frequently asked questions covering critical nursing topics.',
    questionCount: 21,
    difficulty: 'hard',
    questions: mostRepeatedQuestions,
  },
  {
    id: 'most-repeated-questions-b',
    name: 'Most Repeated Questions Part B',
    icon: 'repeat',
    description: 'A second set of frequently asked questions covering critical nursing topics.',
    questionCount: 59,
    difficulty: 'hard',
    questions: mostRepeatedQuestionsB,
  },
  {
    id: 'mental-health-iqn',
    name: 'Mental Health IQN',
    icon: 'brain',
    description: 'A comprehensive set of questions focusing on various aspects of mental health nursing.',
    questionCount: 80,
    difficulty: 'hard',
    questions: mentalHealthIqn,
  },
  {
    id: 'cardiology-quest-iqn',
    name: 'Cardiology Quest IQN',
    icon: 'heartPulse',
    description: 'A comprehensive quiz on cardiology topics.',
    questionCount: 80,
    difficulty: 'hard',
    questions: cardiologyQuestIqn,
  },
  {
    id: 'gastro-quest-iqn',
    name: 'Gastro Quest IQN',
    icon: 'stethoscope',
    description: 'A comprehensive quiz on gastroenterology nursing topics.',
    questionCount: 135,
    difficulty: 'hard',
    questions: gastroQuestIqn,
  }
];
