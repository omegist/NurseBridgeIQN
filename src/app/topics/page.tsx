
"use client"

import { topics } from "@/data/topics"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Clock, BookOpen, FlaskConical, RotateCw, Check } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { useEffect, useState } from "react"
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"

export default function TopicsPage() {
  const { user } = useAuth();
  const [topicProgress, setTopicProgress] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProgress() {
      if (!user) {
        setIsLoading(false);
        return;
      }

      try {
        const progressData: Record<string, number> = {};

        // Create a list of promises for each topic's progress document
        const promises = topics.map(topic => 
            getDoc(doc(db, "users", user.uid, "quizProgress", topic.id))
        );

        // Fetch all progress documents in parallel
        const docSnapshots = await Promise.all(promises);

        docSnapshots.forEach((docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            const topicId = data.topicId;
            const topic = topics.find(t => t.id === topicId);
            if (topic) {
                // NEW: Check for the 'completed' flag first.
                if (data.completed === true) {
                    progressData[topicId] = 100;
                } else {
                    const userAnswers = data.userAnswers || [];
                    const totalQuestions = topic.questionCount || 0;
                    if (totalQuestions > 0) {
                        const answeredCount = userAnswers.filter((answer: null | number) => answer !== null).length;
                        const percentage = (answeredCount / totalQuestions) * 100;
                        progressData[topicId] = percentage;
                    }
                }
            }
          }
        });

        setTopicProgress(progressData);
      } catch (error) {
        console.error("Error fetching topic progress. This is likely a Firestore security rules issue.", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProgress();
  }, [user]);

  return (
    <div className="container mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold font-headline text-center mb-2">
          Choose a Topic
        </h1>
        <p className="text-muted-foreground text-center mb-10">
          Select a category to start your quiz. You can resume any topic you've already started.
        </p>
      </motion.div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
             <div key={index} className="bg-card rounded-2xl shadow-lg p-6 flex flex-col w-full border border-border/20">
                <div className="flex justify-between items-start mb-4">
                    <Skeleton className="h-12 w-12 rounded-lg" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                </div>
                <div className="flex-grow">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2 mb-3" />
                    <Skeleton className="h-10 w-full" />
                </div>
                 <div className="mt-auto pt-4">
                    <div className="flex justify-between items-center text-muted-foreground text-sm mb-6 border-t pt-4">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-5 w-16" />
                    </div>
                    <Skeleton className="h-12 w-full rounded-lg" />
                </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => {
            const progress = topicProgress[topic.id] || 0;
            const isCompleted = progress === 100;
            const hasStarted = progress > 0;

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <div className="bg-card rounded-2xl shadow-lg p-6 flex flex-col w-full border border-border/20 hover:border-accent transition-all duration-300 group">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <topic.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <span className={cn(
                                "px-3 py-1 text-xs font-semibold rounded-full capitalize",
                                topic.difficulty === 'easy' 
                                    ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300' 
                                    : 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
                            )}>
                                {topic.difficulty}
                            </span>
                             {isCompleted && (
                                <motion.span 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="px-3 py-1 text-xs font-semibold rounded-full capitalize bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 flex items-center gap-1">
                                    <Check className="w-4 h-4" />
                                    Completed
                                </motion.span>
                           )}
                        </div>
                    </div>

                    <div className="flex-grow">
                        <h2 className="font-headline text-xl font-bold mb-1 group-hover:text-accent transition-colors">{topic.name}</h2>
                        <p className="text-sm text-muted-foreground mb-3">from {topic.name}</p>
                        <p className="text-sm text-muted-foreground">{topic.description}</p>
                    </div>

                    <div className="mt-auto pt-4">
                        <div className="flex justify-between items-center text-muted-foreground text-sm mb-4 border-t pt-4">
                            <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                <span>{topic.questionCount} questions</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{topic.questionCount * 2} min</span>
                            </div>
                        </div>

                        {hasStarted && !isCompleted && (
                          <div className="space-y-2 mb-6">
                            <Progress value={progress} />
                            <p className="text-xs text-muted-foreground text-center">{Math.round(progress)}% complete</p>
                          </div>
                        )}
                        
                         <Link href={`/quiz/${topic.id}`} className="w-full text-center py-3 px-6 rounded-lg text-white font-bold bg-gradient-to-r from-violet-600 to-teal-500 hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 flex items-center justify-center gap-2">
                            {isCompleted ? (
                                <>
                                  <span>Retake Quiz</span>
                                  <RotateCw className="w-5 h-5" />
                                </>
                            ) : hasStarted ? (
                                <>
                                  <span>Resume Quiz</span>
                                  <FlaskConical className="w-5 h-5" />
                                </>
                            ) : (
                                <>
                                  <span>Start Quiz</span>
                                  <FlaskConical className="w-5 h-5" />
                                </>
                            )}
                        </Link>
                    </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      )}
    </div>
  )
}
