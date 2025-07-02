"use client"

import React, { createContext, useContext, useState, ReactNode, useCallback } from "react"
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import type { Topic, UserAnswer } from "@/lib/types"
import { useAuth } from "./AuthContext"

interface QuizContextType {
  topic: Topic | null;
  setTopic: (topic: Topic | null) => void;
  userAnswers: (number | null)[];
  setUserAnswers: React.Dispatch<React.SetStateAction<(number | null)[]>>;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  quizStarted: boolean;
  startQuiz: (topic: Topic) => Promise<void>;
  resetQuiz: () => void;
  visitedQuestions: boolean[];
  setVisitedQuestions: React.Dispatch<React.SetStateAction<boolean[]>>;
  saveProgress: (answers: (number | null)[], currentIndex: number) => Promise<void>;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [topic, setTopic] = useState<Topic | null>(null)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)
  const [visitedQuestions, setVisitedQuestions] = useState<boolean[]>([])

  const saveProgress = useCallback(async (answers: (number | null)[], currentIndex: number) => {
    if (user && topic) {
      const progressRef = doc(db, 'quizProgress', `${user.uid}_${topic.id}`);
      await setDoc(progressRef, {
        userId: user.uid,
        topicId: topic.id,
        userAnswers: answers,
        currentQuestionIndex: currentIndex,
        updatedAt: new Date(),
      }, { merge: true });
    }
  }, [user, topic]);

  const startQuiz = useCallback(async (selectedTopic: Topic) => {
    setQuizStarted(true);
    setTopic(selectedTopic);
    
    if (user) {
        const progressRef = doc(db, 'quizProgress', `${user.uid}_${selectedTopic.id}`);
        const progressSnap = await getDoc(progressRef);
        
        if (progressSnap.exists()) {
            const progress = progressSnap.data();
            setUserAnswers(progress.userAnswers || new Array(selectedTopic.questions.length).fill(null));
            setCurrentQuestionIndex(progress.currentQuestionIndex || 0);

            const initialVisited = new Array(selectedTopic.questions.length).fill(false);
            progress.userAnswers.forEach((ans: number | null, index: number) => {
              if(ans !== null) initialVisited[index] = true;
            });
            initialVisited[progress.currentQuestionIndex || 0] = true;
            setVisitedQuestions(initialVisited);

        } else {
            setUserAnswers(new Array(selectedTopic.questions.length).fill(null));
            setCurrentQuestionIndex(0);
            const initialVisited = new Array(selectedTopic.questions.length).fill(false);
            initialVisited[0] = true;
            setVisitedQuestions(initialVisited);
        }
    } else {
        setUserAnswers(new Array(selectedTopic.questions.length).fill(null));
        setCurrentQuestionIndex(0);
        const initialVisited = new Array(selectedTopic.questions.length).fill(false);
        initialVisited[0] = true;
        setVisitedQuestions(initialVisited);
    }
  }, [user]);
  
  const resetQuiz = useCallback(async () => {
    if (user && topic) {
      const progressRef = doc(db, 'quizProgress', `${user.uid}_${topic.id}`);
      await setDoc(progressRef, {
        userAnswers: new Array(topic.questions.length).fill(null),
        currentQuestionIndex: 0,
      }, { merge: true });
    }
    setTopic(null)
    setUserAnswers([])
    setCurrentQuestionIndex(0)
    setQuizStarted(false)
    setVisitedQuestions([])
  }, [user, topic])

  return (
    <QuizContext.Provider
      value={{
        topic,
        setTopic,
        userAnswers,
        setUserAnswers,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        quizStarted,
        startQuiz,
        resetQuiz,
        visitedQuestions,
        setVisitedQuestions,
        saveProgress,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  const context = useContext(QuizContext)
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider")
  }
  return context
}
