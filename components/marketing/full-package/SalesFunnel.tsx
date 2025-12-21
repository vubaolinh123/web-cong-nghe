"use client";

import { motion } from "framer-motion";
import { useMarketingFullPackageTranslations } from "@/lib/i18n/pages/marketing-full-package";

const stageColors = [
    { color: "bg-yellow-500", textColor: "text-yellow-400" },
    { color: "bg-orange-500", textColor: "text-orange-400" },
    { color: "bg-red-500", textColor: "text-red-400" },
];

export default function SalesFunnel() {
    const t = useMarketingFullPackageTranslations();

    const funnelStages = t.salesFunnel.stages.map((stage, index) => ({
        ...stageColors[index],
        title: stage.title,
        subtitle: stage.subtitle,
        desc: stage.desc,
    }));

    return (
        <section className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/5 blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        {t.salesFunnel.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                            {t.salesFunnel.titleHighlight}
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed"
                    >
                        {t.salesFunnel.description}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Visual Representation */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-blue-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-1000" />
                        <img
                            src="/image/real/sales_funnel.jpg"
                            alt="3D Sales Funnel Visualization"
                            className="relative z-10 w-full rounded-2xl shadow-2xl border border-slate-700/50 hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-slate-700">
                            <p className="text-white text-sm md:text-base font-medium text-center">
                                {t.salesFunnel.imageCaption}
                            </p>
                        </div>
                    </motion.div>

                    {/* Stages Detail */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="relative pl-8 border-l-2 border-slate-800 space-y-12">
                            {funnelStages.map((stage, index) => (
                                <div key={index} className="relative group">
                                    <span className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-slate-950 ${stage.color} group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(255,255,255,0.3)]`} />

                                    <h3 className={`text-2xl font-bold ${stage.textColor} mb-2`}>{stage.title}</h3>
                                    <div className="text-white font-medium mb-3 uppercase tracking-wide text-sm bg-slate-800/50 inline-block px-3 py-1 rounded-md">
                                        {stage.subtitle}
                                    </div>
                                    <p className="text-slate-400 leading-relaxed text-base">
                                        {stage.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-blue-900/30 to-slate-900 p-6 rounded-2xl border border-blue-500/20 mt-8">
                            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                {t.salesFunnel.strategyTitle}
                            </h4>
                            <p className="text-slate-400 text-sm">
                                {t.salesFunnel.strategyDesc}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
