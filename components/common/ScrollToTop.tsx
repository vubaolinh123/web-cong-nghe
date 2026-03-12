"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * ScrollToTop – instantly resets scroll position when navigating between pages.
 *
 * Problem: `scroll-smooth` on <html> makes Next.js's `scrollTo(0,0)` animate
 * visually, so the new page appears "scrolled to the middle" during the animation.
 *
 * Fix: temporarily override scrollBehavior to "auto", jump to top, then restore
 * smooth scrolling on the next animation frame (anchor links still work smoothly).
 */
export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Disable smooth-scroll so the jump is instant
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo(0, 0);

        // Re-enable smooth-scroll on the next frame so anchor-link scrolls still animate
        const rafId = requestAnimationFrame(() => {
            document.documentElement.style.scrollBehavior = "";
        });

        return () => cancelAnimationFrame(rafId);
    }, [pathname]);

    return null;
}
