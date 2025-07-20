
"use client"

import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, CalendarDays, Pencil, Loader2 } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function ProfilePage() {
    const { user, loading, updateUserAvatar } = useAuth();
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploading, setIsUploading] = useState(false);
    const { toast } = useToast();
    
    useEffect(() => {
        if (!loading && !user) {
            router.push("/auth");
        }
    }, [user, loading, router]);

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
        return null;
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

             <div className="mt-12 flex justify-end">
                <Button asChild className="bg-accent hover:bg-accent/90">
                    <Link href="/topics">Back to Topics</Link>
                </Button>
            </div>
        </div>
    );
}
