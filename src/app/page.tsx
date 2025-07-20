
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import AnimatedLogo from "@/components/shared/AnimatedLogo"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function HomePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth")
    }
  }, [user, loading, router])

  if (loading || !user) {
    // This state is now primarily handled by AuthProvider, but this is a good fallback.
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AnimatedLogo className="h-32 w-32 mx-auto mb-6" />
        <h1 className="text-5xl font-bold font-headline text-foreground">
          Welcome to NURSE IQN
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Hello {user?.name || "Nurse"}! Sharpen your nursing skills and test your knowledge with our interactive quizzes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          asChild
          size="lg"
          className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 py-6 text-lg shadow-lg"
        >
          <Link href="/topics">Start Quiz</Link>
        </Button>
      </motion.div>
    </div>
  )
}
