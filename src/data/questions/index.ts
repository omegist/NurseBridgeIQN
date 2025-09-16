
import { questions as fundamentals } from './fundamentals';
import { questions as pharmacology } from './pharmacology';
import { questions as medicalSurgical } from './medical-surgical';
import { questions as mentalHealth } from './mental-health';
import { questions as maternityPaediatric } from './maternity-paediatric';
import { questions as maternityChildQuest } from './maternity-child-quest';
import { questions as nzNursingContext } from './nz-nursing-context';
import { questions as mostRepeatedQuestions } from './most-repeated-questions';
import { questions as mostRepeatedQuestionsB } from './most-repeated-questions-b';
import { questions as mentalHealthIqn } from './mental-health-iqn';
import { questions as cardiologyQuestIqn } from './cardiology-quest-iqn';
import { questions as gastroQuestIqn } from './gastro-quest-iqn';
import { questions as partBTest8 } from './part-b-test-8';
import type { Question } from '@/lib/types';

export const allQuestions: Question[] = [
  ...fundamentals,
  ...pharmacology,
  ...medicalSurgical,
  ...mentalHealth,
  ...maternityPaediatric,
  ...maternityChildQuest,
  ...nzNursingContext,
  ...mostRepeatedQuestions,
  ...mostRepeatedQuestionsB,
  ...mentalHealthIqn,
  ...cardiologyQuestIqn,
  ...gastroQuestIqn,
  ...partBTest8,
];

    