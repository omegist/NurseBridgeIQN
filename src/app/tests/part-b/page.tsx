
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Construction } from "lucide-react";
import { motion } from "framer-motion";

export default function PartBPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto py-10 px-4 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full max-w-lg text-center"
        >
            <Card className="shadow-2xl rounded-2xl">
                <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                        <Construction className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-3xl">Part B Coming Soon!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">
                        We are working hard to bring you more practice tests. Please check back later.
                    </p>
                    <Button onClick={() => router.push('/tests')}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Test Selection
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    </div>
  );
}
