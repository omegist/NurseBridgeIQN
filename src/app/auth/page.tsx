
"use client"

import { AuthForm } from "@/components/auth/AuthForm";
import { Suspense, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function AuthPage() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // If loading is finished and we have a user, redirect to the homepage.
        if (!loading && user) {
            router.push('/');
        }
    }, [user, loading, router]);

    // Show a loading spinner while checking auth status or during redirection.
    if (loading || user) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    // Only show the AuthForm if the user is not logged in and loading is complete.
    return (
        <Suspense fallback={<div className="flex items-center justify-center h-screen"><div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div></div>}>
            <AuthForm />
        </Suspense>
    );
}
