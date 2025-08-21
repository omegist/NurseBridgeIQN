
"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";

const accuracyData = [
    { topic: 'Pharmacology', accuracy: 88, fill: 'hsl(var(--chart-1))' },
    { topic: 'Physiology', accuracy: 92, fill: 'hsl(var(--chart-2))' },
    { topic: 'Neurology', accuracy: 78, fill: 'hsl(var(--chart-3))' },
    { topic: 'Anatomy', accuracy: 95, fill: 'hsl(var(--chart-4))' },
];

export default function AccuracyPage() {
    const router = useRouter();

    return (
      <>
        <Header />
        <div className="container mx-auto py-10 px-4">
             <div className="flex flex-col sm:relative items-center sm:justify-center mb-10 gap-4 sm:gap-0">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex justify-start sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2"
                >
                    <Button variant="outline" onClick={() => router.push('/topics')}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Topics
                    </Button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h1 className="text-4xl font-bold font-headline mb-2">
                        Your Accuracy
                    </h1>
                    <p className="text-muted-foreground">
                        Track your performance across different quiz topics.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Card className="shadow-2xl rounded-2xl">
                    <CardHeader>
                        <CardTitle className="font-headline">Accuracy per Topic</CardTitle>
                        <CardDescription>Percentage of correct answers in each category.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={accuracyData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                                <XAxis dataKey="topic" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} unit="%" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'hsl(var(--background))',
                                        borderColor: 'hsl(var(--border))',
                                        borderRadius: 'var(--radius)',
                                    }}
                                    cursor={{ fill: 'hsl(var(--accent))', fillOpacity: 0.1 }}
                                />
                                <Legend wrapperStyle={{ paddingBottom: '20px' }}/>
                                <Bar dataKey="accuracy" name="Accuracy (%)" barSize={40} radius={[4, 4, 0, 0]}>
                                    {accuracyData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
      </>
    );
}
