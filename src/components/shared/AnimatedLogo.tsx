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
        <motion.path
          d="M19.3 5.3C17.2 3.2 14.2 3.2 12 5.3L12 5.3C9.8 3.2 6.8 3.2 4.7 5.3C2.6 7.4 2.6 10.4 4.7 12.5L12 19.8L19.3 12.5C21.4 10.4 21.4 7.4 19.3 5.3Z"
          fill="#4A90E2"
          stroke="none"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <path d="M16.5 3.01C14.76 3.01 13.09 3.82 12 5.09C10.91 3.82 9.24 3.01 7.5 3.01C4.42 3.01 2 5.43 2 8.51C2 12.28 5.4 15.36 10.55 19.99L12 21.35L13.45 19.99C18.6 15.36 22 12.28 22 8.51C22 5.43 19.58 3.01 16.5 3.01Z"
            stroke="#4A90E2"
            strokeWidth="0"
            fill="#4A90E2"
        />

      </svg>
    </motion.div>
  )
}

export default AnimatedLogo
