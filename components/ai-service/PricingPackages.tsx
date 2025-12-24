"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { Container } from "../common";
import { useState } from "react";
import Link from "next/link";
import { useTechnologyTranslations } from "@/lib/i18n/pages/technology";

export default function PricingPackages() {
    const t = useTechnologyTranslations();
    const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

    const toggleExpand = (packageId: string) => {
        setExpandedCards(prev => ({
            ...prev,
            [packageId]: !prev[packageId]
        }));
    };

    const packages = t.pricingPackages.packages;

    return (
        <section className="relative py-16 sm:py-24 bg-slate-950 overflow-hidden">
            {/* Advanced Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Animated Gradient Orbs */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`orb-${i}`}
                        className={`absolute w-96 h-96 rounded-full blur-3xl ${i === 0 ? 'bg-cyan-500/20 -left-48 top-1/4' :
                            i === 1 ? 'bg-purple-500/20 -right-48 top-1/2' :
                                'bg-blue-500/20 left-1/2 bottom-1/4'
                            }`}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                            x: i === 0 ? [0, 30, 0] : i === 1 ? [0, -30, 0] : [0, 20, 0],
                            y: i === 2 ? [0, -20, 0] : 0,
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Rotating Gradient Mesh */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-3xl" />
                </motion.div>

                {/* Animated Grid Pattern */}
                <motion.div className="absolute inset-0 opacity-[0.03]">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="pricing-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-500" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#pricing-grid)" />
                    </svg>
                </motion.div>

                {/* Floating Price Tags */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`price-tag-${i}`}
                        className="absolute w-20 h-12 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20"
                        style={{
                            left: `${15 + i * 14}%`,
                            top: `${20 + (i % 3) * 25}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 3, 0, -3, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                    />
                ))}

                {/* Light Rays */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5" />

                {/* Gradient Mesh Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.8)_100%)]" />
            </div>

            <Container className="relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                    >
                        <span className="text-white">{t.pricingPackages.title} </span>
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"
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
                            {t.pricingPackages.titleHighlight}
                        </motion.span>
                    </motion.h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        {t.pricingPackages.description}
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative ${pkg.featuredBadge ? "lg:scale-105 lg:z-10" : ""}`}
                        >
                            <div
                                className={`relative h-full p-6 sm:p-8 rounded-2xl bg-slate-900/80 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 ${pkg.featuredBadge
                                    ? "border-2 border-purple-500 shadow-2xl shadow-purple-500/30"
                                    : "border border-slate-700/50"
                                    }`}
                            >
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${t.pricingPackages.packages[index].badge === t.pricingPackages.packages[0].badge ? 'from-cyan-500/5 to-teal-500/5' : t.pricingPackages.packages[index].featuredBadge ? 'from-blue-500/5 to-purple-500/5' : 'from-purple-500/5 to-pink-500/5'} opacity-5`} />

                                {/* Featured Badge */}
                                {pkg.featuredBadge && (
                                    <motion.div
                                        className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-bl-lg rounded-tr-xl flex items-center gap-1"
                                        animate={{
                                            boxShadow: [
                                                "0 0 20px rgba(139,92,246,0.5)",
                                                "0 0 30px rgba(139,92,246,0.8)",
                                                "0 0 20px rgba(139,92,246,0.5)",
                                            ],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <Sparkles size={12} />
                                        {pkg.featuredBadge}
                                    </motion.div>
                                )}

                                {/* Package Badge */}
                                <div
                                    className={`relative inline-flex px-4 py-1 rounded-full bg-gradient-to-r ${index === 0 ? 'from-cyan-500 to-teal-500' : index === 1 ? 'from-blue-500 to-purple-500' : 'from-purple-500 to-pink-500'} text-white text-sm font-bold mb-4`}
                                >
                                    {pkg.badge}
                                </div>

                                {/* Package Name */}
                                <h3 className="relative text-2xl font-bold text-white mb-2">
                                    {pkg.name}
                                </h3>

                                {/* Price */}
                                <div className="relative mb-4">
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${index === 0 ? 'from-cyan-500 to-teal-500' : index === 1 ? 'from-blue-500 to-purple-500' : 'from-purple-500 to-pink-500'} bg-clip-text text-transparent`}>
                                            {pkg.price}
                                        </span>
                                        <span className="text-slate-400">đ</span>
                                    </div>
                                    <div className="text-slate-500 line-through text-sm">
                                        {pkg.originalPrice}đ
                                    </div>
                                </div>

                                {/* Target Audience */}
                                <p className="relative text-xs text-slate-400 mb-6 italic border-l-2 border-cyan-500/50 pl-3">
                                    {pkg.target}
                                </p>

                                {/* Visible Features */}
                                <div className="relative space-y-2 mb-6">
                                    {pkg.visibleFeatures.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-start gap-2"
                                        >
                                            <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                                            <span className="text-xs text-slate-300">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Expandable Detailed Features */}
                                <AnimatePresence>
                                    {expandedCards[`package-${index}`] && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="relative border-t border-slate-700/50 pt-4 mb-6 space-y-4">
                                                {pkg.features.map((section, sectionIdx) => (
                                                    <div key={sectionIdx}>
                                                        <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                                                            <div className="w-1 h-4 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />
                                                            {section.title}
                                                        </h4>
                                                        <div className="space-y-1 pl-3">
                                                            {section.items.map((item, itemIdx) => (
                                                                <div key={itemIdx} className="flex items-start gap-2">
                                                                    <CheckCircle className="w-3 h-3 text-cyan-500/70 shrink-0 mt-0.5" />
                                                                    <span className="text-[10px] leading-relaxed text-slate-400">{item}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Expand/Collapse Button */}
                                <button
                                    onClick={() => toggleExpand(`package-${index}`)}
                                    className="relative w-full flex items-center justify-center gap-2 py-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors mb-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50"
                                >
                                    {expandedCards[`package-${index}`] ? (
                                        <>
                                            {pkg.collapseButton}
                                            <ChevronUp size={16} />
                                        </>
                                    ) : (
                                        <>
                                            {pkg.expandButton}
                                            <ChevronDown size={16} />
                                        </>
                                    )}
                                </button>

                                {/* CTA Button */}
                                <a href="https://zalo.me/0584503333" target="_blank" rel="noopener noreferrer">
                                    <button
                                        className={`relative w-full py-3 px-6 rounded-lg font-bold text-white transition-all overflow-hidden ${pkg.featuredBadge
                                            ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl hover:shadow-purple-500/50"
                                            : "bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700"
                                            }`}
                                    >
                                        {pkg.ctaButton}
                                    </button>
                                </a>

                                {/* Corner Glow Effect */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-3xl rounded-full -z-10" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
