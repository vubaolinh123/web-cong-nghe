"use client";

import { motion } from "framer-motion";
import { useTiktokShopTranslations } from "@/lib/i18n/pages/tiktok-shop";

export default function Hero() {
    const t = useTiktokShopTranslations();

    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-32">
            {/* TikTok Style Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-600/20 via-black to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-600/20 via-black to-black" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 font-bold mb-6 backdrop-blur-md animate-pulse">
                            {t.hero.badge}
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            {t.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">{t.hero.titleHighlight}</span> <br />
                            {t.hero.titleLine2} <span className="text-white">{t.hero.titleHighlight2}</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            {t.hero.description}
                            <strong> {t.hero.descriptionHighlight}</strong>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/lien-he"
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold text-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] transform hover:-translate-y-1 text-center"
                            >
                                {t.hero.ctaPrimary}
                            </a>
                            <a
                                href="tel:0923451469"
                                className="px-8 py-4 rounded-full border border-pink-500/50 bg-pink-900/10 hover:bg-pink-900/30 text-pink-400 font-bold text-lg transition-all backdrop-blur-md flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                            >
                                {t.hero.ctaSecondary}
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-full max-w-[500px] aspect-square">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 rounded-full blur-[60px] animate-pulse" />
                            <img
                                src="/image/tiktok_hero.png"
                                alt="TikTok Shop Growth"
                                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] animate-float relative z-10"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
