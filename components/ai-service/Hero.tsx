"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { Container, Button } from "../common";
import { useEffect, useRef } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { useTechnologyTranslations } from "@/lib/i18n/pages/technology";
import { useSectionActivity } from "@/hooks/useSectionActivity";

export default function Hero() {
    const t = useTechnologyTranslations();
    const shouldReduceMotion = useReducedMotion();
    const videoRef = useRef<HTMLVideoElement>(null);
    const { ref: heroRef, isActive } = useSectionActivity<HTMLElement>(undefined, {
        threshold: 0.3,
    });

    const stats = [
        { value: t.hero.stats.projects.value, label: t.hero.stats.projects.label },
        { value: t.hero.stats.satisfaction.value, label: t.hero.stats.satisfaction.label },
        { value: t.hero.stats.efficiency.value, label: t.hero.stats.efficiency.label },
    ];

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (shouldReduceMotion || !isActive) {
            video.pause();
            return;
        }

        const playPromise = video.play();
        if (playPromise) {
            playPromise.catch(() => {
                // Ignore autoplay interruptions
            });
        }
    }, [isActive, shouldReduceMotion]);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen md:h-screen md:min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-950 py-20 md:py-0"
        >
            {/* === STUNNING BACKGROUND EFFECTS === */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                {/* Spotlight Effects */}
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="rgba(6, 182, 212, 0.5)"
                />
                <Spotlight
                    className="-top-40 right-0 md:right-60 md:-top-20"
                    fill="rgba(139, 92, 246, 0.3)"
                />

                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        autoPlay={!shouldReduceMotion}
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover opacity-25 mix-blend-screen"
                    >
                        <source src="/video/technology-intro.mp4" type="video/mp4" />
                    </video>
                </div>

                {/* Static Grid */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d420_1px,transparent_1px),linear-gradient(to_bottom,#06b6d420_1px,transparent_1px)] bg-[size:60px_60px]"
                        style={{
                            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)'
                        }}
                    />
                </div>

                {/* Static Central Glow - Pure CSS */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[100px]" style={{ transform: 'translate(-50%, -50%)' }} />
                    <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[80px]" style={{ transform: 'translate(-50%, -50%)' }} />
                </div>

                {/* Digital Noise Overlay */}
                <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Vignette Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />
            </div>

            {/* === CONTENT === */}
            <Container className="relative z-20 pt-24 sm:pt-0 dvcn-container">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge with Pulse */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-cyan-500/40 backdrop-blur-xl mb-8 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                        </span>
                        <span className="text-sm font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent tracking-wide uppercase">
                            {t.hero.badge}
                        </span>
                    </motion.div>

                    {/* Headline with Glowing Effect */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 tracking-tight"
                    >
                        <span className="relative">
                            {t.hero.title}
                            {/* Text glow */}
                            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-cyan-500/30 to-blue-500/30 -z-10" />
                        </span>
                        <motion.span
                            className="block mt-2 pb-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent bg-300% relative"
                            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        >
                            {t.hero.titleHighlight}
                            {/* Animated underline */}
                            <motion.span
                                className="absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
                                initial={{ width: 0, x: '-50%' }}
                                animate={{ width: '60%' }}
                                transition={{ duration: 1, delay: 0.8 }}
                            />
                        </motion.span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg sm:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                            {t.hero.highlightText}
                        </span>
                        <span className="text-slate-400"> — </span>
                        {t.hero.description}
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link href="#tu-van" scroll={true}>
                            <Button
                                size="lg"
                                className="relative min-w-[240px] h-14 text-lg font-bold group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 border-0 rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] overflow-hidden transition-all duration-300"
                            >
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                                <div className="flex items-center gap-2 relative z-10">
                                    <Rocket className="group-hover:-translate-y-1 group-hover:rotate-12 transition-transform ease-out" size={24} />
                                    <span>{t.hero.ctaPrimary}</span>
                                </div>
                            </Button>
                        </Link>

                        <Link href="#services">
                            <motion.div
                                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer group px-6 py-3 rounded-full border border-slate-700 hover:border-cyan-500/50 bg-slate-900/50 backdrop-blur-sm"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="text-base font-medium">{t.hero.ctaSecondary}</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </Container>

            {/* Static Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
                    <div className="w-1.5 h-3 rounded-full bg-cyan-500" />
                </div>
            </div>
        </section>
    );
}
