"use client";

import { motion } from "framer-motion";
import { useTiktokShopTranslations } from "@/lib/i18n/pages/tiktok-shop";

export default function Hero() {
    const t = useTiktokShopTranslations();

    return (
        <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-32">
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
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                            {t.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">{t.hero.titleHighlight}</span> <br />
                            {t.hero.titleLine2} <span className="text-white">{t.hero.titleHighlight2}</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            {t.hero.description}
                            <strong> {t.hero.descriptionHighlight}</strong>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <a
                                href="/lien-he"
                                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold text-base sm:text-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transform hover:-translate-y-1 text-center overflow-hidden"
                            >
                                <span className="relative z-10">{t.hero.ctaPrimary}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                            </a>
                            <a
                                href="tel:+84584503333"
                                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-500/40 hover:border-pink-400/60 text-white font-bold text-base sm:text-lg transition-all backdrop-blur-md flex items-center justify-center gap-2 sm:gap-3 hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] overflow-hidden"
                            >
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="relative z-10 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent font-extrabold">{t.hero.ctaSecondary}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-pink-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
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
