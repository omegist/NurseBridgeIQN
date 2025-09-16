
import { allQuestions } from './questions';
import { questions as partATest1 } from './questions/part-a-test-1';
import { questions as partATest2 } from './questions/part-a-test-2';
import { questions as partATest3 } from './questions/part-a-test-3';
import { questions as partATest4 } from './questions/part-a-test-4';
import { questions as partATest5 } from './questions/part-a-test-5';
import { questions as partATest6 } from './questions/part-a-test-6';
import { questions as partBTest8 } from './questions/part-b-test-8';
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
  { id: 'part-a-test-1', name: 'Medication Calculation Test 1', timeLimitMinutes: 30, questions: partATest1 },
  { id: 'part-a-test-2', name: 'Medication Calculation Test 2', timeLimitMinutes: 30, questions: partATest2 },
  { id: 'part-a-test-3', name: 'Medication Calculation Test 3', timeLimitMinutes: 30, questions: partATest3 },
  { id: 'part-a-test-4', name: 'Medication Calculation Test 4', timeLimitMinutes: 30, questions: partATest4 },
  { id: 'part-a-test-5', name: 'Medication Calculation Test 5', timeLimitMinutes: 30, questions: partATest5 },
  { id: 'part-a-test-6', name: 'Medication Calculation Test 6', timeLimitMinutes: 30, questions: partATest6 },
];

const partBTestsData: Omit<Test, 'questions'>[] = [
  { id: 'test-1', name: 'Test 1', timeLimitMinutes: 145 },
  { id: 'test-2', name: 'Test 2', timeLimitMinutes: 145 },
  { id: 'test-3', name: 'Test 3', timeLimitMinutes: 145 },
  { id: 'test-4', name: 'Test 4', timeLimitMinutes: 145 },
  { id: 'test-5', name: 'Test 5', timeLimitMinutes: 145 },
  { id: 'test-6', name: 'Test 6', timeLimitMinutes: 145 },
  { id: 'test-7', name: 'Test 7', timeLimitMinutes: null }, // No time limit
  { id: 'test-8', name: 'Test 8', timeLimitMinutes: 60 },
];

const partBTests: Test[] = partBTestsData.map((testInfo, index) => {
  if (testInfo.id === 'test-8') {
    return {
      ...testInfo,
      questions: partBTest8
    };
  }
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
    const endIndex = startIndex + 42; // Test 7 has 42 questions
    return {
      ...testInfo,
      questions: partBShuffledQuestions.slice(startIndex, endIndex),
    };
  }
});

export const tests = {
  partA: partATests,
  partB: partBTests
};
