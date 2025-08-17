
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import AnimatedLogo from "@/components/shared/AnimatedLogo"

export default function HomePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth")
    }
  }, [user, loading, router])

  if (loading || !user) {
    return null
  }

  return (
    <div className="flashcard-background">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <AnimatedLogo className="h-24 w-24 mx-auto" />
                <h1 className="text-5xl font-bold font-headline mt-6 text-white">
                Welcome to NURSE IQN
                </h1>
                <p className="mt-4 text-lg text-slate-200 max-w-xl mx-auto">
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
                className="mt-8 rounded-full px-12 py-6 text-xl shadow-lg bg-pink-600 hover:bg-pink-700 text-white"
                >
                <Link href="/topics">Start</Link>
                </Button>
            </motion.div>
        </div>
    </div>
  )
}
