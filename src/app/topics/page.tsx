
"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { TopicGrid } from "@/components/topics/TopicGrid";

export default function TopicsPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold font-headline text-center mb-2 text-foreground">
            Select a Quiz Topic
          </h1>
          <p className="text-muted-foreground text-center mb-10">
            Choose a category to test your knowledge and track your progress.
          </p>
        </motion.div>
        <TopicGrid />
      </div>
    </>
  );
}
