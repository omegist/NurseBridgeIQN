"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const AnimatedLogo = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={cn("text-primary", className)}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-full w-full"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        <motion.path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="currentColor"
          stroke="none"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </svg>
    </motion.div>
  )
}

export default AnimatedLogo
