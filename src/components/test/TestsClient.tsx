
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
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, ArrowRight, Clock } from "lucide-react";
import type { Test } from "@/lib/types";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface TestsClientProps {
  tests: Test[];
}

export function TestsClient({ tests }: TestsClientProps) {
  const pathname = usePathname();
  const { theme } = useTheme();
  const isPartB = pathname?.includes('/part-b') ?? false;
  const title = isPartB ? "Test Part B" : "Medication Test";

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
        {tests.map((test, index) => {
          const colorInfo = cardColors[index % cardColors.length];

          if (theme === 'light') {
            return (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col"
              >
                <Card className={cn("glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center h-48", colorInfo.gradient)}>
                  <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-4", colorInfo.iconBg)}>
                    <ClipboardCheck className={cn("w-8 h-8", colorInfo.iconColor)} />
                  </div>
                  <h3 className="font-semibold text-foreground">{test.name}</h3>
                  <Link href={`/test/${test.id}`} className="absolute inset-0" aria-label={`Start ${test.name}`}></Link>
                </Card>
              </motion.div>
            )
          }

          // Dark theme card
          return (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="w-full flex flex-col justify-between rounded-2xl shadow-lg bg-card/80 dark:bg-card border-border/20 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-1">
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
                    <CardDescription className="text-muted-foreground">
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
                    </div>
                  </CardContent>
                </div>
                <CardContent>
                  <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    <Link href={`/test/${test.id}`}>
                      Start Test
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
