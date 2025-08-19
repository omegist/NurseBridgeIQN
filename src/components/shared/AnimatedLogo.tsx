
"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const AnimatedLogo = ({ className }: { className?: string }) => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      className={cn("text-primary", className)}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 60"
        className="h-full w-full"
        aria-label="NIQN Logo"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <text 
          fontFamily="var(--font-headline)" 
          fontSize="48" 
          fontWeight="bold"
          fill="url(#logo-gradient)" 
          x="50%" 
          y="50%" 
          dominantBaseline="middle" 
          textAnchor="middle"
        >
          <motion.tspan custom={0} initial="hidden" animate="visible" variants={textVariants}>N</motion.tspan>
          <motion.tspan custom={1} initial="hidden" animate="visible" variants={textVariants}>I</motion.tspan>
          <motion.tspan custom={2} initial="hidden" animate="visible" variants={textVariants}>Q</motion.tspan>
          <motion.tspan custom={3} initial="hidden" animate="visible" variants={textVariants}>N</motion.tspan>
        </text>
      </svg>
    </motion.div>
  )
}

export default AnimatedLogo
