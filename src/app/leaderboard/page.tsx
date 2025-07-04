
"use client"

import { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy, ArrowLeft, Medal } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface LeaderboardUser {
  id: string;
  name: string;
  score: number;
  avatar: string | null;
}

const getMedalColor = (rank: number) => {
  if (rank === 1) return "text-yellow-400";
  if (rank === 2) return "text-gray-400";
  if (rank === 3) return "text-orange-400";
  return "text-muted-foreground";
};

export default function LeaderboardPage() {
    const router = useRouter();
    const [users, setUsers] = useState<LeaderboardUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersQuery = query(collection(db, "users"), orderBy("score", "desc"));
                const querySnapshot = await getDocs(usersQuery);
                const fetchedUsers: LeaderboardUser[] = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    fetchedUsers.push({
                        id: doc.id,
                        name: data.name || "Anonymous",
                        score: data.score || 0,
                        avatar: data.avatar || null,
                    });
                });
                setUsers(fetchedUsers);
            } catch (error) {
                console.error("Error fetching leaderboard data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="flex flex-col sm:relative items-center sm:justify-center mb-10 gap-4 sm:gap-0">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex justify-start sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2"
                >
                    <Button variant="outline" onClick={() => router.push('/')}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <Trophy className="h-12 w-12 mx-auto text-yellow-500 mb-2" />
                    <h1 className="text-4xl font-bold font-headline mb-2">
                        Leaderboard
                    </h1>
                    <p className="text-muted-foreground">
                        See who's at the top of the nursing world.
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
                        <CardTitle>Top Nurses</CardTitle>
                        <CardDescription>Rankings are based on total quiz scores.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[80px] text-center">Rank</TableHead>
                                    <TableHead>Player</TableHead>
                                    <TableHead className="text-right">Score</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {isLoading ? (
                                    Array.from({ length: 5 }).map((_, i) => (
                                        <TableRow key={i}>
                                            <TableCell className="text-center"><Skeleton className="h-6 w-6 rounded-full mx-auto" /></TableCell>
                                            <TableCell className="flex items-center gap-4">
                                                <Skeleton className="h-10 w-10 rounded-full" />
                                                <Skeleton className="h-5 w-32" />
                                            </TableCell>
                                            <TableCell className="text-right"><Skeleton className="h-5 w-20 ml-auto" /></TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    users.map((user, index) => (
                                        <TableRow key={user.id} className={cn(index < 3 && "bg-accent/50")}>
                                            <TableCell className="text-center font-bold text-lg">
                                                <div className="flex items-center justify-center gap-2">
                                                    {index < 3 ? (
                                                        <Medal className={cn("h-6 w-6", getMedalColor(index + 1))} />
                                                    ) : (
                                                        <span>{index + 1}</span>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-4">
                                                    <Avatar>
                                                        <AvatarImage src={user.avatar || undefined} alt={user.name} />
                                                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                    <span className="font-medium">{user.name}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right font-bold text-lg text-primary">{user.score.toLocaleString()}</TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
