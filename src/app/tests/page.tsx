
"use client";

import Link from "next/link";
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
import { ArrowRight, BookCopy, Lock } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { usePayment } from "@/hooks/usePayment";
import { Header } from "@/components/layout/Header";

export default function TestsPage() {
  const { theme } = useTheme();
  const { user } = useAuth();
  const { openPaymentDialog } = usePayment();

  const handlePartClick = (e: React.MouseEvent) => {
    if (user && !user.isPaid) {
      e.preventDefault();
      openPaymentDialog();
    }
  };

  const parts = [
    {
      name: "PART A",
      description: "Practice tests covering a range of nursing topics.",
      href: "/tests/part-a",
      disabled: false,
    },
    {
      name: "PART B",
      description: "More practice tests will be added here soon.",
      href: "/tests/part-b",
      disabled: false,
    },
  ];

  const cardColors = [
    { gradient: 'topic-gradient-1', iconBg: 'bg-blue-400', iconColor: 'text-white' },
    { gradient: 'topic-gradient-2', iconBg: 'bg-green-400', iconColor: 'text-white' },
  ];

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
            Choose a Test Part
          </h1>
          <p className="text-muted-foreground text-center mb-10">
            Select a part to begin your practice test session.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {parts.map((part, index) => {
            const colorInfo = cardColors[index % cardColors.length];
            const isLocked = user && !user.isPaid;
            
            if (theme === 'light') {
              return (
                <motion.div
                  key={part.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col"
                >
                  <Link href={isLocked ? '#' : part.href} onClick={handlePartClick}>
                    <Card className={cn("glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center h-48", colorInfo.gradient)}>
                      {isLocked && (
                          <div className="absolute inset-0 bg-black/60 rounded-2xl flex flex-col items-center justify-center z-10">
                            <Lock className="w-12 h-12 text-white mb-2"/>
                            <span className="text-white font-bold text-lg">₹2000</span>
                          </div>
                        )}
                      <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-4", colorInfo.iconBg)}>
                        <BookCopy className={cn("w-8 h-8", colorInfo.iconColor)} />
                      </div>
                      <h3 className="font-semibold text-foreground">{part.name}</h3>
                    </Card>
                  </Link>
                </motion.div>
              )
            }

            // Dark theme card
            return (
              <motion.div
                key={part.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <Card className="w-full flex flex-col justify-between rounded-2xl shadow-lg bg-card/80 dark:bg-card border-border/20 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 relative">
                  {isLocked && (
                      <div className="absolute inset-0 bg-black/60 rounded-2xl flex flex-col items-center justify-center z-10">
                        <Lock className="w-12 h-12 text-white mb-2"/>
                        <span className="text-white font-bold text-lg">₹2000</span>
                      </div>
                    )}
                  <div>
                    <CardHeader className="flex-row items-center gap-4 space-y-0">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <BookCopy className="w-7 h-7 text-primary animated-icon" />
                      </div>
                      <CardTitle className="font-headline text-2xl text-card-foreground">
                        {part.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">{part.description}</CardDescription>
                    </CardContent>
                  </div>
                  <CardFooter>
                    <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                      <Link href={isLocked ? '#' : part.href} onClick={handlePartClick}>
                        {isLocked ? "Unlock Full App" : `Go to ${part.name}`}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </>
  );
}
