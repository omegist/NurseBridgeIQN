
"use client"

import React, { createContext, useContext, useState, ReactNode, useCallback } from "react"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import type { Test } from "@/lib/types"
import { useAuth } from "./AuthContext"

interface TestContextType {
  test: Test | null;
  setTest: (test: Test | null) => void;
  userAnswers: (number | null)[];
  setUserAnswers: React.Dispatch<React.SetStateAction<(number | null)[]>>;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  testStarted: boolean;
  startTest: (test: Test) => Promise<void>;
  resetTest: () => void;
  visitedQuestions: boolean[];
  setVisitedQuestions: React.Dispatch<React.SetStateAction<boolean[]>>;
  saveProgress: (answers: (number | null)[], currentIndex: number) => Promise<void>;
  testStartTime: number | null;
  setTestStartTime: (time: number | null) => void;
}

const TestContext = createContext<TestContextType | undefined>(undefined)

export function TestProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [test, setTest] = useState<Test | null>(null)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [testStarted, setTestStarted] = useState(false)
  const [visitedQuestions, setVisitedQuestions] = useState<boolean[]>([])
  const [testStartTime, setTestStartTime] = useState<number | null>(null);

  const saveProgress = useCallback(async (answers: (number | null)[], currentIndex: number) => {
    if (user && test) {
      const progressRef = doc(db, "users", user.uid, "testProgress", test.id);
      await setDoc(progressRef, {
        userId: user.uid,
        testId: test.id,
        userAnswers: answers,
        currentQuestionIndex: currentIndex,
        updatedAt: new Date(),
        completed: false,
      }, { merge: true });
    }
  }, [user, test]);

  const startTest = useCallback(async (selectedTest: Test) => {
    setTestStarted(true);
    setTest(selectedTest);
    setTestStartTime(Date.now());

    if (user) {
        const progressRef = doc(db, "users", user.uid, "testProgress", selectedTest.id);
        try {
            const progressSnap = await getDoc(progressRef);
            let answersToSet;
            let indexToSet = 0;

            if (progressSnap.exists()) {
                 const data = progressSnap.data();
                 if (data.completed) {
                    // This is a retake, so reset the progress fully.
                    answersToSet = new Array(selectedTest.questions.length).fill(null);
                    await setDoc(progressRef, { 
                        userAnswers: answersToSet, 
                        currentQuestionIndex: 0, 
                        completed: false,
                        // Resetting the count for a retake.
                        completedCount: 0, 
                        updatedAt: new Date()
                    }, { merge: true });
                 } else {
                    // Resuming an in-progress test.
                    answersToSet = data.userAnswers || new Array(selectedTest.questions.length).fill(null);
                    indexToSet = data.currentQuestionIndex || 0;
                 }
            } else {
                 // First time taking this test.
                 answersToSet = new Array(selectedTest.questions.length).fill(null);
            }

            setUserAnswers(answersToSet);
            setCurrentQuestionIndex(indexToSet);

            const initialVisited = new Array(selectedTest.questions.length).fill(false);
            if (answersToSet) {
              answersToSet.forEach((ans: number | null, index: number) => {
                if (ans !== null) initialVisited[index] = true;
              });
            }
            initialVisited[indexToSet] = true;
            setVisitedQuestions(initialVisited);

        } catch (error) {
            console.error("Error loading test progress, starting fresh:", error);
            const newAnswers = new Array(selectedTest.questions.length).fill(null);
            setUserAnswers(newAnswers);
            setCurrentQuestionIndex(0);
            const initialVisited = new Array(selectedTest.questions.length).fill(false);
            initialVisited[0] = true;
            setVisitedQuestions(initialVisited);
        }
    } else {
        // Fallback for non-logged-in users
        const newAnswers = new Array(selectedTest.questions.length).fill(null);
        setUserAnswers(newAnswers);
        setCurrentQuestionIndex(0);
        const initialVisited = new Array(selectedTest.questions.length).fill(null);
        initialVisited[0] = true;
        setVisitedQuestions(initialVisited);
    }
  }, [user]);

  const resetTest = useCallback(() => {
    setTest(null)
    setUserAnswers([])
    setCurrentQuestionIndex(0)
    setTestStarted(false)
    setVisitedQuestions([])
    setTestStartTime(null);
  }, [])

  return (
    <TestContext.Provider
      value={{
        test,
        setTest,
        userAnswers,
        setUserAnswers,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        testStarted,
        startTest,
        resetTest,
        visitedQuestions,
        setVisitedQuestions,
        saveProgress,
        testStartTime,
        setTestStartTime,
      }}
    >
      {children}
    </TestContext.Provider>
  )
}

export function useTest() {
  const context = useContext(TestContext)
  if (context === undefined) {
    throw new Error("useTest must be used within a TestProvider")
  }
  return context
}
