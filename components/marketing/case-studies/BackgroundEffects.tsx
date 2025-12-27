"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Massive Animated Gradient Mesh */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(6,182,212,0.15) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 50%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(6,182,212,0.15) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(6,182,212,0.15) 0%, transparent 50%)",
                    ],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Rotating Gradient Orbs */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={`orb-${i}`}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: 300 + i * 100,
                        height: 300 + i * 100,
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 20}%`,
                        background: i % 2 === 0
                            ? "radial-gradient(circle, rgba(34,197,94,0.2) 0%, transparent 70%)"
                            : "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                        x: [0, 50 * (i % 2 === 0 ? 1 : -1), 0],
                        y: [0, 30 * (i % 2 === 0 ? -1 : 1), 0],
                    }}
                    transition={{
                        duration: 15 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                    }}
                />
            ))}

            {/* Hexagon Grid Pattern */}
            <motion.div className="absolute inset-0 opacity-[0.04]">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hex-grid" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                            <polygon
                                points="30,0 55,14 55,38 30,52 5,38 5,14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                className="text-green-400"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hex-grid)" />
                </svg>
            </motion.div>

            {/* Radial Grid Lines */}
            <div className="absolute inset-0" style={{
                background: `
                    repeating-linear-gradient(90deg, rgba(34,197,94,0.03) 0px, transparent 1px, transparent 80px, rgba(34,197,94,0.03) 81px),
                    repeating-linear-gradient(0deg, rgba(6,182,212,0.03) 0px, transparent 1px, transparent 80px, rgba(6,182,212,0.03) 81px)
                `
            }} />
        </div>
    );
}
