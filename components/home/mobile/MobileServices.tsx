"use client";

import React from "react";
import { motion } from "framer-motion";
import { Megaphone, Code2, ArrowRight, CheckCircle } from "lucide-react";
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
            href: "/dich-vu-marketing",
            badge: "Hot",
            image: "/image/real/service_marketing.jpg",
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
            href: "/dich-vu-cong-nghe",
            badge: "AI-Powered",
            image: "/image/real/service_tech.jpg",
            features: [
                t("homepageServices.tech.features.automation"),
                t("homepageServices.tech.features.chatbot"),
                t("homepageServices.tech.features.custom"),
                t("homepageServices.tech.features.integration"),
            ],
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
                    <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
                        {t("homepageServices.badge")}
                    </span>
                    <h2 className="text-2xl font-bold text-white mt-2">
                        {t("homepageServices.title")}{" "}
                        <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                            {t("homepageServices.titleHighlight")}
                        </span>
                    </h2>
                </motion.div>

                {/* Service Cards - Stacked */}
                <div className="flex flex-col gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative h-40 w-full">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r ${service.color} text-white`}>
                                    {service.badge}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color}`}>
                                        <service.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                </div>

                                <p className="text-slate-400 text-sm mb-3 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                                            <CheckCircle className="w-3 h-3 text-cyan-400 shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <Link
                                    href={service.href}
                                    className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                                >
                                    {t("homepageServices.exploreButton")}
                                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
