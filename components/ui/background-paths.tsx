"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useSectionActivity } from "@/hooks/useSectionActivity";

interface FloatingPathsProps {
    position: number;
    className?: string;
}

/**
 * Lightweight animated SVG path network.
 * Reduced from 24 → 8 paths and pauses animation when scrolled out of view.
 */
export function FloatingPaths({ position, className = "" }: FloatingPathsProps) {
    const shouldReduceMotion = useReducedMotion();
    const containerRef = useRef<HTMLDivElement>(null);
    const { isActive } = useSectionActivity(containerRef, { threshold: 0.01 });

    // 8 paths instead of 24 — 3× fewer compositing layers
    const pathCount = shouldReduceMotion ? 4 : 8;

    const paths = Array.from({ length: pathCount }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.06,
    }));

    return (
        <div ref={containerRef} className={`absolute inset-0 pointer-events-none ${className}`}>
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Digital Network Background</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={`url(#gradient-fp-${path.id})`}
                        strokeWidth={path.width}
                        strokeOpacity={0.25 + path.id * 0.04}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={
                            shouldReduceMotion
                                ? { pathLength: 1, opacity: 0.45 }
                                : isActive
                                ? {
                                      pathLength: 1,
                                      opacity: [0.4, 0.75, 0.4],
                                      pathOffset: [0, 1, 0],
                                  }
                                : { opacity: 0.4 }   // pause when off-screen
                        }
                        transition={
                            shouldReduceMotion
                                ? { duration: 0.6, ease: "linear" }
                                : {
                                      duration: 25 + path.id * 0.5,
                                      repeat: Infinity,
                                      ease: "linear",
                                  }
                        }
                    />
                ))}
                <defs>
                    {paths.map((path) => (
                        <linearGradient
                            key={`gradient-fp-${path.id}`}
                            id={`gradient-fp-${path.id}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop
                                offset="0%"
                                stopColor={path.id % 2 === 0 ? "#3b82f6" : "#06b6d4"}
                                stopOpacity={0.6}
                            />
                            <stop
                                offset="50%"
                                stopColor={path.id % 3 === 0 ? "#8b5cf6" : "#22d3ee"}
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="100%"
                                stopColor={path.id % 2 === 0 ? "#06b6d4" : "#3b82f6"}
                                stopOpacity={0.6}
                            />
                        </linearGradient>
                    ))}
                </defs>
            </svg>
        </div>
    );
}

/**
 * Full background component with dual floating paths.
 */
export function BackgroundPaths({ className = "" }: { className?: string }) {
    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
        </div>
    );
}

export default BackgroundPaths;
