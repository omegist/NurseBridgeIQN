
"use client"

import { useEffect, useState } from "react";

export function FloatingBubbles() {
    const [showBubbles, setShowBubbles] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            const isDark = document.documentElement.classList.contains('dark');
            setShowBubbles(!isDark);
        };

        // Initial check in case the theme is already set on load
        checkTheme();

        // Use MutationObserver to watch for class changes on the <html> element,
        // which is how the theme is applied.
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        // Clean up the observer when the component unmounts
        return () => observer.disconnect();
    }, []);

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
