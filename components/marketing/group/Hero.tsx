"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Users, Play } from "lucide-react";
import { useFacebookGroupTranslations } from "@/lib/i18n/pages/facebook-group";

export default function Hero() {
    const t = useFacebookGroupTranslations();

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-32">
            {/* Background Image/Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/image/group/hero.jpg"
                    alt="Group Community Network"
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
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold mb-6 backdrop-blur-md">
                        <Sparkles size={16} />
                        <span>{t.hero.badge}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        {t.hero.title}{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            {t.hero.titleHighlight1}
                        </span>
                        <br />
                        {t.hero.titleLine2}{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            {t.hero.titleHighlight2}
                        </span>
                    </h1>

                    {/* Description - Merged from Intro */}
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-4 leading-relaxed">
                        {t.hero.description}{" "}
                        <strong className="text-white">{t.hero.descriptionHighlight}</strong>.{" "}
                        {t.hero.descriptionLine2}
                    </p>

                    {/* Extra Info from Intro */}
                    <p className="text-base text-slate-400 max-w-2xl mx-auto mb-10">
                        {t.intro.paragraph1Start}{" "}
                        <strong className="text-cyan-400">{t.intro.paragraph1Highlight}</strong>{" "}
                        {t.intro.paragraph1End}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link
                            href="/lien-he"
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold text-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transform hover:-translate-y-1"
                        >
                            {t.hero.ctaPrimary}
                        </Link>
                        <a
                            href="tel:0584503333"
                            className="px-8 py-4 rounded-full bg-slate-800/80 border border-slate-700 text-white font-bold text-lg hover:bg-slate-700 transition-all backdrop-blur-md flex items-center gap-2"
                        >
                            {t.hero.ctaSecondary}
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <span className="text-xs uppercase tracking-widest">Cuộn xuống</span>
                <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-cyan-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
