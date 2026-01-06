"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ChevronDown, Sparkles } from "lucide-react";
import { useMarketingFullPackageTranslations } from "@/lib/i18n/pages/marketing-full-package";

export default function Hero() {
    const t = useMarketingFullPackageTranslations();

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
            {/* Background Image - Full screen with better visibility */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/image/marketing_hero_new.png"
                    alt="Marketing Hero"
                    className="w-full h-full object-cover opacity-50 md:opacity-40"
                />
                {/* Gradient overlays for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-24 md:pt-32 md:pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 md:space-y-8"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 backdrop-blur-md"
                    >
                        <span className="text-sm sm:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                            {t.hero.badge}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                        {t.hero.title} <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                            {t.hero.titleHighlight}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        {t.hero.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
                        <a
                            href="/lien-he"
                            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold text-base sm:text-lg transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transform hover:-translate-y-1 text-center overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5" />
                                {t.hero.ctaPrimary}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                        </a>
                        <Link
                            href="#case-studies"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-slate-500/50 bg-slate-800/30 hover:bg-slate-800/50 text-white font-bold text-base sm:text-lg transition-all backdrop-blur-md text-center hover:border-cyan-500/50"
                        >
                            {t.hero.ctaSecondary}
                        </Link>
                    </div>

                    {/* Trust Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-10 max-w-2xl mx-auto"
                    >
                        {t.hero.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-slate-400 mt-1">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2 cursor-pointer"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-xs sm:text-sm font-medium">{t.hero.scrollIndicator}</span>
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
        </section>
    );
}
