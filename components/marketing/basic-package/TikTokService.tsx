"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useMarketingBasicTranslations } from "@/lib/i18n/pages/marketing-basic";

export default function TikTokService() {
    const t = useMarketingBasicTranslations();

    return (
        <section className="py-16 sm:py-20 bg-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Content - appears first on mobile, second on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 order-2 lg:order-1"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                            {t.tiktok.title}{" "}
                            <span className="text-pink-400">{t.tiktok.titleHighlight}</span>
                        </h2>
                        <p className="text-slate-400 text-lg">
                            {t.tiktok.description}
                        </p>
                        <div className="space-y-3">
                            {t.tiktok.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                    <span className="text-slate-300 text-sm sm:text-base">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-[60px]" />
                        <img
                            src="/image/basic_tiktok.png"
                            alt="TikTok Marketing"
                            className="w-full max-w-md mx-auto relative z-10 drop-shadow-2xl rounded-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
