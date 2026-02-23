"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Smartphone, Globe, Bot, Zap, ArrowRight } from "lucide-react";
import { Container } from "../common";
import { useState, useRef, useEffect } from "react";
import { useTechnologyTranslations } from "@/lib/i18n/pages/technology";
import { cn } from "@/lib/utils";

type CategoryKey = 'mobileApp' | 'website' | 'aiAgent' | 'automation';

const categoryIcons = {
    mobileApp: Smartphone,
    website: Globe,
    aiAgent: Bot,
    automation: Zap,
};

const categoryColors = {
    mobileApp: {
        bg: 'from-blue-600 to-cyan-500',
        text: 'text-cyan-400',
        border: 'border-cyan-500/50',
        glow: 'shadow-cyan-500/20',
        priceGradient: 'from-white via-cyan-200 to-cyan-400'
    },
    website: {
        bg: 'from-emerald-500 to-teal-500',
        text: 'text-emerald-400',
        border: 'border-emerald-500/50',
        glow: 'shadow-emerald-500/20',
        priceGradient: 'from-white via-emerald-200 to-teal-400'
    },
    aiAgent: {
        bg: 'from-violet-600 to-purple-500',
        text: 'text-purple-400',
        border: 'border-purple-500/50',
        glow: 'shadow-purple-500/20',
        priceGradient: 'from-white via-purple-200 to-pink-400'
    },
    automation: {
        bg: 'from-amber-500 to-orange-500',
        text: 'text-amber-400',
        border: 'border-amber-500/50',
        glow: 'shadow-amber-500/20',
        priceGradient: 'from-white via-amber-200 to-orange-400'
    },
};

