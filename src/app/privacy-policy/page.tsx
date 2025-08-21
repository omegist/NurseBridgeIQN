
"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";

export default function PrivacyPolicyPage() {
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
                <h1 className="text-4xl font-bold font-headline mb-4">Privacy Policy</h1>
                <p className="text-lg text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p>
                    Welcome to NURSE IQN. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
                <p>
                    We may collect information about you in a variety of ways. The information we may collect on the App includes:
                </p>
                <ul>
                    <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, and email address, that you voluntarily give to us when you register with the App.</li>
                    <li><strong>Financial Data:</strong> We use Razorpay for payment processing. We do not store or collect your payment card details. That information is provided directly to our third-party payment processors whose use of your personal information is governed by their Privacy Policy.</li>
                    <li><strong>Usage Data:</strong> Information such as your quiz scores, progress, and test results are collected to provide you with the core features of the app, like tracking your performance.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use of Your Information</h2>
                <p>
                    Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the App to:
                </p>
                <ul>
                    <li>Create and manage your account.</li>
                    <li>Process payments and refunds.</li>
                    <li>Monitor and analyze usage and trends to improve your experience with the App.</li>
                    <li>Notify you of updates to the App.</li>
                    <li>Respond to your support requests.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclosure of Your Information</h2>
                <p>
                    We do not share, sell, rent or trade your information with third parties for their commercial purposes.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Security of Your Information</h2>
                <p>
                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
                <p>
                    If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:hrishichavan2349@gmail.com">hrishichavan2349@gmail.com</a>
                </p>
            </motion.div>
        </div>
        </>
    );
}
