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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase"; // direct import of db here

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

    // Save progress to Firestore using imported db
    const ref = doc(db, "users", user.uid, "testProgress", test.id);
    setDoc(
      ref,
      { completed: true, score, percentage },
      { merge: true }
    ).catch(() => {});

    setIsLoading(false);
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

  const handleRetake = () => test && router.push(`/test/${test.id}`);
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

        {/* accordion */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle className="font-headline">Review Answers</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {results.breakdown.map((item, idx) => (
                  <AccordionItem key={item.questionId} value={String(idx)}>
                    <AccordionTrigger>
                      <div className="flex items-center">
                        {item.isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mr-2" />
                        )}
                        Question {idx + 1}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p className="font-semibold">{item.question}</p>
                      <p
                        className={
                          item.isCorrect ? "text-green-600" : "text-red-600"
                        }
                      >
                        Your Answer: {item.userAnswer || "Not answered"}
                      </p>
                      <p>Correct Answer: {item.correctAnswer}</p>
                      {item.originalExplanation && (
                        <p className="text-muted-foreground italic border-l-4 pl-4">
                          {item.originalExplanation}
                        </p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
