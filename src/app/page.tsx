
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
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

  const features = [
    "Trusted by many",
    "Complete exam-friendly experience",
    "10,000+ up-to-date questions",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-8 h-40 w-40"
      >
        <AnimatedLogo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-center"
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
      
      {/* Features Section */}
      <motion.div 
        className="w-full max-w-4xl mx-auto mt-auto mb-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="relative flex justify-center items-center">
            <div className="absolute border-t-2 border-dashed border-primary/50 w-full h-px top-1/2 -z-10"></div>
            <div className="flex flex-col md:flex-row justify-around w-full gap-8 md:gap-4">
            {features.map((feature, index) => (
                <motion.div 
                    key={index} 
                    className="flex items-center gap-3 bg-background px-4 py-2 rounded-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                >
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm md:text-base text-muted-foreground">{feature}</span>
                </motion.div>
            ))}
            </div>
        </div>
      </motion.div>

      <footer className="absolute bottom-4 text-center text-sm text-muted-foreground w-full">
        <div className="flex justify-center gap-4">
            <Link href="/shipping-policy" className="hover:text-primary transition-colors">Shipping Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link href="/cancellations-and-refunds" className="hover:text-primary transition-colors">Cancellations and Refunds</Link>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  )
}
