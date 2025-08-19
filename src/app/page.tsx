"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import AnimatedLogo from "@/components/shared/AnimatedLogo"

export default function HomePage() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-8"
      >
        <AnimatedLogo className="h-40 w-40" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h1 className="text-5xl font-bold font-headline mb-4 text-foreground">
          Welcome to NURSE IQN
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Your journey to mastering nursing knowledge starts here. Sharpen your
          skills, track your progress, and ace your exams with confidence.
        </p>

        {user ? (
          <Button asChild size="lg" className="mt-8 rounded-full px-12 py-6 text-xl shadow-lg bg-pink-600 hover:bg-pink-700 text-white">
            <Link href="/topics">Start Learning</Link>
          </Button>
        ) : (
          <Button asChild size="lg" className="mt-8 rounded-full px-12 py-6 text-xl shadow-lg bg-pink-600 hover:bg-pink-700 text-white">
            <Link href="/auth">Login to Get Started</Link>
          </Button>
        )}
      </motion.div>
    </div>
  )
}
