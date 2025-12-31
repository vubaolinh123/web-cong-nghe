"use client";

import { motion } from "framer-motion";

interface FloatingPathsProps {
    position: number;
    className?: string;
}

/**
 * Animated SVG paths creating a flowing digital network effect.
 * Customized for dark tech/AI theme with Cyan/Blue tones.
 */
export function FloatingPaths({ position, className = "" }: FloatingPathsProps) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        // Gradient from deep blue to cyan
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
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
                        stroke={`url(#gradient-${path.id})`}
                        strokeWidth={path.width}
                        strokeOpacity={0.25 + path.id * 0.025}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.4, 0.8, 0.4],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
                {/* Gradient definitions for each path */}
                <defs>
                    {paths.map((path) => (
                        <linearGradient
                            key={`gradient-${path.id}`}
                            id={`gradient-${path.id}`}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop
                                offset="0%"
                                stopColor={path.id % 2 === 0 ? "#3b82f6" : "#06b6d4"} // blue-500 / cyan-500
                                stopOpacity={0.6}
                            />
                            <stop
                                offset="50%"
                                stopColor={path.id % 3 === 0 ? "#8b5cf6" : "#22d3ee"} // violet-500 / cyan-400
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="100%"
                                stopColor={path.id % 2 === 0 ? "#06b6d4" : "#3b82f6"} // cyan-500 / blue-500
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
 * Use this as a complete background layer.
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
