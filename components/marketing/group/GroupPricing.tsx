"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Star } from "lucide-react";
import { useFacebookGroupTranslations } from "@/lib/i18n/pages/facebook-group";

export default function GroupPricing() {
    const t = useFacebookGroupTranslations();

    const plans = t.groupPricing.plans.map((plan, index) => ({
        ...plan,
        highlight: index === 1,
    }));

    return (
        <section className="py-20 bg-slate-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2" />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-bold mb-6">
                        <Sparkles size={16} />
                        <span>BẢNG GIÁ DỊCH VỤ</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {t.groupPricing.title}{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            {t.groupPricing.titleHighlight}
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        {t.groupPricing.description}
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-2xl overflow-hidden flex flex-col border transition-all duration-300 relative backdrop-blur-sm ${plan.highlight
                                    ? 'bg-gradient-to-b from-purple-900/50 to-slate-900/80 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.2)] transform md:-translate-y-4 z-10'
                                    : 'bg-slate-900/60 border-slate-700 hover:border-cyan-500/50'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold text-center py-1.5 absolute top-0 left-0 right-0 z-20 flex items-center justify-center gap-1">
                                    <Star size={12} fill="currentColor" />
                                    {t.groupPricing.recommendedBadge}
                                </div>
                            )}

                            <div className={`p-6 text-center ${plan.highlight ? 'pt-10' : ''}`}>
                                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' : 'text-cyan-400'}`}>
                                    {plan.price}
                                </h3>
                                <span className="text-xs text-slate-400">{plan.sales}</span>
                            </div>

                            <div className="p-6 flex-grow border-t border-slate-700/50">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => {
                                        const isBold = feature.includes("SEO TOP") || feature.includes("THÀNH VIÊN") || feature.includes("MEMBERS");
                                        return (
                                            <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-300">
                                                <Check size={14} className={plan.highlight ? "text-purple-400" : "text-cyan-400"} style={{ flexShrink: 0, marginTop: '2px' }} />
                                                <span className={isBold ? "text-white font-bold" : ""}>{feature}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <div className="p-4 mt-auto">
                                <a
                                    href="/lien-he"
                                    className={`block w-full py-3 rounded-full font-bold text-center transition-all ${plan.highlight
                                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]'
                                            : 'bg-slate-800 text-white hover:bg-cyan-600'
                                        }`}
                                >
                                    Liên Hệ Tư Vấn
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
