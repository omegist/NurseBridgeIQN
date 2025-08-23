
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
import { Clock, BookOpen, RotateCw, Check, Lock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState, useCallback } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { usePayment } from "@/hooks/usePayment";

async function getTopicProgress(userId: string) {
  if (!db) return {};

  const progressData: Record<string, number> = {};
  const progressCollectionRef = collection(db, `users/${userId}/quizProgress`);
  const q = query(progressCollectionRef, where("userId", "==", userId));

  try {
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
  } catch (error) {
     console.error("Failed to fetch topic progress:", error);
  }
  return progressData;
}

export function TopicGrid() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const [topicProgress, setTopicProgress] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);
  const { openPaymentDialog } = usePayment();

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
      console.error("Error fetching topic progress:", error);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const handleTopicClick = (e: React.MouseEvent) => {
    if (user && !user.isPaid) {
      e.preventDefault();
      openPaymentDialog();
    }
  };

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

  const topicColors = [
    { gradient: 'topic-gradient-1', iconBg: 'bg-blue-400', iconColor: 'text-white' },
    { gradient: 'topic-gradient-2', iconBg: 'bg-green-400', iconColor: 'text-white' },
    { gradient: 'topic-gradient-3', iconBg: 'bg-purple-400', iconColor: 'text-white' },
    { gradient: 'topic-gradient-4', iconBg: 'bg-orange-400', iconColor: 'text-white' },
    { gradient: 'topic-gradient-5', iconBg: 'bg-pink-400', iconColor: 'text-white' },
    { gradient: 'topic-gradient-6', iconBg: 'bg-lime-400', iconColor: 'text-white' },
  ];

  return (
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
          const colorInfo = topicColors[index % topicColors.length];
          const isLocked = user && !user.isPaid;

          const CardContentComponent = () => (
            <Card className="w-full flex flex-col justify-between rounded-2xl shadow-lg bg-card/80 dark:bg-card border-border/20 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 relative">
              {isLocked && (
                <div className="absolute inset-0 bg-black/60 rounded-2xl flex flex-col items-center justify-center z-10 p-4">
                  <Lock className="w-12 h-12 text-white mb-2" />
                  <span className="text-white font-bold text-lg mb-4">₹2000</span>
                  <Button onClick={handleTopicClick} className="w-full bg-accent hover:bg-accent/90">
                    Unlock Full App
                  </Button>
                </div>
              )}
              <div>
                <CardHeader className="flex-row items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-8 h-8 text-primary animated-icon" />
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
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 min-h-[40px]">{topic.description}</CardDescription>
                  <div className="flex justify-between items-center text-muted-foreground text-sm mb-4">
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
                <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  <Link href={`/quiz/${topic.id}`} onClick={isLocked ? handleTopicClick : undefined} className={isLocked ? "pointer-events-none" : ""}>
                    {progress > 0 && progress < 100 ? "Continue Quiz" : "Start Quiz"}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );

          if (theme === 'light') {
            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div onClick={isLocked ? handleTopicClick : undefined} className="relative block cursor-pointer">
                  {isLocked && (
                    <div className="absolute inset-0 bg-black/60 rounded-2xl flex flex-col items-center justify-center z-10 p-4">
                      <Lock className="w-12 h-12 text-white mb-2" />
                      <span className="text-white font-bold text-lg mb-4">₹2000</span>
                      <Button onClick={handleTopicClick} className="w-full bg-accent hover:bg-accent/90">
                        Unlock Full App
                      </Button>
                    </div>
                  )}
                  <Link href={isLocked ? '#' : `/quiz/${topic.id}`} className={isLocked ? 'pointer-events-none' : ''}>
                    <Card className={cn("glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center h-48", colorInfo.gradient)}>
                      <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-4", colorInfo.iconBg)}>
                        <Icon className={cn("w-8 h-8", colorInfo.iconColor)} />
                      </div>
                      <h3 className="font-semibold text-foreground">{topic.name}</h3>
                    </Card>
                  </Link>
                </div>
              </motion.div>
            )
          }

          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <CardContentComponent />
            </motion.div>
          );
        })}
    </div>
  );
}
