
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
import { ArrowRight, Lock } from "lucide-react";
import { cn, iconMap } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { usePayment } from "@/hooks/usePayment";
import { Header } from "@/components/layout/Header";

export default function FlashcardsPage() {
  const { theme } = useTheme();
  const { user } = useAuth();
  const { openPaymentDialog } = usePayment();

  const handleTopicClick = (e: React.MouseEvent) => {
    if (user && !user.isPaid) {
      e.preventDefault();
      openPaymentDialog();
    }
  };

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
          {flashcardTopics.map((topic, index) => {
            const Icon = iconMap[topic.icon] ?? (() => null);
            const colorInfo = cardColors[index % cardColors.length];
            const isLocked = user && !user.isPaid;

            if (theme === 'light') {
              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col"
                >
                    <div onClick={isLocked ? handleTopicClick : undefined} className="relative block cursor-pointer">
                      {isLocked && (
                          <div className="absolute inset-0 bg-black/60 rounded-2xl flex flex-col items-center justify-center z-10 p-4">
                            <Lock className="w-12 h-12 text-white mb-2"/>
                            <span className="text-white font-bold text-lg mb-4">₹2000</span>
                             <Button onClick={handleTopicClick} className="w-full bg-accent hover:bg-accent/90">
                               Unlock Full App
                             </Button>
                          </div>
                        )}
                      <Link href={isLocked ? '#' : `/flashcards/${topic.id}`} className={isLocked ? 'pointer-events-none' : ''}>
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
                   {isLocked && (
                        <div className="absolute inset-0 bg-black/60 rounded-2xl flex flex-col items-center justify-center z-10 p-4">
                          <Lock className="w-12 h-12 text-white mb-2"/>
                          <span className="text-white font-bold text-lg mb-4">₹2000</span>
                          <Button onClick={handleTopicClick} className="w-full bg-accent hover:bg-accent/90">
                            Unlock Full App
                          </Button>
                        </div>
                      )}
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
                    </CardContent>
                  </div>
                  <CardContent>
                    <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                      <Link href={`/flashcards/${topic.id}`}>
                        Start Reviewing
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
