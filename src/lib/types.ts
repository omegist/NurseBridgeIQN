/** --------------------------------------------------------------------
 *  Core shared types for the NurseBridgeIQN app
 *  ------------------------------------------------------------------ */

export type Difficulty = 'easy' | 'medium' | 'hard';

/* ────────────────────────────────────────────────────────────────────
 *  Small helpers
 * ────────────────────────────────────────────────────────────────────*/

/** One answer selected by the user for a single MCQ question.
 *  - `number` is the chosen option index (0‑based)
 *  - `null` means the question was not answered yet
 */
export type UserAnswer = number | null;

/* ────────────────────────────────────────────────────────────────────
 *  Quiz questions
 * ────────────────────────────────────────────────────────────────────*/
export interface Question {
  id: string;
  /** The actual question text */
  text: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

/* ────────────────────────────────────────────────────────────────────
 *  Topics (quizzes)
 * ────────────────────────────────────────────────────────────────────*/
export interface Topic {
  id: string;
  name: string;
  icon: string;          // Lucide icon key
  description: string;
  questions: Question[];
  difficulty?: Difficulty;
  questionCount: number;
}

/* ────────────────────────────────────────────────────────────────────
 *  Flashcards
 * ────────────────────────────────────────────────────────────────────*/
export interface Flashcard {
  id: string;
  prompt: string;
  answer: string;
}

export interface FlashcardTopic {
  id: string;
  name: string;
  icon: string;
  description: string;
  flashcards: Flashcard[];
  difficulty?: Difficulty;
}

/** Alias used by FlashcardClient and page components */
export type SerializableFlashcardTopic = FlashcardTopic;

/* ────────────────────────────────────────────────────────────────────
 *  Tests / mock exams
 * ────────────────────────────────────────────────────────────────────*/
export interface Test {
  id: string;
  name: string;
  timeLimitMinutes?: number | null;   // optional
  questions: Question[];
}
