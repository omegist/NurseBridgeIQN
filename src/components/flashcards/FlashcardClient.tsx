
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import type { SerializableFlashcardTopic } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCw } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function FlashcardClient({ topic }: { topic: SerializableFlashcardTopic }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [direction, setDirection] = useState(0)
  const router = useRouter()

  const card = topic.cards[currentIndex]

  const cardVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIsFlipped(false);
    // Wait for flip animation to reset before changing index
    setTimeout(() => {
       setCurrentIndex((prev) => (prev + newDirection + topic.cards.length) % topic.cards.length);
    }, 150)
  };

  const progress = ((currentIndex + 1) / topic.cards.length) * 100;

  return (
    <div className="container mx-auto py-10 px-4 flex flex-col min-h-[calc(100vh-8rem)]">
      <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-start mb-8"
      >
          <Button variant="outline" onClick={() => router.push('/flashcards')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Topics
          </Button>
      </motion.div>

      <div className="flex-grow flex flex-col items-center justify-center">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-6"
        >
            <h1 className="text-4xl font-bold font-headline mb-2">{topic.name}</h1>
            <p className="text-muted-foreground">Card {currentIndex + 1} of {topic.cards.length}</p>
            <Progress value={progress} className="w-64 mx-auto mt-2" />
        </motion.div>

        <div className="relative w-full max-w-2xl h-80 flex items-center justify-center" style={{ perspective: '1200px' }}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;
                        if (swipe < -10000) {
                            paginate(1);
                        } else if (swipe > 10000) {
                            paginate(-1);
                        }
                    }}
                    className="absolute w-full h-full"
                >
                    <motion.div
                        className="relative w-full h-full"
                        style={{ transformStyle: 'preserve-3d' }}
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                        onClick={() => setIsFlipped(!isFlipped)}
                    >
                        {/* Front of Card */}
                        <div
                            className="absolute w-full h-full p-6 flex items-center justify-center text-center rounded-2xl shadow-2xl bg-card cursor-pointer"
                            style={{ backfaceVisibility: 'hidden' }}
                        >
                            <p className="text-2xl font-semibold font-headline">{card.term}</p>
                            <RotateCw className="absolute bottom-4 right-4 h-5 w-5 text-muted-foreground/50" />
                        </div>

                        {/* Back of Card */}
                        <div
                            className="absolute w-full h-full p-6 flex items-center justify-center text-center rounded-2xl shadow-2xl bg-card border-2 border-primary"
                            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                        >
                            <p className="text-lg text-muted-foreground">{card.definition}</p>
                             <RotateCw className="absolute bottom-4 right-4 h-5 w-5 text-muted-foreground/50" />
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>


        <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="flex items-center justify-center gap-4 mt-8"
        >
            <Button variant="outline" size="lg" onClick={() => paginate(-1)}>
                <ChevronLeft className="h-5 w-5" />
                Prev
            </Button>
            <Button variant="outline" size="lg" onClick={() => setIsFlipped(!isFlipped)}>
                Flip Card
            </Button>
            <Button variant="outline" size="lg" onClick={() => paginate(1)}>
                Next
                <ChevronRight className="h-5 w-5" />
            </Button>
        </motion.div>
      </div>
    </div>
  )
}
