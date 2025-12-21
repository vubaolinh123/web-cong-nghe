"use client";

import { motion } from "framer-motion";
import { Megaphone, Users, Video, BarChart3, CheckCircle, ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import { Container, Button } from "../common";
import Image from "next/image";
import Link from "next/link";
import { useMarketingTranslations } from "@/lib/i18n/pages/marketing";

// Service icon and color mapping
const serviceConfigs = [
    {
        icon: Megaphone,
        color: "from-green-400 to-emerald-500",
        bgGlow: "bg-emerald-500/20",
        image: "/image/marketing/full_package_real.jpg",
        href: "/dich-vu-marketing/marketing-tong-the",
    },
    {
        icon: Users,
        color: "from-blue-400 to-cyan-500",
        bgGlow: "bg-blue-500/20",
        image: "/image/marketing/group_real.jpg",
        href: "/dich-vu-marketing/xay-dung-group-facebook",
    },
    {
        icon: BarChart3,
        color: "from-purple-400 to-pink-500",
        bgGlow: "bg-purple-500/20",
        image: "/image/marketing/fanpage_real.jpg",
        href: "/dich-vu-marketing/xay-dung-fanpage",
    },
    {
        icon: Video,
        color: "from-pink-400 to-red-500",
        bgGlow: "bg-pink-500/20",
        image: "/image/marketing/tiktok_real.jpg",
        href: "/dich-vu-marketing/xay-dung-tiktok-shop",
    },
];

export default function ServiceList() {
    const t = useMarketingTranslations();

    // Build services array by combining translations with configs
    const services = t.serviceList.services.map((service, index) => ({
        ...serviceConfigs[index],
        title: service.title,
        description: service.description,
        features: service.features,
        badge: service.badge,
        stats: service.stats,
    }));

    return (
        <section id="services" className="py-16 sm:py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
            {/* === BACKGROUND EFFECTS === */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Animated gradient orbs */}
                <motion.div
                    className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"
                    animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e08_1px,transparent_1px),linear-gradient(to_bottom,#22c55e08_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <Container className="relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-semibold text-emerald-400">{t.serviceList.badge}</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
                    >
                        {t.serviceList.title}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                            {t.serviceList.titleHighlight}
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto px-4"
                    >
                        {t.serviceList.description}
                    </motion.p>
                </div>

                {/* Services Grid - 2x2 on desktop, 1 column on mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-slate-700 transition-all duration-500">
                                {/* Hover glow effect */}
                                <div className={`absolute inset-0 ${service.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                                {/* Image Section */}
                                <div className="relative h-48 sm:h-56 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                                    {/* Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white text-xs font-bold shadow-lg`}>
                                            <Star className="w-3 h-3" />
                                            {service.badge}
                                        </span>
                                    </div>

                                    {/* Stats Badge */}
                                    <div className="absolute top-4 right-4">
                                        <div className="px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-sm border border-white/10">
                                            <div className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                                                {service.stats.value}
                                            </div>
                                            <div className="text-[10px] text-slate-400 font-medium">
                                                {service.stats.label}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className="absolute bottom-4 left-4">
                                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="relative p-5 sm:p-6">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm sm:text-base mb-5 line-clamp-2">
                                        {service.description}
                                    </p>

                                    {/* Features Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                className="flex items-center gap-2"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + idx * 0.05 }}
                                            >
                                                <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                                                    <CheckCircle className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-slate-300 text-xs sm:text-sm font-medium">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Link href={service.href} className="block">
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`w-full flex items-center justify-center gap-2 px-6 py-3 sm:py-4 rounded-xl bg-gradient-to-r ${service.color} text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300`}
                                        >
                                            <span>{t.serviceList.viewDetails}</span>
                                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                        </motion.div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <p className="text-slate-400 mb-6">
                        {t.serviceList.bottomCta.text}
                    </p>
                    <Link href="#tu-van">
                        <Button className="group bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                            <Zap className="w-5 h-5 mr-2 text-emerald-400" />
                            {t.serviceList.bottomCta.button}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </Container>
        </section>
    );
}
