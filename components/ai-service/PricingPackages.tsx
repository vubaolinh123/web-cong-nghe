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
            {/* Simple Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Static Gradient Orbs */}
                <div className="absolute w-96 h-96 rounded-full blur-3xl bg-cyan-500/15 -left-48 top-1/4" />
                <div className="absolute w-96 h-96 rounded-full blur-3xl bg-purple-500/15 -right-48 top-1/2" />
                <div className="absolute w-96 h-96 rounded-full blur-3xl bg-blue-500/15 left-1/2 bottom-1/4" />

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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                            {t.pricingPackages.titleHighlight}
                        </span>
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
                                    <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-bl-lg rounded-tr-xl flex items-center gap-1 shadow-lg shadow-purple-500/50">
                                        <Sparkles size={12} />
                                        {pkg.featuredBadge}
                                    </div>
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
