"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Wrench, Award } from "lucide-react";
import { Container } from "../common";
import { useTechnologyTranslations } from "@/lib/i18n/pages/technology";

export default function Commitments() {
    const t = useTechnologyTranslations();

    const commitmentIcons = [Shield, Clock, Wrench];

    return (
        <section className="relative py-16 sm:py-24 bg-slate-950 overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Massive Rotating Gradient Orb */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                        scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                />

                {/* Shield Pattern Background */}
                <motion.div className="absolute inset-0 opacity-[0.03]">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="shield-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                                <path d="M40,10 L60,25 L60,45 L40,60 L20,45 L20,25 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-500" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#shield-pattern)" />
                    </svg>
                </motion.div>

                {/* Floating Particles */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className={`absolute w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-pink-400'
                            }`}
                        style={{
                            left: `${10 + i * 8}%`,
                            top: `${15 + (i % 4) * 20}%`,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0, 0.8, 0],
                            scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 4 + i * 0.3,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Animated Commitment Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10">
                    {[...Array(3)].map((_, i) => (
                        <motion.line
                            key={`line-${i}`}
                            x1="10%"
                            y1={`${30 + i * 20}%`}
                            x2="90%"
                            y2={`${30 + i * 20}%`}
                            stroke="url(#commitmentGradient)"
                            strokeWidth="2"
                            strokeDasharray="10,5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: i * 0.3 }}
                        />
                    ))}
                    <defs>
                        <linearGradient id="commitmentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="50%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Radial Gradient Mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.1)_0%,transparent_50%)]" />

                {/* Linear Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
            </div>

            <Container className="relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 backdrop-blur-sm"
                    >
                        <motion.span
                            className="w-2 h-2 rounded-full bg-cyan-500"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                            {t.commitments.badge}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                    >
                        <span className="text-white">{t.commitments.title} </span>
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                backgroundSize: "200% 200%"
                            }}
                        >
                            {t.commitments.titleHighlight}
                        </motion.span>
                    </motion.h2>

                    <p className="text-slate-400 text-lg max-w-3xl mx-auto">
                        {t.commitments.description}
                    </p>
                </motion.div>

                {/* Commitments Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {t.commitments.items.map((item, index) => {
                        const Icon = commitmentIcons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden backdrop-blur-sm"
                            >
                                {/* Animated Gradient Background on Hover */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        backgroundSize: "200% 200%"
                                    }}
                                    animate={{
                                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />

                                {/* Glow Effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-cyan-500/10" />

                                {/* Icon */}
                                <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <motion.div
                                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30"
                                        animate={{
                                            rotate: [0, 360],
                                        }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />
                                    {/* Additional Glow on Icon */}
                                    <motion.div
                                        className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/40 to-purple-500/40 blur-lg opacity-0 group-hover:opacity-100"
                                        transition={{ duration: 0.3 }}
                                    />
                                    <Icon className="relative w-8 h-8 text-cyan-400 drop-shadow-lg" />
                                </div>

                                {/* Content */}
                                <h3 className="relative text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {item.title}
                                </h3>

                                <p className="relative text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>

                                {/* Corner Accent with Shimmer */}
                                <motion.div
                                    className="absolute top-0 right-0 w-24 h-24 overflow-hidden opacity-30 group-hover:opacity-100"
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rotate-45 translate-x-16 -translate-y-16"
                                        animate={{
                                            rotate: [45, 405],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />
                                </motion.div>

                                {/* Border Shimmer Effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                                    style={{
                                        background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)",
                                    }}
                                    animate={{
                                        backgroundPosition: ["0% 0%", "200% 0%"],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Info Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border border-cyan-500/30 backdrop-blur-sm overflow-hidden"
                >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Award className="w-8 h-8 text-cyan-400" />
                        </motion.div>
                        <p className="text-white font-semibold text-lg">
                            {t.commitments.warrantyBadge}
                        </p>
                    </div>

                    {/* Animated Background */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
                        animate={{
                            x: ["-100%", "100%"],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </motion.div>
            </Container>
        </section>
    );
}
