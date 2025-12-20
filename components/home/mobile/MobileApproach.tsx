"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function MobileApproach() {
    const { t } = useLanguage();

    const steps = [
        {
            number: "01",
            title: "Discovery",
            subtitle: t("approach.steps.discovery.subtitle"),
            description: t("approach.steps.discovery.description"),
            color: "from-cyan-400 to-blue-500",
            image: "/image/real/approach_discovery.jpg",
        },
        {
            number: "02",
            title: "Strategy",
            subtitle: t("approach.steps.strategy.subtitle"),
            description: t("approach.steps.strategy.description"),
            color: "from-green-400 to-emerald-500",
            image: "/image/real/approach_strategy.jpg",
        },
        {
            number: "03",
            title: "Development",
            subtitle: t("approach.steps.development.subtitle"),
            description: t("approach.steps.development.description"),
            color: "from-purple-400 to-pink-500",
            image: "/image/real/approach_development.jpg",
        },
    ];

    return (
        <section className="py-16 bg-slate-950">
            <div className="px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                        {t("approach.badge")}
                    </span>
                    <h2 className="text-2xl font-bold text-white">
                        {t("approach.title")}{" "}
                        <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                            {t("approach.titleHighlight")}
                        </span>
                    </h2>
                </motion.div>

                {/* Steps - Vertical Timeline */}
                <div className="flex flex-col gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="flex gap-4"
                        >
                            {/* Timeline Line */}
                            <div className="flex flex-col items-center">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                                    {step.number}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="w-0.5 flex-1 bg-gradient-to-b from-slate-700 to-slate-900 mt-2" />
                                )}
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden pb-4">
                                {/* Image */}
                                <div className="relative h-32 w-full">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Text */}
                                <div className="p-4 pb-0">
                                    <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                                    <p className={`text-xs font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent uppercase tracking-wider mb-2`}>
                                        {step.subtitle}
                                    </p>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
