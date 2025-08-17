
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookCopy } from "lucide-react";

export default function TestsPage() {
  const parts = [
    {
      name: "PART A",
      description: "Practice tests covering a range of nursing topics.",
      href: "/tests/part-a",
      disabled: false,
    },
    {
      name: "PART B",
      description: "More practice tests will be added here soon.",
      href: "/tests/part-b",
      disabled: false, // It's not disabled, it just goes to a placeholder page.
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold font-headline text-center mb-2 text-white">
          Choose a Test Part
        </h1>
        <p className="text-slate-300 text-center mb-10">
          Select a part to begin your practice test session.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {parts.map((part, index) => (
          <motion.div
            key={part.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex"
          >
            <Card className="w-full flex flex-col justify-between rounded-2xl shadow-lg bg-[#0E1A35] text-white border-none transition-all duration-300 group">
              <div>
                <CardHeader className="flex-row items-center gap-4 space-y-0">
                  <div className="p-3 rounded-lg bg-blue-900/50">
                    <BookCopy className="w-7 h-7 text-blue-400" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-white">
                    {part.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400">{part.description}</CardDescription>
                </CardContent>
              </div>
              <CardFooter>
                <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  <Link href={part.href}>
                    Go to {part.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
