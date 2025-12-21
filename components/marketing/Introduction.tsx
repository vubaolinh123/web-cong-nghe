"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "../common";
import { useRef } from "react";
import { TrendingUp, Users, Zap } from "lucide-react";
import { useMarketingTranslations } from "@/lib/i18n/pages/marketing";

// Icon mapping for values
const valueIcons = [TrendingUp, Zap, Users];
const valueColors = [
    "from-green-500 to-emerald-500",
    "from-emerald-500 to-teal-500",
    "from-teal-500 to-cyan-500",
];

export default function Introduction() {
    const t = useMarketingTranslations();
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax transforms
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

    // Build values array from translations
    const values = t.introduction.values.map((value, index) => ({
        icon: valueIcons[index],
        title: value.title,
        desc: value.desc,
        color: valueColors[index],
    }));

    const stats = [
        { value: t.introduction.stats.campaigns.value, label: t.introduction.stats.campaigns.label },
        { value: t.introduction.stats.roi.value, label: t.introduction.stats.roi.label },
        { value: t.introduction.stats.clients.value, label: t.introduction.stats.clients.label },
    ];

    return (
        <section
            ref={containerRef}
            className="pt-16 pb-16 sm:py-24 lg:py-32 bg-slate-950 relative overflow-hidden"
        >
            {/* === UNIQUE MARKETING BACKGROUND - NETWORK/GROWTH STYLE === */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                {/* Growth Chart Pattern */}
                <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{ y: backgroundY }}
                >
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="growthLines" width="100" height="100" patternUnits="userSpaceOnUse">
                                {/* Upward trending lines */}
                                <line x1="0" y1="100" x2="25" y2="70" stroke="rgba(34,197,94,0.3)" strokeWidth="0.5" />
                                <line x1="25" y1="70" x2="50" y2="80" stroke="rgba(34,197,94,0.3)" strokeWidth="0.5" />
                                <line x1="50" y1="80" x2="75" y2="40" stroke="rgba(34,197,94,0.3)" strokeWidth="0.5" />
                                <line x1="75" y1="40" x2="100" y2="20" stroke="rgba(34,197,94,0.3)" strokeWidth="0.5" />
                                <circle cx="25" cy="70" r="2" fill="rgba(34,197,94,0.4)" />
                                <circle cx="50" cy="80" r="2" fill="rgba(34,197,94,0.4)" />
                                <circle cx="75" cy="40" r="2" fill="rgba(34,197,94,0.4)" />
                                <circle cx="100" cy="20" r="2" fill="rgba(34,197,94,0.4)" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#growthLines)" />
                    </svg>
                </motion.div>

                {/* Animated Connection Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                    <defs>
                        <linearGradient id="marketingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#22c55e" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    {/* Diagonal growth lines */}
                    {[...Array(5)].map((_, i) => (
                        <motion.line
                            key={`d-${i}`}
                            x1={`${i * 20}%`}
                            y1="100%"
                            x2={`${i * 20 + 30}%`}
                            y2="0%"
                            stroke="url(#marketingGradient)"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                        />
                    ))}
                    {/* Network nodes */}
                    {[...Array(10)].map((_, i) => (
                        <motion.circle
                            key={`node-${i}`}
                            cx={`${10 + i * 10}%`}
                            cy={`${20 + (i % 4) * 20}%`}
                            r="3"
                            fill="#22c55e"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 0.5, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                        />
                    ))}
                </svg>

                {/* Floating Growth Arrows */}
                <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                left: `${10 + i * 12}%`,
                                bottom: `${20 + (i % 3) * 15}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.6, 0.2]
                            }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut"
                            }}
                        >
                            <TrendingUp className="w-4 h-4 text-emerald-500/30" />
                        </motion.div>
                    ))}
                </div>

                {/* Corner Accent Glows */}
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

                {/* Top gradient line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
            </div>

            {/* === CONTENT === */}
            <Container className="relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto"
                    style={{ opacity: textOpacity, scale }}
                >
                    {/* Section Label with Animated Line */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <motion.div
                            className="h-px bg-gradient-to-r from-transparent to-emerald-500 flex-1 max-w-[100px]"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ transformOrigin: 'right' }}
                        />
                        <span className="text-sm font-bold text-emerald-400 tracking-[0.3em] uppercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            {t.introduction.sectionLabel}
                        </span>
                        <motion.div
                            className="h-px bg-gradient-to-l from-transparent to-emerald-500 flex-1 max-w-[100px]"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ transformOrigin: 'left' }}
                        />
                    </motion.div>

                    {/* Main Quote with Character-by-Character Reveal */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        {/* Decorative quotes */}
                        <div className="relative">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 0.1, scale: 1 }}
                                viewport={{ once: true }}
                                className="absolute -top-8 -left-4 text-8xl text-emerald-500 font-serif"
                            >
                                &quot;
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 0.1, scale: 1 }}
                                viewport={{ once: true }}
                                className="absolute -bottom-8 -right-4 text-8xl text-emerald-500 font-serif"
                            >
                                &quot;
                            </motion.span>
                        </div>

                        <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-slate-200 leading-relaxed italic">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {t.introduction.quote.text1}
                            </motion.span>
                            <motion.span
                                className="relative inline-block not-italic"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 font-bold">
                                    {t.introduction.quote.highlight}
                                </span>
                                <span className="absolute -inset-2 bg-emerald-500/20 blur-lg rounded-lg -z-10" />
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                {t.introduction.quote.text2}
                            </motion.span>
                        </p>
                    </motion.div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                                className="group"
                            >
                                <div className="relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 h-full overflow-hidden">
                                    {/* Hover glow effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <value.icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {value.desc}
                                    </p>

                                    {/* Corner accent */}
                                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.color} opacity-10 rotate-45 translate-x-16 -translate-y-16`} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-16 flex flex-wrap justify-center items-center gap-8 sm:gap-16"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center group">
                                <motion.div
                                    className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 1 + i * 0.1, type: "spring" }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-slate-500 text-sm mt-1 group-hover:text-slate-400 transition-colors">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}
