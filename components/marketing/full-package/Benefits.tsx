"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Target, Zap } from "lucide-react";
import { useMarketingFullPackageTranslations } from "@/lib/i18n/pages/marketing-full-package";

const benefitIcons = [TrendingUp, Target, ShieldCheck, Zap];

export default function Benefits() {
    const t = useMarketingFullPackageTranslations();

    const benefits = t.benefits.items.map((item, index) => ({
        icon: benefitIcons[index],
        title: item.title,
        desc: item.desc,
    }));

    return (
        <section className="py-20 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-3xl rounded-full" />
                        <img
                            src="/image/real/growth_success.jpg"
                            alt="Growth Success"
                            className="relative z-10 w-full rounded-2xl shadow-2xl border border-blue-500/30"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                            {t.benefits.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                {t.benefits.titleHighlight}
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {benefits.map((item, index) => (
                                <div key={index} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
