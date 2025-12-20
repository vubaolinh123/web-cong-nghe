"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, MessageSquare, Share2, Monitor } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function MobileWhyUs() {
    const { dictionary, t } = useLanguage();

    const reasons = [
        {
            icon: Rocket,
            title: dictionary.features.items.exclusiveAgency.title,
            description: dictionary.features.items.exclusiveAgency.description,
            color: "from-green-400 to-emerald-500",
            stat: "No.1",
            statLabel: t("whyUs.stats.inVietnam"),
        },
        {
            icon: MessageSquare,
            title: dictionary.features.items.uniqueIdeas.title,
            description: dictionary.features.items.uniqueIdeas.description,
            color: "from-blue-400 to-cyan-500",
            stat: "24/7",
            statLabel: t("whyUs.stats.support"),
        },
        {
            icon: Share2,
            title: dictionary.features.items.qualityPromotion.title,
            description: dictionary.features.items.qualityPromotion.description,
            color: "from-purple-400 to-pink-500",
            stat: "200%",
            statLabel: t("whyUs.stats.efficiency"),
        },
        {
            icon: Monitor,
            title: dictionary.features.items.experience.title,
            description: dictionary.features.items.experience.description,
            color: "from-orange-400 to-red-500",
            stat: "10+",
            statLabel: t("whyUs.stats.yearsExp"),
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
                        {dictionary.features.subtitle}
                    </span>
                    <h2 className="text-2xl font-bold text-white">
                        {dictionary.features.title1}{" "}
                        <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                            {dictionary.features.title2}
                        </span>
                    </h2>
                </motion.div>

                {/* Reasons Grid - 2 columns */}
                <div className="grid grid-cols-2 gap-3">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/60 border border-slate-800 rounded-xl p-4"
                        >
                            {/* Icon & Stat */}
                            <div className="flex justify-between items-start mb-3">
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${reason.color}`}>
                                    <reason.icon className="w-4 h-4 text-white" />
                                </div>
                                <div className="text-right">
                                    <div className={`text-lg font-bold bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>
                                        {reason.stat}
                                    </div>
                                    <div className="text-[10px] text-slate-500 uppercase">{reason.statLabel}</div>
                                </div>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-sm font-bold text-white mb-1">{reason.title}</h3>
                            <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
