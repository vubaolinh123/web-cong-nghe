"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";

export default function MobileApproach() {
    const { t } = useLanguage();

    const steps = [
        {
            number: "01",
            title: "Discovery",
            subtitle: t("approach.steps.discovery.subtitle"),
            description: t("approach.steps.discovery.description"),
            color: "from-cyan-400 to-blue-500",
            bgGlow: "bg-cyan-500/20",
            image: "/image/real/approach_discovery.jpg",
        },
        {
            number: "02",
            title: "Strategy",
            subtitle: t("approach.steps.strategy.subtitle"),
            description: t("approach.steps.strategy.description"),
            color: "from-green-400 to-emerald-500",
            bgGlow: "bg-green-500/20",
            image: "/image/real/approach_strategy.jpg",
        },
        {
            number: "03",
            title: "Development",
            subtitle: t("approach.steps.development.subtitle"),
            description: t("approach.steps.development.description"),
            color: "from-purple-400 to-pink-500",
            bgGlow: "bg-purple-500/20",
            image: "/image/real/approach_development.jpg",
        },
    ];

    return (
        <section className="py-16 bg-slate-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px]" />
                <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-[50px]" />

                {/* Static vertical line */}
                <div className="absolute left-8 top-32 bottom-20 w-0.5 bg-gradient-to-b from-cyan-500/20 via-green-500/20 to-purple-500/20" />
            </div>

            <div className="px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-3"
                    >
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        <span className="text-[10px] font-bold text-cyan-400 tracking-wider uppercase">
                            {t("approach.badge")}
                        </span>
                    </motion.div>

                    <h2 className="text-2xl font-bold text-white">
                        {t("approach.title")}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                            {t("approach.titleHighlight")}
                        </span>
                    </h2>
                </motion.div>

                {/* Steps - Vertical Timeline */}
                <div className="flex flex-col gap-5">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15, type: "spring" }}
                            className="flex gap-4"
                        >
                            {/* Timeline Number */}
                            <div className="flex flex-col items-center">
                                <motion.div
                                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                                    whileInView={{ scale: [0.8, 1.1, 1] }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    {step.number}
                                </motion.div>
                                {index < steps.length - 1 && (
                                    <motion.div
                                        className={`w-0.5 flex-1 bg-gradient-to-b ${step.color} mt-2 opacity-30`}
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                                        style={{ transformOrigin: 'top' }}
                                    />
                                )}
                            </div>

                            {/* Content Card */}
                            <motion.div
                                className="flex-1 group relative bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                            >
                                {/* Glow Effect */}
                                <div className={`absolute inset-0 ${step.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                                {/* Image */}
                                <div className="relative h-28 w-full overflow-hidden">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                                    {/* Arrow indicator */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute bottom-2 right-2">
                                            <ArrowRight className={`w-4 h-4 text-white/50`} />
                                        </div>
                                    )}
                                </div>

                                {/* Text */}
                                <div className="relative p-3">
                                    <h3 className="text-base font-bold text-white mb-0.5 group-hover:text-cyan-400 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className={`text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color} uppercase tracking-wider mb-1.5`}>
                                        {step.subtitle}
                                    </p>
                                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
