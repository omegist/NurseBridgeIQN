
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, ArrowRight, Clock, Repeat } from "lucide-react";
import type { Test } from "@/lib/types";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState, useCallback } from "react";
import { collection, query, getDocs, where, doc, writeBatch } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";


interface TestsClientProps {
  tests: Test[];
}

async function getTestAttempts(userId: string) {
  if (!db) return {};

  const attemptsData: Record<string, number> = {};
  const progressCollectionRef = collection(db, `users/${userId}/testProgress`);
  const q = query(progressCollectionRef);

  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const count = data.completedCount;
        if (typeof count === 'number' && !isNaN(count) && count >= 0) {
            attemptsData[doc.id] = count;
        } else {
            attemptsData[doc.id] = 0;
        }
    });
  } catch (error) {
    console.error("Failed to fetch test attempts:", error);
  }

  return attemptsData;
}


export function TestsClient({ tests }: TestsClientProps) {
  const pathname = usePathname();
  const { user } = useAuth();
  const { theme } = useTheme();
  const [testAttempts, setTestAttempts] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);

  const isPartB = pathname?.includes('/part-b') ?? false;
  const title = isPartB ? "Test Part B" : "Medication Test";

  const fetchAttempts = useCallback(async () => {
    if (!user) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    
    try {
      const attempts = await getTestAttempts(user.uid);
      setTestAttempts(attempts);
    } catch (error) {
      console.error("Error fetching test attempts:", error);
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
    <div className="container mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold font-headline text-center mb-2 text-foreground">
          {title}
        </h1>
        <p className="text-muted-foreground text-center mb-10">
          Select a test to challenge your comprehensive nursing knowledge.
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
                  <Skeleton className="h-4 w-32 bg-muted" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full bg-muted" />
              <Skeleton className="h-4 w-2/3 bg-muted" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-full bg-muted" />
            </CardFooter>
          </Card>
        ))}

        {!isLoading && tests.map((test, index) => {
           const attempts = testAttempts[test.id] || 0;
           const colorInfo = cardColors[index % cardColors.length];
            if (theme === 'light') {
              return (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex"
                >
                  <Card className={cn("w-full flex flex-col justify-between rounded-2xl glass-card", colorInfo.gradient)}>
                     <Link href={`/test/${test.id}`} className="flex-grow">
                      <div>
                        <CardHeader className="flex-row items-center gap-4 space-y-0">
                          <div className={cn("p-3 rounded-lg", colorInfo.iconBg)}>
                            <ClipboardCheck className={cn("w-7 h-7", colorInfo.iconColor)} />
                          </div>
                          <CardTitle className="font-headline text-xl text-foreground">
                            {test.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-foreground/80 min-h-[40px]">
                            A comprehensive test covering multiple nursing topics.
                          </CardDescription>
                          <div className="flex flex-wrap justify-between items-center text-foreground/70 text-sm mt-4 border-t border-black/20 pt-4 gap-y-2">
                            <div className="flex items-center gap-2">
                              <ClipboardCheck className="w-4 h-4" />
                              <span>{test.questions.length} questions</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>
                                {test.timeLimitMinutes
                                  ? `${test.timeLimitMinutes} min limit`
                                  : "No time limit"}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Repeat className="w-4 h-4" />
                              <span>{attempts} {attempts === 1 ? 'attempt' : 'attempts'}</span>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                     </Link>
                    <CardFooter>
                       <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                        <Link href={`/test/${test.id}`}>
                          {attempts > 0 ? "Retake Test" : "Start Test"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )
            }
           return (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="w-full flex flex-col justify-between rounded-2xl shadow-lg bg-card/80 border-border/20 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-1">
                <div>
                  <CardHeader className="flex-row items-center gap-4 space-y-0">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <ClipboardCheck className="w-7 h-7 text-primary animated-icon" />
                    </div>
                    <CardTitle className="font-headline text-xl text-card-foreground">
                      {test.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground min-h-[40px]">
                      A comprehensive test covering multiple nursing topics.
                    </CardDescription>
                    <div className="flex justify-between items-center text-muted-foreground text-sm mt-4 border-t border-border/20 pt-4">
                      <div className="flex items-center gap-2">
                        <ClipboardCheck className="w-4 h-4" />
                        <span>{test.questions.length} questions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>
                          {test.timeLimitMinutes
                            ? `${test.timeLimitMinutes} min limit`
                            : "No time limit"}
                        </span>
                      </div>
                       <div className="flex items-center gap-2">
                        <Repeat className="w-4 h-4" />
                        <span>{attempts} {attempts === 1 ? 'attempt' : 'attempts'}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
                <CardContent>
                  <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    <Link href={`/test/${test.id}`}>
                      {attempts > 0 ? "Retake Test" : "Start Test"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
}

    

    