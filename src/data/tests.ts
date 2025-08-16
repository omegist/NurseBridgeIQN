
import { allQuestions } from './questions';
import { questions as partATest1 } from './questions/part-a-test-1';
import type { Test } from '@/lib/types';

// Seeded shuffle for consistency across builds
function seededShuffle<T>(array: T[], seed: number): T[] {
  let currentIndex = array.length, randomIndex;
  const pseudoRandom = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  const newArray = [...array];

  while (currentIndex !== 0) {
    randomIndex = Math.floor(pseudoRandom() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
  }
  return newArray;
}

const partBShuffledQuestions = seededShuffle(allQuestions, 12345); // Use a fixed seed for deterministic shuffle

const partATests: Test[] = [
  { id: 'part-a-test-1', name: 'Medication Calculation Test', timeLimitMinutes: 30, questions: partATest1 }
];

const partBTestsData: Omit<Test, 'questions'>[] = [
  { id: 'test-1', name: 'Test 1', timeLimitMinutes: 145 },
  { id: 'test-2', name: 'Test 2', timeLimitMinutes: 145 },
  { id: 'test-3', name: 'Test 3', timeLimitMinutes: 145 },
  { id: 'test-4', name: 'Test 4', timeLimitMinutes: 145 },
  { id: 'test-5', name: 'Test 5', timeLimitMinutes: 145 },
  { id: 'test-6', name: 'Test 6', timeLimitMinutes: 145 },
  { id: 'test-7', name: 'Test 7', timeLimitMinutes: null }, // No time limit
];

const partBTests: Test[] = partBTestsData.map((testInfo, index) => {
  if (index < 6) {
    // Tests 1-6 have 108 questions each
    const startIndex = index * 108;
    const endIndex = startIndex + 108;
    return {
      ...testInfo,
      questions: partBShuffledQuestions.slice(startIndex, endIndex),
    };
  } else {
    // Test 7 has the remaining 42 questions
    const startIndex = 6 * 108;
    return {
      ...testInfo,
      questions: partBShuffledQuestions.slice(startIndex),
    };
  }
});

export const tests = {
  partA: partATests,
  partB: partBTests
};
