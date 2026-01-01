"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { Container, Button } from "../common";
import { useRef } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { useMarketingTranslations } from "@/lib/i18n/pages/marketing";


export default function Hero() {
    const t = useMarketingTranslations();
    const heroRef = useRef<HTMLElement>(null);

    const stats = [
        { value: t.hero.stats.campaigns.value, label: t.hero.stats.campaigns.label },
        { value: t.hero.stats.roi.value, label: t.hero.stats.roi.label },
        { value: t.hero.stats.support.value, label: t.hero.stats.support.label },
    ];

    return (
        <section
            ref={heroRef}
            className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-950"
        >
            {/* === STUNNING MARKETING BACKGROUND EFFECTS === */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                {/* Spotlight Effects - Green/Emerald theme */}
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="rgba(34, 197, 94, 0.5)"
                />
                <Spotlight
                    className="-top-40 right-0 md:right-60 md:-top-20"
                    fill="rgba(16, 185, 129, 0.3)"
                />

                {/* Static Grid */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e20_1px,transparent_1px),linear-gradient(to_bottom,#22c55e20_1px,transparent_1px)] bg-[size:60px_60px]"
                        style={{
                            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)'
                        }}
                    />
                </div>


                {/* Static Central Glow - Pure CSS */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-[100px]" style={{ transform: 'translate(-50%, -50%)' }} />
                    <div className="absolute w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[80px]" style={{ transform: 'translate(-50%, -50%)' }} />
                </div>


                {/* Digital Noise Overlay */}
                <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Vignette Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />
            </div>

            {/* === CONTENT === */}
            <Container className="relative z-20 pt-20 sm:pt-0">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge with Pulse */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-emerald-500/40 backdrop-blur-xl mb-8 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-emerald-400 to-green-500"></span>
                        </span>
                        <span className="text-sm font-bold bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent tracking-wide uppercase">
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
                            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-green-500/30 to-emerald-500/30 -z-10" />
                        </span>
                        <motion.span
                            className="block mt-2 pb-2 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent bg-300% relative"
                            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        >
                            {t.hero.titleHighlight}
                            {/* Animated underline */}
                            <motion.span
                                className="absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full"
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
                        className="text-lg sm:text-xl text-slate-300 mb-7 max-w-3xl mx-auto leading-relaxed"
                    >
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                            {t.hero.optimizeText}
                        </span>
                        <span className="text-slate-400"> — </span>
                        {t.hero.description}
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-5"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
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
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 "
                    >
                        <Link href="#tu-van" scroll={true}>
                            <Button
                                size="lg"
                                className="relative min-w-[240px] h-14 text-lg font-bold group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 border-0 rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_rgba(34,197,94,0.6)] overflow-hidden transition-all duration-300"
                            >
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                                <div className="flex items-center gap-2 relative z-10">
                                    <Rocket className="group-hover:-translate-y-1 group-hover:rotate-12 transition-transform ease-out" size={24} />
                                    <span>{t.hero.ctaPrimary}</span>
                                </div>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
