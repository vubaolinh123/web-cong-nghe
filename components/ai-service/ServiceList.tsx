"use client";

import { motion } from "framer-motion";
import { Workflow, MessageSquare, Bot, Layout, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "../common";
import Link from "next/link";
import { useTechnologyTranslations } from "@/lib/i18n/pages/technology";

// Service icon and color mapping
const otherServiceConfigs = [
    { icon: Workflow, color: "from-blue-400 to-cyan-400" },
    { icon: MessageSquare, color: "from-green-400 to-emerald-400" },
    { icon: Bot, color: "from-purple-400 to-pink-400" },
];

export default function ServiceList() {
    const t = useTechnologyTranslations();

    // Build other services array from translations
    const otherServices = t.serviceList.otherServices.map((service, index) => ({
        ...otherServiceConfigs[index],
        title: service.title,
        description: service.description,
        features: service.features,
    }));

    return (
        <section id="services" className="py-20 sm:py-32 bg-slate-950 relative">
            <Container>
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        {t.serviceList.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg max-w-2xl mx-auto"
                    >
                        {t.serviceList.description}
                    </motion.p>
                </div>

                {/* Featured Service - Custom Websites & Apps */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/30 border border-orange-500/30 overflow-hidden group hover:border-orange-500/50 transition-all">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/10 to-transparent" />
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-500/20 rounded-full blur-3xl" />

                        {/* Featured Badge */}
                        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold">
                                <Sparkles size={16} />
                                <span>{t.serviceList.featuredBadge}</span>
                            </div>
                        </div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Left Content */}
                            <div>
                                <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br from-orange-400 to-red-400">
                                    <Layout className="text-white w-8 h-8" />
                                </div>

                                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                    {t.serviceList.featuredService.title}
                                </h3>

                                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                                    {t.serviceList.featuredService.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {t.serviceList.featuredService.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                                            <span className="text-slate-300 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/lien-he" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:opacity-90 transition-opacity group">
                                    {t.serviceList.consultButton}
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Right - Pricing Card */}
                            <div className="flex justify-center lg:justify-end">
                                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center w-full max-w-sm">
                                    <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">{t.serviceList.pricingLabel}</p>
                                    <div className="flex items-baseline justify-center gap-1 mb-2">
                                        <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                                            {t.serviceList.featuredService.pricing.from}
                                        </span>
                                        <span className="text-xl text-slate-400">{t.serviceList.featuredService.pricing.currency}</span>
                                    </div>
                                    <p className="text-slate-500 text-sm mb-6">{t.serviceList.featuredService.pricing.note}</p>

                                    <div className="space-y-3 text-left">
                                        {t.serviceList.featuredService.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center gap-3 text-slate-300">
                                                <CheckCircle className="w-5 h-5 text-green-400" />
                                                <span>{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Other Services - 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {otherServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                x: index === 0 ? -50 : index === 2 ? 50 : 0,
                                y: index === 1 ? 50 : 0
                            }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                            className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            <div className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br ${service.color} bg-opacity-10 bg-clip-padding backdrop-filter backdrop-blur-sm border border-white/10`}>
                                <service.icon className="text-white w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-300 text-xs">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
