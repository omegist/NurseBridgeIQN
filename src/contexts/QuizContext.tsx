
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
  quizDuration: number;
  setQuizDuration: (duration: number) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [topic, setTopic] = useState<Topic | null>(null)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)
  const [visitedQuestions, setVisitedQuestions] = useState<boolean[]>([])
  const [quizDuration, setQuizDuration] = useState(0);

  const saveProgress = useCallback(async (answers: (number | null)[], currentIndex: number) => {
    if (user && topic) {
      const progressRef = doc(db, "users", user.uid, "quizProgress", topic.id);
      await setDoc(progressRef, {
        userId: user.uid,
        topicId: topic.id,
        userAnswers: answers,
        currentQuestionIndex: currentIndex,
        updatedAt: new Date(),
        completed: false,
      }, { merge: true });
    }
  }, [user, topic]);

  const startQuiz = useCallback(async (selectedTopic: Topic) => {
    setQuizStarted(true);
    setTopic(selectedTopic);
    
    if (user) {
        const progressRef = doc(db, "users", user.uid, "quizProgress", selectedTopic.id);
        const progressSnap = await getDoc(progressRef);
        
        // Check if we are retaking a completed quiz
        if (progressSnap.exists() && progressSnap.data().completed) {
            // This is a retake. Reset the progress.
            const newAnswers = new Array(selectedTopic.questions.length).fill(null);
            await setDoc(progressRef, {
              userId: user.uid,
              topicId: selectedTopic.id,
              userAnswers: newAnswers,
              currentQuestionIndex: 0,
              updatedAt: new Date(),
              completed: false, // Mark as in-progress for the new attempt
            }, { merge: true });

            setUserAnswers(newAnswers);
            setCurrentQuestionIndex(0);
            const initialVisited = new Array(selectedTopic.questions.length).fill(false);
            initialVisited[0] = true;
            setVisitedQuestions(initialVisited);

        } else if (progressSnap.exists()) { // Resuming an in-progress quiz
            const progress = progressSnap.data();
            const savedAnswers = progress.userAnswers || [];

            // If the number of questions in the topic has changed, reset progress.
            if (savedAnswers.length !== selectedTopic.questions.length) {
              const newAnswers = new Array(selectedTopic.questions.length).fill(null);
              await setDoc(progressRef, {
                userAnswers: newAnswers,
                currentQuestionIndex: 0,
                updatedAt: new Date(),
                completed: false,
              }, { merge: true });

              setUserAnswers(newAnswers);
              setCurrentQuestionIndex(0);
              const initialVisited = new Array(selectedTopic.questions.length).fill(false);
              initialVisited[0] = true;
              setVisitedQuestions(initialVisited);
            } else {
              // Lengths match, so resume as normal
              setUserAnswers(savedAnswers);
              setCurrentQuestionIndex(progress.currentQuestionIndex || 0);

              const initialVisited = new Array(selectedTopic.questions.length).fill(false);
              (savedAnswers || []).forEach((ans: number | null, index: number) => {
                if(ans !== null) initialVisited[index] = true;
              });
              initialVisited[progress.currentQuestionIndex || 0] = true;
              setVisitedQuestions(initialVisited);
            }

        } else { // Starting a brand new quiz
            setUserAnswers(new Array(selectedTopic.questions.length).fill(null));
            setCurrentQuestionIndex(0);
            const initialVisited = new Array(selectedTopic.questions.length).fill(false);
            initialVisited[0] = true;
            setVisitedQuestions(initialVisited);
        }
    } else { // User not logged in (fallback)
        setUserAnswers(new Array(selectedTopic.questions.length).fill(null));
        setCurrentQuestionIndex(0);
        const initialVisited = new Array(selectedTopic.questions.length).fill(false);
        initialVisited[0] = true;
        setVisitedQuestions(initialVisited);
    }
  }, [user]);
  
  const resetQuiz = useCallback(() => {
    // This function is now mostly for leaving a quiz and returning to the topics list
    // or starting a completely new topic.
    setTopic(null)
    setUserAnswers([])
    setCurrentQuestionIndex(0)
    setQuizStarted(false)
    setVisitedQuestions([])
    setQuizDuration(0);
  }, [])

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
        quizDuration,
        setQuizDuration,
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
