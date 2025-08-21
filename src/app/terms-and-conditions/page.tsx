
"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";

export default function TermsAndConditionsPage() {
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
                <h1 className="text-4xl font-bold font-headline mb-4">Terms and Conditions</h1>
                <p className="text-lg text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
                <p>
                    By using our application, NURSE IQN (the "App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
                <p>
                    NURSE IQN provides a platform for nursing students and professionals to practice with quizzes, tests, and other educational materials. Some content is available for free, while full access requires a one-time payment.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
                <p>
                    You must register for an account to use the App. You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Payments</h2>
                <p>
                    Full access to the App's content is subject to a one-time payment of 2000 INR. All payments are processed through our third-party payment processor, Razorpay. By making a payment, you agree to their terms of service.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
                <p>
                    All content within the App, including but not limited to text, graphics, logos, and software, is the property of NURSE IQN or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Disclaimer of Warranties</h2>
                 <p>
                    The App is provided on an "as is" and "as available" basis. While we strive to provide high-quality educational content, we make no warranties that the App will be error-free or that the content will be accurate or reliable. The content is for educational purposes only and is not a substitute for professional medical or nursing advice.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
                <p>
                    In no event shall NURSE IQN be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the App.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
                <p>
                    We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new terms on this page. Your continued use of the App after such changes constitutes your acceptance of the new terms.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
                <p>
                    If you have any questions about these Terms and Conditions, please contact us at: <a href="mailto:hrishichavan2349@gmail.com">hrishichavan2349@gmail.com</a>
                </p>
            </motion.div>
        </div>
        </>
    );
}
