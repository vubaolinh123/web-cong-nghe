"use client";

import { RefObject, useEffect, useRef, useState } from "react";

interface UseSectionActivityOptions {
    threshold?: number;
    rootMargin?: string;
}

interface UseSectionActivityResult<T extends HTMLElement> {
    ref: RefObject<T | null>;
    isInView: boolean;
    isPageVisible: boolean;
    isActive: boolean;
}

export function useSectionActivity<T extends HTMLElement>(
    targetRef?: RefObject<T | null>,
    options: UseSectionActivityOptions = {}
): UseSectionActivityResult<T> {
    const internalRef = useRef<T | null>(null);
    const ref = targetRef ?? internalRef;

    const [isInView, setIsInView] = useState(true);
    const [isPageVisible, setIsPageVisible] = useState(true);

    const { threshold = 0.2, rootMargin = "0px" } = options;

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [ref, rootMargin, threshold]);

    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsPageVisible(document.visibilityState === "visible");
        };

        handleVisibilityChange();
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return {
        ref,
        isInView,
        isPageVisible,
        isActive: isInView && isPageVisible,
    };
}
