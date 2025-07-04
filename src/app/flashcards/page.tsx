
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { flashcardTopics } from "@/data/flashcards"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FlashcardsPage() {
  return (
    <div className="flashcard-background">
      <div className="container mx-auto py-10 px-4 min-h-[calc(100vh-4rem)]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold font-headline text-center mb-2 text-white">
            Flashcard Topics
          </h1>
          <p className="text-slate-200 text-center mb-10">
            Select a topic to start reviewing key concepts and facts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flashcardTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="w-full flex flex-col justify-between rounded-2xl shadow-lg border bg-card/80 backdrop-blur-sm border-border/20 hover:border-accent transition-all duration-300 group">
                <div>
                  <CardHeader className="flex-row items-center gap-4 space-y-0">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <topic.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl group-hover:text-accent transition-colors">{topic.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardContent>
                </div>
                <CardContent>
                  <Button asChild className="w-full mt-4">
                      <Link href={`/flashcards/${topic.id}`}>
                          Start Reviewing
                          <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
