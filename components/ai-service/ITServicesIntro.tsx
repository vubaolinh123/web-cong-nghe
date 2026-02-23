"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, MessageSquare, Zap, ArrowRight } from "lucide-react";
import { Container } from "../common";
import { useRef } from "react";
import { useTechnologyTranslations } from "@/lib/i18n/pages/technology";
import { useLanguage } from "@/lib/i18n/LanguageContext";


export default function ITServicesIntro() {
    const t = useTechnologyTranslations();
    const { language } = useLanguage();

    const services = [
        {
            icon: Globe,
            title: t.itServicesIntro.services[0].title,
            description: t.itServicesIntro.services[0].description,
            color: "from-cyan-500 to-blue-500",
            bgColor: "bg-cyan-500/10",
            borderColor: "border-cyan-500/30",
            hoverBorder: "hover:border-cyan-500/60",
            glowColor: "cyan",
        },
        {
            icon: Smartphone,
            title: t.itServicesIntro.services[1].title,
            description: t.itServicesIntro.services[1].description,
            color: "from-blue-500 to-purple-500",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/30",
            hoverBorder: "hover:border-blue-500/60",
            glowColor: "blue",
        },
        {
            icon: MessageSquare,
            title: t.itServicesIntro.services[2].title,
            description: t.itServicesIntro.services[2].description,
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/30",
            hoverBorder: "hover:border-green-500/60",
            glowColor: "green",
        },
        {
            icon: Zap,
            title: t.itServicesIntro.services[3].title,
            description: t.itServicesIntro.services[3].description,
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/30",
            hoverBorder: "hover:border-purple-500/60",
            glowColor: "purple",
        },
    ];
    const containerRef = useRef<HTMLElement>(null);

    return (
        <section ref={containerRef} className="py-16 sm:py-24 bg-slate-950 relative overflow-hidden">
            {/* Simple Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Static Gradient Orbs */}
                <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl" />

                {/* Gradient Mesh */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
            </div>

            <Container className="relative z-10 dvcn-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyan-500" />
                        <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                            {t.itServicesIntro.badge}
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        {t.itServicesIntro.title}{" "}
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                backgroundSize: "200% 200%"
                            }}
                        >
                            {t.itServicesIntro.titleHighlight1}
                        </motion.span>{" "}
                        {language === 'vi' ? 'đến' : 'to'}{" "}
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear",
                                delay: 0.5
                            }}
                            style={{
                                backgroundSize: "200% 200%"
                            }}
                        >
                            {t.itServicesIntro.titleHighlight2}
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-400 text-lg max-w-3xl mx-auto"
                    >
                        {t.itServicesIntro.description}
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -12, transition: { duration: 0.3 } }}
                            className={`group relative p-6 rounded-2xl bg-slate-900/50 border ${service.borderColor} ${service.hoverBorder} transition-all duration-300 overflow-hidden backdrop-blur-sm`}
                        >
                            {/* Animated Gradient Background */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                animate={{
                                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    backgroundSize: "200% 200%"
                                }}
                            />

                            {/* Glow Effect on Hover */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-${service.glowColor}-500/20`} />

                            {/* Icon */}
                            <div className={`relative w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <motion.div
                                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-40 transition-opacity`}
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                                <service.icon className="relative w-7 h-7 text-white drop-shadow-lg" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                {service.description}
                            </p>

                            {/* Arrow Icon */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                className="flex items-center text-cyan-400 text-sm font-medium"
                            >
                                <span>{language === 'vi' ? 'Tìm hiểu thêm' : 'Learn more'}</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </motion.div>
                            </motion.div>

                            {/* Corner Accent with Animation */}
                            <motion.div
                                className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-50"
                                whileHover={{ opacity: 100 }}
                            >
                                <motion.div
                                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-20 rotate-45 translate-x-16 -translate-y-16`}
                                    animate={{
                                        rotate: [45, 405],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                            </motion.div>

                            {/* Border Glow Animation */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl"
                                style={{
                                    background: `linear-gradient(90deg, transparent, ${service.glowColor === 'cyan' ? 'rgba(6,182,212,0.3)' : service.glowColor === 'blue' ? 'rgba(59,130,246,0.3)' : service.glowColor === 'green' ? 'rgba(16,185,129,0.3)' : 'rgba(168,85,247,0.3)'}, transparent)`,
                                    opacity: 0,
                                }}
                                animate={{
                                    backgroundPosition: ["0% 0%", "200% 0%"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                whileHover={{ opacity: 0.5 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
