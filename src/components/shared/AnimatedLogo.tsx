"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { easeInOut, easeOut } from "framer-motion" // ✅ Import easing functions

const AnimatedLogo = ({ className }: { className?: string }) => {
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeInOut, // ✅ Use easing function
      },
    },
  }

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: easeInOut, // ✅ Use easing function
      },
    },
  }

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
        ease: easeOut, // ✅ Use easing function
      },
    },
  }

  return (
    <motion.div
      className={cn("text-primary", className)}
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 60"
        className="h-full w-full"
        aria-label="NURSE IQN Logo"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Text "NURSE IQN" */}
        <motion.text
          fontFamily="var(--font-headline), sans-serif"
          fontSize="24"
          fontWeight="bold"
          fill="url(#logo-gradient)"
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          variants={textVariants}
        >
          NURSE IQN
        </motion.text>

        {/* Heartbeat line */}
        <motion.path
          d="M10 30 H 40 L 50 20 L 60 40 L 70 30 H 130 L 140 40 L 150 20 L 160 30 H 190"
          fill="none"
          stroke="url(#logo-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </motion.div>
  )
}

export default AnimatedLogo