"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useMarketingFullPackageTranslations } from "@/lib/i18n/pages/marketing-full-package";

export default function Hero() {
    const t = useMarketingFullPackageTranslations();

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-20">
            {/* Background Image/Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/image/real/marketing_hero.jpg"
                    alt="Marketing Hero"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                        <Sparkles size={16} />
                        <span>{t.hero.badge}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        {t.hero.title} <br />
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            {t.hero.titleHighlight}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/lien-he"
                            className="px-8 py-4 rounded-full bg-white text-blue-900 font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            {t.hero.ctaPrimary}
                        </a>
                        <Link
                            href="/lien-he"
                            className="px-8 py-4 rounded-full bg-slate-800 border border-slate-700 text-white font-bold text-lg hover:bg-slate-700 transition-all flex items-center gap-2"
                        >
                            {t.hero.ctaSecondary} <ArrowRight size={20} />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-xs uppercase tracking-widest">{t.hero.scrollIndicator}</span>
                <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-cyan-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
