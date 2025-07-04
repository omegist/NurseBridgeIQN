
"use client"

import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

export function FloatingBubbles() {
    const [mounted, setMounted] = useState(false);
    const [showBubbles, setShowBubbles] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const isFlashcardPage = pathname.startsWith('/flashcards');
        if (isFlashcardPage) {
            setShowBubbles(false);
            return;
        }

        const checkTheme = () => {
            const isDark = document.documentElement.classList.contains('dark');
            setShowBubbles(!isDark);
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, [pathname, mounted]);

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
