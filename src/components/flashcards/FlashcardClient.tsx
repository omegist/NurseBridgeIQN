"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import type { SerializableFlashcardTopic } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCw } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Props {
  topic: SerializableFlashcardTopic;
}

export function FlashcardClient({ topic }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);
  const router = useRouter();

  /* ──────────────────────────────────────────────────────────────── */

  const card = topic.flashcards[currentIndex];

  /* Variants for slide‑in / slide‑out */
  const cardVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 1000 : -1000, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 1000 : -1000, opacity: 0 }),
  };

  const paginate = (dir: number) => {
    setDirection(dir);
    setIsFlipped(false);
    /* wait for flip reset before index change */
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev + dir + topic.flashcards.length) % topic.flashcards.length
      );
    }, 150);
  };

  const progress = ((currentIndex + 1) / topic.flashcards.length) * 100;

  /* ──────────────────────────────────────────────────────────────── */

  return (
    <div className="flashcard-background">
      <div className="container mx-auto py-10 px-4 flex flex-col min-h-[calc(100vh-8rem)]">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-start mb-8"
        >
          <Button
            variant="outline"
            className="bg-background/20 text-white border-white/50 hover:bg-background/40"
            onClick={() => router.push("/flashcards")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Topics
          </Button>
        </motion.div>

        {/* Header */}
        <div className="flex-grow flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-6"
          >
            <h1 className="text-4xl font-bold font-headline mb-2 text-white">
              {topic.name}
            </h1>
            <p className="text-slate-200">
              Card {currentIndex + 1} of {topic.flashcards.length}
            </p>
            <Progress value={progress} className="w-64 mx-auto mt-2" />
          </motion.div>

          {/* Card container */}
          <div
            className="relative w-full max-w-2xl h-80 flex items-center justify-center"
            style={{ perspective: "1200px" }}
          >
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
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000) paginate(1);
                  else if (swipe > 10000) paginate(-1);
                }}
                className="absolute w-full h-full"
              >
                <motion.div
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  {/* Front */}
                  <div
                    className="absolute w-full h-full p-6 flex items-center justify-center text-center rounded-2xl shadow-2xl bg-card cursor-pointer"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <p className="text-2xl font-semibold font-headline">
                      {card.prompt}
                    </p>
                    <RotateCw className="absolute bottom-4 right-4 h-5 w-5 text-muted-foreground/50" />
                  </div>

                  {/* Back */}
                  <div
                    className="absolute w-full h-full p-6 flex items-center justify-center text-center rounded-2xl shadow-2xl bg-card border-2 border-primary"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <p className="text-lg text-muted-foreground">
                      {card.answer}
                    </p>
                    <RotateCw className="absolute bottom-4 right-4 h-5 w-5 text-muted-foreground/50" />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-background/20 text-white border-white/50 hover:bg-background/40"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="h-5 w-5" />
              Prev
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-background/20 text-white border-white/50 hover:bg-background/40"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              Flip Card
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-background/20 text-white border-white/50 hover:bg-background/40"
              onClick={() => paginate(1)}
            >
              Next
              <ChevronRight className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
