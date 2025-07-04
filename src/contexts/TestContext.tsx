
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
      const progressRef = doc(db, 'users', user.uid, 'testProgress', test.id);
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
        const progressRef = doc(db, 'users', user.uid, 'testProgress', selectedTest.id);
        const progressSnap = await getDoc(progressRef);
        
        if (progressSnap.exists() && !progressSnap.data().completed) {
            const progress = progressSnap.data();
            setUserAnswers(progress.userAnswers || []);
            setCurrentQuestionIndex(progress.currentQuestionIndex || 0);

            const initialVisited = new Array(selectedTest.questions.length).fill(false);
            (progress.userAnswers || []).forEach((ans: number | null, index: number) => {
              if(ans !== null) initialVisited[index] = true;
            });
            initialVisited[progress.currentQuestionIndex || 0] = true;
            setVisitedQuestions(initialVisited);
        } else { 
            const newAnswers = new Array(selectedTest.questions.length).fill(null)
            setUserAnswers(newAnswers);
            setCurrentQuestionIndex(0);
            const initialVisited = new Array(selectedTest.questions.length).fill(false);
            initialVisited[0] = true;
            setVisitedQuestions(initialVisited);
            if(progressSnap.exists() && progressSnap.data().completed){
                await setDoc(progressRef, {
                    userAnswers: newAnswers,
                    currentQuestionIndex: 0,
                    updatedAt: new Date(),
                    completed: false,
                }, { merge: true });
            }
        }
    } else {
        setUserAnswers(new Array(selectedTest.questions.length).fill(null));
        setCurrentQuestionIndex(0);
        const initialVisited = new Array(selectedTest.questions.length).fill(false);
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
