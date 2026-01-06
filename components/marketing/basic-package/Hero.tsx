"use client";

import { motion } from "framer-motion";
import { Zap, Phone, ArrowRight } from "lucide-react";
import { useMarketingBasicTranslations } from "@/lib/i18n/pages/marketing-basic";

export default function Hero() {
    const t = useMarketingBasicTranslations();

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-slate-950 to-red-600/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30">
                        <Zap className="w-5 h-5 text-orange-400" />
                        <span className="text-sm font-bold text-orange-400">{t.hero.badge}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
                        {t.hero.title} <br />
                        <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                            {t.hero.titleHighlight}
                        </span>
                    </h1>

                    {/* Price */}
                    <div className="space-y-2">
                        <div className="text-slate-400 line-through text-lg">
                            {t.hero.originalPrice} VNĐ
                        </div>
                        <div className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                            {t.hero.price} <span className="text-2xl sm:text-3xl">VNĐ</span>
                        </div>
                    </div>

                    {/* Duration */}
                    <div className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-medium">
                        {t.hero.duration}
                    </div>

                    {/* Setup Time */}
                    <p className="text-slate-400 text-lg">
                        ⚡ {t.hero.setupTime}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a
                            href="/lien-he"
                            className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg transition-all shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            {t.hero.ctaPrimary}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="tel:+84584503333"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-orange-500/40 bg-orange-500/10 text-orange-400 font-bold text-lg transition-all hover:bg-orange-500/20 flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            {t.hero.ctaSecondary}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
