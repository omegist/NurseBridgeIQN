
"use client"

import { AuthForm } from "@/components/auth/AuthForm";
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function AuthPage() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // If loading is finished and we have a user, redirect to the homepage.
        if (!loading && user) {
            router.push('/');
        }
    }, [user, loading, router]);

    // While we're checking for auth state or if the user is logged in (and about to be redirected),
    // show a loading spinner.
    if (loading || user) {
        return (
            <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
                <Loader2 className="h-16 w-16 animate-spin text-primary" />
            </div>
        );
    }

    // Only show the AuthForm once we're sure the user is not logged in.
    return <AuthForm />;
}
