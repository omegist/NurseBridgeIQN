
"use client"

import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, CalendarDays, Award, Trophy, Pencil, Loader2 } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { badges as allBadges, type Badge as BadgeType } from "@/data/badges"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export default function ProfilePage() {
    const { user, loading, updateUserAvatar } = useAuth();
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploading, setIsUploading] = useState(false);
    const { toast } = useToast();
    const [earnedBadges, setEarnedBadges] = useState<BadgeType[]>([]);
    const [isLoadingBadges, setIsLoadingBadges] = useState(true);

    useEffect(() => {
        if (!loading && !user) {
            router.push("/auth");
        }
    }, [user, loading, router]);

    useEffect(() => {
        if (!user) return;

        const fetchBadges = async () => {
            setIsLoadingBadges(true);
            try {
                const badgesRef = collection(db, 'users', user.uid, 'userBadges');
                const badgesSnap = await getDocs(badgesRef);
                const userBadgeIds = badgesSnap.docs.map(doc => doc.id);
                
                const filteredBadges = allBadges.filter(b => userBadgeIds.includes(b.name));
                setEarnedBadges(filteredBadges);

            } catch (error) {
                console.error("Error fetching user badges:", error);
            } finally {
                setIsLoadingBadges(false);
            }
        };

        fetchBadges();
    }, [user]);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setIsUploading(true);
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                toast({
                    variant: "destructive",
                    title: "File Too Large",
                    description: "Please select an image smaller than 5MB.",
                });
                setIsUploading(false);
                return;
            }
            if (!file.type.startsWith('image/')) {
                toast({
                    variant: "destructive",
                    title: "Invalid File Type",
                    description: "Please select an image file (e.g., JPG, PNG, GIF).",
                });
                setIsUploading(false);
                return;
            }
            await updateUserAvatar(file);
            setIsUploading(false);
        }
    };

    const handleAvatarClick = () => {
        if (!isUploading) {
            fileInputRef.current?.click();
        }
    };

    if (loading || !user) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    const nameInitials = user.name?.split(' ').map(n => n[0]).join('') || 'U';
    const joinYear = user.createdAt ? new Date(user.createdAt).getFullYear() : new Date().getFullYear();

    return (
        <div className="container mx-auto py-10 px-4">
            <motion.div
                className="w-full flex justify-start mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Button variant="outline" onClick={() => router.back()}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="mb-8 p-6 shadow-2xl rounded-2xl">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="relative group">
                            <Avatar className="h-24 w-24 text-3xl cursor-pointer" onClick={handleAvatarClick}>
                                <AvatarImage src={user.avatar || undefined} alt={user.name || "User"} />
                                <AvatarFallback className="bg-primary/20">{nameInitials}</AvatarFallback>
                            </Avatar>
                            <div 
                                className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer" 
                                onClick={handleAvatarClick}
                            >
                                {isUploading ? (
                                    <Loader2 className="h-8 w-8 text-white animate-spin" />
                                ) : (
                                    <Pencil className="h-8 w-8 text-white" />
                                )}
                            </div>
                            <Input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                                accept="image/*"
                                disabled={isUploading}
                            />
                        </div>

                        <div className="flex-1 text-center sm:text-left">
                            <h1 className="text-4xl font-bold font-headline">{user.name}</h1>
                            <p className="text-muted-foreground flex items-center justify-center sm:justify-start gap-2 mt-1">
                                <Mail className="h-4 w-4" />
                                {user.email}
                            </p>
                            <div className="flex items-center justify-center sm:justify-start gap-4 mt-4 text-muted-foreground text-sm">
                                <div className="flex items-center gap-2">
                                    <Award className="h-4 w-4 text-orange-400" />
                                    <span>{earnedBadges.length} Badge{earnedBadges.length !== 1 && 's'} Earned</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4" />
                                    <span>Member since {joinYear}</span>
                                </div>
                            </div>
                             <div className="mt-6 pt-6 border-t border-border/50 text-center sm:text-left">
                                 <p className="text-sm font-medium text-muted-foreground">Total Score</p>
                                 <p className="text-4xl font-bold text-accent">{user.score.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="text-2xl font-bold font-headline mb-4 flex items-center gap-2">
                   <Trophy className="h-6 w-6 text-accent"/>
                   Achievements & Badges
                </h2>
                {isLoadingBadges ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 p-4 bg-card/50 rounded-lg">
                                <Skeleton className="h-24 w-24 rounded-full" />
                                <Skeleton className="h-5 w-3/4 mt-2" />
                                <Skeleton className="h-4 w-full" />
                            </div>
                        ))}
                    </div>
                ) : earnedBadges.length > 0 ? (
                    <Card className="p-6 bg-card/50 backdrop-blur-sm">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                            {earnedBadges.map((badge) => (
                                <motion.div
                                    key={badge.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col items-center text-center"
                                >
                                    <div className={cn("mb-3 rounded-full p-4 w-20 h-20 flex items-center justify-center transition-all duration-300 transform hover:scale-110", badge.bgColor)}>
                                        <badge.icon className={cn("w-10 h-10", badge.color)} />
                                    </div>
                                    <p className="font-semibold font-headline">{badge.name}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </Card>
                ) : (
                    <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
                        <p className="text-muted-foreground">You haven't earned any badges yet. Complete quizzes to start collecting them!</p>
                    </Card>
                )}
            </motion.div>
             <div className="mt-12 flex justify-end">
                <Button asChild className="bg-accent hover:bg-accent/90">
                    <Link href="/topics">Back to Topics</Link>
                </Button>
            </div>
        </div>
    );
}
