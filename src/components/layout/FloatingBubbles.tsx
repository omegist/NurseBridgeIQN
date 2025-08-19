
"use client"

import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

export function FloatingBubbles() {
    const [showBubbles, setShowBubbles] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        const isFlashcardPage = pathname.startsWith('/flashcards');
        setShowBubbles(!isFlashcardPage);
    }, [pathname]);

    if (!showBubbles) {
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
