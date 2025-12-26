"use client";

import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Code2, ArrowRight, CheckCircle, Star, Zap, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Image from "next/image";

export default function MobileServices() {
    const { t } = useLanguage();

    const services = [
        {
            id: "marketing",
            icon: Megaphone,
            title: t("homepageServices.marketing.title"),
            description: t("homepageServices.marketing.description"),
            color: "from-green-400 to-emerald-500",
            bgGlow: "bg-green-500/20",
            href: "/dich-vu-marketing",
            badge: "Hot",
            badgeIcon: TrendingUp,
            image: "/image/real/service_marketing.jpg",
            stats: { value: "200+", label: "Dự án" },
            features: [
                t("homepageServices.marketing.features.ads"),
                t("homepageServices.marketing.features.fanpage"),
                t("homepageServices.marketing.features.content"),
                t("homepageServices.marketing.features.seo"),
            ],
        },
        {
            id: "tech",
            icon: Code2,
            title: t("homepageServices.tech.title"),
            description: t("homepageServices.tech.description"),
            color: "from-blue-400 to-cyan-500",
            bgGlow: "bg-cyan-500/20",
            href: "/dich-vu-cong-nghe",
            badge: "AI-Powered",
            badgeIcon: Zap,
            image: "/image/real/service_tech.jpg",
            stats: { value: "50+", label: "Dự án AI" },
            features: [
                t("homepageServices.tech.features.automation"),
                t("homepageServices.tech.features.chatbot"),
                t("homepageServices.tech.features.custom"),
                t("homepageServices.tech.features.integration"),
            ],
        },
    ];

    return (
        <section className="py-16 bg-slate-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 right-0 w-56 h-56 bg-cyan-500/10 rounded-full blur-[70px]" />
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
                            {t("homepageServices.badge")}
                        </span>
                    </motion.div>

                    <h2 className="text-2xl font-bold text-white">
                        {t("homepageServices.title")}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                            {t("homepageServices.titleHighlight")}
                        </span>
                    </h2>
                </motion.div>

                {/* Service Cards */}
                <div className="flex flex-col gap-5">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative bg-slate-900/70 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden"
                        >
                            {/* Hover Glow */}
                            <div className={`absolute inset-0 ${service.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                            {/* Image */}
                            <div className="relative h-44 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                                {/* Badge */}
                                <div className="absolute top-3 left-3">
                                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r ${service.color} text-white shadow-lg`}>
                                        <service.badgeIcon className="w-3 h-3" />
                                        {service.badge}
                                    </span>
                                </div>

                                {/* Stats */}
                                <div className="absolute top-3 right-3 px-2.5 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-sm border border-white/10">
                                    <div className={`text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                                        {service.stats.value}
                                    </div>
                                    <div className="text-[8px] text-slate-400">{service.stats.label}</div>
                                </div>

                                {/* Icon */}
                                <div className="absolute bottom-3 left-3">
                                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}>
                                        <service.icon className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative p-4">
                                <h3 className="text-lg font-bold text-white mb-1.5">{service.title}</h3>

                                <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-2">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    {service.features.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            className="flex items-center gap-1.5"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + idx * 0.05 }}
                                        >
                                            <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                                                <CheckCircle className="w-2.5 h-2.5 text-white" />
                                            </div>
                                            <span className="text-xs text-slate-300">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <Link href={service.href} className="block">
                                    <motion.div
                                        whileTap={{ scale: 0.97 }}
                                        className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-bold text-sm shadow-lg`}
                                    >
                                        <span>Khám Phá</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
