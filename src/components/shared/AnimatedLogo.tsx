
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
        fill="currentColor"
        className="h-full w-full"
      >
        <motion.path
          d="M16.476,2.973c-2.937-2.34-7.01-2.34-9.947,0C4.3,4.721,3.46,7.03,3.871,9.231c0.419,2.234,1.868,4.12,3.83,5.396 c1.996,1.296,4.368,1.88,6.77,1.88c2.403,0,4.775-0.584,6.771-1.88c1.962-1.276,3.411-3.162,3.83-5.396 c0.411-2.201-0.429-4.51-2.652-6.258C18.201,2.973,16.476,2.973,16.476,2.973z M12.923,17.95c-0.625,0.485-1.306,0.852-2.018,1.085 c-0.713-0.233-1.394-0.6-2.019-1.085l-0.55-0.427l-0.264-1.233c-0.12-0.56,0.18-1.144,0.697-1.425 c1.58-0.858,3.284-0.858,4.863,0c0.518,0.281,0.817,0.865,0.697,1.425L13.473,17.523L12.923,17.95z M18.995,8.835 c-0.34,1.854-1.5,3.434-3.125,4.393c-0.517,0.306-1.127,0.204-1.526-0.258c-0.4-0.462-0.52-1.119-0.299-1.685 c1.057-2.738-0.293-5.857-2.975-6.897c-0.57-0.219-0.942-0.767-0.942-1.378c0-1.129,0.992-2.046,2.217-2.046 c1.45,0,2.83,0.561,3.875,1.59C18.473,4.781,19.261,6.684,18.995,8.835z"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
      </svg>
    </motion.div>
  )
}

export default AnimatedLogo
