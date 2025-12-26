"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Rocket, TrendingUp, Users, Zap } from "lucide-react";
import { Container, Button } from "../../common";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function MobileHero() {
    const { dictionary } = useLanguage();

    const stats = [
        { value: "500+", label: "Dự án", icon: TrendingUp },
        { value: "98%", label: "Hài lòng", icon: Users },
        { value: "24/7", label: "Hỗ trợ", icon: Zap },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-16">
            {/* === SIMPLE BACKGROUND === */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                {/* Static Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)',
                    }}
                />

                {/* Static Gradient Orbs */}
                <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-500/15 rounded-full blur-[80px]" />
                <div className="absolute bottom-1/4 right-0 w-56 h-56 bg-green-500/15 rounded-full blur-[70px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />

                {/* Vignette Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.7)_100%)]" />
            </div>

            {/* === CONTENT === */}
            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center gap-5">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-cyan-500/30 backdrop-blur-sm text-xs font-medium shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                    >
                        <Sparkles size={14} className="text-yellow-400" />
                        <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-green-300 bg-clip-text text-transparent font-bold">
                            AI-First Company
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-bold text-white leading-tight"
                    >
                        <span className="block">{dictionary.hero.title1}</span>
                        <span className="block mt-2">
                            <span className="inline-block bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                {dictionary.hero.title2}
                            </span>
                            {" "} & {" "}
                            <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                {dictionary.hero.title3}
                            </span>
                        </span>
                        <span className="block mt-2">{dictionary.hero.title4}</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed"
                    >
                        {dictionary.hero.subtitle}
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex justify-center gap-6 w-full"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.4 + i * 0.1, type: "spring" }}
                            >
                                <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-[10px] text-slate-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col w-full gap-3 mt-2"
                    >
                        <Link href="/lien-he" className="w-full">
                            <motion.div whileTap={{ scale: 0.97 }}>
                                <Button
                                    size="lg"
                                    className="w-full group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-0 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                                >
                                    <Rocket className="mr-2 group-hover:rotate-12 transition-transform" size={18} />
                                    {dictionary.hero.ctaPrimary}
                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                        </Link>
                        <motion.div whileTap={{ scale: 0.97 }}>
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full border-slate-700 hover:border-cyan-500/50 bg-slate-900/50 backdrop-blur-sm"
                            >
                                <Play className="mr-2 text-cyan-400" size={18} />
                                {dictionary.hero.ctaSecondary}
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>

            {/* Static Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="w-5 h-8 rounded-full border-2 border-slate-700 flex justify-center pt-1.5">
                    <div className="w-1 h-2 rounded-full bg-cyan-500" />
                </div>
            </div>
        </section>
    );
}
