"use client";

import { motion } from "framer-motion";
import { useFanpageTranslations } from "@/lib/i18n/pages/fanpage";

export default function Hero() {
    const t = useFanpageTranslations();

    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/image/fanpage_hero.png"
                    alt="Global Fanpage Connection"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 font-bold mb-6 backdrop-blur-md">
                        {t.hero.badge}
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        {t.hero.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">{t.hero.titleHighlight}</span> <br />
                        {t.hero.titleLine2}
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {t.hero.description} <strong>{t.hero.descriptionHighlight}</strong>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/lien-he"
                            className="px-8 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-lg transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transform hover:-translate-y-1 text-center"
                        >
                            {t.hero.ctaPrimary}
                        </a>
                        <a
                            href="https://zalo.me/0923451469"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 rounded-full border border-slate-600 bg-slate-900/50 hover:bg-slate-800 text-white font-bold text-lg transition-all backdrop-blur-md flex items-center justify-center gap-2"
                        >
                            {t.hero.ctaSecondary}
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-green-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
