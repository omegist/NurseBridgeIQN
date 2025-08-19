
"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookText, Download } from "lucide-react";
import { Header } from "@/components/layout/Header";

export default function HandbookPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-10 px-4 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <div className="p-6 bg-primary/10 rounded-full inline-block mb-6">
            <BookText className="h-16 w-16 text-primary" />
          </div>

          <h1 className="text-5xl font-bold font-headline mb-4 text-foreground">
            Nursing Handbook
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your comprehensive guide to nursing principles, procedures, and best practices.
          </p>
          <p className="text-muted-foreground mb-8">
            Click the button below to download the handbook as a PDF.
          </p>
          <Button asChild size="lg" className="mt-4 rounded-full px-12 py-6 text-xl shadow-lg bg-blue-600 hover:bg-blue-700 text-white">
            <a href="/nursing-handbook.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Handbook
            </a>
          </Button>
        </motion.div>
      </div>
    </>
  );
}
