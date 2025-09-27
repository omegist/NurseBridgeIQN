
"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useTest } from "@/contexts/TestContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { CheckCircle, XCircle, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface TestResults {
  score: number;
  percentage: number;
  correctAnswers: number;
  incorrectAnswers: number;
  breakdown: {
    questionId: number | string;
    isCorrect: boolean;
    correctAnswer: string;
    userAnswer: string | null;
    question: string;
    options: string[];
    correctIndex: number;
    userAnswerIndex: number | null;
    originalExplanation?: string;
  }[];
}

export function TestResultsClient() {
  const router = useRouter();
  const { test, userAnswers, resetTest } = useTest();
  const { user, updateUserScore } = useAuth();

  const [results, setResults] = useState<TestResults | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useMemo(() => {
    if (!test || !user) {
      setIsLoading(false);
      return;
    }

    const calculateResults = async () => {
      let score = 0;
      let correctAnswers = 0;
      let incorrectAnswers = 0;

      const breakdown = test.questions.map((question, index) => {
        const userAnswerIndex = userAnswers[index];
        const isCorrect = userAnswerIndex === question.correctIndex;
        if (isCorrect) {
          score++;
          correctAnswers++;
        } else {
          incorrectAnswers++;
        }
        return {
          questionId: question.id,
          question: question.text,
          isCorrect,
          options: question.options,
          correctIndex: question.correctIndex,
          userAnswerIndex: userAnswerIndex,
          correctAnswer: question.options[question.correctIndex],
          userAnswer:
            userAnswerIndex !== null && userAnswerIndex !== undefined
              ? question.options[userAnswerIndex]
              : null,
          originalExplanation: question.explanation,
        };
      });

      const percentage = (score / test.questions.length) * 100;

      const calculatedResults: TestResults = {
        score,
        percentage,
        correctAnswers,
        incorrectAnswers,
        breakdown,
      };

      setResults(calculatedResults);
      if (score > 0) updateUserScore(score * 10);

      // Update Firestore progress
      const ref = doc(db, "users", user.uid, "testProgress", test.id);
      try {
        const docSnap = await getDoc(ref);
        let currentAttempts = 0;
        if (docSnap.exists()) {
          const data = docSnap.data();
          const count = data.completedCount;
          // Ensure the count is a valid number, otherwise default to 0
          if (typeof count === 'number' && !isNaN(count) && count >= 0) {
            currentAttempts = count;
          }
        }
        
        await setDoc(ref, {
          userId: user.uid,
          testId: test.id,
          completed: true,
          lastScore: score,
          lastPercentage: percentage,
          completedCount: currentAttempts + 1
        }, { merge: true });

      } catch (error) {
        console.error("Failed to update test attempts:", error);
      }
      setIsLoading(false);
    }
    
    calculateResults();
  }, [test, userAnswers, user, updateUserScore]);

  useEffect(() => {
    if (!isLoading && (!test || !user)) router.push("/tests");
  }, [isLoading, test, user, router]);

  const chartData = useMemo(() => {
    if (!results) return [];
    return [
      {
        name: "Correct",
        value: results.correctAnswers,
        fill: "hsl(var(--chart-2))",
      },
      {
        name: "Incorrect",
        value: results.incorrectAnswers,
        fill: "hsl(var(--destructive))",
      },
    ];
  }, [results]);

  const handleRetake = () => {
    if (test) {
      resetTest();
      router.push(`/test/${test.id}`);
    }
  };
  const handleNewTest = () => {
    resetTest();
    router.push("/tests");
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary mb-4"></div>
        <h2 className="text-2xl font-headline">Calculating your results...</h2>
      </div>
    );
  }

  if (!results || !test) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
        <h2 className="text-2xl font-headline">Could not load results.</h2>
        <Button onClick={handleNewTest} className="mt-4">
          Try another test
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      {/* header card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="text-center shadow-2xl rounded-2xl mb-8">
          <CardHeader>
            <Award className="mx-auto h-16 w-16 text-yellow-500" />
            <CardTitle className="font-headline text-4xl">
              Test Results
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 text-2xl">
            <div>
              <p className="font-bold text-accent">
                {results.score} / {test?.questions.length}
              </p>
              <p className="text-sm text-muted-foreground">Score</p>
            </div>
            <div>
              <p className="font-bold text-accent">
                {results.percentage.toFixed(2)}%
              </p>
              <p className="text-sm text-muted-foreground">Percentage</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="font-headline">Answer Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={chartData}
                  layout="vertical"
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      borderColor: "hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Bar dataKey="value" barSize={40}>
                    {chartData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* review list */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="shadow-lg rounded-2xl max-h-[600px] overflow-y-auto">
            <CardHeader>
              <CardTitle className="font-headline">Review Answers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {results.breakdown.map((item, idx) => (
                  <div key={item.questionId}>
                    <div className="flex items-start text-left space-x-3">
                       {item.isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                        )}
                      <p className="font-semibold">Question {idx + 1}: {item.question}</p>
                    </div>

                    <div className="space-y-2 mt-4 ml-8">
                      {item.options.map((option, optionIdx) => {
                        const isCorrectOption = optionIdx === item.correctIndex;
                        const isUserSelected = optionIdx === item.userAnswerIndex;

                        return (
                          <div
                            key={optionIdx}
                            className={cn(
                              "p-3 border rounded-lg",
                              isCorrectOption ? "bg-green-100 border-green-300 dark:bg-green-900/50 dark:border-green-700" : "bg-muted/30",
                              isUserSelected && !isCorrectOption ? "bg-red-100 border-red-300 dark:bg-red-900/50 dark:border-red-700" : ""
                            )}
                          >
                            <p className={cn(
                              "text-sm",
                              isCorrectOption ? "text-green-800 dark:text-green-200" : "",
                              isUserSelected && !isCorrectOption ? "text-red-800 dark:text-red-200" : ""
                            )}>
                              {option}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                     {item.originalExplanation && (
                      <div className="mt-4 ml-8 p-3 bg-blue-50 border-l-4 border-blue-400 dark:bg-blue-900/30 rounded-r-lg">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          <span className="font-bold">Rationale:</span> {item.originalExplanation}
                        </p>
                      </div>
                    )}
                    
                    {idx < results.breakdown.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* action buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <Button onClick={handleRetake}>Retake Test</Button>
        <Button onClick={handleNewTest} variant="outline">
          Choose New Test
        </Button>
      </div>
    </div>
  );
}

    

    