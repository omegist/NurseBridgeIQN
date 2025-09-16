
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { flashcardTopics } from "@/data/flashcards";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Repeat } from "lucide-react";
import { cn, iconMap } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { Header } from "@/components/layout/Header";
import { useAuth } from "@/contexts/AuthContext";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useState, useEffect, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";

async function getFlashcardAttempts(userId: string) {
  if (!db) return {};

  const attemptsData: Record<string, number> = {};
  const attemptsCollectionRef = collection(db, `users/${userId}/flashcardProgress`);
  const q = query(attemptsCollectionRef);

  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      attemptsData[doc.id] = doc.data().completedCount || 0;
    });
  } catch (error) {
    console.error("Failed to fetch flashcard attempts:", error);
  }

  return attemptsData;
}


export default function FlashcardsPage() {
  const { theme } = useTheme();
  const { user } = useAuth();
  const [flashcardAttempts, setFlashcardAttempts] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchAttempts = useCallback(async () => {
    if (!user) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    try {
      const attempts = await getFlashcardAttempts(user.uid);
      setFlashcardAttempts(attempts);
    } catch (error) {
      console.error("Error fetching flashcard attempts:", error);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchAttempts();
  }, [fetchAttempts]);


  const cardColors = [
    { gradient: 'topic-gradient-1', iconBg: 'bg-blue-400', iconColor: 'text-white' },
    { gradient: 'topic-gradient-2', iconBg: 'bg-green-400', iconColor: 'text-white' },
    { gradient: 'topic-gradient-3', iconBg: 'bg-purple-400', iconColor: 'text-white' },
    { gradient: 'topic-gradient-4', iconBg: 'bg-orange-400', iconColor: 'text-white' },
    { gradient: 'topic-gradient-5', iconBg: 'bg-pink-400', iconColor: 'text-white' },
    { gradient: 'topic-gradient-6', iconBg: 'bg-lime-400', iconColor: 'text-white' },
  ];

  return (
    <>
      <Header />
      <div className="container mx-auto py-10 px-4 min-h-[calc(100vh-4rem)]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold font-headline text-center mb-2 text-foreground">
            Flashcard Topics
          </h1>
          <p className="text-muted-foreground text-center mb-10">
            Select a topic to start reviewing key concepts and facts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading && Array.from({ length: 6 }).map((_, i) => (
             <Card key={i} className="flex flex-col justify-between rounded-2xl shadow-lg bg-card/80 dark:bg-card border-border/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-lg bg-muted" />
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-48 bg-muted" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Skeleton className="h-4 w-full bg-muted" />
                </CardContent>
                <CardContent>
                   <Skeleton className="h-10 w-full bg-muted" />
                </CardContent>
              </Card>
          ))}

          {!isLoading && flashcardTopics.map((topic, index) => {
            const Icon = iconMap[topic.icon] ?? (() => null);
            const colorInfo = cardColors[index % cardColors.length];
            const attempts = flashcardAttempts[topic.id] || 0;

            if (theme === 'light') {
              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex"
                >
                  <Card className={cn("w-full flex flex-col justify-between rounded-2xl glass-card", colorInfo.gradient)}>
                     <div>
                        <CardHeader className="flex-row items-center gap-4 space-y-0">
                           <div className={cn("p-3 rounded-lg", colorInfo.iconBg)}>
                            <Icon className={cn("w-7 h-7", colorInfo.iconColor)} />
                          </div>
                          <CardTitle className="font-headline text-xl text-foreground">
                            {topic.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-foreground/80">{topic.description}</CardDescription>
                           <div className="flex items-center gap-2 text-foreground/70 text-sm mt-4">
                              <Repeat className="w-4 h-4" />
                              <span>{attempts} {attempts === 1 ? 'review' : 'reviews'}</span>
                            </div>
                        </CardContent>
                      </div>
                    <CardContent>
                       <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                        <Link href={`/flashcards/${topic.id}`}>
                          {attempts > 0 ? "Review Again" : "Start Reviewing"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            }

            // Dark theme card
            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <Card className="w-full flex flex-col justify-between rounded-2xl shadow-lg bg-card/80 dark:bg-card border-border/20 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 relative">
                  <div>
                    <CardHeader className="flex-row items-center gap-4 space-y-0">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-7 h-7 text-primary animated-icon" />
                      </div>
                      <CardTitle className="font-headline text-xl text-card-foreground">
                        {topic.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">{topic.description}</CardDescription>
                       <div className="flex items-center gap-2 text-muted-foreground text-sm mt-4">
                          <Repeat className="w-4 h-4" />
                          <span>{attempts} {attempts === 1 ? 'review' : 'reviews'}</span>
                        </div>
                    </CardContent>
                  </div>
                  <CardContent>
                    <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                      <Link href={`/flashcards/${topic.id}`}>
                         {attempts > 0 ? "Review Again" : "Start Reviewing"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
