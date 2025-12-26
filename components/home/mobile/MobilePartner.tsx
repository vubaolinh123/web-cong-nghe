"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Sparkles, Star } from "lucide-react";

const partnerCategories = [
    {
        name: "Tech & Media",
        key: "tech",
        color: "from-blue-400 to-cyan-500",
        bgGlow: "bg-cyan-500/20",
        partners: [
            { name: "FPT", logo: "/image/partners/fpt.png" },
            { name: "Vingroup", logo: "/image/partners/vingroup.png" },
            { name: "Viettel", logo: "/image/partners/viettel.png" },
            { name: "VNG", logo: "/image/partners/vng.png" },
            { name: "Yeah1", logo: "/image/partners/yeah1.png" },
        ],
    },
    {
        name: "Banking & Finance",
        key: "banking",
        color: "from-green-400 to-emerald-500",
        bgGlow: "bg-green-500/20",
        partners: [
            { name: "ACB", logo: "/image/partners/acb.png" },
            { name: "VPBank", logo: "/image/partners/vpbank.png" },
            { name: "VIB", logo: "/image/partners/vib.png" },
            { name: "Sacombank", logo: "/image/partners/sacombank.png" },
        ],
    },
    {
        name: "F&B",
        key: "fnb",
        color: "from-orange-400 to-red-500",
        bgGlow: "bg-orange-500/20",
        partners: [
            { name: "Highlands Coffee", logo: "/image/partners/highlands.png" },
            { name: "McDonald's", logo: "/image/partners/mcdonalds.png" },
            { name: "The Coffee House", logo: "/image/partners/coffeehouse.png" },
            { name: "Starbucks", logo: "/image/partners/starbucks.png" },
            { name: "KFC", logo: "/image/partners/kfc.png" },
        ],
    },
    {
        name: "Travel & Real Estate",
        key: "travel",
        color: "from-purple-400 to-pink-500",
        bgGlow: "bg-purple-500/20",
        partners: [
            { name: "Vietnam Airlines", logo: "/image/partners/vietnamairlines.png" },
            { name: "Vietjet Air", logo: "/image/partners/vietjetair.png" },
            { name: "Novaland", logo: "/image/partners/novaland.png" },
            { name: "Vinpearl", logo: "/image/partners/vinpearl.png" },
        ],
    },
];

export default function MobilePartner() {
    const { t } = useLanguage();

    return (
        <section className="py-16 bg-slate-950 overflow-hidden relative">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-x-1/2" />
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
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3"
                    >
                        <Sparkles className="w-3 h-3 text-blue-400" />
                        <span className="text-[10px] font-bold text-blue-400 tracking-wider uppercase">
                            Được tin dùng bởi
                        </span>
                    </motion.div>

                    <h2 className="text-2xl font-bold text-white mb-2">
                        {t("partners.title1")}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            {t("partners.title2")}
                        </span>
                    </h2>
                    <p className="text-slate-400 text-sm">{t("partners.description")}</p>
                </motion.div>

                {/* Partner Categories */}
                <div className="flex flex-col gap-5">
                    {partnerCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="relative"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-2 mb-2.5">
                                <motion.div
                                    className={`w-1 h-5 rounded-full bg-gradient-to-b ${category.color}`}
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: catIndex * 0.15 }}
                                    style={{ transformOrigin: 'top' }}
                                />
                                <h3 className={`text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                                    {category.name}
                                </h3>
                            </div>

                            {/* Partner Grid */}
                            <div className="grid grid-cols-4 gap-2">
                                {category.partners.map((partner, index) => (
                                    <PartnerItem
                                        key={index}
                                        partner={partner}
                                        color={category.color}
                                        delay={catIndex * 0.1 + index * 0.05}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-8 mt-8"
                >
                    {[
                        { value: "20+", label: "Đối tác" },
                        { value: "15+", label: "Ngành nghề" },
                        { value: "5+", label: "Năm" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                        >
                            <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                {stat.value}
                            </div>
                            <div className="text-[10px] text-slate-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function PartnerItem({ partner, color, delay }: { partner: { name: string; logo: string }, color: string, delay: number }) {
    const [imgError, setImgError] = useState(false);

    return (
        <motion.div
            className="group relative bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-2 flex items-center justify-center aspect-square hover:border-slate-700 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, type: "spring" }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Hover glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />

            {!imgError ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain relative z-10"
                    onError={() => setImgError(true)}
                />
            ) : (
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${color} font-bold text-[10px] text-center leading-tight relative z-10`}>
                    {partner.name.split(" ").map((n) => n[0]).join("").substring(0, 3).toUpperCase()}
                </span>
            )}
        </motion.div>
    );
}
