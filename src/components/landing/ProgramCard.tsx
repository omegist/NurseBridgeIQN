"use client";

import { topics } from "@/data/topics";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn, iconMap } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, BookOpen, RotateCw, Check } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState, useCallback } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase"; // ✅ FIXED IMPORT
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";

async function getTopicProgress(userId: string) {
  if (!db) return {};

  const progressData: Record<string, number> = {};
  const progressCollectionRef = collection(db, `users/${userId}/quizProgress`);
  const q = query(progressCollectionRef, where("userId", "==", userId));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const topicId = doc.id;
    const topic = topics.find((t) => t.id === topicId);

    if (topic) {
      if (data.completed) {
        progressData[topicId] = 100;
      } else {
        const userAnswers = data.userAnswers || [];
        const totalQuestions = topic.questionCount || 0;
        if (totalQuestions > 0) {
          const answeredCount = userAnswers.filter(
            (answer: null | number) => answer !== null
          ).length;
          progressData[topicId] =
            (answeredCount / totalQuestions) * 100;
        }
      }
    }
  });

  return progressData;
}

export default function TopicsPage() {
  const { user } = useAuth();
  const [topicProgress, setTopicProgress] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchProgress = useCallback(async () => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const progress = await getTopicProgress(user.uid);
      setTopicProgress(progress);
    } catch (error) {
      console.error(
        "Error fetching topic progress. This could be a Firestore security rules issue.",
        error
      );
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const getTopicStatus = (topicId: string, progress: number) => {
    if (progress === 100)
      return { text: "Completed", icon: Check, color: "text-green-500" };
    if (progress > 0)
      return {
        text: `In Progress (${Math.round(progress)}%)`,
        icon: RotateCw,
        color: "text-yellow-500",
      };
    return { text: "Not Started", icon: BookOpen, color: "text-muted-foreground" };
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold font-headline text-center mb-2 text-foreground">
            Select a Quiz Topic
          </h1>
          <p className="text-muted-foreground text-center mb-10">
            Choose a category to test your knowledge and track your progress.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading &&
            Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="flex flex-col justify-between rounded-2xl shadow-lg bg-card/80 dark:bg-card border-border/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-lg bg-muted" />
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-48 bg-muted" />
                      <Skeleton className="h-4 w-32 bg-muted" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Skeleton className="h-4 w-full bg-muted" />
                  <Skeleton className="h-4 w-3/4 bg-muted" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-full bg-muted" />
                </CardFooter>
              </Card>
            ))}

          {!isLoading &&
            topics.map((topic, index) => {
              const Icon = iconMap[topic.icon];
              const progress = topicProgress[topic.id] || 0;
              const status = getTopicStatus(topic.id, progress);
              const StatusIcon = status.icon;

              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex"
                >
                  <Card className="w-full flex flex-col justify-between rounded-2xl shadow-lg bg-card/80 dark:bg-card border-border/20 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card">
                    <div>
                      <CardHeader className="flex-col items-start space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="font-headline text-xl text-card-foreground">
                              {topic.name}
                            </CardTitle>
                            <span className={cn("text-xs font-medium flex items-center gap-1", status.color)}>
                              <StatusIcon className="w-3.5 h-3.5" />
                              {status.text}
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground mb-4">{topic.description}</CardDescription>
                        <div className="flex justify-between items-center text-muted-foreground text-sm">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            <span>{topic.questionCount} questions</span>
                          </div>
                          <div className="flex items-center gap-2 capitalize">
                            <Clock className="w-4 h-4" />
                            <span>{topic.difficulty}</span>
                          </div>
                        </div>
                        {progress > 0 && (
                          <div className="mt-4">
                            <Progress value={progress} className="h-2 bg-muted" />
                          </div>
                        )}
                      </CardContent>
                    </div>
                    <CardFooter>
                      <Button asChild className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold">
                        <Link href={`/quiz/${topic.id}`}>
                          {progress > 0 && progress < 100 ? "Continue Quiz" : "Start Quiz"}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
        </div>
      </div>
    </>
  );
}