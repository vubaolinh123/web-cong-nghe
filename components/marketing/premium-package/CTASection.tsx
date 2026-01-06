"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { useMarketingPremiumTranslations } from "@/lib/i18n/pages/marketing-premium";

export default function CTASection() {
    const t = useMarketingPremiumTranslations();

    return (
        <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight">
                        {t.cta.title} <br />
                        <span className="text-yellow-300">{t.cta.titleHighlight}</span>
                    </h2>

                    <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
                        {t.cta.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <a
                            href="tel:+84584503333"
                            className="group flex items-center gap-3 px-8 py-4 bg-white text-cyan-600 font-bold text-lg rounded-xl hover:bg-yellow-50 transition-all shadow-xl hover:shadow-2xl"
                        >
                            <Phone className="w-6 h-6" />
                            {t.cta.phone}
                        </a>
                        <a
                            href="/lien-he"
                            className="group flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all"
                        >
                            {t.cta.button}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
