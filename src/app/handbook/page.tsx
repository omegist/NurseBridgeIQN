
"use client"
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";

export default function HandbookPage() {
    return (
        <>
        <Header />
        <div className="container mx-auto py-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="prose dark:prose-invert max-w-none"
            >
                <h1 className="text-4xl font-bold font-headline mb-4">Nursing Handbook</h1>
                <p className="text-lg text-muted-foreground mb-6">
                    Welcome to your comprehensive nursing handbook.
                </p>
                
                {/* You can start adding your handbook content below */}
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">Section 1: Introduction</h2>
                <p>
                    This section will cover the fundamentals of nursing practice. Add your content here.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Section 2: Clinical Skills</h2>
                <p>
                    Detailed guides and checklists for essential clinical skills. Add your content here.
                </p>
                
            </motion.div>
        </div>
        </>
    );
}
