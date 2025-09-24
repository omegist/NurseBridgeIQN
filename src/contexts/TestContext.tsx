
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
  testDuration: number;
  setTestDuration: (duration: number) => void;
}

const TestContext = createContext<TestContextType | undefined>(undefined)

export function TestProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [test, setTest] = useState<Test | null>(null)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [testStarted, setTestStarted] = useState(false)
  const [visitedQuestions, setVisitedQuestions] = useState<boolean[]>([])
  const [testDuration, setTestDuration] = useState(0);

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

    if (user) {
        const progressRef = doc(db, "users", user.uid, "testProgress", selectedTest.id);
        try {
            const progressSnap = await getDoc(progressRef);
            let answersToSet;
            let indexToSet = 0;

            // ✅ Force reset for the specified user to clear corrupted data
            if (user.email === "hrishikeshchavan13@gmail.com") {
                answersToSet = new Array(selectedTest.questions.length).fill(null);
                await setDoc(progressRef, { 
                    userId: user.uid,
                    testId: selectedTest.id, 
                    userAnswers: answersToSet, 
                    currentQuestionIndex: 0, 
                    completed: false,
                    completedCount: 0, // Force reset to 0
                    updatedAt: new Date()
                }, { merge: true });
            } else if (progressSnap.exists()) {
                 // For other users, if they retake a completed test, reset it.
                 const data = progressSnap.data();
                 if (data.completed) {
                    answersToSet = new Array(selectedTest.questions.length).fill(null);
                    await setDoc(progressRef, { 
                        userAnswers: answersToSet, 
                        currentQuestionIndex: 0, 
                        completed: false,
                        completedCount: data.completedCount || 0, // Keep old count to be incremented on next completion
                        updatedAt: new Date()
                    }, { merge: true });
                 } else {
                    answersToSet = data.userAnswers || new Array(selectedTest.questions.length).fill(null);
                    indexToSet = data.currentQuestionIndex || 0;
                 }
            } else {
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
    setTestDuration(0);
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
        testDuration,
        setTestDuration,
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
