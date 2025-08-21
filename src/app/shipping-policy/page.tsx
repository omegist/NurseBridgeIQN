
"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";

export default function ShippingPolicyPage() {
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
                <h1 className="text-4xl font-bold font-headline mb-4">Shipping Policy</h1>
                <p className="text-lg text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Service Type</h2>
                <p>
                    NURSE IQN provides a purely digital service. All content, including quizzes, tests, flashcards, and handbooks, is accessible within our web application. We do not sell or ship any physical products.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Delivery of Service</h2>
                <p>
                    Upon successful completion of the one-time payment of 2000 INR, full access to all features and content within the NURSE IQN application is granted immediately. There is no physical delivery and no shipping involved.
                </p>
                <p>
                    You will receive an email confirmation of your payment from our payment processor, Razorpay, and your account within the app will be instantly upgraded to "Paid" status, unlocking all previously locked content.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Shipping Fees</h2>
                <p>
                    As our product is a digital service, there are no shipping fees. The price you see is the total price for full, unlimited access to the app's content.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
                <p>
                    If you have any questions about our shipping policy or are experiencing issues with accessing your unlocked content after payment, please contact our support team at: <a href="mailto:hrishichavan2349@gmail.com">hrishichavan2349@gmail.com</a>
                </p>
            </motion.div>
        </div>
        </>
    );
}
