"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Container } from "../../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// CSS for mobile-optimized animations
const mobileAnimationStyles = `
@keyframes mobile-pulse-cyan {
    0%, 100% { opacity: 0.15; transform: translate3d(0,0,0) scale(1); }
    50% { opacity: 0.25; transform: translate3d(0,0,0) scale(1.05); }
}
@keyframes mobile-pulse-purple {
    0%, 100% { opacity: 0.1; transform: translate3d(0,0,0) scale(1); }
    50% { opacity: 0.2; transform: translate3d(0,0,0) scale(1.05); }
}
@keyframes mobile-beam {
    0% { transform: translate3d(0, -100%, 0); }
    100% { transform: translate3d(0, 400%, 0); }
}
@keyframes mobile-scroll-fade {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.7; }
}
`;

export default function MobileHero() {
    const { dictionary } = useLanguage();

    const stats = [
        { value: "500+", label: dictionary.homepageServices.stats.projects, icon: TrendingUp },
        { value: "98%", label: dictionary.homepageServices.stats.satisfaction, icon: Users },
        { value: "24/7", label: dictionary.hero.stats.support, icon: Zap },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-24 pb-16">
            {/* Inject mobile-optimized CSS animations */}
            <style jsx>{mobileAnimationStyles}</style>

            {/* === OPTIMIZED BACKGROUND FOR MOBILE === */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden transform-gpu">
                {/* 1. Void Base */}
                <div className="absolute inset-0 bg-[#020617]" />

                {/* 2. Static Grid - No animation for better performance */}
                <div
                    className="absolute inset-0 opacity-15 transform-gpu"
                    style={{
                        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.25) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(6, 182, 212, 0.25) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        maskImage: 'linear-gradient(to bottom, transparent 5%, black 40%, black 70%, transparent 95%)',
                    }}
                />

                {/* 3. Neural Orbs - Using CSS animations + gradient instead of blur for performance */}
                <div
                    className="absolute top-1/4 -left-20 w-80 h-80 rounded-full transform-gpu"
                    style={{
                        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
                        animation: 'mobile-pulse-cyan 8s ease-in-out infinite',
                        willChange: 'transform, opacity',
                    }}
                />
                <div
                    className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full transform-gpu"
                    style={{
                        background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
                        animation: 'mobile-pulse-purple 10s ease-in-out infinite',
                        animationDelay: '2s',
                        willChange: 'transform, opacity',
                    }}
                />

                {/* 4. Simplified Data Streams - Only 2 beams with CSS animation */}
                {[0, 1].map((i) => (
                    <div
                        key={`beam-${i}`}
                        className="absolute w-[1px] h-[25vh] transform-gpu"
                        style={{
                            left: `${25 + i * 50}%`,
                            top: 0,
                            background: 'linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.3), transparent)',
                            animation: `mobile-beam ${4 + i * 2}s linear infinite`,
                            animationDelay: `${i * 1.5}s`,
                            willChange: 'transform',
                        }}
                    />
                ))}

                {/* 5. Static Vignette - No grain overlay on mobile for performance */}
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
                                {dictionary.hero.partnerBadge}
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
                                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-900/60 border border-slate-800 min-w-[90px]"
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
                                {/* Static Gradient Border - No animation for mobile performance */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400" />

                                {/* Inner Button */}
                                <div className="relative flex items-center justify-center gap-3 w-full px-8 py-4 bg-slate-950 rounded-full">
                                    {/* Static dot instead of ping animation */}
                                    <span className="inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>

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

            {/* Tech Scroll Indicator - CSS animation for better performance */}
            <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                style={{ animation: 'mobile-scroll-fade 3s ease-in-out infinite' }}
            >
                <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-500/80 font-mono">{dictionary.hero.scrollHint}</div>
                <div className="w-[1px] h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
            </div>
        </section>
    );
}
