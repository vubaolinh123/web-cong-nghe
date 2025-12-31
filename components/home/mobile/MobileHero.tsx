"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Container } from "../../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function MobileHero() {
    const { dictionary } = useLanguage();

    const stats = [
        { value: "500+", label: "Dự án", icon: TrendingUp },
        { value: "98%", label: "Hài lòng", icon: Users },
        { value: "24/7", label: "Hỗ trợ", icon: Zap },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-24 pb-16">
            {/* === DIGITAL NEURAL MATRIX BACKGROUND === */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* 1. Void Base */}
                <div className="absolute inset-0 bg-[#020617]" />

                {/* 2. Cyber Perspective Grid - Moving Down */}
                <motion.div
                    className="absolute inset-0 opacity-20 animate-grid-flow"
                    style={{
                        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        maskImage: 'linear-gradient(to bottom, transparent 5%, black 40%, black 70%, transparent 95%)',
                    }}
                />

                {/* 3. Neural Nodes - Breathing Orbs */}
                <motion.div
                    className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-600/20 rounded-full blur-[100px] mix-blend-screen"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                {/* 4. Digital Data Streams (Vertical Energy Beams) */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`beam-${i}`}
                        className="absolute w-[1px] h-[30vh] bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                        style={{
                            left: `${20 + i * 30}%`,
                            top: '-30vh',
                            opacity: 0.3
                        }}
                        animate={{
                            top: ['-30vh', '130vh'],
                        }}
                        transition={{
                            duration: 3 + i * 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 1.5
                        }}
                    />
                ))}

                {/* 5. Cinematic Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
                />

                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />
            </div>

            {/* === CONTENT === */}
            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center gap-6">
                    {/* Tech Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                        <div className="relative flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0f1e] border border-cyan-500/30">
                            <Sparkles size={14} className="text-cyan-400 animate-pulse" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-white text-xs font-bold tracking-wider uppercase">
                                AI-First Agency
                            </span>
                        </div>
                    </motion.div>

                    {/* Heading - Maximum Impact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative"
                    >
                        {/* Text Glow Behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-20 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />

                        <h1 className="text-[34px] sm:text-4xl font-black text-white leading-[1.1] tracking-tight relative z-10">
                            <span className="block mb-1">{dictionary.hero.title1}</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-text drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] pb-1">
                                {dictionary.hero.title2} & {dictionary.hero.title3}
                            </span>
                            <span className="block mt-1">{dictionary.hero.title4}</span>
                        </h1>
                    </motion.div>

                    {/* Subtitle - Cyber Punctuation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative max-w-[300px] sm:max-w-sm mx-auto"
                    >
                        {/* Decorative Brackets */}
                        <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
                        <div className="absolute -right-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>

                        <p className="text-sm font-medium text-slate-300 leading-relaxed">
                            {dictionary.hero.subtitleMobile}
                        </p>
                    </motion.div>

                    {/* Stats Row - Hexagon Style */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex justify-center gap-4 w-full py-2"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm min-w-[90px]"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                            >
                                <span className="text-lg font-bold text-white mb-0.5">{stat.value}</span>
                                <span className="text-[10px] text-cyan-400/80 uppercase tracking-wider font-semibold">{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Primary CTA - The "Power Button" */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full max-w-[320px] mt-2"
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="/lien-he" className="block w-full">
                            <div className="relative group rounded-full p-[1px] overflow-hidden">
                                {/* Rotating Gradient Border */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 animate-spin-slow opacity-100 group-hover:opacity-100 transition-opacity" style={{ backgroundSize: '200% 200%' }} />

                                {/* Inner Button */}
                                <div className="relative flex items-center justify-center gap-3 w-full px-8 py-4 bg-slate-950 rounded-full group-hover:bg-slate-900 transition-colors">
                                    <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                                    </span>

                                    <span className="font-bold text-white text-base tracking-wide uppercase group-hover:text-cyan-200 transition-colors">
                                        {dictionary.hero.ctaPrimary}
                                    </span>

                                    <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </Container>

            {/* Tech Scroll Indicator */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-500/80 font-mono">Scroll</div>
                <div className="w-[1px] h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
            </motion.div>
        </section>
    );
}
