"use client"

import { useQuiz } from "@/contexts/QuizContext"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const LegendItem = ({ colorClass, label }: { colorClass: string; label: string }) => (
    <div className="flex items-center space-x-2">
      <div className={cn("w-4 h-4 rounded", colorClass)}></div>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );

export function QuestionPreview({ questionCount }: { questionCount: number }) {
  const { currentQuestionIndex, setCurrentQuestionIndex, userAnswers, visitedQuestions } = useQuiz()

  const answeredCount = userAnswers.filter(a => a !== null).length;
  const answeredPercentage = questionCount > 0 ? (answeredCount / questionCount) * 100 : 0;

  return (
    <Card className="shadow-lg rounded-2xl">
      <CardHeader>
        <CardTitle className="font-headline text-center">Question Overview</CardTitle>
        <CardDescription className="text-center">
            {answeredCount} of {questionCount} answered ({answeredPercentage.toFixed(0)}%)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 space-y-2">
            <h4 className="font-semibold text-sm">Legend</h4>
            <div className="grid grid-cols-2 gap-2">
                <LegendItem colorClass="bg-destructive/20" label="Not Visited" />
                <LegendItem colorClass="bg-green-500" label="Answered" />
                <LegendItem colorClass="bg-muted" label="Visited" />
                <LegendItem colorClass="bg-orange-500" label="Current" />
            </div>
        </div>

        <h4 className="font-semibold text-sm mb-2">Questions</h4>
        <ScrollArea className={cn(questionCount > 50 ? "h-64" : "")}>
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: questionCount }, (_, i) => {
              const isCurrent = i === currentQuestionIndex;
              const isAnswered = userAnswers[i] !== null;
              const isVisited = visitedQuestions[i];

              return (
                <button
                  key={i}
                  onClick={() => setCurrentQuestionIndex(i)}
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-md font-bold transition-all duration-200",
                    isCurrent 
                        ? "bg-orange-500 text-white ring-2 ring-offset-2 ring-orange-500" 
                        : isAnswered 
                        ? "bg-green-500 text-white hover:bg-green-600" 
                        : isVisited 
                        ? "bg-muted hover:bg-muted/80"
                        : "bg-destructive/20 text-destructive-foreground hover:bg-destructive/30"
                  )}
                >
                  {i + 1}
                </button>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
