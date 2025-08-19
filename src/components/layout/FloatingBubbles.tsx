
"use client"

import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { useTheme } from "@/contexts/ThemeContext";

export function FloatingBubbles() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [showBubbles, setShowBubbles] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const isFlashcardPage = pathname.startsWith('/flashcards');
        if (isFlashcardPage) {
            setShowBubbles(false);
        } else {
            setShowBubbles(true);
        }

    }, [pathname, mounted, theme]);

    if (!mounted || !showBubbles) {
        return null;
    }

    return (
        <ul className="bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    );
}
