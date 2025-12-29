"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { useState } from "react";
import { useTiktokShopTranslations } from "@/lib/i18n/pages/tiktok-shop";

export default function TiktokPricing() {
    const t = useTiktokShopTranslations();
    const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

    const toggleExpand = (packageId: string) => {
        setExpandedCards(prev => ({
            ...prev,
            [packageId]: !prev[packageId]
        }));
    };

    const packages = t.pricing.plans;

    // Color schemes for each package
    const colorSchemes = [
        { gradient: 'from-cyan-500 to-teal-500', bg: 'from-cyan-500/5 to-teal-500/5' },
        { gradient: 'from-pink-500 to-red-500', bg: 'from-pink-500/5 to-red-500/5' },
        { gradient: 'from-purple-500 to-pink-500', bg: 'from-purple-500/5 to-pink-500/5' },
        { gradient: 'from-red-500 to-orange-500', bg: 'from-red-500/5 to-orange-500/5' },
    ];

    return (
        <section className="relative py-16 sm:py-24 bg-slate-950 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-96 h-96 rounded-full blur-3xl bg-pink-500/15 -left-48 top-1/4" />
                <div className="absolute w-96 h-96 rounded-full blur-3xl bg-cyan-500/15 -right-48 top-1/2" />
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-transparent to-cyan-500/5" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,23,42,0.8)_100%)]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        <span className="text-white">{t.pricing.title} </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-cyan-400">
                            {t.pricing.titleHighlight}
                        </span>
                    </motion.h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        {t.pricing.note}
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                className={`relative h-full p-8 sm:p-10 rounded-2xl bg-slate-900/80 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 ${pkg.featuredBadge
                                    ? "border-2 border-pink-500 shadow-2xl shadow-pink-500/30"
                                    : "border border-slate-700/50"
                                    }`}
                            >
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${colorSchemes[index].bg} opacity-5`} />

                                {/* Featured Badge */}
                                {pkg.featuredBadge && (
                                    <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold rounded-bl-lg rounded-tr-xl flex items-center gap-1 shadow-lg shadow-pink-500/50">
                                        <Sparkles size={12} />
                                        {pkg.featuredBadge}
                                    </div>
                                )}

                                {/* Package Badge */}
                                <div className="text-center mb-4">
                                    <span
                                        className={`inline-flex px-5 py-1.5 rounded-full bg-gradient-to-r ${colorSchemes[index].gradient} text-white text-base font-bold`}
                                    >
                                        {pkg.badge}
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="relative mb-5 text-center">
                                    <div className="flex items-baseline gap-2 mb-1 justify-center">
                                        <span className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${colorSchemes[index].gradient} bg-clip-text text-transparent`}>
                                            {pkg.price}
                                        </span>
                                        <span className="text-slate-400 text-lg">đ</span>
                                    </div>
                                    {pkg.originalPrice && (
                                        <div className="text-slate-500 line-through text-base">
                                            {pkg.originalPrice}đ
                                        </div>
                                    )}
                                </div>

                                {/* Target Audience */}
                                {pkg.target && (
                                    <p className="relative text-sm text-slate-400 mb-6 italic text-center">
                                        {pkg.target}
                                    </p>
                                )}

                                {/* Visible Features */}
                                <div className="relative space-y-3 mb-6">
                                    {pkg.visibleFeatures.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                                            <span className="text-sm text-slate-300">{feature}</span>
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
                                                        <h4 className="text-base font-semibold text-pink-400 mb-2 flex items-center gap-2">
                                                            <div className="w-1 h-5 bg-gradient-to-b from-pink-500 to-cyan-500 rounded-full" />
                                                            {section.title}
                                                        </h4>
                                                        <div className="space-y-2 pl-4">
                                                            {section.items.map((item, itemIdx) => (
                                                                <div key={itemIdx} className="flex items-start gap-2">
                                                                    <CheckCircle className="w-4 h-4 text-pink-500/70 shrink-0 mt-0.5" />
                                                                    <span className="text-sm leading-relaxed text-slate-400">{item}</span>
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
                                    className="relative w-full flex items-center justify-center gap-2 py-3 text-base font-medium text-pink-400 hover:text-pink-300 transition-colors mb-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50"
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
                                            ? "bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl hover:shadow-pink-500/50"
                                            : "bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700"
                                            }`}
                                    >
                                        {pkg.ctaButton}
                                    </button>
                                </a>

                                {/* Corner Glow Effect */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 blur-3xl rounded-full -z-10" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
