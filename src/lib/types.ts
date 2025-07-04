
export interface Question {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Topic {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  questions: Question[];
  questionCount: number;
  difficulty: 'easy' | 'hard';
}

export type UserAnswer = {
  questionId: number;
  answerIndex: number | null;
  isCorrect: boolean;
};

export interface Flashcard {
  term: string;
  definition: string;
}

export interface FlashcardTopic {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  cards: Flashcard[];
}
