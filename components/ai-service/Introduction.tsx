"use client";

import { motion } from "framer-motion";
import { Container } from "../common";
import { useRef } from "react";
import { Target, Lightbulb, Users } from "lucide-react";
import { useTechnologyTranslations } from "@/lib/i18n/pages/technology";

// Icon mapping for values
const valueIcons = [Target, Lightbulb, Users];
const valueColors = [
    "from-cyan-500 to-blue-500",
    "from-purple-500 to-pink-500",
    "from-emerald-500 to-cyan-500",
];

export default function Introduction() {
    const t = useTechnologyTranslations();
    const containerRef = useRef<HTMLElement>(null);

    // Build values array from translations
    const values = t.introduction.values.map((value, index) => ({
        icon: valueIcons[index],
        title: value.title,
        desc: value.desc,
        color: valueColors[index],
    }));

    const stats = [
        { value: t.introduction.stats.experience.value, label: t.introduction.stats.experience.label },
        { value: t.introduction.stats.projects.value, label: t.introduction.stats.projects.label },
        { value: t.introduction.stats.partners.value, label: t.introduction.stats.partners.label },
    ];

    return (
        <section
            ref={containerRef}
            className="pt-16 pb-16 sm:py-24 lg:py-32 bg-slate-950 relative overflow-hidden"
        >
            {/* === SIMPLE CSS BACKGROUND === */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Corner Accent Glows - Static */}
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

                {/* Top gradient line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            </div>

            {/* === CONTENT === */}
            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Section Label with Animated Line */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <motion.div
                            className="h-px bg-gradient-to-r from-transparent to-cyan-500 flex-1 max-w-[100px]"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ transformOrigin: 'right' }}
                        />
                        <span className="text-sm font-bold text-cyan-400 tracking-[0.3em] uppercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                            {t.introduction.sectionLabel}
                        </span>
                        <motion.div
                            className="h-px bg-gradient-to-l from-transparent to-cyan-500 flex-1 max-w-[100px]"
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
                        <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-slate-200 leading-relaxed">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {t.introduction.quote.text1}
                            </motion.span>
                            <motion.span
                                className="relative inline-block"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">
                                    {t.introduction.quote.highlight1}
                                </span>
                                <span className="absolute -inset-2 bg-cyan-500/20 blur-lg rounded-lg -z-10" />
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                {t.introduction.quote.text2}
                            </motion.span>
                            <motion.span
                                className="relative inline-block"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
                                    {t.introduction.quote.highlight2}
                                </span>
                                <span className="absolute -inset-2 bg-purple-500/20 blur-lg rounded-lg -z-10" />
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                            >
                                {t.introduction.quote.text3}
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
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
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
                                    className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
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
                </div>
            </Container>
        </section>
    );
}
