
"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/contexts/QuizContext";
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
import { doc, setDoc, collection, getDocs, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { badges, type Badge as BadgeType } from "@/data/badges";
import { useToast } from "@/hooks/use-toast";

interface QuizResults {
  score: number;
  percentage: number;
  accuracy: number;
  correctAnswers: number;
  incorrectAnswers: number;
  breakdown: {
    questionId: number;
    isCorrect: boolean;
    correctAnswer: string;
    userAnswer: string | null;
    question: string;
    originalExplanation: string;
  }[];
}

export function ResultsClient() {
  const router = useRouter();
  const { topic, userAnswers, resetQuiz, quizDuration } = useQuiz();
  const { user, updateUserScore } = useAuth();
  const { toast } = useToast();

  const [results, setResults] = useState<QuizResults | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  /* ---------- calculate results once ---------- */
  useMemo(() => {
    if (!topic || !user) {
      setIsLoading(false);
      return;
    }

    let score = 0;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    const breakdown = topic.questions.map((question, index) => {
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
        question: question.question,
        isCorrect,
        correctAnswer: question.options[question.correctIndex],
        userAnswer:
          userAnswerIndex !== null ? question.options[userAnswerIndex] : null,
        originalExplanation: question.explanation,
      };
    });

    const percentage = (score / topic.questions.length) * 100;

    const calculatedResults: QuizResults = {
      score,
      percentage,
      accuracy: percentage,
      correctAnswers,
      incorrectAnswers,
      breakdown,
    };

    setResults(calculatedResults);
    if (score > 0) updateUserScore(score * 10);

    /* Update progress in Firestore to mark as completed */
    const progressRef = doc(db, "quizProgress", `${user.uid}_${topic.id}`);
    setDoc(
      progressRef,
      {
        completed: true,
        score: score,
        percentage: percentage,
      },
      { merge: true }
    ).catch(() => {});

    setIsLoading(false);
  }, [topic, userAnswers, user, updateUserScore]);

  /* ---------- Award Badges ---------- */
  useEffect(() => {
    const awardBadges = async () => {
        if (!results || !user || !topic) return;

        const badgesCollectionRef = collection(db, 'users', user.uid, 'userBadges');
        const existingBadgesSnap = await getDocs(badgesCollectionRef);
        const existingBadgeIds = existingBadgesSnap.docs.map(doc => doc.id);
        const newBadges: BadgeType[] = [];

        const checkForAndAwardBadge = async (badgeName: string) => {
            if (!existingBadgeIds.includes(badgeName)) {
                const badgeToAward = badges.find(b => b.name === badgeName);
                if (badgeToAward) {
                    await setDoc(doc(badgesCollectionRef, badgeName), { earnedAt: serverTimestamp() });
                    newBadges.push(badgeToAward);
                }
            }
        };

        // 1. Perfect Score
        if (results.percentage === 100) {
            await checkForAndAwardBadge('Perfect Score');
        }
        // 2. Speed Runner (< 5 minutes)
        if (quizDuration > 0 && quizDuration < 300) { 
            await checkForAndAwardBadge('Speed Runner');
        }
        // 3. Topic Novice Badge
        if (topic.id === 'pharmacology') {
            await checkForAndAwardBadge('Pharmacology Novice');
        }

        if (newBadges.length > 0) {
           toast({
              title: "Badge Unlocked!",
              description: `You've earned ${newBadges.length} new badge${newBadges.length > 1 ? 's' : ''}. Check your profile!`
           });
        }
    };

    if (!isLoading) {
        awardBadges();
    }
  }, [isLoading, results, user, topic, quizDuration, toast]);

  /* ---------- redirect if no topic ---------- */
  useEffect(() => {
    if (!isLoading && (!topic || !user)) {
      router.push("/topics");
    }
  }, [isLoading, topic, user, router]);

  /* ---------- chart data ---------- */
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

  /* ---------- button handlers ---------- */
  const handleRetake = async () => {
    if (topic) {
      router.push(`/quiz/${topic.id}`);
    }
  };

  const handleNewQuiz = () => {
    resetQuiz();
    router.push("/topics");
  };

  /* ---------- loading / error states ---------- */
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary mb-4"></div>
        <h2 className="text-2xl font-headline">Calculating your results...</h2>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
        <h2 className="text-2xl font-headline">Could not load results.</h2>
        <Button onClick={handleNewQuiz} className="mt-4">
          Try another quiz
        </Button>
      </div>
    );
  }

  /* ---------- main render ---------- */
  return (
    <div className="container mx-auto py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="text-center shadow-2xl rounded-2xl mb-8">
          <CardHeader>
            <Award className="mx-auto h-16 w-16 text-yellow-500" />
            <CardTitle className="font-headline text-4xl">Quiz Results</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 text-2xl">
            <div>
              <p className="font-bold text-accent">
                {results.score} / {topic?.questions.length}
              </p>
              <p className="text-sm text-muted-foreground">Score</p>
            </div>
            <div>
              <p className="font-bold text-accent">
                {results.percentage.toFixed(2)}%
              </p>
              <p className="text-sm text-muted-foreground">Percentage</p>
            </div>
            <div>
              <p className="font-bold text-accent">
                {results.accuracy.toFixed(2)}%
              </p>
              <p className="text-sm text-muted-foreground">Accuracy</p>
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
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* accordion with static explanations */}
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
                {results.breakdown.map((item, index) => (
                  <AccordionItem
                    key={item.questionId}
                    value={item.questionId.toString()}
                  >
                    <AccordionTrigger>
                      <div className="flex items-center">
                        {item.isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-500 mr-2" />
                        )}
                        Question {index + 1}
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
                      <p className="text-muted-foreground italic border-l-4 pl-4">
                        {item.originalExplanation}
                      </p>
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
        <Button onClick={handleRetake}>Retake Topic</Button>
        <Button onClick={handleNewQuiz} variant="outline">
          Choose New Topic
        </Button>
      </div>
    </div>
  );
}
