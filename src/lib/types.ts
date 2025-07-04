
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

export type SerializableFlashcardTopic = Omit<FlashcardTopic, 'icon'>;

export interface Test {
  id: string;
  name: string;
  questions: Question[];
  timeLimitMinutes: number | null; // null for no time limit
}

export type SerializableTest = Omit<Test, 'icon'>;
