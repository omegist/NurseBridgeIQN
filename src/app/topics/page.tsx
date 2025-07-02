"use client"

import { topics } from "@/data/topics"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Clock, BookOpen, FlaskConical } from "lucide-react"

export default function TopicsPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold font-headline text-center mb-2">
          Choose a Topic
        </h1>
        <p className="text-muted-foreground text-center mb-10">
          Select a category to start your quiz.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex"
          >
            <div className="bg-card rounded-2xl shadow-lg p-6 flex flex-col w-full border border-border/20 hover:border-accent transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                       <topic.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className={cn(
                        "px-3 py-1 text-xs font-semibold rounded-full capitalize",
                        topic.difficulty === 'easy' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300' 
                            : 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
                    )}>
                        {topic.difficulty}
                    </span>
                </div>

                <div className="flex-grow">
                    <h2 className="font-headline text-xl font-bold mb-1 group-hover:text-accent transition-colors">{topic.name}</h2>
                    <p className="text-sm text-muted-foreground mb-3">from {topic.name}</p>
                    <p className="text-sm text-muted-foreground">{topic.description}</p>
                </div>

                <div className="mt-auto pt-4">
                    <div className="flex justify-between items-center text-muted-foreground text-sm mb-6 border-t pt-4">
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            <span>{topic.questionCount} questions</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{topic.questionCount * 2} min</span>
                        </div>
                    </div>
                    <Link href={`/quiz/${topic.id}`} className="w-full text-center py-3 px-6 rounded-lg text-white font-bold bg-gradient-to-r from-violet-600 to-teal-500 hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-300 flex items-center justify-center gap-2">
                        <span>Start Quiz</span>
                        <FlaskConical className="w-5 h-5" />
                    </Link>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
