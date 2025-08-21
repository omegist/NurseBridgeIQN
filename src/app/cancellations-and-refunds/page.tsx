
"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";


export default function CancellationsAndRefundsPage() {
    return (
        <>
        <Header />
        <div className="container mx-auto py-10 px-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <Link href="/">
                    <Button variant="outline">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="prose dark:prose-invert max-w-none"
            >
                <h1 className="text-4xl font-bold font-headline mb-4">Cancellations and Refunds Policy</h1>
                <p className="text-lg text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Overview</h2>
                <p>
                    Thank you for choosing NURSE IQN. Our platform provides digital content and services. This policy outlines the terms regarding cancellations and refunds for our one-time app unlock fee.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Digital Product Policy</h2>
                <p>
                    Our primary product is a one-time payment to unlock full access to all digital content within the NURSE IQN application, including quizzes, tests, flashcards, and handbooks. Once the payment is made and access is granted, the service is considered delivered.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cancellations</h2>
                <p>
                    Since access to our digital content is granted immediately upon successful payment, the transaction is final. Orders cannot be cancelled after the payment has been processed and access has been unlocked.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Refunds</h2>
                <p>
                    Due to the digital nature of our services, we do not offer refunds once the one-time payment has been made and full access to the app's content has been granted. We encourage users to explore the free features of our application before making a purchase to ensure it meets your needs.
                </p>
                <p>
                    We will consider refunds only in exceptional circumstances, such as:
                </p>
                <ul>
                    <li>A duplicate payment was made for the same user account due to a technical error.</li>
                    <li>A technical issue prevents you from accessing the paid content, and we are unable to resolve the issue within a reasonable timeframe (7 business days).</li>
                </ul>
                <p>
                    To request a refund based on these exceptions, please contact our support team at <a href="mailto:hrishichavan2349@gmail.com">hrishichavan2349@gmail.com</a> with your user details and proof of payment. Refund requests will be assessed on a case-by-case basis.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
                <p>
                    If you have any questions about our Cancellations and Refunds Policy, please contact us at: <a href="mailto:hrishichavan2349@gmail.com">hrishichavan2349@gmail.com</a>
                </p>
            </motion.div>
        </div>
        </>
    );
}