export default function PricingPackages() {
    const t = useTechnologyTranslations();
    const [activeCategory, setActiveCategory] = useState<CategoryKey>('mobileApp');
    const tabsRef = useRef<HTMLDivElement>(null);

    const categories: CategoryKey[] = ['mobileApp', 'website', 'aiAgent', 'automation'];
    const currentCategory = t.servicePricing.categories[activeCategory];
    const colors = categoryColors[activeCategory];
    const packageCount = currentCategory.packages.length;
    const isThreeColumnLayout = packageCount >= 3;
    const pricingGridClass = packageCount === 1
        ? 'grid grid-cols-1 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto'
        : packageCount === 2
            ? 'grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8'
            : 'grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8';

    // Scroll active tab into view on mobile
    useEffect(() => {
        if (tabsRef.current) {
            const activeTab = tabsRef.current.querySelector('[data-active="true"]');
            if (activeTab) {
                activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [activeCategory]);

    return (
        <section className="relative py-20 sm:py-32 bg-slate-950 overflow-hidden" id="pricing">
            {/* Improved Background Effects */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute w-[800px] h-[800px] rounded-full blur-[120px] bg-cyan-500/5 -left-48 top-0 mix-blend-screen" />
                <div className="absolute w-[800px] h-[800px] rounded-full blur-[120px] bg-purple-500/5 -right-48 bottom-0 mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <Container className="relative z-10 dvcn-container">
                {/* Header with Professional Spacing */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 sm:mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs sm:text-sm font-medium text-slate-400 mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        {t.servicePricing.title}
                    </div>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        <span className="text-white">{t.servicePricing.headingPrefix} </span>
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.bg}`}>
                            {t.servicePricing.headingHighlight}
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                        {t.servicePricing.description}
                    </p>
                </motion.div>

                {/* Centered Professional Tabs */}
                <div className="flex justify-center mb-12 sm:mb-16">
                    <div
                        ref={tabsRef}
                        className="p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl relative inline-flex flex-wrap sm:flex-nowrap justify-center gap-1 sm:gap-0"
                    >
                        {categories.map((categoryKey) => {
                            const Icon = categoryIcons[categoryKey];
                            const isActive = activeCategory === categoryKey;
                            const catColors = categoryColors[categoryKey];

                            return (
                                <button
                                    key={categoryKey}
                                    onClick={() => setActiveCategory(categoryKey)}
                                    data-active={isActive}
                                    className={cn(
                                        "relative px-4 sm:px-8 py-3 rounded-xl flex items-center gap-2.5 transition-all duration-500",
                                        "text-sm sm:text-base font-medium z-10",
                                        isActive ? "text-white" : "text-slate-400 hover:text-white"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className={cn(
                                                "absolute inset-0 rounded-xl bg-gradient-to-r shadow-lg",
                                                catColors.bg,
                                                catColors.glow
                                            )}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <Icon className={cn("relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300", isActive ? "scale-110" : "")} />
                                    <span className="relative z-10 whitespace-nowrap">
                                        {t.servicePricing.tabs[categoryKey]}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <p className="text-center text-sm sm:text-base text-slate-500 mb-10 sm:mb-12">
                    Các Gói Dịch Vụ
                </p>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Category Intro */}
                        <div className="text-center mb-12 sm:mb-16">
                            <span className={cn("text-5xl sm:text-6xl mb-4 block", colors.text)}>
                                {activeCategory === 'mobileApp' && <Smartphone strokeWidth={1} className="w-16 h-16 sm:w-20 sm:h-20 mx-auto opacity-80" />}
                                {activeCategory === 'website' && <Globe strokeWidth={1} className="w-16 h-16 sm:w-20 sm:h-20 mx-auto opacity-80" />}
                                {activeCategory === 'aiAgent' && <Bot strokeWidth={1} className="w-16 h-16 sm:w-20 sm:h-20 mx-auto opacity-80" />}
                                {activeCategory === 'automation' && <Zap strokeWidth={1} className="w-16 h-16 sm:w-20 sm:h-20 mx-auto opacity-80" />}
                            </span>
                            {currentCategory.heading && (
                                <p className="text-sm sm:text-base font-semibold tracking-wide text-slate-400 mb-3 uppercase">
                                    {currentCategory.heading}
                                </p>
                            )}
                            <h3 className="text-xl sm:text-2xl text-slate-300 font-medium leading-relaxed break-words">
                                {currentCategory.description}
                            </h3>
                        </div>

                        {/* Cards Grid */}
                        <div className={pricingGridClass}>
                            {currentCategory.packages.map((pkg, index) => {
                                const normalizedPrice = pkg.price.toLowerCase();
                                const isContactPrice = normalizedPrice.includes('liên hệ') || normalizedPrice.includes('contact');
                                const isLastCardCentered = packageCount === 4 && index === packageCount - 1 && isThreeColumnLayout;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className={cn(
                                            "group relative flex flex-col h-full rounded-2xl sm:rounded-3xl transition-all duration-300 hover:transform hover:-translate-y-1 min-w-0",
                                            isLastCardCentered && "2xl:col-start-2",
                                            pkg.highlighted
                                                ? `bg-slate-900/80 border-2 ${colors.border} shadow-2xl ${colors.glow}`
                                                : "bg-slate-900/40 border border-slate-800 hover:bg-slate-900/60"
                                        )}
                                    >
                                        {/* highlighted glow */}
                                        {pkg.highlighted && (
                                            <div className={cn("absolute inset-0 opacity-20 bg-gradient-to-b rounded-2xl pointer-events-none", colors.bg)} />
                                        )}

                                        <div className="p-4 sm:p-6 lg:p-8 flex flex-col h-full relative z-10">
                                            {/* Package Header */}
                                            <div className="mb-4 sm:mb-6">
                                                <h4 className={cn("text-lg sm:text-xl font-bold mb-2 break-words leading-tight", colors.text)}>
                                                    {pkg.name}
                                                </h4>
                                                <div className="h-1 w-8 sm:w-12 rounded-full bg-slate-700/50 mb-2 sm:mb-3" />
                                                <p className="text-sm sm:text-base text-slate-400 leading-relaxed break-words">
                                                    {pkg.subtitle}
                                                </p>
                                            </div>

                                            {/* Price Tag */}
                                            <div className="mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl bg-slate-950/80 border border-slate-800/50 text-center relative overflow-hidden group-hover:border-slate-700 transition-colors">
                                                <div className={cn("absolute inset-0 opacity-10 bg-gradient-to-br transition-opacity duration-300", colors.bg)} />
                                                <div className={cn("text-lg sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r", colors.priceGradient)}>
                                                    {pkg.price}
                                                </div>
                                                {pkg.priceNote && (
                                                    <div className="text-[10px] sm:text-xs text-slate-400 mt-1 font-medium">
                                                        {pkg.priceNote}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Features List */}
                                            <div className="flex-grow space-y-3 mb-8 min-w-0">
                                                {pkg.features.map((feature, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, y: 8 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: idx * 0.04 }}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <div className={cn("mt-1 p-0.5 rounded-full bg-slate-800/80 shrink-0", colors.text)}>
                                                            <CheckCircle className="w-4 h-4 sm:w-4 sm:h-4" strokeWidth={3} />
                                                        </div>
                                                        <span className="text-sm sm:text-[15px] text-slate-300 leading-relaxed break-words">
                                                            {feature}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="mt-auto space-y-3">
                                                {/* CTA Button */}
                                                <a href="https://zalo.me/0584503333" target="_blank" rel="noopener noreferrer" className="block w-full">
                                                    <button
                                                        className={cn(
                                                            "w-full py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2",
                                                            pkg.highlighted
                                                                ? `bg-gradient-to-r ${colors.bg} text-white`
                                                                : "bg-slate-800 text-white hover:bg-slate-700"
                                                        )}
                                                    >
                                                        {isContactPrice
                                                            ? t.servicePricing.ctaButtonContact
                                                            : t.servicePricing.ctaButton}
                                                        <ArrowRight size={16} />
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {currentCategory.note && (
                            <div className="mt-8 sm:mt-10 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 sm:p-6">
                                <p className="text-sm sm:text-base text-slate-300 leading-relaxed break-words">
                                    {currentCategory.note}
                                </p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </Container>
        </section>
    );
}
