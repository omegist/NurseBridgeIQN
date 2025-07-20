
"use client"

import { AuthForm } from "@/components/auth/AuthForm";
import { useEffect } from "react";
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

    // While we're checking for auth state or if the user is logged in (and about to be redirected),
    // show nothing, as the AuthProvider will show a global loader.
    if (loading || user) {
        return null;
    }

    // Only show the AuthForm once we're sure the user is not logged in.
    return <AuthForm />;
}
