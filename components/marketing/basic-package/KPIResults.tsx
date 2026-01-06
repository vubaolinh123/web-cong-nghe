"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, HeartHandshake } from "lucide-react";
import { useMarketingBasicTranslations } from "@/lib/i18n/pages/marketing-basic";

const icons = [TrendingUp, Target, HeartHandshake];
const colors = ["from-green-400 to-emerald-500", "from-orange-400 to-red-500", "from-cyan-400 to-blue-500"];

export default function KPIResults() {
    const t = useMarketingBasicTranslations();

    return (
        <section className="py-16 sm:py-20 bg-slate-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
                        {t.kpiResults.title}{" "}
                        <span className="text-orange-400">{t.kpiResults.titleHighlight}</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {t.kpiResults.results.map((result, index) => {
                        const Icon = icons[index];
                        const color = colors[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/30 transition-all text-center group"
                            >
                                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <div className={`text-4xl sm:text-5xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-3`}>
                                    {result.value}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                                    {result.title}
                                </h3>
                                <p className="text-slate-400 text-sm sm:text-base">
                                    {result.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
