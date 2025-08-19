"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import type { Test } from "@/lib/types";
import { useTest } from "@/contexts/TestContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { QuestionPreview } from "../quiz/QuestionPreview";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

export function TestClient({ test }: { test: Test }) {
  const router = useRouter();
  const {
    startTest,
    userAnswers,
    setUserAnswers,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    visitedQuestions,
    setVisitedQuestions,
    saveProgress,
    setTestDuration,
  } = useTest();

  /* ------------------------------------------------------------------ */
  /*   Local state                                                      */
  /* ------------------------------------------------------------------ */
  const [time, setTime] = useState(
    test.timeLimitMinutes ? test.timeLimitMinutes * 60 : 0
  );
  const [isMounted, setIsMounted] = useState(false);

  /* ------------------------------------------------------------------ */
  /*   Effects                                                          */
  /* ------------------------------------------------------------------ */
  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    startTest(test);
  }, [test, startTest]);

  useEffect(() => {
    setVisitedQuestions((prev) => {
      const arr = [...prev];
      if (arr.length > currentQuestionIndex) {
        arr[currentQuestionIndex] = true;
      }
      return arr;
    });
  }, [currentQuestionIndex, setVisitedQuestions]);

  /* ------------------------------------------------------------------ */
  /*   Submit handler                                                   */
  /* ------------------------------------------------------------------ */
  const handleSubmit = useCallback(() => {
    saveProgress(userAnswers, currentQuestionIndex);
    setTestDuration(
      test.timeLimitMinutes ? test.timeLimitMinutes * 60 - time : time
    );
    router.push("/test-results");
  }, [
    userAnswers,
    currentQuestionIndex,
    time,
    test.timeLimitMinutes,
    saveProgress,
    setTestDuration,
    router,
  ]);

  /* ------------------------------------------------------------------ */
  /*   Timer                                                            */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    if (!isMounted) return;

    const timer = setInterval(() => {
      if (test.timeLimitMinutes) {
        // Countdown
        setTime((t) => {
          if (t <= 1) {
            clearInterval(timer);
            /* fire-and-forget to avoid returning a Promise */
            handleSubmit();
            return 0;
          }
          return t - 1;
        });
      } else {
        // Count‑up
        setTime((t) => t + 1);
      }
    }, 1000);

    /* sync cleanup */
    return () => clearInterval(timer);
  }, [isMounted, test.timeLimitMinutes, handleSubmit]);

  /* ------------------------------------------------------------------ */
  /*   Navigation callbacks                                             */
  /* ------------------------------------------------------------------ */
  const handleNext = useCallback(() => {
    if (currentQuestionIndex < test.questions.length - 1) {
      saveProgress(userAnswers, currentQuestionIndex);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }, [
    currentQuestionIndex,
    test.questions.length,
    saveProgress,
    setCurrentQuestionIndex,
    userAnswers,
  ]);

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      saveProgress(userAnswers, currentQuestionIndex);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }, [
    currentQuestionIndex,
    saveProgress,
    setCurrentQuestionIndex,
    userAnswers,
  ]);

  /* key bindings */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrevious();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleNext, handlePrevious]);

  /* ------------------------------------------------------------------ */
  /*   Guards                                                           */
  /* ------------------------------------------------------------------ */
  if (!test.questions?.length) return <div>Loading test…</div>;
  const currentQuestion = test.questions[currentQuestionIndex];
  if (!currentQuestion) return <div>Loading question…</div>;

  /* ------------------------------------------------------------------ */
  /*   Answer change                                                    */
  /* ------------------------------------------------------------------ */
  const handleAnswerChange = (val: string) => {
    const arr = [...userAnswers];
    arr[currentQuestionIndex] = parseInt(val, 10);
    setUserAnswers(arr);
  };

  /* progress & timer display */
  const progress = ((currentQuestionIndex + 1) / test.questions.length) * 100;
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  /* ------------------------------------------------------------------ */
  /*   Render                                                           */
  /* ------------------------------------------------------------------ */
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* main card */}
        <div className="md:col-span-2">
          <Card className="shadow-2xl rounded-2xl">
            <CardHeader>
              <Progress value={progress} className="mb-4" />
              <div className="flex justify-between items-center">
                <CardTitle className="font-headline text-2xl">
                  {test.name}
                </CardTitle>
                <div className="flex items-center space-x-2 text-lg font-semibold text-accent">
                  <Clock className="h-6 w-6" />
                  <span>
                    {String(minutes).padStart(2, "0")}:
                    {String(seconds).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <CardDescription>
                Question {currentQuestionIndex + 1} of {test.questions.length}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xl font-semibold mb-6">
                  {currentQuestion.text}
                </p>

                <RadioGroup
                  value={userAnswers[currentQuestionIndex]?.toString()}
                  onValueChange={handleAnswerChange}
                  className="space-y-4"
                >
                  {currentQuestion.options.map((opt, idx) => (
                    <motion.div key={idx} whileHover={{ scale: 1.02 }}>
                      <Label
                        htmlFor={`option-${idx}`}
                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                          userAnswers[currentQuestionIndex] === idx
                            ? "bg-primary/30 border-accent shadow-md"
                            : "bg-background hover:bg-primary/10"
                        }`}
                      >
                        <RadioGroupItem
                          value={idx.toString()}
                          id={`option-${idx}`}
                          className="mr-4"
                        />
                        <span>{opt}</span>
                      </Label>
                    </motion.div>
                  ))}
                </RadioGroup>
              </motion.div>

              <div className="mt-8 flex justify-between">
                <Button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  variant="outline"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentQuestionIndex === test.questions.length - 1}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* sidebar */}
        <div className="sticky top-24 h-fit">
          <QuestionPreview
            questionCount={test.questions.length}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            userAnswers={userAnswers}
            visitedQuestions={visitedQuestions}
          />

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
                Preview &amp; Submit Test
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="font-headline">
                  Are you sure you want to submit?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Your test will be graded, and you won&apos;t be able to change
                  your answers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleSubmit}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Submit
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
